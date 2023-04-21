<template>
  <view class="uni-tab-bar">
    <navigator url="/pages/home/index" class="return-box flex-center">
      <view class="iconfont icon-fanhui"></view>
    </navigator>

    <scroll-view class="uni-swiper-tab" scroll-x>
      <view class="swiper-tab-list">
        <view
          class="swiper-tab-item"
          :class="{ active: tabIndex == index }"
          v-for="(tab, index) in tabBars"
          :key="tab.id"
          @tap="tabtap(index)"
        >
          {{ tab.name }} {{ tab.num ? tab.num : "" }}
          <view class="swiper-tab-line"></view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script setup>
const emit = defineEmits(["tabtap"]);
defineProps({
  tabBars: Array,
  tabIndex: Number,
  scrollStyle: {
    type: String,
    default: "",
  },
  scrollItemStyle: {
    type: String,
    default: "",
  },
});
//点击切换导航
function tabtap(index) {
  // this.tabIndex = index;
  emit("tabtap", index);
}
</script>
　

<style scoped lang="scss">
.uni-tab-bar {
  position: relative;
  display: flex;
  align-items: center;
  .return-box {
    position: absolute;
    top: 0;
    z-index: 10;
    width: 110rpx;
    height: 100%;
    .icon-fanhui {
      font-size: 36rpx;
    }
  }
  .uni-swiper-tab {
    height: 100rpx;
    background: #f0f1f3;
  }
  .active {
    color: #000000;
  }
}

.swiper-tab-list {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100rpx;
}
.swiper-tab-item {
  position: relative;
  margin: 0 30rpx;
  text-align: center;
  color: #6f7072;
}
.active .swiper-tab-line {
  position: absolute;
  margin-top: 18rpx;
  width: 100%;
  height: 7rpx;
  background-color: #000000;
  border-radius: 30rpx;
}
</style>
