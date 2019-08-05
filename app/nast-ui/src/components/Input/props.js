export default {
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
    name: { type: String, default: () => `input-${Math.random()}`, },
    title: { type: String, default: '', },
    value: { type: [ String, Number, ], default: '', },
    type: { type: String, default: 'text', },
    placeholder: { type: String, default: '', },
    disabled: { type: Boolean, default: false, },
    text: { type: Boolean, default: false, },
    inline: { type: Boolean, default: false, },
    icon: { type: String, default: '', },
    iconRight: { type: String, default: '', },
    loading: { type: Boolean, default: false, },
    animate: { type: String, default: 'shake', },
    
    primary: { type: [ String, Boolean, ], default: false, },
    success: { type: [ String, Boolean, ], default: false, },
    warning: { type: [ String, Boolean, ], default: false, },
    danger: { type: [ String, Boolean, ], default: false, },
    secondary: { type: [ String, Boolean, ], default: false, },
    tertiary: { type: [ String, Boolean, ], default: false, },
  
    input: { type: Function, default: () => {}, },
    change: { type: Function, default: () => {}, },
    focusin: { type: Function, default: () => {}, },
    focusout: { type: Function, default: () => {}, },
  },
  
  computed: {
    props() {
      return {
        name: this.name,
        title: this.title,
        value: this.value,
        placeholder: this.placeholder,
        disabled: this.disabled,
        text: this.text,
        inline: this.inline,
        icon: this.icon,
        iconRight: this.iconRight,
        loading: this.loading,
        active: this.active,
        animate: this.animate,
        primary: this.primary,
        success: this.success,
        warning: this.warning,
        danger: this.danger,
        secondary: this.secondary,
        tertiary: this.tertiary,
      }
    },
    events() {
      return {
        input: this.input,
        change: this.change,
        focusin: this.focusin,
        focusout: this.focusout,
      }
    },
  },
}
