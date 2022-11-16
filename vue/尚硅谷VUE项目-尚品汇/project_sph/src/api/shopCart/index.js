import requests from "../request";

export default {
  // 获取购物车列表
  getCartList(params) {
    return requests({
      url: `/cart/cartList`,
      method: "get",
      params: params,
    });
  },
  // 删除购物车列表某一项
  getDeleteCart(skuId) {
    return requests({
      url: `/cart/deleteCart/${skuId}`,
      method: "delete",
    });
  },
  // 切换购物车商品选中状态
  getCheckCart(skuID, isChecked) {
    return requests({
      url: `/cart/checkCart/${skuID}/${isChecked}`,
      method: "get",
    });
  },
};
