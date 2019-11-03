<template>
  <n-items>
    <n-input v-model="value1" title="Array values" />
    <n-input v-model="value2" title="String value" />
  </n-items>
</template>

<script>
export default {
  data: () => ({
    value1: [ 'sample', 'array', 'values', ],
    value2: 'sample string value',
  }),
}
</script>

<style lang="scss" scoped>

</style>
