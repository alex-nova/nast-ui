<template>
  <pre class="component-source-code"><code :class="['hljs', language, ]" v-html="highlight" /></pre>
</template>

<script>
import hljs from 'highlight.js'

export default {
  name: 'SourceCode',
  props: {
    code: { type: String, default: '', },
    language: { type: String, default: 'html', },
  },
  computed: {
    highlight() {
      return hljs.highlight(this.language, this.code).value
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~highlight.js/styles/darcula.css";
</style>
