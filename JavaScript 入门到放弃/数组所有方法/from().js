/*
Array.from()

https://es6.ruanyifeng.com/#docs/array#Array-from

说明：
  Array.from方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map）。


语法：
  // Arrow function
  Array.from(arrayLike, (element) => { ... } )
  Array.from(arrayLike, (element, index) => { ... } )

  // Mapping function
  Array.from(arrayLike, mapFn)
  Array.from(arrayLike, mapFn, thisArg)


参数:
  arrayLike
    要转换为数组的类数组或可迭代对象。

  mapFn 可选的
    Map 函数调用数组的每个元素。

  thisArg 可选的
    this执行时使用的值mapFn。


返回值:
  一个新Array实例。
*/

// 例子
// 来自一个数组 String
console.log(Array.from("foo")); // [ "f", "o", "o" ]

// 来自一个数组 Set
const set = new Set(["foo", "bar", "baz", "foo"]);
console.log(set);
console.log(Array.from(set)); // [ "foo", "bar", "baz" ]

// 来自一个数组 Map
const map = new Map([
  [1, 2],
  [2, 4],
  [4, 8],
]);
// console.log(map);
console.log(Array.from(map)); // [[1, 2], [2, 4], [4, 8]]

const mapper = new Map([
  ["1", "a"],
  ["2", "b"],
]);
Array.from(mapper.values()); // ['a', 'b'];

Array.from(mapper.keys()); // ['1', '2'];
