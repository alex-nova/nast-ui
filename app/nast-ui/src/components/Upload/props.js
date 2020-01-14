export default {
  props: {
    title: { type: String, default: '', },
    files: { type: Array, default: null, },
    multi: { type: Boolean, default: false, },

    change: { type: Function, default: (files) => {}, },
    'update:files': { type: Function, default: (files) => {}, },
  },

  computed: {
    props() {
      return {
      }
    },
    events() {
      return {
      }
    },
    functions() {
      return {
      }
    },
  },
}
