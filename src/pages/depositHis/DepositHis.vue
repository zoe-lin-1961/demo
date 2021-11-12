<template>
<div>
  <div style="padding:12px;"><h2><a-icon type="file-search"/>&nbsp;&nbsp;存款歷史</h2></div>
<div class="theBox" v-if="this.page=='playList'">

  <div class="centerDiv" >
    <div class="topBox">
     <h3>玩家查詢
    <a-input placeholder="編號/暱稱" style="width:25%"/>

    <a-button type="primary"  style="margin-left:8px">查詢</a-button>
    <a-button danger style="margin-left:8px" @click="moreSearch">進階搜尋</a-button>
    <a-button type="primary"  style="margin-left:8px" @click="tobeExcel">匯出Excel</a-button>

    </h3>
    </div>

   
    <div class="bottomBox" >
        <a-button type="primary"  style="margin-bottom:5px" @click="showStatistics">查看訂單統計</a-button>
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
         <div class="smallBallboxDiv"><div class="smallBall" style="background-color:#FFBC34"></div>金流待付審核中</div>
       </div>
       <a-table class="ant-table-striped" :columns="columns" :data-source="data" bordered  
        :pagination="{ pageSize: 5 }" :scroll="{ x: '100%'}"
            
       >
        <span slot="status" slot-scope="status">
        <div class='btnDiv'>
            <div v-if="status=='0'" class="smallBall" style="background-color:#2962FF"></div>
            <div v-if="status=='1'" class="smallBall" style="background-color:#36BEA6"></div>
            <div v-if="status=='2'" class="smallBall" style="background-color:#F62D51"></div>
            <div v-if="status=='3'" class="smallBall" style="background-color:#FFBC34"></div>
        </div>
        </span>
        <span slot="theway" slot-scope="theway">
        <div v-for="(w,i) in theway" :key="w" style="font-size:0.3rem">
            <div v-if="i==0">{{w}}</div>
            <div v-if="i==1">儲值方式: {{w}}</div>
            <div v-if="i==2">CID: {{w}}</div>
            <div v-if="i==3">MID: {{w}}</div>
            <div v-if="i==4">透過: {{w}}</div>
            <div v-if="i==5">VC: {{w}}</div>
            <div><span v-if="i==5">Item Id: {{w}},</span><span v-if="i==6">Name: {{w}}</span></div>
        </div>
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
           <h4 style="margin-bottom:2px">編號 (訂單)</h4>
           <div style="margin-bottom:8px"><a-input style="width: 48%" size="small" ><a-icon slot="prefix" type="idcard" /></a-input></div>
           </div>
          <h4 style="margin-bottom:2px">提交時間</h4>
           <div style="margin-bottom:8px">
             <rangeCalender/>
           </div>
           <h4 style="margin-bottom:2px">狀態</h4>
            <div style="margin-bottom:8px">
              <a-input-group compact>
              <a-select default-value="id" style="width:150px;" size="small">
                <a-select-option value="id" >有效</a-select-option>
                <a-select-option value="moneyFlu" >已處理</a-select-option>
                <a-select-option value="buildTime" >無效</a-select-option>
                <a-select-option value="lastLofinTime" >金流代付審核中</a-select-option>
              </a-select>
              </a-input-group>
            </div>


            <h4 style="margin-bottom:2px">繳費管道</h4>
            <div style="margin-bottom:8px">
                <a-tree-select
                  v-model="payway"
                  style="width: 100%"
                  :tree-data="paywayData"
                  tree-checkable
                  :show-checked-strategy="SHOW_PARENT"
                  search-placeholder="請選擇繳費管道"
                  size="small"
                  :dropdownStyle="paywaydropdownStyle"
                  allow-clear
                />
            </div>
            <h4 style="margin-bottom:2px">金流商</h4>
            <div style="margin-bottom:8px">
                <a-tree-select
                  v-model="payCom"
                  style="width: 100%"
                  :tree-data="payComData"
                  tree-checkable
                  :show-checked-strategy="SHOW_PARENT"
                  search-placeholder="請選金流商"
                  :dropdownStyle="paywaydropdownStyle"
                  size="small"
                  allow-clear
                />
            </div>
            <h4 style="margin-bottom:2px">交易金額</h4>
            <div style="margin-bottom:8px">
              <a-input style="width:calc(50% - 15px)" placeholder="最低" size="small"/> 到 <a-input style="width:calc(50% - 15px)" placeholder="最高" size="small"/>
           </div>
            <h4 style="margin-bottom:2px">交易日期</h4>
            <div style="margin-bottom:8px">
              <rangeCalender />
            </div>
  
           <h4 style="margin-bottom:2px">搜尋結果排序</h4>
            <div style="margin-bottom:8px">
              <a-input-group compact>
              <a-select default-value="number" style="width:120px;" size="small">
                <a-select-option value="number" >編號</a-select-option>
                <a-select-option value="status" >狀態</a-select-option>
                <a-select-option value="menber" >會員</a-select-option>
                <a-select-option value="time" >時間</a-select-option>
                <a-select-option value="behaver" >動作</a-select-option>
                <a-select-option value="flow" >來源 > 目的</a-select-option>
                <a-select-option value="before" >交易前</a-select-option>
                <a-select-option value="trademount" >交易金額</a-select-option>
                <a-select-option value="actualamount" >實際金額</a-select-option>
                <a-select-option value="balance" >餘額</a-select-option>
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
import rangeCalender from './rangeCalender';
import { TreeSelect } from 'ant-design-vue';
const SHOW_PARENT = TreeSelect.SHOW_PARENT;
const { export_json_to_excel } = require("@/utils/Export2Excel");

