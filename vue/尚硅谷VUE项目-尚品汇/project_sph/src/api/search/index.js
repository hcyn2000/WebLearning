import requests from "../request"

export default {
  // 搜索商品列表
  getSearchList(params) {
    return requests({
      url: "/list",
      method: "post",
      params: params,
    })
  },
}
