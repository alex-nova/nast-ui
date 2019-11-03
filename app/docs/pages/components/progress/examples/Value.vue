<template>
  <div>
    {{ percent }}%
    <n-progress ref="progress" :value.sync="status" />
    <n-button @click="load">go</n-button>
  </div>
</template>

<script>
export default {
  data: () => ({
    status: 0,
  }),
  computed: {
    percent() {
      return Math.ceil(this.status * 100)
    },
  },
  methods: {
    load() {
      this.$refs.progress.start()
      
      setTimeout(() => {
        this.$refs.progress.end()
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
