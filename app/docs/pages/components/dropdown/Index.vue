<template>
  <div class="page-components-dropdown">
    <component-page :props="props" :descriptions="descriptions" :todo="todo" path="components/dropdown/examples" />
  </div>
</template>

<script>
import props from 'nast-ui/src/components/Dropdown/props'
import ComponentPage from 'components/componentPage/Index'

export default {
  name: 'PageComponentsDropdown',
  components: { ComponentPage, },
  data: () => ({
    props,
  }),
  computed: {
    descriptions() {
      return {
        data: 'Данные для выбора.',
        value: 'Выбранное значение. Если тип array то dropdown становится multi.',
        closeByOutside: 'Если false, окно не будет закрываться при клике на другие элементы.',
        closeOnSelect: 'Если false, окно не будет закрываться после выбора значения. Если не указано, значение будет' +
          ' false если value это массив, и true если нет.',
        itemValue: 'Поле для уникального ключа в объекте.',
        itemTitle: 'Отображаемое значение в объекте.',
        itemChildren: 'Поле для выбора детей в объекте.',
        size: 'Размер страницы при загрузки данных функцией load.',
        load: 'Загрузка данных с промощью promise.',
        getContent: 'Определяет где брать данные для отображения после загрузки финкцией load.',
        getTotalCount: 'Определяет где брать количество всех записей. Если эта информация не будет найдена,' +
          ' то бесконечная прокрутка не будет работать.',
      }
    },
    todo() {
      return [
        'Подсветить результаты поиска',
        'Добавить слоты для дополнительной информации до и после списка данных',
        'Разбить компонент на два: Dropdown, Datadropdown. В Dropdown только логика внешнего вида, вся логика по работе с данными в Datadropdown',
        'Объеденить логику работы с данными, поиска и подсветки компонентов datadropdown и datatable, и вынести все это в отдельный файл',
      ]
    },
  },
  html() {
    return {
      title: 'Dropdown',
    }
  },
}
</script>

<style lang="scss" scoped>
.page-components-dropdown {

}
</style>
