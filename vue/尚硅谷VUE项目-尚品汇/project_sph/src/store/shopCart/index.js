import shopCart_api from "@/api/shopCart";

// state：仓库存储数据的地方
const state = {
  cartList: [],
};

// actions：用于响应组件中的动作,处理异步操作
const actions = {
  // 请求购物车列表
  async getCartList({ commit }) {
    let data = await shopCart_api.getCartList();
    commit("GETCARTLIST", data);
  },
  // 删除购物车列表某一项
  async getDeleteCart({ commit }, value) {
    await shopCart_api.getDeleteCart(value);
  },
  // 切换购物车商品选中状态
  async getCheckCart({ commit }, { skuID, isChecked }) {
    await shopCart_api.getCheckCart(skuID, isChecked);
  },
  // 删除选中商品
  deleteAllCheckedCart({ dispatch, getters }) {
    let PromiseAll = [];
    getters.cartInfoList.forEach((item) => {
      let promise = item.isChecked == 1 ? dispatch("getDeleteCart", item.skuId) : "";
      PromiseAll.push(promise);
    });
    return Promise.all(PromiseAll);
  },
};

// mutations：用于操作数据
const mutations = {
  GETCARTLIST(state, value) {
    state.cartList = value;
  },
};

// getters：用于加工state中的数据
const getters = {
  cartInfoList(state) {
    let cartObj = state.cartList[0] || {};
    return cartObj.cartInfoList || [];
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
