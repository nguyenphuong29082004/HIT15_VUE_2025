<script setup>
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute(); 
const userId = ref(0);
watch(route, () =>{
    userId.value = route.params.id;
})
onMounted(()=>{
    userId.value = route.params.id;
    console.log(route.params.id);
    console.log(route);
    document.title = route.name
})
</script>
<template>
    <h1>Profile</h1>
    <h2>ID: {{ userId }}</h2>
</template>