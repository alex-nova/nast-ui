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
    props,
  }),
  computed: {
    ...$n.mapGetters('components', [ 'colorsAsText', ]),
    descriptions() {
      return {
        value: 'Текущее значение загрузки. Может принимать значения от 0 до 1.',
        color: `Цвет полосы загрузки. Может принимать значения: ${this.colorsAsText}.`,
        speed: 'Скорость анимации в миллисекундах.',
        hidden: 'Сделать полосу пути загрузки невидимой.',
      }
    },
    todo() {
      return undefined
    },
  },
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
