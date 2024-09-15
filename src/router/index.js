import Vue from 'vue'
import VueRouter from 'vue-router'


import HeroView from "@/views/HeroView.vue"
import OurCoffee from "@/views/OurCoffee.vue"
import GoodsPage from "@/views/GoodsPage.vue"
import ContactsPage from "@/views/ContactsPage.vue";

Vue.use(VueRouter)

const routes = [
    {path: '/', component: HeroView},
    {path: '/our-coffee', component: OurCoffee},
    {path: '/goods-page', component: GoodsPage},
    {path: '/contacts-page', component: ContactsPage},
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router