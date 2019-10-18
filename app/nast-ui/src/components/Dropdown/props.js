export default {
  props: {
    open: { type: Boolean, default: false, },
    data: { type: Array, default: () => [], },
    value: { type: [ String, Object, Boolean, Number, ], default: null, },
    multi: { type: Boolean, default: false, },
    fullValue: { type: Object, default: () => ({}), },
    itemValue: { type: String, default: 'value', },
    itemTitle: { type: String, default: 'title', },
    closeByOutside: { type: Boolean, default: true, },
    closeOnSelect: { type: Boolean, default: true, },
    
    click: { type: Function, default: (item, isGroup, event) => {}, },
    select: { type: Function, default: (item) => {}, },
  },
  
  computed: {
    props() {
      return {
        open: this.open,
        data: this.data,
        value: this.value,
        fullValue: this.fullValue,
        itemValue: this.itemValue,
        itemTitle: this.itemTitle,
        closeByOutside: this.closeByOutside,
        closeOnSelect: this.closeOnSelect,
      }
    },
    events() {
      return {
        click: this.click,
        select: this.select,
      }
    },
  },
}
