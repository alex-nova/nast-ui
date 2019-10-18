<template>
  <div :class="[ 'n-dropdown-item', { 'n-active': active, }, ]" @click="s_click">
    <slot :item="value">{{ value.title }}</slot>
  </div>
</template>

<script>
import props from './../props'

export default {
  name: 'NDropdownItem',
  mixins: [ props, ],
  methods: {
    s_click(event) {
      this.click(this.value, this.indexes, event)
      this.$emit('click', this.value, this.indexes, event)
    },
  },
}
</script>

<style lang="scss" scoped>
  .n-dropdown-item {
    padding: 12px 20px;
    cursor: pointer;
    
    &.active {
      background: var(--primaty-t-8);
    }
    &:hover {
      background: var(--primary-t-10);
    }
  }
</style>
