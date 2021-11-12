<template>
<div >
 <div style="padding:12px;"><h2><a-icon type="setting"/>&nbsp;&nbsp;遊戲功能設置</h2></div>
 <div v-if="selectTemplate=='main'" class="main">
   
  <a-table  class="ant-table-striped" :columns="columns" 
  :data-source="data" bordered 
  :pagination="pagination"
  >
    <span slot="state" slot-scope="state">
      <div :key="state" v-if="state==1" >上架</div>
      <div :key="state" v-if="state==0" >維修</div>
    </span>
    <span slot="button" slot-scope="button" class='btnDiv'>
     <div  v-for="btn in button" :key="btn" >
          <a-button v-if="btn=='manerge'" style="background-color:blue;color:#fff" @click="onGameMen">遊戲管理</a-button>
          <a-button v-if="btn=='fix'" style="background-color:orange;color:#fff">維修</a-button>
          <a-button v-if="btn=='online'" style="background-color:green;color:#fff">上架</a-button>
          <a-button v-if="btn=='outline'" style="background-color:red;color:#fff">下架</a-button>     
     </div>
    </span>
  </a-table>

  
 </div>
 <!-- 跳转到模板 -->
 <div v-if="selectTemplate=='manage'"><manage v-on:backFather="backFather"></manage></div>
 
</div>
</template>

<script>
import manage from './manage'


const columns = [
  {title: '遊戲名稱',dataIndex: 'name',key: 'name',align:'center',width:'150px'},
  {title: '狀態',dataIndex: 'state',key: 'state',align:'center', scopedSlots: { customRender: 'state' },width:'150px'},
  {title: '當前人數',dataIndex: 'playerMount',key: 'playerMount',align:'center',width:'150px'},
  {title: '操作',key: 'button',dataIndex: 'button',align:'center',scopedSlots: { customRender: 'button' },width:'350px'}
];

const data = [
  {key: '1',name: '遊戲1',state: 1,playerMount: 12345,button: ['manerge', 'fix', 'online','outline']},
  {key: '2',name: '遊戲2',state: 1,playerMount: 777,button: ['manerge', 'fix', 'online','outline']},
  {key: '3',name: '遊戲3',state: 0,playerMount: 888,button: ['manerge', 'fix', 'online','outline']}
];

export default {
  components:{manage},
  data() {
    return {
      data,
      columns,
      selectTemplate:'main',
      pagination:{
        position:'bottom'
      }
    };
  },
  methods:{
    onGameMen(){
      this.selectTemplate='manage'
    },
    backFather(chagePage){
      this.selectTemplate=chagePage
    }
  }
};
</script>
<style scoped lang="less">
.main{background-color:#fff;width:98%;margin:auto;padding-top:5px;padding: 8px;}
.ant-table-striped{margin: auto;}
.ant-table-striped :deep(.table-striped) td {background-color:rgb(206, 192, 192)!important}
.btnDiv{position:relative;float:left;width: 100%;display: flex;flex-direction: row;justify-content: center;align-items: center;}
.btnDiv div{position:relative;float:left;margin:0 2px 0 2px;}



</style>