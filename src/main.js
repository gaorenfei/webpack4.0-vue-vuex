import Vue from "vue";
import App from "./app.vue";
import "@babel/polyfill"; //兼容IE
import "styles/app.less";
import router from "@/routers";
import store from "@/store";

Vue.config.productionTip = false;
new Vue({
  el: "#root",
  router,
  store,
  render: h => h(App)
});

// webpack进行热更新
if (module.hot) {
  module.hot.accept();
}
