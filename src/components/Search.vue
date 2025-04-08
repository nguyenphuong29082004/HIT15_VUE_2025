<script setup>
import { reactive, ref } from 'vue';
// import vnImage from '../assets/vn.png';
const data = ref({
  flag: "https://flagcdn.com/w320/vn.png",
  name: "Ha Noi",
  degree: 19,
  condition: "Mist",
  icon: "//cdn.weatherapi.com/weather/64x64/day/143.png",
  time: "2025-02-14 15:17",
  forecast: [
    {
      degree: 20,
      condition: "Mist",
      icon: "//cdn.weatherapi.com/weather/64x64/day/143.png",
      time: "2025-02-10",
    },
    {
      degree: 25,
      condition: "Cloud",
      icon: "//cdn.weatherapi.com/weather/64x64/day/143.png",
      time: "2025-02-11",
    },
    {
      degree: 17,
      condition: "Sunny",
      icon: "//cdn.weatherapi.com/weather/64x64/day/143.png",
      time: "2025-02-12",
    },
    {
      degree: 30,
      condition: "Mist",
      icon: "//cdn.weatherapi.com/weather/64x64/day/143.png",
      time: "2025-02-13",
    },
    {
      degree: 20,
      condition: "Mist",
      icon: "//cdn.weatherapi.com/weather/64x64/day/143.png",
      time: "2025-02-14",
    },
    {
      degree: 20,
      condition: "Mist",
      icon: "//cdn.weatherapi.com/weather/64x64/day/143.png",
      time: "2025-02-15",
    },
    {
      degree: 20,
      condition: "Mist",
      icon: "//cdn.weatherapi.com/weather/64x64/day/143.png",
      time: "2025-02-16",
    },
  ],
});
</script>
<template>
  <form action="">
    <input type="text" style="width: 750px;" class="search" placeholder="Viet nam"/>
    <input type="button" value="Search" class="btnsearch" />
  </form>
  <div class="container">
    <div class="flat">
       <img :src="data.flag" alt="Hình ảnh quốc kỳ" />
    </div>
    <div class="weather-info">
      <p class="country">{{ data.name }}</p>
      <h class="temp">
        {{ data.degree }}
        <p class="degree">o</p>
      </h>
      <div class="condate" >
        <p class="condition">{{ data.condition }}</p>
        <p class="datetime">{{ data.time }}</p>
      </div>
    </div>
  </div>

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

.search{
    box-shadow: 0 0 15px 10px rgba(111, 40, 40, 0.2);
}
.search::placeholder {
  color: black; 
}
.btnsearch {
  color: white;
  cursor: pointer;
  background-color: #48319d;
  margin-left: -120px;
  width: 120px;
  font-weight: 600;
  font-size: 14px;
}
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
/* .flat img:hover {
  width: 310px;
} */
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
.container-info{
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
  &:hover{
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
