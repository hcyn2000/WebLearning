// 引入mockjs
import Mock from "mockjs"
import banner from "./banners.json" // 首页轮播图
import floors from "./floors.json" // 首页家用电器

Mock.mock(/\/mock\/getBannersList/, { code: 200, data: banner }) // 模拟首页轮播图请求数据
Mock.mock(/\/mock\/getFloorList/, { code: 200, data: floors }) // 模拟首页家用电器请求数据
