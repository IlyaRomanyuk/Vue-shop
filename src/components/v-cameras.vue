<template>

  <div class="cameras">
    <div class="cameras-inner">
      <h1>{{category.category}}</h1>
      <h3>{{category.description}}</h3>
        
      <vCamerasItem 
        v-for="item in CAMERAS"
        v-bind:info="item"
        v-bind:key="item['id']"/>
    </div>
  </div>

</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import vCamerasItem from './v-cameras-item';

export default {
  name: 'v-cameras',

  components: {
    vCamerasItem
  },

  props: {
      category: {
          type: Object,
          default() {
              return {}
          }
      } 
  },

  computed: {
    ...mapGetters([
      'CAMERAS'
    ])
  },

  methods: {
      ...mapActions([
      'GET_CAMERAS'
    ])
  },

  mounted() {
    this.GET_CAMERAS();
  }
    
}
</script>

<style>
  .cameras {
    background-color: #f1f1f1;
    width: 100%;
    padding: 10px;
  }

  .cameras-inner {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap
  }
</style>