const columns = [
  {title: '編號',dataIndex: 'number',key: 'number',align:'center',width:'150px'},
  {title: '狀態',dataIndex: 'status',key: 'status',scopedSlots: { customRender: 'status' },align:'center',width:'80px'},
  {title: '會員',dataIndex: 'menber',key: 'menber',align:'center',width:'150px'},
  {title: '時間',dataIndex: 'time',key: 'time',align:'center',width:'120px'},
  {title: '動作',dataIndex: 'behaver',key: 'behaver',align:'center',width:'100px'},
  {title: '來源 > 目的',key: 'cashflow',dataIndex: 'cashflow',align:'center',width:'150px'},
  {title: '交易前',key: 'beforetrade',dataIndex: 'beforetrade',align:'center',width:'120px'},
  {title: '交易金額',key: 'trademount',dataIndex: 'trademount',align:'center',width:'120px'},
  {title: '實際金額',key: 'actualamount',dataIndex: 'actualamount',align:'center',width:'120px'},
  {title: '餘額',key: 'balance',dataIndex: 'balance',align:'center',width:'120px'},
  {title: '繳費管道',key: 'theway',dataIndex: 'theway',scopedSlots: { customRender: 'theway' },align:'center',width:'250px'},
];
const data=[
  {key:'1',number:'6775904',status:'1',menber:'AA1234',time:'2021/04/23 00:59:03',behaver:'儲值',cashflow:'系統 > 會員帳戶',
  beforetrade:'0.00',trademount:'1,000.00',actualamount:'1,000.00',balance:'1,000.00',theway:['海皇','超商繳費','00000000001106007','N/A','711超商繳費','AB2JB48NAG0133','472','儲值']},
  {key:'2',number:'6775905',status:'1',menber:'AA1235',time:'2021/04/23 00:59:03',behaver:'儲值',cashflow:'系統 > 會員帳戶',
  beforetrade:'0.00',trademount:'1,000.00',actualamount:'1,000.00',balance:'1,000.00',theway:['海皇','超商繳費','00000000001106007','N/A','711超商繳費','AB2JB48NAG0133','472','儲值']},
  {key:'3',number:'6775906',status:'1',menber:'AA1238',time:'2021/04/23 00:59:03',behaver:'儲值',cashflow:'系統 > 會員帳戶',
  beforetrade:'0.00',trademount:'1,000.00',actualamount:'1,000.00',balance:'1,000.00',theway:['海皇','超商繳費','00000000001106007','N/A','711超商繳費','AB2JB48NAG0133','472','儲值']},
  {key:'4',number:'6775907',status:'1',menber:'AA1236',time:'2021/04/23 00:59:03',behaver:'儲值',cashflow:'系統 > 會員帳戶',
  beforetrade:'0.00',trademount:'1,000.00',actualamount:'1,000.00',balance:'1,000.00',theway:['海皇','超商繳費','00000000001106007','N/A','711超商繳費','AB2JB48NAG0133','472','儲值']},
  {key:'5',number:'6775904',status:'1',menber:'AA1234',time:'2021/04/23 00:59:03',behaver:'儲值',cashflow:'系統 > 會員帳戶',
  beforetrade:'0.00',trademount:'1,000.00',actualamount:'1,000.00',balance:'1,000.00',theway:['海皇','超商繳費','00000000001106007','N/A','711超商繳費','AB2JB48NAG0133','472','儲值']},
  {key:'6',number:'6775905',status:'1',menber:'AA1235',time:'2021/04/23 00:59:03',behaver:'儲值',cashflow:'系統 > 會員帳戶',
  beforetrade:'0.00',trademount:'1,000.00',actualamount:'1,000.00',balance:'1,000.00',theway:['海皇','超商繳費','00000000001106007','N/A','711超商繳費','AB2JB48NAG0133','472','儲值']},
  {key:'7',number:'6775906',status:'1',menber:'AA1238',time:'2021/04/23 00:59:03',behaver:'儲值',cashflow:'系統 > 會員帳戶',
  beforetrade:'0.00',trademount:'1,000.00',actualamount:'1,000.00',balance:'1,000.00',theway:['海皇','超商繳費','00000000001106007','N/A','711超商繳費','AB2JB48NAG0133','472','儲值']},
  {key:'8',number:'6775907',status:'1',menber:'AA1236',time:'2021/04/23 00:59:03',behaver:'儲值',cashflow:'系統 > 會員帳戶',
  beforetrade:'0.00',trademount:'1,000.00',actualamount:'1,000.00',balance:'1,000.00',theway:['海皇','超商繳費','00000000001106007','N/A','711超商繳費','AB2JB48NAG0133','472','儲值']}

]

