<template>
    <h1>Hien thi User{{route.params.id}}</h1>
    <h2>Hien thi meta {{ route.meta.role }}</h2>
    <router-link :to="`/user/${route.params.id}/profile`">Profile</router-link>
    <router-link :to="`/user/${route.params.id}/settings`">Setting</router-link>
    <router-view></router-view>

</template>
<script setup>
    import { useRoute } from 'vue-router';
    const route = useRoute();
</script>