<template >
 
 <div class="theBox">

  <div class="centerDiv" v-if="page=='manage'">
    <h3 style="margin:0 !important">遊戲管理 - 遊戲1 
      <a-button  icon="left-circle" @click="lastPage" size="small" style="margin-left:5px">回上一頁</a-button>
    </h3>
    <div class="topBox">
     <h3>場次查詢
    <a-input placeholder="編號" style="width:25%"/>
    <a-button danger style="margin-left:8px" >查詢</a-button>
    <a-button type="primary"  @click="addGame" style="margin-left:8px">新增比賽</a-button></h3>
    </div>

   
    <div class="bottomBox" >
       <h4>進行中: 0 未開賽: 1 已結束: 3</h4>
       <a-table class="ant-table-striped" :columns="columns" :data-source="data" bordered  
             :scroll="{ x: '100%'}"
       >
        <span slot="state" slot-scope="state">
          <div :key="state" v-if="state==1" >已結束</div>
          <div :key="state" v-if="state==0" >未開賽</div>
        </span>
        <span slot="button" slot-scope="button" class='btnDiv'>
        <div  v-for="btn in button" :key="btn">
      
              <a-button v-if="btn=='manerge'" style="background-color:green;color:#fff" >比賽管理</a-button>
    
              <a-button v-if="btn=='cancel'" style="background-color:red;color:#fff">取消比賽</a-button>
            
              <a-button v-if="btn=='gameReport'" style="background-color:blue;color:#fff">輸贏報表</a-button>
            
              <a-button v-if="btn=='gameResult'" style="background-color:blue;color:#fff">比賽結果</a-button>
         
             <!-- <div v-if="btn=='manerge'">
              <a-button style="background-color:green;color:#fff" >比賽管理</a-button>
            </div>
            <div v-if="btn=='cancel'">
              <a-button style="background-color:red;color:#fff">取消比賽</a-button>
            </div>
            <div v-if="btn=='gameReport'">
              <a-button style="background-color:blue;color:#fff">輸贏報表</a-button>
            </div>
            <div v-if="btn=='gameResult'">
              <a-button style="background-color:blue;color:#fff">比賽結果</a-button>
            </div>  -->
        </div>
        </span>
      </a-table>
    </div>
  </div >
   <div class="centerDiv" v-if="page=='addGame'"><addgame v-on:back="back"></addgame></div>
  </div>
</template>
<script>
import addgame from '../addgame'

const columns = [
  {title: '場次編號',dataIndex: 'name',key: 'name',align:'center',width:'150px'},
  {title: '狀態',dataIndex: 'state',key: 'state', scopedSlots: { customRender: 'state' },align:'center',width:'80px'},
  {title: '參賽鴿數',dataIndex: 'playerMount',key: 'playerMount',align:'center',width:'100px'},
  {title: '開始時間',key: 'start',dataIndex: 'start',align:'center',width:'150px'},
  {title: '結束時間',key: 'end',dataIndex: 'end',align:'center',width:'150px'},
  {title: '投注人數',key: 'donatePeopleCount',dataIndex: 'donatePeopleCount',align:'center',width:'100px'},
  {title: '投注金額',key: 'donateCount',dataIndex: 'donateCount',align:'center',width:'150px'},
  {title: '公司輸贏',key: 'decisionCompaney',dataIndex: 'decisionCompaney',align:'center',width:'150px'},
  {title: '操作',key: 'button',dataIndex: 'button', scopedSlots: { customRender: 'button' },align:'center',width:'200px'},
];

const data = [
  {key: '1',name: '20231064',state: 1,playerMount: 12345,start:'2021/10/29 08:00:00',
  end:'-',donatePeopleCount:'50',donateCount:'99999999',decisionCompaney:'555555555',
  button: ['manerge', 'cancel']},
  {key: '2',name: '20231065',state: 1,playerMount: 777,start:'2021/10/29 08:30:00',
  end:'2021/10/29 08:40:00',donatePeopleCount:'52',donateCount:'99999',decisionCompaney:'77777777',
  button: ['gameReport', 'gameResult']},
  {key: '3',name: '20231066',state: 0,playerMount: 888,start:'2021/10/29 08:40:00',
  end:'2021/10/29 08:50:00',donatePeopleCount:'33',donateCount:'9999999',decisionCompaney:'666666666',
  button: ['gameReport', 'gameResult']},
];

export default {
  components:{addgame},
  data() {
    return {
      data,
      columns,
      backFather:'main',
      page:'manage',
      
    };
  },
  methods:{
    addGame(){ this.page='addGame'},
    lastPage(){this.$emit('backFather', this.backFather)},
    back(chagePage){this.page=chagePage}
  }
};
</script>
<style scoped lang="less">

.ant-table-striped{margin: auto;}
.btnDiv{position:relative;float:left;width: 100%;display: flex;flex-direction: row;justify-content: center;align-items: center;}
.btnDiv div{
 position:relative;float:left;margin:0 2px 0 2px;
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