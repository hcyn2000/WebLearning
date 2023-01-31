const promise = new Promise((resolve, reject) => {
  console.log("111");
  resolve("hhh");
  reject("error");
  resolve("eee");
  console.log("333");
});

promise.then(() => {
  console.log("444");
});

console.log("555");
