let arr = [];
arr.push(1, 2, 3, 4);
console.log(arr);

// push

// 定义：
// 将一个或多个元素添加到数组的末尾，并返回该数组的新长度。(会影响原数组)

// 语法：
// arr.push(element1, ..., elementN)

// 返回值：
// 返回该数组的新长度。

// 实现原理
Array.prototype._push = function () {
  let length = this.length;
  for (let i = 0; i < arguments.length; i++) {
    this[length + i] = arguments[i];
  }
  return this.length;
};

let arr2 = [];
arr2._push(1, 2, 3, 4);
console.log(arr2);
