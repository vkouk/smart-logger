import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Auth from "./components/Auth";

Vue.use(Router);

export default new Router({
  mode: "history",
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
