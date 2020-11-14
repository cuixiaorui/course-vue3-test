<template>
  <div>
    <button @click="getPosts">Get posts</button>

    <ul>
      <li v-for="post in posts" :key="post.id" data-test="post">
        {{ post.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      posts: null,
    };
  },
  methods: {
    async getPosts() {
      this.posts = await axios.get("/api/posts");
    },
  },
};
</script>
