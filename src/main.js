import Vue from 'vue'
import App from './App.vue'

import router from "@/router";

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')


const counter = (a = 1, b) => {
    return a + b
}

console.log(counter(1, 2))
console.log(counter(3, 2))
console.log(counter(undefined, 4))
