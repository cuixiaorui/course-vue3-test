<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="toHome">to home</button>
  </div>
</template>
<script>
export default {
  methods: {
    toHome() {
      this.$router.push({ name: "Home" });
    }
  }
};
</script>
