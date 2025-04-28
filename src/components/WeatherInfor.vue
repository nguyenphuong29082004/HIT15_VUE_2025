<script setup>
const props = defineProps({
  name: String,
  tem: String,
  condition: String,
  date: String,
  flag: String,
})
</script>
<template>
  <div class="container">
    <div class="flat">
      <img :src="flag" alt="Hình ảnh quốc kỳ" />
    </div>
    <div class="weather-info">
      <p class="country">{{ name }}</p>
      <h class="temp">
        {{ tem}}
        <p class="degree">o</p>
      </h>
      <div class="condate">
        <p class="condition">{{condition}}</p>
        <p class="datetime">{{ date}}</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  /* margin-top: 40px; */
  display: flex;
  gap: 52px;
  box-shadow: 0 0 15px 10px rgba(86, 84, 84, 0.2);
  padding: 16px;
  border-radius: 20px;
  width: max-content;
}
.flat {
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 120px; */
}
.flat img {
  width: 100%;
  height: auto;
  transition: all 0.3s ease;
  border-radius: 8px;
}
.weather-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  .country {
    font-size: 16px;
  }
  .condate {
    .condition {
      text-align: center;
      color: rgb(151, 146, 146);
    }
    .condition,
    .datetime {
      font-size: 16px;
    }
  }

  .temp {
    font-size: 50px;
    display: flex;
    gap: 4px;
    font-weight: 700;
    align-items: center;
    .degree {
      margin-top: -28px;
      font-size: 24px;
    }
  }
}
</style>
