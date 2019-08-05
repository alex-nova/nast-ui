import map from 'lodash/map'
import components from './items/components'
import layouts from './items/layouts'


const prefix = 'n'

export default (Vue) => {
  if ($nwc || $nwcc) {
    Vue.use({
      install(Vue, options) {
        installComponents(Vue)
        installLayouts(Vue)
      },
    })
  }
}

const installComponents = (Vue) => {
  const items = {}
  
  map(components, (c, n) => {
    let component = c.default().default
    if (!component) component = c.custom().default
    
    if (component) {
      items[`${prefix}${n}`] = component
    }
  })
  
  Vue.mixin({ components: items, })
}

const installLayouts = (Vue) => {
  const items = {}
  
  map(layouts, (c, n) => {
    const item = c.default().default
    
    if (item) {
      items[`${prefix}Layout${n}`] = item
    }
  })
  
  Vue.mixin({ components: items, })
}
