<template>
    <div>
        <NavBar />
        <SideBar />
        <div class="container">
            <div class="element delayed">
                <h2>Delayed</h2>
                <i class="el-icon-search d-icon"></i>
                <div class="order-item" v-for="i in 8" :key="i">
                    <el-avatar icon="el-icon-user-solid"></el-avatar>
                    <p>C01</p>
                    <p>22/10/2022</p>
                </div>
            </div>
            <div class="element all-orders">
                <i class="el-icon-search icon"></i>
                <div class="order-item" v-for="i in 8" :key="i">
                    <el-avatar icon="el-icon-user-solid"></el-avatar>
                    <p>C01</p>
                    <p>22/10/2022</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import NavBar from './NavBar.vue';
import SideBar from './SideBar.vue';

export default {
    name: 'OrdersPage',
    components: {
        NavBar,
        SideBar
    }
}
</script>

<style scoped>
.container{
    display: flex;
    margin-left: 10%;
    padding-top: 4%;
}
.delayed{
    background-color: white;
    width: 30%;
    height: 100%;
    margin: 1% 1%;
    border-radius: 3px;
}
.el-button{
    border: none;
}
.el-icon-search{
    margin: 5%;
    float: right;
    cursor: pointer;
    font-weight: bolder;
}
.d-icon{
    font-size: x-large;
}
.icon{
    font-size: xx-large;
    margin-left: 90%;
}
h2{
    margin-left: 4%;
    display: inline-block;
    margin-bottom: 20%;
}
p{
    font-weight: bold;
}
.order-item{
    display: flex;
    justify-content: space-between;
    margin: 2% 4%;
    border-radius: 3px;
    padding-right: 1%;
    background-color: #bdc5cb;
}
.el-avatar{
    background-color: #a83b62;
    margin: 1%;
}
.all-orders{
    width: 100%;
}
</style>