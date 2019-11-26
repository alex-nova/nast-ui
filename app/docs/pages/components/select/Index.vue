<template>
  <div class="page-components-select">
    <component-page :props="props" :descriptions="descriptions" :todo="todo" path="components/select/examples" />
  </div>
</template>

<script>
import props from 'nast-ui/src/components/Select/props'
import ComponentPage from 'components/componentPage/Index'

export default {
  name: 'PageComponentsButton',
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
      return [
        'Добавить скрытый селект, чтобы работал в нативной форме без ajax',
        'Добавить примеры использования',
        'Продумать пропсы, добавить описание',
        'Настроить индексы, чтобы правильно реагировал на tab (сложно). upd, вроде работает, надо протестировать',
        'Реакция на клавиши "вверх", "вниз", "enter", "esc"',
        // Идея: без creatable в селекте нельзя печатать, но есть инпут поиска в выпадающем списке; с creatable инпута
        // поиска нет, поиск работает в самом селекте, печатать можно.
        'Пересмотреть логику работы с creatable',
      ]
    },
  },
  html() {
    return {
      title: 'Select',
    }
  },
}
</script>

<style lang="scss" scoped>
.page-components-select {}
</style>
