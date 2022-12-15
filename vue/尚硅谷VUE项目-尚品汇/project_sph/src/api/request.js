// 对于axios进行二次封装
import axios from "axios";
// 引入进度条 以及样式  start方法：进度条开始   done方法：进度条结束
import nProgress from "nprogress";
import "nprogress/nprogress.css";
// 引入store
import store from "@/store";
// 1.利用axios对象的方法create，去创建一个axios实例
// 2.request就是axios，只不过稍微配置了一下
const requests = axios.create({
  // 配置对象
  // 基础路径，发请求的时候，路径当中会出现api
  baseURL: "/api",
  // 代表请求超时的时候
  timeout: 10000,
});

// 请求拦截器：在发请求之前，请求拦截器可以监测到，可以在请求发出去之前做一些事情
requests.interceptors.request.use((config) => {
  // config：配置对象，对象里面有一个属性很重要，headers请求头
  // 进度条开始
  nProgress.start();
  if (store.state.detail.uuid_token) {
    config.headers.userTempId = store.state.detail.uuid_token;
  }
  // 需要携带token给服务器
  if (store.state.user.token) {
    config.headers.token = store.state.user.token;
  }
  return config;
});

// 响应拦截器
requests.interceptors.response.use(
  (response) => {
    // 成功的回调函数：服务器响应数据回来以后，响应拦截器可以监测到，可以处理一些事情
    // 进度条结束
    nProgress.done();
    let res = response.data;
    if (res.code == 200) {
      return res.data;
    }
  },
  (error) => {
    // 响应失败的回调
    return Promise.reject(new Error("faile"));
  }
);

export default requests;
