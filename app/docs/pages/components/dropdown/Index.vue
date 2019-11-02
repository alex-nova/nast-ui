<template>
  <div class="page-components-dropdown">
    <component-page :props="props" :descriptions="descriptions" :todo="todo" path="components/dropdown/examples" />
  </div>
</template>

<script>
import props from 'nast-ui/src/components/Dropdown/props'
import ComponentPage from 'components/componentPage/Index'

export default {
  name: 'PageComponentsDropdown',
  components: { ComponentPage, },
  data: () => ({
    descriptions: {
    },
    props,
    todo: [
      'Надо добавить примеры использования',
    ],
  }),
  html() {
    return {
      title: 'Dropdown',
    }
  },
}
</script>

<style lang="scss" scoped>
.page-components-dropdown {

}
</style>
