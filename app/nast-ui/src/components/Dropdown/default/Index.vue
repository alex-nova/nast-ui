<template>
  <div ref="dropdown" class="n-dropdown">
    <n-popup v-click-outside="clickOutside" :open.sync="s_open" inline>
      <template #action>
        <slot>open</slot>
      </template>
      <div class="n-content">
        <div v-show="parents.length" class="n-parents">
          <template v-for="(item, i) in parents">
            <n-dropdown-item :key="item.value" :value="item" @click="parentClick(i)">
              <div class="n-parent-item">
                <div v-for="n in i" :key="n" class="n-shift" />
                <n-icon icon="arrow-left" />
                <span class="n-text">{{ item.title }}</span>
              </div>
            </n-dropdown-item>
          </template>
        </div>
        <div class="n-items">
          <template v-for="(item, i) in s_data">
            <n-dropdown-group v-if="isArray(item.children) && item.children" :key="item.value" :value="item" :indexes="[ i, ]" @click="s_click">
              <template #group>
                <div class="n-group-item">
                  <span class="n-text">{{ item.title }}</span>
                  <n-icon icon="angle-down" />
                </div>
              </template>
            </n-dropdown-group>
            <n-dropdown-item v-else :key="item.value" :value="item" :indexes="[ i, ]" @click="s_click" />
          </template>
        </div>
      </div>
    </n-popup>
  </div>
</template>

<script>
import isArray from 'lodash/isArray'
import props from './../props'
import clickOutside from 'nast-ui/src/directives/click-outside'

export default {
  name: 'NDropdown',
  directives: { clickOutside, },
  mixins: [ props, ],
  data() {
    return {
      s_open: this.open,
      s_data: this.data,
      selected: [],
      parents: [], // открытые на данный момент группы
      indexes: [],
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
    data(value) {
      this.s_data = value
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
    s_click(item, indexes, event, isGroup) {
      this.$emit('click', item, indexes, isGroup, event)
      this.click(item, indexes, isGroup, event)
      
      if (isGroup) {
        this.groupClick(item, indexes)
      } else {
        this.s_select(item, indexes)
      }
    },
    toggle(valueProp) {
      const value = valueProp === undefined ? !this.s_open : valueProp
      
      this.s_open = value
      this.$emit('update:open', value)
    },
    clickOutside(event) {
      if (this.s_open && this.closeByOutside) {
        this.toggle()
      }
    },
    parentClick(index) {
      this.s_data = index === 0 ? this.data : this.parents[index-1].children
      this.parents.length = index
      this.indexes.length = index
    },
    groupClick(item, indexes) {
      this.parents = [ ...this.parents, item, ]
      this.indexes = [ ...this.indexes, indexes[0], ]
    
      this.s_data = item.children
    },
    s_select(item, indexes) {
      const items = [
        ...this.parents,
        item,
      ]
      
      const allIndexes = [ ...this.indexes, indexes[0], ]
      
      this.$emit('select', item, items, allIndexes)
      this.select(item)
      
      console.log('select', item, items, allIndexes)
    },
    isArray,
  },
}
</script>

<style lang="scss" scoped>
  .n-dropdown {
    --n-popup-width: 400px;
    
    .n-content {
      font-size: .8em;
    
      .n-parents {
        box-shadow: 0 2px 2px -2px #9c9c9c;
        padding: 5px 0;
        
        .n-shift {
          width: 10px;
          display: inline-block;
        }
      }
      
      .n-items {
        padding: 5px 0;
        max-height: 300px;
        overflow-y: auto;
      }
      
      .n-parent-item, .n-group-item {
        display: flex;
        align-items: center;
        .n-text {
          flex-grow: 1;
        }
        .n-icon {
          font-size: .8em;
          opacity: .8;
        }
      }
      .n-parent-item .n-icon { margin-right: 10px; }
      .n-group-item .n-icon { margin-left: 10px; }
    }
  }
</style>
