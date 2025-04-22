<script setup>
import { defineProps,defineEmits, ref, computed  } from 'vue';

const props = defineProps([
    "count","dem"
])
// const c = props.count
// const c = ref(props.count * 2)
const c = computed(()=>{
    return props.count * 2
})
const d  = props.count * 5
const emit = defineEmits()
const handle = () => {
    console.log(c.value)
    emit("alertMessage",c.value,d)
}

</script>
<template>
    <p>Gia tri nhan doi: {{ props.count * 2 }}</p>
    <!-- <button @click="emit("alertMessage",c)">Alert</button> -->
     <button @click="handle">Alert</button>

</template>