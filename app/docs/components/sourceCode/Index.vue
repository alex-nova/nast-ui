<template>
  <pre class="component-source-code"><code :class="['hljs', {language: lang}, ]" v-html="highlight" /></pre>
</template>

<script>
import hljs from 'highlight.js'
import javascript from 'highlight.js/lib/languages/javascript'
hljs.registerLanguage('javascript', javascript)

export default {
  name: 'SourceCode',
  props: {
    code: { type: null, default: '', },
    lang: { type: String, default: 'html', },
  },
  computed: {
    highlight() {
      let code = this.code
      if (!$n.isString(code)) {
        code = JSON.stringify(code)
      }
      return hljs.highlight(this.lang, code).value
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~highlight.js/styles/darcula.css";
  
  .component-source-code {
    margin: 0;
  }
</style>
