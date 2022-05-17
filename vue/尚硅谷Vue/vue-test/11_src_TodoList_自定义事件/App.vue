<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <todo-header @addTodo="addTodo"></todo-header>
        <todo-list
          :todos="todos"
          :checkItemTodo="checkItemTodo"
          :deleteItemTodo="deleteItemTodo"
        ></todo-list>
        <todo-footer
          :todos="todos"
          @footerCheckTodo="footerCheckTodo"
          @deleteDoneTodo="deleteDoneTodo"
        ></todo-footer>
      </div>
    </div>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";
export default {
  name: "App",
  components: { TodoHeader, TodoList, TodoFooter },

  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },
  watch: {
    todos: {
      handler(newVal) {
        localStorage.setItem("todos", JSON.stringify(newVal));
      },
      deep: true,
    },
  },
  methods: {
    // 添加一个todo
    addTodo(t) {
      this.todos.unshift(t);
    },

    // 勾选todo
    checkItemTodo(id) {
      this.todos.forEach((item) => {
        if (item.id == id) item.done = !item.done;
      });
    },

    // 删除todo
    deleteItemTodo(id) {
      this.todos = this.todos.filter((item) => item.id !== id);
    },

    // 底部勾选
    footerCheckTodo(done) {
      this.todos.forEach((item) => {
        item.done = done;
      });
    },

    deleteDoneTodo() {
      this.todos = this.todos.filter((item) => !item.done);
    },
  },
};
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 300px auto 0;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
