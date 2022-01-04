/*
Array.prototype.copyWithin()

说明：
  该copyWithin()方法将数组的一部分浅复制到同一数组中的另一个位置，并在不修改其长度的情况下返回它。


语法：
  copyWithin(target)
  copyWithin(target, start)
  copyWithin(target, start, end)


参数：
  target
    将序列复制到的从零开始的索引。如果为负数，target 将从最后开始计数。

    如果target等于或大于arr.length，则不会复制任何内容。如果target位于之后start，复制的序列将被修剪以适应arr.length。

  start 可选的
    从零开始复制元素的索引。如果为负数， start将从最后开始计数。

    如果start省略，copyWithin将从 index 复制 0。

  end 可选的
    从零开始复制元素的索引。copyWithin 复制最多但不包括end. 如果为负数，end将从最后开始计数。

    如果end省略，copyWithin将复制到最后一个索引（默认为arr.length）。


返回值：
  修改后的数组
*/

// 例子：

[1, 2, 3, 4, 5].copyWithin(-2); // [1, 2, 3, 1, 2]

[1, 2, 3, 4, 5].copyWithin(0, 3); // [4, 5, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(0, 3, 4); // [4, 2, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(-2, -3, -1); // [1, 2, 3, 3, 4]
