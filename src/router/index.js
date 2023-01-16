import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import(/* webpackChunkName: "profile" */ "../views/ProfileView.vue")
  },
  {
    path: "/illustration",
    name: "illustration",
    component: () => import(/* webpackChunkName: "illustration" */ "../views/IllustrationView.vue")
  },
  {
    path: "/message/:page",
    name: "message",
    component: () => import(/* webpackChunkName: "message" */ "../views/MessageView.vue")
  },
  {
    path: "/message",
    redirect: {
      name: "message",
      params: { page: "1" }
    }
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
