import { createRouter, createWebHistory } from "vue-router";

import FormView from "../views/FormView/FormView.vue";
import ChildrenTableView from "../views/ChildrenTableView/ChildrenTableView.vue";

const routes = [
  {
    path: "/",
    name: "FormView",
    component: FormView,
  },
  {
    path: "/preview",
    name: "ChildrenTableView",
    component: ChildrenTableView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
