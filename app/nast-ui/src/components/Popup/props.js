export default {
  props: {
    open: { type: Boolean, default: false, },
    side: { type: String, default: 'bottom', }, // top, bottom, left, right
    align: { type: String, default: 'left', }, // left, right, center
    up: { type: Boolean, default: false, },
    inline: { type: Boolean, default: false, },
    absolute: { type: Boolean, default: false, },
  },
  
  computed: {
    props() {
      return {
        open: this.open,
      }
    },
  },
}
