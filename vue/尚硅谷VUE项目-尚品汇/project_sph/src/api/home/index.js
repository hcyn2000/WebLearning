import requests from "../request"

export default {
  getBaseCategoryList(params) {
    return requests({
      url: "/product/getBaseCategoryList",
      method: "get",
      params: params,
    })
  },
}
