import isObject from 'lodash/isObject'
import isFunction from 'lodash/isFunction'


const getValue = (item, valueKey) => {
  return isObject(item) ? item[valueKey] : item
}

const getTitle = (item, titleKey) => {
  if (isObject(item)) {
    return isFunction(titleKey) ? titleKey(item) : item[titleKey]
  }
  return item
}

export {
  getValue,
  getTitle,
}
