<template>
  <div>
    {{ input }}
    {{ radioValue }}
    <input type="text" data-test="input" v-model="input" />
    <input type="radio" value="weekly" v-model="radioValue" />
    <input type="radio" value="monthly" v-model="radioValue" />
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const input = ref("");
    const radioValue = ref("");

    return {
      input,
      radioValue,
    };
  },
};
</script>

<style lang="scss" scoped></style>
