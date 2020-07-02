<template>
    <div class="v-cart">
        <h3>Корзина</h3>

        <div class='v-cart-inner'>
           <vCartItem 
                v-for="product in cart"
                v-bind:key="product['id']"
                v-bind:item="product"
                v-on:removeFromCart="removeFromCart"
                v-on:increment="increment"
                v-on:decrement="decrement"
           />
        </div>
        <p class="totalCost">Итоговая сумма: {{ totalPrice | toFix }}</p>
    </div>
</template>

<script>
import vCartItem from './v-cart-item.vue';
import { mapActions } from 'vuex';
import toFix from './../filters/valute';

    export default {
        name: 'v-cart',

        components: {
            vCartItem
        },

        filters: {
            toFix: toFix
        },

        computed: {
            totalPrice() {
                let total = 0;

                this.cart.forEach(element => {
                    total = total + (element.cost * element.quantity)  
                })

                return total;
            }
        },

        props: {
            cart: {
                type: Array,
                default() {
                    return []
                }
            }
        },

        data() {
            return {
                total: 0
            }
        },

        mounted() {
            console.log('cart is loaded')
        },

        methods: {
            ...mapActions(['REMOVE_FROM_CART', 'INCREMENT','DECREMENT']),

            removeFromCart: function(value) {
                this.REMOVE_FROM_CART(value)
            },

            increment: function(value) {
                this.INCREMENT(value)
            },

            decrement: function(value) {
                this.DECREMENT(value)
            }
        }
    }
</script>

<style>
    .v-cart {
        background-color: #f8f8f8;
        width: 100%;
        padding: 0 10px;
    }

    .v-cart-inner {
        background-color: #f8f8f8;

        display: flex;
        width: 100%;
        margin-top: 30px;
    }
</style>
