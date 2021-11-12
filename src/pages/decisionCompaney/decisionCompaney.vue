<template>
<div>
  <div style="padding:12px;"><h2><a-icon type="profile"/>&nbsp;&nbsp;公司輸贏</h2></div>
<div class="theBox" v-if="this.page=='remain'">

  <div class="centerDiv" >
    <div class="topBox">
      
     <h3>
    <a-tree-select
         v-model="gamekind"
         style="width:25%"
         :tree-data="gamekindData"
         tree-checkable
         :show-checked-strategy="SHOW_PARENT"
         placeholder="選擇 遊戲"
         :dropdownStyle="paywaydropdownStyle"
         allow-clear
    />

    <a-button danger style="margin-left:8px" @click="moreSearch">進階搜尋</a-button>
    <a-button type="primary"  style="margin-left:8px">查詢</a-button>
     <a-button type="primary"  style="margin-left:8px" @click="tobeExcel">匯出Excel</a-button>

    </h3>
    </div>

   
    <div class="bottomBox" >

        <div class="centerDiv" style="background-color:#FAFAFA;border:2px solid #d9d9d9;position:relative;float:left;padding:8px;margin:0;width:100%;height:auto;margin-bottom:3px">
                <div style="position:relative;float:left;width:100%">
                    <div style="position:relative;float:left;width:calc(100% / 5);text-align:center"><h5 style="margin-top: 5px;">總註冊數</h5><div>6</div></div>
                    <div style="position:relative;float:left;width:calc(100% / 5);text-align:center"><h5 style="margin-top: 5px;">總存款金額</h5><div>1,000.00</div></div>
                    <div style="position:relative;float:left;width:calc(100% / 5);text-align:center"><h5 style="margin-top: 5px;">總投注金額</h5><div>1,000.00</div></div>
                    <div style="position:relative;float:left;width:calc(100% / 5);text-align:center"><h5 style="margin-top: 5px;">公司輸贏總計</h5><div>1,000.00</div></div>
                    <div style="position:relative;float:left;width:calc(100% / 5);text-align:center"><h5 style="margin-top: 5px;">總有效投注</h5><div>+1,000.00</div></div>
                </div>
            </div> 
     
         <a-table class="ant-table-striped"  :columns="columns" :data-source="data" bordered  :scroll="{ x: '100%'}">
             <span slot="status" slot-scope="status">
                    <div class='btnDiv'>
                        <div v-if="status=='0'"><div class="smallBall" style="background-color:#2962FF"></div></div>
                        <div v-if="status=='1'"><div class="smallBall" style="background-color:#36BEA6"></div></div>
                        <div v-if="status=='2'"><div class="smallBall" style="background-color:#F62D51"></div></div>
                        <!-- <div v-if="status=='3'"><div class="smallBall" style="background-color:#FFBC34"></div></div> -->
                    </div>
              </span>
              <span slot="notice" slot-scope="notice" class='btnDiv'>
                   <div  v-for="btn in notice" :key="btn">
                 
                        <a-button v-if="btn=='savemoney'" style="background-color:blue;color:#fff" size="small">查看存款紀錄</a-button>
                    
                        <a-button  v-if="btn=='games'" style="background-color:blue;color:#fff" size="small">查看投注紀錄</a-button>
                 
                   </div>    
             </span>
         </a-table> 

            <a-modal title="進階搜尋" :visible="visible" @ok="handleOk" @cancel="handleCancel" 
                :centered="true" :maskClosable="false"
                >
                <div>
    
           <!-- <div style="position:relative;float:left;width:100%;">
           <h4 style="margin-bottom:2px">查詢三個月前歷史帳務</h4>
               <div style="margin-bottom:8px">
              <a-radio-group  v-model="conterTypeValue"   ><a-radio :value="1" @change="onChangeConterTypeValue">是</a-radio><a-radio :value="2" @change="onChangeConterTypeValue">否</a-radio></a-radio-group>
              </div>
           </div>   -->

            <div style="position:relative;float:left;width:100%;">
           <h4 style="margin-bottom:2px">選擇日期區間(轉帳時間00:00:00,超過查昨天的帳)</h4>
           <div style="margin-bottom:8px">
               <rangeCalender/>
            </div>
           </div>
           
         
          
       
  
           <h4 style="margin-bottom:2px">搜尋結果排序</h4>
            <div style="margin-bottom:8px">
              <a-input-group compact>
              <a-select default-value="number" style="width:120px;" size="small">
                <a-select-option value="number" >日期</a-select-option>
                <a-select-option value="time" >註冊數</a-select-option>
                <a-select-option value="before" >登入數</a-select-option>
                <a-select-option value="trademount" >存款人數</a-select-option>
                <a-select-option value="trademount" >存款金額</a-select-option>
                <a-select-option value="trademount" >投注金額</a-select-option>
                <a-select-option value="trademount" >公司輸贏</a-select-option>
                <a-select-option value="trademount" >有效投注</a-select-option>
                <a-select-option value="trademount" >投注人數</a-select-option>
              </a-select>
              <a-button size="small">升序</a-button><a-button size="small">降序</a-button>
              </a-input-group>
            </div>
           
         </div>
          <template slot="footer">
            <a-button type="primary" @click="handleOk">確定</a-button>
          </template>
             </a-modal>    


    </div>
  </div >

  </div>



  </div>
  

