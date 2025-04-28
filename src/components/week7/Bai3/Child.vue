<script setup>
    import { inject} from 'vue';
    const msg = inject("message")
    const count = inject("number")
    const countHandler = () => {
    count.value++;
    }
    const locate = inject("location");
    const {location, updateLocation} = inject("location")

</script>
<template>
    <p>{{ msg }}</p>
    <!-- <p>{{ count }}</p> -->
     <button @click="countHandler">Click Child </button>
    <button @click="locate.updateLocation">{{ locate.location }}</button>
    <button @click="updateLocation">{{ location }}</button>


</template>