<template>
  <div>
    <img class="bg-image" src="@/../public/background.png" alt="background-image">
    <div class="login-container">
        <div class="flex-container">
          <img src="@/../public/login.png" alt="login-image">
        </div>
        <div class="flex-container">
          <h1>ADMIN</h1>
          <el-input v-model="username" placeholder="Username" clearable>
            <i class="el-icon-user-solid" slot="prefix"></i>
          </el-input>
          <el-input v-model="password" type="password" placeholder="Password" show-password class="pass">
            <i class="el-icon-lock" slot="prefix"></i>
          </el-input>
          <router-link to="/resetPass">Forgot Password? </router-link>
          <el-button @click="login">Login</el-button>
        </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      this.$router.push({name:'orders' })
    }
  }
}
</script>

<style scoped>
img{
  width: 100%;
  height: 100%;
}
.bg-image{
  position: fixed;
  z-index: -1;
}
.login-container{
  position: absolute;
  margin: 12% 20%;
  width: 60%;
  height: 50%;
  border-radius: 20px;
  display: flex;
  background-image:linear-gradient(rgba(255, 255, 255, 0.8),rgba(0, 0, 0, 0.4));
}
.flex-container{
  width: 50%;
}
h1{
  text-align: center;
  font-size: 2.5rem;
}
.el-input{
  width: 60%;
  margin: 3% 20%;
}
i{
  font-size: x-large;
  margin: 10% 5%;
}
a{
  color:white;
  text-decoration: none;
  margin: 20%;
}
.el-button{
  background-color: #f23a5e;
  border: none;
  color: white;
  font-size: medium;
  padding: 5px;
  border-radius: 5px;
  width: 4rem;
}
.el-button:hover{
  background-color: #f23a5e;
  opacity: 0.7;
  color: white;

}
.pass{
  margin-bottom: 8%;
}
</style>
