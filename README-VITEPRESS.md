# C Programming Language Homepage - VitePress

This is the official homepage for the C programming language (c-lang.org), now powered by VitePress for a modern, professional look.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run docs:dev
```

The site will be available at `http://localhost:5173/`

### Build

```bash
# Build for production
npm run docs:build

# Preview production build
npm run docs:preview
```

## 📁 Project Structure

```
docs/
├── .vitepress/
│   ├── config.ts              # VitePress configuration
│   ├── theme/
│   │   ├── index.ts           # Custom theme setup
│   │   └── custom.css         # Custom styles
│   └── components/
│       ├── CComment.vue       # Custom comment component
│       └── RevisionsTable.vue # C standards table
├── index.md                   # Home page
├── about.md                   # About C
├── community.md               # Community resources
├── contact.md                 # Contact information
├── faq.md                     # FAQ
├── resources.md               # Learning resources
└── tools.md                   # Development tools
```

## 🎨 Features

- **Modern Design**: Clean, professional VitePress theme with custom styling
- **Dark Mode**: Automatic light/dark theme support
- **Responsive**: Mobile-friendly navigation and layout
- **Custom Components**: 
  - `<x-cmt>` - C-style comments for inline annotations
  - `<RevisionsTable>` - Interactive C standards revision table
- **Search**: Built-in local search functionality
- **Accessibility**: Semantic HTML and keyboard navigation support
- **Fast**: Optimized build with Vite

## 🛠️ Customization

### Theme Colors

Edit `docs/.vitepress/theme/custom.css` to customize colors and styling:

```css
:root {
  --vp-c-brand-1: #3c4cc4;
  --vp-c-brand-2: #1473ad;
  --vp-c-brand-3: #1e02dd;
}
```

### Navigation

Update navigation menu in `docs/.vitepress/config.ts`:

```ts
nav: [
  { text: 'Home', link: '/' },
  { text: 'About', link: '/about' },
  // Add more items...
]
```

## 📝 Content

All content is written in Markdown with support for:

- Standard Markdown syntax
- Vue components
- HTML (when needed for complex layouts)
- Code blocks with syntax highlighting

### Using Custom Components

**C-style comments:**
```markdown
<x-cmt>This appears as /* This appears as ... */</x-cmt>
```

**Revisions table:**
```markdown
<RevisionsTable />
```

## 🔧 Development

### Adding New Pages

1. Create a new `.md` file in `docs/`
2. Add frontmatter if needed
3. Update navigation in `docs/.vitepress/config.ts`

### Styling

- Global styles: `docs/.vitepress/theme/custom.css`
- Component styles: Inside each `.vue` component file

## 📚 Resources

- [VitePress Documentation](https://vitepress.dev/)
- [Vue 3 Documentation](https://vuejs.org/)
- [Markdown Guide](https://www.markdownguide.org/)

## 📄 License

MIT License - Copyright © 2025-2026 C Standards Committee
