<template>
  <div class="page-components-popup">
    <component-page :props="props.props" :descriptions="descriptions" path="components/popup/examples" />
  </div>
</template>

<script>
import props from 'nast-ui/src/components/Popup/props'
import ComponentPage from 'components/componentPage/Index'

export default {
  name: 'PageComponentsPopup',
  components: { ComponentPage, },
  data: () => ({
    descriptions: {},
    props,
  }),
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
