<template>
  <div ref="dropdown" class="n-dropdown">
    <n-popup ref="popup" v-click-outside="clickOutside" :open.sync="s_open">
      <template #action>
        <slot>open</slot>
      </template>
      <div class="n-content">
        <div v-show="parents.length" class="n-parents">
          <template v-for="(item, i) in parents">
            <n-dropdown-item :key="getValue(item)" :value="item" @click="parentClick(i)">
              <div class="n-parent-item">
                <div v-for="n in i" :key="n" class="n-shift" />
                <n-icon icon="arrow-left" />
                <span class="n-text">{{ getTitle(item) }}</span>
              </div>
            </n-dropdown-item>
          </template>
        </div>
        <div ref="items" :class="[ 'n-items', {'n-loading': loading}, ]" @scroll="s_scroll">
          <n-loader :loading="loading" />
          <template v-if="s_data.length">
            <template v-for="(item, i) in s_data">
              <n-dropdown-group v-if="isGroup(item)" :key="getValue(item)" :value="item" :indexes="[ i, ]"
                                :item-title="itemTitle" :item-value="itemValue" :item-children="itemChildren" @click="s_click">
                <template #group>
                  <div class="n-group-item">
                    <span class="n-text">{{ getTitle(item) }}</span>
                    <n-icon icon="angle-down" />
                  </div>
                </template>
              </n-dropdown-group>
              <n-dropdown-item v-else :key="getValue(item)" :value="item" :indexes="[ i, ]" :active="isActive(item)"
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
import isObject from 'lodash/isObject'
import isFunction from 'lodash/isFunction'
import debounce from 'lodash/debounce'
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
      indexes: [], // TODO скорее всего не нужно
      loading: false,
      page: 0,
      total: null,
    }
  },
  computed: {
    action() {
      return this.$slots.default[0].elm
    },
    multi() {
      return isArray(this.value)
    },
    s_closeOnSelect() {
      return this.closeOnSelect !== null ? this.closeOnSelect : !this.multi
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
    s_data(value) {
      this.$nextTick(() => {
        this.$refs.popup.update()
      })
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
    getTitle(item) {
      if (isObject(item)) {
        return isFunction(this.itemTitle) ? this.itemTitle(item) : item[this.itemTitle]
      }
      return item
    },
    getValue(item) {
      const value = isObject(item) ? item[this.itemValue] : item
      if (value === undefined) {
        console.error(`Nast Dropdown: field ${this.itemValue} was not found in item!`)
      }
      return value
    },
    actionClick() {
      this.toggle()
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
        return Boolean(this.value.filter((i) => this.getValue(i) === this.getValue(item)).length)
      } else {
        return this.getValue(item) === this.getValue(this.value)
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
      let value = item
      if (this.multi) {
        value = this.value.filter((i) => this.getValue(i) !== this.getValue(item))
        if (value.length === this.value.length) {
          value = [ ...this.value, item, ]
        }
      }
      
      if (this.s_closeOnSelect) {
        this.toggle(false)
      }
      
      this.$emit('update:value', value)
      this['update:value'](value)
      this.$emit('select', item, this.parents)
      this.select(item, this.parents)
    },
    s_scroll: debounce(function(event = null) {
      const target = this.$refs.items
      if (target.scrollTop + target.clientHeight >= target.scrollHeight - 50) {
        this.loadNextPage()
      } else {
        this.loading = false
      }
  
      if (event) { // Don't fire event if s_scroll called from code
        this.$emit('scroll', event)
        this.scroll(event)
      }
    }, 100),
    loadNextPage() {
      if (this.total !== null) {
        if ((this.page + 1) * this.size < this.total) {
          this.s_load(this.page + 1)
          return
        }
      }
      this.loading = false
    },
    s_load(page) {
      if (this.load) {
        const params = { page, size: this.size, }
        const promise = this.load(params, this.parents[this.parents.length - 1])
        
        if (promise) {
          this.loading = true
          this.page = page
          
          if (page === 0) {
            this.s_data = []
          }
          
          promise.then((response) => {
            const data = this.getContent(response)
            this.total = this.getTotalCount(response)
            
            if (this.page) {
              this.s_data = this.s_data.concat(data)
            } else {
              this.s_data = data
            }
            
            this.$nextTick(() => {
              this.s_scroll()
            })
          })
        }
      }
    },
    update() {
      this.s_load(0)
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
        
        &.n-loading {
          min-height: 100px;
        }
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
