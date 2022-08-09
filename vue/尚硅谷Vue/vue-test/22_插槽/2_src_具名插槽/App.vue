<template>
  <div class="container">
    <Category title="美食">
      <img slot="content" src="https://uploads.shangji.cn/uploads/37641552.jpg" alt="" />
      <div class="foot" slot="href">
        <a href="">更多美食</a>
      </div>
    </Category>

    <Category title="游戏">
      <ul slot="content">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
      <div class="foot" slot="href">
        <a href="">单机游戏</a>
        <a href="">网络游戏</a>
      </div>
    </Category>

    <Category title="电影">
      <video
        slot="content"
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
        controls
      ></video>
      <!-- v-slot:href 写法只能在 template上使用 -->
      <template v-slot:href>
        <div class="foot">
          <a href="">经典</a>
          <a href="">热门</a>
          <a href="">推荐</a>
        </div>
        <h4>欢迎观看</h4>
      </template>
    </Category>
    <Category title="运动"> </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";
export default {
  name: "App",
  components: { Category },
  data() {
    return {};
  },
};
</script>

<style scoped>
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
img {
  width: 100%;
}
video {
  width: 100%;
}
h4 {
  text-align: center;
}
</style>
