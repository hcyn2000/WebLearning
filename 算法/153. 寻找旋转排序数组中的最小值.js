/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let left = 0, right = nums.length - 1, mid
    while (left < right) {
        mid = Math.floor((right + left) / 2)
        if (nums[mid] > nums[right]) {
            left = mid + 1
        } else {
            right = mid
        }
    }
    return nums[left]
};


let arr1 = [3, 4, 5, 1, 2]
let arr2 = [4, 5, 6, 7, 0, 1, 2]
console.log(findMin(arr1));     // 1
console.log(findMin(arr2));     // 0