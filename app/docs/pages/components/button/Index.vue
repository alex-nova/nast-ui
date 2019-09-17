<template>
  <div class="page-components-button">
    <component-page :props="props.props" :descriptions="descriptions" path="components/button/examples" />
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
