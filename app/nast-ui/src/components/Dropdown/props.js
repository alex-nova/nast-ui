export default {
  props: {
    open: { type: Boolean, default: false, },
    target: { type: String, default: '', }, // id of element without #
    
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
