<template>
  <div class="layout-main">
    <n-layout-simple :menu="navigation">
      <div slot="logo"><img :src="logo" /></div>
      <div slot="content">
        <page-title />
        <router-view />
      </div>
    </n-layout-simple>
  </div>
</template>

<script>
import logo from './../../assets/images/logo.png'
import PageTitle from './../../components/pageTitle/Index'

export default {
  name: 'MainLayout',
  components: { PageTitle, },
  data: () => ({
    logo,
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
      text-font: 'Roboto, sans-serif',
      h1-font: '500 1.5em var(--header-font)',
      h3-font: '400 1.2em var(--header-font)',
      text-color: #444,
    ),
  
  ),
));

.layout-main {

}
</style>
