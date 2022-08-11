// 求和相关的配置
const countOptions = {
  namespaced: true,
  actions: {
    jiaOdd(context, value) {
      // console.log(context, value);
      if (context.state.sum % 2) {
        context.commit("JIA", value);
      }
    },
    jiaWait(context, value) {
      setTimeout(() => {
        context.commit("JIA", value);
      }, 500);
    },
  },
  mutations: {
    JIA(state, value) {
      // console.log("mutations中的JIA被调用了", state, value);
      state.sum += value;
    },
    JIAN(state, value) {
      // console.log("mutations中的JIAN被调用了", state, value);
      state.sum -= value;
    },
  },
  state: {
    sum: 0,
    region: "南昌",
    subject: "前端",
  },
  getters: {
    bigSum(state) {
      return state.sum * 10;
    },
  },
};

export default countOptions;
