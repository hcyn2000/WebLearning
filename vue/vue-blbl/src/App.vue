<template>
  <div id="app">
    <button @click="getJoke">按钮</button>
    <button @click="postJoke">按钮</button>
    <br />
    <button @click="a">按钮</button>
    <button @click="b">按钮</button>
    <button @click="c">按钮</button>
    <button @click="d">按钮</button>
    <br />
    <button @click="wyy">按钮</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      oauthKey: "",
    };
  },
  components: {},
  methods: {
    getJoke() {
      this.axios
        .get("api/qrcode/getLoginUrl", {
          params: {},
        })
        .then((res) => {
          console.log(res);
          console.log(res.data.data.oauthKey);
          this.oauthKey = res.data.data.oauthKey;
        });
    },
    postJoke() {
      this.axios
        .post(
          "api/qrcode/getLoginInfo",
          {
            oauthKey: this.oauthKey,
          },
          {
            headers: {
              withCredentials: true,
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        )
        .then((res) => {
          console.log(res);
        });

      // this.$axios({
      //   method: "post",
      //   url: "/api/qrcode/getLoginInfo",
      //   data: {
      //     oauthKey: this.oauthKey,
      //   },
      //   headers: {
      //     withCredentials: true,
      //     "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      //   },
      //   transformRequest: [(data) => self.$qs.stringify(data)],
      // }).then((res) => {
      //   console.log(res);
      // });
    },

    a() {
      this.axios
        .get("api/web/captcha/combine?plat=6", {
          params: {},
        })
        .then((res) => {
          console.log(res);
        });
    },
    b() {
      this.axios
        .get("api/web/generic/country/list", {
          params: {},
        })
        .then((res) => {
          console.log(res);
        });
    },
    c() {
      this.axios
        .post("api/web/sms/general/v2/send", {
          tel: 15798002275,
          cid: 1,
          type: 21,
          captchaType: 6,
          key: "2b1031df6d2b47eca276cf261aeff5fd",
          challenge: "4a4fd5577ef07d6087752fd906333867",
          validate: "9ceb86a3923f80850198edf9d03358d3",
          seccode: "9ceb86a3923f80850198edf9d03358d3|jordan",
        })
        .then((res) => {
          console.log(res);
        });
    },
    d() {
      this.axios
        .post(
          "api/web/login/rapid",
          {
            cid: 1,
            tel: 15798002275,
            // smsCode:
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        )
        .then((res) => {
          console.log(res);
        });
    },

    wyy() {
      this.axios.get("api/banner").then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
