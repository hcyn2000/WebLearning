import requests from "../request";

export default {
  // 获取验证码
  getSendCode(phone) {
    return requests({
      url: `/user/passport/sendCode/${phone}`,
      method: "get",
    });
  },
  // 注册用户
  getRegister(params) {
    return requests({
      url: `/user/passport/register`,
      method: "post",
      data: params,
    });
  },
  // 用户登录
  getLogin(params) {
    return requests({
      url: `/user/passport/login`,
      method: "post",
      data: params,
    });
  },
  // 获取用户信息
  getUserInfo(params) {
    return requests({
      url: `/user/passport/auth/getUserInfo`,
      method: "get",
      params: params,
    });
  },
  // 退出登录
  getLogout(params) {
    return requests({
      url: `/user/passport/logout`,
      method: "get",
      params: params,
    });
  },
};
