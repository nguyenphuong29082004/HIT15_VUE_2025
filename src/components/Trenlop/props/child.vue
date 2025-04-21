<script setup>
    import { defineProps } from 'vue';
    // Hai cachs đầu tiền ko cần gán ý là ko gần const prop =  vào luôn defineProps
    // C1
    // const propsC1 = defineProps(["name", "age", "address", "fullName", "male"]);
    // console.log(propsC1.name);
    // C2
    const props = defineProps({
        name: String,
        age: Number,
        list: Array,
        // sex: Boolean,
        male: {
            type: Boolean,
            // required: true, // bat buoc phai truyen
            // default: true, // gia tri mac dinh true
        },
        student: Object,
    })
    // console.log(props.name);

</script>
<template>
    <p>{{props.name }}</p>
    <p>{{ props.age }}</p>
    <p>{{ props.male }}</p>
</template>