<template>
  <div ref="dropdown" class="n-dropdown">
    <n-popup v-click-outside="clickOutside" :open.sync="s_open" inline>
      <template #action>
        <slot>open</slot>
      </template>
      <div class="n-content">
        <div v-show="parents.length" class="n-parents">
          <template v-for="(item, i) in parents">
            <n-dropdown-item :key="item[itemValue]" :value="item" @click="parentClick(i)">
              <div class="n-parent-item">
                <div v-for="n in i" :key="n" class="n-shift" />
                <n-icon icon="arrow-left" />
                <span class="n-text">{{ item[itemTitle] }}</span>
              </div>
            </n-dropdown-item>
          </template>
        </div>
        <div class="n-items" @scroll="s_scroll">
          <div v-if="loading" class="n-loading">Loading...</div>
          <template v-if="s_data.length">
            <template v-for="(item, i) in s_data">
              <n-dropdown-group v-if="isGroup(item)" :key="item[itemValue]" :value="item" :indexes="[ i, ]"
                                :item-title="itemTitle" :item-value="itemValue" :item-children="itemChildren" @click="s_click">
                <template #group>
                  <div class="n-group-item">
                    <span class="n-text">{{ item[itemTitle] }}</span>
                    <n-icon icon="angle-down" />
                  </div>
                </template>
              </n-dropdown-group>
              <n-dropdown-item v-else :key="item[itemValue]" :value="item" :indexes="[ i, ]" :active="isActive(item)"
                               :item-title="itemTitle" :item-value="itemValue" @click="s_click" />
            </template>
          </template>
          <div v-else-if="!loading" class="n-empty">
            No data
          </div>
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
      s_value: this.calcValue(this.value, this.fullValue),
      selected: [],
      parents: [], // открытые на данный момент группы
      indexes: [],
      loading: false,
      page: 0,
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
      if (value) {
        this.update()
      }
    },
    data(value) {
      this.s_data = value
    },
    value(value) {
      this.s_value = this.calcValue(value, null)
    },
    fullValue(value) {
      this.s_value = this.calcValue(null, value)
    },
    s_data(value) {
      if (this.load) {
      
      }
    },
  },
  mounted() {
    if (this.s_open) {
      this.update()
    }
    this.action.addEventListener('click', this.actionClick)
  },
  beforeDestroy() {
    this.action.removeEventListener('click', this.actionClick)
  },
  methods: {
    actionClick() {
      this.toggle()
    },
    calcValue(value, fullValue) {
      if (this.multi) {
        return value || fullValue.map((i) => i[this.itemValue])
      } else {
        return value || fullValue[this.itemValue]
      }
    },
    toggle(valueProp) {
      const value = valueProp === undefined ? !this.s_open : valueProp
      if (value) {
        this.update()
      }
      this.s_open = value
      this.$emit('update:open', value)
    },
    clickOutside(event) {
      if (this.s_open && this.closeByOutside) {
        this.toggle()
      }
    },
    parentClick(index) {
      this.parents.length = index
      this.indexes.length = index
      
      if (this.load) {
        this.update()
      } else {
        this.s_data = index === 0 ? this.data : this.parents[index-1][this.itemChildren]
      }
    },
    groupClick(item, indexes) {
      this.parents = [ ...this.parents, item, ]
      this.indexes = [ ...this.indexes, indexes[0], ]
      
      if (item.children === true && this.load) {
        this.update()
      } else {
        this.s_data = item[this.itemChildren]
      }
    },
    isGroup(item) {
      return (isArray(item[this.itemChildren]) && item[this.itemChildren].length) || item[this.itemChildren] === true
    },
    isActive(item) {
      if (this.multi) {
        return this.s_value.includes(item[this.itemValue])
      } else {
        return item[this.itemValue] === this.s_value
      }
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
    s_select(item, indexes) {
      let value = item[this.itemValue]
      let selected = item
      
      if (this.multi) {
        if (this.s_value.includes(item[this.itemValue])) {
          value = this.s_value.filter((i) => i !== item[this.itemValue])
          selected = this.fullValue && this.fullValue.filter((i) => i[this.itemValue] !== item[this.itemValue])
        } else {
          value = [ ...this.s_value, item[this.itemValue], ]
          selected = this.fullValue && [ ...this.fullValue, item, ]
        }
      }
      
      this.$emit('update:value', value)
      this['update:value'](value)
      this.$emit('update:fullValue', selected)
      this['update:fullValue'](selected)
      this.$emit('select', item, this.parents)
      this.select(item, this.parents)
    },
    s_scroll(event) {
      const target = event.target
      if (target.scrollTop + target.clientHeight >= target.scrollHeight - 50) {
        this.page = this.page + 1
        this.update()
      }
      this.$emit('scroll', event)
      this.scroll(event)
    },
    updateAdd(page) {
    
    },
    update() {
      if (this.load) {
        const params = {
          page: this.page,
        }
        const promise = this.load(this.parents[this.parents.length - 1], params)
        if (promise) {
          this.loading = true
          if (this.page === 0) {
            this.s_data = []
          }
          promise.then((response) => {
            if (this.page) {
              this.s_data = this.s_data.concat(response.data)
            } else {
              this.s_data = response.data
            }
            this.loading = false
          })
        }
      }
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
  
      .n-loading {
        padding: 30px 5px;
      }
  
      .n-empty {
        padding: 30px 5px;
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
