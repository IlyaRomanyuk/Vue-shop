<template>
    <div class="v-tv">
        <div class="v-tv-inner">
            <vTvItem 
            v-for="item in TV"
            v-bind:item="item"
            v-on:addToCart="addToCart"
            v-bind:key="item['id']"/>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import vTvItem from './v-tv-item.vue';

export default {
  name: 'v-tv',

  components: {
      vTvItem
  },

  computed: {
      ...mapGetters(['TV'])
  },

  methods: {
      ...mapActions(['GET_TV', 'ADD_TO_CART']),
      addToCart: function(value) {
        this.ADD_TO_CART(value)
      }
  },

  mounted() {
      this.GET_TV();
  }
    
}
</script>   

<style>
    .v-tv {
        background-color: #f1f1f1;
        width: 100%;
        padding: 10px;
    }

    .v-tv-inner {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap
    }
</style>
