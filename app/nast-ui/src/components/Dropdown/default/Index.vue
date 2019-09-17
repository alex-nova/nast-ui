<template>
  <div v-if="s_open" ref="dropdown" v-click-outside="clickOutside" class="n-dropdown">
    <n-popup :open.sync="s_open" :target="target">
      <div class="n-content">
        <slot />
      </div>
    </n-popup>
  </div>
</template>

<script>
import props from './../props'
import clickOutside from 'nast-ui/src/directives/click-outside'

export default {
  name: 'NDropdown',
  directives: { clickOutside, },
  mixins: [ props, ],
  data() {
    return {
      s_open: Boolean(this.open),
    }
  },
  computed: {
    element() {
      return document.getElementById(this.target)
    },
  },
  watch: {
    open(value) {
      this.s_open = value
      value ?
        this.element.removeEventListener('click', this.targetClick) :
        this.element.addEventListener('click', this.targetClick)
    },
  },
  mounted() {
    this.element.addEventListener('click', this.targetClick)
  },
  methods: {
    toggle(valueProp) {
      const value = valueProp === undefined ? !this.s_open : valueProp
      
      this.s_open = value
      this.$emit('update:open', value)
    },
    targetClick() {
      this.closeByTarget ? this.toggle() : this.toggle(true)
    },
    clickOutside(event) {
      if (this.s_open && !event.target.closest('#'+this.target) && this.closeByOutside) {
        this.toggle()
      }
    },
  },
}
</script>

<style lang="scss" scoped>
  .n-dropdown {
    .n-content {
      padding: 20px;
    }
  }
</style>
