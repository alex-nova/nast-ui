import Aside from './Aside/default/Index.vue'
import AsideHamburger from './Aside/_AsideHamburger/default/Index.vue'
import Breadcrumbs from './Breadcrumbs/default/Index.vue'
import Button from './Button/default/Index.vue'
import Card from './Card/default/Index.vue'
import Container from './Container/default/Index.vue'
import Dropdown from './Dropdown/default/Index.vue'
import Header from './Header/default/Index.vue'
import Icon from './Icon/default/Index.vue'
import Input from './Input/default/Index.vue'
import Items from './Items/default/Index.vue'
import Link from './Link/default/Index.vue'
import Navigation from './Navigation/default/Index.vue'
import NavigationGroup from './Navigation/_NavigationGroup/default/Index.vue'
import NavigationItem from './Navigation/_NavigationItem/default/Index.vue'
import Popup from './Popup/default/Index.vue'
import Table from './Table/default/Index.vue'
import Tabs from './Tabs/default/Index.vue'
import Typography from './Typography/default/Index.vue'


export default {
  install(Vue, options) {
    Vue.component('nAside', Aside)
    Vue.component('nAsideHamburger', AsideHamburger)
    Vue.component('nBreadcrumbs', Breadcrumbs)
    Vue.component('nButton', Button)
    Vue.component('nCard', Card)
    Vue.component('nContainer', Container)
    Vue.component('nDropdown', Dropdown)
    Vue.component('nHeader', Header)
    Vue.component('nIcon', Icon)
    Vue.component('nInput', Input)
    Vue.component('nItems', Items)
    Vue.component('nLink', Link)
    Vue.component('nNavigation', Navigation)
    Vue.component('nNavigationGroup', NavigationGroup)
    Vue.component('nNavigationItem', NavigationItem)
    Vue.component('nPopup', Popup)
    Vue.component('nTable', Table)
    Vue.component('nTabs', Tabs)
    Vue.component('nTypography', Typography)
  },
}
