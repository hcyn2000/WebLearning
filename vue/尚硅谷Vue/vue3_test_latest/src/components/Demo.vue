<template>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <button @click="person.name += '~'">修改姓名</button>
  <button @click="person.age++">增长年龄</button>
</template>

<script>
import { ref, reactive, watch } from "vue";
export default {
  setup() {
    // 数据
    let person = reactive({
      name: "张三",
      age: 18,
    });

    /* 
    情况三：监视reactive所定义的一个响应式数据的全部属性
				1.注意：此处无法正确的获取oldValue
				2.注意：强制开启了深度监视（deep配置无效）
			*/
    watch(
      person,
      (newValue, oldValue) => {
        console.log("person变化了", newValue, oldValue);
      },
      { deep: true }
    ); //此处的deep配置无效

    return {
      person,
    };
  },
};
</script>

<style></style>
