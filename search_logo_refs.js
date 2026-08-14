const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, 'assets', 'index-COP6vcKC.js'), 'utf8');

const regex = /logo/gi;
let match;
let count = 0;
while ((match = regex.exec(content)) !== null && count < 20) {
  const start = Math.max(0, match.index - 50);
  const end = Math.min(content.length, match.index + match[0].length + 50);
  console.log(`Match ${count + 1}: ...${content.slice(start, end).replace(/\n/g, ' ')}...`);
  count++;
}
