// 人员管理相关的配置
import axios from "axios";
import { nanoid } from "nanoid";
const personOptions = {
  namespaced: true,
  actions: {
    addPersonWu(context, value) {
      if (value.name.startsWith("吴")) {
        context.commit("ADD_PERSON", value);
      }
    },
    addPersonServer(context) {
      axios
        .get("https://api.uixsj.cn/hitokoto/get?type=social")
        .then((res) => {
          context.commit("ADD_PERSON", { id: nanoid(), name: res.data });
        })
        .catch(() => {});
    },
  },
  mutations: {
    ADD_PERSON(state, value) {
      state.personList.unshift(value);
    },
  },
  state: {
    personList: [{ id: "001", name: "张三" }],
  },
  getters: {
    firstPersonName(state) {
      return state.personList[0].name;
    },
  },
};

export default personOptions;
