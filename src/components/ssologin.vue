<template>
  <div>
  </div>
</template>

<script>
export default {
  name: 'ssologin',
  data () {
    return {
      state:"",
      code:"",
    }
  },
  methods:{
    getToken:function(){
      this.$token.getTokenFromService(this,this.code,(response)=>{
        this.$token.savetoken(response.data);
        this.$router.push('/user');
      },function (error) {
        alert(error);
      });
    }
  },
  mounted:function () {
    // code：表示授權碼，必選項。該碼的有效期應該很短，通常設為10分鐘，客戶端只能使用該碼一次，否則會被授權服務器拒絕。該碼與客戶端ID和重定向URI，是一一對應關係。
    this.code = this.$route.query.code;
    // state：如果客戶端的請求中包含這個參數，認證服務器的回應也必須一模一樣包含這個參數。
    this.state = this.$route.query.state;
    this.getToken();
  }
}
</script>

<style>
</style>