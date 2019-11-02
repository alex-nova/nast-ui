<template>
  <div class="page-components-button">
    <component-page :props="props" :descriptions="descriptions" :todo="todo" path="components/button/examples" />
  </div>
</template>

<script>
import props from 'nast-ui/src/components/Button/props'
import ComponentPage from 'components/componentPage/Index'

export default {
  name: 'PageComponentsButton',
  components: { ComponentPage, },
  data: () => ({
    descriptions: {
      color: 'Цвета кнопки. Возможные значения: default, primary, secondary, tertiary, success, danger.',
      round: 'Закгругленный бордер',
      flat: 'Кнопка без фона',
      outline: 'outline',
      type: 'type',
      disabled: '',
      wide: '',
      loading: '',
      icon: '',
      iconRight: '',
    },
    props,
    todo: [],
  }),
  html() {
    return {
      title: 'Button',
    }
  },
}
</script>

<style lang="scss" scoped>
.page-components-button {}
</style>
