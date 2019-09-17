<template>
  <div class="component-component-page">
    <example-card title="Example" name="index" :path="path" />
  
    <props-card :props="props" :descriptions="descriptions" :path="path" />
  
    <example-card v-for="(item, name) in props" :key="name" :name="name" :path="path" />
  </div>
</template>

<script>
import ExampleCard from './../exampleCard/Index'
import PropsCard from './../propsCard/Index'

export default {
  name: 'ComponentPage',
  components: { PropsCard, ExampleCard, },
  props: {
    props: { type: Object, default: () => ({}), }, // component props { props: {}, events: {}, }
    descriptions: { type: Object, default: () => ({}), }, // { prop1: '', ... }
    path: { type: String, required: true, }, // path to example files
  },
}
</script>

<style lang="scss" scoped>

</style>
