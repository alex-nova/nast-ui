<template>
  <div>
    Value: {{ selected1 }}
    <n-dropdown :data="data" :full-value.sync="selected1">
      <n-button icon-right="angle-down">Open</n-button>
    </n-dropdown>
    <br />
    Value: {{ selected2 }}
    <n-dropdown :data="data" :full-value.sync="selected2">
      <n-button icon-right="angle-down">Open multi</n-button>
    </n-dropdown>
  </div>
</template>

<script>
export default {
  data: () => ({
    selected1: null,
    selected2: [],
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
