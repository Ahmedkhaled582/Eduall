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

      if (content.includes('aria-value')) {
        console.log(`Converting aria-value string attributes to JSX numbers in: ${filePath}`);
        content = content.replace(/aria-valuenow="(\d+)"/g, 'aria-valuenow={$1}');
        content = content.replace(/aria-valuemin="(\d+)"/g, 'aria-valuemin={$1}');
        content = content.replace(/aria-valuemax="(\d+)"/g, 'aria-valuemax={$1}');
        if (content !== originalContent) {
          fs.writeFileSync(filePath, content);
        }
      }
    }
  });
}

processDir(path.join(__dirname, 'app'));
processDir(path.join(__dirname, 'components'));
console.log('Finished converting all progress bar aria attributes!');
