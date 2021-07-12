import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import("@/views/home/Home")
const Category = () => import("@/views/category/Category")
const Profile = () => import("@/views/profile/Profile")
const Cart = () => import("@/views/cart/Cart")
const Detail = () => import("@/views/detail/Detail")

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: "/home"
    // component: Home
  },
  {
    path: '/home',
    component: Home
    // name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/category',
    component: Category
  },
  {
    path:"/detail",
    component:Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  
})

export default router
