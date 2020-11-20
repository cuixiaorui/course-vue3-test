<template>
  <div>
    <button @click="increment">increment</button>
    Count: {{ count }}
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count;
    }
  },

  methods: {
    increment() {
      return this.$store.commit("increment");
    }
  }
};
</script>

<style></style>
