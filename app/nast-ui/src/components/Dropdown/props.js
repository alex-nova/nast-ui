export default {
  props: {
    open: { type: Boolean, default: false, },
    value: { type: Array, default: () => [], },
    
    closeByOutside: { type: Boolean, default: true, },
    closeByTarget: { type: Boolean, default: true, },
  },
  
  computed: {
    props() {
      return {
        open: this.open,
      }
    },
  },
}
