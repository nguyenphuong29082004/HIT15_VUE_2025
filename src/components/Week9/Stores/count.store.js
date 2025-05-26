import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }
  const alertMessage = () => {
    alert("Toi la Phuong!");
  };

  return { count, doubleCount, increment, alertMessage };
});

// option Store
// export const useCounterStore = defineStore("counter", {
//   state: () => ({ count: 0, name: "Phuong" }),
//   getters: {
//     doubleCount: (state) => state.count * 2,
//   },
//   actions: {
//     increment() {
//       this.count++;
//     },
//   },
// });
