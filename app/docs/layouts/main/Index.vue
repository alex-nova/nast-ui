<template>
  <div class="layout-main">
    <n-layout-cool :menu="navigation">
      <template #logo><img :src="logo" /></template>
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
  data: () => ({
    logo,
    logoMin,
    avatar,
  }),
  computed: {
    ...$n.mapGetters('pages', [ 'navigation', ]),
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Raleway|Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i');
@import '~nast-ui/src/style/global';

@include initialize((
  default: (
    colors: (
      primary: #00a0e3,
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
