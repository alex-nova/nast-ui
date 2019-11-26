export default {
  props: {
    data: { type: Array, default: [], },
    name: { type: String, default: () => `list-${Math.random()}`, },
    itemValue: { type: String, default: 'value', },
    itemTitle: { type: [ Function, String, ], default: (item) => item.title, },
    itemChildren: { type: String, default: 'children', },
  },
  
  computed: {
    props() {
      return {
        data: this.data,
        itemValue: this.itemValue,
        itemTitle: this.itemTitle,
      }
    },
    events() {
      return {
      }
    },
    functions() {
      return {
      }
    },
  },
}
