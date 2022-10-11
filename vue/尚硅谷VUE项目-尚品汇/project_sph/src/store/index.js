import Vue from "vue"
import Vuex from "vuex"

// 注册插件
Vue.use(Vuex)

import home from "./home"
import search from "./search"

export default new Vuex.Store({
  modules: {
    home,
    search,
  },
})
