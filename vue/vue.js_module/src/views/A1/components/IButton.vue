<template>
  <div>
    <button :class="'i-button--' + size" :disabled="disabled" @click="handleClick">
      <slot name="icon"></slot>
      <slot>按钮</slot>
    </button>
  </div>
</template>
<script>
// 判断参数是否是其中之一
function oneOf(value, validList) {
  return validList.includes(value);
}

export default {
  props: {
    size: {
      validator(value) {
        return oneOf(value, ["small", "large", "default"]);
      },
      default: "default",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick(event) {
      this.$emit("on-click", event);
    },
  },
  created() {
    // console.log(this);
  },
};
</script>
<style scoped>
.i-button--small {
  padding: 9px 15px;
  font-size: 12px;
}
.i-button--default {
  padding: 10px 20px;
  font-size: 14px;
}
.i-button--large {
  padding: 12px 20px;
  font-size: 16px;
}
</style>
