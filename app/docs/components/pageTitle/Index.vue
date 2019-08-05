<template>
  <div class="component-page-title">
    <div class="content">
      <h1 slot="header">
        {{ page.title }}
      </h1>
      <n-breadcrumbs :items="breadcrumbs" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageTitle',
  props: {
    title: { type: String, default: '', },
  },
  computed: {
    ...$n.mapGetters('pages', [ 'structureByName', 'getPage', ]),
    breadcrumbs() {
      return this.structureByName(this.$route.name)
    },
    page() {
      return this.getPage(this.$route.name)
    },
  },
}
</script>

<style lang="scss" scoped>
.component-page-title {
  margin: 5px 0 30px;
  
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    h1 {
      margin: 0;
    }
  }
}
</style>
