<template>
  <div class="todo-footer" v-show="total">
    <label>
      <input type="checkbox" v-model="isAll" />
    </label>
    <span>
      <span>已完成 {{ dones }} </span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger" @click="deleteDoneTodo">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "TodoFooter",
  props: ["todos"],
  data() {
    return {};
  },
  computed: {
    total() {
      return this.todos.length;
    },
    dones() {
      // return this.todos.filter((item) => item.done).length;
      return this.todos.reduce((pre, item) => pre + (item.done ? 1 : 0), 0);
    },
    isAll: {
      get() {
        return this.dones === this.total && this.total > 0;
      },
      set(value) {
        this.$emit("footerCheckTodo", value);
      },
    },
  },
  methods: {
    deleteDoneTodo() {
      this.$emit("deleteDoneTodo");
    },
  },
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
