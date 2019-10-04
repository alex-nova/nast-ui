<template>
  <div v-click-outside="clickOutside" :class="[ 'n-dropdown-group', {open: isOpen}, ]">
    <n-navigation-item :value="value">
      <template v-slot="{ value, }">
        <slot :value="value" />
      </template>
    </n-navigation-item>
    
    <div v-show="isOpen" class="n-dropdown">
      <template v-for="(child, i) in item.children">
        <template v-if="child.children">
          <n-dropdown-group :key="child.title" :item="child" :active="active.children" :absolute="absolute" :click="click">
            <template v-slot="{ item, }">
              <slot :item="item" />
            </template>
          </n-dropdown-group>
        </template>
        <template v-else>
          <n-navigation-item :key="child.title" :item="child" :click="itemClick" :active="isActive(i)">
            <template v-slot="{ item, }">
              <slot :item="item" />
            </template>
          </n-navigation-item>
        </template>
      </template>
    </div>
  </div>
</template>

<script>
import clickOutside from './../../../../directives/click-outside'
import props from './../props'

export default {
  name: 'NDropdownGroup',
  directives: { clickOutside, },
  mixins: [ props, ],
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped>
  .n-dropdown-group {
  }
</style>
