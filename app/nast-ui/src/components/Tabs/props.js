
export default {
  name: 'NTabs', // TODO надо везде
  
  props: {
    data: { type: Array, default: () => [], }, // [ { name: '', title: '', }, ]
    content: { type: Object, default: null, },
    active: { type: String, default: '', },
    name: { type: String, default: 'tabsDefault', },
    disabled: { type: Boolean, default: false, },
    
    'update:active': { type: Function, default: () => {}, },
  },
  
  computed: {
    props() {
      return {
        data: this.data,
        tabs: this.tabs,
      }
    },
    events() {
      return {
        change: this.change,
      }
    },
  },
}
