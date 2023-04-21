import { defineStore } from "pinia";

export const useTypeStore = defineStore("type", {
  state: () => {
    return {
      // 类型默认数组
      typeList: [
        { name: "餐饮", icon: "canyin" },
        { name: "交通", icon: "jiaotong" },
        { name: "购物", icon: "gouwuche" },
        { name: "娱乐", icon: "yule" },
        { name: "住房", icon: "zhufang" },
        { name: "通讯", icon: "dianhua" },
        { name: "医疗", icon: "yiliao" },
        { name: "日用品", icon: "riyongpin" },
        { name: "红包", icon: "hongbao" },
        { name: "旅游", icon: "lvyou" },
        { name: "化妆品", icon: "huazhuangpin" },
        { name: "宠物", icon: "chongwu" },
      ],
      // 消费数组
      consumeList: [],
    };
  },
  actions: {
    addConsume(res) {
      this.consumeList.unshift(res);
    },
  },
});
