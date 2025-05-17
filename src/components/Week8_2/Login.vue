<template>
    <h1>Login</h1>
    <button @click="login">Dang nhap</button>
</template>
<script setup>
    const login = () => {
        localStorage.setItem("accessToken","ABC")
    }
</script>