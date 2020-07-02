export default {
    ADD_TO_CART({commit}, data) {
        commit('ADD_TO_CART', data)
    },

    REMOVE_FROM_CART({commit}, data) {
        commit('REMOVE_FROM_CART', data)
    },

    INCREMENT({commit}, data) {
        commit('INCREMENT', data)
    },

    DECREMENT({commit}, data) {
        commit('DECREMENT', data)
    }
}