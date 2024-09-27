import Vue from 'vue'
import Vuex from 'vuex'

import links from "@/store/links"
import bestsellers from "@/store/bestsellers";
import coffee from "@/store/coffee"
import goods from "@/store/goods"

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        bestsellers: bestsellers,
        coffee: coffee,
        goods: goods,
        links,

    }
})

export default store