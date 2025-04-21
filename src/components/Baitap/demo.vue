<script setup>
  import { ref, watch } from "vue";

  const count1 = ref(0);
  const count2 = ref(0);
  const sum = ref(0);

  watch(
    () => count1.value + count2.value,
    (current) => {
      // console.log(current)
      sum.value = current;
    }
  );

  function updateCounts() {
    count1.value++;
    count2.value += 2;
  }
</script>

<template>
  <h1>{{ count1 }} - {{ count2 }}</h1>
  <h2>{{sum}}</h2>
  <button @click="updateCounts">Update Count</button>
</template>

<!-- <script setup>
  import { ref, watch } from "vue";

  const count = ref(0);

  watch(count, (current) => {
    console.log("Current value of count:", current);
  });

  function updateCount() {
    count.value++;
  }
</script>

<template>
  <h1>{{ count }}</h1>
  <button @click="updateCount">Update Count</button>
</template> -->



<!-- <script setup>
const userInfo = [{
  name: "Phương",
  age: 20,
  city: "Hà Nội"
}];
</script>

<template>
  <div v-for="(item, index) in userInfo" :key="index">
    <p>{{ index }}. {{ key }}: {{ value }}</p>
     <p>{{ userInfo[index].name}}</p>
  </div>
</template> -->


<!-- ================DEMO CHECKBOX==================== -->
<!-- <script setup>
import { ref } from "vue";

const isChecked = ref(false);
</script>

<template>
  <input type="checkbox" v-model="isChecked">
  <p>Trạng thái: {{ isChecked }}</p>
</template> -->

<!-- ==============DEMO SELECT OPTION============= -->
<!-- <script setup>
import { ref } from "vue";

const selectedFruit = ref("apple");
</script>

<template>
  <select v-model="selectedFruit">
    <option value="apple">Táo</option>
    <option value="banana">Chuối</option>
    <option value="orange">Cam</option>
  </select>

  <p>Bạn chọn: {{ selectedFruit }}</p>
</template> -->
