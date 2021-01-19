<template>
  <div>
    <input v-model="password" type='input'/>
    <div v-if="error">{{ error }}</div>
  </div>
</template>
<script>
export default {
  props: {
    minLength: {
      type: Number,
    },
  },
  data() {
    return {
      password: "",
    };
  },
  computed: {
    error() {
      if (this.password.length < this.minLength) {
        return `Password must be at least ${this.minLength} characters.`;
      }
      return;
    },
  },
};
</script>
