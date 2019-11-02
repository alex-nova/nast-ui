<template>
  <div class="page-components-progress">
    <component-page :props="props" :descriptions="descriptions" :todo="todo" path="components/progress/examples" />
  </div>
</template>

<script>
import props from 'nast-ui/src/components/Progress/props'
import ComponentPage from 'components/componentPage/Index'

export default {
  name: 'PageComponentsDropdown',
  components: { ComponentPage, },
  data: () => ({
    descriptions: {
    },
    props,
    todo: [],
  }),
  html() {
    return {
      title: 'Dropdown',
    }
  },
}
</script>

<style lang="scss" scoped>
.page-components-progress {

}
</style>
