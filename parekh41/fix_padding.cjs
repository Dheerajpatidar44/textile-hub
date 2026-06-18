const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/lenovo/Desktop/PAREKH 38/parekh34/src/pages';
const files = fs.readdirSync(dir);

files.forEach(f => {
  if (!f.endsWith('.jsx')) return;
  const p = path.join(dir, f);
  let c = fs.readFileSync(p, 'utf8');
  
  // Replace pt-16 (64px) with pt-[80px] to clear navbar properly
  c = c.replace(/className="pt-16 pb-20"/g, 'className="pt-[80px] pb-20"');
  
  // Replace inner pt-10 (40px) with pt-0 or pt-2 to remove the big gap above headings
  c = c.replace(/pt-10"/g, 'pt-0"');
  
  fs.writeFileSync(p, c);
  console.log('Updated ' + f);
});
