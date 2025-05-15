import { createRouter, createWebHistory } from "vue-router";
import Main_week8 from "../../Week8/Main_week8.vue";
import Home from "../Home.vue";
// Khai bao bien
const routes = [
  {
    path: "/week8",
    name: "week8",
    component: () => import("../../Week8/Main_week8.vue"),
  },
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/user/:id",
    name: "profile",
    component: () => import("../Profile.vue"),
  },
  {
    path: "/user/:id/post/:postId",
    name: "UserPost",
    component: () => import("../UserPost.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
