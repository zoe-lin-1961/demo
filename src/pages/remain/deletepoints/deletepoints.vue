<template>
 <!-- <div class="theBox"> -->
 <div class="theBox">  
 <div v-if="page=='deletepoints'" class="centerDiv">
   <h3>手動扣點  <a-button  icon="left-circle" @click="lastPage" size="small" style="margin-left:5px">回上一頁</a-button></h3>

   <div  class="centerDiv">
      <!-- <h4>新增比賽 - 配置參賽賽鴿 - 賠率設置</h4> -->
      <h4>手動扣點</h4>
      <div style="width:45%;margin:auto">
 


      <h3>帳號</h3>
      <!-- <a-input v-model:value="value" placeholder="Basic usage" /> -->
      <a-input  class="mB"  placeholder="帳號" /> 

      <h3>交易金額</h3>
      <!-- <a-input v-model:value="value" placeholder="Basic usage" /> -->
      <a-input  class="mB"  placeholder="交易金額" /> 

       <h3>備註</h3>
      <!-- <a-input v-model:value="value" placeholder="Basic usage" /> -->
      <a-input  class="mB"  placeholder="備註" /> 
    
      
     <div style="margin-top:30px;margin-bottom:15px;text-align:center">
        <a-button type="primary" @click="setOdds">確定</a-button>
        <a-button style="margin-left:15px">取消</a-button>
      </div>
      </div>
   </div>
 </div>
 <!-- <div v-if="page=='odds'"><Odds  v-on:fatherPage="fatherPage"></Odds></div> -->
 </div>
</template>
<script>
// import Odds from '../odds';
import moment from 'moment';

export default {
//   components:{Odds},
  data() {
    return {
      backFather:'remain',
      page:'deletepoints'
    };
  },
  methods:{
      moment,
      setOdds(){
        //  this.page='odds'
          //this.$router.push('/gameOptionSettingOdds')
      },
      lastPage(){
        this.$emit('chagePageName', this.backFather)
      },
    //   fatherPage(pageName){
    //     this.page=pageName
    //   }
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