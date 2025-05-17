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
    path: "/login",
    name: "login",
    component: () => import("../Login.vue"),
  },
  {
    path: "/user/:id",
    name: "User",
    component: () => import("../User/User.vue"),
    meta: { role: "User" },
    children: [
      {
        path: "profile",
        name: "UserProfile",
        component: () => import("../User/Profile.vue"),
      },
      {
        path: "settings",
        name: "UserSettings",
        component: () => import("../User/Setting.vue"),
      },
    ],
  },
  {
    path: "/user/:id/post/:postId",
    name: "UserPost",
    component: () => import("../UserPost.vue"),
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("../Admin.vue"),
    meta: { requiresAuth: true },
  },
  // bat loi
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

// router/index.js2
// to: B , from: A
const accessToken = "";
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !localStorage.getItem("accessToken")) {
    next("/login");
  } else {
    next();
  }
});
router.afterEach((to, from) => {
  console.log(`Đã điều hướng từ ${from.path} tới ${to.path}`);
  document.title = to.name;
});
export default router;
