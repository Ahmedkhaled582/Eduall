const fs = require('fs');
const path = require('path');

function getPageFiles(dir, files = []) {
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      getPageFiles(filePath, files);
    } else if (file === 'page.tsx') {
      files.push(filePath);
    }
  });
  return files;
}

const appDir = path.join(__dirname, 'app');
const pageFiles = getPageFiles(appDir).filter(f => f !== path.join(appDir, 'page.tsx'));

console.log(`Found ${pageFiles.length} pages total in app/.`);

function cleanHtmlToJsx(html) {
  return html
    .replace(/class=/g, 'className=')
    .replace(/for=/g, 'htmlFor=')
    // self-closing tags
    .replace(/<img([^>]+)>/g, (m, p1) => p1.endsWith('/') ? m : `<img${p1} />`)
    .replace(/<input([^>]+)>/g, (m, p1) => p1.endsWith('/') ? m : `<input${p1} />`)
    .replace(/<br([^>]*?)>/g, (m, p1) => p1.endsWith('/') ? m : `<br${p1} />`)
    .replace(/<hr([^>]*?)>/g, (m, p1) => p1.endsWith('/') ? m : `<hr${p1} />`)
    // inline styles conversion
    .replace(/style="([^"]+)"/g, (match, styleString) => {
      const styles = styleString.split(';').filter(s => s.trim());
      const styleObj = {};
      styles.forEach(s => {
        let [key, value] = s.split(':');
        if (!key || !value) return;
        key = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
        const valStr = s.substring(s.indexOf(':') + 1).trim();
        styleObj[key] = valStr;
      });
      return `style={${JSON.stringify(styleObj)}}`;
    })
    .replace(/href="javascript:void\(0\)"/g, 'href="#"')
    .replace(/autocomplete=/g, 'autoComplete=')
    .replace(/readonly=/g, 'readOnly=')
    .replace(/colspan=/g, 'colSpan=')
    .replace(/rowspan=/g, 'rowSpan=');
}

let refactoredCount = 0;
let skippedCount = 0;
const skippedFiles = [];

const headerEndTokens = [
  'Header End Here ==================== -->',
  'Header Two End ============================ -->',
  'Header End Here',
  'Header Two End',
  'Header Three End',
  'Header Four End',
  'Header Five End'
];

const footerStartTokens = [
  '<!-- ==================== Footer Start Here ==================== -->',
  '<!-- ============footer five section start============ -->',
  '<!-- ============footer five section start============= -->',
  '<!-- ============footer six section start============ -->',
  '<!-- ============footer six section start============= -->',
  'Footer Start Here',
  'Footer Start',
  'footer five section start',
  'footer six section start',
  '<!-- ==================== Footer End Here'
];

const mobileMenuEndTokens = [
  'Mobile Menu End Here ==================== -->',
  'Mobile Menu End Here',
  'Mobile Menu End'
];

const jqueryStartTokens = [
  '<!-- Jquery js -->',
  '<!-- Bootstrap Bundle Js -->',
  '<!-- Phosphor Icon Js -->',
  '<!-- Jquery',
  '<!-- Bootstrap'
];

