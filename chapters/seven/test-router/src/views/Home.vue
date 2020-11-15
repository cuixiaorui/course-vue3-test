<template>
  <div class="home">
    <button @click="toAbout">to about</button>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "Home",
  components: {},

  setup() {
    const router = useRouter();
    const toAbout = () => {
      router.push({ name: "About" });
    };

    return {
      toAbout
    };
  }
};
</script>
