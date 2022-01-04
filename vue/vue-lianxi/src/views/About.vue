<template>
  <ul class="flex">
    <ScrollNum
      v-for="(number, idx) of numArr"
      :key="idx"
      :i="number"
      :delay="idx + 1"
      as="li"
      class="num"
    />
  </ul>
</template>

<script>
import ScrollNum from "../components/ScrollNum.vue";

export default {
  name: "About",
  components: { ScrollNum },
  data: () => ({ num: 12345678 }),
  computed: {
    numArr() {
      let arr = [];
      const str = String(this.num);
      for (let index = 0; index < str.length; index++) {
        arr[index] = parseInt(str[index]);
      }
      return arr;
      // return [parseInt(str[0]), parseInt(str[1]), parseInt(str[2])];
    },
  },
};
</script>

<style>
.flex {
  display: flex;
}
ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
.num {
  --width: 26px;
  margin-right: 6px;
  border: 1px solid black;
  border-radius: 8px;
}
</style>
