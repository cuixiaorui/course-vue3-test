<template>
  <div>
    <div v-if="!showB">A</div>
    <div v-else>B</div>
  </div>
</template>

<script>
export default {
  props: ["showB"]
};
</script>

<style></style>
