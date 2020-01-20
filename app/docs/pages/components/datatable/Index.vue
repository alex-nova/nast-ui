<template>
  <div class="page-components-datatable">
    <component-page :props="props" :descriptions="descriptions" :todo="todo" path="components/datatable/examples" />
    
  </div>
</template>

<script>
import props from 'nast-ui/src/components/Datatable/props'
import ComponentPage from 'components/componentPage/Index'

export default {
  name: 'PageComponentsDatatable',
  components: { ComponentPage, },
  data: () => ({
    props,
  }),
  computed: {
    descriptions() {
      return {
      }
    },
    todo() {
      return []
    },
  },
  html() {
    return {
      title: 'Datatable',
    }
  },
}
</script>

<style lang="scss" scoped>
.page-components-datatable {}
</style>
