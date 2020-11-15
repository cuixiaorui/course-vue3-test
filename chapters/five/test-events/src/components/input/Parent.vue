<template>
  <div>
    <Child @close="onClose"></Child>
  </div>
</template>

<script>
import Child from "./Child";
export default {
  components: {
    Child,
  },
  setup() {
    function onClose() {
      // to do something
      console.log("close");
    }

    return {
        onClose
    }
  },
};
</script>

<style lang="scss" scoped></style>
