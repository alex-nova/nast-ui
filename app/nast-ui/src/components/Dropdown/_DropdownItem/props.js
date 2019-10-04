export default {
  props: {
    value: { type: Object, default: () => ({}), }, // { title: '', value: '', }
    active: { type: [ Boolean, ], default: false, },
    
    click: { type: Function, default: () => {}, },
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
