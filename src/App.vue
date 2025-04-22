<script setup>
import { ref } from 'vue';
import Count from './components/Week6/Count.vue';
// import child from './components/Trenlop/props/child.vue';
// import chirdent from './components/Trenlop/props/chirdent.vue';
const count = ref(0)
const handleCount = () => {
  count.value ++
}
const messageHandler = (data, other) =>{
  if (data > 10){
    alert(`Ket qua: ${data}`)
  }
  if (other > 20){
    alert(`${other}`)
  }
} 

</script>

<template>
  <p>Count: {{count}}</p>
  <button @click="handleCount">Dem</button>
  <br>
  <Count :count="count" @alert-message="messageHandler"/>

</template>

<style scoped>

</style>
