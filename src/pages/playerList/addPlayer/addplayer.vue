<template>
  <div>
    <div class="theBox">
      <div class="centerDiv" >
        <h3>新增玩家 <a-button  icon="left-circle" @click="lastPage" size="small" style="margin-left:5px">回上一頁</a-button></h3>
         <div style="width:45%;margin:auto">
      <h3><span class="rD">*</span>帳號</h3>
        <a-input class="mB" :value="username" placeholder="帳號 / 帳號至少4碼" />
       <br/>
      <h3><span class="rD">*</span>密碼</h3>
      <a-input class="mB" :value="password" placeholder="密碼" />
       <br/>
      <h3><span class="rD">*</span>手機號碼</h3>
      <!-- <a-input v-model:value="value" placeholder="Basic usage" /> -->
      <div class="mB">
        <a-input-group compact>
             <a-select default-value="886" style="width: 30%" >
              <a-select-option value="886" >台灣(+886)</a-select-option>
              <a-select-option value="86" >中國大陸(+86)</a-select-option>
            </a-select>
            <a-input :value="phone" style="width: 70%" />
        </a-input-group>    
      </div>

      <h3>暱稱</h3>
      <a-input class="mB" :value="name" placeholder="暱稱" />
      <br/>
      <h3>Email</h3>
      <a-input class="mB" :value="email" placeholder="Email" />
      <br/>
      <h3>備註</h3>
      <a-input class="mB" :value="notice" placeholder="備註" />
      <br/>
      
     <div style="margin-top:30px;margin-bottom:15px;text-align:center">
      <a-button type="primary" @click="update">查詢</a-button>
      <a-button style="margin-left:15px" @click="cancel">取消</a-button>
      </div>
      </div>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  data(){
    return {
      username:'',
      password:'',
      phone:'',
      name:'',
      email:'',
      notice:''
    }
  },

  methods:{
    lastPage(){
      console.log("789")
      this.$emit('chagePageName','playList')
    },
    update(){
      console.log("123")
      this.$emit('chagePageName','playList')
    },
    cancel(){
      console.log("456")
      // this.username=''
      // this.password=''
      // this.phone=''
      // this.name=''
      // this.email=''
      // this.notice=''
      this.$emit('chagePageName','playList')
    }
  }
};
</script>
 
<style scoped lang="less">
.ant-table-striped{margin: auto;}
.ant-table-striped :deep(.table-striped) td {background-color:rgb(206, 192, 192)!important}
.mB{margin-bottom:10px}
.rD{color:red ;}
h3{margin-bottom:2px !important}
.btnDiv div{
 position:relative;float:left;margin:0 2px 0 2px
}
.theBox{height: auto; width: 100%;color: #fff;

  .centerDiv{
     display: block;width:98%;margin:auto;background-color: #fff;padding: 8px;color: #333;
     h5{margin-top: 15px;}
     .top{
         display: block;height: auto;
        .scoreDiv{position: relative;float: left;width: 100%;height: auto;}
     }
     .bottom{display: block;}
  }
  .topBox{
    display: block;padding: 8px;width: 100%;height: auto;border:2px solid #d9d9d9;background-color: #fafafa;margin:10px 0;
    h3{margin:0 !important}
  }
  .bottomBox{display: block;display: block;padding: 8px;width: 100%;height: auto;}
}

</style>