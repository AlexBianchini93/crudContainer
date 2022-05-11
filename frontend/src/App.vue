<template>
  <div id="app">
    <MyHeader title="CRUD CONTAINER" />
    <MyMenu />
    <MyContent />
  </div>
</template>

<script>

import MyHeader from '@/components/templates/MyHeader.vue';
import MyContent from '@/components/templates/MyContent.vue';
import MyMenu from '@/components/templates/MyMenu.vue';

export default {
  name: 'App',
  components: {
    MyHeader, MyMenu, MyContent 
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 60px 1fr;
  grid-template-columns: 150px 1fr;
  grid-template-areas: "header header" "menu content";
}

body {
  margin: 0;
}

</style>
