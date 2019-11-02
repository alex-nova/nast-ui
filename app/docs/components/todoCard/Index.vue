<template>
  <div v-if="data !== null" class="component-todo-card">
    <n-card>
      <div slot="header" class="header">
        <h3>Компонент незакончен</h3>
      </div>
      <ul v-if="data.length">
        <li v-for="(item, key) in data" :key="key">
          {{ item }}
        </li>
      </ul>
      <ul v-else><li>Написать список того, что надо доделать. 100% есть недоделки.</li></ul>
    </n-card>
  </div>
</template>

<script>
export default {
  name: 'TodoCard',
  props: {
    data: { type: Array, default: null, },
  },
}
</script>

<style lang="scss" scoped>
  .component-todo-card {
    ul {
      li {
        font-size: .9em;
        opacity: .9;
      }
    }
  }
</style>
