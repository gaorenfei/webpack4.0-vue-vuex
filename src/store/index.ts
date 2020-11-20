import Vue from 'vue'
import Vuex from 'vuex'
import storeModules from '@/store'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: storeModules,
  /**
   * If strict mode should be enabled
   * process.env.NODE_ENV !== 'production'
   */
  strict: false
})