</template>
 
<script>
import moment from 'moment';
// import upperpoints from './upperpoints';
// import deletepoints from './deletepoints';
import rangeCalender from './rangeCalender';
import { TreeSelect } from 'ant-design-vue';

const SHOW_PARENT = TreeSelect.SHOW_PARENT;
const { export_json_to_excel } = require("@/utils/Export2Excel");

// import rangeCalender from './rangeCalender';





const columns = [
  {title: '日期',dataIndex: 'thedate',key: 'thedate',align:'center',width:'150px'},
  {title: '遊戲',dataIndex: 'gameName',key: 'gameName',align:'center',width:'100px'},
  {title: '註冊數',dataIndex: 'registMount',key: 'registMount',align:'center',width:'100px'},
  {title: '登錄數',dataIndex: 'loginMount',key: 'loginMount',align:'center',width:'100px'},
  {title: '存款金額',key: 'remainMoney',dataIndex: 'remainMoney',align:'center',width:'120px'},
  {title: '存款人數',key: 'remainMenberCount',dataIndex: 'remainMenberCount',align:'center',width:'120px'},
  {title: '投注金額',key: 'gameMoney',dataIndex: 'gameMoney',align:'center',width:'120px'},
  {title: '公司輸贏',key: 'company',dataIndex: 'company',align:'center',width:'120px'},
  {title: '有效投注',key: 'gamecount',dataIndex: 'gamecount',align:'center',width:'120px'},
  {title: '投注人數',key: 'gameMenberCount',dataIndex: 'gameMenberCount',align:'center',width:'100px'},
  {title: '操作',key: 'notice',dataIndex: 'notice',scopedSlots: { customRender: 'notice' },align:'center',width:'250px'},
];
const data=[
  {key: '1',gameName:'遊戲1',thedate:'2021/04/03',registMount:'3',loginMount: '2',remainMoney: '50,000',remainMenberCount:'999',
  gameMoney:'50,000',company:'1000.00',gamecount:'50,000',gameMenberCount:'50',notice:['savemoney','games']},
  {key: '2',gameName:'遊戲1',thedate:'2021/04/03',registMount:'3',loginMount: '2',remainMoney: '50,000',remainMenberCount:'999',
  gameMoney:'50,000',company:'1000.00',gamecount:'50,000',gameMenberCount:'50',notice:['savemoney','games']},
  {key: '3',gameName:'遊戲3',thedate:'2021/04/03',registMount:'3',loginMount: '2',remainMoney: '50,000',remainMenberCount:'999',
  gameMoney:'50,000',company:'1000.00',gamecount:'50,000',gameMenberCount:'50',notice:['savemoney','games']},
]
const gamekindData=[
    {title:'全選',value: '4',key: '4',children: [
      {title: '遊戲1',value: '5',key: '5'},
      {title: '遊戲2',value: '6',key: '6'},
      {title: '遊戲3',value: '7',key: '7'}
    ]
}]
    
