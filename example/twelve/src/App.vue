<template>
  <div>
    <counter></counter>
    <counter-options></counter-options>
  </div>
</template>

<script>
import Counter from "./components/Counter.vue";
import CounterOptions from "./components/Counter.options";

export default {
  name: "App",
  components: {
    Counter,
    CounterOptions
  }
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
