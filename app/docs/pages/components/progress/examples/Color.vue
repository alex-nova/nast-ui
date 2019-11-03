<template>
  <div>
    <n-progress ref="default" color="default" />
    <n-progress ref="primary" />
    <n-progress ref="secondary" color="secondary" />
    <n-progress ref="tertiary" color="tertiary" />
    <n-progress ref="success" color="success" />
    <n-progress ref="danger" color="danger" />
    <n-button @click="load">go</n-button>
  </div>
</template>

<script>
export default {
  methods: {
    load() {
      this.$refs.default.start()
      this.$refs.primary.start()
      this.$refs.secondary.start()
      this.$refs.tertiary.start()
      this.$refs.success.start()
      this.$refs.danger.start()
      
      setTimeout(() => {
        this.$refs.default.end(true)
        this.$refs.primary.end(true)
        this.$refs.secondary.end(true)
        this.$refs.tertiary.end(true)
        this.$refs.success.end(true)
        this.$refs.danger.end(true)
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
