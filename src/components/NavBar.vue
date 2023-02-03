<template>
    <div class="navbar">
        <el-avatar icon="el-icon-user"></el-avatar>
        <h1>ADMIN PANEL</h1>
        <el-button icon="el-icon-switch-button" @click="logout"></el-button>
    </div>
</template>

<script>
export default {
    methods: {
        logout() {
            this.$router.push({ name: 'login' })
        }
    }

}
</script>

<style scoped>
.navbar{
    display:flex;
    justify-content: space-between;
    background: linear-gradient(90deg,rgba(37, 58, 75, 1), rgba(193, 58, 91, 1) 70%);
    position: fixed;
    width: 100%;
}
.el-avatar{
    background-color: #f23a5e;
    width: 3%;
    font-size: x-large;
    margin: 0.5% 2%;
}
.el-button{
    background: transparent;
    border:none;
    color:white;
    font-size: xx-large;
}
h1{
    color:white;
    margin:0.5%
}
</style>