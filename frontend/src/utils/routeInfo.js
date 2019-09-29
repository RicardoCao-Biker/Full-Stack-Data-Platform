// 路由信息

module.exports = {
  'gold': {
    title: '黄金',
    icon: 'dollar',
    child: [{
    name: '国际黄金',
    path: '/gold/international',
    component: 'InternationalGold'
  }, {
    name: '国内黄金',
    path: '/gold/china',
    component: 'ChinaGold'
  }]},
  'news': {
    title: '新闻',
    icon: 'profile',
    child:[{
    name: '国际新闻',
    path: '/news/international',
    component: 'InternationalNews'
  }, {
      name: '国内新闻',
      path: '/news/china',
      component: 'ChinaNews'
    }]}
}