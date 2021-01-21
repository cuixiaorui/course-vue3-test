<template>
  <button @click="redirect">Click to Edit</button>
</template>
<script>
export default {
  props: ["authenticated"],
  methods: {
    redirect() {
      if (this.authenticated) {
        this.$router.push(`/posts/${this.$route.params.id}/edit`);
      } else {
        this.$router.push("/404");
      }
    }
  }
};
</script>
