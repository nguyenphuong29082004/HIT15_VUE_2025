<script setup>
import { reactive, ref } from "vue";
import Image from "../assets/vue.svg";
import Bai1 from "./Bai1.vue";
import Bai2 from "./Bai2.vue";

// Khai báo menu với reactive
const menu = reactive([
  { type: "image", src: Image }, // Phần tử hình ảnh
  { type: "link", text: "Home" },
  { type: "link", text: "Products" },
  { type: "link", text: "About" },
  { type: "link", text: "Contact" },
  { type: "link", text: "Log in" }
]);
const showLogin = ref(true);
const user = ref("");
const pword = ref("");
const errorMessage = ref("");

function Login(){
    showLogin.value = true;
}
function handleLogin() {
  if (user.value === "admin" && pword.value === "12345") {
    showLogin.value = false;
    errorMessage.value = ""; 
    alert("Đăng nhập thành công!");
  }
  else if(user.value === "" && pword.value === "" ||user.value === ""  || pword.value === "" ){
    errorMessage.value = "Tên đăng nhập hoặc mật khẩu không được để trống!";
  } else {
    errorMessage.value = "Tên đăng nhập hoặc mật khẩu không đúng!";
  }
}

</script>

<template>
    <div :class="showLogin ? 'main-menu-true' : 'main-menu-false'" >
        <ul class="main-menu">
            <li v-for="(item, index) in menu" :key="index">
            <img v-if="item.type === 'image'" :src="item.src" alt="Menu Image" />
            <a v-else-if="item.type === 'link'" href="#"
                @click = "item.text === 'Log in' ? Login() : null"
            >{{ item.text }}</a>
            </li>
        </ul>
        <Bai1/>
        <Bai2/>
    </div>
  
  <!-- Hien thi giao dien neu la show login la true -->
   <div v-if="showLogin" class="main-wrapper">
    <h2>Bài 3: (admin/12345)</h2>
    <div  class="showLogin">
        <form class="wrapp_login"  @submit.prevent="handleLogin">
            <h2>LOGIN</h2>
            <input type="text" placeholder="username" class="input_user" v-model="user">
            <input type="password" name="" id="" placeholder="password" class="input_password" v-model="pword">
            <button @click="handleLogin" class="btn-login">Đăng nhập</button>
            <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
        </form>
   </div>
   </div>
   
</template>

<style scoped>
.main-menu {
  display: flex;
  /* flex-direction: column; */
  gap: 50px; 
  background-color: antiquewhite;
  padding: 12px 12px;
  justify-content: center;
  align-items: center;
}

.main-menu li {
  list-style-type: none;
}

.main-menu img {
    margin-right: 150px;
  max-width: 50px; 
  height: auto;
}

.main-menu a {
  text-decoration: none;
  color: black;
}

.main-menu a:hover {
  color: blue;
}

.main-menu-true{
    display: none;
}
.main-wrapper{
    background: linear-gradient(180deg, rgba(188,87,136,1) 0%, rgba(33,74,178,1) 100%);

}
.showLogin{
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
h2{
    text-align: center;
}

.wrapp_login{
    margin-top: -80px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: white;
    gap: 20px;
    border-radius: 8px;
}
.input_user, .input_password{
    padding: 18px 10px;
    width: 350px;
    border-radius: 4px;
    border: 1px solid rgb(224, 219, 219);
}
.btn-login{
    padding: 18px 10px;
    background-color: rgb(188,87,136);
    color: white;
    font-size: 16px;
    border-radius: 4px;
}
</style>
