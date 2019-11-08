export default {
  model: {
    prop: 'value',
    event: 'modelChange',
  },
  props: {
    name: { type: String, default: () => `input-${Math.random()}`, },
    title: { type: String, default: '', },
    value: { type: [ String, Number, Object, Array, ], default: '', },
    type: { type: String, default: 'text', },
    placeholder: { type: String, default: '', },
    disabled: { type: Boolean, default: false, },
    text: { type: [ Boolean, String, ], default: false, },
    inline: { type: Boolean, default: false, },
    
    icon: { type: String, default: '', },
    iconInner: { type: String, default: '', },
    iconRight: { type: String, default: '', },
    iconRightInner: { type: String, default: '', },
    loading: { type: Boolean, default: false, },
    
    primary: { type: [ String, Boolean, ], default: false, },
    success: { type: [ String, Boolean, ], default: false, },
    warning: { type: [ String, Boolean, ], default: false, },
    danger: { type: [ String, Boolean, ], default: false, },
    secondary: { type: [ String, Boolean, ], default: false, },
    tertiary: { type: [ String, Boolean, ], default: false, },
    animate: { type: String, default: 'shake', },
    
    itemTitle: { type: [ Function, String, ], default: (item) => item.title, },
  
    click: { type: Function, default: (event) => {}, },
    input: { type: Function, default: (value, event) => {}, },
    change: { type: Function, default: (value, event) => {}, },
    focusin: { type: Function, default: (event) => {}, },
    focusout: { type: Function, default: (event) => {}, },
    keydown: { type: Function, default: (event) => {}, },
    keyup: { type: Function, default: (event) => {}, },
  },
  
  computed: {
    props() {
      return {
        name: this.name,
        title: this.title,
        value: this.value,
        type: this.type,
        placeholder: this.placeholder,
        disabled: this.disabled,
        text: this.text,
        inline: this.inline,
        
        icon: this.icon,
        iconInner: this.iconInner,
        iconRight: this.iconRight,
        iconRightInner: this.iconRightInner,
        loading: this.loading,
        
        // active: this.active,
        primary: this.primary,
        success: this.success,
        warning: this.warning,
        danger: this.danger,
        secondary: this.secondary,
        tertiary: this.tertiary,
        animate: this.animate,
      }
    },
    events() {
      return {
        click: this.click,
        input: this.input,
        change: this.change,
        focusin: this.focusin,
        focusout: this.focusout,
        keydown: this.keydown,
        keyup: this.keyup,
      }
    },
  },
}
