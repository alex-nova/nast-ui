/**
 *
 * @param {boolean} toUp
 * @param {string} side
 * @param {string} align
 * @param {boolean} fixed
 * @param {ClientRect} targetRect
 * @param {int} popupWidth
 * @param {int} popupHeight
 * @return {{top: number, left: number}}
 */
const getPosition = (toUp, side, align, fixed, targetRect, popupWidth, popupHeight) => {
  let top = 0
  let left = 0
  const height = popupHeight
  const width = popupWidth
  const coords = targetRect
  
  let alignShift
  if (align === 'center') {
    alignShift = Math.round((coords.width - width) / 2)
  } else if (align === 'right') {
    alignShift = Math.round(coords.width - width)
  }
  
  if (fixed) {
    if (toUp) {
      if (side === 'top') {
        top = coords.top - height
        left = coords.left
      } else if (side === 'right') {
        top = coords.bottom - height
        left = coords.right
      } else if (side === 'bottom') {
        top = coords.bottom - height
        left = coords.left
      } else if (side === 'left') {
        top = coords.bottom - height
        left = coords.left - width
      }
    } else {
      if (side === 'top') {
        top = coords.top
        left = coords.left
      } else if (side === 'right') {
        top = coords.top
        left = coords.right + width
      } else if (side === 'bottom') {
        top = coords.bottom
        left = coords.left
      } else if (side === 'left') {
        top = coords.top
        left = coords.left - width
      }
    }
  } else {
    if (toUp) {
      if (side === 'top') {
        top = -height - coords.height
        left = alignShift
      } else if (side === 'right') {
        top = -height
        left = coords.width
      } else if (side === 'bottom') {
        top = 0
        left = alignShift
      } else if (side === 'left') {
        top = -height
        left = -width
      }
    } else {
      if (side === 'top') {
        top = -coords.height
        left = alignShift
      } else if (side === 'right') {
        top = -coords.height
        left = coords.width
      } else if (side === 'bottom') {
        top = 0
        left = alignShift
      } else if (side === 'left') {
        top = -coords.height
        left = coords.width
      }
    }
  }
  
  return { top, left, }
}

/**
 * Показывает по каким параметрам popup не влез в окно
 *
 * @param {Element|Vue} popup
 * @param {ClientRect} targetRect
 * @param {object} position  css style { top: 0, right: 0, bottom: 0, left: 0, }
 * @return {object} { top: true, right: true, bottom: true, left: true, total: true, }  true = влез
 */
const isFit = (popup, targetRect, position) => {
  const coords = targetRect
  
  const padding = 5
  
  const abroad = {
    top: coords.top - position.top + popup.clientHeight - padding,
    right: window.innerWidth - coords.right - padding - popup.clientWidth + coords.width - position.left,
    bottom: window.innerHeight - coords.bottom - padding - position.top - popup.clientHeight,
    left: coords.left + position.left - padding,
  }
  
  let total = true
  const result = Object.keys(abroad).reduce((result, key) => {
    result[key] = abroad[key] >= 0
    if (!result[key]) total = false
    return result
  }, {})
  result.total = total
  // console.log(result)
  return result
}

/**
 *
 * @param {object} fit  from function isFit
 * @param {boolean} toUp
 * @param {string} side
 * @return {object|undefined}  {toUp: (boolean), side: (string)}
 */
const getRightDirection = (fit, toUp, side) => {
  if (fit.total) {
    return undefined
  }
  
  let newToUp = toUp
  let newSide = side
  
  if (!fit.top) {
    newToUp = false
    if (side === 'top') newSide = 'bottom'
  } else if (!fit.bottom) {
    newToUp = true
    if (side === 'bottom') newSide = 'top'
  } else if (side === 'bottom' || side === 'top') {
    console.log('fit по ширине экрана')
    // fit по ширине экрана
  } else {
    newSide = 'bottom'
  }
  
  if (toUp === newToUp && side === newSide) {
    return undefined
  }
  
  return {
    toUp: newToUp,
    side: newSide,
  }
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
    bottom = toUp ? targetRect.bottom : targetRect.bottom + popupHeight
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
  
  bottom = window.innerWidth - bottom
  right = window.innerWidth - right
  
  return { top, left, bottom, right, }
}


export {
  getPosition,
  isFit,
  getRightDirection,
  getPopupRect,
}
