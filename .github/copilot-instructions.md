# C Programming Language Homepage - AI Coding Instructions

## Project Overview
This is the **official homepage for the C programming language** (c-lang.org), approved by ISO/IEC JTC1/SC22/WG14. It's a Jekyll-based static site with a custom, accessibility-focused design.

## Architecture

### Jekyll Structure
- **Pages**: HTML files in `_pages/` with frontmatter define main content (about, faq, resources, etc.)
- **Layouts**: `_layouts/` contains templates:
  - `default.html` - base layout with navigation and auto-expanding `<details>` on anchor navigation
  - `accordion.html` - extends default for FAQ-style collapsible content with fold/unfold controls
  - `page.html` - simple content wrapper
- **Data**: `_data/navlist.yml` drives the navigation menu
- **Includes**: `_includes/revisions-table.html` generates the C standards version table

### Custom HTML Elements
- **`<x-cmt>`**: Custom element styled as C-style comments (`/* ... */`) for inline annotations. Used extensively for supplementary information.
  ```html
  <li>Example <x-cmt>additional context here</x-cmt></li>
  ```
- **`<details>/<summary>`**: Native HTML elements used for collapsible sections, especially in FAQ and accordion layouts

### CSS Conventions
- **CSS Variables**: Light/dark theme support via `--bg`, `--color`, `--color-a` in `:root` with `@media (prefers-color-scheme: dark)` override
- **Utility Classes**:
  - `.nobr` - prevents line breaks in spans (e.g., "K&R C", "C++98")
  - `.anchor-no-color` - removes link color inheritance for styled text
- **Custom Elements**: `x-cmt` styled as inline C-style comments with reduced opacity

## Development Workflow

### Local Testing
```bash
# Install dependencies (requires Ruby + Bundler)
bundle install

# Serve locally with live reload
bundle exec jekyll serve --livereload

# Build static site
bundle exec jekyll build
```

### Content Patterns

**Page Creation**: All pages use frontmatter with required fields:
```yaml
---
layout: page|accordion
title: Page Title
permalink: /path
---
```

**FAQ Items**: Use `<details>` with descriptive `<summary>` for questions:
```html
<details id="unique-anchor">
  <summary>Question text?</summary>
  <p>Answer content...</p>
  <x-cmt>Optional supplementary info</x-cmt>
</details>
```

**Navigation**: Edit `_data/navlist.yml` to add/modify menu items. Current page gets `.current` class automatically.

## Project-Specific Conventions

### Content Guidelines
- **Accessibility First**: Semantic HTML, keyboard navigation support, proper ARIA where needed
- **Standards Accuracy**: References to C standards (C89, C99, C11, C17, C23) must be precise. Use proper terminology from WG14 documents.
- **Historical Context**: When mentioning C history, check against existing content in [_pages/about.html](_pages/about.html) for consistency

### Typography
- Primary font: Serif (Times New Roman fallback)
- Monospace: Courier for `<code>`
- Non-breaking spaces: Use `&nbsp;` for "low-level", "K&R C", committee names
- Smart quotes: Configured in `_config.yml` kramdown settings

### JavaScript Behavior
- Hash navigation auto-expands `<details>` elements containing `:target` ([_layouts/default.html](_layouts/default.html#L62-L71))
- Accordion pages have fold/unfold controls via `detailsExpansion()` function

## Key Files

- [_config.yml](_config.yml) - Jekyll configuration, plugins, markdown settings
- [style.css](style.css) - All styles (no CSS preprocessor), ~400 lines, includes responsive nav
- [_data/navlist.yml](_data/navlist.yml) - Site navigation structure
- [_includes/revisions-table.html](_includes/revisions-table.html) - C standards revision table with ISO/IEC links

## Common Tasks

**Add a new page**:
1. Create `_pages/pagename.html` with frontmatter
2. Add entry to `_data/navlist.yml`
3. Use appropriate layout (`page` for simple content, `accordion` for FAQ-style)

**Update C standard information**: Edit [_includes/revisions-table.html](_includes/revisions-table.html) for version table

**Modify navigation**: Edit [_data/navlist.yml](_data/navlist.yml)

**Add FAQ entry**: Edit [_pages/faq.html](_pages/faq.html), follow existing `<details>` pattern with unique `id` for deep linking
