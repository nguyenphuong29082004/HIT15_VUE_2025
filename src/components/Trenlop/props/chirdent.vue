<script setup>
import { ref } from "vue";
import child from "./child.vue";
// import Test from './components/Test.vue';

// Truyen dong
const count = ref(0);
const name = "P";
const male = true;

// truyen nhanh theo obj
const obj = {
  name: "P",
  age: 21,
  list: [1, 5, 8, 8],
  male: true,
  student: Object,
};
</script>

<template>
  <!-- <Bai3/> -->
  <!-- Truyen tinh -->
  <p>Truyen tinh</p>
  <child name="P" age="18" male="true" />
  <br />
  <p>Truyen dong</p>
  <child :name="name" :age="count" :male="male" />
  <button @click="count++">Add</button>
  <br>
  <!-- Truyen nhanh theo obj -->
   <br>
  <p>Truyen nhanh theo obj</p>
  <child v-bind="obj" />
</template>

<style scoped>
/* .container-w {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 55px;
} */
</style>
