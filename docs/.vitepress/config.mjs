import { defineConfig } from 'vitepress'
import Font from 'vite-plugin-font'
import { GitChangelog,GitChangelogMarkdownSection } from '@nolebase/vitepress-plugin-git-changelog/vite'
import { BiDirectionalLinks } from '@nolebase/markdown-it-bi-directional-links'
import { InlineLinkPreviewElementTransform } from '@nolebase/vitepress-plugin-inline-link-preview/markdown-it'
import mdAutoSpacing from 'markdown-it-autospace'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ReSukiSU",
  description: "A more stable fork of SukiSU",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ReSukiSU/ReSukiSU' }
    ]
  },
  markdown: {
    config: (md) => {
      md.use(BiDirectionalLinks())
      md.use(InlineLinkPreviewElementTransform)
      md.use(mdAutoSpacing,{
        pangu: true,
        mojikumi: true,
      })
    }
  },
  vite: {
    plugins: [
      Font.vite({}),
      GitChangelog({
        repoURL: () => 'https://github.com/ReSukiSU/resukisu-docs'
      }),
      GitChangelogMarkdownSection(),
    ],
    optimizeDeps: {
      exclude: [
        '@nolebase/vitepress-plugin-enhanced-readabilities/client',
        '@nolebase/vitepress-plugin-inline-link-preview/client',
        'vitepress',
        '@nolebase/ui',
      ],
    },
    ssr: {
      noExternal: [
        '@nolebase/vitepress-plugin-enhanced-readabilities',
        '@nolebase/vitepress-plugin-inline-link-preview',
        '@nolebase/ui',
      ],
    },
  }
})
