<template>
  <div class="fr page">
    <div class="sui-pagination clearfix">
      <span style="margin-right: 10px">共{{ total }}条&nbsp;</span>
      <ul>
        <li class="prev" :class="{ disabled: currentPage == 1 }">
          <a @click="checkPage('up')">«上一页</a>
        </li>
        <!-- 第一页 -->
        <li
          v-show="this.totalPages >= this.pagerCount + 2"
          :class="{ active: currentPage == 1 }"
          @click="checkPageNoItem(1)"
        >
          <a>1</a>
        </li>
        <!-- 前面省略号 -->
        <li class="dotted" v-show="this.numberList[0] > 2 && this.totalPages > this.pagerCount + 2">
          <span>...</span>
        </li>
        <!-- 中间部分 -->
        <li
          :class="{ active: currentPage == item }"
          v-for="item in numberList"
          :key="item"
          @click="checkPageNoItem(item)"
        >
          <a>{{ item }}</a>
        </li>
        <!-- 后面省略号 -->
        <li
          class="dotted"
          v-show="
            this.numberList[this.numberList.length - 1] < totalPages - 1 &&
            this.totalPages > this.pagerCount + 2
          "
        >
          <span>...</span>
        </li>
        <!-- 最后一页 -->
        <li
          v-show="this.totalPages >= this.pagerCount + 2"
          :class="{ active: currentPage == totalPages }"
          @click="checkPageNoItem(totalPages)"
        >
          <a>{{ totalPages }}</a>
        </li>
        <li class="next" :class="{ disabled: currentPage == totalPages }">
          <a @click="checkPage('low')">下一页»</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  // 组件名称
  name: "Pageination",
  props: {
    "page-size": {
      type: Number,
      default: 10,
    },
    "current-page": {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 1,
    },
    // 中间页数
    pagerCount: {
      type: Number,
      default: 5,
    },
  },
  // 组件状态值
  data() {
    return {
      checkPageNoIndex: 1,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.total / this.pageSize);
    },
    numberList() {
      let list = [];
      let start = 0,
        end = 0;
      // 总条数小于中间页数加前后两位页数
      if (this.totalPages < this.pagerCount + 2) {
        start = 1;
        end = this.totalPages;
      } else {
        start = this.checkPageNoIndex - parseInt(this.pagerCount / 2);
        end = this.checkPageNoIndex + parseInt(this.pagerCount / 2);
        console.log(start, end);
        // 当前页小于或等于中间页数加1除于2加1  5-4 7-5
        if (this.checkPageNoIndex <= (this.pagerCount + 1) / 2 + 1) {
          start = 2;
          end = this.pagerCount + 1;
        }
        // 当前页大于或等于最后一页减中间页数除于2加1
        else if (this.checkPageNoIndex >= this.totalPages - (parseInt(this.pagerCount / 2) + 1)) {
          start = this.totalPages - this.pagerCount;
          end = this.totalPages - 1;
        }
      }

      for (let index = start; index <= end; index++) {
        list.push(index);
      }
      return list;
    },
  },
  // 组件方法
  methods: {
    // 分页器
    checkPageNoItem(item) {
      if (this.checkPageNoIndex == item) return;
      this.checkPageNoIndex = item;
      this.$emit("sizeChange", this.checkPageNoIndex);
    },
    // 上一页下一页
    checkPage(page) {
      switch (page) {
        case "up":
          if (this.checkPageNoIndex <= 1) return;
          this.checkPageNoIndex--;
          break;
        case "low":
          if (this.checkPageNoIndex >= this.totalPages) return;
          this.checkPageNoIndex++;
          break;
      }
      this.$emit("pageChange", this.checkPageNoIndex);
    },
  },
  created() {},
};
</script>
<style lang="less" scoped>
.page {
  height: 66px;
  overflow: hidden;

  .sui-pagination {
    margin: 18px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    ul {
      margin-left: 0;
      margin-bottom: 0;
      vertical-align: middle;

      li {
        line-height: 18px;
        display: inline-block;

        a {
          position: relative;
          float: left;
          line-height: 18px;
          text-decoration: none;
          background-color: #fff;
          border: 1px solid #e0e9ee;
          margin-left: -1px;
          font-size: 14px;
          padding: 9px 18px;
          color: #333;
          cursor: pointer;
        }

        &.active {
          a {
            background-color: skyblue;
            color: #fff;
            border-color: skyblue;
            cursor: default;
          }
        }

        &.prev {
          a {
            background-color: #fafafa;
          }
        }

        &.disabled {
          a {
            color: #999;
            cursor: default;
          }
        }

        &.dotted {
          span {
            position: relative;
            float: left;
            line-height: 18px;
            text-decoration: none;
            background-color: #fff;
            font-size: 14px;
            border: 0;
            padding: 9px 18px;
            color: #333;
          }
        }

        &.next {
          a {
            background-color: #fafafa;
          }
        }
      }
    }

    div {
      margin-left: 20px;
      color: #333;
      font-size: 14px;
    }
  }
}
</style>
