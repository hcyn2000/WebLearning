function binarySearch(target, arr) {    //定义一个函数 接受两个形参 （target是输入的数，arr是一个数组）
    //设置数组范围  下标为(0-end)
    var start = 0;              //设置一个变量为0
    var end = arr.length - 1;   //把数组下标长度赋值给end变量   (此时end为9)

    while (start <= end) {  //数组的下标长度不小于或等于0的话，执行while循环语句   (循环完第一次start = 5，5 <= 9，执行循环)   (循环完第二次start = 8，8 <= 9，执行循环)   (循环完第三次start = 9，9 <= 9，执行循环)

        var mid = parseInt((end + start) / 2);//把数组中间的下标给mid(取整)    (第一次循环((9 + 0) / 2)向下取整 = 4)   (第二次循环((9 + 5) / 2)向下取整 = 7)    (第三次循环((9 + 8) / 2)向下取整 = 8)   (第四次循环((9 + 9) / 2)向下取整 = 9)
        if (target == arr[mid]) {   //如果输入的数等于数组arr下标为mid的元素   (第四次循环(10 = 10))
            return mid;             //返回下标      (第四次循环(返回9))
        } else if (target > arr[mid]) { //如果猜的数大于数组arr下标为mid的元素    (第一次循环(如果10 > 5))    (第二次循环(如果10 > 8))  (第三次循环(如果10 > 9))
            start = mid + 1;        //把下标mid + 1 赋值给start   (第一次循环(start = 4 + 1 = 5))   (第二次循环(start = 7 + 1 = 8))     (第三次循环(start = 8 + 1 = 9))
        } else {                    //否则
            end = mid - 1;          //把下标mid - 1 赋值给end       
        }
    }
    return -1;                  //没有执行while循环 返回-1
}
let arrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(binarySearch(10, arrays)); 