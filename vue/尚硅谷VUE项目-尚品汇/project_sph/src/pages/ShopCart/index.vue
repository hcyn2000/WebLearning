<template>
  <div class="cart">
    <h4>全部商品</h4>
    <div class="cart-main">
      <div class="cart-th">
        <div class="cart-th1">全部</div>
        <div class="cart-th2">商品</div>
        <div class="cart-th3">单价（元）</div>
        <div class="cart-th4">数量</div>
        <div class="cart-th5">小计（元）</div>
        <div class="cart-th6">操作</div>
      </div>
      <div class="cart-body">
        <ul class="cart-list" v-for="item in cartInfoList" :key="item.id">
          <li class="cart-list-con1">
            <input
              type="checkbox"
              name="chk_list"
              :checked="item.isChecked"
              @input="updateCheckCart(item)"
            />
          </li>
          <li class="cart-list-con2">
            <img :src="item.imgUrl" />
            <div class="item-msg">
              {{ item.skuName }}
            </div>
          </li>

          <li class="cart-list-con4">
            <span class="price">{{ item.skuPrice }}.00</span>
          </li>
          <li class="cart-list-con5">
            <a href="javascript:void(0)" class="mins" @click="handler('minus', -1, item)">-</a>
            <input
              autocomplete="off"
              type="text"
              :value="item.skuNum"
              minnum="1"
              class="itxt"
              @change="handler('change', $event.target.value * 1, item)"
            />
            <a href="javascript:void(0)" class="plus" @click="handler('add', 1, item)">+</a>
          </li>
          <li class="cart-list-con6">
            <span class="sum">{{ item.skuPrice * item.skuNum }}.00</span>
          </li>
          <li class="cart-list-con7">
            <a href="javascript:" class="sindelet" @click="deleteCart(item.skuId)">删除</a>
            <br />
            <a href="javascript:">移到收藏</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="cart-tool">
      <div class="select-all" @click="isAllClick">
        <input class="chooseAll" type="checkbox" :checked="isAllCheck" />
        <span>全选</span>
      </div>
      <div class="option">
        <a href="javascript:" @click="deleteAllCheckedCart">删除选中的商品</a>
        <a href="javascript:">移到我的关注</a>
        <a href="javascript:">清除下柜商品</a>
      </div>
      <div class="money-box">
        <div class="chosed">已选择 <span>0</span>件商品</div>
        <div class="sumprice">
          <em>总价（不含运费） ：</em>
          <i class="summoney">{{ totalPrice }}</i>
        </div>
        <div class="sumbtn">
          <a class="sum-btn" href="###" target="_blank">结算</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { throttle } from "lodash";
