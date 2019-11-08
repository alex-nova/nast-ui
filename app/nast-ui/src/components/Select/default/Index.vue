<template>
  <div class="n-select">
    <n-dropdown v-bind="dropdownProps" :value.sync="s_value" :full-value.sync="s_fullValue" v-on="dropdownEvents">
      <n-input v-bind="inputProps" />
    </n-dropdown>
  </div>
</template>

<script>
import isArray from 'lodash/isArray'
import isObject from 'lodash/isObject'
import isFunction from 'lodash/isFunction'
import props from './../props'
import { dropdownProps, inputProps, } from '../utils'

export default {
  name: 'NSelect',
  mixins: [ props, ],
  data() {
    return {
    
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
    s_fullValue: {
      get() {
        return this.fullValue
      },
      set(value) {
        this.$emit('update:fullValue', value)
        this['update:fullValue'](value)
      },
    },
    dropdownProps() {
      return dropdownProps(this)
    },
    dropdownEvents() {
      return {
      }
    },
    inputProps() {
      return {
        ...inputProps(this),
      }
    },
    inputEvents() {
      return {
      
      }
    },
  },
  methods: {
    inputChange(value) {
      console.log()
    },
    getValue(item) {
      return isObject(item) ? item[this.itemValue] : item
    },
  },
}
</script>

<style lang="scss" scoped>
  .n-select {
  
  }
</style>