export default {
//   components:{rangeCalender},
//  components:{upperpoints, deletepoints,rangeCalender},
components:{rangeCalender},
  created(){
  
    

  },

  data() {
    return {
        columns,
        data:data,
        visible:false,
        conterTypeValue:'',
        page:'remain',
        phone:'',
        visibleNotice:false,
        MadeNoteTitle:'',
        MadeNoteValue:'',
        tableScroll:{x:10},
        pagination:{pageSize:5},
        histitleName:'',
        customer:'',
        gamekind:[],
        gamekindData,
        SHOW_PARENT,
        paywaydropdownStyle:{height:'25vh'},
        showStatisticsState:false

        //gamekind:

    };
  },
  methods:{
    moment,

    moreSearch(){
      console.log("123456")
      this.visible=true
    },
    handleOk(){
      this.visible=false
    },
    handleCancel(){
      this.visible=false
    },
    onChangeConterTypeValue(e){
      this.conterTypeValue=e.target.value
    },
    chagePageName(data){
      console.log(data,"chagePageName....")
      this.page=data
    },
    toMadeNote(e){
      //获取会员编号
      var theName=e.path[5].childNodes[0].outerText.split('製')[1]
      console.log(theName,data)
      this.MadeNoteTitle="備註 ("+theName+")"
      this.visibleNotice=true
      this.MadeNoteValue=''
      
    },
    visibleNoticeOk(){
      this.visibleNotice=false
      //获取会员编号
      var name=this.MadeNoteTitle.split('(')[1].split(')')[0].replace(/^\s\s*/, '').replace(/\s\s*$/, '')
      if(this.MadeNoteValue.replace(/^\s\s*/, '').replace(/\s\s*$/, '').length!==0){
            this.data.map((item)=>{

            if(item.merberNumber[0]==name){
              item.notice[0]=this.MadeNoteValue
              item.notice[1]='modify'
              item.notice[2]='delete'
            }
          })

      }
      console.log(this.MadeNoteValue,"123",this.MadeNoteTitle,name,this.data[0].notice)
    },
    toMadeNoteDelete(e){
      var name =e.path[5].childNodes[0].innerText.split('製')[1].replace(/^\s\s*/, '').replace(/\s\s*$/, '')
      this.data.map((item)=>{

        if(item.merberNumber[0]==name){
          var arr=['notice']
          item.notice=arr
          console.log(item,"123")
          // item.notice[0]='notice'
          // delete item.notice[1]
          // delete item.notice[2]
        }
      })

      console.log(name,"1234")
    },
    visibleNoticeCancel(){
      this.visibleNotice=false
    },

    toUpperPoints(){
        this.page='upperpoints'
    },
    toDeletePoints(){
        this.page='deletepoints'
    },
    theTradeHis(e){
      var name =e.path[5].childNodes[0].innerText.split('製')[1].replace(/^\s\s*/, '').replace(/\s\s*$/, '')
      console.log(name,123456)
     // this.page='detaile'
      this.histitleName=name
      this.customer=name
    },
    copyName(e){
       var name =e.path[5].childNodes[0].innerText.split('製')[1].replace(/^\s\s*/, '').replace(/\s\s*$/, '')
       var that=this
       this.$copyText(name).then(function(e){
         console.log(e,'ok')
         that.$confirm({
                    title: '已成功複製',
                    content:'您已成功複製,可直接黏貼',
                    onOk() {
                    console.log('OK');
                    },
                    cancelButtonProps: { style: { display: 'none' } }                 
         })
       })
    },
    showStatistics(){
        this.showStatisticsState=!this.showStatisticsState
    },
    tobeExcel(){
      // console.log("123456789",data)
      var tHeader=[]
      var filterVal=[]
      var list=[]
      columns.map((c)=>{
        tHeader.push(c.title)
        filterVal.push(c.key)
      })
      this.data.map((d)=>{
        list.push(d)
      })
      
            
            require.ensure([], () => {
                // const tHeader = ["編號", "狀態", "會員", "交卷时间"];//字段对应的中文
                // const filterVal = ["name", "phone", "course", "createTime"]; //表格字段
                // const list = [{key:1,name:'may',phone:'0322',course:'777',createTime:'666'}];
                const data = this.formatJson(filterVal, list);
                export_json_to_excel(tHeader, data, "公司輸贏 列表");
            });
    },
    formatJson(filterVal, jsonData) {
      console.log(filterVal, jsonData,"filterVal, jsonData")
       return jsonData.map(v => filterVal.map(j => v[j]));
  

    } 

  
  }
};
</script>
 
<style scoped lang="less">
.ant-table-striped{margin: auto; }
.btnDiv{position:relative;float:left;width: 100%;display: flex;flex-direction: row;justify-content: center;align-items: center;}
.btnDiv div{position:relative;float:left;margin:0 2px 0 2px;}

.pageCenter{float: none !important; text-align: center}

// .ant-table-pagination {float: none !important; text-align: center}
.smallBallbox{position:relative;float:right;width:auto;height:auto;margin-bottom: 5px;}
.smallBallboxDiv{position:relative;float:left;margin-left:5px}
.smallBall{position: relative;float: left;width:15px;height: 15px;border-radius:30px ;margin-top: 3px;margin-right:3px}

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