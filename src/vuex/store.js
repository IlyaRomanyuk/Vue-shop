import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations/mutations'
import staticAction from './actions/staticAction'
import apiAction from './actions/apiAction'
import getters from './getters/getters'

Vue.use(Vuex);

let actions = {...staticAction, ...apiAction};

const store = new Vuex.Store({
    state: {
        products: [],
        cameras: [],
        tv: [],
        product: {},
        cart: []
    },
    mutations,
    actions,
    getters
})

export default store;