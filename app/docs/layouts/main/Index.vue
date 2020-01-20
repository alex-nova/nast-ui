<template>
  <div class="layout-main">
    <n-layout-cool :menu="navigation">
      <template #logo>Документация</template>
      <template #logo-min><img :src="logoMin" /></template>
      <template #avatar><img :src="avatar" /></template>
      <div slot="content">
        <page-title />
        <router-view />
      </div>
      <div slot="footer">
        IDMatrix 2.0
        <br />
        © 2017—2019 ICORE Software Development
        <br />
        <n-link to="#">Сообщить об ошибке</n-link>
      </div>
    </n-layout-cool>

    <Cards />
  </div>
</template>

<script>
import logo from './../../assets/images/logo.png'
import logoMin from './../../assets/images/logo-min.png'
import avatar from './../../assets/images/avatar.png'
import PageTitle from './../../components/pageTitle/Index'
import Cards from 'cards/Index'

export default {
  name: 'MainLayout',
  components: { PageTitle, Cards, },
  html() {
    return {
      title: 'Документация',
    }
  },
  data: () => ({
    logo,
    logoMin,
    avatar,
    items: [
      { name: 'index', },
      { name: 'componentsGroup', icon: 'folder', children: [
        { name: 'button', },
        { name: 'dropdown', },
        { name: 'input', },
        { name: 'loader', },
        { name: 'select', },
        { name: 'list', },
        { name: 'modalCard', },
        { name: 'image', },
        { name: 'upload', },
      ], },
      { name: 'baseComponentsGroup', icon: 'folder', children: [
        { name: 'popup', },
        { name: 'progress', },
      ], },
      { name: 'directives', },
    ],
    titles: {
      index: 'Описание',
      componentsGroup: 'Компоненты',
      components: 'Все компоненты',
      button: 'Button',
      dropdown: 'Dropdown',
      input: 'Input',
      loader: 'Loader',
      select: 'Select',
      list: 'List',
      modalCard: 'ModalCard',
      image: 'Image',
      upload: 'Upload',
      directives: 'Директивы',
      konstructor: 'Конструктор',

      baseComponentsGroup: 'Базовые компоненты',
      popup: 'Popup',
      progress: 'Progress',
    },
  }),
  computed: {
    navigation() {
      return $app.pages.navigation(this.items, this.titles)
    },
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Raleway|Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i');
@import '~nast-ui/src/style/global';

@include initialize((
  default: (
    colors: (
      primary: #3472e3,
      secondary: #ffd200,
      tertiary: #c556ff,
    ),

    typography: (
      header-font: 'Roboto, sans-serif',
      text-font: '400 1em Roboto, sans-serif',
      h1-font: '300 2em var(--header-font)',
      h3-font: '400 1.2em var(--header-font)',
      text-color: #444,
    ),

  ),
));

.layout-main {

}
</style>
