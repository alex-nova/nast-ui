
export default {
  props: {
    data: { type: Array, default: () => [], },
    columns: { type: Array, default: () => [], },
    js: { type: Boolean, default: false, },
    headless: { type: Boolean, default: false, },
    keyName: { type: String, default: 'id', },
    
    headerClick: { type: Function, default: (column) => {}, },
    cellClick: { type: Function, default: (item, column) => {}, },
  },
  
  computed: {
    props() {
      return {
        data: this.data,
        columns: this.columns,
        js: this.js,
        keyName: this.keyName,
        headerClick: this.headerClick,
        cellClick: this.cellClick,
      }
    },
    events() {
      return {
        headerClick: this.headerClick,
        cellClick: this.cellClick,
      }
    },
  },
}
