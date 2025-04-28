<template>
    <p>
        <slot name="title">
            Thanh cong
        </slot>
    </p>
    <p >
        <slot name="content"></slot>
    </p>
    <p>
        <slot></slot>
    </p>
    
    
</template>
<style scoped>
    p{
        border: 1px solid red;
        background-color: pink;
        padding: 32px;
    }
</style>