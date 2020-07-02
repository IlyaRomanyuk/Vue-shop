<template>
    <div class="v-cart-item">
        <p>{{item['name']}}</p>
        <p>{{item['cost'] | toFix}}</p>
        <p>Количество: <span v-on:click="decrement">-</span> {{item['quantity']}} <span v-on:click="increment">+</span> </p>
        <img class="v-cart-img" v-bind:src="require('./../assets/images/' + item['image'])" alt="">
        <button v-on:click="removeFromCart" class="v-cart-delete">Удалить</button>
    </div>
</template>

<script>
import toFix from './../filters/valute'

    export default {
        name: 'v-cart-item',

        props: {
            item: {
                type: Object,
                default() {
                    return {}
                }
            }
        },

        filters: {
            toFix: toFix
        },

        methods: {
            removeFromCart: function() {
                this.$emit('removeFromCart', this.item)
            },

            increment: function() {
                this.$emit('increment', this.item)
            },

            decrement: function() {
                this.$emit('decrement', this.item)
            }
        },

        mounted() {
            this.$set(this.item, 'quantity', 1);
            console.log(this.item);
        }
    }
</script>

<style>
    .v-cart-item {
        max-width: 200px;
        width: 100%;
        height: auto;
        margin-right: 10px;
        padding: 10px;

        border: 1px solid #333;

        background-color: #ffe1f5;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        text-align: center;
    }

    .v-cart-img{
        max-width: 100px;
        display: block;
    }

    .v-cart-delete {
        background-color: red;
        color: #fff;
        padding: 7px 16px;
        border: 1px solid #333;
        border-radius: 10px;
        margin-top: 10px;
        cursor: pointer;
    }
</style>
