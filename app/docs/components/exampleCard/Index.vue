<template>
  <div class="component-example-card">
    <n-card>
      <div slot="header" class="header">
        <h3>{{ title }}</h3>
        <div class="tools">
          <n-button icon="code" round />
        </div>
      </div>
      <slot></slot>
    </n-card>
  </div>
</template>

<script>
export default {
  name: 'ExampleCard',
  props: {
    title: { type: String, default: '', },
  },
  methods: {
  
  },
}
</script>

<style lang="scss" scoped>
  .component-example-card {
    .n-card {
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 20px;
      
        h3 {
          margin: 0;
        }
      }
    }
  }
</style>
