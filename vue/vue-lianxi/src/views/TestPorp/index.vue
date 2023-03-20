<template>
  <div>
    <BlogPost v-bind="post"></BlogPost>
    <CustomInput v-model="modalVisible" /> {{ modalVisible }}
  </div>
</template>

<script>
import BlogPost from "@/views/TestPorp/BlogPost";
import CustomInput from "@/views/TestPorp/CustomInput";
export default {
  // 组件名称
  name: "testPorp",
  components: { BlogPost, CustomInput },
  // 组件状态值
  data() {
    return {
      post: {
        name: "张三",
        age: 18,
      },
      modalVisible: "123",
    };
  },
  // 组件方法
  methods: {},
  created() {},
};
</script>
<style scoped></style>
