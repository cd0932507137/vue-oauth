<template>
  <div class="container">
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>登入成功</strong>
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <h1>用户信息</h1>
      <hr>
    <div class="row">
      <div class="col">
        <p>帳號: {{user.login}}</p>
        <p>用户id: {{user.id}}</p>
        <p>用户email: {{user.email}}</p>
        <p>
          用户url:
          <a :href="user.html_url" target="_blank">url</a>
        </p>
        <button @click="logout" class="btn btn-danger" style="cursor:pointer">登出</button>
      </div>
      <div class="col">
        <img :src="user.avatar_url" class="rounded mx-auto d-block" />
      </div>
    </div>
    <br />
    <!-- <button @click="res" style="cursor:pointer">獲取資源從資源服務器</button> -->
  </div>
</template>
<script>
export default {
  name: "userIndex",
  data() {
    return {
      user: {
        id: "",
        login: "",
        avatar_url: "",
        email: "",
        html_url: ""
      }
    };
  },
  methods: {
    checkLogin: function() {
      return this.$login.checkLogin(this);
    },
    login: function() {
      return this.$login.login(this);
    },
    logout: function() {
      this.$login.logout(this, "http://localhost:8080" + "/");
    },
    res: function() {
      this.$router.push("/res");
    },
    getUserInfo: function() {
      var tokenInfo = this.$token.loadToken();
      this.$ajax({
        url:
          this.$config.userInfoUri +
          "?" +
          "access_token=" +
          tokenInfo.access_token,
        headers: { Accept: "application/json" }
      })
        .then(response => {
          this.user = response.data;
          console.log("user", this.user);
        })
        .catch(error => {
          this.$root.push("/logout");
        });
    }
  },
  mounted: function() {
    if (this.checkLogin()) {
      this.getUserInfo();
    } else {
      this.login();
    }
  }
};
</script>

