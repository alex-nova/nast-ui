<template>
  <div class="n-data-component">
  
  </div>
</template>

<script>
import throttle from 'lodash/throttle'
import filter from 'lodash/filter'
import props from './../props'

export default {
  name: 'NDataComponent',
  mixins: [ props, ],
  data() {
    return {
      loading: 0,
      page: 1,
      total: 0,
      s_data: this.data,
      loadedData: [],
    }
  },
  methods: {
    computeData(data, search) {
      let result = data
      if (this.s_filterBySearch) {
        if (search.length) {
          result = filter(result, (item) => {
            const title = this.getTitle(item)
            for (const i in search) {
              if ({}.hasOwnProperty.call(search, i)) {
                const string = search[i]
                if (title.toUpperCase().includes(string.toUpperCase())) {
                  return true
                }
              }
            }
            return false
          })
        }
      }
      this.searchedData = result
    },
    s_load(page = this.firstPage, parentId = undefined) {
      if (this.load) {
        const params = {
          page,
          size: this.size,
          search: this.search,
          parentId,
        }
        
        const promise = this.load(params)
      
        if (promise) {
          this.loading++
          this.page = page
        
          promise.then((response) => {
            const data = this.getContent(response)
            this.total = this.getTotalCount(response)
          
            if (this.page < params.page) { // if closed dropdown while loading data, it can load old data when dropdown opened again
              this.loading--
              return
            }
          
            if (this.page) {
              this.s_data = this.s_data.concat(data)
            } else {
              this.s_data = data
            }
          
            this.$nextTick(() => {
              // this.checkScroll()
              this.$nextTick(() => {
                this.loading--
              })
            })
          })
        }
      }
    },
    update: throttle(function() {
      this.s_load()
    }, 300),
  },
}
</script>

<style lang="scss" scoped>
  .n-data-component {
  
  }
</style>
