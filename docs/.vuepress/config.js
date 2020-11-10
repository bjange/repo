const nav = require('./config/nav.js');

module.exports = {
  title: "Ange-知识清单",
  description: 'Ange技术博客',                     //  描述,以 <meta> 标签渲染到页面html中
  base: '/repo/',                                 // eg：  '/<github仓库名>/'， 默认'/'

  // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  head: [
    //favicons，资源放在public文件夹
    ['link', { rel: 'icon', href: 'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200409124835.png' }],
    ['meta', { name: 'keywords', content: '个人,技术博客' }],
    ['meta', { name: 'theme-color', content: '#11a8cd' }],                              // 移动浏览器主题颜色
    // ['meta', { name: 'baidu-site-verification', content: '7F55weZDDc' }],             // 百度统计的站点拥有者验证
    // 移动端阻止页面缩放
    // ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no'}],
  ],
  markdown: {
    lineNumbers: true                                           // 代码行号
  },
  theme: 'vdoing',                                              // 使用依赖包主题
  // theme: require.resolve('../../theme-vdoing'),              // 使用本地主题
  // 主题配置
  themeConfig: { 
    nav,
    sidebarDepth: 2,                            // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    logo: '',                                   // 导航栏logo
    repo: 'bjange/repo',                        // 导航栏右侧生成Github链接
    searchMaxSuggestions: 6,                   // 搜索结果显示最大数
    lastUpdated: '上次更新',                     // 更新的时间，及前缀文字   string | boolean (取值为git提交时间)
    docsBranch: 'main',
    docsDir: 'docs',                            // 编辑的文件夹
    editLinks: false,                            // 启用编辑
    editLinkText: 'edit',
  //*** 以下配置是Vdoing主题改动和新增的配置 ***//
    category: false,                       // 是否打开分类功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含分类字段 2.页面中显示与分类相关的信息和模块 3.自动生成分类页面（在@pages文件夹）。如关闭，则反之。
    tag: false,                            // 是否打开标签功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含标签字段 2.页面中显示与标签相关的信息和模块 3.自动生成标签页面（在@pages文件夹）。如关闭，则反之。
    // archive: false,                        // 是否打开归档功能，默认true。 如打开，会做的事情有：1.自动生成归档页面（在@pages文件夹）。如关闭，则反之。
    // categoryText: '随笔',                  // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'
  // body背景大图，默认无。 单张图片 String || 多张图片 Array, 多张图片时每隔15秒换一张。
    // bodyBgImg: [
    //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175828.jpeg',
    //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175845.jpeg',
    //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175846.jpeg'
    // ],         
    // bodyBgImgOpacity: 0.5,          // body背景图透明度，选值 0 ~ 1.0, 默认0.5
    // titleBadge: false,           // 文章标题前的图标是否显示，默认true
    // titleBadgeIcons: [           // 文章标题前图标的地址，默认主题内置图标
    //   '图标地址1',
    //   '图标地址2'
    // ],
    // 文章内容块的背景风格，默认无. 1 => 方格 | 2 => 横线 | 3 => 竖线 | 4 => 左斜线 | 5 => 右斜线 | 6 => 点状
    //  contentBgStyle: 1, 
  // 最近更新栏
    updateBar: {
      showToArticle: false,            // 显示到文章页底部，默认true
      moreArticle: '/archives'        // “更多文章”跳转的页面，默认'/archives'
    },
    sidebarOpen: true,               // 初始状态是否打开侧边栏，默认true
    pageButton: false,                // 是否显示快捷翻页按钮，默认true
	
  // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义   
  // 温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
    // sidebar: 'structuring', 
    sidebar: { mode: 'structuring', collapsable: true }, 
    author: { // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, link: String}
      name: 'ange', // 必需
      link: 'https://github.com/bjange' // 可选的
    },
  //  blogger: { // 博主信息，显示在首页侧边栏
  //    avatar: 'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200103123203.jpg',
  //    name: '安歌',
  //    slogan: 'ccslogancccc'
  //  },
   social: { // 社交图标，显示于博主信息栏和页脚栏
      // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', 
      // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
     icons: [
       {
         iconClass: 'icon-youjian',
         title: '发邮件',
         link: 'mailto:666@qq.com'
       },
       {
         iconClass: 'icon-github',
         title: 'GitHub',
         link: 'https://github.com/bjange'
       },
       {
         iconClass: 'icon-erji',
         title: '听音乐',
         link: ''
       }
     ]
   },
  // 页脚信息
    footer: { 
      createYear: 2019,                     // 博客创建年份
      copyrightInfo: 'Ange',                // 博客版权信息，支持a标签
    }
  },

  // 插件
  plugins: [
    // [require('./plugins/love-me'), {                           // 鼠标点击爱心特效
    //   color: '#11a8cd',                                        // 爱心颜色，默认随机色
    //   excludeClassName: 'theme-vdoing-content'                 // 要排除元素的class, 默认空''
    // }],

    ['thirdparty-search', {               // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
      thirdparty: [                       // 可选，默认 []
        // {
        //   title: '在MDN中搜索',
        //   frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=',        // 搜索链接的前面部分
        //   behindUrl: ''                                                     // 搜索链接的后面部分，可选，默认 ''
        // },
        {
          title: '在GitHub中搜索',
          frontUrl: 'https://github.com/search?q=', // 搜索链接的前面部分
          behindUrl: '' // 搜索链接的后面部分，可选，默认 ''
        },
        {
          title: '在npm中搜索',
          frontUrl: 'https://www.npmjs.com/search?q=',
        },
        // {
        //   title: '在Runoob中搜索',
        //   frontUrl: 'https://www.runoob.com/?s=',
        // },
        // {
        //   title: '在Vue API中搜索',
        //   frontUrl: 'https://cn.vuejs.org/v2/api/#',
        // },
        {
          title: '在Bing中搜索',
          frontUrl: 'https://cn.bing.com/search?q='
        }
        // {
        //   title: '通过百度搜索本站的',
        //   frontUrl: 'https://www.baidu.com/s?wd=site%3Axugaoyi.com%20'
        // }
      ]
    }],

  //  'vuepress-plugin-baidu-autopush', // 百度自动推送

  // 代码块复制按钮
    ['one-click-copy', { 
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: '复制成功',           // default is 'Copy successfully and then paste it for use.'
      duration: 1000,                   // prompt message display time.
      showInMobile: false               // whether to display on the mobile side, default: false.
    }],

// demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
    ['demo-block', { 
      settings: {
        // jsLib: ['http://xxx'],                                               // 在线示例(jsfiddle, codepen)中的js依赖
        // cssLib: ['http://xxx'],                                              // 在线示例中的css依赖
        // vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js',             // 在线示例中的vue依赖
        jsfiddle: false,                       // 是否显示 jsfiddle 链接
        codepen: true,                         // 是否显示 codepen 链接
        horizontal: false                      // 是否展示为横向样式
      }
    }],

  // 放大图片
    [
      'vuepress-plugin-zooming', 
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)',                    // 排除class是no-zoom的图片
        options: {
          bgColor: 'rgba(0,0,0,0.6)'
        },
      },
    ],

  //  [
  //    'vuepress-plugin-baidu-tongji',                 // 百度统计
  //    {
  //      hm: '503f098e7e5b3a5b5d8c5fc2938af002'
  //    }
  //  ],

    [
      // 'vuepress-plugin-comment',                     // 评论
      // {
      //   choosen: 'valine',
      //   options: {
      //     el: '#valine-vuepress-comment',
      //     appId: 'qnS1jobNF7CROIQ0XYWBnVOH-gzGzoHsz',
      //     appKey: 'LIKa0ePqFMkglQfOkN0JNK6c',
      //     avatar: 'monsterid'
      //   }
      // },
      // {
      //   choosen: 'gitalk',
      //   options: {
      //     clientID: 'a6e1355287947096b88b',
      //     clientSecret: 'f0e77d070fabfcd5af95bebb82b2d574d7248d71',
      //     repo: 'blog-gitalk-comment',                 // GitHub 仓库
      //     owner: 'xugaoyi',                            // GitHub仓库所有者
      //     admin: ['xugaoyi'],                           // 对仓库有写权限的人
      //     // distractionFreeMode: true,
      //     pagerDirection: 'last',                       // 'first'正序 | 'last'倒序
      //     id: "<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>",        //  页面的唯一标识,长度不能超过50
      //     title: "「评论」<%- frontmatter.title %>",                                     // GitHub issue 的标题
      //     labels: ["Gitalk", "Comment"],                                                 // GitHub issue 的标签
      //     body: "页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>"        // GitHub issue 的内容
      //   }
      // }
    ],

    [
      '@vuepress/last-updated',                            // "上次更新"时间格式
      {
        transformer: (timestamp, lang) => {
          const moment = require('moment')                  // https://momentjs.com/
          moment.locale();         // zh-cn
          return moment(timestamp).format('lll');  // 2020年11月10日 20:37
          // return moment(timestamp).format('YYYY/MM/DD, HH:mm');    // 2020/11/10, 08:22:12 pm

        }
      }
    ]
  ],

  // configureWebpack: {
  //   //webpack别名 如![Image from alias](~@alias/image.png)
  //   resolve: {
  //     alias: {
  //       '@alias': 'path/to/some/dir'
  //     }
  //   }
  // }
}
