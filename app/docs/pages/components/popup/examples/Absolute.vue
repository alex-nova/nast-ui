<template>
  <n-items class="sample-absolute">
    <n-popup :open.sync="open.one">
      <n-button slot="action" @click="toggle('one')">Simple</n-button>
      <div class="content">Dropdown content</div>
    </n-popup>
    <n-popup :open.sync="open.two" absolute>
      <n-button slot="action" @click="toggle('two')">Absolute</n-button>
      <div class="content">Dropdown content</div>
    </n-popup>
  </n-items>
</template>

<script>
export default {
  data: () => ({
    open: {},
  }),
  methods: {
    toggle(name) {
      this.$set(this.open, name, !this.open[name])
    },
  },
}
</script>

<style lang="scss" scoped>
  .sample-absolute {
    position: relative;
    overflow: hidden;
  }

  .content {
    padding: 30px;
  }
</style>
