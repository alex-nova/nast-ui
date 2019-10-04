<template>
  <n-items v-click-outside="closeAll" class="sample-up">
    <n-popup :open.sync="open.one" up>
      <n-button slot="action" @click="toggle('one')">Bottom</n-button>
      <div class="content">Dropdown content</div>
    </n-popup>
    <n-popup :open.sync="open.two" side="top" up>
      <n-button slot="action" @click="toggle('two')">Top</n-button>
      <div class="content">Dropdown content</div>
    </n-popup>
    <n-popup :open.sync="open.three" side="left" up>
      <n-button slot="action" @click="toggle('three')">Left</n-button>
      <div class="content">Dropdown content</div>
    </n-popup>
    <n-popup :open.sync="open.four" side="right" up>
      <n-button slot="action" @click="toggle('four')">Right</n-button>
      <div class="content">Dropdown content</div>
    </n-popup>
  </n-items>
</template>

<script>
import clickOutside from 'nast-ui/src/directives/click-outside'

export default {
  directives: { clickOutside, },
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
  .sample-up {
    .content {
      padding: 30px;
    }
  }
</style>