export default {
  name: "ShopCart",
  computed: {
    ...mapGetters("shopCart", ["cartInfoList"]),
    // 总价
    totalPrice() {
      let total = 0;
      this.cartInfoList.forEach((item) => {
        total += item.skuPrice * item.skuNum;
      });
      return total;
    },
    // 是否全选
    isAllCheck() {
      if (!this.cartInfoList.length) return false;
      return this.cartInfoList.every((item) => item.isChecked == 1);
    },
  },
  methods: {
    // 获取购物车列表
    getData() {
      this.$store.dispatch("shopCart/getCartList");
    },
    // 点击是否全选
    isAllClick() {
      this.cartInfoList.forEach((item) => {
        item.isChecked = item.isChecked ? 0 : 1;
      });
    },
    // 点击数量按钮 修改某一个产品的数量  用了节流方法
    handler: throttle(async function (type, disNum, item) {
      switch (type) {
        case "add":
          disNum = 1;
          break;
        case "minus":
          disNum = item.skuNum > 1 ? -1 : 0;
          break;
        case "change":
          disNum = isNaN(disNum) || disNum < 1 ? 0 : parseInt(disNum) - item.skuNum;
          break;
      }
      if (disNum == 0) return;
      await this.$store.dispatch("detail/getAddToCart", {
        skuId: item.skuId,
        skuNum: disNum,
      });
      this.getData();
    }, 1000),
    // 点击删除按钮
    async deleteCart(skuId) {
      if (!confirm("确定要删除该商品吗？")) return;
      await this.$store.dispatch("shopCart/getDeleteCart", skuId);
      this.getData();
    },
    // 切换购物车商品选中状态
    updateCheckCart(item) {
      item.isChecked = item.isChecked ? 0 : 1;
      this.$store.dispatch("shopCart/getCheckCart", {
        skuID: item.skuId,
        isChecked: item.isChecked,
      });
    },
    // 删除选中的商品
    async deleteAllCheckedCart() {
      if (!confirm("确定要删除选中商品吗？")) return;
      await this.$store.dispatch("shopCart/deleteAllCheckedCart");
      this.getData();
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style lang="less" scoped>
.cart {
  width: 1200px;
  margin: 0 auto;

  h4 {
    margin: 9px 0;
    font-size: 14px;
    line-height: 21px;
  }

  .cart-main {
    .cart-th {
      background: #f5f5f5;
      border: 1px solid #ddd;
      padding: 10px;
      overflow: hidden;

      & > div {
        float: left;
      }

      .cart-th1 {
        width: 10%;

        input {
          vertical-align: middle;
        }

        span {
          vertical-align: middle;
        }
      }

      .cart-th2 {
        width: 40%;
        text-align: center;
      }

      .cart-th3,
      .cart-th4,
      .cart-th5,
      .cart-th6 {
        width: 12.5%;
      }
    }

    .cart-body {
      margin: 15px 0;
      border: 1px solid #ddd;

      .cart-list {
        padding: 10px;
        border-bottom: 1px solid #ddd;
        overflow: hidden;
        display: flex;
        align-items: center;

        & > li {
          float: left;
        }

        .cart-list-con1 {
          width: 10%;
        }

        .cart-list-con2 {
          width: 40%;

          img {
            width: 82px;
            height: 82px;
            float: left;
          }

          .item-msg {
            float: left;
            width: 150px;
            margin: 0 10px;
            line-height: 18px;
          }
        }

        // .cart-list-con3 {
        //   width: 20.8333%;

        //   .item-txt {
        //     text-align: center;
        //   }
        // }

        .cart-list-con4 {
          width: 12.5%;
        }

        .cart-list-con5 {
          width: 12.5%;

          .mins {
            border: 1px solid #ddd;
            border-right: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }

          input {
            border: 1px solid #ddd;
            width: 40px;
            height: 33px;
            float: left;
            text-align: center;
            font-size: 14px;
          }

          .plus {
            border: 1px solid #ddd;
            border-left: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }
        }

        .cart-list-con6 {
          width: 12.5%;

          .sum {
            font-size: 16px;
          }
        }

        .cart-list-con7 {
          width: 12.5%;

          a {
            color: #666;
          }
        }
      }
    }
  }

  .cart-tool {
    overflow: hidden;
    border: 1px solid #ddd;

    .select-all {
      padding: 10px;
      overflow: hidden;
      float: left;

      span {
        vertical-align: middle;
      }

      input {
        vertical-align: middle;
      }
    }

    .option {
      padding: 10px;
      overflow: hidden;
      float: left;

      a {
        float: left;
        padding: 0 10px;
        color: #666;
      }
    }

    .money-box {
      float: right;

      .chosed {
        line-height: 26px;
        float: left;
        padding: 0 10px;
      }

      .sumprice {
        width: 200px;
        line-height: 22px;
        float: left;
        padding: 0 10px;

        .summoney {
          color: #c81623;
          font-size: 16px;
        }
      }

      .sumbtn {
        float: right;

        a {
          display: block;
          position: relative;
          width: 96px;
          height: 52px;
          line-height: 52px;
          color: #fff;
          text-align: center;
          font-size: 18px;
          font-family: "Microsoft YaHei";
          background: #e1251b;
          overflow: hidden;
        }
      }
    }
  }
}
</style>
