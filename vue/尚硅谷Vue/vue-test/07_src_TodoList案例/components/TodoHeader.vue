<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入你的任务名称，按回车键确认"
      v-model="value"
      @keyup.enter="obtainValue"
    />
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "TodoHeader",
  data() {
    return {
      value: "",
    };
  },
  methods: {
    obtainValue() {
      if (!this.value.trim()) return;
      const todoObj = {
        id: nanoid(),
        title: this.value,
        done: false,
      };
      this.$emit("addTodo", todoObj);
      this.value = "";
    },
  },
};
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
