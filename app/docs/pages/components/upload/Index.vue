<template>
  <div class="page-components-upload">
    <component-page :props="props" :descriptions="descriptions" :todo="todo" path="components/upload/examples" />
  </div>
</template>

<script>
import props from 'nast-ui/src/components/Upload/props'
import ComponentPage from 'components/componentPage/Index'

export default {
  name: 'PageComponentsUpload',
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
      title: 'Upload',
    }
  },
}
</script>

<style lang="scss" scoped>
.page-components-upload {}
</style>
