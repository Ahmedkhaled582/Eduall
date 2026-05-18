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
      if (content.includes('<!--')) {
        console.log(`Fixing comments in: ${filePath}`);
        // Replace <!-- ... --> with {/* ... */}
        const newContent = content.replace(/<!--([\s\S]*?)-->/g, (match, p1) => {
          return `{/*${p1}*/}`;
        });
        fs.writeFileSync(filePath, newContent);
      }
    }
  });
}

processDir(path.join(__dirname, 'app'));
processDir(path.join(__dirname, 'components'));
console.log('Finished fixing comments!');
