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
    const def = c.default()
    const custom = c.custom()
    let component = null
    
    if (def) {
      component = def.default
    } else if (custom) {
      component = custom.default
    }
    
    if (component) {
      items[`${prefix}${n}`] = component
    }
  })
  
  Vue.mixin({ components: items, })
}

const installLayouts = (Vue) => {
  const items = {}
  
  map(layouts, (c, n) => {
    const def = c.default()
    let item = null
    
    if (def) {
      item = def.default
    }
    
    if (item) {
      items[`${prefix}Layout${n}`] = item
    }
  })
  
  Vue.mixin({ components: items, })
}
