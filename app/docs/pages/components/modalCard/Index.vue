<template>
  <div class="page-components-modal-card">
    <component-page :props="props" :descriptions="descriptions" :todo="todo" path="components/modalCard/examples" />
  </div>
</template>

<script>
import props from 'nast-ui/src/components/ModalCard/props'
import ComponentPage from 'components/componentPage/Index'

export default {
  name: 'PageComponentsModalCard',
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
      title: 'ModalCard',
    }
  },
}
</script>

<style lang="scss" scoped>
.page-components-modal-card {}
</style>
