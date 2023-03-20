// vue2官网 自定义组件 v-model
<template>
  <input :value="modelValue" @input="inputEvent" />
</template>

<script>
export default {
  model: {
    prop: "value",
    event: "input",
  },
  props: ["modelValue"],
  methods: {
    inputEvent(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>
