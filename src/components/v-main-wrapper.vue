<template>
    <div class="v-main-wrapper">
      <vHeader v-on:openMenu="changeState"/>

      <div v-if="isOpenMenu" class="menu">

        <div v-on:click="closeMenu" class="menu-close"></div>

        <ul>
          <router-link :to="{name: 'catalog', params: {products: PRODUCTS[0]}}">
            <div class="v-catalog-btn">Главная</div>
          </router-link>

          <router-link :to="{name: 'cameras', params: {category: PRODUCTS[1][1]}}">
            <div class="v-catalog-btn">Камеры</div>
          </router-link>

          <router-link :to="{name: 'tv', params: {category: PRODUCTS[1][0]}}">
            <div class="v-catalog-btn">Телевизоры</div>
          </router-link>

          <router-link :to="{name: 'cart', params: {cart: CART}}">
            <div class="v-catalog-btn">Корзина</div>
          </router-link>
        </ul>
      </div>

      <keep-alive>
        <router-view></router-view>
      </keep-alive>  
    </div>
</template>

<script>
import vHeader from './v-header.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'v-main-wrapper',

  components: {
    vHeader
  }, 

  computed: {
    ...mapGetters([
        'PRODUCTS',
        'CART'
    ])
  },

  data() {
    return {
      isOpenMenu: false
    }
  },

   methods: {
    ...mapActions([
      'GET_GOODS_FROM_DATA'
    ]),

    changeState: function(value) {
      this.isOpenMenu = value;
    },

    closeMenu: function() {
      this.isOpenMenu = false;
    } 
  },

  mounted() {
    this.GET_GOODS_FROM_DATA();
  }
}
</script>

<style>
    .menu {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;

      padding: 10px 20px;
      width: 25%;
      height: 100vh;
      background-color: #FFE4B5;
    }

    .menu-close::after {
      content: 'Х';
      position: absolute;

      top: 10px;
      right: 10px;
      cursor: pointer;
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .v-main-wrapper {
      position: relative;

      max-width: 1140px;
      width: 100%;
      margin: 0 auto;
    }
</style>
