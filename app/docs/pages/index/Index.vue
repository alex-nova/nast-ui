<template>
  <div class="page-index">
    <n-card>
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
