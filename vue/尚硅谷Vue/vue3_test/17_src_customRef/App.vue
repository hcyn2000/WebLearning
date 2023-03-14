<template>
  <input type="text" v-model="keyWord" />
  <h3>{{ keyWord }}</h3>
</template>

<script>
import { ref, customRef } from "vue";
export default {
  name: "App",
  setup() {
    // 自定义一个ref 名为 myRef
    function myRef(value) {
      let timer;
      return customRef((track, trigger) => {
        return {
          get() {
            track(); // 通知Vue追踪value的变化(提前和get商量一下，让他认为这个value是有用的)
            return value;
          },
          set(newValue) {
            clearTimeout(timer);
            timer = setTimeout(() => {
              value = newValue;
              trigger(); // 通知Vue去重新解析模板
            }, 500);
          },
        };
      });
    }

    // let keyWord = ref("hello");
    let keyWord = myRef("hello");
    return {
      keyWord,
    };
  },
};
</script>
<style>
body {
  background: #999;
}
</style>
