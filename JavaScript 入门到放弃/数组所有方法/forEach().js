/*
Array.prototype.forEach()


说明：
  该forEach()方法为每个数组元素执行一次提供的函数。


语法：
  // Arrow function
  forEach((element) => { ... } )
  forEach((element, index) => { ... } )
  forEach((element, index, array) => { ... } )


参数
  callbackFn
    在每个元素上执行的函数。它接受一到三个参数：

    element
      数组中正在处理的当前元素。

    index 可选的
      element数组中的索引。

    array 可选的
      该数组forEach()被调用。

  thisArg 可选的
    this执行时使用的值callbackFn。

返回值：
  undefined
*/

// 例子：
// 将 for 循环转换为 forEach
const items = ["item1", "item2", "item3"];
const copyItems1 = [];
const copyItems2 = [];

// before
for (let i = 0; i < items.length; i++) {
  copyItems1.push(items[i]);
}

// after
items.forEach(function (item) {
  copyItems2.push(item);
});
