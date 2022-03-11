export const mixin = {
  data() {
    return {
      x: 111,
    };
  },
  methods: {
    showName() {
      alert(this.name);
    },
  },
  mounted() {
    console.log("你好！");
  },
};
