/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums, pair = 0) {
  if (nums.length < 2) return [0, 1];
  for (let i = 0; i < nums.length; i++) {
    let index = nums.indexOf(nums[i], i + 1);
    if (index !== -1) {
      nums.splice(i, 1);
      nums.splice(index - 1, 1);
      i--;
      pair++;
    }
  }
  return [pair, nums.length];
};
