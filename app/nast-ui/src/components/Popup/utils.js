/**
 *
 * @param {object} popupRect
 * @param {ClientRect} targetRect
 * @param {boolean} fixed
 * @return {{top: number, left: number}}
 */
const getPosition = (popupRect, targetRect, fixed) => {
  let top
  let left
  
  if (fixed) {
    top = popupRect.top
    left = popupRect.left
  } else {
    top = popupRect.top - targetRect.bottom
    left = popupRect.left - targetRect.left
  }
  
  return { top, left, }
}

/**
 * Показывает по каким параметрам popup не влез в окно
 *
 * @param {object} popupRect
 * @return {object} { top: true, right: true, bottom: true, left: true, total: true, }  true = влез
 */
const isFit = (popupRect) => {
  const padding = 5
  
  let total = true
  const result = Object.keys(popupRect).reduce((result, key) => {
    result[key] = popupRect[key] >= padding
    if (!result[key]) total = false
    return result
  }, {})
  result.total = total
  return result
}

/**
 *
 * @param {boolean} toUp
 * @param {string} side
 * @param {string} align
 * @param {ClientRect} targetRect
 * @param {int} popupWidth
 * @param {int} popupHeight
 * @return {{top: number, left: number, bottom: number, right: number}}
 */
const getPopupRect = (toUp, side, align, targetRect, popupWidth, popupHeight) => {
  let top = 0
  let left = 0
  let bottom = 0
  let right = 0
  
  if (side === 'top') {
    top = targetRect.top - (toUp ? popupHeight : 0)
    bottom = toUp ? targetRect.top : targetRect.top + popupHeight
  }
  if (side === 'bottom') {
    top = targetRect.bottom - (toUp ? popupHeight : 0)
    bottom = toUp ? targetRect.bottom : (targetRect.bottom + popupHeight)
  }
  if (side === 'top' || side === 'bottom') {
    if (align === 'right') {
      left = targetRect.right - popupWidth
      right = targetRect.right
    } else if (align === 'center') {
      const shift = Math.round((targetRect.width - popupWidth) / 2)
      left = targetRect.left + shift
      right = left + popupWidth
    } else {
      left = targetRect.left
      right = targetRect.left + popupWidth
    }
  }
  
  if (side === 'left') {
    left = targetRect.left - popupWidth
    right = targetRect.left
  }
  if (side === 'right') {
    left = targetRect.right
    right = targetRect.right + popupWidth
  }
  if (side === 'left' || side === 'right') {
    top = toUp ? targetRect.bottom - popupHeight : targetRect.top
    bottom = toUp ? targetRect.bottom : targetRect.top + popupHeight
  }
  
  bottom = window.innerHeight - bottom
  right = window.innerWidth - right
  
  return { top, left, bottom, right, }
}


export {
  getPosition,
  isFit,
  getPopupRect,
}
