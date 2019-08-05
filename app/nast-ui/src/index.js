import components from './components'
import directives from './directives'
import layouts from './layouts'


export default {
  install(options) {
    components.install(options)
    directives.install(options)
    layouts.install(options)
  },
}
