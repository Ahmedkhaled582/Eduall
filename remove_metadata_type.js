const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      processDir(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      let content = fs.readFileSync(filePath, 'utf8');
      if (content.includes('export const metadata: Metadata =')) {
        console.log(`Removing Metadata type annotation in: ${filePath}`);
        content = content.replace(/export const metadata: Metadata =/g, 'export const metadata =');
        fs.writeFileSync(filePath, content);
      }
    }
  });
}

processDir(path.join(__dirname, 'app'));
processDir(path.join(__dirname, 'components'));
console.log('Finished removing Metadata type annotations!');
