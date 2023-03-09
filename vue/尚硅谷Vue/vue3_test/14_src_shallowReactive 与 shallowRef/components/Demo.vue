<template>
  <h4>{{ person }}</h4>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>薪资：{{ salary }}K</h2>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="salary++">涨薪</button>
  <hr />
  <h2>x的值是{{ x.y }}</h2>
  <button @click="x = { y: 8 }">x值改变</button>
</template>

<script>
import { reactive, toRef, toRefs, shallowReactive, shallowRef, ref } from "vue";
export default {
  name: "Demo",
  setup() {
    //数据
    // shallowReactive 只考虑对象第一层的响应式 深层不考虑
    let person = shallowReactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    // shallowRef 如果是一个对象数据，就不是响应式的  替换一个对象会响应式
    let x = shallowRef({
      y: 0,
    });

    //返回一个对象（常用）
    return {
      person,
      ...toRefs(person),
      salary: toRef(person.job.j1, "salary"),
      x,
    };
  },
};
</script>
