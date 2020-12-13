import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/play",
    name: "Play",
    component: () => import(/* webpackChunkName: "about" */ "../views/Play.vue")
  },
  {
    path: "/:pathMatch(.*)*",
    name: "Error404",
    component: () =>
      import(/* webpackChunkName: "404" */ "../views/Error404.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
