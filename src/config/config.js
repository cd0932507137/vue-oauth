var config={
  baseOAuthUrl: 'https://github.com/',
  // 請求授權地址
  userAuthorizationUri: 'https://github.com/login/oauth/authorize',
  // accessToken請求地址
  accessTokenUrl : '/github/login/oauth/access_token',
  // 用戶信息請求地址
  userInfoUri: 'https://api.github.com/user',
  // 登出請求地址
  logoutUri: 'https://github.com/logout',
  // 項目地址
  localuri : 'http://localhost:8080',
  redirect_uri : 'http://localhost:8080/login',
  // 案例資源服務器地址
  resUri: 'http://localhost:8080',
  // 客戶端相關標識，請從認證服務器申請
  clientId: 'Iv1.756d0d5f28610bb1',
  client_secret: '67a51ddb90221b6baf32c036b7694534400f3a14',
  // 申請的權限範圍
  scope: 'read_user',
  // 可選參數，客戶端的當前狀態，可以指定任意值，用於校驗，此次案例不做相關認證
  state: '',
  // 一些固定的請求參數
  response_type: 'token',
  grant_type : 'authorization_code',
  code: '',
}

export default config;