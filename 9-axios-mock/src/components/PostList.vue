<template>
  <div>
    <button :disabled="loading" @click="getPosts">Get posts</button>

    <p v-if="loading" role="alert">Loading your posts…</p>
    <ul v-else>
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
      loading: false,
    };
  },
  methods: {
    async getPosts() {
      this.loading = true;

      this.posts = await axios.get("/api/posts");

      this.loading = false;
    },
  },
};
</script>
