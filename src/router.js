import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home";
import Profile from "./components/Profile/Profile";
import Auth from "./components/Auth/Auth";
import NProgress from "nprogress";

Vue.use(Router);

const router = new Router({
  mode: "hash",
  linkExactActiveClass: "is-active",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/profile/:id",
      name: "profile",
      component: Profile
    },
    {
      path: "/auth",
      name: "auth",
      component: Auth
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (from.path !== to.path || from.path === to.path) {
    NProgress.start();
    NProgress.done();
    next();
  }
});

export default router;
