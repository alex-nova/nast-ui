<template>
  <div>
    <n-dropdown :data="data" :value.sync="selected" :close-by-outside="false">
      <n-button icon-right="angle-down">This will not close by click outside</n-button>
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
