<template>
<div>
  <div style="padding:12px;"><h2><a-icon type="tool"/>&nbsp;&nbsp;修改玩家餘額</h2></div>
<div class="theBox" v-if="this.page=='remain'">

  <div class="centerDiv" >
        <a-button danger style="margin-left:8px;background-color:green;color:#fff" @click="toUpperPoints">手動上分</a-button>
    <a-button danger style="margin-left:8px;background-color:red;color:#fff" @click="toDeletePoints">手動扣點</a-button>
    <div class="topBox">
      
     <h3>
    <a-tree-select
         v-model="uppointskind"
         style="width:25%"
         :tree-data="uppointskindData"
         tree-checkable
         :show-checked-strategy="SHOW_PARENT"
         placeholder="選擇 上分/扣點 類型"
         :dropdownStyle="paywaydropdownStyle"
         allow-clear
    />
    <!-- <a-button danger style="margin-left:8px;background-color:green;color:#fff" @click="toUpperPoints">手動上分</a-button>
    <a-button danger style="margin-left:8px;background-color:red;color:#fff" @click="toDeletePoints">手動扣點</a-button> -->
    <a-button danger style="margin-left:8px" @click="moreSearch">進階搜尋</a-button>
    <a-button type="primary"  style="margin-left:8px">查詢</a-button>
     <a-button type="primary"  style="margin-left:8px" @click="tobeExcel">匯出Excel</a-button>

    </h3>
    </div>

   
    <div class="bottomBox" >
        <a-button type="primary"  style="margin-bottom:5px"  @click="showStatistics">查看訂單統計</a-button>
        <div v-if="showStatisticsState==true" class="centerDiv" style="background-color:#FAFAFA;border:2px solid #d9d9d9;position:relative;float:left;padding:8px;margin:0;width:100%;height:auto;margin-bottom:3px">
                <div style="position:relative;float:left;width:50%">
                    <h3>總計</h3>
                    <div style="position:relative;float:left;width:calc(100% / 3)"><h5>交易金額</h5><div>1,000.00</div></div>
                    <div style="position:relative;float:left;width:calc(100% / 3)"><h5>實際金額</h5><div>+1,000.00</div></div>
                    <div style="position:relative;float:left;width:calc(100% / 3)"><h5>數量</h5><div>8.00</div></div>
                </div>
                <div style="position:relative;float:left;width:50%">
                    <h3>本頁小計</h3>
                    <div style="position:relative;float:left;width:calc(100% / 3)"><h5>交易金額</h5><div>1,000.00</div></div>
                    <div style="position:relative;float:left;width:calc(100% / 3)"><h5>實際金額</h5><div>+1,000.00</div></div>
                    <div style="position:relative;float:left;width:calc(100% / 3)"><h5>數量</h5><div>5.00</div></div>
                </div>
            </div> 
        <div v-if="showStatisticsState==false" class="smallBallbox" >
                <div class="smallBallboxDiv"><div class="smallBall" style="background-color:#2962FF"></div>有效</div>
                <div class="smallBallboxDiv"><div class="smallBall" style="background-color:#36BEA6"></div>已處理</div>
                <div class="smallBallboxDiv"><div class="smallBall" style="background-color:#F62D51"></div>無效</div>
                <!-- <div class="smallBallboxDiv"><div class="smallBall" style="background-color:#FFBC34"></div>金流待付審核中</div> -->
        </div>
         <a-table class="ant-table-striped"  :columns="columns" :data-source="data" bordered  :scroll="{ x: '100%'}" >
             <span slot="status" slot-scope="status">
                    <div class='btnDiv'>
                        <div v-if="status=='0'"><div class="smallBall" style="background-color:#2962FF"></div></div>
                        <div v-if="status=='1'"><div class="smallBall" style="background-color:#36BEA6"></div></div>
                        <div v-if="status=='2'"><div class="smallBall" style="background-color:#F62D51"></div></div>
                        <!-- <div v-if="status=='3'"><div class="smallBall" style="background-color:#FFBC34"></div></div> -->
                    </div>
              </span>
              <!-- <span slot="notice" slot-scope="notice">
                   <div class='btnDiv' v-for="btn in notice" :key="btn">
                       <div v-if="btn=='notice'">
                        <a-button style="background-color:blue;color:#fff">檢視</a-button>
                        </div>
                   </div>    
             </span> -->
              <span slot="notice" slot-scope="notice" >
            <span  v-for="btn in notice" :key="btn">
                <div v-if="btn=='notice'" class='btnDiv'>
                  <a-button style="background-color:blue;color:#fff" @click="toMadeNote">檢視</a-button>
                </div>               
                <span v-if="btn!=='notice' && btn!=='modify' && btn!=='delete'" class='btnDiv'>{{btn}}</span>
         
                <a-button v-if="btn=='modify'" style="background-color:blue;color:#fff;margin-left:3px" @click="toModifyNote" icon="edit" size="small"></a-button>
    
                <a-button v-if="btn=='delete'" style="background-color:blue;color:#fff;margin-left:3px" @click="toMadeNoteDelete" icon="delete" size="small"></a-button>

                <!-- 备注的弹窗 开始 -->
                <a-modal :title="MadeNoteTitle" :maskStyle="maskStyle" :visible="visibleNotice" @ok="visibleNoticeOk" @cancel="visibleNoticeCancel" :centered="true" :maskClosable="false">

                    <a-textarea
                        v-model="MadeNoteValue"
                        placeholder="請輸入備註"
                        :auto-size="{ minRows: 3, maxRows: 5 }"
                      />
                </a-modal>

                <!-- 备注的弹窗 结束 -->
            </span>
            </span>
         </a-table> 

            <a-modal title="進階搜尋" :visible="visible" @ok="handleOk" @cancel="handleCancel" 
                :centered="true" :maskClosable="false"
                >
                <div>
            <div style="position:relative;float:left;width:100%;">
           <h4 style="margin-bottom:2px">會員帳號</h4>
           <div style="margin-bottom:8px"><a-input style="width: 48%" size="small" ><a-icon slot="prefix" type="idcard" /></a-input></div>
           </div>
           <div style="position:relative;float:left;width:100%;">
           <h4 style="margin-bottom:2px">操作人</h4>
           <div style="margin-bottom:8px"><a-input style="width: 48%" size="small" ><a-icon slot="prefix" type="idcard" /></a-input></div>
           </div>

            <div style="position:relative;float:left;width:100%;">
           <h4 style="margin-bottom:2px">操作時間</h4>
           <div style="margin-bottom:8px">
               <rangeCalender/>
            </div>
           </div>
           
           <!-- <h4 style="margin-bottom:2px">類型</h4>
           <div style="margin-bottom:8px">
                <a-tree-select
                  v-model="kind"
                  style="width: 100%"
                  :tree-data="kindData"
                  tree-checkable
                  :show-checked-strategy="SHOW_PARENT"
                  search-placeholder="請選類型"
                  :dropdownStyle="paywaydropdownStyle"
                  size="small"
                  allow-clear
                />
            </div> -->
