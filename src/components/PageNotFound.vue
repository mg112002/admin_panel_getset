<template>
    <div>
        <NavBar />
        <SideBar />
        <h1 class="not-found">PAGE NOT FOUND</h1>
    </div>
</template>

<script>

import NavBar from './NavBar.vue';
import SideBar from './SideBar.vue'

export default {
    name: 'PageNotFound',
    components: {
        NavBar,
        SideBar
    },
}
</script>

<style scoped>
.not-found{
    padding-top: 5%;
    text-align: center;
}
</style>