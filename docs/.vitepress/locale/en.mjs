import { defineConfig } from 'vitepress'

export default defineConfig ({
    lang: "en",
    themeConfig: {
        description: "Make SukiSU Great Again!",
        nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/guide/install' }
        ],
        sidebar: [
        {
            text: 'Get started',
            collapsed: true,
            items: [
            { text: 'Install', link: '/guide/install' },
            { text: 'Kernel hooks',items: [
                { text: 'manual hook', link: '/guide/manual-hooks' }
            ]},
            ]
        }
        ],
    }
    }
)