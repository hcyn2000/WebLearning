/*
Array.prototype.flatMap()

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap
https://es6.ruanyifeng.com/#docs/array#%E6%95%B0%E7%BB%84%E5%AE%9E%E4%BE%8B%E7%9A%84-flat%EF%BC%8CflatMap


说明：
  flatMap()方法对原数组的每个成员执行一个函数（相当于执行Array.prototype.map()），然后对返回值组成的数组执行flat()方法。该方法返回一个新数组，不改变原数组。



语法：
  // Arrow function
  flatMap((currentValue) => { ... } )
  flatMap((currentValue, index) => { ... } )
  flatMap((currentValue, index, array) => { ... } )


参数：
  callbackFn
    生成新数组元素的函数，采用三个参数：

    currentValue
      数组中正在处理的当前元素。

    index可选的
      数组中正在处理的当前元素的索引。

    array可选的
      该数组map被调用。

  thisArg可选的
    this执行时使用的值callbackFn。


返回值：
  一个新数组，每个元素都是回调函数的结果，并展平的深度为 1。
*/

// 例子：
// map() 和 flatMap()
let arr1 = [1, 2, 3, 4];

arr1.map((x) => [x * 2]); // [[2], [4], [6], [8]]

arr1.flatMap((x) => [x * 2]); // [2, 4, 6, 8]

// only one level is flattened
arr1.flatMap((x) => [[x * 2]]); // [[2], [4], [6], [8]]

// -------------------------------------------------------------
// 但这里有一个示例，可以更好地展示 flatMap.
// 让我们从句子列表中生成一个单词列表。

let arr1 = ["it's Sunny in", "", "California"];

arr1.map((x) => x.split(" "));
// [["it's","Sunny","in"],[""],["California"]]

arr1.flatMap((x) => x.split(" "));
// ["it's","Sunny","in", "", "California"]
