<template>
  <div>
    <n-progress ref="progress1" :speed="1000" />
    <n-button @click="load1">slow</n-button>
    <n-progress ref="progress2" :speed="50" />
    <n-button @click="load2">fast</n-button>
  </div>
</template>

<script>
export default {
  methods: {
    load1() {
      this.$refs.progress1.start()
    
      setTimeout(() => {
        this.$refs.progress1.end(true)
      }, 4000)
    },
    load2() {
      this.$refs.progress2.start()
    
      setTimeout(() => {
        this.$refs.progress2.end(true)
      }, 4000)
    },
  },
}
</script>

<style lang="scss" scoped>
  .n-progress {
    margin: 15px 0;
  }
</style>
