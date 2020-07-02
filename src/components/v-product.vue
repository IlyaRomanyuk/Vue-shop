<template>
    <div class="v-product">
        <h3 class="product-logo">Product</h3>
        <div class="v-product-item">
            <h5>{{PRODUCT[0]['name']}}</h5>
            <p>{{PRODUCT[0]['description']}}</p>
            <p>{{PRODUCT[0]['cost'] | element}}</p>
            <img class="item-img" v-bind:src="require('./../assets/images/' + PRODUCT[0]['image'])" alt="">
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {   
  name: 'v-product',

  props: {
      id: {
        type: Number
      }
  },

  computed: {
      ...(mapGetters(['PRODUCT']))
  },

  methods: {
      ...(mapActions(['GET_NEED_PRODUCT']))
  },

  watch: {
      id: function(newId) {
          if(newId) {
              this.GET_NEED_PRODUCT(newId);
          }
      }
  }, 

  filters: {
      element: function(value) {
          return value + ' ' + 'рублей';
      }
  }

}

</script>

<style>
    .v-product {
        background-color: #e1e1e1;
        padding: 0 10px;
        width: 100%;
        height: 100vh;
    }

    h3 {
        margin: 0;
    }

    .product-logo {
        padding-top: 10px;
    }

    .v-product-item {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }

    img {
        max-width: 300px;
        width: 100%;
        display: block;
    }

</style>
