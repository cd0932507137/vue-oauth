<template>
  <div>
    <h1>來自資源服務器的數據</h1>
    <h2>
      資源服務器對應的用戶姓名：{{res.username}}
    </h2>
    <h2>
      提示信息：{{res.msg}}
    </h2>
    <button @click="logout"  style="cursor:pointer">登出</button>
  </div>
</template>

<script>
  export default {
    name: 'baseCasesItem',
    data () {
    return {
      resUri:this.$config.resUri+"/res",
      res:{
        msg:"",
        username:""
      }
    }
  },
    methods:{
      checkLogin:function(){
        return this.$login.checkLogin(this);
      },
      login:function(){
        this.$login.login(this)
      },
      logout:function () {
        this.$login.logout(this)
      },
      getResourceInfo:function () {
        var uri = this.resUri + "?access_token="+this.$token.loadToken().access_token;
        this.$ajax({
          url:uri,
          dataType: 'jsonp'
        })
          .then((response) =>{
            this.res = response.data;;
          })
          .catch((error)=> {
            alert(error);
          });
      }
    },
  mounted:function () {
    if(this.checkLogin()){
      this.getResourceInfo();
    }else {
      this.login();
    }
  }
}
</script>

<style>
</style>

