<template>
  <header class="header">
    <h1>{{title}}</h1>
  </header>
</template>

<script>
export default {
  name: "MyHeader",
  
  props:{
    title: String
  }

};
</script>

<style>
    .header {
      grid-area: header;
      background-color: #1e81b0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
</style>