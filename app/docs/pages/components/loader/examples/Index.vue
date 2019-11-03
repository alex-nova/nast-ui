<template>
  <div>
    <n-loader :loading="loading" />
    <n-button @click="load">go</n-button>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
  }),
  methods: {
    load() {
      this.loading = true
      
      setTimeout(() => {
        this.loading = false
      }, 4000)
    },
  },
}
</script>

<style lang="scss" scoped>
  .n-progress {
    margin-bottom: 15px;
  }
</style>
