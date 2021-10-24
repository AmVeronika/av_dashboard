import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/projects",
    name: "Projects",
    component: () => import("../views/Projects.vue"),
  },
  {
    path: "/timesheet",
    name: "Timesheet",
    component: () => import("../views/Timesheet.vue"),
  },
  {
    path: "/todo",
    name: "Todo",
    component: () => import("../views/Todo.vue"),
  },
  {
    path: "/settings",
    name: "Settings",
    component: () => import("../views/Settings.vue"),
  },

  {
    path: "/useful",
    name: "Useful",
    component: () => import("../views/Useful.vue"),
  },
  {
    path: "/404",
    name: "Page404",
    component: () => import("../views/Page404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
