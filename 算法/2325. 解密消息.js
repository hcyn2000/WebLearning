/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */

let letterList = [];
for (let index = 1; index < 27; index++) {
  letterList[index - 1] = String.fromCharCode(96 + index);
}
var decodeMessage = function (key, message) {
  let keyList = [];
  let sum = "";
  for (const item of key) {
    if (item != " " && keyList.indexOf(item) == -1) keyList.push(item);
  }
  for (const item of message)
    keyList.indexOf(item) != -1 ? (sum += letterList[keyList.indexOf(item)]) : (sum += " ");
  console.log(sum);
  // console.log(keyList);
  return sum;
};

decodeMessage("the quick brown fox jumps over the lazy dog", "vkbs bs t suepuv");
