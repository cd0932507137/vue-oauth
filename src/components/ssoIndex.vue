<template>
  <div class="container">
    <h1 v-show="!islogin">尚未登入</h1>
    <button @click="login" v-show="!islogin" class="btn btn-primary">登入</button>
    <h1 v-show="islogin">已登入</h1>
    <button @click="logout" v-show="islogin" class="btn btn-primary">登出</button>
  </div>
</template>

<script>
export default {
  name: 'ssoIndex',
  data () {
    return {
      islogin: false,
    }
  },
  methods:{
    checkLogin:function(){
      return this.$login.checkLogin(this);
    },
    login:function(){
      this.$login.login(this);
    },
    logout:function () {
      this.$login.logout(this,"http://localhost:8080"+"/");
    }
  },
  mounted:function () {
      this.islogin = this.checkLogin();
  }
}
</script>

<style>
</style>

