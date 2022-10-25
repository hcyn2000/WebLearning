<template>
  <div class="type-nav">
    <div class="container">
      <div @mouseenter="enterShow" @mouseleave="leaveShow">
        <h2 class="all">全部商品分类</h2>
        <transition name="sort">
          <div class="sort" v-show="productListShow">
            <div class="all-sort-list2" @click="goSearch">
              <div
                class="item"
                v-for="(c1, index) in categoryList"
                :key="c1.categoryId"
                @mouseenter="changeIndex(index)"
                @mouseleave="leaveIndex"
                :style="{ background: currentIndex == index ? 'skyblue' : '' }"
              >
                <h3>
                  <a :data-categoryName="c1.categoryName" :data-category1Id="c1.categoryId">
                    {{ c1.categoryName }}</a
                  >
                </h3>
                <div
                  class="item-list clearfix"
                  :style="{ display: currentIndex == index ? 'block' : 'none' }"
                >
                  <div class="subitem" v-for="c2 in c1.categoryChild" :key="c2.categoryId">
                    <dl class="fore">
                      <dt>
                        <a :data-categoryName="c2.categoryName" :data-category2Id="c2.categoryId">
                          {{ c2.categoryName }}</a
                        >
                      </dt>
                      <dd>
                        <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                          <a :data-categoryName="c3.categoryName" :data-category3Id="c3.categoryId">
                            {{ c3.categoryName }}</a
                          >
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
import { throttle } from "lodash"
export default {
  // 组件名称
  name: "TypeNav",
  // 组件状态值
  data() {
    return {
      productListShow: true,
      currentIndex: -1,
    }
  },
  computed: {
    ...mapState({
      categoryList: (state) => state.home.categoryList,
    }),
    // ...mapState("home", ["categoryList"]),
  },
  // 组件方法
  methods: {
    // 鼠标进入 商品列表事件  节流方法
    changeIndex: throttle(function (index) {
      this.currentIndex = index
    }, 50),
    // 鼠标离开 商品列表事件
    leaveIndex() {
      this.currentIndex = -1
    },
    // 跳转页面  利用事件委派
    goSearch(event) {
      let element = event.target
      let { categoryname } = element.dataset
      if (categoryname) {
        let loction = { name: "search" }
        let query = { categoryName: categoryname }
        let idObj = {
          category1Id: "category1id",
          category2Id: "category2id",
          category3Id: "category3id",
        }
        for (const key in idObj) {
          if (element.dataset[idObj[key]]) {
            query[key] = element.dataset[idObj[key]]
          }
        }
        loction.query = query
        loction.params = this.$route.params

        // 路由跳转
        this.$router.push(loction)
      }
    },

    // 鼠标进入 全部商品分类 显示商品列表
    enterShow() {
      this.productListShow = true
    },
    // 鼠标离开 全部商品分类 隐藏商品列表
    leaveShow() {
      this.currentIndex = -1
      if (this.$route.path != "/home") {
        this.productListShow = false
      }
    },
  },
  mounted() {
    if (this.$route.path != "/home") {
      this.productListShow = false
    }
  },
  created() {},
}
</script>
<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;
      // overflow: auto;
      .all-sort-list2 {
        overflow: auto;
        height: 100%;
        &::-webkit-scrollbar {
          width: 0;
        }
        a {
          color: #333;
          cursor: pointer;
        }
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }
        }
      }
    }

    // 过度动画的样式
    // 过度动画开始状态 (进入,离开)
    .sort-enter,
    .sort-leave-to {
      height: 20px;
      background: #e1251b;
    }
    // 过度动画结束状态 (进入,离开)
    .sort-enter-to,
    .sort-leave {
      height: 461px;
      background: #fafafa;
    }
    // 定义动画时间、速率 (进入)
    .sort-enter-active,
    .sort-leave-active {
      transition: all 0.2s linear;
    }
    // 定义动画时间、速率 (离开)
    .sort-leave-active {
      transition: all 0.2s linear;
    }
  }
}
</style>
