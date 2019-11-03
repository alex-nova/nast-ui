<template>
  <div>
    <n-progress ref="progress" hidden />
    <n-button @click="load">go</n-button>
  </div>
</template>

<script>
export default {
  methods: {
    load() {
      this.$refs.progress.start()
      
      setTimeout(() => {
        this.$refs.progress.end(true)
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
