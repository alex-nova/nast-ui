<template>
  <div :class="[ 'n-input', ...containerClasses, ]" @focusin="s_focusin" @focusout="s_focusout">
    <div class="n-wrapper">
      <n-icon v-if="nIcon && (icon || iconInner)" :icon="icon || iconInner" class="icon" />
      
      <div class="n-content" @click="s_click">
        <label v-if="title" :for="name" :class="[ {'n-active': titleIsActive}, ]">{{ title }}</label>
        <div class="n-margin">
          <div v-for="(v, i) in values" :key="i" class="n-item">
            <div class="n-badge">{{ getTitle(v) }}</div>
          </div>
          <span v-if="text" class="n-text-content">{{ textValue }}</span>
          <n-mini-input v-else ref="input" v-bind="inputProps" v-on="inputEvents" />
        </div>
      </div>
  
      <n-icon v-if="nIcon && loading" :icon="'spinner'" class="icon-right" pulse />
      <n-icon v-else-if="nIcon && (iconRight || iconRightInner)" :icon="iconRight || iconRightInner" class="icon-right" />
    </div>
  </div>
</template>

<script>
import isArray from 'lodash/isArray'
import isFunction from 'lodash/isFunction'
import isObject from 'lodash/isObject'
import props from '../props'
import NMiniInput from './MiniInput'

export default {
  name: 'NInput',
  components: { NMiniInput, },
  mixins: [ props, ],
  data: () => ({
    isFocused: false,
    s_value: '',
    isArray: false,
    values: [],
    lastValue: '',
  }),
  computed: {
    inputProps() {
      return {
        value: this.getTitle(this.s_value),
        name: this.name,
        id: this.name,
        type: this.type,
        placeholder: this.placeholder,
        disabled: this.disabled || this.loading,
      }
    },
    inputEvents() {
      return {
        input: this.s_input,
        change: this.s_change,
        keydown: this.s_keydown,
        keyup: this.s_keyup,
      }
    },
    titleIsActive() {
      return this.isFocused || this.s_value || this.placeholder || this.values.length || this.text
    },
    containerClasses() {
      return [
        { 'n-inline': this.inline, },
        { 'n-focused': this.isFocused, },
        { 'n-no-label': !this.title, },
        { 'n-list': this.isArray, },
        { 'n-disabled': this.disabled || this.loading, },
        { 'n-text': Boolean(this.text), },
        { 'n-inner-icon': this.iconInner || this.iconRightInner || this.loading, },
      ]
    },
    textValue() {
      if (this.s_value) {
        return this.s_value
      }
      if (this.text === true) {
        return '-'
      }
      return this.text
    },
    nIcon() {
      return Boolean(this.$options.components['nIcon'])
    },
  },
  watch: {
    value(value) {
      this.calcValue(value)
    },
  },
  mounted() {
    this.calcValue(this.value)
  },
  methods: {
    getTitle(item) {
      if (isObject(item)) {
        return isFunction(this.itemTitle) ? this.itemTitle(item) : item[this.itemTitle]
      }
      return item
    },
    calcValue(value) {
      if (isArray(value)) {
        this.values = value
        this.isArray = true
      } else {
        this.s_value = value
      }
    },
    s_input(e) {
      this.s_value = e.target.value
      if (!this.isArray) {
        this.$emit('modelChange', this.s_value, e)
      }
      this.input(this.s_value, e)
      this.$emit('input', this.s_value, e)
    },
    s_change(e) {
      this.s_value = e.target.value
      if (!this.isArray) {
        this.change(this.s_value, e)
        this.$emit('change', this.s_value, e)
      }
    },
    s_click(e) {
      this.$refs.input.focus()
      this.click(e)
      this.$emit('click', e)
    },
    s_focusin(e) {
      this.isFocused = true
      this.focusin(e)
      this.$emit('focusin', e)
    },
    s_focusout(e) {
      this.isFocused = false
      this.focusout(e)
      this.$emit('focusout', e)
    },
    s_keydown(e) {
      this.keydown(e)
      this.$emit('keydown', e)
      
      if (e.key === 'Backspace' && this.values.length) {
        this.lastValue = this.s_value
      }
    },
    s_keyup(e) {
      this.keyup(e)
      this.$emit('keyup', e)
      
      const changeItems = (values, e) => {
        if (this.isArray) {
          this.change(values, e)
          this.$emit('change', values, e)
          this.$emit('modelChange', values, e)
        }
        this.values = values
      }
  
      if (e.key === 'Backspace' && this.values.length && !this.lastValue) {
        const values = this.values.slice(0, -1)
        changeItems(values, e)
      }
      if (e.key === 'Enter' && this.isArray && this.s_value.trim()) {
        const values = [ ...this.values, this.s_value.trim(), ]
        this.s_value = ''
        changeItems(values, e)
      }
    },
  },
}
</script>

<style lang="scss" src="./../../../_utils/cssVariables.scss"></style>
<style lang="scss">
  html {
  
  }
</style>
<style lang="scss" scoped>
  @import "./../../../_utils/scssVariables";

  .n-input {
    padding-top: 1em;
    vertical-align: baseline;
    width: 100%;
    &.n-inner-icon, &:not(.n-inner-icon) .n-content { border-bottom: 1px solid var(--border-color); }
    
    .n-wrapper {
      display: flex;
      align-items: center;
      width: 100%;
    }
    
    .n-content {
      cursor: text;
      position: relative;
      width: 100%;
  
      label {
        color: inherit;
        opacity: .5;
        position: absolute;
        top: .4em;
        height: 100%;
        left: 0;
        white-space: nowrap;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 1em;
        line-height: 1;
        transition: top .2s ease-out, font-size .2s ease-out;
        text-align: initial;
        pointer-events: none;
    
        &.n-active {
          top: -1em;
          font-size: .8em;
        }
      }
  
      .n-margin {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        margin: -2px 0 -2px -2px;
        &>* {
          margin: 2px;
        }
      }
      .n-item {
        .n-badge {
          padding: .1em .4em;
          font-size: .8em;
          border: 1px solid #333;
          border-radius: var(--border-radius);
          display: block;
          vertical-align: center;
        }
      }
      .n-input-mini-input, .n-text-content {
        flex-grow: 1;
        line-height: 1.2;
        padding: .3em 0;
      }
    }
  
    .icon { margin-right: 7px; }
    .icon-right { margin-left: 7px; }
  
    &.n-text {
      .n-content { border-color: transparent; }
    }
    &.n-disabled {
      opacity: .8;
      &.n-inner-icon, &:not(.n-inner-icon) .n-content { border-bottom-style: dotted; }
      &.n-inner-icon .n-wrapper, &:not(.n-inner-icon) .n-content { background: rgba(127, 127, 127, .01); }
    }
    &.n-list {
      .n-input-mini-input::v-deep input { width: 2px; }
    }
    &.n-no-label { padding-top: 0; }
    &.n-inline { display: inline-block; width: 200px; }
    &.n-focused {
      label { color: var(--primary); opacity: 1; }
      .n-content { border-color: var(--primary); }
    }
    
  }
  
</style>
