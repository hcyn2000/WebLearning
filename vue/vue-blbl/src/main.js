import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import qs from 'qs'

axios.defaults.withCredentials = true
Vue.use(VueAxios, axios)
Vue.prototype.$axios = axios;
Vue.prototype.$qs = qs;
Vue.config.productionTip = false

new Vue({
  axios,
  render: h => h(App),
}).$mount('#app')
