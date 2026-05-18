const fs = require('fs');

let content = fs.readFileSync('app/page.tsx', 'utf8');

// The HTML starts after `__html: \`` and ends before `\n      }}`
const htmlStartMarker = '__html: `\\n';
const htmlEndMarker = '\\n`\\n        }}';

let startIndex = content.indexOf('__html: `');
if (startIndex === -1) {
  console.log('Could not find dangerouslySetInnerHTML in app/page.tsx');
  process.exit(1);
}
startIndex += '__html: `\n'.length;

let endIndex = content.indexOf('`\n        }}');
if (endIndex === -1) {
  endIndex = content.lastIndexOf('`\n');
}

let rawHtml = content.substring(startIndex, endIndex);

// A helper to convert HTML to JSX
function htmlToJsx(html) {
  return html
    .replace(/class=/g, 'className=')
    .replace(/<img([^>]+)>/g, (match, p1) => {
      if (p1.endsWith('/')) return match;
      return `<img${p1} />`;
    })
    .replace(/<input([^>]+)>/g, (match, p1) => {
      if (p1.endsWith('/')) return match;
      return `<input${p1} />`;
    })
    .replace(/<br([^>]*?)>/g, (match, p1) => {
      if (p1.endsWith('/')) return match;
      return `<br${p1} />`;
    })
    .replace(/<hr([^>]*?)>/g, (match, p1) => {
      if (p1.endsWith('/')) return match;
      return `<hr${p1} />`;
    })
    .replace(/for=/g, 'htmlFor=')
    // Fix inline styles like style="background-image: url(...);"
    .replace(/style="([^"]+)"/g, (match, styleString) => {
      const styles = styleString.split(';').filter(s => s.trim());
      const styleObj = {};
      styles.forEach(s => {
        let [key, value] = s.split(':');
        if (!key || !value) return;
        key = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
        styleObj[key] = value.trim();
      });
      return `style={${JSON.stringify(styleObj)}}`;
    });
}

// Find all sections
const sectionRegex = /<!-- =+ (.*?) Start =+ -->([\s\S]*?)<!-- =+ \1 End =+ -->/g;
let match;
const sections = [];

while ((match = sectionRegex.exec(rawHtml)) !== null) {
  sections.push({
    name: match[1].trim(),
    html: match[2].trim(),
    fullMatch: match[0]
  });
}

console.log(`Found ${sections.length} sections.`);

let newImports = '';
let newComponents = '';

sections.forEach(section => {
  // Convert name like "Explore Course Section" to "ExploreCourseSection"
  const componentName = section.name
    .replace(/Section/ig, '')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
    
  if (!componentName) return;

  const jsxCode = `import React from 'react';\nimport Link from 'next/link';\n\nconst ${componentName} = () => {\n  return (\n    <>\n      ${htmlToJsx(section.html)}\n    </>\n  );\n};\n\nexport default ${componentName};\n`;
  
  fs.writeFileSync(`components/home/${componentName}.tsx`, jsxCode);
  console.log(`Created ${componentName}.tsx`);
  
  newImports += `import ${componentName} from '@/components/home/${componentName}';\n`;
  newComponents += `      <${componentName} />\n`;
  
  // Remove from rawHtml
  rawHtml = rawHtml.replace(section.fullMatch, '');
});

// Write updated app/page.tsx
const newPageContent = content.replace(/import Banner from '@\/components\/home\/Banner';\nimport BrandSlider from '@\/components\/home\/BrandSlider';\nimport Features from '@\/components\/home\/Features';\n/, 
  `import Banner from '@/components/home/Banner';\nimport BrandSlider from '@/components/home/BrandSlider';\nimport Features from '@/components/home/Features';\n${newImports}`)
  .replace(/<Features \/>/, `<Features />\n${newComponents}`)
  .replace(content.substring(startIndex, endIndex), rawHtml);

fs.writeFileSync('app/page.tsx', newPageContent);
console.log('Updated app/page.tsx');
