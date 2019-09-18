<template>
  <n-card>
    <konstructor :config="config" :data="data1">
      <template #int="{props}">
        <n-input v-bind="props" />
      </template>
      <template #decimal="{props}">
        <n-input v-bind="props" />
      </template>
      <template #string="{props}">
        <n-input type="textarea" v-bind="props" />
      </template>
      <template #date="{props}">
        <n-input v-bind="props" />
      </template>
      <template #enum="{props}">
        <n-input v-bind="props" />
      </template>
    </konstructor>
  </n-card>
</template>

<script>
import Konstructor from './Konstructor'

export default {
  name: 'Index',
  components: { Konstructor, },
  data: () => ({
    config: [
      { name: 'id', title: '№ записи', type: 'int', disabled: true, },
      { name: 'datetime', title: 'Дата и время создания', type: 'date', disabled: true, },
      { name: 'author', title: 'Автор', type: 'enum', disabled: true, },
      { name: 'param1', title: 'Показатель 1 (кг)', type: 'string', },
      { name: 'param2', title: 'Показатель 2 (кг)', type: 'string', },
      { name: 'param4', title: 'Показатель 3 (кг)', type: 'string', },
      { name: 'param5', title: 'sdafasdhfgjk 3 (кг)', type: 'int', },
    ],
    data: {
    },
    data1: {
      datetime: '10.09.2019 12:33',
      author: 'System',
    },
    data2: {
      id: '1',
      datetime: '10.09.2019 12:33',
      author: 'System',
      param1: '10',
      param2: '233',
    },
  }),
}
</script>

<style lang="scss" scoped>

</style>
