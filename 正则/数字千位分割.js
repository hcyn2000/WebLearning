function splitNum(num) {
  let t = num.toString().split(".");
  // console.log(t);
  let arr = t[0].split("").reverse();
  let res = [];
  for (var i = 0, len = arr.length; i < len; i++) {
    if (i % 3 === 0 && i !== 0) {
      res.push(","); // 添加分隔符
    }
    res.push(arr[i]);
  }
  res.reverse(); // 再次倒序成为正确的顺序
  if (num[1]) {
    // 如果有小数的话添加小数部分
    res = res.join("").concat("." + num[1]);
  } else {
    res = res.join("");
  }

  return res;
}
splitNum(123456789);
// console.log(splitNum(1234561231236));
