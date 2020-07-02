import axios from 'axios'

export default {
    GET_GOODS_FROM_DATA({ commit }) {
        axios('http://localhost:3040', {
            method: "GET",
            headers: {
                'Access-Control-Allow-Origin': '*',
              }
        }).then(data => {
            commit('SET_GOODS_FROM_DATA', data.data)
        })
    },

    GET_CAMERAS({ commit }) {
        axios('http://localhost:3040/cameras', {
            method: "GET",
            headers: {
                'Access-Control-Allow-Origin': '*',
              }
        }).then(data => {
            commit('SET_CAMERAS', data.data)
        })
    },

    GET_TV({ commit }) {
        axios('http://localhost:3040/tv', {
            method: "GET",
            headers: {
                'Access-Control-Allow-Origin': '*',
              }
        }).then(data => {
            commit('SET_TV', data.data)
        })
    },

    GET_NEED_PRODUCT({commit}, params) {
        axios(`http://localhost:3040/product?id=${params}`, {
            method: "GET",
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        }).then(data => {
            console.log(data.data)
            commit('SET_NEED_PRODUCT', data.data)
        })
    }
}