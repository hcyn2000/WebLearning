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
</template>

<script>
import { reactive, toRef, toRefs, ref, readonly, shallowReadonly } from "vue";
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

    // person = readonly(person); // readonly  让一个响应式数据变为只读的（深只读）
    person = shallowReadonly(person); // shallowReadonly 让一个响应式数据变为只读的（浅只读）

    sum = readonly(sum);
    // sum = shallowReadonly(sum);

    //返回一个对象（常用）
    return {
      person,
      ...toRefs(person),
      salary: toRef(person.job.j1, "salary"),
      sum,
    };
  },
};
</script>