pageFiles.forEach(filePath => {
  const content = fs.readFileSync(filePath, 'utf8');

  // Skip if it doesn't use dangerouslySetInnerHTML
  if (!content.includes('dangerouslySetInnerHTML')) {
    // Already refactored, skip
    return;
  }

  const isDashboard = filePath.includes('dashbord') || 
                      filePath.includes('dashboard') || 
                      filePath.includes('my-profile') || 
                      filePath.includes('reviews');

  let metadataStr = '';
  const metadataMatch = content.match(/export const metadata[\s\S]*?};/);
  if (metadataMatch) {
    metadataStr = metadataMatch[0];
  } else {
    const relativeFolder = path.basename(path.dirname(filePath));
    const title = relativeFolder.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    metadataStr = `export const metadata = {
  title: "EduAll - ${title}",
};`;
  }

  if (isDashboard) {
    // Dashboard extraction logic: everything between Mobile Menu End and Jquery Start Comments
    let startIdx = -1;
    for (const token of mobileMenuEndTokens) {
      const idx = content.indexOf(token);
      if (idx !== -1) {
        startIdx = idx + token.length;
        break;
      }
    }

    if (startIdx === -1) {
      skippedFiles.push({ path: filePath, reason: 'Dashboard: Could not find Mobile Menu End token' });
      skippedCount++;
      return;
    }

    // Offset startIdx past '-->'
    const actualStart = content.indexOf('-->', startIdx) + '-->'.length;

    let endIdx = -1;
    for (const token of jqueryStartTokens) {
      const idx = content.indexOf(token);
      if (idx !== -1) {
        endIdx = idx;
        break;
      }
    }

    if (endIdx === -1) {
      // Look for last `}` before the end of rawHtml
      endIdx = content.lastIndexOf('`');
    }

    const innerHtml = content.substring(actualStart, endIdx).trim();
    const jsxContent = cleanHtmlToJsx(innerHtml);

    const newFileContent = `import React from 'react';
import Link from 'next/link';
import Preloader from '@/components/layout/Preloader';
import ProgressWrap from '@/components/layout/ProgressWrap';
import Overlay from '@/components/layout/Overlay';
import MobileMenu from '@/components/layout/MobileMenu';

${metadataStr}

export default function Page() {
  return (
    <>
      <Preloader />
      <div className="side-overlay"></div>
      <ProgressWrap />
      <Overlay />
      <MobileMenu />
      
      ${jsxContent}
    </>
  );
}
`;

    fs.writeFileSync(filePath, newFileContent);
    refactoredCount++;
    console.log(`Refactored Dashboard: ${path.relative(__dirname, filePath)}`);

  } else {
    // Normal page extraction logic
    let startIdx = -1;
    for (const token of headerEndTokens) {
      const idx = content.indexOf(token);
      if (idx !== -1) {
        startIdx = idx + token.length;
        break;
      }
    }

    let endIdx = -1;
    for (const token of footerStartTokens) {
      const idx = content.indexOf(token);
      if (idx !== -1) {
        endIdx = idx;
        break;
      }
    }

    if (startIdx === -1 || endIdx === -1) {
      skippedFiles.push({ path: filePath, reason: `Normal Page: Could not find markers (start: ${startIdx !== -1}, end: ${endIdx !== -1})` });
      skippedCount++;
      return;
    }

    const actualStart = content.indexOf('-->', startIdx) + '-->'.length;
    const innerHtml = content.substring(actualStart, endIdx).trim();
    const jsxContent = cleanHtmlToJsx(innerHtml);

    const newFileContent = `import React from 'react';
import Link from 'next/link';
import Preloader from '@/components/layout/Preloader';
import ProgressWrap from '@/components/layout/ProgressWrap';
import Overlay from '@/components/layout/Overlay';
import MobileMenu from '@/components/layout/MobileMenu';
import Header from '@/components/layout/Header';
import Footer from '@/components/home/Footer';

${metadataStr}

export default function Page() {
  return (
    <>
      <Preloader />
      <div className="side-overlay"></div>
      <ProgressWrap />
      <Overlay />
      <MobileMenu />
      <Header />
      
      ${jsxContent}
      
      <Footer />
    </>
  );
}
`;

    fs.writeFileSync(filePath, newFileContent);
    refactoredCount++;
    console.log(`Refactored Normal Page: ${path.relative(__dirname, filePath)}`);
  }
});

console.log(`\nRefactoring complete!`);
console.log(`Successfully refactored: ${refactoredCount} pages.`);
console.log(`Skipped: ${skippedCount} pages.`);
if (skippedFiles.length > 0) {
  console.log('\nSkipped files list:');
  skippedFiles.forEach(f => console.log(`- ${path.relative(__dirname, f.path)}: ${f.reason}`));
}
