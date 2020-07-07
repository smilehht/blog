module.exports = {
    title: '滔滔江水的个人博客',
    description: '滔滔江水的个人博客s',
    themeConfig: {
        docsDir: '/docs/docs',
        nav: [
            // { text: '首页', link: '/home/' },
            { text: '博客', link: '/blog/' },
            { text: 'Demo', link: '/demo/' },
            { text: '关于', link: '/about/' },
            { text: 'Github', link: 'https://github.com/smilehht' },
            // {
            //     text: '语言',
            //     items: [
            //         { text: "初级篇", link: "/learnmore/part1/" },
            //         { text: "进阶篇", link: "/learnmore/part12/" },
            //         { text: "大神篇", link: "http://www.baidu.com" }
            //     ]
            // }
        ],
        locales: {
            '/': {
                sidebar: {
                    '/blog/': [
                        {
                            title: '博客',
                            collapsable: false,
                            children: [
                                '',
                                'blog',
                            ]
                        }
                    ]
                }
            }
        }
        // sidebar: {
        //     '/demo/': [
        //         { title: "基本配置", path: "base.md" },
        //     ],
        //     '/about/': [
        //         { title: "关于", path: "" },
        //     ],
        //     '/blog/': [
        //         { title: "基本配置", path: "base.md" },
        //     ],
        //     '/home/': [
        //         {
        //             title: "首页2",
        //             // path: "/home",
        //             collapsable: false,
        //             children: [
        //                 { title: "index", path: "/index/" },
        //                 { title: "index2", path: "/home/" }
        //             ]
        //         }
        //         // { title: "index", path: "/home/index" },
        //     ],
        // },
        // 添加侧边栏
        // sidebar: 'auto',
        // sidebarDepth: 2
    }
    // themeConfig: {
    //     nav: [
    //         { text: '主页', link: '#' },
    //         { text: 'Git', link: 'https://github.com/smilehht' },
    //     ],
    //     sidebar: {
    //         '/': [
    //             {
    //                 title: '介绍',
    //                 children: [
    //                     'doc/HOWTOUSE'
    //                 ]
    //             },
    //             {
    //                 title: '相关规范',
    //                 children: [
    //                     'doc/home'
    //                 ]
    //             }
    //         ]
    //     },
    //     sidebarDepth: 0,
    //     lastUpdated: 'Last Updated'
    // }
}