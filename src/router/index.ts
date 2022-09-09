import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import Chart from "@/views/Chart/index.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Chart
  }
];

const route = createRouter({
  history: createWebHistory(),
  routes
});

export default route;
