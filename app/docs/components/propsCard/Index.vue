<template>
  <div class="component-props-card">
    <n-card>
      <h3 slot="header">Props</h3>
      <n-table :data="dataProps" :columns="columns" headless>
        <template #name="{ item, }">
          <div class="title">name</div>
          <n-link class="name" :to="getAnchor(item.name)">{{ item.name }}</n-link>
        </template>
        <template #type="{ item, }">
          <div class="title">type</div>
          <div class="type">{{ item.type }}</div>
        </template>
        <template #default="{ item, }">
          <div class="title">default value</div>
          <source-code :code="item.default" lang="javascript" />
        </template>
        <template #desc="{ item, }">
          <div class="title">description</div>
          <div class="description">{{ item.desc }}</div>
        </template>
        <template #example="{ item, }">
          <div class="title">example</div>
          <source-code v-if="item.example" :code="item.example" lang="javascript" />
        </template>
      </n-table>
    </n-card>
    <n-card>
      <h3 slot="header">Events</h3>
      <n-table :data="dataEvents" :columns="columns" headless>
        <template #name="{ item, }">
          <div class="title">name</div>
          <n-link :to="getAnchor(item.name)">{{ item.name }}</n-link>
        </template>
        <template #type="{ item, }">
          <div class="title">type</div>
          <div class="type">{{ item.type }}</div>
        </template>
        <template #default="{ item, }">
          <div class="title">default value</div>
          <source-code v-if="item.type === 'function'" :code="item.default" lang="javascript" />
          <template v-else>{{ item.default }}</template>
        </template>
        <template #desc="{ item, }">
          <div class="title">description</div>
          {{ item.desc }}
        </template>
        <template #example="{ item, }">
          <div class="title">example</div>
          <source-code v-if="item.example" :code="item.example" lang="javascript" />
        </template>
      </n-table>
    </n-card>
  </div>
</template>

<script>
import SourceCode from '../sourceCode/Index'

export default {
  name: 'PropsCard',
  components: { SourceCode, },
  props: {
    props: { type: Object, default: () => ({}), }, // { props: {}, computed: {}, }
    descriptions: { type: Object, default: () => ({}), }, // { prop1: '', ... }
    examples: { type: Object, default: () => ({}), }, // { prop1: '', ... }
    path: { type: String, default: '', }, // path to example files
  },
  data: () => ({
    columns: [
      { name: 'name', },
      { name: 'type', },
      { name: 'default', },
      { name: 'desc', width: '40%', },
      { name: 'example', },
    ],
    anchors: {},
  }),
  computed: {
    dataProps() {
      return $n.reduce(this.props.computed.props(), (result, value, name) => {
        const item = this.props.props[name]
        if (item) {
          result.push({
            name,
            desc: this.descriptions[name],
            example: this.examples[name],
            type: this.typeToString(item.type),
            default: this.defaultToString(item.default, item.type),
          })
        } else {
          $debug.error(`Nast docs: '${name}' property doesn't exist!`)
        }
        return result
      }, [])
    },
    dataEvents() {
      return $n.reduce(this.props.computed.events(), (result, value, name) => {
        const item = this.props.props[name]
        result.push({
          name,
          desc: this.descriptions[name],
          type: this.typeToString(item.type),
          default: this.defaultToString(item.default, item.type),
        })
        return result
      }, [])
    },
  },
  mounted() {
    const promises = $n.reduce(this.props.props, (result, prop, name) => {
      result[name] = import(`pages/${this.path}/${this.capitalize(name)}.vue`).then(() => true).catch(() => false)
      return result
    }, {})
    $n.objectPromiseAll(promises).then((result) => {
      this.anchors = result
    })
  },
  methods: {
    getAnchor(name) {
      return this.anchors[name] ? `#${name}` : undefined
    },
    typeToString(type) {
      const normalize = (i) => i.name.toLowerCase()
      return $n.isArray(type) ? type.map(normalize).join(' | ') : normalize(type)
    },
    defaultToString(def, type) {
      if ($n.isFunction(def)) {
        if ($n.isArray(type) ? type.includes(Function) : type === Function) {
          let func = def.toString()
          func = func.replace('function _default', '')
          func = func.replace(') {', ') => {')
          func = func.replace(/\n[ ]{6}/g, '\n')
          return func
        } else {
          return def()
        }
      }
      return JSON.stringify(def)
    },
    capitalize(s) {
      if (typeof s !== 'string') return ''
      return s.charAt(0).toUpperCase() + s.slice(1)
    },
  },
}
</script>

<style lang="scss" scoped>
  .component-props-card {

    .n-card {
      --n-table-border-top-width: 0;
      --n-table-border-right-width: 0;
      --n-table-border-left-width: 0;
      .n-table::v-deep {
        .row:first-child {
          .cell {
            --n-table-border-top-width: 1px;
          }
        }
      }

      &::v-deep {
        main {
          max-height: 500px;
        }
      }

      .component-source-code {
        font-size: .8em;
      }

      .name {
        padding-right: 20px;
      }
      .type {
        opacity: .8;
        font-size: .8em;
        font-weight: bold;
      }
      .title {
        opacity: .5;
        font-size: .7em;
        white-space: nowrap;
      }
      .description {
        font-size: .8em;
        opacity: .9;
      }
    }
  }
</style>
