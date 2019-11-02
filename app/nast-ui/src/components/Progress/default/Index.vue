<template>
  <div :class="[ 'n-progress', color, {'n-hidden': hidden}, ]">
    <div :class="[ 'n-content', {'n-ending': ending}, ]" :style="contentStyle"></div>
  </div>
</template>

<script>
import props from './../props'

export default {
  name: 'NProgress',
  mixins: [ props, ],
  data() {
    return {
      s_value: this.value,
      ending: false,
      interval: null,
    }
  },
  computed: {
    contentStyle() {
      return {
        width: (this.s_value * 100) + '%',
        '--n-auto-progress-speed': `${this.speed}ms`,
      }
    },
    step() {
      return (1 - this.s_value) / 40
    },
  },
  watch: {
    value(value) {
      this.s_value = value
    },
  },
  methods: {
    start() {
      this.started()
      this.$emit('started')
      if (this.s_value === 1) {
        this.reset(0)
      }
      
      this.interval = setInterval(() => {
        if (this.s_value >= 1) {
          this.end()
        } else {
          this.change(this.s_value + this.step)
        }
      }, this.speed)
    },
    pause(silent = false) {
      if (!silent) {
        this.paused(this.value)
        this.$emit('paused', this.value)
      }
      
      if (this.interval) {
        clearInterval(this.interval)
      }
    },
    end() {
      this.pause(true)
      this.$nextTick(() => {
        this.change(1)
        setTimeout(() => {
          this.ended()
          this.$emit('ended')
        }, this.speed)
      })
    },
    reset() {
      this.pause(true)
      this.ending = true
      this.change(0)
      setTimeout(() => {
        this.ending = false
      }, 10)
    },
    change(value) {
      this.s_value = value
      this['update:value'](value)
      this.$emit('update:value', value)
    },
  },
}
</script>

<style lang="scss" src="./../../../_utils/cssVariables.scss"></style>
<style lang="scss">
  html {
    --n-progress-height: 5px;
  }
</style>
<style lang="scss" scoped>
  @import "../../../_utils/scssVariables";
  
  .n-progress {
    position: relative;
    height: var(--n-progress-height);
  
    @each $color, $value in $colors {
      &.#{$color} {
        &:not(.n-hidden) {
          background: var(--primary-t-10);
        }
        .n-content {
          background: var(--primary);
        }
      }
    }
  
    .n-content {
      height: 100%;
      position: absolute;
      border-radius: var(--border-radius);
      transition: all var(--n-auto-progress-speed) linear;
    
      &.n-ending {
        transition: none !important;
      }
    }
    
  }
  
</style>
