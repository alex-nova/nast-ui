<template>
  <div :class="['n-popup', {'n-inline': inline}]">
    <slot name="action" />
    <div class="n-wrapper">
      <div v-if="s_open" ref="popup" class="n-popup-content" :style="style">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import props from './../props'
import { getPosition, isFit, getRightDirection, getPopupRect, } from './../utils'
import debounce from 'lodash/debounce'

export default {
  name: 'NPopup',
  mixins: [ props, ],
  data() {
    return {
      s_open: Boolean(this.open),
      visible: true, // всегда равен s_open, с задержкой в 1 мс (за это время идет расчет позиции)
      position: {}, // { top: 0, right: 0, bottom: 0, left: 0, }
    }
  },
  computed: {
    element() {
      return this.$slots.action[0].elm
    },
    style() {
      return {
        ...this.positionToStyle,
        opacity: this.visible ? 1 : 0,
      }
    },
    positionToStyle() {
      return Object.keys(this.position).reduce((result, key) => {
        if (this.position[key] !== undefined) {
          result[key] = `${this.position[key]}px`
        }
        return result
      }, {})
    },
  },
  watch: {
    open(value) {
      this.onChange(value)
    },
  },
  mounted() {
    this.onChange(this.s_open)
    
    document.addEventListener('scroll', this.debouncedCalcStyle)
    window.addEventListener('resize', this.debouncedCalcStyle)
  },
  beforeDestroy() {
    document.removeEventListener('scroll', this.debouncedCalcStyle)
    window.removeEventListener('resize', this.debouncedCalcStyle)
  },
  methods: {
    onChange(value) {
      this.s_open = value
      
      if (value) {
        this.$nextTick(() => {
          this.calcStyle()
          setTimeout(() => {
            this.visible = true
          }, 1)
        })
      } else {
        this.visible = false
      }
    },
    calcStyle() {
      if (this.open) {
        let position
        const defaultPosition = this.getDefaultPosition()
        const defaultFit = isFit(this.$refs.popup, this.element, defaultPosition)
        
        const popupRect = getPopupRect(this.toUp, this.side, this.align,
          this.element.getBoundingClientRect(), this.$refs.popup.offsetWidth, this.$refs.popup.offsetHeight)
        console.log(popupRect)
        
        if (defaultFit.total) { // если стандартная позиция стала влезать - возвращаем ее
          position = defaultPosition
        } else if (isFit(this.$refs.popup, this.element, this.position).total) { // если влезает текущая позиция - ничего не делаем
          return
        } else { // если ни стандартная ни предыдущая не влезают - считаем новую
          const rightDirection = getRightDirection(defaultFit, this.toUp, this.side)
          if (rightDirection) {
            position = getPosition(rightDirection.toUp, rightDirection.side, this.align, false,
              this.element.getBoundingClientRect(), this.$refs.popup.offsetWidth, this.$refs.popup.offsetHeight)
          }
        }
        
        // this.position = { ...position, }
      }
    },
    debouncedCalcStyle: debounce(function() {
      this.calcStyle()
    }, 100),
    getDefaultPosition() {
      return getPosition(this.toUp, this.side, this.align, false,
        this.element.getBoundingClientRect(), this.$refs.popup.offsetWidth, this.$refs.popup.offsetHeight)
    },
  },
}
</script>

<style lang="scss">
  html {
    --n-popup-width: 300px;
  }
</style>
<style lang="scss" scoped>
  .n-popup {
    &.n-inline {
      display: inline-block;
    }
    
    .n-wrapper {
      position: absolute;
    }
    
    .n-popup-content {
      position: absolute;
      width: var(--n-popup-width);
      z-index: 110;
      background: var(--content-bg);
      box-shadow: 0 1px 3px rgba(0,0,0,.12), 0 1px 2px rgba(0,0,0,.24);
      border-radius: var(--border-radius);
      padding: 25px;
      opacity: 0;
    }
  }
</style>
