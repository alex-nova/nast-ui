import isObject from 'lodash/isObject'


/**
 * Входные column могут быть:
 * 1. [ { name: 'id', title: 'ID', }, { name: 'name', title: 'Name', }, ]
 * 2. [ 'id', 'name', ]
 * 3. undefined
 *
 * Функция трансформирует данные в формат:
 * [ { name: 'id', classes: [], }, ]
 *
 * @param {array} data
 * @param {array} columns
 * @return {array} new columns
 */
const normalizeColumns = (data, columns) => {
  const item = data[0]
  columns = columns.slice(0) // clone
  
  if (item) {
    const itemProps = Object.keys(item)
    
    if (columns.length === 0) {
      columns = itemProps
    }
  }
  
  return columns.map((column) => {
    const object = isObject(column) ? column : { name: column, }
  
    return {
      classes: [],
      ...object,
    }
  })
}


export {
  normalizeColumns,
}
