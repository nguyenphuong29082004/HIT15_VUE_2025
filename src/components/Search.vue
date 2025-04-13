<script setup>
import { ref, reactive, computed } from "vue";

const author = reactive({
  name: "John Doe",
  books: [
    "Vue 2 - Advanced Guide",
    "Vue 3 - Basic Guide",
    "Vue 4 - The Mystery",
    "Vue 4 - The Mystery",
  ],
});

// a computed ref
const publishedBooksMessage = computed(() => {
  if (author.name == "John Doe") return "Dung r";
  else {
    return author.books.length > 3 ? "Yes" : "No";
  }
});

const check = () => {
  if (publishedBooksMessage.value == "Yes") {
    alert("Day la yes");
  } else {
    alert("Day la No");
  }
};

const isRed = ref(false);
</script>

<template>
  <p>Has published books:</p>
  <span>{{ publishedBooksMessage }}</span>
  <input type="text" name="" id="" v-model="author.name" />
  <button @click="check">Nhap ten</button>
  <p :class="{ 'text-red': isRed }">Day la the p</p>
  <p :class="isRed ? 'text-red' : 'text-blue'"></p>
  <button @click="isRed = !isRed">Doi mau</button>
</template>

<style scoped>
.text-red {
  color: red;
  font-size: 32px;
}
</style>
