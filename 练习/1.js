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
let arrays = [1, 2, 3, 4, 5, 6, 7]
console.log(binarySearch(6, arrays)); 