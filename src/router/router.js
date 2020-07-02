import Vue from 'vue';
import Router from 'vue-router';

import vCatalog from './../components/v-catalog.vue';
import vCameras from './../components/v-cameras.vue';
import vTv from './../components/v-tv.vue';
import vProduct from './../components/v-product.vue';
import vCart from './../components/v-cart.vue';

Vue.use(Router);

let router = new Router({   
    routes: [
        {
            path: '/cameras',
            name: 'cameras',
            component: vCameras,
            props: true
        },  

        {
            path: '/cart',
            name: 'cart',
            component: vCart,
            props: true
        }, 

        {
            path: '/',
            name: 'catalog',
            component: vCatalog,
            props: true
        },

        {
            path: '/product',
            name: 'product',
            component: vProduct,
            props: true
        },

        {
            path: '/tv',
            name: 'tv',
            component: vTv,
            props: true
        },
    ]
})

export default router;