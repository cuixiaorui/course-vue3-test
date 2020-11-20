<template>
  <form>
    {{ radio }}
    <el-radio v-model="radio" ref="radio" label="true">radio</el-radio>
    <button @click.prevent="handleClick">Send</button>
  </form>
</template>

<script>
export default {
  name: "CustomRadio",
  data() {
    return {
      radio: "false"
    };
  },
  methods: {
    handleClick() {
      this.$emit("submit", this.radio);
    }
  }
};
</script>
