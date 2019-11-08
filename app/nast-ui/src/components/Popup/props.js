export default {
  props: {
    open: { type: Boolean, default: false, },
    side: { type: String, default: 'bottom', }, // top, bottom, left, right
    up: { type: Boolean, default: false, },
    align: { type: String, default: 'left', }, // left, right, center
    inline: { type: Boolean, default: false, },
    absolute: { type: Boolean, default: false, },
  
    'update:open': { type: Function, default: () => {}, },
    close: { type: Function, default: () => {}, },
  },
  
  computed: {
    props() {
      return {
        open: this.open,
      }
    },
    events() {
      return {
        'update:open': this['update:open'],
        close: this.close,
      }
    },
    functions() {
      return {
        update: this.update,
      }
    },
  },
}
