<template>
  <div>
    <div
      v-for="todo in todos"
      :key="todo.id"
      data-test="todo"
      :class="[todo.completed ? 'completed' : '']"
    >
      {{ todo.text }}
      <input data-test="checkbox" type="checkbox" v-model="todo.completed" />
    </div>

    <form data-test="form" @submit.prevent="createTodo">
      <input data-test="newTodo" v-model="newTodo" />
    </form>
  </div>
</template>

<script>
export default {
  name: "TodoApp",

  data() {
    return {
      newTodo: "",
      todos: [
        {
          id: 1,
          text: "Learn Vue.js 3",
          completed: false,
        },
      ],
    };
  },

  methods: {
    createTodo() {
      this.todos.push({
        id: 2,
        text: this.newTodo,
        completed: false,
      });
    },
  },
};
</script>
