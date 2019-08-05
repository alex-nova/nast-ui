<template>
  <div :class="[ 'n-navigation-item', { active, }, ]">
    <n-link :to="item.route" class="content" @click="s_click">
      <slot :item="item">{{ item.title }}</slot>
    </n-link>
  </div>
</template>

<script>
import props from './../props'

export default {
  name: 'NNavigationItem',
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
  .n-navigation-item {
    &::v-deep a {
      color: inherit;
      text-decoration: none;
    }
    span {
      cursor: pointer;
    }
  }
</style>
