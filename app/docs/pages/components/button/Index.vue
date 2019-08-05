<template>
  <div class="page-components-button">
    <n-card>
      <h3 slot="header">Example</h3>
      <n-button>Example button</n-button>
    </n-card>
    
    <n-card class="props-card">
      <h3 slot="header">Props</h3>
      <n-table :data="data" :columns="columns" headless>
        <template #name="{ item, }">
          <div class="title">name</div>
          <n-link :to="`#${item.name}`">{{ item.name }}</n-link>
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
    
    <example-card id="color" title="Color">
      <n-items vertical>
        <n-button color="primary">Primary</n-button>
        <n-button color="secondary">Secondary</n-button>
        <n-button color="tertiary">Tertiary</n-button>
        <n-button color="success">Success</n-button>
        <n-button color="danger">Danger</n-button>
        <n-button color="default">Default</n-button>
      </n-items>
    </example-card>
  
    <n-card id="flat">
      <h3>Flat</h3>
    </n-card>
  
    <n-card id="outline">
      <h3>Outline</h3>
    </n-card>
  
    <n-card id="type">
      <h3>Type</h3>
    </n-card>
  
    <n-card id="disabled">
      <h3>Disabled</h3>
    </n-card>
  
    <n-card id="wide">
      <h3>Wide</h3>
    </n-card>
  
    <n-card id="loading">
      <h3>Loading</h3>
    </n-card>
  
    <n-card id="icon">
      <h3>Icon</h3>
    </n-card>
  
    <n-card id="iconRight">
      <h3>IconRight</h3>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </n-card>
  </div>
</template>

<script>
import props from 'nast-ui/src/components/Button/props'
import ExampleCard from './../../../components/exampleCard/Index'

export default {
  name: 'PageComponentsButton',
  components: { ExampleCard, },
  data: () => ({
    descriptions: {
      color: 'Цвета кнопки',
      round: 'Закгругленный бордер',
      flat: '',
      outline: '',
      type: '',
      disabled: '',
      wide: '',
      loading: '',
      icon: '',
      iconRight: '',
    },
    columns: [
      { name: 'name', },
      { name: 'type', },
      { name: 'default', },
      { name: 'desc', minWidth: '300px', },
    ],
    props,
  }),
  html() {
    return {
      title: 'Button',
    }
  },
  computed: {
    data() {
      return $n.reduce(props.props, (result, item, name) => {
        result.push({
          name,
          desc: this.descriptions[name],
          type: item.type.name.toLowerCase(),
          default: JSON.stringify(item.default),
        })
        return result
      }, [])
    },
  },
}
</script>

<style lang="scss" scoped>
.page-components-button {
  
  .props-card {
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
