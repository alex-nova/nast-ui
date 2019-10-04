<template>
  <div :class="[ 'n-dropdown-item', { 'n-active': active, }, ]" @click="s_click">
    <slot :value="value">{{ value.title }}</slot>
  </div>
</template>

<script>
import props from './../props'

export default {
  name: 'NDropdownItem',
  mixins: [ props, ],
  methods: {
    s_click(e) {
      this.click(e)
      this.$emit('click', e)
    },
  },
}
</script>

<style lang="scss" scoped>
  .n-dropdown-item {
    padding: 5px 10px;
  }
</style>
