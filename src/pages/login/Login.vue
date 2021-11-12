<template>
  <common-layout>
    <div class="top">
      <div class="header">
        <!-- <img alt="logo" class="logo" src="@/assets/img/logo.png" /> -->
        <!-- <span class="title">{{systemName}}</span> -->
        <span class="title" >後台系統登入</span>
      </div>
      <!-- <div class="desc">Ant Design 是西湖区最具影响力的 Web 设计规范</div> -->
    </div>
    <div class="login" style="margin-top:30px;">
      <a-form @submit="onSubmit" :form="form"  style="padding:15px;">
        <!-- <a-tabs size="large" :tabBarStyle="{textAlign: 'center'}" style="padding: 0 2px;">
          <a-tab-pane  key="1"> -->
            <a-alert type="error" :closable="true" v-if="error" :message="error" @close='onClose' showIcon style="margin-bottom: 24px;" />
            <a-form-item>
              <a-input
                autocomplete="autocomplete"
                size="large"
                placeholder="請輸入帳號"
                v-decorator="['name', {rules: [{ required: true, message: '請輸入帳號', whitespace: true}]}]"
              >
                <a-icon slot="prefix" type="user" />
              </a-input>
            </a-form-item>
             <a-form-item>
              <a-input
                size="large"
                placeholder="請輸入密碼"
                autocomplete="autocomplete"
                type="password"
                v-decorator="['password', {rules: [{ required: true, message: '請輸入密碼', whitespace: true}]}]"
              >
                <a-icon slot="prefix" type="lock" />
              </a-input>
            </a-form-item>
            <a-form-item>
               <a-input-group compact>
              <a-input 
                size="large"
                placeholder="驗證碼"
                style="width:50%;"
                v-model="inputRandom"
                :value="inputRandom"
              ></a-input>
              <a-form-item style="width:50%;height:39px;">
                   <random v-on:changeCode="theChangeCode"/>
              </a-form-item>
              </a-input-group>
            </a-form-item>
          <!-- </a-tab-pane> -->
          <!-- <a-tab-pane tab="手机号登录" key="2">
            <a-form-item>
              <a-input size="large" placeholder="mobile number" >
                <a-icon slot="prefix" type="mobile" />
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-row :gutter="8" style="margin: 0 -4px">
                <a-col :span="16">
                  <a-input size="large" placeholder="captcha">
                    <a-icon slot="prefix" type="mail" />
                  </a-input>
                </a-col>
                <a-col :span="8" style="padding-left: 4px">
                  <a-button style="width: 100%" class="captcha-button" size="large">获取验证码</a-button>
                </a-col>
              </a-row>
            </a-form-item>
          </a-tab-pane> -->
        <!-- </a-tabs> -->
        <div>
          <!-- <a-checkbox :checked="true" >自动登录</a-checkbox> -->
          <!-- <a style="float: right">忘记密码</a> -->
        </div>
        <a-form-item>
          <a-button :loading="logging" style="width: 100%;margin-top: 24px" size="large" htmlType="submit" type="primary">登入</a-button>
        </a-form-item>
        <div>
          <!-- 其他登录方式
          <a-icon class="icon" type="alipay-circle" />
          <a-icon class="icon" type="taobao-circle" />
          <a-icon class="icon" type="weibo-circle" /> -->
          <!-- <router-link style="float: right" to="/dashboard/workplace" >注册账户</router-link> -->
        </div>
      </a-form>
    </div>
  </common-layout>
</template>

<script>
import CommonLayout from '@/layouts/CommonLayout'

