module.exports = [
  {text: '首页', link: '/'},
  {
    text: '后端',
    link: '/bg/',  //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
	   // 这些link是在相应md文件定义的永久链接。另外，注意结尾是有斜杠的
     {text: '学习', link: '/pages/f2a556/'},
    ]
  },

  {
    text: '大数据',
    link: '/bd/',
    items: [
      {text: '学习', link: '/pages/f2a556/'},
    ]
  },
  {
    text: '更多', 
    link: '/more/',
    items: [
      {text: '学习', link: '/pages/f2a556/'},
      {text: '友情链接', link: '/friends/'},
    ]
  },

  {
    text: '索引',
    link: '/archives/',
    items: [
      {text: '分类', link: '/categories/'},
      {text: '标签', link: '/tags/'},
      {text: '归档', link: '/archives/'},
    ]
  },
  
  {text: '关于', link: '/about/'}
]
