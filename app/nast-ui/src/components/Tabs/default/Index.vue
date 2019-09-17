<template>
  <div class="n-tabs">
    <template v-if="tabs.length">
      <slot v-for="(tab, index) in tabs" :name="tab.name || index" :tab="tab">
        {{ tab.content }}
      </slot>
    </template>
    <template v-else>
      <slot v-for="(slot, name) in $scopedSlots" :name="name" :tab="{}"></slot>
    </template>
  </div>
</template>

<script>
import props from './../props'

export default {
  mixins: [ props, ],
}
</script>

<style lang="scss" scoped>
  .n-tabs {
  
  }
</style>
