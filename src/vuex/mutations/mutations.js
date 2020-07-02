export default {
    
    SET_GOODS_FROM_DATA: (state, data) => {
        state.products = data;
    },

    SET_CAMERAS: (state, data) => {
        state.cameras = data
    },

    SET_TV: (state, data) => {
        state.tv = data
    },

    SET_NEED_PRODUCT: (state, data) => {
        state.product = data
    },

    ADD_TO_CART: (state, data) => {
        if(state.cart.length) {
            let isElementExist = false;
            state.cart.forEach(element => {
                if(element.id == data.id) {
                    element.quantity++;
                    isElementExist = true
                }
            })

            if(!isElementExist) {
                state.cart.push(data)
            }

        } else {
            state.cart.push(data)
        }
    },

    REMOVE_FROM_CART: (state, data) => {
        let index = state.cart.indexOf(data);
        state.cart.splice(index, 1);   
    },

    INCREMENT: (state, data) => {
        let element = state.cart.find(element => {
            if(element.id == data.id) {
                return element;
            }
        })

        element.quantity++;
    },

    DECREMENT: (state, data) => {
        let element = state.cart.find(element => {
            if(element.id == data.id) {
                return element;
            }
        })

        if(element.quantity > 1) {
            element.quantity--
        }
    }
    
}