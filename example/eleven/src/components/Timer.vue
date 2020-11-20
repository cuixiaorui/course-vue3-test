<template>
  <div>
    <div class="progress" :style="{ width: percent + '%' }"></div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Timer",
  // data() {
  //   return {
  //     percent: 0
  //   };
  // }

  // mounted() {
  //   setInterval(() => {
  //     if (this.percent < 100) {
  //       this.percent++;
  //     }
  //   }, 100);
  // }
  setup() {
    const percent = ref(localStorage.getItem("percent") || 0);
    setInterval(() => {
      if (percent.value < 100) {
        percent.value++;
        localStorage.setItem("percent", percent.value);
      }
    }, 100);

    return {
      percent
    };
  }
};
</script>

<style scoped>
.progress {
  width: 5%;
  height: 100px;
  background: pink;
}
</style>
