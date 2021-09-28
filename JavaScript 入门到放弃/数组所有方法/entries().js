/*
Array.prototype.entries()

说明：
  该entries()方法返回一个新的数组迭代器对象，该对象包含数组中每个索引的键/值对。


语法：
  entries()


返回值：
  一个新的Array迭代器对象。

*/

// 例子：

// 使用索引和元素进行迭代
const a = ["a", "b", "c"];

for (const [index, element] of a.entries()) {
  console.log(index, element);
}
// 0 'a'
// 1 'b'
// 2 'c'

// 使用for…of循环
var b = [{ name: "a" }, { name: "b" }, { name: "c" }];
var iterator = b.entries();

for (let e of iterator) {
  console.log(e);
}
// [0, { name: "a" }]
// [(1, { name: "b" })]
// [(2, { name: "c" })]
