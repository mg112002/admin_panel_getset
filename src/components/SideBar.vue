<template>
  <div class="sidebar">
    <div v-for="item in items" :key="item.name" class="content">
        <router-link :to="item.path">
        <h2>{{ item.name }}</h2>
        </router-link>
        <hr>
    </div>
  </div>
</template>

<script>
export default {
    name: 'SideBar',
    data() {
        return {
            items: [{ name: 'ACTIVE DP', path: '/activeDp' }, { name: 'ORDERS', path: '/orders' }, { name: 'NEW DP\'S', path: '/newDp' }, { name: 'QUERIES', path: '/queries' }]
        }
    }
}
</script>

<style scoped>
.sidebar{
    width: 10%;
    height: 100vh;
    position: fixed;
    display: flex;
    flex-direction: column;
    background-color:#253a4b;
    padding-top:5% ;
    margin-top: 3.5%;
}
a{
    text-decoration: none;
    color: white;
}
.content{
    color: white;
}
hr{
    color: white;
}
h2{
    text-align: center;
}
</style>