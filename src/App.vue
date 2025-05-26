<script setup>
import Child from './components/week7/Bai3/Child.vue';
import Children1 from './components/week7/Bai2/Children1.vue';
import Parent from './components/week7/Bai3/Parent.vue';
import Main_week7 from './components/week7/Main_week7.vue';
import Main_week8 from './components/Week8/Main_week8.vue';
import { useRouter } from 'vue-router';
import Count from './components/Week9/Count.vue';
import Count2 from './components/Week9/Count2.vue';
// import { ref } from 'vue';
// import Count from './components/Week6/Count.vue';
// // import child from './components/Trenlop/props/child.vue';
// // import chirdent from './components/Trenlop/props/chirdent.vue';
// const count = ref(0)
// const handleCount = () => {
//   count.value ++
// }
// const messageHandler = (data, other) =>{
//   if (data > 10){
//     alert(`Ket qua: ${data}`)
//   }
//   if (other > 20){
//     alert(`${other}`)
//   }
// } 
// import { provide, ref } from 'vue';
//     const count = ref(0)
//     provide("message","hello Phuong")
//     provide("number", count)

// const countHandler = () => {
//     count.value++;
// }

// const location = ref("North Pole");

//   function updateLocation() {
//     location.value = "South Pole";
//   }

//   provide("location", {
//     location,
//     updateLocation,

// Cach 1:
//   });
/* <router-link to="/">HOME</router-link> 
    <router-link to="/week8">Week 8</router-link>  */

const router = useRouter();
</script>


<template>
    <!-- <router-link :to="{name:'home'}">HOME</router-link>
    <router-link :to="{name:'week8'}">Week 8</router-link>
    <router-link to="/user/1">Phuong</router-link>
    <router-link to="/user/2">Khang</router-link>
    <router-link to="/admin">Admin</router-link>
    <router-link to="/login">Login</router-link>

    <button @click="router.go(2)">Tien</button>
    <button @click="router.go(-2)">Lui</button>
    <div>
        <router-view></router-view>
    </div> -->

    <Count/>
    <!-- <Count2/> -->

    
</template>

<style scoped>

</style>
