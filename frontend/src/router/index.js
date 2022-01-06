import Vue from "vue";
import VueRouter from "vue-router";
import List from "../views/List.vue";
import Detail from "../views/Detail.vue";
import Add from "../views/Add.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "list",
    component: List
  },
  {
    path: "/detail/:id",
    name: "detail",
    component: Detail,
    props: true
  },
  {
    path: "/add",
    name: "add",
    component: Add
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;