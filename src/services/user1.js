 //import {LOGIN, ROUTES} from '@/services/api'
import {ROUTES,MLOGIN,MUSERPROFILE} from '@/services/api'
import {request, METHOD, removeAuthorization} from '@/utils/request'







/**
 * 登录服务
 * @param name 账户名
 * @param password 账户密码
 * @returns {Promise<AxiosResponse<T>>}
 */
// export async function login(name, password) {
//   return request(LOGIN, METHOD.POST, {
//     name: name,
//     password: password
//   })
// }

export async function getRoutesConfig() {
  return request(ROUTES, METHOD.GET)
}

// http://192.168.1.107:8080/api/login的登入

export function login(name, password){
  return request(MLOGIN,METHOD.POST,{username:name ,password:password})
}



// 获取登入用户信息
export function userProfile(){
  return request(MUSERPROFILE,METHOD.GET)
}


/**
 * 退出登录
 */
export function logout() {
  localStorage.removeItem(process.env.VUE_APP_ROUTES_KEY)
  localStorage.removeItem(process.env.VUE_APP_PERMISSIONS_KEY)
  localStorage.removeItem(process.env.VUE_APP_ROLES_KEY)
  removeAuthorization()
}
export default {
  login,
  logout,
  getRoutesConfig,
  //ppqq的登录
  userProfile

}
