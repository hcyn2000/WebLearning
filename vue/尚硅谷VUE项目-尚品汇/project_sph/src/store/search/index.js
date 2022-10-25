import search_api from "@/api/search"

// state：仓库存储数据的地方
const state = {
  searchObj: {},
}

// actions：用于响应组件中的动作,处理异步操作
const actions = {
  async getSearchList({ commit }, params = {}) {
    let data = await search_api.getSearchList(params)
    commit("GETSEARCHLIST", data)
  },
}

// mutations：用于操作数据
const mutations = {
  GETSEARCHLIST(state, value) {
    state.searchObj = value
  },
}

// getters：用于加工state中的数据
const getters = {
  goodsList(state) {
    return state.searchObj.goodsList || []
  },
  trademarkList(state) {
    return state.searchObj.trademarkList || []
  },
  attrsList(state) {
    return state.searchObj.attrsList || []
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
}
