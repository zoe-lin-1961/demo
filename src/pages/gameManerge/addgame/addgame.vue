<template>
 <!-- <div class="theBox"> -->
 <div>  
 <div v-if="page=='addgame'">
   <h3>遊戲1 - 新增比賽  <a-button  icon="left-circle" @click="lastPage" size="small" style="margin-left:5px">回上一頁</a-button></h3>

   <div class="centerDiv">
      <!-- <h4>新增比賽 - 配置參賽賽鴿 - 賠率設置</h4> -->
      <h4>新增比賽 - 配置參賽條件 - 賠率設置</h4>
      <div style="width:45%;margin:auto">
      <!-- <h3>開始時間</h3>
       <a-date-picker class="mB" show-time>
        <template></template>
       </a-date-picker>
       <br/>
      <h3>失格時間</h3>
      <a-date-picker class="mB" show-time>
        <template></template>
       </a-date-picker>
       <br/> -->
      <h3>開始時間 到 失格時間</h3>
       <a-range-picker
       class="mB"
       style="width:100%"
       :show-time="{
        hideDisabledOptions: true,
        defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('23:59:59', 'HH:mm:ss')]}"
        format="YYYY-MM-DD HH:mm:ss"
       >
       <template></template>
       </a-range-picker>
       <br/>

      <h3>參賽信鴿數量</h3>
      <!-- <a-input v-model:value="value" placeholder="Basic usage" /> -->
      <a-input  class="mB" /> 
      <h3>比賽路線</h3>
      <a-input  class="mB" style="width:calc(50% - 8px)"/> - <a-input class="mB" style="width:calc(50% - 8px)"/> 
      <br/>
      <h3>比賽距離(km)</h3>
      <a-input class="mB" /> 
      
     <div style="margin-top:30px;margin-bottom:15px;text-align:center">
        <a-button type="primary" @click="setOdds">下一步</a-button>
        <a-button style="margin-left:15px">取消</a-button>
      </div>
      </div>
   </div>
 </div>
 <div v-if="page=='odds'"><Odds  v-on:fatherPage="fatherPage"></Odds></div>
 </div>
</template>
<script>
import Odds from '../odds';
import moment from 'moment';

export default {
  components:{Odds},
  data() {
    return {
      backFather:'manage',
      page:'addgame'
    };
  },
  methods:{
      moment,
      setOdds(){
         this.page='odds'
          //this.$router.push('/gameOptionSettingOdds')
      },
      lastPage(){
        this.$emit('back', this.backFather)
      },
      fatherPage(pageName){
        this.page=pageName
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
.btnDiv{position:relative;float:left;width: 100%;display: flex;flex-direction: row;justify-content: center;align-items: center;}
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