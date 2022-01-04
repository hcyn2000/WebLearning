/*
Array.prototype.fill()

说明：
  该fill()方法将数组中的所有元素更改为静态值，从开始索引（默认0）到结束索引（默认array.length）。它返回修改后的数组。


语法：
  fill(value)
  fill(value, start)
  fill(value, start, end)


参数
  value
    用于填充数组的值。（注意数组中的所有元素都将是这个确切的值。）

  start 可选的
    起始索引，默认0.

  end 可选的
    结束索引，默认arr.length.


返回值：
  修改后的数组，填充了value.


描述：
  如果start是负数，则将其视为array.length + start。
  如果end是负数，则将其视为array.length + end。
  fill有意是通用的：它不要求它的this值是一个Array对象。
  fill 是一个 mutator 方法：它会改变数组本身并返回它，而不是它的副本。
  如果第一个参数是一个对象，则数组中的每个插槽都将引用该对象。
*/

// 例子：
// 使用填充
[1, 2, 3].fill(4); // [4, 4, 4]
[1, 2, 3].fill(4, 1); // [1, 4, 4]
[1, 2, 3].fill(4, 1, 2); // [1, 4, 3]
[1, 2, 3].fill(4, 1, 1); // [1, 2, 3]
[1, 2, 3].fill(4, 3, 3); // [1, 2, 3]
[1, 2, 3].fill(4, -3, -2); // [4, 2, 3]
[1, 2, 3].fill(4, NaN, NaN); // [1, 2, 3]
[1, 2, 3].fill(4, 3, 5); // [1, 2, 3]
Array(3).fill(4); // [4, 4, 4]
console.log([].fill.call({ length: 3 }, 2));
console.log([].fill({ length: 3 }));

// 使用 fill() 填充空数组
// 此示例显示如何使用随机值填充数组。不必指定结束值。
let tempGirls = Array(5).fill("girl", 0);
