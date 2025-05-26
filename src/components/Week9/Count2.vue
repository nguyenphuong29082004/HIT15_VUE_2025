<script setup>
import { useCounterStore } from './Stores/count.store';
const counterStore = useCounterStore()
</script>
<template>
    <h1>Count 2</h1>
    <h1>{{ counterStore.count }}</h1>
    <h1>{{ counterStore.doubleCount }}</h1>
    <button @click="counterStore.increment()">Count</button>
</template>