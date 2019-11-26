export default {
  props: {
    data: { type: Array, default: () => [], },
    load: { type: Function, default: null, }, // props - (params = { page, size, search, parentId})
    size: { type: Number, default: 10, },
    search: { type: [ String, Number, Array, ], default: '', },
    firstPage: { type: Number, default: 0, },
    getContent: { type: Function, default: (response) => response.data, },
    getTotalCount: { type: Function, default: (response) => {
      if (response.pagination) {
        return response.pagination.total || null
      }
      if (response.headers) {
        return response.headers['x-total-count'] || null
      }
      return null
    }, },
  },
  
  computed: {
    props() {
      return {
      }
    },
    events() {
      return {
      }
    },
    functions() {
      return {
      }
    },
  },
}
