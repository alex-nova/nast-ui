<template>
  <div>
    <n-dropdown :data="data" :value.sync="selected" open>
      <n-button icon-right="angle-down">Open</n-button>
    </n-dropdown>
  </div>
</template>

<script>
export default {
  data: () => ({
    selected: null,
    data: [
      { title: 'Первый', value: 1, },
      { title: 'Второй', value: 2, },
      { title: 'Третий', value: 3, },
    ],
  }),
}
</script>

<style lang="scss" scoped>

</style>
