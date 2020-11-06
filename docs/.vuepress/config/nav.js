module.exports = [
  {text: '首页', link: '/'},
  {
    text: '后端',
    link: '/rd/',  //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
	   // 这些link是在相应md文件定义的永久链接。另外，注意结尾是有斜杠的

    {text: 'Java', link: ''},    //  java.html
    {text: 'Spring', link: ''},
    {text: 'SpringBoot', link: ''},
    {text: '架构', items: [
        {text: '微服务', link: ''}, // 注意link结尾有斜杠和没有斜杠的区别
        {text: '敏捷开发', link: ''},
        {text: '领域驱动设计', link: ''},
    ]}   

    ]
  },

  {
    text: '大数据',
    link: '/bd/',
    items: [
      {text: '数据挖掘', link: ''},
      {text: '数据分析', link: ''},
    ]
  },
  {
    text: '更多', 
    link: '/more/',
    items: [
      // 链接此分类文件夹里第一个文章，其余的自动生成，在目录里显示
      {text: '运维', items: [
          {text: 'Docker', link: ''}, 
          {text: 'DevOps', link: ''},
          {text: 'Linux', link: ''},
      ]},
      {text: '职场', items: [
          {text: '面试', link: ''}, // 注意link结尾有斜杠和没有斜杠的区别
          {text: '个人提升', link: ''},
      ]},   
      // {text: '其他', items: [
      //     // {text: '其他', link: '/friends/'}, 
         
      // ]},  
    ]
  },

  // {
  //   text: '索引',
  //   link: '/archives/',
  //   items: [
  //     {text: '分类', link: '/categories/'},
  //     {text: '标签', link: '/tags/'},
  //     {text: '归档', link: '/archives/'},
  //   ]
  // },
  {text: '归档', link: '/archives/'},
  {text: '关于', link: '/about/'}
]
