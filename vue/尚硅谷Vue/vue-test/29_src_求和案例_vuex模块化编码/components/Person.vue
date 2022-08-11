<template>
  <div>
    <h1>人员列表</h1>
    <h3>Count组件的和为：{{ sum }}</h3>
    <h3>人员列表第一个名字为：{{ firstName }}</h3>
    <input type="text" placeholder="请输入名字" v-model.trim="name" />
    <button @click="add">添加</button>
    <button @click="addWu">添加一个姓吴的人</button>
    <button @click="addServer">添加一段话</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "Person",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    personList() {
      return this.$store.state.personOptions.personList;
    },
    sum() {
      return this.$store.state.countOptions.sum;
    },
    firstName() {
      return this.$store.getters["personOptions/firstPersonName"];
    },
  },
  methods: {
    add() {
      if (!this.name) return;
      let personObj = { id: nanoid(), name: this.name };
      this.$store.commit("personOptions/ADD_PERSON", personObj);
      this.name = "";
    },
    addWu() {
      if (!this.name) return;
      let personObj = { id: nanoid(), name: this.name };
      this.$store.dispatch("personOptions/addPersonWu", personObj);
      this.name = "";
    },
    addServer() {
      this.$store.dispatch("personOptions/addPersonServer");
    },
  },
};
</script>

<style></style>
