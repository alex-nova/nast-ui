<template>
  <div class="n-list-group">
    <n-list-item :value="value" :item-title="itemTitle" :item-value="itemValue" @click="toggle">
      <template #default="{ item, }"><slot name="group" :item="item" /></template>
    </n-list-item>
    
    <div v-if="isOpen" class="n-content">
      <template v-for="child in value[itemChildren]">
        <template v-if="child[itemChildren]">
          <n-list-group :key="getValue(child)" :value="child" :item-title="itemTitle" :item-value="itemValue" :item-children="itemChildren">
            <template #group="{ item, }"><slot name="group" :item="item" /></template>
            <template #default="{ item, }"><slot :item="item" /></template>
          </n-list-group>
        </template>
        <template v-else>
          <n-list-item :key="getValue(child)" :value="child" :item-title="itemTitle" :item-value="itemValue">
            <template #default="{ item, }"><slot :item="item" /></template>
          </n-list-item>
        </template>
      </template>
    </div>
  </div>
</template>

<script>
import { getValue, } from 'nast-ui/src/_utils/functions'
import props from '../props'

export default {
  name: 'NListGroup',
  mixins: [ props, ],
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    getValue(item) {
      return getValue(item, this.itemValue)
    },
    toggle() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>

<style lang="scss" scoped>
  .n-list-group {
    .n-content {
      padding-left: var(--n-list-tree-padding);
    }
  }
</style>
