/* eslint-disable brace-style, max-len */

module.exports = {
  Simple: { require: [ 'Aside', 'Header', 'Navigation', 'Icon', ],
    default: () => {if ($nwl.Simple) return require(/* webpackMode: "eager" */`nast-ui/${$nwl.Simple}/Index.vue`)}, },
}
