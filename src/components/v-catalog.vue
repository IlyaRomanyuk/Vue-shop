<template>
    <div class="v-catalog">
        <h3>Catalog</h3>
        <div class="v-catalog-wrapper">
            <vCatalogItem 
                v-for="product in products"
                v-bind:item="product"
                v-bind:key="product['id']"
            />
        </div>
    </div>
</template>

<script>
import vCatalogItem from './v-catalog-item.vue';

export default {
  name: 'v-catalog',

  components: {
      vCatalogItem
  },

  props: {
      products: {
          type: Object,
          default() {
              return {}
          }
      }
  }
}
</script>

<style>
    .v-catalog {
        width: 100%;
        background-color: #e7e7e7;
        padding: 5px 10px;
        color: #000;
    }

    .v-catalog-wrapper {
        padding: 0 15px;

        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
</style>
