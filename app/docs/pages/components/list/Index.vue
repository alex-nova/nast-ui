<template>
  <div class="page-components-list">
    <component-page :props="props" :descriptions="descriptions" :todo="todo" path="components/list/examples" />
  </div>
</template>

<script>
import props from 'nast-ui/src/components/List/props'
import ComponentPage from 'components/componentPage/Index'

export default {
  name: 'PageComponentsList',
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
      title: 'List',
    }
  },
}
</script>

<style lang="scss" scoped>
.page-components-list {}
</style>
