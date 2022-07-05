<template>
  <li>
    <label>
      <input type="checkbox" :checked="item.done" @change="checkItemTodo(item.id)" />
      <span> {{ item.title }} </span>
    </label>
    <button class="btn btn-danger" @click="deleteItemTodo(item.id)">删除</button>
  </li>
</template>

<script>
import pubsub from "pubsub-js";

export default {
  name: "TodoItem",
  props: ["item"],
  methods: {
    checkItemTodo(id) {
      // this.$bus.$emit("checkItemTodo", id);
      pubsub.publish("checkItemTodo", id);
    },
    deleteItemTodo(id) {
      // this.$bus.$emit("deleteItemTodo", id);
      pubsub.publish("deleteItemTodo", id);
    },
  },
};
</script>

<style lang="less" scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
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
