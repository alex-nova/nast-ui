<template>
  <div>
    {{ percent }}%
    <n-progress ref="progress" :value.sync="status" />
    <br />
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
        this.status = 0
      }, 4000)
    },
  },
}
</script>
