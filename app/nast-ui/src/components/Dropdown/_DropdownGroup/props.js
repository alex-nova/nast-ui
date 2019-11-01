export default {
  props: {
    value: { type: Object, default: () => ({}), }, // { title: '', value: any, }
    // active: { type: [ Object, ], default: () => ({}), },
    // absolute: { type: Boolean, default: true, },
    indexes: { type: Array, default: () => [], }, // массив индексов в массиве включая родителей
    itemValue: { type: String, default: 'value', },
    itemTitle: { type: String, default: 'title', },
    itemChildren: { type: String, default: 'children', },
    
    click: { type: Function, default: (item, isGroup, event) => {}, },
  },
  
  computed: {
    props() {
      return {
        item: this.item,
        // active: this.active,
        // absolute: this.absolute,
      }
    },
    events() {
      return {
        click: this.click,
      }
    },
  },
}
