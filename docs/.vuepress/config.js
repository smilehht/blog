const path = require('path');

module.exports = {
    title: 'Hunter',
    description: '滔滔江水的个人站点',
    head: [
        ['link', { rel: 'icon', href: `/hht.png` }],
    ],
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
                    // path: '/blog/2020/',
                    sidebarDepth: 1,
                    children: [
                        '2020/CI&CD',
                        '2020/abtest',
                        // '2020/react_hook',
                        '2020/buryPoint',
                        '2020/fontend',
                    ]
                },
                {
                    title: '2019',
                    collapsable: false,
                    // path: '/blog/2019/',
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
                    // path: '/blog/2018/',
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
                    // path: '/blog/2017/',
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
            ],
            '/demo/': [
                {
                    title: 'SVG',
                    collapsable: false,
                    // path: '/demo/svg/',
                    sidebarDepth: 1,
                    children: [
                        'svg/board',
                        'svg/wave',
                        'svg/textPath',
                        'svg/night',
                        'svg/motion',
                        'svg/spring'
                    ]
                },
                {
                    title: 'Demo',
                    collapsable: false,
                    // path: '/demo/',
                    sidebarDepth: 1,
                    children: [
                        'demo/website',
                        'demo/fullscreen',
                    ]
                },
                {
                    title: 'Html && CSS',
                    collapsable: false,
                    // path: '/demo/htmlcss/',
                    sidebarDepth: 1,
                    children: [
                        'htmlcss/radar',
                        'htmlcss/panorama',
                        'htmlcss/circle',
                        'htmlcss/csslayout',
                        'htmlcss/newspaper',
                        'htmlcss/world',
                        'htmlcss/response',
                        'htmlcss/mobile',
                        'htmlcss/css3',
                        'htmlcss/waterfall'
                    ]
                },
                {
                    title: 'JavaScript',
                    collapsable: false,
                    // path: '/demo/js/',
                    sidebarDepth: 1,
                    children: [
                        'js/pratice',
                        'js/dom',
                        'js/chart',
                        'js/collision',
                        'js/slidenav',
                        'js/sendMessage',
                    ]
                },
                {
                    title: 'React(2017)',
                    collapsable: false,
                    // path: '/demo/react/',
                    sidebarDepth: 1,
                    children: [
                        'react/commentBox',
                        'react/searchBox'
                    ]
                },
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
    plugins: [
        ['@vuepress/back-to-top', true],
        ['@vuepress/medium-zoom', true]
        // ['@vuepress/back-to-top', true],
        // [
        //     '@vuepress/last-updated',
        //     {
        //         transformer: (timestamp, lang, a) => {
        //             return timestamp + '' + lang 
        //         }
        //     }
        // ]
    ],
}