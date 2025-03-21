# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).

1. import { createApp } from 'vue';
Dòng này nhập hàm createApp từ thư viện Vue.js..

Hàm createApp được dùng để tạo một ứng dụng Vue mới, đóng vai trò như điểm khởi đầu của ứng dụng.

2. import App from './App.vue';
Dòng này nhập component App.vue, thường là component gốc (root component) của ứng dụng.

File App.vue chứa cấu trúc giao diện chính, logic và style của ứng dụng. Các component con sẽ được nhúng vào đây.

3. createApp(App):
Hàm createApp nhận vào App (root component) làm tham số. Điều này cho phép Vue.js hiểu rằng App.vue sẽ là phần tử chính của ứng dụng.

4. mount('#app'):
Dòng này "gắn" ứng dụng Vue vừa được tạo vào phần tử HTML có id="app".

Trong file index.html, bạn có phần tử:

html
<div id="app"></div>
Câu lệnh này đảm bảo nội dung được render bởi Vue.js sẽ hiển thị bên trong thẻ <div> này.