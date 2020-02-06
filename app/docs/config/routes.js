
export default [
  { path: '/', component: () => import('App'), children: [
    { path: '', component: () => import('layouts/main/Index'), children: [
      { path: '', name: 'index', icon: 'tachometer-alt', component: () => import('pages/index/Index'), },

      { path: 'components/datatable', name: 'comp.datatable', parent: 'components', component: () => import('pages/components/datatable/Index'), },

      { path: 'components', name: 'components', icon: 'list-alt', parent: 'index', component: () => import('pages/components/Index'), },
      { path: 'components/button', name: 'button', parent: 'components', component: () => import('pages/components/button/Index'), },
      { path: 'components/dropdown', name: 'dropdown', parent: 'components', component: () => import('pages/components/dropdown/Index'), },
      { path: 'components/input', name: 'input', parent: 'components', component: () => import('pages/components/input/Index'), },
      { path: 'components/progress', name: 'progress', parent: 'components', component: () => import('pages/components/progress/Index'), },
      { path: 'components/loader', name: 'loader', parent: 'components', component: () => import('pages/components/loader/Index'), },
      { path: 'components/select', name: 'select', parent: 'components', component: () => import('pages/components/select/Index'), },
      { path: 'components/list', name: 'list', parent: 'components', component: () => import('pages/components/list/Index'), },
      { path: 'components/modalCard', name: 'modalCard', parent: 'components', component: () => import('pages/components/modalCard/Index'), },
      { path: 'components/image', name: 'image', parent: 'components', component: () => import('pages/components/image/Index'), },
      { path: 'components/upload', name: 'upload', parent: 'components', component: () => import('pages/components/upload/Index'), },

      { path: 'components/popup', name: 'popup', parent: 'components', component: () => import('pages/components/popup/Index'), },

      { path: 'directives', name: 'directives', icon: 'sitemap', parent: 'index', component: () => import('pages/directives/Index'), },
      { path: 'konstructor', name: 'konstructor', component: () => import('pages/konstructor/Index'), },
    ], },
  ], },
]
