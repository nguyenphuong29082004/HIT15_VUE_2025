<script setup>
import { ref, onMounted, watch } from 'vue'
import axios from 'axios'
import { defineProps } from 'vue'
import WeatherInfor from './WeatherInfor.vue'
import WeatherItem from './WeatherItem.vue'

const props = defineProps({
  country: String,
})
const name = ref('')
const tem = ref('')
const condition = ref('')
const date = ref('')
const API_KEY = "07ca3773bc5d4dc29c373649251402"
const weatherData = ref(null)
const flag = `https://restcountries.com/v3.1/name/${props.country}`;

const fetchWeather = async () => {
  if (!props.country) return;

  try {
    const res = await axios.get(`http://api.weatherapi.com/v1/forecast.json?q=${props.country}&days=7&key=${API_KEY}`)

    weatherData.value = res.data

    // Lưu dữ liệu vào biến ref
    name.value = res.data.location.name
    tem.value = res.data.current.temp_c
    condition.value = res.data.current.condition.text
    date.value = res.data.current.last_updated

    console.log(res.data)
  } catch (error) {
    console.error('Lỗi khi gọi API:', error)
  }
}



// Gọi API lần đầu (nếu có sẵn country)
onMounted(fetchWeather)

// Gọi API mỗi khi country thay đổi
watch(() => props.country, () => {
  fetchWeather()
})
</script>

<template>
  <!-- <div v-if="weatherData">
    <h2>Thời tiết tại {{ weatherData.location.name }}</h2>
    <p>Nhiệt độ: {{ weatherData.current.temp_c }}°C</p>
  </div> -->
  <WeatherInfor
      :name="name"
      :tem="tem"
      :condition="condition"
      :date="date"
      :flag="flag"
    />
  <!-- <WeatherItem/> -->
</template>

<style scoped>
</style>