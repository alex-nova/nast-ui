<template>
  <div class="n-list-item" @click="s_click">
    <slot :item="value">{{ getTitle(value) }}</slot>
  </div>
</template>

<script>
import props from './../props'
import { getTitle, } from 'nast-ui/src/_utils/functions'

export default {
  name: 'NListItem',
  mixins: [ props, ],
  methods: {
    getTitle(item) {
      return getTitle(item, this.itemTitle)
    },
    s_click(event) {
      this.click(this.value, event)
      this.$emit('click', this.value, event)
    },
  },
}
</script>

<style lang="scss" scoped>
  .n-list-item {
    padding: 10px 20px;
    cursor: pointer;
    
    &:not(.n-active):hover {
      background: var(--primary-t-10);
    }
  }
</style>
