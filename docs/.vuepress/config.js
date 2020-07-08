module.exports = {
    title: '滔滔江水的个人博客',
    description: '滔滔江水的个人博客s',
    themeConfig: {
        docsDir: '/docs/docs',
        lastUpdated: '上次更新时间',
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
                                'require',
                            ]
                        },
                        {
                            title: '2017年',
                            collapsable: false,
                            children: [
                                'blog',
                                'require'
                            ]
                        }
                    ]
                }
            }
        }
    }
}