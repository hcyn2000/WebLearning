/*
Array.prototype.filter()

说明：
  该filter()方法创建一个新数组，其中包含通过提供的函数实现的测试的所有元素。


语句：
  // Arrow function
  filter((element) => { ... } )
  filter((element, index) => { ... } )
  filter((element, index, array) => { ... } )

  // Callback function
  filter(callbackFn)
  filter(callbackFn, thisArg)

  // Inline callback function
  filter(function callbackFn(element) { ... })
  filter(function callbackFn(element, index) { ... })
  filter(function callbackFn(element, index, array){ ... })
  filter(function callbackFn(element, index, array) { ... }, thisArg)


参数：
  callbackFn
    函数是一个谓词，用来测试数组的每个元素。返回一个强制true保留元素的值，false否则。

    它接受三个参数：

      element
        数组中正在处理的当前元素。

      index可选的
        数组中正在处理的当前元素的索引。

      array可选的
        该数组filter被调用。

  thisArg可选的
    this执行时使用的值callbackFn。


返回值：
  包含通过测试的元素的新数组。如果没有元素通过测试，将返回一个空数组。
*/

// 例子：

// 过滤掉所有小的值
// 下面的示例用于filter()创建一个过滤数组，该数组包含值小于10删除的所有元素。

function isBigEnough(value) {
  return value >= 10;
}

let filtered = [12, 5, 8, 130, 44].filter(isBigEnough); // filtered is [12, 130, 44]
console.log(filtered);
