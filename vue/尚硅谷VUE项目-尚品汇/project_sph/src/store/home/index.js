import home_api from "@/api/home"

// state：仓库存储数据的地方
const state = {
  categoryList: [],
}

// actions：用于响应组件中的动作,处理异步操作
const actions = {
  async categoryList({ commit }) {
    let data = await home_api.getBaseCategoryList()
    commit("CATEGORYLIST", data)
  },
}

// mutations：用于操作数据
const mutations = {
  CATEGORYLIST(state, value) {
    state.categoryList = value
  },
}

// getters：用于加工state中的数据
const getters = {}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
}
