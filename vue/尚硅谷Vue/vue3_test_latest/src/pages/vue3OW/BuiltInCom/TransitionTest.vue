<template>
  <button @click="show1 = !show1">Toggle</button>
  <Transition>
    <p v-if="show1">hello</p>
  </Transition>

  <button @click="show2 = !show2">Toggle Slide + Fade</button>
  <Transition name="slide-fade">
    <p v-if="show2">hello</p>
  </Transition>

  <button @click="show3 = !show3">animation</button>
  <Transition name="bounce">
    <p class="animationP" v-if="show3">Hello here is some bouncy text!</p>
  </Transition>
</template>

<script setup>
import { ref } from "vue";

let show1 = ref(true);
let show2 = ref(true);
let show3 = ref(true);
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s linear;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}

/* br */

/*
  进入和离开动画可以使用不同
  持续时间和速度曲线。
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

/* br */

.animationP {
  position: absolute;
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
