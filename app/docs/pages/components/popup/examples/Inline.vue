<template>
  <div class="sample-inline">
    It
    <n-popup :open.sync="open" inline>
      <a slot="action" @click="toggle">can</a>
      <div class="content">Dropdown content</div>
    </n-popup>
    be part of text
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
  .sample-inline {
    .content {
      padding: 30px;
    }
  }
</style>
