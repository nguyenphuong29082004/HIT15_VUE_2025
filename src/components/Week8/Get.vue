<script setup>
    import { ref } from 'vue'
    // async function name(params) {
        
    // }
    const clothe_list = ref([])

    const getClothe = async() => {
        const res = await fetch(`https://cloth-management-be.onrender.com/api/v1/clothes?limit=15&page=2`)
        console.log("check")
        const data = await res.json()
        // console.log(data)
        clothe_list.value = data.data.clothes
        console.log(clothe_list.value)
    }
    getClothe()
</script>
<template>

</template>
<style scoped>
</style>