<template>
  <div :class="['preloader', color, size, {hidden}]">
    <div :class="['active', {reset: isReset}]" :style="activeStyle"></div>
  </div>
</template>

<script>
import model from './../props'

export default {
  name: 'NProgress',
  mixins: [ model, ],
  data() {
    return {
      state: 0,
      isReset: false,
      transitionSpeed: 200,
    }
  },
  computed: {
    activeStyle() {
      return {
        width: this.state + '%',
      }
    },
    speed() {
      return (100 - this.state) / 20
    },
  },
  watch: {
    loading(value) {
      if (value) {
        this.start()
      } else {
        this.stop()
      }
    },
  },
  mounted() {
    if (this.loading) {
      this.start()
    }
  },
  methods: {
    start() {
      if (this.loading) {
        $n.delay(() => {
          this.state += this.speed
          this.start()
        }, this.transitionSpeed)
      } else {
        this.stop()
      }
    },
    stop() {
      this.state = 100
      $n.delay(() => {
        this.reset()
        this.$emit('stopped')
      }, this.transitionSpeed + 50)
    },
    reset() {
      this.isReset = true
      this.state = 0
      $n.delay(() => {
        this.isReset = false
      }, 100)
    },
  },
}
</script>

<style lang="scss" scoped>
  $n-gray-200:      #e9ecef !default;
  $n-default:       $n-gray-200 !default;
  $n-primary:       #843ea1 !default;
  $n-success:       #28a745 !default;
  $n-info:          #17a2b8 !default;
  $n-warning:       #ffc107 !default;
  $n-danger:        #dc3545 !default;
  $n-colors: (
    "default":      $n-default,
    "primary":      $n-primary,
    "success":      $n-success,
    "info":         $n-info,
    "warning":      $n-warning,
    "danger":       $n-danger,
  ) !default;
  
  
  $transition-speed: 200ms;
  $sizes: (
    xs: .125em,
    sm: .1875em,
    md: .25em,
    lg: .375em,
    xl: .625em,
  ) !default;
  
  @each $color, $value in $n-colors {
    .preloader.#{$color} {
      background: var(--primary-t-2);
      .active {
        background: var(--primary);
      }
    }
  }
  @each $size, $value in $sizes {
    .preloader.#{$size} {
      height: $value;
    }
  }
  
  .preloader {
    position: relative;
    
    &.hidden {
      background: transparent;
    }
    
    .active {
      height: 100%;
      position: absolute;
      transition: all $transition-speed linear;
      
      &.reset {
        transition: none;
      }
    }
  }
</style>
