<template>
  <div class="component-component-page">
    <todo-card :data="todo" />

    <example-card title="Example" name="index" :path="path" />

    <props-card :props="props" :descriptions="descriptions" :examples="examples" :path="path" />

    <example-card v-for="(item, name) in props.props" :key="name" :name="name" :path="path" />
  </div>
</template>

<script>
import ExampleCard from './../exampleCard/Index'
import PropsCard from './../propsCard/Index'
import TodoCard from './../todoCard/Index'

export default {
  name: 'ComponentPage',
  components: { TodoCard, PropsCard, ExampleCard, },
  props: {
    props: { type: Object, default: () => ({}), }, // component props { props: {}, computed: {}, }
    descriptions: { type: Object, default: () => ({}), }, // { prop1: '', ... }
    examples: { type: Object, default: () => ({}), }, // { prop1: '', ... }
    path: { type: String, required: true, }, // path to example files
    todo: { type: Array, default: null, },
  },
}
</script>

<style lang="scss" scoped>

</style>
