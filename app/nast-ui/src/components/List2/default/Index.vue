<template>
  <div class="n-list">
    <div v-for="(item, key) in data" :key="key" class="n-item">
      <n-list-group :value="item" :item-title="itemTitle" :item-value="itemValue" :item-children="itemChildren" />
    </div>
  </div>
</template>

<script>
import props from './../props'
import { getTitle, } from 'nast-ui/src/_utils/functions'

export default {
  name: 'NList',
  mixins: [ props, ],
  data() {
    return {
    
    }
  },
  methods: {
    getTitle(item) {
      return getTitle(item, this.itemTitle)
    },
  },
}
</script>

<style lang="scss">
  html {
    --n-list-tree-padding: 20px;
  }
</style>
<style lang="scss" scoped>
  .n-list {
    font-size: .9em;
  }
</style>
