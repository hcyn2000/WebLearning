<template>
  <h1>一个人的信息</h1>
  <h2>姓：<input type="text" v-model="person.firstName" /></h2>
  <h2>名：<input type="text" v-model="person.lastName" /></h2>
  <h2>{{ person.fullName }}</h2>
  <h2>姓名：<input type="text" v-model="person.fullName" /></h2>
</template>

<script>
import { reactive, computed } from "vue";
export default {
  name: "Demo",
  setup(props, context) {
    // 数据
    let person = reactive({
      firstName: "张",
      lastName: "三",
    });

    // 计算属性——简写
    person.fullName = computed(() => {
      return person.firstName + "-" + person.lastName;
    });

    // 计算属性——完整
    person.fullName = computed({
      get() {
        return person.firstName + "-" + person.lastName;
      },
      set(value) {
        const nameArr = value.split("-");
        person.firstName = nameArr[0];
        person.lastName = nameArr[1];
      },
    });

    // 返回一个对象（常用）
    return {
      person,
    };
  },
};
</script>
