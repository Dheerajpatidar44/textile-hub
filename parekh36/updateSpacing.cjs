const fs = require('fs');
const path = require('path');

const dir = path.join(process.cwd(), 'src', 'pages');
const files = fs.readdirSync(dir);

for (const file of files) {
  if (file === 'Home.jsx') continue;
  if (!file.endsWith('.jsx')) continue;
  
  const fullPath = path.join(dir, file);
  let content = fs.readFileSync(fullPath, 'utf8');
  let changed = false;
  
  // Find any pt- class in the first 250 characters (usually the wrapper)
  let prefix = content.substring(0, 500);
  const ptMatch = prefix.match(/pt-\d+|pt-\[\d+px\]/);
  if (ptMatch) {
    prefix = prefix.replace(ptMatch[0], 'pt-[60px]');
    content = prefix + content.substring(500);
    changed = true;
  }

  // Also remove margin-bottom from the page title div if present to reduce gap further
  // Look for mb-12 or mb-16 near the h1 tag
  if (content.includes('mb-16">') && content.includes('<h1')) {
    content = content.replace('mb-16">', 'mb-6">');
    changed = true;
  } else if (content.includes('mb-12">') && content.includes('<h1')) {
    content = content.replace('mb-12">', 'mb-6">');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log('Updated', file);
  }
}
