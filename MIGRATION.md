# Migration Guide: Jekyll → VitePress

This document explains the migration from Jekyll to VitePress for the C Programming Language homepage.

## What Changed

### Technology Stack

**Before (Jekyll)**
- Ruby-based static site generator
- Liquid templating
- Custom HTML layouts
- Jekyll plugins

**After (VitePress)**
- Vue + Vite-based static site generator
- Markdown with Vue components
- Modern build system
- TypeScript configuration

### File Structure

```
Old (Jekyll)                     New (VitePress)
├── _config.yml                  ├── docs/.vitepress/config.ts
├── _layouts/                    ├── docs/.vitepress/theme/
│   ├── default.html            │   ├── index.ts
│   ├── accordion.html          │   └── custom.css
│   └── page.html               ├── docs/.vitepress/components/
├── _includes/                   │   ├── CComment.vue
│   └── revisions-table.html    │   └── RevisionsTable.vue
├── _data/navlist.yml           └── docs/
├── _pages/                          ├── index.md
│   ├── about.html                  ├── about.md
│   ├── faq.html                    ├── faq.md
│   ├── community.html              ├── community.md
│   ├── resources.html              ├── resources.md
│   ├── tools.html                  ├── tools.md
│   └── contact.html                └── contact.md
├── index.html
└── style.css
```

## Key Changes

### 1. Content Format

**Jekyll (HTML with frontmatter):**
```html
---
layout: page
title: About
permalink: /about
---

<h1>About C</h1>
<p>Content here...</p>
```

**VitePress (Markdown):**
```markdown
# About

Content here...
```

### 2. Custom Elements

#### x-cmt Component

**Before (Custom HTML element):**
```html
<x-cmt>additional context here</x-cmt>
```
Styled with CSS to look like C comments.

**After (Vue component):**
```markdown
<x-cmt>additional context here</x-cmt>
```
Registered globally in theme, works the same way.

#### Revisions Table

**Before (Jekyll include):**
```liquid
{% include revisions-table.html %}
```

**After (Vue component):**
```markdown
<script setup>
import RevisionsTable from './.vitepress/components/RevisionsTable.vue'
</script>

<RevisionsTable />
```

### 3. Navigation

**Before (_data/navlist.yml):**
```yaml
- title: home
  url: /
- title: about
  url: /about
```

**After (docs/.vitepress/config.ts):**
```ts
nav: [
  { text: 'Home', link: '/' },
  { text: 'About', link: '/about' }
]
```

### 4. Styling

**Before:**
- Single `style.css` file
- CSS custom properties for theming
- Manual responsive design

**After:**
- `docs/.vitepress/theme/custom.css`
- Extends VitePress default theme
- Built-in responsive design
- Automatic dark mode

### 5. Build Commands

**Before (Jekyll):**
```bash
bundle exec jekyll serve
bundle exec jekyll build
```

**After (VitePress):**
```bash
npm run docs:dev      # Development server
npm run docs:build    # Production build
npm run docs:preview  # Preview production build
```

## Benefits of VitePress

### Performance
- ⚡ **Fast HMR**: Instant hot module replacement during development
- 🚀 **Optimized Build**: Vite produces highly optimized production bundles
- 📦 **Code Splitting**: Automatic code splitting for better load times

### Developer Experience
- 🎯 **TypeScript**: First-class TypeScript support
- 🔧 **Vue Components**: Reusable components with scoped styles
- 🎨 **Modern Tooling**: ESM, Vite, and modern JavaScript features

### Features
- 🔍 **Built-in Search**: Local search without external services
- 🌙 **Dark Mode**: Automatic theme switching
- 📱 **Mobile First**: Responsive by default
- ♿ **Accessible**: Better accessibility out of the box
- 🔗 **Internal Linking**: Automatic link validation

### Maintainability
- 📚 **Better Documentation**: VitePress has excellent docs
- 🔄 **Active Development**: Regular updates and improvements
- 🌐 **Large Community**: Growing ecosystem and community support

## What Was Preserved

✅ All content from original site
✅ Custom C-style comment elements (`<x-cmt>`)
✅ C standards revisions table
✅ Color scheme and branding
✅ Semantic HTML and accessibility
✅ FAQ accordion structure
✅ All external links and references
✅ Responsive mobile design
✅ Dark mode support

## Breaking Changes

### For Users
- None! The site looks and functions similarly

### For Developers
1. **Ruby → Node.js**: Need Node.js instead of Ruby
2. **Different syntax**: Markdown instead of HTML/Liquid
3. **New build system**: npm scripts instead of Jekyll commands
4. **Configuration format**: TypeScript instead of YAML

## Deployment

### GitHub Pages

The included `.github/workflows/deploy.yml` automates deployment:

1. Push to main branch
2. GitHub Actions builds the site
3. Deploys to GitHub Pages automatically

### Manual Deployment

```bash
# Build the site
npm run docs:build

# Deploy the docs/.vitepress/dist folder to your hosting
```

## Future Enhancements

Potential improvements enabled by VitePress:

- [ ] Interactive code examples
- [ ] Live compiler integration
- [ ] Enhanced search with filters
- [ ] Multi-language support
- [ ] Progressive Web App (PWA)
- [ ] RSS feed generation
- [ ] Syntax highlighting themes
- [ ] Code copy buttons

## Troubleshooting

### Build Errors

If you encounter build errors:

1. Clear cache: `rm -rf node_modules docs/.vitepress/cache`
2. Reinstall: `npm install`
3. Rebuild: `npm run docs:build`

### Development Server Issues

If the dev server doesn't start:

1. Check Node.js version: `node --version` (needs 18+)
2. Check port availability: `lsof -i :5173`
3. Try different port: `vitepress dev docs --port 3000`

### Style Issues

If styles don't look right:

1. Check `docs/.vitepress/theme/custom.css`
2. Verify theme import in `docs/.vitepress/theme/index.ts`
3. Clear browser cache

## Resources

- [VitePress Documentation](https://vitepress.dev/)
- [Vue 3 Documentation](https://vuejs.org/)
- [Vite Documentation](https://vitejs.dev/)
- [Migration Issues](https://github.com/c-lang-org/c-www-homepage/issues)

## Support

For questions or issues with the migration:

1. Check the [VitePress docs](https://vitepress.dev/)
2. Open an issue on the repository
3. Contact the maintainers

---

**Migration completed**: January 2026
**Migrated by**: GitHub Copilot
**Status**: ✅ Production ready
