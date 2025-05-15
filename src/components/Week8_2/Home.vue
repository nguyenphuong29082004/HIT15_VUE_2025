<script setup>
    import { useRouter } from 'vue-router';
    const router = useRouter()
</script>
<template>
    <h1>HOME</h1>
    <!-- <button @click="router.push('/week8')">Click</button> -->
    <button @click="router.replace({name:'week8'})">Click</button>
</template>