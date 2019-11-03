<template>
  <div class="page-components-button">
    <component-page :props="props" :descriptions="descriptions" :todo="todo" path="components/input/examples" />
  </div>
</template>

<script>
import props from 'nast-ui/src/components/Input/props'
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
        type: 'text|password|number|textarea',
      }
    },
    todo() {
      return []
    },
  },
  html() {
    return {
      title: 'Input',
    }
  },
}
</script>

<style lang="scss" scoped>
.page-components-button {}
</style>
