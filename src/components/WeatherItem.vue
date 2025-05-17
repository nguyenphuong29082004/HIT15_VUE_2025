<script setup>
const props = defineProps({
  forecastTime: Array,
  forecastTemp: Array
})
</script>
<template>
  <div class="container-info">
    <div
      class="wea-info"
      v-for="(time, index) in forecastTime"
      :key="index"
    >
      <p class="datetime">{{ time }}</p>
      <img
        class="weather-condition"
        :src="`https://cdn.weatherapi.com/weather/64x64/day/116.png`" 
        alt="weather icon"
      />
      <h1 class="temperature">{{ forecastTemp[index] }}°C</h1>
    </div>
  </div>
</template>
<style scoped>
.container-info {
  display: flex;
  gap: 42px;
}
.wea-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 15px 10px rgba(176, 175, 175, 0.2);
  border-radius: 20px;
  width: max-content;
  padding: 12px 10px;
  transition: all 0.5s ease;
  .temperature,
  .datetime {
    font-size: 16px;
    font-weight: 400;
  }
  &:hover {
    transform: translateY(-20px);
    background-color: #756b9c;
    color: white;
  }
  img {
    width: 32px;
    height: auto;
    transition: all 0.3s ease;
    border-radius: 8px;
  }
}
.container .wea-info:nth-child(2) {
  /* border: 1px solid red; */
  background-color: #48319d;
  color: white;
  transform: translateY(-20px);
}
</style>
