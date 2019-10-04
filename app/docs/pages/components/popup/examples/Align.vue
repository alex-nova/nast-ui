<template>
  <n-items class="sample-align">
    <n-popup :open.sync="open.one">
      <n-button slot="action" @click="toggle('one')">Left</n-button>
      <div class="content">Dropdown content</div>
    </n-popup>
    <n-popup :open.sync="open.two" align="right">
      <n-button slot="action" @click="toggle('two')">Right</n-button>
      <div class="content">Dropdown content</div>
    </n-popup>
    <n-popup :open.sync="open.three" align="center">
      <n-button slot="action" @click="toggle('three')">Center</n-button>
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
    closeAll() {
      this.open = {}
    },
  },
}
</script>

<style lang="scss" scoped>
  .sample-align {
    .content {
      padding: 30px;
    }
  }
</style>
