import Vue from 'vue'
import VueRouter from 'vue-router'


import FirstPage from "@/views/FirstPage.vue";
import SecondPage from "@/views/SecondPage.vue";

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: FirstPage
        },
        {
            path: '/second',
            component: SecondPage
        }
    ]
})

export default router