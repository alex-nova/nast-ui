<template>
  <div>
    Value: {{ selected1 }}
    <n-dropdown :data="data" :value.sync="selected1">
      <n-button icon-right="angle-down">Open</n-button>
    </n-dropdown>
    <br />
    Value: {{ selected2 }}
    <n-dropdown :data="data" :value.sync="selected2">
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
      'Первый',
      'Второй',
      'Третий',
    ],
  }),
}
</script>

<style lang="scss" scoped>

</style>
