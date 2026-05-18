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

      // 1. Fix missing </li> tags in rating items
      content = content.replace(/(<li[^>]*><i[^>]*><\/i>)(?!\s*<\/li>)/g, '$1</li>');

      // 2. Fix unclosed <source> tags
      content = content.replace(/<source([^>]+)>/g, (match, p1) => {
        if (p1.trim().endsWith('/')) return match;
        return `<source${p1} />`;
      });

      // 3. Fix playsinline attribute
      content = content.replace(/playsinline/g, 'playsInline');

      if (content !== originalContent) {
        console.log(`Fixed syntax errors in: ${filePath}`);
        fs.writeFileSync(filePath, content);
      }
    }
  });
}

processDir(path.join(__dirname, 'app'));
processDir(path.join(__dirname, 'components'));
console.log('Finished fixing syntax/compilation errors!');
