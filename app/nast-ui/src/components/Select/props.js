export default {
  props: {
    open: { type: Boolean, default: false, },
    data: { type: Array, default: () => [], },
    load: { type: Function, default: null, }, // props - ({ page, size, }, parent)
    name: { type: String, default: () => `input-${Math.random()}`, },
    title: { type: String, default: '', },
    value: { type: [ String, Object, Boolean, Number, Array, ], default: null, },
    placeholder: { type: String, default: '', },
    disabled: { type: Boolean, default: false, },
    text: { type: [ Boolean, String, ], default: false, },
    inline: { type: Boolean, default: false, },
  
    icon: { type: String, default: '', },
    iconInner: { type: String, default: '', },
    iconRight: { type: String, default: '', },
    iconRightInner: { type: String, default: '', },
    primary: { type: [ String, Boolean, ], default: false, },
    success: { type: [ String, Boolean, ], default: false, },
    warning: { type: [ String, Boolean, ], default: false, },
    danger: { type: [ String, Boolean, ], default: false, },
    secondary: { type: [ String, Boolean, ], default: false, },
    tertiary: { type: [ String, Boolean, ], default: false, },
    animate: { type: String, default: 'shake', },
  
    closeByOutside: { type: Boolean, default: true, },
    closeOnSelect: { type: Boolean, default: null, }, // false if multi
    itemValue: { type: String, default: 'value', },
    optionTitle: { type: [ Function, String, ], default: (item) => item.title, },
    selectedTitle: { type: [ Function, String, ], default: (item) => item.title, },
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
  
    'update:value': { type: Function, default: (value) => {}, },
    input: { type: Function, default: (value) => {}, },
    select: { type: Function, default: (value) => {}, },
    click: { type: Function, default: (event) => {}, },
    focusin: { type: Function, default: (event) => {}, },
    focusout: { type: Function, default: (event) => {}, },
    keydown: { type: Function, default: (event) => {}, },
    keyup: { type: Function, default: (event) => {}, },
  },
  
  computed: {
    props() {
      return {
      }
    },
    events() {
      return {
        'update:value': this['update:value'],
      }
    },
    functions() {
      return {
      }
    },
  },
}
