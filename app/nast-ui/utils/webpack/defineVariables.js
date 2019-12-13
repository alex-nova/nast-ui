const each = require('lodash/each')
const isString = require('lodash/isString')
const components = require('./items/components')
const layouts = require('./items/layouts')


/**
 * Получить список переменных для импорта компонентов
 *
 * @param {object} options
 * @param {object} options.themes Указываем какую тему для какой сборки использовать
 *        { web: 'theme_name', android: 'theme_name_1', }
 * @param {object} options.presets Указываем для какой темы какие компоненты использовать. default - обязательнвя тема
 *        { default: { button: 'default', }, android: { button: 'android', }, }
 * @param {string} platform
 *
 * @return {object}
 */
module.exports = (options = {}, platform) => {
  if (options === {}) {
    return {}
  }
  
  const result = {}
  
  Object.assign(result, getComponents(options, platform))
  // Object.assign(result, getMixins(options, platform))
  
  return result
}

const getComponents = (options, platform) => {
  const { presets = {}, themes = {}, layouts: layoutsConfig = [], } = options
  
  if (!presets.default) {
    console.log('nast-ui, define variables: The default theme is not exist, components was not loaded.') // eslint-disable-line
    presets.default = {}
  }
  if (!themes[platform]) {
    console.log(`nast-ui, define variables: The platform ${platform} not found in config, using the default preset.`) // eslint-disable-line
  }
  
  const result = { $nwc: {}, $nwcc: {}, }
  
  const presetName = themes[platform] || 'default'
  
  each(components, (componentData, componentName) => {
    const componentTheme = getTheme(presets, presetName, componentName, components)
    if (!componentTheme) {
      result[`$nwc.${componentName}`] = 'false'
      result[`$nwcc.${componentName}`] = 'false'
      return
    }
  
    Object.assign(
      result,
      setWebpackVariable(componentName, 'c', componentTheme, componentData.parent),
      setRequired(componentData.require, presets, presetName, componentTheme)
    )
  })
  
  each(layouts, (layoutData, layoutName) => {
    if (layoutsConfig.includes(layoutName)) {
      Object.assign(
        result,
        setWebpackVariable(layoutName, 'l'),
        setRequired(layoutData.require, presets, presetName, 'default')
      )
    } else {
      result[`$nwl.${layoutName}`] = 'false'
    }
  })
  
  return result
}

const setRequired = (require = [], presets, presetName, componentTheme) => {
  each(require, (requiredComponentName) => {
    if (getTheme(presets, presetName, requiredComponentName, components)) {
      return
    }
    
    const requiredComponentThemes = components[requiredComponentName].themes
    const requiredComponentTheme = (requiredComponentThemes && requiredComponentThemes[componentTheme]) ? componentTheme : 'default'
    
    let required = {}
    if (components[requiredComponentName].require) {
      required = setRequired(components[requiredComponentName].require, presets, presetName, componentTheme)
    }
    
    return Object.assign(required, setWebpackVariable(requiredComponentName, 'c', requiredComponentTheme, components[requiredComponentName].parent))
  })
}

const getTheme = (presets, presetName, componentName, config) => {
  const preset = presets[presetName]
  
  const componentDefaultTheme = isString(presets.default) ? presets.default : presets.default[componentName]
  if (!componentDefaultTheme) {
    return false
  }
  
  let componentTheme = isString(preset) ? preset : preset[componentName]
  const availableThemes = config[componentName].themes
  if (!componentTheme) {
    componentTheme = componentDefaultTheme
  }
  if (isString(componentTheme) && (!availableThemes || availableThemes.indexOf(componentTheme) === -1)) {
    componentTheme = 'default'
  }
  
  return componentTheme
}

const setWebpackVariable = (name, type, theme, parent) => {
  const result = {}
  
  let path = ''
  if (type === 'c') {
    path = 'components'
  } else if (type === 'l') {
    path = 'layouts'
  } else if (type === 'd') {
    path = 'directives'
  }
  
  if (type === 'c') {
    if (isString(theme)) {
      result[`$nw${type}.${name}`] = parent ?
        `'src/${path}/${parent}/_${name}/${theme}'` :
        `'src/${path}/${name}/${theme}'`
      result[`$nw${type}c.${name}`] = 'false'
    } else {
      result[`$nw${type}.${name}`] = 'false'
      result[`$nw${type}c.${name}`] = `'${theme()}'`
    }
  } else {
    result[`$nw${type}.${name}`] = `'src/${path}/${name}'`
  }
  
  return result
}
