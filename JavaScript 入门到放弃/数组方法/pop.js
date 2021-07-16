let arr = [1, 2, 3, 4];
console.log(arr.pop());
console.log(arr);
// 定义：
// 从数组中删除最后一个元素，并返回该元素的值。(会影响原数组)

// 语法：
// arr.pop()

// 参数：
// 无

// 返回值：
// 返回从数组中删除的元素，如果数组为空则返回 undefined。

// 实现过程：
Array.prototype._pop = function () {
  if (!this.length) return;
  let lastItem = this[this.length - 1];
  this.length = this.length - 1;
  return lastItem;
};

let arr2 = [1, 2, 3, 4];
console.log(arr2._pop());
console.log(arr2);
