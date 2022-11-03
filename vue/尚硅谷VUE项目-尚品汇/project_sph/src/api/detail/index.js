import requests from "../request";

export default {
  // 首页商品分类三级联动
  getGoodsInfo(params) {
    return requests({
      url: `/item/${params}`,
      method: "get",
      params: params,
    });
  },
};
