<template>
  <div class="page-components-popup">
    <component-page :props="props" :descriptions="descriptions" :todo="todo" path="components/popup/examples" />
  </div>
</template>

<script>
import props from 'nast-ui/src/components/Popup/props'
import ComponentPage from 'components/componentPage/Index'

export default {
  name: 'PageComponentsPopup',
  components: { ComponentPage, },
  data: () => ({
    props,
  }),
  computed: {
    descriptions() {
      return {
        open: '',
        side: 'Возможные значения: top, bottom, left, right',
        align: 'Возможные значения: left, right, center',
        up: 'Направление открытия окна',
        absolute: 'Компонент рендерится в теге body. Защита от родительского position: relative.',
      }
    },
    todo() {
      return []
    },
  },
  html() {
    return {
      title: 'Popup',
    }
  },
}
</script>

<style lang="scss" scoped>
.page-components-popup {

}
</style>
