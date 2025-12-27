import { defineConfig } from 'vitepress'

export default defineConfig ({
    lang: "zh-CN",
    themeConfig: {
        description: "让SukiSU再次伟大！",
        nav: [
        { text: '主页', link: '/zh_CN/' },
        { text: '指导', link: '/zh_CN/guide/install' }
        ],

        sidebar: [
        {
            text: '开始使用',
            collapsed: true,
            items: [
            { text: '安装', link: '/zh_CN/guide/install' },
            { text: '内核钩子',items: [
                { text: 'manual hook', link: '/zh_CN/guide/manual-hooks' }
            ]},
            ]
        }
        ],
    }
    }
)