/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var findString = function (words, s) {
    for (let i = 0; i < words.length; i++) {
        if (words[i] == s) {
            return i
        }
    }
    return -1
}

let words1 = ["at", "", "", "", "ball", "", "", "car", "", "", "dad", "", ""], s1 = "ta"
let words2 = ["at", "", "", "", "ball", "", "", "car", "", "", "dad", "", ""], s2 = "ball"

console.log(findString(words1, s1));
console.log(findString(words2, s2));