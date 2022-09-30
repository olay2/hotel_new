import Vue from "vue";
import VueRouter from "vue-router";
import index from "../views/index.vue";
import Roompage from "../views/RoomPage.vue";
import RestaurantPage from "../views/RestaurantPage.vue";
import Activities from "../views/Activities.vue";
import Contact from "../views/Contact.vue";
import Login from "../views/login_register/Login.vue";
import Sigin from "../views/login_register/Signin.vue";
import viewDetails1 from "../views/Room/ViewDetails1.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: index,
  },
  {
    path: "/Roompage",
    name: "Roompage",
    component: Roompage,
  },
  {
    path: "/RestaurantPage",
    name: "RestaurantPage",
    component: RestaurantPage,
  },
  {
    path: "/Activities",
    name: "Activities",
    component: Activities,
  },
  {
    path: "/Contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/Sigin",
    name: "Sigin",
    component: Sigin,
  },
  {
    path: "/viewDetails1",
    name: "viewDetails1",
    component: viewDetails1,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
