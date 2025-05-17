<script setup>
import { ref, onMounted, watch } from "vue";
import axios from "axios";
import { defineProps } from "vue";
import WeatherInfor from "./WeatherInfor.vue";
import WeatherItem from "./WeatherItem.vue";

const props = defineProps({
  country: String,
});
const name = ref("");
const tem = ref("");
const condition = ref("");
const date = ref("");
const forecastTime = ref([]); // Thời gian 10h ba ngày tới
const forecastTemp = ref([]); // Nhiệt độ tương ứng
const flagImg = ref("");
const API_KEY = "07ca3773bc5d4dc29c373649251402";
const weatherData = ref(null);

const fetchWeather = async () => {
  if (!props.country) return;

  try {
    const res = await axios.get(
      `http://api.weatherapi.com/v1/forecast.json?q=${props.country}&days=7&key=${API_KEY}`
    );
    weatherData.value = res.data;

    // Lưu dữ liệu vào biến ref
    name.value = res.data.location.name;
    tem.value = res.data.current.temp_c;
    condition.value = res.data.current.condition.text;
    date.value = res.data.current.last_updated;

    // Clear cũ để tránh push thêm
    forecastTime.value = [];
    forecastTemp.value = [];

    // Lấy 3 ngày tiếp theo
    const nextDays = res.data.forecast.forecastday.slice(0, 4);
    nextDays.forEach((day) => {
      const hour10 = day.hour.find((h) => h.time.endsWith("10:00"));
      if (hour10) {
        forecastTime.value.push(hour10.time);
        forecastTemp.value.push(hour10.temp_c);
      }
    });

    // Gọi API lấy thông tin quốc gia
    const countryRes = await axios.get(
      `https://restcountries.com/v3.1/name/${props.country}`
    );
    flagImg.value = countryRes.data[0].flags.png; // ✅ Đây là hình quốc kỳ

    console.log(flagImg.value);
    
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
  }
};

// Gọi API lần đầu (nếu có sẵn country)
onMounted(fetchWeather);

// Gọi API mỗi khi country thay đổi
watch(
  () => props.country,
  () => {
    fetchWeather();
  }
);
</script>

<template>
  <WeatherInfor
    :name="name"
    :tem="tem"
    :condition="condition"
    :date="date"
    :flagImg="flagImg"
  />
  <WeatherItem :forecastTime="forecastTime" :forecastTemp="forecastTemp" />
</template>

<style scoped></style>
