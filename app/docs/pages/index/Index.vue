<template>
  <div class="page-index">
    <n-card>
      <n-tabs-menu v-model="activeTab" :tabs="tabs" />
      <h1>Hello!</h1>
      <n-button color="primary">dasd1</n-button>
      <n-input title="123" />
      <n-tabs v-model="activeTab" :tabs="tabs">
        <template #info="{tab}">{{ tab.content }}</template>
        <template #users="{tab}">{{ tab.name }}</template>
      </n-tabs>
    </n-card>
  </div>
</template>

<script>
export default {
  name: 'PageIndex',
  data: () => ({
    activeTab: 'info',
    tabs: [
      { name: 'info', title: 'Info', content: 'qsadasdqe3213123 123 123 ws ad sad', },
      { name: 'users', title: 'Users', content: 'users dqe3213123 123 123 ws ad sad', },
    ],
  }),
}
</script>

<style lang="scss" scoped>
.page-index {

}
</style>
