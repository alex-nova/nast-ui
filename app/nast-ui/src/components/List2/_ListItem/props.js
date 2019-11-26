export default {
  props: {
    value: { type: [ String, Object, Boolean, Number, ], default: () => ({}), },
    itemTitle: { type: [ Function, String, ], default: (item) => item.title, },
    
    click: { type: Function, default: (item, event) => {}, },
  },
  
  computed: {
    props() {
      return {
        item: this.item,
        itemTitle: this.itemTitle,
      }
    },
    events() {
      return {
        click: this.click,
      }
    },
  },
}
