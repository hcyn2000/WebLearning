let arr = [2, 2, 2];
console.log(arr.unshift(1, 2, 3));
console.log(arr);

// 定义：
// 将一个或多个元素添加到数组的开头，并返回该数组的新长度。(会影响原数组)

// 语法：
// arr.unshift(element1, ..., elementN)

// 参数：
// elementN：要添加到数组开头的元素或多个元素。

// 返回值：
// 返回该数组的新长度。

// 实现过程:
Array.prototype._unshift = function () {
  let len = arguments.length; // 添加的元素个数
  let loopNum = this.length + len - 1; // 总循环次数
  // 倒循环
  for (let i = loopNum; i >= 0; i--) {
    console.log(i);
    // 如果 循环剩下的次数 小于 添加的元素个数 则直接把添加的元素添加进原数组
    if (i >= len) {
      this[i] = this[i - len];
    } else {
      this[i] = arguments[i];
    }
  }
  return this.length;
};

let arr2 = [2, 2, 2];
console.log(arr2._unshift(1, 2, 3));
// console.log(arr2);