import {login, getRoutesConfig,userProfile} from '@/services/user'
// import {Login, getRoutesConfig} from '@/services/user'
import {setAuthorization} from '@/utils/request'
import {loadRoutes} from '@/utils/routerUtil'
import {mapMutations} from 'vuex'
import random from './random'
export default {
  name: 'Login',
  components: {CommonLayout,random},
  data () {
    return {
      logging: false,
      error: '',
      form: this.$form.createForm(this),
      randomCode:'',
      inputRandom:''
    }
  },
  computed: {
    // systemName () {
    //   return this.$store.state.setting.systemName
    //   //return "後台系統登入"
    // }
  },
  methods: {
    ...mapMutations('account', ['setUser', 'setPermissions', 'setRoles']),
    onSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err) => {
        if (!err) {
          this.logging = true
          const name = this.form.getFieldValue('name')
          const password = this.form.getFieldValue('password')
          
          console.log(this.randomCode,this.inputRandom,"hongli")
          if(Number(this.randomCode)!==Number(this.inputRandom)){
            this.$confirm({
                    title: '請確認驗證碼',
                    content:'請輸入正確的驗證碼',
                    onOk() {
                    console.log('OK');
                    location.reload()
                    },
                    cancelButtonProps: { style: { display: 'none' } }                 
            })
          }else{
                login(name, password).then(this.afterLogin)
                  login(name, password).then((res)=>{
                    console.log(res.data.token,"123")

                    if(res.data.token!==undefined){

                    var token= res.data.token
                      this.getUserData(token)
                    }
                  }).catch((err)=>{
                    this.$confirm({
                    title: '帳號 / 密碼 錯誤',
                    content:'請輸入正確的 帳號 / 密碼',
                    onOk() {
                    console.log('OK',err);
                    location.reload()
                    },
                    cancelButtonProps: { style: { display: 'none' } }                 
            })
                  })
             }
        }
      })
    },
    getUserData(token){
      var today=''
      var y=new Date().getFullYear()
      var m=new Date().getMonth()+1
      var d=new Date().getDate()
      if(m<10){m='0'+m}
      if(d<10){d='0'+d}
      today=y+'-'+m+'-'+d+' 23:59:59'
      setAuthorization({token: token, expireAt: new Date(today)})
      userProfile().then((res)=>{
        console.log(res.data,"userpropfile")
        var baseData=res.data
        console.log(this,"THIS...")
        this.setUser(baseData)
     
          //loadRoutes(result.data)
          this.$router.push('/playerList')
        //
      })
    },
    afterLogin(res) {
      this.logging = false
      const loginRes = res.data
      if (loginRes.code >= 0) {
        const {user, permissions, roles} = loginRes.data
        this.setUser(user)
        this.setPermissions(permissions)
        this.setRoles(roles)
        setAuthorization({token: loginRes.data.token, expireAt: new Date(loginRes.data.expireAt)})
        // 获取路由配置
        getRoutesConfig().then(result => {
          const routesConfig = result.data.data
          loadRoutes(routesConfig)
          this.$router.push('/playerList')
          this.$message.success(loginRes.message, 3)
        })
      } else {
        this.error = loginRes.message
      }
    },
    onClose() {
      this.error = false
    },
    theChangeCode(v){
      this.randomCode=v
    }
  }
}
</script>

<style lang="less" scoped>
  .common-layout{
    .top {
      text-align: center;
      .header {
        height: 44px;
        line-height: 44px;
        a {
          text-decoration: none;
        }
        .logo {
          height: 44px;
          vertical-align: top;
          margin-right: 16px;
        }
        .title {
          font-size: 33px;
          color: @title-color;
          font-family: 'Myriad Pro', 'Helvetica Neue', Arial, Helvetica, sans-serif;
          font-weight: 600;
          position: relative;
          top: 2px;
        }
      }
      .desc {
        font-size: 14px;
        color: @text-color-second;
        margin-top: 12px;
        margin-bottom: 40px;
      }
    }
    .login{
      width: 368px;
      margin: 0 auto;
      @media screen and (max-width: 576px) {
        width: 95%;
      }
      @media screen and (max-width: 320px) {
        .captcha-button{
          font-size: 14px;
        }
      }
      .icon {
        font-size: 24px;
        color: @text-color-second;
        margin-left: 16px;
        vertical-align: middle;
        cursor: pointer;
        transition: color 0.3s;

        &:hover {
          color: @primary-color;
        }
      }
    }
  }
</style>
