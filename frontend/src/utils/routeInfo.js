// 路由信息

module.exports = {
    'music': {
        title: '音乐',
        icon: 'customer-service',
        path: '/music/index',
        component: 'MusicIndex'
    },
    'news': {
        title: '新闻',
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
