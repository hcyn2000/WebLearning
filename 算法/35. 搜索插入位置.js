/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let targetIndex = nums.indexOf(target);
  if (targetIndex != -1) return targetIndex;
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    if (nums[left] < target) {
      left++;
    } else {
      return left;
    }
    if (nums[right] > target) {
      right--;
    } else {
      return right + 1;
    }
  }
  return left;
};
