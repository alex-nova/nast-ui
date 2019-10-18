export default {
  props: {
    value: { type: Object, default: () => ({}), }, // { title: '', value: any, }
    // active: { type: [ Object, ], default: () => ({}), },
    // absolute: { type: Boolean, default: true, },
    indexes: { type: Array, default: () => [], }, // массив индексов в массиве включая родителей
    
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
