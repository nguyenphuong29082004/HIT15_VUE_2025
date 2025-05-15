<!-- UserPost.vue -->
<script setup>
  import { useRoute } from "vue-router";

  const route = useRoute();
  const userId = route.params.id;
  const postId = route.params.postId;
</script>

<template>
  <h1>Người dùng: {{ userId }} - Bài viết: {{ postId }}</h1>
</template>