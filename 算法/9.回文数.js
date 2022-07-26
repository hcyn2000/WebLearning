var isPalindrome = function (x) {
  x = x + "";
  let s = x.split("").reverse().join("");
  return x == s;
};
console.log(isPalindrome(0));
