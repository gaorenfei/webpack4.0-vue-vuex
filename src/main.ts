import Vue from 'vue'
import App from './app.vue'
import '@babel/polyfill' // 兼容IE
import 'styles/app.less'
import router from '@/routers/index.ts'
import store from '@/store/index.ts'
import Component from 'vue-class-component'

Component.registerHooks([
  'beforeRouteEnter', // 进入路由之前
  'beforeRouteLeave', // 离开路由之前
  'beforeRouteUpdate'
])
Vue.config.productionTip = false
new Vue({
  el: '#root',
  router,
  store,
  render: h => h(App)
});

// webpack进行热更新
if ((module as any).hot) {
  (module as any).hot.accept()
}
