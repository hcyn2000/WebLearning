import user_api from "@/api/user/index";
import { setToken, getToken, removeToken } from "@/utils/token";

// state：仓库存储数据的地方
const state = {
  token: getToken(),
  userInfo: {},
};

// actions：用于响应组件中的动作,处理异步操作
const actions = {
  // 用户登录
  async userLogin({ commit }, data) {
    let res = await user_api.getLogin(data);
    commit("USERLOGIN", res.token);
    setToken(res.token);
  },
  // 获取用户信息
  async getUserInfo({ commit }) {
    let res = await user_api.getUserInfo();
    commit("GETUSERINFO", res);
    return ok;
  },
  // 退出登录
  async getLogout({ commit }) {
    await user_api.getLogout();
    commit("GETLOGOUT");
    return ok;
  },
};

// mutations：用于操作数据
const mutations = {
  USERLOGIN(state, value) {
    state.token = value;
  },
  GETUSERINFO(state, value) {
    state.userInfo = value;
  },
  GETLOGOUT(state) {
    state.token = "";
    state.userInfo = {};
    removeToken();
  },
};

// getters：用于加工state中的数据
const getters = {};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
