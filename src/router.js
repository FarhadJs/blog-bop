import { createRouter, createWebHistory } from "vue-router";

//Pages
import TheHome from "./components/pages/Home.vue";
import TheContact from "./components/pages/Contact.vue";
import TheAbout from "./components/pages/About.vue";
import Dashboard from "./components/pages/dashboard/dashboard.vue";

const routes = [
  {
    path: "/",
    component: TheHome,
  },
  {
    path: "/about",
    component: TheAbout,
  },
  {
    path: "/contact",
    component: TheContact,
  },
  {
    path: "/dashboard",
    component: Dashboard,
    children: [
      {
        path: "users",
        component: () => import("./components/pages/dashboard/users.vue"),
      },
      {
        path: "groups",
        component: () => import("./components/pages/dashboard/groups.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
