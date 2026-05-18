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
      let originalContent = content;

      // 1. Fix unclosed comments at the bottom of the files
      if (content.includes('<!--')) {
        console.log(`Fixing unclosed comment in: ${filePath}`);
        content = content.replace(/<!--[\s\S]*?(?=<Footer|<\/|\/>)/g, '');
      }

      // 2. Fix the double </td> closing tag typo
      if (content.includes('(3 Reviews)</td>\n                                    </td>')) {
        console.log(`Fixing double td in: ${filePath}`);
        content = content.replace(/\(3 Reviews\)<\/td>\n\s*<\/td>/g, '(3 Reviews)</td>');
      }
      if (content.includes('(3 Reviews)</td>\n                                        </td>')) {
        console.log(`Fixing double td (indented) in: ${filePath}`);
        content = content.replace(/\(3 Reviews\)<\/td>\n\s*<\/td>/g, '(3 Reviews)</td>');
      }

      if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
      }
    }
  });
}

processDir(path.join(__dirname, 'app'));
processDir(path.join(__dirname, 'components'));
console.log('Finished fixing all compilation issues!');
