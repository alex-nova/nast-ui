
module.exports = [
  { path: '/', component: () => import('./../App'), children: [
    { path: '/', component: () => import('./../layouts/main/Index'), children: [
      { path: '/', name: 'index', component: () => import('./../pages/index/Index'), },
      { path: '/components', name: 'components', component: () => import('./../pages/components/Index'), },
      { path: '/components/button', name: 'button', component: () => import('./../pages/components/button/Index'), },
      
      { path: '/directives', name: 'directives', component: () => import('./../pages/directives/Index'), },
    ], },
  ], },
]
