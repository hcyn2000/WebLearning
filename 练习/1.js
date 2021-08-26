function binarySearch(target, arr) {
  var start = 0;
  var end = arr.length - 1;

  while (start <= end) {
    var mid = parseInt(start + (end - start) / 2);
    if (target == arr[mid]) {
      return mid;
    } else if (target > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}
let arrays = [1, 2, 3, 4, 5, 6, 7];

function sum(a, b) {
  let a1 = BigInt("0b" + a);
  let b1 = BigInt("0b" + b);
  console.log(a1 + b1);
  return (a1 + b1).toString(2);
}
console.log(sum(11, 10));
