import requests from "../request";

export default {
  // 获取用户地址信息
  getFindUserAddressList(params) {
    return requests({
      url: `/user/userAddress/auth/findUserAddressList`,
      method: "get",
      params: params,
    });
  },
  // 获取商品清单
  getTrade(params) {
    return requests({
      url: `/order/auth/trade`,
      method: "get",
      params: params,
    });
  },
  // 提交订单
  getSubmitOrder(params) {
    return requests({
      url: `/order/auth/submitOrder?tradeNo=${params.tradeNo}`,
      method: "post",
      data: params,
    });
  },
  // 获取订单支付信息
  getCreateNative(orderId) {
    return requests({
      url: `/payment/weixin/createNative/${orderId}`,
      method: "get",
    });
  },
  // 查询支付订单状态
  getQueryPayStatus(orderId) {
    return requests({
      url: `/payment/weixin/queryPayStatus/${orderId}`,
      method: "get",
    });
  },
  // 获取我的订单列表
  getAuth(params) {
    return requests({
      url: `/order/auth/${params.page}/${params.limit}`,
      method: "get",
    });
  },
};
