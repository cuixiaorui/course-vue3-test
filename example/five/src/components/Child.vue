<template>
  <div>
    child
    <button @click="handleClick">click</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleToParent() {
      this.$emit("to-parent");
    }
  }
};
</script>

<style></style>
