<template>
  <div class="page-components-select">
    <component-page :props="props" :descriptions="descriptions" :todo="todo" path="components/select/examples" />
  </div>
</template>

<script>
import props from 'nast-ui/src/components/Select/props'
import ComponentPage from 'components/componentPage/Index'

export default {
  name: 'PageComponentsButton',
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
      title: 'Select',
    }
  },
}
</script>

<style lang="scss" scoped>
.page-components-select {}
</style>
