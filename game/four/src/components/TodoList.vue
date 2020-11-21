<template>
  <div>
    <div
      v-for="todo in todos"
      :key="todo.id"
      :class="[todo.completed ? 'completed' : '']"
    >
      {{ todo.text }}
      <input type="checkbox" v-model="todo.completed" />
    </div>

    <form @submit.prevent="createTodo">
      <input v-model="newTodo" />
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
