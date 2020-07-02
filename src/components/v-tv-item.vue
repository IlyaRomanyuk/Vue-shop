<template>
    <div class="v-tv-item">
        <router-link class="link" :to="{name: 'product', params: {id: item['id']}}">

            <div>
                <img class="item-img" v-bind:src="require('./../assets/images/' + item['image'])" alt="">
                <p>{{item['name']}}</p>
                <p>{{item['cost']}}</p>
            </div>

        </router-link>

        <button v-on:click="addToCart" class="v-tv-button">В карзину</button>
    </div>
</template> 

<script>

export default {
  name: 'v-tv-item',

    props: {
        item: {
            type: Object,
            default() {
                return {}
            }
        }  
    },

    methods: {
        addToCart: function() {
            this.$emit('addToCart', this.item)
        }
    }
    
}
</script>   

<style>
    a {
        display: block;
        text-decoration: none;
    }

    .v-tv-item {
        padding: 5px 10px;

        background-color: #f9f9f9;
        border-radius: 10px;
        box-shadow: 15px 15px 30px 5px rgba(0,0,0,0.75);

        max-width: 320px;
        width: 100%;
        margin-top: 30px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .v-tv-item img {
        max-width: 280px;
        width: 100%;
        display: block
    }

    .v-tv-button {
        background-color: #397719;
        color: #fff;
        padding: 7px 14px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
</style>
