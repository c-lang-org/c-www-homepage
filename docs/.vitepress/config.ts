import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'C Programming Language',
  description: 'Official homepage for the C programming language',
  lang: 'en-US',
  cleanUrls: true,
  lastUpdated: true,
  
  head: [
    ['link', { rel: 'icon', href: '/c-logo.svg' }],
    ['meta', { name: 'theme-color', content: '#3c4cc4' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:site_name', content: 'C Programming Language' }],
    ['meta', { property: 'og:image', content: '/c-logo.svg' }],
  ],

  themeConfig: {
    logo: '/c-logo.svg',
    siteTitle: 'The lingua franca of programming',
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Community', link: '/community' },
      { text: 'Resources', link: '/resources' },
      { text: 'Tools', link: '/tools' },
      { text: 'FAQ', link: '/faq' },
      { text: 'Contact', link: '/contact' }
    ],

    sidebar: false,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/c-lang' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-2026 C Standards Committee'
    },

    search: {
      provider: 'local'
    }
  },

  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  }
})
