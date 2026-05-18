const fs = require('fs');
const path = require('path');

const pagePath = 'app/page.tsx';
let content = fs.readFileSync(pagePath, 'utf8');

// The main HTML starts after '__html: `' and ends before '`'
const startToken = '__html: `';
const endToken = '`';

const startIdx = content.indexOf(startToken);
if (startIdx === -1) {
  console.error('Could not find dangerouslySetInnerHTML start!');
  process.exit(1);
}

const htmlOffset = startIdx + startToken.length;
const endIdx = content.lastIndexOf(endToken);
if (endIdx === -1) {
  console.error('Could not find dangerouslySetInnerHTML end!');
  process.exit(1);
}

let rawHtml = content.substring(htmlOffset, endIdx);

// Remove sidebar overlay comments and div completely
rawHtml = rawHtml.replace(/<!--==================== Sidebar Overlay End ====================-->\s*<div class="side-overlay"><\/div>\s*<!--==================== Sidebar Overlay End ====================-->/g, '');

// Remove progress wrap comments and svg completely
rawHtml = rawHtml.replace(/<!-- ==================== Scroll to Top End Here ==================== -->[\s\S]*?<!-- ==================== Scroll to Top End Here ==================== -->/g, '');

// List of all sections to extract
const sections = [
  {
    name: 'Preloader',
    dir: 'layout',
    start: '<!--==================== Preloader Start ====================-->',
    end: '<!--==================== Preloader End ====================-->'
  },
  {
    name: 'Overlay',
    dir: 'layout',
    start: '<!--==================== Overlay Start ====================-->',
    end: '<!--==================== Overlay End ====================-->'
  },
  {
    name: 'MobileMenu',
    dir: 'layout',
    start: '<!-- ==================== Mobile Menu Start Here ==================== -->',
    end: '<!-- ==================== Mobile Menu End Here ==================== -->'
  },
  {
    name: 'Header',
    dir: 'layout',
    start: '<!-- ==================== Header Start Here ==================== -->',
    end: '<!-- ==================== Header End Here ==================== -->'
  },
  {
    name: 'Banner',
    dir: 'home',
    start: '<!-- ========================= Banner Section Start =============================== -->',
    end: '<!-- ========================= Banner SEction End =============================== -->'
  },
  {
    name: 'BrandSlider',
    dir: 'home',
    start: '<!-- ========================== Brand Section Start =========================== -->',
    end: '<!-- ========================== Brand Section End =========================== -->'
  },
  {
    name: 'Features',
    dir: 'home',
    start: '<!-- ============================= Features Section Start ============================== -->',
    end: '<!-- ============================= Features Section End ============================== -->'
  },
  {
    name: 'ExploreCourse',
    dir: 'home',
    start: '<!-- ================================== Explore Course Section Start =========================== -->',
    end: '<!-- ================================== Explore Course Section End =========================== -->'
  },
  {
    name: 'About',
    dir: 'home',
    start: '<!-- ================================ About Section Start ==================================== -->',
    end: '<!-- ================================ About Section End ==================================== -->'
  },
  {
    name: 'ChooseUs',
    dir: 'home',
    start: '<!-- =========================== CHoose Us Section Start ================================ -->',
    end: '<!-- =========================== CHoose Us Section End ================================ -->'
  },
  {
    name: 'Counter',
    dir: 'home',
    start: '<!-- ========================== Counter Section start ============================== -->',
    end: '<!-- ========================== Counter Section End ============================== -->'
  },
  {
    name: 'Testimonials',
    dir: 'home',
    start: '<!-- ================================= testimonials Section Start ========================================= -->',
    end: '<!-- ================================= testimonials Section End ========================================= -->'
  },
  {
    name: 'Blog',
    dir: 'home',
    start: '<!-- ================================= Blog Section Start ========================================= -->',
    end: '<!-- ================================= Blog Section End ========================================= -->'
  },
  {
    name: 'Certificate',
    dir: 'home',
    start: '<!-- ================================= Certificate Section Start ================================= -->',
    end: '<!-- ================================= Certificate Section End ================================= -->'
  },
  {
    name: 'Footer',
    dir: 'home',
    start: '<!-- ==================== Footer Start Here ==================== -->',
    end: '<!-- ==================== Footer End Here ==================== -->'
  }
];

