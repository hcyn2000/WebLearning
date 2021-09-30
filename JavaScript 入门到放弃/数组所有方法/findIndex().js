/*
Array.prototype.findIndex()

说明：
  该findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。否则它返回-1，表示没有元素通过测试。 


语法：
  // Arrow function
  findIndex((element) => { ... } )
  findIndex((element, index) => { ... } )
  findIndex((element, index, array) => { ... } )

参数:
  callbackFn
    对数组中的每个值执行的函数true，直到函数返回 ，表明找到了满意的元素。

    它需要三个参数：

    element
      数组中正在处理的当前元素。

    index 可选的
      数组中正在处理的当前元素的索引。

    array 可选的
      该数组findIndex()被调用。

  thisArg 可选的
    this执行时 使用的可选对象callbackFn。


返回值:
通过测试的数组中第一个元素的索引。否则返回-1。
*/

// 例子:

// 以下示例使用箭头函数查找水果的索引：

const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

const index = fruits.findIndex((fruit) => fruit === "blueberries");

console.log(index); // 3
console.log(fruits[index]); // blueberries
