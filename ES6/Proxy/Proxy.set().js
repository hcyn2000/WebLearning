// Proxy.set()
// set方法用来拦截某个属性的赋值操作，可以接受四个参数，依次为目标对象、属性名、属性值和 Proxy 实例本身，其中最后一个参数可选。

// 假定Person对象有一个age属性，该属性应该是一个不大于 200 的整数，那么可以使用Proxy保证age的属性值符合要求。

let validator = {
  set: function (obj, prop, value) {
    if (prop === "age") {
      if (!Number.isInteger(value)) {
        throw new TypeError("The age is not an integer");
      }
      if (value > 200) {
        throw new RangeError("The age seems invalid");
      }
    }

    // 对于满足条件的 age 属性以及其他属性，直接保存
    obj[prop] = value;
    return true;
  },
};

let person = new Proxy({}, validator);

person.age = 100;

person.age; // 100
person.age = "young"; // 报错
person.age = 300; // 报错

// 上面代码中，由于设置了存值函数set，任何不符合要求的age属性赋值，都会抛出一个错误，这是数据验证的一种实现方法。利用set方法，还可以数据绑定，即每当对象发生变化时，会自动更新 DOM。

// ----------------------------------------------------------------------------------------

// 注意，如果目标对象自身的某个属性不可写，那么set方法将不起作用。

const obj = {};
Object.defineProperty(obj, "foo", {
  value: "bar",
  writable: false,
});

const handler = {
  set: function (obj, prop, value, receiver) {
    obj[prop] = "baz";
    return true;
  },
};

const proxy = new Proxy(obj, handler);
proxy.foo = "baz";
proxy.foo; // "bar"

// 上面代码中，obj.foo属性不可写，Proxy 对这个属性的set代理将不会生效。
