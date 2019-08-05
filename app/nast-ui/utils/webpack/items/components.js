/* eslint-disable brace-style, max-len */

module.exports = {
  Aside: { require: [ 'AsideHamburger', ],
    default: () => {if ($nwc.Aside) return require(/* webpackMode: "eager" */`nast-ui/${$nwc.Aside}/Index.vue`)},
    custom: () => {if ($nwcc.Aside) return require(/* webpackMode: "eager" */`./../../../../${$nwcc.Aside}`)}, },
  AsideHamburger: { parent: 'Aside',
    default: () => {if ($nwc.AsideHamburger) return require(/* webpackMode: "eager" */`nast-ui/${$nwc.AsideHamburger}/Index.vue`)},
    custom: () => {if ($nwcc.AsideHamburger) return require(/* webpackMode: "eager" */`./../../../../${$nwcc.AsideHamburger}`)}, },
  Button: {
    default: () => {if ($nwc.Button) return require(/* webpackMode: "eager" */`nast-ui/${$nwc.Button}/Index.vue`)},
    custom: () => {if ($nwcc.Button) return require(/* webpackMode: "eager" */`./../../../../${$nwcc.Button}`)}, },
  Breadcrumbs: { require: [ 'Link', ],
    default: () => {if ($nwc.Breadcrumbs) return require(/* webpackMode: "eager" */`nast-ui/${$nwc.Breadcrumbs}/Index.vue`)},
    custom: () => {if ($nwcc.Breadcrumbs) return require(/* webpackMode: "eager" */`./../../../../${$nwcc.Breadcrumbs}`)}, },
  Card: {
    default: () => {if ($nwc.Card) return require(/* webpackMode: "eager" */`nast-ui/${$nwc.Card}/Index.vue`)},
    custom: () => {if ($nwcc.Card) return require(/* webpackMode: "eager" */`./../../../../${$nwcc.Card}`)}, },
  Container: {
    default: () => {if ($nwc.Container) return require(/* webpackMode: "eager" */`nast-ui/${$nwc.Container}/Index.vue`)},
    custom: () => {if ($nwcc.Container) return require(/* webpackMode: "eager" */`./../../../../${$nwcc.Container}`)}, },
  Header: {
    default: () => {if ($nwc.Header) return require(/* webpackMode: "eager" */`nast-ui/${$nwc.Header}/Index.vue`)},
    custom: () => {if ($nwcc.Header) return require(/* webpackMode: "eager" */`./../../../../${$nwcc.Header}`)}, },
  Icon: {
    default: () => {if ($nwc.Icon) return require(/* webpackMode: "eager" */`nast-ui/${$nwc.Icon}/Index.vue`)},
    custom: () => {if ($nwcc.Icon) return require(/* webpackMode: "eager" */`./../../../../${$nwcc.Icon}`)}, },
  Input: { themes: [ 'material', ],
    default: () => {if ($nwc.Input) return require(/* webpackMode: "eager" */`nast-ui/${$nwc.Input}/Index.vue`)},
    custom: () => {if ($nwcc.Input) return require(/* webpackMode: "eager" */`./../../../../${$nwcc.Input}`)}, },
  Items: {
    default: () => {if ($nwc.Items) return require(/* webpackMode: "eager" */`nast-ui/${$nwc.Items}/Index.vue`)},
    custom: () => {if ($nwcc.Items) return require(/* webpackMode: "eager" */`./../../../../${$nwcc.Items}`)}, },
  Link: {
    default: () => {if ($nwc.Link) return require(/* webpackMode: "eager" */`nast-ui/${$nwc.Link}/Index.vue`)},
    custom: () => {if ($nwcc.Link) return require(/* webpackMode: "eager" */`./../../../../${$nwcc.Link}`)}, },
  Navigation: { require: [ 'NavigationGroup', 'NavigationItem', ],
    default: () => {if ($nwc.Navigation) return require(/* webpackMode: "eager" */`nast-ui/${$nwc.Navigation}/Index.vue`)},
    custom: () => {if ($nwcc.Navigation) return require(/* webpackMode: "eager" */`./../../../../${$nwcc.Navigation}`)}, },
  NavigationGroup: { require: [ 'NavigationItem', ], parent: 'Navigation',
    default: () => {if ($nwc.NavigationGroup) return require(/* webpackMode: "eager" */`nast-ui/${$nwc.NavigationGroup}/Index.vue`)},
    custom: () => {if ($nwcc.NavigationGroup) return require(/* webpackMode: "eager" */`./../../../../${$nwcc.NavigationGroup}`)}, },
  NavigationItem: { parent: 'Navigation', require: [ 'ScrollTo', ],
    default: () => {if ($nwc.NavigationItem) return require(/* webpackMode: "eager" */`nast-ui/${$nwc.NavigationItem}/Index.vue`)},
    custom: () => {if ($nwcc.NavigationItem) return require(/* webpackMode: "eager" */`./../../../../${$nwcc.NavigationItem}`)}, },
  Table: {
    default: () => {if ($nwc.Table) return require(/* webpackMode: "eager" */`nast-ui/${$nwc.Table}/Index.vue`)},
    custom: () => {if ($nwcc.Table) return require(/* webpackMode: "eager" */`./../../../../${$nwcc.Table}`)}, },
  Typography: {
    default: () => {if ($nwc.Typography) return require(/* webpackMode: "eager" */`nast-ui/${$nwc.Typography}/Index.vue`)},
    custom: () => {if ($nwcc.Typography) return require(/* webpackMode: "eager" */`./../../../../${$nwcc.Typography}`)}, },
}
