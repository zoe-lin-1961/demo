<template>
 <div >
      <div v-if="page=='odds'" class="theBox" >
        <h3>遊戲1 - 新增比賽 <a-button  icon="left-circle" @click="lastPage" size="small" style="margin-left:5px">回上一頁</a-button></h3>

        <div class="centerDiv">
            <!-- <h4>新增比賽 - 配置參賽賽鴿 - 賠率設置</h4> -->
            <h4>新增比賽 - 配置參賽條件 - 賠率設置</h4>
            <div>
                <a-table :columns="columns" :data-source="data" bordered  >
                  <span slot="button" slot-scope="button"  class='btnDiv'>
                  <div v-for="btn in button" :key="btn">
        
                        <a-button v-if="btn=='edit'" style="background-color:blue;color:#fff">編輯</a-button>
                 
                    
                        <a-button v-if="btn=='quote'" style="background-color:blue;color:#fff">引用</a-button>
               
                  </div>
                  </span>
                </a-table>
            </div>
            <div style="margin-top:30px;margin-bottom:15px;text-align:center">
              <a-button type="primary" @click="nextPage">下一步</a-button>
              <a-button style="margin-left:15px">取消</a-button>
            </div>
        </div>
      </div>
      <div v-if="page=='openplate'"><openpalte v-on:fPage="fPage"></openpalte></div> 
 </div>
</template>
<script>
 import openpalte from '../openpalte';
const columns = [
  {title: '編號',dataIndex: 'num',key: 'num',align:'center'},
  {title: '公環編號',dataIndex: 'code',key: 'code',align:'center'},
  {title: '呼號',dataIndex: 'name',key: 'name',align:'center'},
  {title: '羽色',key: 'color',dataIndex: 'color',align:'center'},
  {title: '性別',key: 'sex',dataIndex: 'sex',align:'center'},
  {title: '血系',key: 'blood',dataIndex: 'blood',align:'center'},
  {title: '操作',key: 'button',dataIndex: 'button',scopedSlots: { customRender: 'button' },align:'center'},
];

const data = [
  {key: '1',num: '1',code: '2023-270892',name: '火腿腸',color:'灰',sex:'公',blood:'肉鬆系',button: ['edit', 'quote']},
  {key: '2',num: '2',code: '2023-270892',name: '熱乾面',color:'灰',sex:'公',blood:'川系',button: ['edit', 'quote']},
  {key: '3',num: '3',code: '2023-270892',name: '榨菜',color:'白',sex:'母',blood:'派系',button: ['edit', 'quote']},
];

export default {
   components:{openpalte},
  data() {
    return {
        columns,
        data,
        page:'odds',
        fatherPage:'addgame'
    };
  },
  methods:{
    lastPage(){
      this.$emit('fatherPage',this.fatherPage)
    },
    nextPage(){
      this.page='openplate'
    },
    fPage(page){
      this.page=page
    }
  }
};
</script>
<style scoped lang="less">
.ant-table-striped{margin: auto;}
.ant-table-striped :deep(.table-striped) td {background-color:rgb(206, 192, 192)!important}
.btnDiv{position:relative;float:left;width: 100%;display: flex;flex-direction: row;justify-content: center;align-items: center;}
.btnDiv div{
 position:relative;float:left;margin:0 2px 0 2px
}
.theBox{height: auto; width: 100%;color: #fff;overflow:hidden;

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