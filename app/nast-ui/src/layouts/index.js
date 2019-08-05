import Vue from 'vue'
import Simple from './simple/Index.vue'


export default {
  install(options) {
    Vue.component('nLayoutSimple', Simple)
  },
}
