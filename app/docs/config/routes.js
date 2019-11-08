
module.exports = [
  { path: '/', component: () => import('./../App'), children: [
    { path: '', component: () => import('./../layouts/main/Index'), children: [
      { path: '', name: 'index', component: () => import('./../pages/index/Index'), },
      
      { path: 'components', name: 'components', component: () => import('./../pages/components/Index'), },
      { path: 'components/button', name: 'button', component: () => import('./../pages/components/button/Index'), },
      { path: 'components/dropdown', name: 'dropdown', component: () => import('./../pages/components/dropdown/Index'), },
      { path: 'components/input', name: 'input', component: () => import('./../pages/components/input/Index'), },
      { path: 'components/progress', name: 'progress', component: () => import('./../pages/components/progress/Index'), },
      { path: 'components/loader', name: 'loader', component: () => import('./../pages/components/loader/Index'), },
      { path: 'components/select', name: 'select', component: () => import('./../pages/components/select/Index'), },
      
      { path: 'components/popup', name: 'popup', component: () => import('./../pages/components/popup/Index'), },
    
      { path: 'directives', name: 'directives', component: () => import('./../pages/directives/Index'), },
      { path: 'konstructor', name: 'konstructor', component: () => import('./../pages/konstructor/Index'), },
    ], },
  ], },
]
