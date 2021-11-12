//跨域代理前缀
  const API_PROXY_PREFIX='http://ppqq.fortiddns.com:20080/api'
 const BASE_URL = process.env.NODE_ENV == 'production' ? process.env.VUE_APP_API_BASE_URL : API_PROXY_PREFIX
  //const BASE_URL = process.env.VUE_APP_API_BASE_URL
 const MOCK_URL ='http://dev.iczer.com'
// const BASE_URL = 'http://ppqq.fortiddns.com:20080/'
  console.log(BASE_URL,"BASE_URL",process.env.NODE_ENV ,process.env.NODE_ENV === 'development')
module.exports = {
  LOGIN: `${BASE_URL}/login`,
  ROUTES: `${MOCK_URL}/routes`,
  MLOGIN: `${BASE_URL}/auth/login`,
  MUSERPROFILE: `${BASE_URL}/auth/user-profile`
}
