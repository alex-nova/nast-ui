<template>
  <div>
    Value: {{ selected }}
    <n-dropdown :data="data" :value.sync="selected" item-value="id">
      <n-button icon-right="angle-down">Open</n-button>
    </n-dropdown>
  </div>
</template>

<script>
export default {
  data: () => ({
    selected: null,
    data: [
      { title: 'Первый', id: 1, },
      { title: 'Второй', id: 2, },
      { title: 'Третий', id: 3, },
    ],
  }),
}
</script>

<style lang="scss" scoped>

</style>
