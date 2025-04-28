<script setup>
import Child from './components/week7/Bai3/Child.vue';
import Children1 from './components/week7/Bai2/Children1.vue';
import Parent from './components/week7/Bai3/Parent.vue';

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
import { provide, ref } from 'vue';
    const count = ref(0)
    provide("message","hello Phuong")
    provide("number", count)

const countHandler = () => {
    count.value++;
}

const location = ref("North Pole");

  function updateLocation() {
    location.value = "South Pole";
  }

  provide("location", {
    location,
    updateLocation,
  });
</script>

<template>
  <!-- <p>Count: {{count}}</p>
  <button @click="handleCount">Dem</button>
  <br>
  <Count :count="count" @alert-message="messageHandler"/> -->
  <!-- <Child/> -->
  <Children1/>
  <h1>Count GrandFather: {{ count }}</h1>
  <Parent/>
  <button @click="countHandler">Click</button>
</template>

<style scoped>

</style>
