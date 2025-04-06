<script setup>
import { reactive } from 'vue';
import vnImage from '../assets/vn.png';
 const wether = reactive(
 { name: 'Viet Nam',
   temp: "22.1" ,
   sky: "Light rain",
   date: "2025-03-11 07:41",
   flat_img: vnImage,
})
</script>
<template>
  <form action="">
    <input type="text" style="width: 750px;" class="search" placeholder="Viet nam"/>
    <input type="button" value="Search" class="btnsearch" />
  </form>

  <div class="container">
    <div class="flat">
       <img :src="wether.flat_img" alt="Hình ảnh quốc kỳ" />
    </div>
    <div class="weather-info">
      <p class="country">{{ wether.name }}</p>
      <h class="temp">
        {{ wether.temp }}
        <p class="degree">o</p>
      </h>
      <div class="condate" >
        <p class="condition">{{ wether.sky }}</p>
        <p class="datetime">{{ wether.date }}</p>
      </div>
    </div>
  </div>

  <div class="container-info">
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
  padding: 20px 4px;
   transition: all 0.3s ease;
  .temperature,
  .datetime {
    font-size: 16px;
    font-weight: 400;
  }
  &:hover{
    transform: translateY(-20px);
    background-color: #756b9c;
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
