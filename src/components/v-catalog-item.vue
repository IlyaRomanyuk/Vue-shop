<template>

    <div class="v-catalog-item">
        <img class="item-img" v-bind:src="require('./../assets/images/' + item['image'])" alt="">
        <p>{{item['name']}}</p>
        <p>{{item['cost']}}</p>
    </div>
     
</template>

<script>

export default {
  name: 'v-catalog-item',

  props: {
      item: {
          type: Object,
          default() {
              return {}
          }
      }
  }
}
</script>

<style>
    .v-catalog-item {
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

    .v-catalog-item img {
        max-width: 280px;
        width: 100%;
        display: block
    }
</style>
