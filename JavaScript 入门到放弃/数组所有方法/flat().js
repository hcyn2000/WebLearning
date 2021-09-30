/*
Array.prototype.flat()

https://es6.ruanyifeng.com/#docs/array#%E6%95%B0%E7%BB%84%E5%AE%9E%E4%BE%8B%E7%9A%84-flat%EF%BC%8CflatMap
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat


说明：
  该flat()方法创建一个新数组，其中所有子数组元素以递归方式连接到指定深度。
  数组扁平化


语法：
  flat()
  flat(depth)

参数
  depth 可选的
    指定嵌套数组结构应展平的深度的深度级别。默认为 1。

返回值
  将子数组元素连接到其中的新数组。
*/

// 例子：

// 展平嵌套数组
const arr1 = [1, 2, [3, 4]];
console.log(arr1.flat());
// [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]];
console.log(arr2.flat());
// [1, 2, 3, 4, [5, 6]]

const arr3 = [1, 2, [3, 4, [5, 6]]];
console.log(arr3.flat(2));
// [1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(arr4.flat(Infinity)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 展平和阵列孔
// flat 方法删除数组中的空槽：

const arr5 = [1, 2, , 4, 5];
console.log(arr5.flat()); // [1, 2, 4, 5]
