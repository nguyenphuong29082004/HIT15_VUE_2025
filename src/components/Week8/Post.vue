<script setup>
import { ref } from 'vue';

    const user = ref({})
    const login = async () => {
        try {
            const res = await fetch(`https://cloth-management-be.onrender.com/api/v1/auth/login`,{
            method: "POST",   
            headers: {
                "Content-Type": "application/json" // xac dinh kieu du lieu cho body 
            },
            body: JSON.stringify({
                email: "trandanhkhang482004@gmail.com",
                password: "Abc@12345"
                })
            })
            console.log(res);
            const data = await res.json()
            console.log(data)
            user.value = data.data
        } catch (error) {
            
        }
    }
    login()
</script>
<template>
    <p>{{ user.username }}</p>
    <p>{{ user.joined }}</p>
    <p>{{ user.role }}</p>
</template>
<style scoped>
</style>