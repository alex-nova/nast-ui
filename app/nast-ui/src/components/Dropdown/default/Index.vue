<template>
  <div ref="dropdown" class="n-dropdown">
    <n-popup v-click-outside="clickOutside" :open.sync="s_open" inline>
      <template #action>
        <slot>open</slot>
      </template>
      <div class="n-content">
        <template v-for="item in value">
          <n-dropdown-group v-if="children" :key="item.value" :value="item" />
          <n-dropdown-item v-else :key="item.value" :value="item" />
        </template>
      </div>
    </n-popup>
  </div>
</template>

<script>
import props from './../props'
import clickOutside from 'nast-ui/src/directives/click-outside'

export default {
  name: 'NDropdown',
  directives: { clickOutside, },
  mixins: [ props, ],
  data() {
    return {
      s_open: Boolean(this.open),
    }
  },
  computed: {
    action() {
      return this.$slots.default[0].elm
    },
  },
  watch: {
    open(value) {
      this.s_open = value
    },
  },
  mounted() {
    this.action.addEventListener('click', this.actionClick)
  },
  beforeDestroy() {
    this.action.removeEventListener('click', this.actionClick)
  },
  methods: {
    actionClick() {
      this.toggle()
    },
    toggle(valueProp) {
      const value = valueProp === undefined ? !this.s_open : valueProp
      
      this.s_open = value
      this.$emit('update:open', value)
    },
    clickOutside(event) {
      if (this.s_open && !event.target.closest('#'+this.target) && this.closeByOutside) {
        this.toggle()
      }
    },
  },
}
</script>

<style lang="scss" scoped>
  .n-dropdown {
    .n-content {
      padding: 20px;
    }
  }
</style>
