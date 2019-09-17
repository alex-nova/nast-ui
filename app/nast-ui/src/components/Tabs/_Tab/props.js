
export default {
  name: 'NTab',
  
  props: {
    data: { type: Array, default: () => [], },
  },
  
  computed: {
    props() {
      return {
        data: this.data,
      }
    },
    events() {
      return {
      }
    },
  },
}
