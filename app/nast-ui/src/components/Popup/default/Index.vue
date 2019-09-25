<template>
  <div :class="['n-popup', {'n-inline': inline}]">
    <slot name="action" />
    <div ref="wrapper" :class="['n-wrapper', {'n-absoluted': absolute},]">
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
      dir: null, // { up, side, align, }
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
        const popupRect = this.getPopupRect(this.dir.up, this.dir.side, this.dir.align)
        const pos = getPosition(popupRect, this.element.getBoundingClientRect(), this.absolute)
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
    absolute(value) {
      if (!value) {
        this.togglePopupPlace(false)
      }
    },
  },
  mounted() {
    this.onChange(this.s_open)

    document.addEventListener('scroll', this.debouncedCalcStyle)
    window.addEventListener('resize', this.debouncedCalcStyle)
  },
  beforeDestroy() {
    if (this.absolute) {
      this.togglePopupPlace(false)
    }
    document.removeEventListener('scroll', this.debouncedCalcStyle)
    window.removeEventListener('resize', this.debouncedCalcStyle)
  },
  methods: {
    onChange(value) {
      this.s_open = value
      
      if (value) {
        this.$nextTick(() => {
          this.calcStyle()
          if (this.absolute) {
            this.togglePopupPlace(true)
          }
          setTimeout(() => {
            this.visible = true
          }, 1)
        })
      } else {
        this.togglePopupPlace(false)
        this.visible = false
      }
    },
    togglePopupPlace(value) {
      if (this.$refs.popup) {
        if (value) {
          document.body.append(this.$refs.popup)
        } else {
          this.$refs.wrapper.append(this.$refs.popup)
        }
      }
    },
    calcStyle() {
      if (this.s_open) {
        let dir
        const defaultFit = isFit(this.getPopupRect(this.up, this.side, this.align))
        
        if (defaultFit.total) {
          dir = {
            up: this.up,
            side: this.side,
            align: this.align,
          }
        } else {
          dir = this.findPosition(this.up, this.side, this.align, defaultFit)
        }
        
        this.dir = dir
        
        if (this.$refs.popup.clientWidth > window.innerWidth - 10) {
          this.maxWidth = `${window.innerWidth - 10}px`
        } else {
          this.maxWidth = undefined
        }
      }
    },
    findPosition(up, side, align, fit) {
      let newDir = { up, side, align, }
      
      if (!fit.top && !fit.bottom) {
        // FIXED
      } else if (!fit.top) {
        // если итак смотрит вниз
        if (!up && side === 'bottom') {
          // то ничего не делаем
        } else {
          // то меняем направление вниз
          newDir.up = false
          if (side === 'top') newDir.side = 'bottom'
          
          // если вниз не тоже поместился, то возвращаем назад
          if (!isFit(this.getPopupRect(newDir.up, newDir.side, align)).bottom) {
            // FIXED
            newDir.up = up
            newDir.side = side
          }
        }
      } else if (!fit.bottom) {
        if (up && side === 'top') {
          // то ничего не делаем
        } else {
          newDir.up = true
          if (side === 'bottom') newDir.side = 'top'
          
          if (!isFit(this.getPopupRect(newDir.up, newDir.side, align)).top) {
            // FIXED
            newDir.up = up
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
            if (!isFit(this.getPopupRect(newDir.up, newDir.side, newDir.align))[self]) {
              // FIXED
              newDir.align = 'center'
            }
          }
          if (align === other) {
            newDir.align = self
            if (!isFit(this.getPopupRect(newDir.up, newDir.side, newDir.align))[other]) {
              // FIXED
              newDir.align = 'center'
            }
          }
        } else {
          newDir.side = 'bottom'
          newDir.up = false
          newDir = this.findPosition(...newDir, isFit(this.getPopupRect(...newDir)))
        }
      }
      
      return { ...newDir, }
    },
    debouncedCalcStyle: debounce(function() {
      this.calcStyle()
    }, 100),
    getPopupRect(up, side, align) {
      const popup = this.$refs.popup
      return getPopupRect(up, side, align, this.element.getBoundingClientRect(), popup.offsetWidth, popup.offsetHeight)
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
      &.n-absoluted {
        display: none;
      }
    }
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
</style>
