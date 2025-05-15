<script setup>
import { ref } from 'vue';

    // const user = ref({})
    // const formdata = new FormData()
    // // formdata.append("email","trandanhkhang482004@gmail.com")
    // formdata.append("username","trandanhkhang")
    // const updateProfile = async () => {
    //     const res = await fetch(`https://cloth-management-be.onrender.com/api/v1/users/update-profile`,{
    //         method: "PATCH",   
    //         headers: {
    //             "Content-Type": "multipart/form-data", // xac dinh kieu du lieu cho body 
    //             "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YWVhZjY0ZDI5YTJkM2NmZWJjMzRhNyIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc0NjE5OTM1OSwiZXhwIjoxNzQ2NDU4NTU5fQ.BuokO31SMxrnQl7b1bpmsa8wygXGYohOYRTnUSZ-AUU"
    //         },
    //         body: formdata
    //     })
    //     console.log(res);
    //     const data = await res.json()
    //     console.log(data)
    //     user.value = data.data
    // }
    // updateProfile()

    const post = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/1`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: 1,
                title: "Bài viết đã chỉnh sửa",
                body: "Nội dung mới...",
                userId: 1,
            })
        })
        console.log(res)
        const data = await res.json()
        console.log(data)
    }
    post()
</script>
<template>
    <!-- <p>{{ user.username }}</p>
    <p>{{ user.joined }}</p>
    <p>{{ user.role }}</p> -->
</template>
<style scoped>
</style>