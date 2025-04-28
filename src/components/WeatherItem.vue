<script setup></script>
<template>
  <div class="container-info">
    <div class="wea-info">
      <p class="datetime">{{ data.forecast[0].time }}</p>
      <img class="weather-condition" :src="data.forecast[0].icon" />
      <h1 class="temperature">{{ data.forecast[0].degree }}°C</h1>
    </div>
    <div class="wea-info">
      <p class="datetime">{{ data.forecast[1].time }}</p>
      <img class="weather-condition" :src="data.forecast[1].icon" />
      <h1 class="temperature">{{ data.forecast[1].degree }}°C</h1>
    </div>
    <div class="wea-info">
      <p class="datetime">{{ data.forecast[2].time }}</p>
      <img class="weather-condition" :src="data.forecast[2].icon" />
      <h1 class="temperature">{{ data.forecast[2].degree }}°C</h1>
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
