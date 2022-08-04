import {createRouter, createWebHistory} from "vue-router";
import type { RouteRecordRaw} from "vue-router";

const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/AboutView.vue"),
  },
]



const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes: constantRoutes as RouteRecordRaw[],
  scrollBehavior: () => ({
    left: 0,
    top: 0
  })
});

export default router;
