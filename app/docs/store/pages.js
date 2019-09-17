
export default {
  namespaced: true,
  state: {
    pages: {
      index: { icon: 'tachometer-alt', route: 'index', parent: null, },
      components: { icon: 'list-alt', route: 'components', parent: 'index', },
      button: { route: 'button', parent: 'components', },
      dropdown: { route: 'dropdown', parent: 'components', },
      input: { route: 'input', parent: 'components', },
      popup: { route: 'popup', parent: 'components', },
  
      directives: { icon: 'sitemap', route: 'directives', parent: 'index', },
      konstructor: { icon: 'sitemap', route: 'konstructor', parent: 'index', },
    },
    
    navigation: [
      { name: 'index', },
      { name: 'componentsGroup', icon: 'folder', children: [
        { name: 'button', },
        { name: 'dropdown', },
        { name: 'input', },
      ], },
      { name: 'baseComponentsGroup', icon: 'folder', children: [
        { name: 'popup', },
      ], },
      { name: 'directives', },
      { name: 'konstructor', },
    ],
    
    titles: {
      index: 'Описание',
      componentsGroup: 'Компоненты',
      components: 'Все компоненты',
      button: 'Button',
      dropdown: 'Dropdown',
      input: 'Input',
      directives: 'Директивы',
      konstructor: 'Конструктор',
      
      baseComponentsGroup: 'Базовые компоненты',
      popup: 'Popup',
    },
  },
  
  getters: {
    navigation: (state) => {
      const reducer = (result, item) => {
        const isGroup = Boolean(item.children)
        const page = isGroup ? item : state.pages[item.name]
        
        result.push({
          title: state.titles[item.name],
          icon: page.icon,
          route: page.route,
          children: isGroup ? page.children.reduce(reducer, []) : undefined,
        })
        
        return result
      }
      
      return state.navigation.reduce(reducer, [])
    },
    getPage: (state) => (name) => {
      return {
        title: state.titles[name],
        ...state.pages[name],
      }
    },
    structureByName: (state) => (name) => {
      const result = []
      
      let item
      let n = name
      while (n) {
        item = state.pages[n]
        result.push({
          title: state.titles[n],
          ...item,
        })
        n = item.parent
      }
      return result.reverse()
    },
  },
}
