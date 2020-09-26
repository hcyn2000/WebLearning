// let ary = matrix = [
//     [1, 3, 5, 7],
//     [10, 11, 16, 20],
//     [23, 30, 34, 50]
// ]
// console.log(ary.flat());

// /**
//  * @param {number[][]} matrix
//  * @param {number} target
//  * @return {boolean}
//  */
// var searchMatrix = function(matrix, target) {
//     for(let i = 0;i < matrix.length; i++){
//         for(let j = 0;j < matrix[i].length; j++){
//             if(matrix[i][j] === target) {
//                 return true
//             }
//         }
//     }
//     return false
// };


/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let arr = matrix.flat()   // flat() ES6 语法 嵌套数组转一维数组
    let left = 0, right = arr.length - 1, mid
    while (left <= right) {
        mid = Math.floor((left + right) / 2)
        if (arr[mid] === target) {
            return true
        } else if (arr[mid] > target) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return false
};

let matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
]
console.log(searchMatrix(matrix, 3));   // true