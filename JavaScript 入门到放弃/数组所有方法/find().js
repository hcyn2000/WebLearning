/*
Array.prototype.find()

说明：
  该find()方法返回提供的数组中满足提供的测试函数的第一个元素的值。如果没有值满足测试函数，则返回undefined。


语法：
  // Arrow function
  find((element) => { ... } )
  find((element, index) => { ... } )
  find((element, index, array) => { ... } )

  // Callback function
  find(callbackFn)
  find(callbackFn, thisArg)

  // Inline callback function
  find(function callbackFn(element) { ... })
  find(function callbackFn(element, index) { ... })
  find(function callbackFn(element, index, array){ ... })
  find(function callbackFn(element, index, array) { ... }, thisArg)


参数：
  callbackFn
    对数组中的每个值执行的函数，采用 3 个参数：

    element
      数组中的当前元素。

    index 可选的
      数组中当前元素的索引（位置）。

    array 可选的
      find被调用的数组。

  thisArg 可选的
    用作thisinside 的 对象callbackFn。

返回值：
  数组中满足提供的测试函数的第一个元素 的值。否则，被退回。 undefined
*/

// 例子:

// 通过其属性之一在数组中查找对象
const inventory1 = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

function isCherries(fruit) {
  return fruit.name === "cherries";
}
console.log(inventory1.find(isCherries)); // { name: 'cherries', quantity: 5 }

// 使用箭头函数和解构:
const inventory2 = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

const result = inventory2.find(({ name }) => name === "cherries");
console.log(result); // { name: 'cherries', quantity: 5 }
