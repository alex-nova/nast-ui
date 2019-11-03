<template>
  <div class="page-components-loader">
    <component-page :props="props" :descriptions="descriptions" :todo="todo" path="components/loader/examples" />
  </div>
</template>

<script>
import props from 'nast-ui/src/components/Loader/props'
import ComponentPage from 'components/componentPage/Index'

export default {
  name: 'PageComponentsDropdown',
  components: { ComponentPage, },
  data: () => ({
    props,
  }),
  computed: {
    ...$n.mapGetters('components', [ 'colorsAsText', ]),
    descriptions() {
      return {
        color: `Цвет полосы загрузки. Может принимать значения: ${this.colorsAsText}.`,
      }
    },
    todo() {
      return []
    },
  },
  html() {
    return {
      title: 'Loader',
    }
  },
}
</script>

<style lang="scss" scoped>
.page-components-loader {

}
</style>
