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

console.log(`Found ${pageFiles.length} pages to refactor.`);

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

pageFiles.forEach(filePath => {
  const content = fs.readFileSync(filePath, 'utf8');

  // Skip if it doesn't use dangerouslySetInnerHTML
  if (!content.includes('dangerouslySetInnerHTML')) {
    skippedFiles.push({ path: filePath, reason: 'Does not use dangerouslySetInnerHTML' });
    skippedCount++;
    return;
  }

  // Find start and end comments for the page content
  const headerEndToken = 'Header End Here ==================== -->';
  const footerStartToken = '<!-- ==================== Footer Start Here ==================== -->';

  let startIdx = content.indexOf(headerEndToken);
  let endIdx = content.indexOf(footerStartToken);

  if (startIdx === -1) {
    // Try without equals
    startIdx = content.indexOf('Header End Here');
  }
  if (endIdx === -1) {
    endIdx = content.indexOf('Footer Start Here');
  }

  if (startIdx === -1 || endIdx === -1) {
    skippedFiles.push({ path: filePath, reason: `Could not find markers (start: ${startIdx !== -1}, end: ${endIdx !== -1})` });
    skippedCount++;
    return;
  }

  // Offset startIdx past the headerEndToken
  const actualStart = content.indexOf('-->', startIdx) + '-->'.length;
  const innerHtml = content.substring(actualStart, endIdx).trim();

  // Convert inner html to JSX
  const jsxContent = cleanHtmlToJsx(innerHtml);

  // Extract metadata if exists
  let metadataStr = '';
  const metadataMatch = content.match(/export const metadata[\s\S]*?};/);
  if (metadataMatch) {
    metadataStr = metadataMatch[0];
  } else {
    // Fallback default metadata
    const relativeFolder = path.basename(path.dirname(filePath));
    const title = relativeFolder.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    metadataStr = `export const metadata = {
  title: "EduAll - ${title}",
};`;
  }

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
  console.log(`Refactored: ${path.relative(__dirname, filePath)}`);
});

console.log(`\nRefactoring complete!`);
console.log(`Successfully refactored: ${refactoredCount} pages.`);
console.log(`Skipped: ${skippedCount} pages.`);
if (skippedFiles.length > 0) {
  console.log('\nSkipped files list:');
  skippedFiles.forEach(f => console.log(`- ${path.relative(__dirname, f.path)}: ${f.reason}`));
}
