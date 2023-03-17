export default (el, binding) => {
  el.style.position = "relative";
  // el.style.top = binding.value + "px";
  el.style[binding.arg] = binding.value + "px";
};
