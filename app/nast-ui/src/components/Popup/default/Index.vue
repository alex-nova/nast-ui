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
import { getPosition, isFit, getPopupRect, } from './../utils'
import debounce from 'lodash/debounce'

export default {
  name: 'NPopup',
  mixins: [ props, ],
  data() {
    return {
      s_open: Boolean(this.open),
      visible: true, // всегда равен s_open, с задержкой в 1 мс (за это время идет расчет позиции)
      dir: null, // { toUp, side, align, }
      maxWidth: undefined,
      // fixed: true, // TODO режим как на телефоне
    }
  },
  computed: {
    element() {
      return this.$slots.action[0].elm
    },
    style() {
      let position = { top: 0, left: 0, }
      if (this.dir && this.$refs.popup) {
        const popupRect = this.getPopupRect(this.dir.toUp, this.dir.side, this.dir.align)
        const pos = getPosition(popupRect, this.element.getBoundingClientRect(), false)
        position = { top: `${pos.top}px`, left: `${pos.left}px`, }
      }
  
      return {
        ...position,
        maxWidth: this.maxWidth,
        opacity: this.visible ? 1 : 0,
      }
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
      if (this.s_open) {
        let dir
        const defaultFit = isFit(this.getPopupRect(this.toUp, this.side, this.align))
        
        if (defaultFit.total) {
          dir = {
            toUp: this.toUp,
            side: this.side,
            align: this.align,
          }
        } else {
          dir = this.findPosition(this.toUp, this.side, this.align, defaultFit)
        }
        
        this.dir = dir
        
        if (this.$refs.popup.clientWidth > window.innerWidth - 10) {
          this.maxWidth = `${window.innerWidth - 10}px`
        } else {
          this.maxWidth = undefined
        }
      }
    },
    findPosition(toUp, side, align, fit) {
      let newDir = { toUp, side, align, }
      
      if (!fit.top && !fit.bottom) {
        // FIXED
      } else if (!fit.top) {
        // если итак смотрит вниз
        if (!toUp && side === 'bottom') {
          // то ничего не делаем
        } else {
          // то меняем направление вниз
          newDir.toUp = false
          if (side === 'top') newDir.side = 'bottom'
          
          // если вниз не тоже поместился, то возвращаем назад
          if (!isFit(this.getPopupRect(newDir.toUp, newDir.side, align)).bottom) {
            // FIXED
            newDir.toUp = toUp
            newDir.side = side
          }
        }
      } else if (!fit.bottom) {
        if (toUp && side === 'top') {
          // то ничего не делаем
        } else {
          newDir.toUp = true
          if (side === 'bottom') newDir.side = 'top'
          
          if (!isFit(this.getPopupRect(newDir.toUp, newDir.side, align)).top) {
            // FIXED
            newDir.toUp = toUp
            newDir.side = side
          }
        }
      }
      
      if (!fit.left || !fit.right) {
        const self = fit.left ? 'right' : 'left'
        const other = fit.left ? 'left' : 'right'
        
        if (side === 'top' || side === 'bottom') {
          if (align === 'center') {
            newDir.align = self
          }
          if (align === self) {
            newDir.align = other
            if (!isFit(this.getPopupRect(newDir.toUp, newDir.side, newDir.align))[self]) {
              // FIXED
              newDir.align = 'center'
            }
          }
          if (align === other) {
            newDir.align = self
            if (!isFit(this.getPopupRect(newDir.toUp, newDir.side, newDir.align))[other]) {
              // FIXED
              newDir.align = 'center'
            }
          }
        } else {
          newDir.side = 'bottom'
          newDir.toUp = false
          newDir = this.findPosition(...newDir, isFit(this.getPopupRect(...newDir)))
        }
      }
      
      return { ...newDir, }
    },
    debouncedCalcStyle: debounce(function() {
      this.calcStyle()
    }, 100),
    getPopupRect(toUp, side, align) {
      const popup = this.$refs.popup
      return getPopupRect(toUp, side, align, this.element.getBoundingClientRect(), popup.offsetWidth, popup.offsetHeight)
    },
  },
}
</script>

<style lang="scss">
  html {
    --n-popup-width: 500px;
  }
</style>
<style lang="scss" scoped>
  .n-popup {
    line-height: 1;
    
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
