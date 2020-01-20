<template>
  <div class="n-datatable">
    <n-data-component :data="data" :fields="columns" @updated="updated" />
    <n-table :data="computedData" :columns="columns" />
  </div>
</template>

<script>
import props from './../props'

export default {
  name: 'NDatatable',
  mixins: [ props, ],
  data() {
    return {
      computedData: [],
    }
  },
  methods: {
    updated(data) {
      this.computedData = data
    },
  },
}
</script>

<style lang="scss" scoped>
  .n-datatable {

  }
</style>
