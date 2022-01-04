/*
Array.prototype.every()

说明：
  该every()方法测试数组中的所有元素是否通过提供的函数实现的测试。它返回一个布尔值。


语法：
  // Arrow function
  every((element) => { ... } )
  every((element, index) => { ... } )
  every((element, index, array) => { ... } )

  // Callback function
  every(callbackFn)
  every(callbackFn, thisArg)

  // Inline callback function
  every(function callbackFn(element) { ... })
  every(function callbackFn(element, index) { ... })
  every(function callbackFn(element, index, array){ ... })
  every(function callbackFn(element, index, array) { ... }, thisArg)


参数:
  callbackFn
    用于测试每个元素的函数，采用三个参数：

    element
      数组中正在处理的当前元素。

    index 可选的
      数组中正在处理的当前元素的索引。

    array 可选的
      该数组every被调用。

  thisArg 可选的
    this执行时使用的值callbackFn。


返回值:
true如果callbackFn函数为每个数组元素返回一个真值。 否则，false。
*/

// 例子

// 测试所有数组元素的大小
// 下面的示例测试数组中的所有元素是否都大于 10。

function isBigEnough(element, index, array) {
  return element >= 10;
}
console.log([12, 5, 8, 130, 44].every(isBigEnough)); // false
console.log([12, 54, 18, 130, 44].every(isBigEnough)); // true
