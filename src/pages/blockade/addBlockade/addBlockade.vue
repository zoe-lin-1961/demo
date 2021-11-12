<template>
  <div>
    <div class="theBox">
      <div class="centerDiv" >
        <h3>凍結玩家 / 新增凍結名單 <a-button  icon="left-circle" @click="lastPage" size="small" style="margin-left:5px">回上一頁</a-button></h3>
        <div style="width:45%;margin:auto">
        <h3><span class="rD">*</span>帳號</h3>
        <a-input class="mB" :value="username" placeholder="帳號" />
        <br/>
        <h3><span class="rD">*</span>原因</h3>
        <a-input class="mB" :value="password" placeholder="原因" />
        <br/>
        <h3>選擇類型</h3>
        <div style="margin-bottom:8px">
              <a-radio-group  v-model="conterTypeValue"   >
                <a-radio :value="1" @change="onChangeConterTypeValue">一般</a-radio>
                <a-radio :value="2" @change="onChangeConterTypeValue">無限期凍結</a-radio>
              </a-radio-group>
        </div>
    
        <h3>凍結期限</h3>
        <rangeCalender  :size="size" />
       
        <br/> 
        <h3>備註</h3>
        <a-input class="mB" :value="username" placeholder="備註" />
        <br/>
     


      <!-- <h3>暱稱</h3>
      <a-input class="mB" :value="name" placeholder="暱稱" />
      <br/>
      <h3>Email</h3>
      <a-input class="mB" :value="email" placeholder="Email" />
      <br/>
      <h3>備註</h3>
      <a-input class="mB" :value="notice" placeholder="備註" />
      <br/> -->
      
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
import rangeCalender from '../rangeCalender';
export default {
  components:{rangeCalender},
  data(){
    return {
      conterTypeValue:'',
      username:'',
      password:'',
      phone:'',
      name:'',
      email:'',
      notice:'',
      size:'default'
    }
  },

  methods:{
    lastPage(){
      console.log("789")
      this.$emit('chagePageName','blockade')
    },
    update(){
      console.log("123")
      this.$emit('chagePageName','blockade')
    },
    cancel(){
      console.log("456")
      // this.username=''
      // this.password=''
      // this.phone=''
      // this.name=''
      // this.email=''
      // this.notice=''
      this.$emit('chagePageName','blockade')
    },
    onChangeConterTypeValue(){

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