<template>
  <div>
    <button @click="handleClick">click</button>
  </div>
</template>

<script>
export default {
  props: ["onClose"],
  setup(props, { emit }) {
    const handleClick = () => {
      props.onClose && props.onClose();
      emit("add",1);
    };
    return {
        handleClick
    }
  },
};
</script>

<style></style>
