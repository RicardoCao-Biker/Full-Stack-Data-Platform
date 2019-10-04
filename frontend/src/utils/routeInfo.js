// 路由信息

module.exports = {
    'music': {
        title: 'Music',
        icon: 'customer-service',
        path: '/music/index',
        component: 'MusicIndex'
    },
    'news': {
        title: 'News',
        icon: 'profile',
        child: [{
            title: '国际新闻',
            path: '/news/international',
            component: 'InternationalNews'
        }, {
            title: '国内新闻',
            path: '/news/china',
            component: 'ChinaNews'
        }]
    }
}