function cleanHtmlToJsx(html) {
  return html
    .replace(/class=/g, 'className=')
    .replace(/for=/g, 'htmlFor=')
    // self-closing tags
    .replace(/<img([^>]+)>/g, (m, p1) => p1.endsWith('/') ? m : `<img${p1} />`)
    .replace(/<input([^>]+)>/g, (m, p1) => p1.endsWith('/') ? m : `<input${p1} />`)
    .replace(/<br([^>]*?)>/g, (m, p1) => p1.endsWith('/') ? m : `<br${p1} />`)
    .replace(/<hr([^>]*?)>/g, (m, p1) => p1.endsWith('/') ? m : `<hr${p1} />`)
    // inline styles conversion style="background-image: url(...)" to style={{backgroundImage: "url(...)"}}
    .replace(/style="([^"]+)"/g, (match, styleString) => {
      const styles = styleString.split(';').filter(s => s.trim());
      const styleObj = {};
      styles.forEach(s => {
        let [key, value] = s.split(':');
        if (!key || !value) return;
        key = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
        // join back values in case of urls with :
        const valStr = s.substring(s.indexOf(':') + 1).trim();
        styleObj[key] = valStr;
      });
      return `style={${JSON.stringify(styleObj)}}`;
    })
    .replace(/href="javascript:void\(0\)"/g, 'href="#"')
    .replace(/autocomplete=/g, 'autoComplete=')
    .replace(/readonly=/g, 'readOnly=');
}

let importStatements = '';
let componentRenders = '';

// Include ProgressWrap
importStatements += `import ProgressWrap from '@/components/layout/ProgressWrap';\n`;

sections.forEach(sec => {
  const startIdx = rawHtml.indexOf(sec.start);
  const endIdx = rawHtml.indexOf(sec.end);

  if (startIdx !== -1 && endIdx !== -1) {
    const fullHtml = rawHtml.substring(startIdx, endIdx + sec.end.length);
    const innerHtml = rawHtml.substring(startIdx + sec.start.length, endIdx).trim();

    // Convert to JSX
    const jsxContent = cleanHtmlToJsx(innerHtml);

    // Create JSX file
    const fileContent = `'use client';
import React from 'react';
import Link from 'next/link';

const ${sec.name} = () => {
  return (
    <>
      ${jsxContent}
    </>
  );
};

export default ${sec.name};
`;

    const componentDir = path.join('components', sec.dir);
    if (!fs.existsSync(componentDir)) {
      fs.mkdirSync(componentDir, { recursive: true });
    }

    fs.writeFileSync(path.join(componentDir, `${sec.name}.tsx`), fileContent);
    console.log(`Created ${sec.name}.tsx in ${sec.dir}`);

    importStatements += `import ${sec.name} from '@/components/${sec.dir}/${sec.name}';\n`;
    
    // special layout additions around components
    if (sec.name === 'Preloader') {
      componentRenders += `      <Preloader />\n`;
      componentRenders += `      <div className="side-overlay"></div>\n`;
      componentRenders += `      <ProgressWrap />\n`;
    } else {
      componentRenders += `      <${sec.name} />\n`;
    }

    // Remove the section from rawHtml so it won't be duplicated
    rawHtml = rawHtml.replace(fullHtml, '');
  } else {
    console.log(`Could not find markers for ${sec.name}`);
  }
});

// Any leftover HTML that wasn't matched can be rendered inside dangerouslySetInnerHTML if there is any,
const cleanedLeftover = rawHtml.trim();
let leftoverBlock = '';
if (cleanedLeftover) {
  console.log(`Leftover HTML length: ${cleanedLeftover.length}`);
  leftoverBlock = `
      <div
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: \`${cleanedLeftover.replace(/`/g, '\\`').replace(/\${/g, '\\${')}\`
        }}
      />`;
}

const finalPageCode = `import React from 'react';
${importStatements}

export const metadata = {
  title: "EduAll - LMS, Tutors, Education & Online Course Html Template",
};

export default function Page() {
  return (
    <>
${componentRenders}${leftoverBlock}
    </>
  );
}
`;

fs.writeFileSync(pagePath, finalPageCode);
console.log('Successfully refactored app/page.tsx!');
