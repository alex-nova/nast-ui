<template>
  <div>
    Value: {{ selected }}
    <n-dropdown :data="data" :value.sync="selected" item-title="name">
      <n-button icon-right="angle-down">Open</n-button>
    </n-dropdown>
  </div>
</template>

<script>
export default {
  data: () => ({
    selected: null,
    data: [
      { name: 'Первый', value: 1, },
      { name: 'Второй', value: 2, },
      { name: 'Третий', value: 3, },
    ],
  }),
}
</script>

<style lang="scss" scoped>

</style>
