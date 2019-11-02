<template>
  <div>
    <n-progress :loading="loading" />
    <br />
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
      }, 3000)
    },
  },
}
</script>
