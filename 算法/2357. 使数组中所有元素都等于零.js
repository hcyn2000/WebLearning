/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  let total = 0;
  while (nums.length > 0) {
    nums = nums.filter((item) => item > 0);
    if (!nums.length) return total;
    let minNum = Math.min(...nums);
    nums = nums.map((item) => item - minNum);
    total++;
  }
  return total;
};
