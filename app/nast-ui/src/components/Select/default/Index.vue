<template>
  <div :class="[ 'n-select', {'n-inline': inline}, {'n-focused': focused}, ]" tabindex="-1" @click="updateFocused(true)"
       @focusin="onFocusin" @focusout="onFocusout">
    <n-input v-if="text" ref="input" v-bind="inputProps" :value="s_value" />
    <n-dropdown v-else ref="dropdown" v-bind="dropdownProps" :value.sync="s_value" fit :open="focused" :search="search" v-on="dropdownEvents">
      <n-input ref="input" v-bind="inputProps" :focused="focused" :value="s_value" icon-right-inner="angle-down" v-on="inputEvents" />
    </n-dropdown>
  </div>
</template>

<script>
import isArray from 'lodash/isArray'
import props from './../props'
import { dropdownProps, inputProps, } from '../utils'
import { getValue, } from 'nast-ui/src/_utils/functions'
import clickOutside from 'nast-ui/src/directives/click-outside'

export default {
  name: 'NSelect',
  directives: { clickOutside, },
  mixins: [ props, ],
  data() {
    return {
      focused: false,
      search: '',
    }
  },
  computed: {
    s_value: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('update:value', value)
        this['update:value'](value)
      },
    },
    dropdownProps() {
      return dropdownProps(this)
    },
    dropdownEvents() {
      return {
        select: this.s_select,
      }
    },
    inputProps() {
      return {
        ...inputProps(this),
        value: this.s_value,
      }
    },
    inputEvents() {
      return {
        'update:value': this.updateInputValue,
        input: this.s_input,
      }
    },
    multi() {
      return isArray(this.value)
    },
  },
  methods: {
    onFocusin(e) {
      if (this.$refs.dropdown) {
        this.updateFocused(true)
      }
    },
    onFocusout(e) {
      if (this.$refs.dropdown) {
        const popup = this.$refs.dropdown.$el.querySelector('.n-popup-container')
        const input = this.$refs.input.$el.querySelector('input')
        if (popup !== e.relatedTarget && input !== e.relatedTarget) {
          this.updateFocused(false)
        }
      }
    },
    s_input(value) {
      this.search = value
    },
    updateInputValue(value) {
      if (this.value.length === value.length - 1) { // created new value
        if (this.creatable) {
          this.s_value = value
        }
      } else {
        this.s_value = value
      }
    },
    updateFocused(value) {
      if (this.$refs.dropdown) {
        if (value) {
          this.$refs.input.focus()
        }
        this.focused = value
      }
    },
    getValue(item) {
      return getValue(item, this.itemValue)
    },
    s_select(item) {
      if (!this.multi) {
        setTimeout(() => {
          this.focused = false
        }, 0) // слишком быстрое закрытие не очень комфортно
      }
    },
  },
}
</script>

<style lang="scss" scoped>
  .n-select {
    --n-popup-width: var(--n-input-width);
    --n-progress-height: 2px;
    
    outline: none;
    cursor: text;
    
    &.n-inline {
      display: inline-block;
    }
    
    &::v-deep {
      .n-input .n-icon-right {
        transition: transform var(--transition);
        opacity: .7;
        margin: 0 7px;
      }
    }
    &.n-focused::v-deep {
      .n-input .n-icon-right {
        transform: rotate(180deg);
      }
    }
  }
</style>
