export default {
  props: {
    loading: { type: Boolean, default: false, },
    color: { type: String, default: 'primary', },
    size: { type: String, default: 'md', },
    hidden: { type: Boolean, default: true, },
  },
  
  computed: {
    props() {
      return {
        loading: this.loading,
        color: this.color,
        size: this.color,
        hidden: this.color,
      }
    },
  },
}
