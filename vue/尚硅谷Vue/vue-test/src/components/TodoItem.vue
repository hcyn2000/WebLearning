<template>
  <li>
    <label v-show="!isEdit">
      <input type="checkbox" :checked="item.done" @change="checkItemTodo(item.id)" />
      <span> {{ item.title }} </span>
    </label>
    <label v-show="isEdit">
      <input type="text" ref="inputTitle" :value="item.title" @blur="handleBlur(item, $event)" />
    </label>
    <div class="item-left">
      <button v-show="!isEdit" class="btn btn-edit" @click="handleEdit">编辑</button>
      <button class="btn btn-danger" @click="deleteItemTodo(item.id)">删除</button>
    </div>
  </li>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["item"],
  data() {
    return {
      isEdit: false,
    };
  },
  methods: {
    checkItemTodo(id) {
      this.$bus.$emit("checkItemTodo", id);
    },
    deleteItemTodo(id) {
      this.$bus.$emit("deleteItemTodo", id);
    },
    handleEdit() {
      this.isEdit = true;
      this.$nextTick(() => {
        this.$refs.inputTitle.focus();
      });
    },
    handleBlur(todo, e) {
      this.isEdit = false;
      if (!e.target.value.trim()) return alert("输入不能为空");
      this.$bus.$emit("updateTodo", todo.id, e.target.value);
    },
  },
};
</script>

<style lang="less" scoped>
/*item*/
li {
  display: flex;
  justify-content: space-between;
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}
.item-left {
  display: flex;
}

li button {
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover {
  background: #ddd;
  .btn {
    display: block;
  }
}
</style>
