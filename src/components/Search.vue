<script setup>
import { ref } from 'vue';
import FetchData from './FetchData.vue';

const country = ref("");
const btnCountry = ref("");

// Xử lý khi submit form
const handleSubmit = (e) => {
  e.preventDefault(); // Ngăn reload trang
  btnCountry.value = country.value; // Cập nhật giá trị thực sự gửi đi
};
</script>

<template>
  <form @submit="handleSubmit">
    <input
      type="text"
      style="width: 750px;"
      class="search"
      placeholder="Enter the country"
      v-model="country"
    />
    <button type="submit" class="btnsearch">Search</button>
  </form>

  <!-- Chỉ truyền country khi nhấn Search -->
  <FetchData :country="btnCountry" />
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
    /* width: 120px; */
    font-weight: 600;
    font-size: 14px;
    padding: 16px 37px;
    border-radius: 50px;
}

/* .flat img:hover {
  width: 310px;
} */


</style>
