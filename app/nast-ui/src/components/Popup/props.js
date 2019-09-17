export default {
  props: {
    open: { type: Boolean, default: false, },
    target: { type: String, default: '', }, // id of element without #
    side: { type: String, default: 'bottom', }, // top, bottom, left, right
    align: { type: String, default: 'left', }, // left, right, center
    toUp: { type: Boolean, default: false, },
    inline: { type: Boolean, default: false, },
  },
  
  computed: {
    props() {
      return {
        open: this.open,
      }
    },
  },
}
