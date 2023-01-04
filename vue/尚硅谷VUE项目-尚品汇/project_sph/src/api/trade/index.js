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
};
