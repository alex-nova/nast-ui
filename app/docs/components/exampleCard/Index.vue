<template>
  <div v-if="code" :id="name" class="component-example-card">
    <n-card>
      <div slot="header" class="header">
        <h3>{{ title || capitalize(name) }}</h3>
        <div class="tools">
          <n-button icon="code" round @click="$toggle('code')" />
        </div>
      </div>
      <div v-show="$toggler.code" class="code">
        <source-code :code="code" />
      </div>
      <component :is="component" />
    </n-card>
  </div>
</template>

<script>
import SourceCode from '../sourceCode/Index'

export default {
  name: 'ExampleCard',
  components: { SourceCode, },
  props: {
    name: { type: String, required: true, },
    title: { type: String, default: '', },
    path: { type: String, required: true, }, // path to example files
  },
  data: () => ({
    component: null,
    code: '',
  }),
  computed: {
    file() {
      return `${this.path}/${this.capitalize(this.name)}`
    },
  },
  mounted() {
    this.importComponent()
    this.importTemplate()
  },
  methods: {
    importComponent() {
      return import(`pages/${this.file}.vue`).then((comp) => {
        this.component = comp.default
      }).catch(() => {})
    },
    importTemplate() {
      return import(`!url-loader!pages/${this.file}.vue`).then((comp) => {
        return atob(comp.default.slice(13))
      }).then((comp) => {
        const string = `(<template(.*)?>[\\w\\W]*<\\/template>)`
        const regex = new RegExp(string, 'g')
        let parsed = regex.exec(comp) || []
        parsed = parsed[1] || ''
        this.code = parsed
      }).catch(() => {})
    },
    capitalize(s) {
      if (typeof s !== 'string') return ''
      return s.charAt(0).toUpperCase() + s.slice(1)
    },
  },
}
</script>

<style lang="scss" scoped>
  .component-example-card {
    .n-card {
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 20px;
      
        h3 {
          margin: 0;
        }
      }
    }
    
    .component-source-code::v-deep {
      margin: 0;
      
      code {
        padding: 20px 25px;
        margin-bottom: 30px;
      }
    }
  }
</style>
