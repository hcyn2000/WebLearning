// Proxy.get()
// get方法用于拦截某个属性的读取操作，可以接受三个参数，依次为目标对象、属性名和 proxy 实例本身（严格地说，是操作行为所针对的对象），其中最后一个参数可选。
var person = {
  name: "张三",
  age: 30,
};
// console.log("name" in person);
var proxy = new Proxy(person, {
  get: function (target, propKey) {
    console.log(target, propKey);
    if (propKey in target) {
      return target[propKey];
    } else {
      throw new ReferenceError('Prop name "' + propKey + '" does not exist.');
    }
  },
});
// console.log(proxy.name);
// console.log(proxy.age);

// ---------------------------------------------------------------------------------

// 下面的例子使用get拦截，实现数组读取负数的索引。

function createArray(...elements) {
  let handler = {
    get(target, propKey, receiver) {
      console.log(target, propKey, receiver);
      let index = Number(propKey);
      if (index < 0) {
        propKey = String(target.length + index);
      }
      console.log(Reflect.get(target, propKey, receiver));
      return Reflect.get(target, propKey, receiver);
    },
  };

  let target = [];
  target.push(...elements);
  return new Proxy(target, handler);
}

let arr = createArray("a", "b", "c");
// console.log(arr);
console.log(arr[-1]);

// 上面代码中，数组的位置参数是-1，就会输出数组的倒数第一个成员。
