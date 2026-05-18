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

      if (content.includes('tabIndex=')) {
        console.log(`Converting tabIndex string to number (with negative support) in: ${filePath}`);
        content = content.replace(/tabIndex="(-?\d+)"/g, 'tabIndex={$1}');
        if (content !== originalContent) {
          fs.writeFileSync(filePath, content);
        }
      }
    }
  });
}

processDir(path.join(__dirname, 'app'));
processDir(path.join(__dirname, 'components'));
console.log('Finished converting all tabIndex attributes!');
