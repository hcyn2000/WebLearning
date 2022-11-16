import detail_api from "@/api/detail";
import { getUUID } from "@/utils/uuid_token"; // 封装游客身份模块
// state：仓库存储数据的地方
const state = {
  goodInfo: {},
  uuid_token: getUUID(),
};

// actions：用于响应组件中的动作,处理异步操作
const actions = {
  // 获取商品详情
  async getGoodsInfo({ commit }, value) {
    let data = await detail_api.getGoodsInfo(value);
    commit("GETGOODSINFO", data);
  },
  // 添加到购物车
  async getAddToCart({ commit }, { skuId, skuNum }) {
    await detail_api.getAddToCart(skuId, skuNum);
    return "ok";
  },
};

// mutations：用于操作数据
const mutations = {
  GETGOODSINFO(state, value) {
    state.goodInfo = value;
  },
};

// getters：用于加工state中的数据
const getters = {
  categoryView(state) {
    let list = [];
    for (const key in state.goodInfo.categoryView) {
      if (key.indexOf("Name") != -1) {
        list.push(state.goodInfo.categoryView[key]);
      }
    }
    return list || [];
  },
  skuInfo(state) {
    return state.goodInfo.skuInfo || {};
  },
  spuSaleAttrList(state) {
    return state.goodInfo.spuSaleAttrList || [];
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
