import requests from "../request";

export default {
  // 获取商品详情
  getGoodsInfo(params) {
    return requests({
      url: `/item/${params}`,
      method: "get",
      params: params,
    });
  },

  // 添加到购物车
  getAddToCart(skuId, skuNum) {
    return requests({
      url: `/cart/addToCart/${skuId}/${skuNum}`,
      method: "post",
    });
  },
};
