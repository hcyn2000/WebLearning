<template>
  <div>
    <h1>人员列表</h1>
    <h3>Count组件的和为：{{ sum }}</h3>
    <input type="text" placeholder="请输入名字" v-model="name" />
    <button @click="add">添加</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
import { mapState, mapMutations } from "vuex";
export default {
  name: "Person",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    ...mapState(["personList", "sum"]),
  },
  methods: {
    ...mapMutations(["ADD_PERSON"]),
    add() {
      let personObj = { id: nanoid(), name: this.name };
      this.name = "";
      this.ADD_PERSON(personObj);
    },
  },
};
</script>

<style></style>
