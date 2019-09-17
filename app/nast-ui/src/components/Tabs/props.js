
export default {
  name: 'NTabs',
  
  model: {
    prop: 'active',
    event: 'change',
  },
  props: {
    active: { type: String, default: '', }, // name of a slot
    tabs: { type: Array, default: () => [], }, // [ { name: '', content: '', }, ]
    
    change: { type: Function, default: () => {}, },
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
