const Clock = {
  data() {
    return {
      s1: 0,
      showNumber: {
        0: [undefined, 1, 1, 1, 1, 1, 1, 0],
        1: [undefined, 0, 0, 1, 1, 0, 0, 0],
        2: [undefined, 0, 1, 1, 0, 1, 1, 1],
        3: [undefined, 0, 1, 1, 1, 1, 0, 1],
        4: [undefined, 1, 0, 1, 1, 0, 0, 1],
        5: [undefined, 1, 1, 0, 1, 1, 0, 1],
        6: [undefined, 1, 1, 0, 1, 1, 1, 1],
        7: [undefined, 0, 1, 1, 1, 0, 0, 0],
        8: [undefined, 1, 1, 1, 1, 1, 1, 1],
        9: [undefined, 1, 1, 1, 1, 1, 0, 1],
      },
      currentTime: '00:00',
    };
  },
  created() {
    this.getTime();
    setInterval(() => {
      this.getTime();
    }, 1000);
  },
  methods: {
    getShowStyle(key) {
      return this.showNumber[this.currentTime.charAt(key) || 0];
    },
    getTime() {
      const time = new Date();
      const hh = time.getHours().toString().padStart(2, '0');
      const mm = time.getMinutes().toString().padStart(2, '0');
      const ss = time.getSeconds().toString().padStart(2, '0');
      this.currentTime = hh + mm + ss;
      console.log('currentTime :>> ', this.currentTime);
    },
  },
};
const app = Vue.createApp(Clock);

app.component('num-item', {
  props: ['curnum'],
  template: `<div class="clock-num">
  <div class="one-side top-left" :class="{'hide-x': curnum[1] == 0}"></div>
  <div class="one-side top" :class="{'hide-y': curnum[2] == 0}"></div>
  <div class="one-side top-right" :class="{'hide-x': curnum[3] == 0}"></div>
  <div class="one-side bottom-right" :class="{'hide-x': curnum[4] == 0}"></div>
  <div class="one-side bottom" :class="{'hide-y': curnum[5] == 0}"></div>
  <div class="one-side bottom-left" :class="{'hide-x': curnum[6] == 0}"></div>
  <div class="one-side middle" :class="{'hide-y': curnum[7] == 0}"></div>
</div>`,
});

app.mount('#clock');
