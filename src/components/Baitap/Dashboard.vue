<script setup>
import { defineProps } from "vue";
const props = defineProps({
    length: Number,
    set_height_complete: Number,
    set_height_unfinished: Number,
    task_count_complete: Number,
    task_count_unfinished: Number
})
</script>
<template>
  <div class="chart">
    <div class="sum result">
      <div class="data_sum">{{ length }}</div>
      <div
        class="column_sum column"
        :style="{ height: length > 0 ? '100%' : '0px' }"
      ></div>
      <div>Tổng</div>
    </div>
    <div class="complete result">
      <div class="data_complete">{{ task_count_complete }}</div>
      <div
        class="column_complete column"
        :style="{ height: set_height_complete + '%' }"
      ></div>
      <div>Đã hoàn thành</div>
    </div>
    <div class="unfinished result">
      <div class="data_unfinished">{{ task_count_unfinished }}</div>
      <div
        class="column_unfinished column"
        :style="{ height: set_height_unfinished + '%' }"
      ></div>
      <div>Chưa hoàn thành</div>
    </div>
  </div>
</template>
<style scoped>
.chart {
  padding: 24px;
  border: 2px solid #4d56ff;
  border-radius: 4px;
  width: 500px;
  height: 450px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.column {
  border: 1px solid black;
  width: 50px;
}
.result {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  height: 100%;
  justify-content: flex-end;
}
.column_sum {
  background-color: red;
}
.column_complete {
  background-color: yellow;
}
.column_unfinished {
  background-color: green;
  /* height: 50px; */
}
</style>
