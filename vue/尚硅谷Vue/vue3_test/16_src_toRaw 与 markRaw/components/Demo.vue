<template>
  <h4>{{ person }}</h4>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>薪资：{{ salary }}K</h2>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="salary++">涨薪</button>
  <hr />
  <h2>sum的值是{{ sum }}</h2>
  <button @click="sum++">x值改变</button>
  <hr />
  <button @click="showRawPerson">输出原始person</button>
  <hr />
  <h3 v-show="person.car">车的信息:{{ person.car }}</h3>
  <button @click="addCar">添加一台车</button>
  <button @click="person.car.name += '!'">修改车的名称</button>
  <button @click="person.car.price++">修改车的价格</button>
</template>

<script>
import { reactive, toRef, toRefs, ref, toRaw, markRaw } from "vue";
export default {
  name: "Demo",
  setup() {
    //数据
    let sum = ref(0);
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    function showRawPerson() {
      // toRaw 把reactive生成的响应式对象变成普通对象
      let per = toRaw(person);
      console.log(per);
    }

    function addCar() {
      let car = { name: "奔驰", price: 40 };
      // markRaw 让一个对象可以不是响应式的
      person.car = markRaw(car);
    }

    //返回一个对象（常用）
    return {
      person,
      ...toRefs(person),
      salary: toRef(person.job.j1, "salary"),
      sum,
      showRawPerson,
      addCar,
    };
  },
};
</script>
