<template>
  <aside class="menu">
    <div class="links"><router-link to="/">CONTAINERS</router-link></div>
    <div class="links"><router-link to="/movimentacoes">MOVIMENTAÇÕES</router-link></div>
    <div class="links"><router-link to="/relatorios">RELATÓRIOS</router-link></div>
  </aside>
</template>

<script>
export default {
    name: 'MyMenu'
}
</script>

<style>
    .menu {
        grid-area: menu;
        background: #1e81b0;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        font-size: 14px;
    }

    .links a{
        display:flex; 
        flex-direction: column;
        justify-content: center;
        text-align: center;
        flex-grow: 1;
        color: white;
        height: 120px;
        text-decoration: none;
        padding-top: 20px;
    }

    .links:hover {
        cursor: pointer;
        background-color: #1e4cb0;
    }

    .links a:hover {
        display:flex; 
        flex-direction: column;
        justify-content: center;
        text-align: center;
        flex-grow: 1;
        color: white;
        height: 120px;
        text-decoration: none;
        padding-top: 20px;      
    }
</style>