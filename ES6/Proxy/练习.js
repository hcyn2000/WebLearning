let obj = {
  age: 20,
};
let validator = {
  get: function (obj, key) {
    console.log(obj, key);
    return obj[key];
  },
  set: function (obj, key, value) {
    console.log(obj, key, value);
    obj[key] = value;
    return true;
  },
};

let proxy = new Proxy(obj, validator);
proxy.age = 30;
console.log(obj);
console.log(proxy);
obj.age = 40;
console.log(obj);
console.log(proxy);
