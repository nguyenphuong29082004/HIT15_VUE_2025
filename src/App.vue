<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import Search from "./components/Search.vue";
// import Content from "./components/Content.vue";
// import WeatherInfo from "./components/WeatherInfo.vue";
</script>

<template>
  <div class="container-w">
    <Search />
    <!-- <Content />
    <WeatherInfo /> -->
  </div>

  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>
.container-w {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 55px;
}
</style>
