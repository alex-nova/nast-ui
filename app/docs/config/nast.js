
module.exports = {
  themes: {
    web: 'main',
    raccoon: 'material',
    android: 'material',
    ios: 'main',
    windows: 'main',
    linux: 'main',
    mac: 'main',
  },
  presets: {
    main: { // load components from default preset but Button with material theme.
      Button: 'material',
    },
    material: 'material', // load components from default preset, but components which has material theme is loading with material theme.
    default: 'default', // load all components with default theme.
  },
  layouts: [ 'Simple', ],
  directives: [],
}
