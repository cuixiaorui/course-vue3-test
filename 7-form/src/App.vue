<template>
  <div>
    <CustomRadio></CustomRadio>
  </div>
</template>

<script>
import CustomRadio from "./components/CustomRadio";
export default {
  name: "App",
  components: {
    CustomRadio,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
