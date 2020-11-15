<template>
  <div>
    <div>
      {{ date }}
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    // const date = Date.now();
    const date = new Date().getTime();
    return {
      date
    };
  }
};
</script>

<style></style>
