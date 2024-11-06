import { defineConfig } from "vitepress";
import { set_sidebar } from "./utils/auto_sidebar";

// https://vitepress.dev/reference/site-config
//站点级别选项
export default defineConfig({
  //根路径,应始终使用/开头和结尾;base会自动添加到其他选项中以/开头的所有URL前面,因此只需指定一次
  base: "/d2sj-docs/",
  //head在网页head中添加元素
  //网页标签页logo
  head: [["link", { rel: "icon", href: "/d2sj-docs/svg/bug.svg" }]],
  //设置站点默认语言,默认为中文
  lang: "zh-CN",
  //网页左上角标题,它还将用作所有单独页面标题的后缀,除非定义了titleTemplate
  title: "d2sj的文档记录",
  /**
   * 自定义每个页面的标题后缀,例 titleTemplate:'d2sj's document '
   * 完全自定义标题展现,:title表示根据.md文件中第一个<h1>标题中推断出的文本,例 titleTemplate:':title ****'
   * 设置为false禁用标题后缀
   */
  titleTemplate: "d2sj",
  //网页简介
  description: "A VitePress Site",
  //删除url中.html后缀
  cleanUrls: true,
  //指定源目录,默认情况下与项目根目录相同,srcDir是相当于项目根目录解析的,如果修改了源目录,则所有路由均需要对应修改,否则会404
  srcDir: ".",
  //排除应作为源内容输出的.md文件
  srcExclude: ["**/README.md", "**/TODO.md"],
  //项目的构建输出位置,默认./.vitepress/dist
  outDir: "./.vitepress/dist",
  //放置生成的静态资源的目录,应位于outDir内,并相对于它进行解析
  assetsDir: "static",
  //白天黑夜模式切换,默认为true显示为默认色,配置为dark默认为深色,配置为false禁止用户切换主题
  appearance: "dark",
  //是否使用git获取每个页面最后更新的时间戳,默认为false
  lastUpdated: true,
  //路由重写,将a路径在浏览器url上显示为b路径,(若路径重写,则自定义方法,用于自动生成左侧菜单的路径也需要同步修改)
  // rewrites: {
  //   'docs/zh/normal/vitepress.md': '/zh/index.md'
  // },
  //主题级选项
  themeConfig: {
    //网页左上角logo
    logo: {
      light: "/svg/bug.svg",
      dark: "/svg/bug.svg",
      alt: "/svg/bug.svg",
    },
    //替换导航中默认站点标题,当设置为false时禁用导航栏中标题,这在logo已经包含标题文本时很有用
    // siteTitle:false,

    

    outline: {
      //右侧菜单标题
      label: "目录",
      //右侧菜单显示层级
      level: [2, 6],
    },

    //导航菜单栏配置
    nav: [
      //link一般传绝对路径
      //导航菜单栏下拉列表
      {
        text: "正常版",
        items: [
          { text: "首页", link: "/docs/zh/normal/index" },
          { text: "vitepress", link: "/docs/zh/normal/vitepress" },
          { text: "正则表达式", link: "/docs/zh/normal/正则表达式" },
          { text: "函数式编程", link: "/docs/zh/normal/函数式编程" },
          { text: "单元测试", link: "/docs/zh/normal/单元测试" },
          { text: "debian12.7", link: "/docs/zh/normal/debian12" },
          { text: "IntelliJ IDEA", link: "/docs/zh/normal/IntelliJ IDEA" },
        ],
      },
      {
        text: "傻瓜版",
        items: [
          { text: "首页", link: "/docs/zh/clever/index" },
          { text: "vitepress傻瓜搭建", link: "/docs/zh/clever/vitepress文档网站搭建" },
        ],
      }, 
      //导航菜单
      {
        text: "实用网站",
        link: "/docs/zh/practical-software-official-website/",
      },
    ],

    //
    

    //自定义方法,用于自动生成左侧菜单.上面路径为路由,下面路径为实际文件路径
    sidebar: {
      "/docs/zh/clever": set_sidebar(
        "/docs/zh/clever"
      ),
      "/docs/zh/normal": set_sidebar(
        "/docs/zh/normal"
      ),
      "/docs/zh/practical-software-official-website": set_sidebar(
        "/docs/zh/practical-software-official-website"
      ),
    },
    //右上角社交账号链接
    socialLinks: [
      //默认格式
      { icon: "github", link: "https://github.com/d2sj" },
      //不支持国内应用图标展示,需自定义图标
      //https://www.iconfont.cn/直接搜索指定应用图标即可
      {
        icon: {
          svg: '<svg t="1722685083462" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4232" width="200" height="200"><path d="M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62 189.62 0 0 0-189.62 189.645V771.15c0 13.977 11.316 25.293 25.294 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z" fill="#C71D23" p-id="4233"></path></svg>',
        },
        link: "https://gitee.com/d2sj_cn",
      },
    ],
    //页脚配置,因设计原因,仅当页面不包含侧边栏时展示页脚
    footer: {
      //提示信息
      message: "Released under the MIT License.",
      //版权信息
      copyright: "Copyright © 2024-present d2sj",
    },
    //最后更新时间戳自定义文本
    lastUpdatedText: "最后更新时间戳自定义文本",

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

    // search: {
    //   provider: 'local',
    //   options: {
    //     // appId: '...',
    //     // apiKey: '...',
    //     // indexName: '...',
    //     // locales: {
    //       // zh: {
    //         placeholder: '搜索文档',
    //         translations: {
    //           button: {
    //             buttonText: '搜索文档',
    //             buttonAriaLabel: '搜索文档'
    //           },
    //           modal: {
    //             searchBox: {
    //               resetButtonTitle: '清除查询条件',
    //               resetButtonAriaLabel: '清除查询条件',
    //               cancelButtonText: '取消',
    //               cancelButtonAriaLabel: '取消'
    //             },
    //             startScreen: {
    //               recentSearchesTitle: '搜索历史',
    //               noRecentSearchesText: '没有搜索历史',
    //               saveRecentSearchButtonTitle: '保存至搜索历史',
    //               removeRecentSearchButtonTitle: '从搜索历史中移除',
    //               favoriteSearchesTitle: '收藏',
    //               removeFavoriteSearchButtonTitle: '从收藏中移除'
    //             },
    //             errorScreen: {
    //               titleText: '无法获取结果',
    //               helpText: '你可能需要检查你的网络连接'
    //             },
    //             footer: {
    //               selectText: '选择',
    //               navigateText: '切换',
    //               closeText: '关闭',
    //               searchByText: '搜索提供者'
    //             },
    //             noResultsScreen: {
    //               noResultsText: '无法找到相关结果',
    //               suggestedQueryText: '你可以尝试查询',
    //               reportMissingResultsText: '你认为该查询应该有结果？',
    //               reportMissingResultsLinkText: '点击反馈'
    //             }
    //           }
    //         }
    //       // }
    //     // }
    //   }
    // }
  },
});
