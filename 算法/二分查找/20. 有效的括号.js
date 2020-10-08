/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length % 2 == 1) return false;
    let map = {
        '(': -1,
        ')': 1,
        '[': -2,
        ']': 2,
        '{': -3,
        '}': 3,
    }
    let stack = []
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] < 0) {
            stack.push(s[i])    //1. 先把所有左半边括号存入数组中
        } else {    // 当循环中出现右半边括号时，我们将数组中的元素取出，与之进行匹配
            let last = stack.pop()  // pop() 方法用于删除并返回数组的最后一个元素
            if (map[last] + map[s[i]] != 0) {
                return false
            }
        }
    }
    if (stack.length > 0) {
        return false
    }
    return true
};

let str1 = '(){}[]'
let str2 = "(]"
let str3 = "{[]}"

console.log(isValid(str1));      // true
console.log(isValid(str2));     // false
console.log(isValid(str3));     // true