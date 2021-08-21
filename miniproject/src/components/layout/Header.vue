<template>
    <div class="menu">
        <a v-for="k in menuItm" :key="k">{{k}}</a> 
    </div>
</template>
<script>
export default {
    data() {
        return {
            menuItm : ['Home','About']
        }
    },
}
</script>
<style>

.menu {
    background-color: darkslategrey;
    padding : 15px;
    border-radius: 5px;
}

.menu a {
    color : white;
    padding: 10px;
}
</style>