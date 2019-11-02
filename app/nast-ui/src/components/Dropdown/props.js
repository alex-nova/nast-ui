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
    size: { type: Number, default: 10, },
    load: { type: Function, default: null, }, // props - ({ page, size, }, parent)
    getContent: { type: Function, default: (response) => response.data, },
    getTotalCount: { type: Function, default: (response) => {
      if (response.pagination) {
        return response.pagination.total || null
      }
      if (response.headers) {
        return response.headers['x-total-count'] || null
      }
      return null
    }, },
    
    click: { type: Function, default: (item, isGroup, event) => {}, },
    select: { type: Function, default: (item, items, indexes) => {}, },
    scroll: { type: Function, default: (event) => {}, },
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
        multi: this.multi,
        closeByOutside: this.closeByOutside,
        closeOnSelect: this.closeOnSelect,
        itemValue: this.itemValue,
        itemTitle: this.itemTitle,
        itemChildren: this.itemChildren,
        size: this.size,
        load: this.load,
        getContent: this.getContent,
        getTotalCount: this.getTotalCount,
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
