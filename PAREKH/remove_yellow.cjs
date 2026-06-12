const fs = require('fs');
const path = require('path');

const replacements = [
  {
    file: 'src/pages/RetailManagement.jsx',
    replace: [
      ['bg-brand-gold text-brand-darkbrown', 'bg-brand-maroon text-white'],
      ['hover:bg-white', 'hover:bg-red-900']
    ]
  },
  {
    file: 'src/pages/NoticeBoard.jsx',
    replace: [
      ['text-brand-gold', 'text-brand-maroon']
    ]
  },
  {
    file: 'src/pages/EQuotation.jsx',
    replace: [
      ['bg-brand-gold text-brand-darkbrown', 'bg-brand-maroon text-white'],
      ['hover:bg-yellow-500', 'hover:bg-red-900']
    ]
  },
  {
    file: 'src/pages/EAuction.jsx',
    replace: [
      ['text-brand-gold', 'text-brand-light']
    ]
  },
  {
    file: 'src/index.css',
    replace: [
      ['--color-brand-gold: #FFD700;', '']
    ]
  },
  {
    file: 'src/components/ui/SectionTitle.jsx',
    replace: [
      ['bg-brand-gold', 'bg-brand-maroon']
    ]
  },
  {
    file: 'src/components/ui/PageHeader.jsx',
    replace: [
      ['hover:text-brand-gold', 'hover:text-white'],
      ['text-brand-gold', 'text-brand-light']
    ]
  },
  {
    file: 'src/components/layout/Navbar.jsx',
    replace: [
      ['text-brand-gold', 'text-brand-maroon']
    ]
  },
  {
    file: 'src/components/home/HeroSlider.jsx',
    replace: [
      ['bg-brand-gold text-brand-darkbrown', 'bg-brand-maroon text-white'],
      ['hover:bg-white', 'hover:bg-red-900'],
      ['bg-brand-gold w-8', 'bg-brand-maroon w-8']
    ]
  },
  {
    file: 'src/components/home/Highlights.jsx',
    replace: [
      ['text-brand-gold', 'text-brand-light']
    ]
  },
  {
    file: 'src/components/layout/Footer.jsx',
    replace: [
      ['text-brand-gold', 'text-white']
    ]
  },
  {
    file: 'src/components/cards/ReviewCard.jsx',
    replace: [
      ['text-brand-gold', 'text-brand-maroon']
    ]
  },
  {
    file: 'src/components/cards/ProductCard.jsx',
    replace: [
      ['text-brand-gold', 'text-brand-maroon']
    ]
  }
];

replacements.forEach(({ file, replace }) => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    replace.forEach(([search, replaceVal]) => {
      content = content.split(search).join(replaceVal);
    });
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  } else {
    console.log(`File not found: ${file}`);
  }
});
