<template>
  <div class="component-props-card">
    <n-card>
      <h3 slot="header">Props</h3>
      <n-table :data="data" :columns="columns" headless>
        <template #name="{ item, }">
          <div class="title">name</div>
          <n-link :to="getAnchor(item.name)">{{ item.name }}</n-link>
        </template>
        <template #type="{ item, }">
          <div class="title">type</div>
          {{ item.type }}
        </template>
        <template #default="{ item, }">
          <div class="title">default value</div>
          {{ item.default }}
        </template>
        <template #desc="{ item, }">
          <div class="title">description</div>
          {{ item.desc }}
        </template>
      </n-table>
    </n-card>
  </div>
</template>

<script>
export default {
  name: 'PropsCard',
  props: {
    props: { type: Object, default: () => ({}), }, // component props
    descriptions: { type: Object, default: () => ({}), }, // { prop1: '', ... }
    path: { type: String, default: '', }, // path to example files
  },
  data: () => ({
    columns: [
      { name: 'name', },
      { name: 'type', },
      { name: 'default', },
      { name: 'desc', minWidth: '300px', maxWidth: '800px', },
    ],
    anchors: {},
  }),
  computed: {
    data() {
      return $n.reduce(this.props, (result, item, name) => {
        result.push({
          name,
          desc: this.descriptions[name],
          type: this.typeToString(item.type),
          default: this.defaultToString(item.default),
        })
        return result
      }, [])
    },
  },
  mounted() {
    const promises = $n.reduce(this.props, (result, prop, name) => {
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
      return $n.isArray(type) ? `[${type.map(normalize).join(', ')}]` : normalize(type)
    },
    defaultToString(def) {
      if ($n.isFunction(def)) {
        const r = def()
        if (r === undefined) {
          return '() => {}'
        } else {
          return r
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
          height: 500px;
        }
      }
    
      .title {
        opacity: .5;
        font-size: .7em;
        white-space: nowrap;
      }
    }
  }
</style>
