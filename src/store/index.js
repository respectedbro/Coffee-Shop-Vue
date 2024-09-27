import Vue from 'vue'
import Vuex from 'vuex'

import links from "@/store/links"
import bestsellersCards from "@/store/bestsellersCards";
import coffeeCards from "@/store/coffeeCards"
import goodsCards from "@/store/goodsCards"

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        bestsellersCards,
        coffeeCards,
        goodsCards,
        links,

    }
})

export default store