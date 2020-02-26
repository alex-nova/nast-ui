<template>
  <div class="page">
    <component-page :props="props" :descriptions="descriptions" :examples="examples" :todo="todo" path="components/dataComponent/examples" />
  </div>
</template>

<script>
import props from 'nast-ui/src/components/DataComponent/props'
import ComponentPage from 'components/componentPage/Index'

export default {
  name: 'Page',
  components: { ComponentPage, },
  data: () => ({
    props,
  }),
  computed: {
    descriptions() {
      return {
        data: 'Массив с данными. В массиве могут быть любые типы данных.',
        load: 'Функция для загрузки данных, используется вместо параметра data.',
        fields: 'Need for search, filter and sort if data item is object. ',
      }
    },
    examples() {
      return {
        load:
`({ page, size, search, filter, parentId, }) => {
  return axios.get('/users')
}`,
        fields:
`[
  {
    value: (item) => {}, // display name
    sort: (item) => {},
    filter: (item, value) => {},
    sortFunction,
  },
]`,
      }
    },
    todo() {
      return []
    },
  },
}
</script>

<style lang="scss" scoped>
.page {}
</style>
