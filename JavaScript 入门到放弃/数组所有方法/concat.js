/*
Array.prototype.concat()

说明:
  该concat()方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。


语法：
  concat()
  concat(value1)
  concat(value1, value2)
  concat(value2, value2, ... , valueN)


参数:
  valueN (可选的)
    要连接到新数组中的数组和/或值。如果valueN省略所有参数，则concat返回调用它的现有数组的浅表副本


返回值：
  一个新Array实例
*/

// 例子：

// 连接两个数组
const letters1 = ["a", "b", "c"];
const numbers1 = [1, 2, 3];

console.log(letters1.concat(numbers1)); // result in ['a', 'b', 'c', 1, 2, 3]

// 连接三个数组
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

const numbers2 = num1.concat(num2, num3);
console.log(numbers2); // results in [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 将值连接到数组
const letters2 = ["a", "b", "c"];

const alphaNumeric = letters2.concat(1, [2, 3]);
console.log(alphaNumeric); // results in ['a', 'b', 'c', 1, 2, 3]
