const fs = require('fs');
const path = require('path');

const files = [
  'src/pages/RetailManagement.jsx',
  'src/components/cards/ProductCard.jsx',
  'src/components/cards/GalleryCard.jsx',
  'src/components/home/HeroSlider.jsx',
  'src/components/cards/BlogCard.jsx',
  'src/components/home/Categories.jsx'
];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.split('object-contain bg-brand-light').join('object-cover');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Reverted ${file}`);
  }
});
