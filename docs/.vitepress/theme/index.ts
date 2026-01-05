// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import CComment from '../components/CComment.vue'
import RevisionsTable from '../components/RevisionsTable.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // Register custom components globally
    app.component('x-cmt', CComment)
    app.component('RevisionsTable', RevisionsTable)
  }
} satisfies Theme
