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
                        'home'
                    ]
                }
            ]
        },
        sidebarDepth: 0,
        lastUpdated: 'Last Updated'
    }
}