import requests from "../request"

export default {
  // 首页商品分类三级联动
  getBaseCategoryList(params) {
    return requests({
      url: "/product/getBaseCategoryList",
      method: "get",
      params: params,
    })
  },
}
