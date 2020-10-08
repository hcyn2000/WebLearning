/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x < 2) {
        return x
    }
    let left = 2
    let right = Math.floor(x / 2);
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2)
        if (mid * mid === x) {
            return mid
        }
        if (mid * mid < x) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return right
};

let str1 = 4
let str2 = 8

console.log(mySqrt(str1));  // 2
console.log(mySqrt(str2));  // 2