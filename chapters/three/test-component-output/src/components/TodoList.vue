<template>
  <div data-testid="title" :class="{ disabled: disabled }">{{ title }}</div>
  <img :src="src" alt="" />
  <div data-testid="heihei" :style="{ color: color }">heihei</div>
  <button>click</button>
  <ul>
    <TodoItem v-for="(item, index) in items" :key="index"> </TodoItem>
  </ul>
</template>

<script>
import TodoItem from "./TodoItem";
export default {
  components: {
    TodoItem
  },
  props: {
    title: {
      type: String,
      default: "todolist"
    },
    src: {
      type: String
    },
    disabled: { type: Boolean },
    color: { type: String }
  },
  setup() {
    const items = [1, 2, 3];

    return {
      items
    };
  }
};
</script>

<style scoped></style>
