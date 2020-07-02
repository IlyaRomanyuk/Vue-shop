<template>
  <div id="app">
    <vMainWrapper />
  </div>
</template>

<script>
import vMainWrapper from './components/v-main-wrapper';

export default {
  name: 'App', 

  components: {
    vMainWrapper
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
}
</style>
