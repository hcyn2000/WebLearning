/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
    let left = 0, right = numbers.length - 1, mid
    while (left < right) {
        mid = Math.floor((left + right) / 2)
        if (numbers[mid] > numbers[right]) {
            left = mid + 1
        } else if (numbers[mid] == numbers[right]) {
            right--;
        } else {
            right = mid
        }
    }
    return numbers[left]
};

let arr1 = [3, 4, 5, 1, 2]
let arr2 = [2, 2, 2, 0, 1]
console.log(minArray(arr1));     // 1
console.log(minArray(arr2));     // 1