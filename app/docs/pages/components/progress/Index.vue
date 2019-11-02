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
      speed: 'Animation speed in milliseconds',
    },
    props,
    todo: [
      'Добавить описания полей',
      'Добавить примеры использования',
      'Добавить ожидаемое время загрузки (для более точного движения полосы)',
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
.page-components-progress {

}
</style>
