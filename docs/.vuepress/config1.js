module.exports = {
    title: '滔滔江水的个人博客',
    description: '滔滔江水的个人博客',
    themeConfig: {
        nav: [
            { text: '主页', link: '#' },
            { text: 'Git', link: 'https://github.com/smilehht' },
        ],
        sidebar: {
            '/': [
                {
                    title: '介绍',
                    children: [
                        'doc/HOWTOUSE'
                    ]
                },
                {
                    title: '相关规范',
                    children: [
                        'doc/home'
                    ]
                }
            ]
        },
        sidebarDepth: 0,
        lastUpdated: 'Last Updated'
    }
}