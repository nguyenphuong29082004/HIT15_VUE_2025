<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import Search from "./components/Search.vue";
import FetchData from "./components/FetchData.vue";

</script>

<template>
  <div class="container-w">
    <Search/>
  </div>

</template>

<style scoped>
.container-w {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 55px;
}
</style>