<!-- 
          <h4 style="margin-bottom:2px">提交時間</h4>
           <div style="margin-bottom:8px">
             <rangeCalender/>
           </div> -->
           <h4 style="margin-bottom:2px">狀態</h4>
            <div style="margin-bottom:8px">
              <a-input-group compact>
              <a-select default-value="id" style="width:150px;" size="small">
                <a-select-option value="id" >有效</a-select-option>
                <a-select-option value="moneyFlu" >已處理</a-select-option>
                <a-select-option value="buildTime" >無效</a-select-option>
                <!-- <a-select-option value="lastLofinTime" >金流代付審核中</a-select-option> -->
              </a-select>
              </a-input-group>
            </div>


          
           
            <h4 style="margin-bottom:2px">交易金額</h4>
            <div style="margin-bottom:8px">
              <a-input style="width:calc(50% - 15px)" placeholder="最低" size="small"/> 到 <a-input style="width:calc(50% - 15px)" placeholder="最高" size="small"/>
           </div>
           <h4 style="margin-bottom:2px">餘額</h4>
            <div style="margin-bottom:8px">
              <a-input style="width:calc(50% - 15px)" placeholder="最低" size="small"/> 到 <a-input style="width:calc(50% - 15px)" placeholder="最高" size="small"/>
           </div>
          
  
           <h4 style="margin-bottom:2px">搜尋結果排序</h4>
            <div style="margin-bottom:8px">
              <a-input-group compact>
              <a-select default-value="number" style="width:120px;" size="small">
                <a-select-option value="number" >編號</a-select-option>
                <a-select-option value="time" >時間</a-select-option>
                <a-select-option value="before" >交易前</a-select-option>
                <a-select-option value="trademount" >交易金額</a-select-option>
                <a-select-option value="trademount" >餘額</a-select-option>
                <a-select-option value="trademount" >狀態</a-select-option>
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

   <div v-if="this.page=='upperpoints'" ><upperpoints  v-on:chagePageName="chagePageName"  /></div>
   <div v-if="this.page=='deletepoints'" ><deletepoints  v-on:chagePageName="chagePageName"  /></div>

  </div>
  

