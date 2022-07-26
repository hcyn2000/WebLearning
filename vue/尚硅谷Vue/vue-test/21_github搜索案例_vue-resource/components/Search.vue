<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="name" />&nbsp;<button
        @click="search"
      >
        Search
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    search() {
      this.$bus.$emit("userList", { tips: "loading...", userList: [] });
      this.$http
        .get(`https://api.github.com/search/users?q=${this.name}`)
        .then((result) => {
          console.log(result.data.items);
          this.$bus.$emit("userList", { tips: "", userList: result.data.items });
        })
        .catch((err) => {
          console.log(err.message);
          this.$bus.$emit("userList", { tips: err.message, userList: [] });
        });
    },
  },
};
</script>

<style></style>
