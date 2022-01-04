/*
Array.prototype.at();

说明:
  该at()方法接受一个 整数值并返回该索引处的项目 ，允许 正整数 和 负整数 。负整数从数组中的最后一项开始计数。

  这并不是说使用方括号表示法有什么问题。例如array[0]将返回第一项。然而，而不是array.length用于后面的项目；例如array[array.length-1]，对于最后一项，您可以调用array.at(-1)


语法:
  at(index);


参数:
  index;
    要返回的数组元素的索引（位置）。当传递一个负索引时，支持从数组末尾开始相对索引；即，如果使用负数，将通过从数组末尾开始倒数来找到返回的元素。


返回值:
  数组中与给定索引匹配的元素。如果找不到给定的索引，则返回undefined。
*/

// 例子:
const array1 = [5, 12, 8, 130, 44];

let index = 2;
console.log(array1.at(index));

index = -1;
console.log(array1.at(index));
