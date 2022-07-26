<template>
  <div class="row">
    <div class="card" v-for="item in dataObj.userList" :key="item.login">
      <a :href="item.html_url" target="_blank">
        <img :src="item.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{ item.login }}</p>
    </div>
    <h2>{{ dataObj.tips }}</h2>
  </div>
</template>

<script>
export default {
  name: "List",

  data() {
    return {
      dataObj: {
        userList: [],
        tips: "欢迎",
      },
    };
  },
  created() {
    this.$bus.$on("userList", (dataObj) => {
      this.dataObj = dataObj;
    });
  },
};
</script>

<style>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
