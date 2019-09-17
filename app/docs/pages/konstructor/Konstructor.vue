<template>
  <div class="konstructor">
    <template v-for="item in config">
      <n-items :key="item.name">
        <slot :name="item.type" :props="getProps(item)"></slot>
      </n-items>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Konstructor',
  props: {
    config: { type: Array, required: true, },
    data: { type: Object, default: () => ({}), },
    readonly: { type: Boolean, default: false, },
  },
  data: () => ({
  }),
  methods: {
    getProps(item) {
      return {
        title: item.title,
        name: item.name,
        disabled: item.disabled,
        value: this.data[item.name],
        text: this.readonly,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
  .n-items {
    margin: -10px 0;
    
    &::v-deep > * {
      margin: 10px 0;
    }
  }
</style>
