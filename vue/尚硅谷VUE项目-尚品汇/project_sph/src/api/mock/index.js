import mockRequest from "./mockRequest"

export default {
  // 首页轮播图
  getBannersList(params) {
    return mockRequest({
      url: "/getBannersList",
      method: "get",
      params: params,
    })
  },

  // 首页家用电器
  getFloorList(params) {
    return mockRequest({
      url: "/getFloorList",
      method: "get",
      params: params,
    })
  },
}
