<script setup>
import { reactive, ref } from 'vue';
const arrayImage = reactive([
    "https://toigingiuvedep.vn/wp-content/uploads/2022/04/meme-hai-huoc-troll.jpg",
    "https://taoanhdep.com/wp-content/uploads/2022/10/anh-meme-meo.jpg",
    "https://mcdn.coolmate.me/image/March2023/meme-meo-cute-hai-huoc-1297_374.jpg",
    "https://inkythuatso.com/uploads/thumbnails/800/2023/01/10-anh-meme-meo-gio-tay-inkythuatso-17-15-30-44.jpg",
    "https://khoinguonsangtao.vn/wp-content/uploads/2022/09/hinh-meo-bua-bieu-cam-hai-huoc.jpg",
    "https://img.meta.com.vn/Data/image/2022/05/14/meme-meo-bua-4.jpg",
    "https://inkythuatso.com/uploads/thumbnails/800/2022/05/dang-noi-gi-do-meme-17-09-22-19.jpg",
    "https://thuthuatnhanh.com/wp-content/uploads/2022/06/Anh-meme-meo.jpg",
    "https://blogchiasekienthuc.com/wp-content/uploads/2023/02/anh-meme-cho-meo-hai-huoc-24.jpg",
    "https://khoinguonsangtao.vn/wp-content/uploads/2022/08/hinh-meme-meo-bua-de-thuong.jpg",
    'vn.png'
]);

// Biến phản ứng để lưu hình ảnh ngẫu nhiên
const randomImage = ref("");

// Hàm lấy hình ảnh ngẫu nhiên
function getRandomElement() {
  const randomIndex = Math.floor(Math.random() * arrayImage.length); // Lấy chỉ số ngẫu nhiên
  randomImage.value = arrayImage[randomIndex]; // Gán hình ảnh ngẫu nhiên cho randomImage
}


</script>
<template>
    <div class="bai2">
        <h2>Bài 2:</h2>
        <button @click="getRandomElement">Hãy click vào đây</button>
        <div v-if="randomImage">
            <img :src="randomImage" alt="Ảnh ngẫu nhiên">
        </div>
    </div>
    <!-- <img src="../assets/vn.png" alt=""> -->
    
<div v-for="item, index in arrayImage" :key="index">

    <img :src="item" alt="">
</div>
</template>

<style scoped>
    .bai2{
        padding: 10px;
    }
    h2{
        margin: 12px 0px;
    }
    button{
        padding: 8px 12px;
        border-radius: 4px;
        background-color: #2ae02a;
        /* margin-left: 8px; */
        border-color: #0fd70f;
    }
    div{
        width: 400px;
        height: 400px;
    }
    img{
        width: 100%;
        height: 100%;
    }
</style>