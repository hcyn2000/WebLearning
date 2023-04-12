import { defineStore } from "pinia";

// js保留两位小数，自动补充零
function returnFloat(value) {
  var value = Math.round(parseFloat(value) * 100) / 100;
  var xsd = value.toString().split(".");
  if (xsd.length == 1) {
    value = value.toString() + ".00";
    return value;
  }
  if (xsd.length > 1) {
    if (xsd[1].length < 2) {
      value = value.toString() + "0";
    }
    return value;
  }
}

export const useMoneyStore = defineStore("money", {
  state: () => {
    return { budgetValue: "" };
  },
  // 也可以这样定义
  // state: () => ({ count: 0 })
  actions: {
    setBudget(value) {
      let num = +value;
      if (num < 0) return;
      this.budgetValue = num == 0 ? "" : returnFloat(num);
    },
  },
});
