/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function (s) {
  console.log(123);
  let newS = s.split("|");
  if (newS.length < 2) {
    return !s.match(/[*]/g) ? 0 : s.match(/[*]/g).length;
  }
  let len = 0;
  for (let i = 0; i < newS.length; i += 2) {
    if (newS[i].match(/[*]/g)) len += newS[i].match(/[*]/g).length;
  }
  return len;
};

countAsterisks("iamprogrammer");
