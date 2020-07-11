const path = require('path');

module.exports = {
    title: '滔滔江水的个人博客',
    description: '滔滔江水的个人博客s',
    themeConfig: {
        // lastUpdated: '上次更新时间',
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
        sidebar: {
            '/blog/': [
                {
                    title: '2020',
                    collapsable: false,
                    path: '/blog/2020/',
                    sidebarDepth: 1,
                    children: [
                        '2020/CI&CD',
                        '2020/abtest',
                        '2020/react_hook',
                        '2020/buryPoint',
                    ]
                },
                {
                    title: '2019',
                    collapsable: false,
                    path: '/blog/2019/',
                    sidebarDepth: 1,
                    children: [
                        '2019/layout',
                        '2019/video',
                        '2019/summary',
                        '2019/svg',
                        '2019/communication',
                        '2019/wxshare',
                        '2019/clipboard',
                        '2019/vim',
                        '2019/nginx',
                        '2019/ssh',
                        '2019/deploy',
                        '2019/debug'
                    ]
                },
                {
                    title: '2018',
                    collapsable: false,
                    path: '/blog/2018/',
                    sidebarDepth: 1,
                    children: [
                        '2018/summary',
                        '2018/pictures',
                        '2018/react-router-4'
                    ]
                },
                {
                    title: '2017',
                    collapsable: false,
                    path: '/blog/2017/',
                    sidebarDepth: 1,
                    children: [
                        '2017/design-pattern',
                        '2017/page',
                        '2017/js-api',
                        '2017/full-screen',
                        '2017/webpack',
                        '2017/require'
                    ]
                }
            ]
        }
    },
    markdown: {
        lineNumbers: true
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@imgUrl': path.resolve(__dirname, '../assets/')
            }
        }
    },
    // plugins: [
    //     [
    //         '@vuepress/last-updated',
    //         {
    //             transformer: (timestamp, lang, a) => {
    //                 return timestamp + '' + lang 
    //             }
    //         }
    //     ]
    // ],
}