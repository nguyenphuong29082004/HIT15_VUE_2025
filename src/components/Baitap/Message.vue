<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  notice: Boolean,
  message: String
})
</script>

<template>
  <div class="wrapper_notice">
    <div :class="['notice_message', { active: notice }]">
      {{ message }}
    </div>
  </div>
</template>

<style scoped>
.wrapper_notice {
  display: flex;
  align-items: center;
  justify-content: center;
}

.notice_message {
  border-radius: 4px;
  width: 250px;
  height: 80px;
  margin-bottom: 80px;
  background-color: #4d56ff;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: translateY(-20px);
}

.notice_message.active {
  animation: slideDownFade 3s ease-in-out forwards;
}

@keyframes slideDownFade {
  0% {
    transform: translateY(-20px);
    opacity: 0;
  }
  20% {
    transform: translateY(40px);
    opacity: 1;
  }
  80% {
    transform: translateY(40px);
    opacity: 1;
  }
  100% {
    transform: translateY(60px);
    opacity: 0;
  }
}
</style>
