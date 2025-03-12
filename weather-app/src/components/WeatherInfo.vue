<template>
  <div class="container">
    <div class="wea-info">
      <p class="datetime">2025-03-11</p>
      <img class="weather-condition" src="../assets/176.webp" />
      <h1 class="temperature">26°C</h1>
    </div>
    <div class="wea-info">
      <p class="datetime">2025-03-11</p>
      <img class="weather-condition" src="../assets/176.webp" />
      <h1 class="temperature">26°C</h1>
    </div>
    <div class="wea-info">
      <p class="datetime">2025-03-11</p>
      <img class="weather-condition" src="../assets/176.webp" />
      <h1 class="temperature">26°C</h1>
    </div>
  </div>
</template>
<style scoped>
.container{
    display: flex;
    gap: 36px;
}
.wea-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 15px 10px rgba(128, 124, 124, 0.2);
  border-radius: 20px;
  width: max-content;
  padding: 0px 4px;
  .temperature,
  .datetime {
    font-size: 16px;
    font-weight: 400;
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
