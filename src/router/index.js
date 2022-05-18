import Vue from 'vue'
import VueRouter from 'vue-router'

//页面
import IndexPage from "@/components/index/IndexPage";
import PersonalPage from "@/components/personal/PersonalPage";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: IndexPage
  },
  {
    path: '/personal',
    name: 'personal',
    component: PersonalPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
