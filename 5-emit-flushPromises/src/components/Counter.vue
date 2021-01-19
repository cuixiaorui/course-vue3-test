<template>
  <div>
    {{ count }}
    {{ toParent }}
    <button @click="handleClick">Increment</button>
    <Child @to-parent="handleToParent"></Child>
  </div>
</template>
<script>
import Child from "./Child";
export default {
  components: {
    Child
  },
  data() {
    return {
      count: 0,
      toParent: "false"
    };
  },
  methods: {
    handleToParent() {
      // 属于 counter 这个组件的 input
      this.toParent = "true";
    },
    handleClick(e) {
      this.count += 1;
      // v1
      // this.$emit("increment");

      // v2
      // this.$emit("increment", this.count);

      // v3
      // this.$emit("increment", {
      //   count: this.count,
      //   isEven: this.count % 2 === 0
      // });

      // v4
      // trigger 传过来 e
      if (e.code === 1) {
        this.$emit("increment", e.code);
      }
    }
  }
};
</script>
