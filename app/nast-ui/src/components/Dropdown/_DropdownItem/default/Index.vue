<template>
  <div :class="[ 'n-dropdown-item', { 'n-active': active, }, ]" @click="s_click">
    <slot :item="value">{{ getTitle(value) }}</slot>
  </div>
</template>

<script>
import isObject from 'lodash/isObject'
import isFunction from 'lodash/isFunction'
import props from './../props'

export default {
  name: 'NDropdownItem',
  mixins: [ props, ],
  methods: {
    getTitle(item) {
      if (isObject(item)) {
        return isFunction(this.itemTitle) ? this.itemTitle(item) : item[this.itemTitle]
      }
      return item
    },
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
    
    &.n-active {
      background: var(--primary);
      color: var(--primary-text);
    }
    &:not(.n-active):hover {
      background: var(--primary-t-10);
    }
  }
</style>
