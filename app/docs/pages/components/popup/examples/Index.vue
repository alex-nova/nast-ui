<template>
  <div class="index">
    asdasda sd asdasdas
    <n-popup :open="open" target="index-toggle" up side="top" align="left" absolute>
      <a id="index-toggle" slot="action" icon-right="angle-down" @click="toggle">Opensajdhf ksadgf jkgahds skajdf</a>
      Dropdown content
    </n-popup>
    asd asd asd as
  </div>
</template>

<script>
export default {
  data: () => ({
    open: false,
  }),
  methods: {
    toggle() {
      this.open = !this.open
    },
  },
}
</script>

<style lang="scss" scoped>
  .index {
    
    &.relative {
      position: relative;
      overflow: hidden;
    }
  }
</style>
