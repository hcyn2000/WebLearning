let arr = [
  {
    name: "张三",
    sex: 1,
    children: [
      {
        name: "张一三",
        sex: 1,
        children: [{ name: "张一一三", sex: 0 }],
      },
      {
        name: "张二三",
        sex: 1,
        children: [
          {
            name: "张二二三",
            sex: 0,
            children: [{ name: "张二二二三", sex: 0 }],
          },
        ],
      },
    ],
  },
];

function recursion(arr) {
  arr.forEach((item) => {
    item.sex_zh = item.sex == 1 ? "男" : "女";
    if (item.children) {
      return recursion(item.children);
    }
  });
  return arr;
}

console.log(JSON.stringify(recursion(arr)));
