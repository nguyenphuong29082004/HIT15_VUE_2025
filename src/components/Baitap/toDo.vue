<script setup>
import { ref, computed, watch } from "vue";
import Message from "./Message.vue";
import Dashboard from "./Dashboard.vue";
const selectedList = ref("all");
const search_task = ref("");
const show_add = ref(false);
const detail_task = ref(false);
const input_add = ref(""); // ô nhập nhiệm vụ mới
const task_list = ref([]); // mảng chứa tất cả nhiệm vụvụ

const setItemLocalStorage = () => {
  localStorage.setItem("task_list", JSON.stringify(task_list.value))
}

const getItemLocalStorage = () => {
  const data = localStorage.getItem("task_list");
  return data ? JSON.parse(data) : [];
}



const task_list_length = computed(() => task_list.value.length);

const notice = ref(false); // Hien thi thong bao
const message = ref(""); // Noi dung hien thi
const triggerNotice = (msg) => {
  message.value = msg;
  notice.value = false; // Reset trước đã

  // Delay nhỏ để force re-render animation
  setTimeout(() => {
    notice.value = true;
  }, 10);
};

const add_list = () => {
  if (input_add.value.trim() === "") {
    triggerNotice("Thêm không thành công");
    show_add.value = false;
  } else {
    task_list.value.push({
      name: input_add.value,
      status: "unfinished",
      check: false,
    });
    input_add.value = "";
    show_add.value = false;
    triggerNotice("Thêm thành công");
  }
};

const delete_task = (index) => {
  filter.value.splice(index, 1);
  triggerNotice("Xóa thành công");
};

// lọc task
const filter = computed(() => {
  if (selectedList.value === "all") {
    return task_list.value;
  } else if (selectedList.value === "complete") {
    return task_list.value.filter((item) => item.status === "complete");
  } else {
    return task_list.value.filter((item) => item.status === "unfinished");
  }
});

// Tìm kiếmkiếm
const search_task_item = computed(() => {
  return filter.value.filter((task) =>
    task.name.toLowerCase().includes(search_task.value.toLowerCase())
  );
});

// Sử dụng lọc hoặc timf kiém và lọc
const displayTasks = computed(() => {
  return search_task.value ? search_task_item.value : filter.value;
});

//mang chuachua nhiem vu hoan thanh
const task_count_complete = computed(() => {
  return task_list.value.filter((item) => item.status === "complete").length;
});

// mang chua nhiem vu chua hoan thanhthanh
const task_count_unfinished = computed(() => {
  return task_list.value.filter((item) => item.status === "unfinished").length;
});
const set_height_complete = ref(0);
const set_height_unfinished = ref(0);

watch(
  () => (task_count_complete.value / task_list.value.length) * 100,
  (current) => {
    set_height_complete.value = current;
  }
);
watch(
  () => (task_count_unfinished.value / task_list.value.length) * 100,
  (current) => {
    set_height_unfinished.value = current;
  }
);

// thong bao
</script>
<template>
  <!-- <div class="wrapper_notice">
    <div :class="['notice_message', { active: notice }]">
      {{ message }}
    </div>
  </div> -->
  <Message :notice="notice" :message="message"/>
  <div class="container">
    <div class="container_left">
      <div class="search">
        <input
          type="text"
          class="input_search"
          placeholder="Tìm kiếm"
          v-model="search_task"
        />
        <select name="" id="" v-model="selectedList" class="selectL">
          <option value="all">Tất cả</option>
          <option value="complete">Hoàn thành</option>
          <option value="unfinished">Chưa hoàn thành</option>
        </select>
      </div>
      <div class="todo_list">
        <div
          class="todo_item"
          v-for="(item, index) in displayTasks"
          :key="index"
        >
          <div class="todo_name">
            <input
              type="checkbox"
              name=""
              id=""
              v-model="item.checked"
              @change="item.status = item.checked ? 'complete' : 'unfinished'"
            />
            <p>{{ item.name }}</p>
          </div>
          <div class="todo_icon">
            <button>
              <i class="fa-solid fa-eye" @click="detail_task = !detail_task">
                <div class="overlay" v-if="detail_task">
                  <div class="detail_wrap">
                    <p class="detail_item">{{ item.name }}</p>
                    <p>{{ filter[index].status }}</p>
                    <button class="detail_cancel">Cancel</button>
                  </div>
                </div>
              </i>
            </button>
            <button>
              <i class="fa-solid fa-trash-can" @click="delete_task(index)"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="container_right">  
      <Dashboard :length="task_list_length" :set_height_complete="set_height_complete" :set_height_unfinished="set_height_unfinished"
      :task_count_complete="task_count_complete" :task_count_unfinished="task_count_unfinished"/>

      <div class="add">
        <button @click="show_add = !show_add" class="add_click">
          <i class="fa-solid fa-plus" style="color: #ffffff"></i>
        </button>
        <div v-if="show_add" class="overlay">
          <div class="wrap_add">
            <h3>Thêm mới</h3>
            <div class="show_form">
              <textarea
                name=""
                id=""
                cols="70"
                rows="10"
                v-model="input_add"
              ></textarea>
            </div>
            <div class="add_btn">
              <button class="add_new" @click="add_list" @keyup.enter="submit">
                Add
              </button>
              <button class="add_cancel" @click="show_add = !show_add">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.wrapper_notice {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Trạng thái ban đầu */
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

/* Khi có class "active", chạy animation */
.notice_message.active {
  animation: slideDownFade 3s ease-in-out forwards;
}

/* Animation: trượt xuống -> giữ -> biến mất */
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


.detail_item {
  text-transform: capitalize;
  margin-bottom: 32px;
}
.detail_wrap {
  background-color: white;
  padding: 20px;
  width: 300px;
  border-radius: 8px;
}
.wrap_add {
  background-color: white;
  flex-direction: column;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border: 2px solid #4d56ff;
  border-radius: 8px;
}
.add_new {
  margin-right: 12px;
  background-color: #4d56ff;
  color: white;
}
.add_new,
.add_cancel,
.detail_cancel {
  width: 80px;
  padding: 12px;
  border-radius: 8px;
  border: none;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5); /* Làm mờ nền */
  display: flex;
  justify-content: center;
  align-items: center;
}
.showForm {
  width: 250px;
  height: 150px;
  border: 1px solid black;
  background-color: #4d56ff;
  display: block;
}
.noneForm {
  display: none;
}
.container_right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
}
.add {
  .add_click {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #4d56ff;
    position: fixed;
    right: 40px;
    bottom: 20px;
  }
}
.container {
  display: flex;
  justify-content: center;
  /* align-items: center; */
  /* height: 100vh; */
  gap: 50px;
  /* margin-top: 120px; */
}
.search {
  margin-bottom: 32px;
}
.input_search {
  border: 2px solid #636cfe;
  padding: 8px;
  width: 350px;
  border-radius: 4px;
  margin-right: 24px;
}
.selectL {
  background-color: #4d56ff;
  color: white;
  padding: 8px;
  border-radius: 4px;
}
.todo_list {
  height: 400px;
  overflow-y: scroll;
  /* padding: 24px; */
}
/* .chart {
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
} */
.todo_item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #4d56ff;
  padding: 24px;
}
.todo_name {
  display: flex;
  gap: 20px;
}
.todo_icon {
  display: flex;
  gap: 24px;
  /* margin-bottom: 16px; */
}
.fa-eye,
.fa-trash-can {
  font-size: 16px;
  background-color: white;
  color: #707179;
  border: none;
}
</style>