</template>
 
<script>
import moment from 'moment';
import upperpoints from './upperpoints';
import deletepoints from './deletepoints';
import rangeCalender from './rangeCalender';
import { TreeSelect } from 'ant-design-vue';

const SHOW_PARENT = TreeSelect.SHOW_PARENT;
const { export_json_to_excel } = require("@/utils/Export2Excel");

// import rangeCalender from './rangeCalender';





const columns = [
  {title: '編號',dataIndex: 'number',key: 'number',align:'center',width:'150px'},
  {title: '狀態',dataIndex: 'status',key: 'status',scopedSlots: { customRender: 'status' },align:'center',width:'80px'},
  {title: '會員',dataIndex: 'menber',key: 'menber',align:'center',width:'150px'},
  {title: '時間',key: 'time',dataIndex: 'time',align:'center',width:'150px'},
  {title: '動作',key: 'action',dataIndex: 'action',align:'center',width:'150px'},
  {title: '交易前',key: 'before',dataIndex: 'before',align:'center',width:'150px'},
  {title: '交易金額',key: 'mounte',dataIndex: 'mounte',align:'center',width:'150px'},
  {title: '餘額',key: 'remain',dataIndex: 'remain',align:'center',width:'150px'},
  {title: '操作人',key: 'oprater',dataIndex: 'oprater',align:'center',width:'150px'},
  {title: '備註',key: 'notice',dataIndex: 'notice',scopedSlots: { customRender: 'notice' },align:'center',width:'150px'},
];
const data=[
  {key: '1',number:'6772904',status:'0',menber: 'AA1234',time: '2021/04/03 23:11:54',action:'手動上分',before:'0.00'
  ,mounte:'1000.00',remain:'1000.00',oprater:'cf001',notice:['notice']},
  {key: '2',number:'6772905',status:'1',menber: 'AA1234',time: '2021/04/03 23:11:54',action:'手動上分',before:'0.00'
  ,mounte:'1000.00',remain:'1000.00',oprater:'cf001',notice:['notice']},
  {key: '3',number:'6772906',status:'1',menber: 'AA1234',time: '2021/04/03 23:11:54',action:'手動上分',before:'0.00'
  ,mounte:'1000.00',remain:'1000.00',oprater:'cf001',notice:['notice']},
]
const uppointskindData=[
    {title:'全選',value: '4',key: '4',children: [
      {title: '手動上分',value: '5',key: '5'},
      {title: '手動扣點',value: '6',key: '6'}]
}]
    
export default {
//   components:{rangeCalender},
 components:{upperpoints, deletepoints,rangeCalender},
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
        uppointskind:[],
        uppointskindData,
        SHOW_PARENT,
        paywaydropdownStyle:{height:'25vh'},
        showStatisticsState:false,
        maskStyle:{'opacity':'0.1','background':'#000000','animation':'none'},

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
      //获取订单编号
      //var theName=e.path[5].childNodes[0].outerText.split('製 ')[1]
      var theName=e.path[5].childNodes[0].outerText

    
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
            if(item.number==name){
              item.notice[0]=this.MadeNoteValue
              item.notice[1]='modify'
              item.notice[2]='delete'
            }
          })

      }
      console.log(this.MadeNoteValue,"123",this.MadeNoteTitle,name,this.data[0].notice)
    },
    toModifyNote(e){
      var theName=e.path[4].childNodes[0].outerText
      //console.log(e.path[4].childNodes[0].outerText,"7788000")
      //  var theName =e.path[4].childNodes[0].childNodes[0].childNodes[0].childNodes[0].outerText.split('製 ')[1]
      this.MadeNoteTitle="備註 ("+theName+")"
      this.visibleNotice=true
       this.MadeNoteValue=''
       this.data.map((item)=>{
         if(item.number==theName){
             if(item.notice.length==3){
               this.MadeNoteValue=item.notice[0]

             }
            
         }
      })
    },
    toMadeNoteDelete(e){
      var name=e.path[4].childNodes[0].outerText
      //var name =e.path[5].childNodes[0].innerText.split('製')[1].replace(/^\s\s*/, '').replace(/\s\s*$/, '')
      this.data.map((item)=>{

        if(item.number==name){
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
                export_json_to_excel(tHeader, data, "玩家餘額 列表");
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