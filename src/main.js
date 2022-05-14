import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
// import $ from 'jquery'
Vue.config.productionTip = false

Vue.use(Antd)
// Vue.use($)
new Vue({
  render: h => h(App),
}).$mount('#app')