const paywayData=[
  {title:'全選',value: '0',key: '0',children:[
  {title: '系統',value: '0-0',key: '0-0'},{title: '虛擬ATM',value: '0-1',key: '0-1'}, {title: '網銀轉帳',value: '0-2',key: '0-2'},{title: '無',value: '0-3',key: '0-3'},
  {title: '全家超商條碼繳款',value: '0-4',key: '0-4'},{title: '7-11超商條碼繳款',value: '0-5',key: '0-5'}, {title: 'OK超商條碼繳款',value: '0-6',key: '0-6'},{title: '微信',value: '0-7',key: '0-7'},
  {title: '支付寶',value: '0-8',key: '0-8'},{title: 'QQ錢包',value: '0-9',key: '0-9'}, {title: '一般信用卡',value: '0-10',key: '0-10'},{title: '銀聯信用卡',value: '0-11',key: '0-11'},
  {title: '虛擬貨幣',value: '0-12',key: '0-12'},{title: 'Quick',value: '0-13',key: '0-13'}, {title: 'Jd',value: '0-14',key: '0-14'},{title: 'UnionPay',value: '0-15',key: '0-15'},
  {title: 'Meituan',value: '0-16',key: '0-16'},{title: 'Haiwai',value: '0-17',key: '0-17'}, {title: 'All Payment',value: '0-18',key: '0-18'}
  ]},
]

const payComData=[
  {title:'全選',value: '1',key: '1',children:[
  {title: '系統',value: '1-0',key: '1-0'},{title: '綠界',value: '1-1',key: '1-1'},{title: '金恆通',value: '1-2',key: '1-2'},{title: '聯通支付',value: '1-3',key: '1-3'},
  {title: 'FuPay',value: '1-4',key: '1-4'},{title: '財富通',value: '1-5',key: '1-5'},{title: 'CgPay',value: '1-6',key: '1-6'},{title: '閎捷支付',value: '1-7',key: '1-7'},
  {title: 'DmPay',value: '1-8',key: '1-8'},{title: '支付寶',value: '1-9',key: '1-9'},{title: 'QPay',value: '1-10',key: '1-10'},{title: 'OneGoPay',value: '1-11',key: '1-11'},
  {title: '幣安BitSaifu',value: '1-12',key: '1-12'},{title: '利資',value: '1-13',key: '1-13'},{title: 'JiaPay',value: '1-14',key: '1-14'},{title: 'CuPay',value: '1-15',key: '1-15'},
  {title: '海皇',value: '1-16',key: '1-16'},{title: 'Ost168',value: '1-17',key: '1-17'},{title: '發發支付',value: '1-18',key: '1-18'},{title: '2vPay',value: '1-19',key: '1-19'},
  {title: '匯豐支付',value: '1-20',key: '1-20'},{title: 'Gpay88',value: '1-21',key: '1-21'},{title: 'Bvac Pay',value: '1-22',key: '1-22'},{title: 'Pay Trust88',value: '1-23',key: '1-23'},
  {title: 'Ak Pay',value: '1-24',key: '1-24'},{title: 'Rft Pay',value: '1-25',key: '1-25'},{title: 'Fun Pay',value: '1-26',key: '1-26'},{title: '富責東',value: '1-27',key: '1-27'},
  {title: '信付東',value: '1-28',key: '1-28'},{title: '8957',value: '1-29',key: '1-29'},{title: 'MTPays',value: '1-30',key: '1-30'},{title: '保時捷',value: '1-31',key: '1-31'},
  {title: 'Sky Pay',value: '1-32',key: '1-32'},{title: 'InstantPay',value: '1-33',key: '1-33'},{title: 'VanderPays',value: '1-34',key: '1-34'},{title: 'EexiePay',value: '1-35',key: '1-35'},
  {title: 'Help2Pay',value: '1-36',key: '1-36'},
  ]},
]

export default {
  
   components:{rangeCalender},
  created(){
  
    

  },
  data() {
    return {
        columns,
        data,
        visible:false,
        conterTypeValue:'',
        page:'playList',
        phone:'',
        payway:[],
        payCom:[],
        paywayData,
        payComData,
        SHOW_PARENT,
        paywaydropdownStyle:{height:'25vh'},
        showStatisticsState:false

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
                export_json_to_excel(tHeader, data, "存款訂單 列表");
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
.ant-table-striped{margin: auto;}
.btnDiv{position:relative;float:left;width: 100%;display: flex;flex-direction: row;justify-content: center;align-items: center;}
.btnDiv div{position:relative;float:left;margin:0 2px 0 2px;}
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