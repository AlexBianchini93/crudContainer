<template>
    <div class="content">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name:'MyContent'
}
</script>

<style>
    .content{
        grid-area: content;
        background-color: rgb(189, 192, 192);
        padding: 20px;
    }
</style>