import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueRouter from 'vue-router'
import router from "@/router";

// import $ from 'jquery'
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Antd)
// Vue.use($)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
