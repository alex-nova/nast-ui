<template>
  <div class="page-components-image">
    <component-page :props="props" :descriptions="descriptions" :todo="todo" path="components/image/examples" />
  </div>
</template>

<script>
import props from 'nast-ui/src/components/Image/props'
import ComponentPage from 'components/componentPage/Index'

export default {
  name: 'PageComponentsImage',
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
      title: 'Image',
    }
  },
}
</script>

<style lang="scss" scoped>
.page-components-image {}
</style>
