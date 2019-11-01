export default {
  props: {
    value: { type: Object, default: () => ({}), }, // { title: '', value: '', }
    active: { type: [ Boolean, ], default: false, },
    indexes: { type: Array, default: () => [], }, // массив индексов в массиве включая родителей
    itemValue: { type: String, default: 'value', },
    itemTitle: { type: String, default: 'title', },
    
    click: { type: Function, default: (item, event) => {}, },
  },
  
  computed: {
    props() {
      return {
        item: this.item,
        active: this.active,
      }
    },
    events() {
      return {
        click: this.click,
      }
    },
  },
}
