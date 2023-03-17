export default (el, binding, vnode, prevVnode) => {
  // console.log(el, binding, vnode, prevVnode);
  // el为指令绑定的页面元素
  el.focus();
  el.style.backgroundColor = binding.value || "#ccc";
};
