import { defineConfig } from 'vitepress'
import en from "./en.mjs"
import zh_cn from "./zh-cn.mjs"

export default defineConfig (
    {
        locales: {
            root: {
                label: "English",
                lang: en.lang,
                themeConfig: en.themeConfig,
                description: en.description
            },
            zh_CN: {
                label: "简体中文",
                lang: zh_cn.lang,
                themeConfig: zh_cn.themeConfig,
                description: zh_cn.description
            }
        }
}
)