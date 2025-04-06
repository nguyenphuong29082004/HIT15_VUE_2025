<script setup>
    import { ref } from 'vue';
    const length = ref("");
    const message = ref("");
    let randomArray = ref([])

    function display() {
      if(length.value <=  0 || isNaN(length.value)){
          message.value = "Hãy nhập vào số nguyên dương";
          randomArray.value=[];
          // alert(message.value)
      }
      else{
        randomArray.value = Array.from({ length: length.value }, () => Math.floor(Math.random() * 100));
        message.value="";
        // alert(randomArray.value)
      }
    }

      // Kiem tra so nguyen to
      function isPrime(num){
        if(num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++){
          if (num % i === 0) return false;
        }
        return true;
      }

      function randomPrime(){
        let numberPrime;
        do{
          numberPrime = Math.floor(Math.random() * 100);
        }while(!isPrime(numberPrime));
        randomArray.value.push(numberPrime);
        message.value="";
        length.value = randomArray.value.length;
      }


      function delPrime(){
        randomArray.value = randomArray.value.filter((item) => !isPrime(item));
        length.value = randomArray.value.length;

      }

      function Reset(){
        message.value="";
        randomArray.value=[];
        length.value = randomArray.value.length;
      }
      
</script>
<template>
  <div class="bai1">
     <h2>Bài 1:</h2>
    <input type="text" name="" id="" placeholder="Nhập số lượng số cần hiển thị" v-model.number="length" >
    <button @click="display">Hiển thị</button>
    <button @click="randomPrime">Thêm số nguyên tố</button>
    <button @click="delPrime">Xóa tất cả số nguyên tố</button>
    <button @click="Reset">Quay lại</button>
    <p v-if="message">{{ message }}</p>
    <p v-if="randomArray">{{ randomArray.join() }}</p>
  </div>
   
    
</template>
<style scoped>
  .bai1{
    padding: 10px;
  }
  h2{
    margin: 12px 0px;
  }
    button{
        padding: 8px 12px;
        border-radius: 4px;
        background-color: #2ae02a;
        margin-left: 8px;
        border-color: #0fd70f;
    }
    input{
        border-radius: 4px;
        padding: 8px 12px;
        border: 1px solid gray;
    }
</style>

<!-- <script setup>
import { ref } from "vue";

// Tạo một biến phản ứng
const count = ref(0);

// Hàm tăng giá trị biến
const increment = () => {
  count.value++; // Phải dùng .value để truy cập giá trị
};
</script>

<template>
  <div>
    <p>Giá trị count: {{ count }}</p>
    <button @click="increment">Tăng</button>
  </div>
</template> -->


<!-- === khong chay ra -->
<!-- <script setup>
import { ref } from "vue";

const awesome = ref(false);

const toggleAwesome = () => {
  awesome.value = !awesome.value;
};
</script>

<template>
  <button @click="toggleAwesome">Toggle</button>
  <h1 v-if="awesome.value">Vue is awesome!</h1>
  <h1 v-else>Oh no 😢</h1>
</template> -->
<!-- end  -->

<!-- <template>
  <li v-for="item in activeItems" :key="item.id">
  {{ item.name }}
</li>
</template>


<script setup>
import { computed, ref } from "vue";

const items = ref([
  { id: 1, name: "Item 1", active: true },
  { id: 2, name: "Item 2", active: false },
  { id: 3, name: "Item 3", active: true },
]);

const activeItems = computed(() => items.value.filter((item) => !item.active));
</script> -->