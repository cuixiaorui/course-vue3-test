<template>
  <div>
    <button @click="increment" />
    Count: {{ count }}
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  setup() {
    const store = useStore();

    const count = computed(() => store.state.count);

    const increment = () => {
      store.commit("increment");
    };

    return {
      increment,
      count
    };
  }
};
</script>

<style></style>
