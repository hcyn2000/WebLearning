import home_api from "@/api/home"
import mock_api from "@/api/mock"

// state：仓库存储数据的地方
const state = {
  categoryList: [], // 首页三级菜单数据
  bannersList: [], // 首页顶部轮播图数据
  floorList: [], // 首页floor组件数据
}

// actions：用于响应组件中的动作,处理异步操作
const actions = {
  // 首页商品分类三级联动数据
  async categoryList({ commit }) {
    let data = await home_api.getBaseCategoryList()
    commit("CATEGORYLIST", data)
  },

  // 首页顶部轮播图数据
  async getBannersList({ commit }) {
    let data = await mock_api.getBannersList()
    commit("GETBANNERSLIST", data)
  },

  // 首页floor组件数据
  async getFloorList({ commit }) {
    let data = await mock_api.getFloorList()
    commit("GETFLOORLIST", data)
  },
}

// mutations：用于操作数据
const mutations = {
  CATEGORYLIST(state, value) {
    state.categoryList = value
  },
  GETBANNERSLIST(state, value) {
    state.bannersList = value
  },
  GETFLOORLIST(state, value) {
    state.floorList = value
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
