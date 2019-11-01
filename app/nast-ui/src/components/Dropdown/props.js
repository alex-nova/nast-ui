export default {
  props: {
    open: { type: Boolean, default: false, },
    data: { type: Array, default: () => [], },
    value: { type: [ String, Object, Boolean, Number, Array, ], default: null, },
    fullValue: { type: [ Object, Array, ], default: () => ({}), },
    multi: { type: Boolean, default: false, },
    closeByOutside: { type: Boolean, default: true, },
    closeOnSelect: { type: Boolean, default: true, },
    itemValue: { type: String, default: 'value', },
    itemTitle: { type: String, default: 'title', },
    itemChildren: { type: String, default: 'children', },
    load: { type: Function, default: null, }, // props - (parent, { page, size, })
    
    click: { type: Function, default: (item, isGroup, event) => {}, },
    select: { type: Function, default: (item, items, indexes) => {}, },
    scroll: { type: Function, default: () => {}, },
    'update:value': { type: Function, default: (value) => {}, },
    'update:fullValue': { type: Function, default: (item) => {}, },
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
        scroll: this.scroll,
        'update:value': this['update:value'],
        'update:fullValue': this['update:fullValue'],
      }
    },
  },
}
