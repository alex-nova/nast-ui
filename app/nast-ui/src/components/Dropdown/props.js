export default {
  props: {
    open: { type: Boolean, default: false, },
    data: { type: Array, default: () => [], },
    load: { type: Function, default: null, }, // props - ({ page, size, }, parent)
    value: { type: [ String, Object, Boolean, Number, Array, ], default: null, },
    closeByOutside: { type: Boolean, default: true, },
    closeOnSelect: { type: Boolean, default: null, }, // false if multi
    itemValue: { type: String, default: 'value', },
    itemTitle: { type: [ Function, String, ], default: (item) => item.title, },
    itemChildren: { type: String, default: 'children', },
    size: { type: Number, default: 10, },
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
  },
  
  computed: {
    props() {
      return {
        open: this.open,
        data: this.data,
        value: this.value,
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
      }
    },
  },
}
