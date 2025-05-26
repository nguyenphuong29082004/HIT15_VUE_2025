<script setup>
import Count2 from './Count2.vue';
import { useCounterStore } from './Stores/count.store';
const counterStore = useCounterStore()
counterStore.count;
counterStore.doubleCount;
</script>
<template>
    <h1>Count 1</h1>
    <h1>{{ counterStore.count }}</h1>
    <h1>{{ counterStore.doubleCount }}</h1>
    <button @click="counterStore.count++">Count</button>
    <button @click="counterStore.alertMessage">Alert</button>
    <Count2/>
</template>