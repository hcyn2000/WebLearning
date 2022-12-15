// 存储token
export let setToken = (token) => {
  localStorage.setItem("TOKEN", token);
};
// 获取token
export let getToken = () => {
  return localStorage.getItem("TOKEN");
};
// 清空token
export let removeToken = () => {
  localStorage.removeItem("TOKEN");
};
