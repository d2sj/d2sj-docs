import { defineConfig } from "vitepress";
import { set_sidebar } from "./utils/auto_sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/d2sj-docs/",
  head: [["link", { rel: "icon", href: "/d2sj-docs/logo.svg" }]],
  title: "我的文档项目",
  description: "A VitePress Site",
  themeConfig: {
    //TODO outlineTitle已过时,查看如何使用outline替代 
    outlineTitle:"目录",
    outline:[2,6],
    logo:'/logo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      //link一般传绝对路径
      {
        text: "家",
        items: [
          { text: "首页", link: "/" },
          { text: "markdown示例", link: "/markdown-examples" },
        ],
      },
      { text: "示例", link: "/markdown-examples" },
      { text: "自动生成侧边栏", link: "/front-end/react/" },
      { text: "自动生成侧边栏2", link: "/backend/rebbitmq/" },
    ],

    // sidebar: [
    //   {
    //     text: "Examples",
    //     items: [
    //       { text: "Markdown 演示", link: "/markdown-examples" },
    //       { text: "Runtime API 演示", link: "/api-examples" },
    //     ],
    //   },
    //   {
    //     text: "Examples",
    //     items: [
    //       { text: "Markdown 演示", link: "/markdown-examples" },
    //       { text: "Runtime API 演示", link: "/api-examples" },
    //     ],
    //   },
    // ],
    sidebar: {
       "/front-end/react": set_sidebar("/front-end/react") ,
       "/backend/rebbitmq": set_sidebar("backend/rebbitmq") ,
    },

    socialLinks: [{ icon: "github", link: "https://github.com/d2sj" }],
    footer: {
      copyright: "Copyright © 2024-present d2sj",
    },

       // 设置搜索框的样式
       search: {
        provider: "local",
        options: {
          translations: {
            button: {
              buttonText: "搜索文档",
              buttonAriaLabel: "搜索文档",
            },
            modal: {
              noResultsText: "无法找到相关结果",
              resetButtonTitle: "清除查询条件",
              footer: {
                selectText: "选择",
                navigateText: "切换",
              },
            },
          },
        },
      },
  },
});
