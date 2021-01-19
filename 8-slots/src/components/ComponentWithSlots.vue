<template>
  <div class="scoped">
    <slot name="scoped" :msg="msg" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "world",
    };
  },
};
</script>
