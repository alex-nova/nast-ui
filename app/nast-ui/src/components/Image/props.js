export default {
  props: {
    src: { type: String, default: undefined, },
    file: { type: File, default: undefined, },
    load: { type: Function, default: undefined, },
    alt: { type: String, default: '', },
    inline: { type: Boolean, default: false, },
    round: { type: Boolean, default: false, },
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
