import { defineStore } from "pinia";
import { returnFloat } from "@/utils/publicMethods.js";
import { useTypeStore } from "@/stores/type";

const typeStore = useTypeStore();

export const useMoneyStore = defineStore("money", {
  state: () => {
    return {
      budgetValue: "", // 预算金额
    };
  },
  getters: {
    // 今日金额总数
    todayAmountTotal() {
      let num = 0;
      typeStore.consumeList.forEach((item) => {
        num += +item.num;
      });
      return returnFloat(num);
    },
  },
  actions: {
    setBudget(value) {
      let num = +value;
      if (num < 0) return;
      this.budgetValue = num == 0 ? "" : returnFloat(num);
    },
  },
});
