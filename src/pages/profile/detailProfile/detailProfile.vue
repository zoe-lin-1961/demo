<template>
  <div>
    <div class="theBox">
      <div class="centerDiv" >
        <h3>帳務報表 / 會員({{customer}})的明細 <a-button  icon="left-circle" @click="lastPage" size="small" style="margin-left:5px">回上一頁</a-button></h3>
         <div class="topBox">
                <h3>
                <a-tree-select
                  v-model="gamekind"
                  style="width:25%"
                  :tree-data="gamekindData"
                  tree-checkable
                  :show-checked-strategy="SHOW_PARENT"
                  placeholder="選擇遊戲"
                  :dropdownStyle="paywaydropdownStyle"
                  allow-clear
                />
 
               
                   
                <a-button type="primary"  style="margin-left:8px">查詢</a-button>
                <a-button danger style="margin-left:8px"  @click="moreSearch">進階搜尋</a-button>
                <a-button type="primary"  style="margin-left:8px" @click="tobeExcel">匯出Excel</a-button>

                </h3>
        </div>
        <div class="sumaryBox">
            <div class="sumaryDiv" style="background-color:orange">
                <p>總注單數</p>
                <p>4.00</p>
            </div>
            <div class="sumaryDiv" style="background-color:blue">
                <p>總下注量</p>
                <p>180.00</p>
            </div>
            <div class="sumaryDiv" style="background-color:blue">
                <p>總有效投注</p>
                <p>130.00</p>
            </div>
            <div class="sumaryDiv" style="background-color:#666">
                <p>會員</p>
                <p>-130.00</p>
            </div>
        </div>
        <div class="bottomBox" >
           
            <!-- <a-button type="primary"  style="margin-bottom:5px"  @click="refresh">重新整理</a-button> -->

       
            <a-table ref="bigTable"
              class="ant-table-striped"  :columns="columns" :data-source="data" bordered  
              :pagination="pagination"
              :footer="footer" style="width:100%"
            >
            <span slot="betTime" slot-scope="betTime">
                <div  v-for="(w,i) in betTime" :key="w">
                    <div v-if="i==0">{{w}}</div>
                    <div v-if="i==1" @click="toshowIP(w)"><a >{{w}}</a></div>
                </div>
                <a-modal title="IP資訊" :visible="visibleShowIP" 
                   @ok="visibleShowIPOk" @cancel="visibleShowIPCancel" 
                   :centered="true" :maskClosable="false" :footer="null"
                  :maskStyle="maskStyle"
                   >  
                   <div><p>國家:{{ipData['country']}}</p><p>城市:{{ipData['city']}}</p><p>地區:{{ipData['regionName']}}</p><p>電信業者:{{ipData['isp']}}</p></div>
                  </a-modal>
            </span>
            <span slot="betNumber" slot-scope="betNumber">
                <div  v-for="(w,i) in betNumber" :key="w">
                    <div v-if="i==0">{{w}}</div>
                    <div v-if="i==1">{{w}}</div>
                    <div v-if="i==2">{{w}}</div>
                    <div v-if="i==3">{{w}}</div>
                </div>
            </span>
            <span slot="betObj" slot-scope="betObj">
                <div  v-for="(w,i) in betObj" :key="w" style="font-size:0.8rem"> 
                     <div v-if="i==0" class="block100">{{w}}</div>
                     <div>
                         <div v-if="i==1" class="lineblock"><span v-if='w!==null'>桌號:{{w}}</span></div>
                         <div v-if="i==2" class="lineblock"><span v-if='w!==null'>批號:{{w}}</span></div>
                         <div v-if="i==3" class="lineblock"><span v-if='w!==null'>局號:{{w}}</span></div>
                     </div>
                    <div v-if="i==4" class="block100"><span v-if='w!==null'>投注對象:{{w}}</span></div>
                    <div v-if="i==5" class="block100"><span v-if='w!==null'>結算時間:{{w}}</span></div>
                    <div v-if="i==6" class="block100"><span v-if='w!==null'>注單狀態:{{w}}</span></div>
                    <div v-if="i==7" class="block100">
                        <div>{{w}}
                        <div v-if='w!==null'><a>顯示結果^</a></div>
                        <div class="block100 showobj">
                            <!-- <div>開</div>
                            <div>莊</div> -->
                            <!-- <div> 555 </div>
                            <div> 555 </div>
                            <div> 555 </div>
                            <div> 555 </div>
                            <div>{{w.split('開')[1].split('莊')[0]}}</div>
                            <div>{{w.split('莊')[1]}}</div> -->
                        </div>
                        </div>
                    </div>
                    <div v-if="i==8" class="block100"><span v-if='w!==null'>期數:{{w}}</span></div>
                    <div v-if="i==9" class="block100"><span v-if='w!==null'>投注對象:{{w}}</span></div>
                    <div v-if="i==10" class="block100"><span v-if='w!==null'>投注類型:{{w}}</span></div>
                    <div v-if="i==11" class="block100"><span v-if='w!==null'>賠率:{{w}}</span></div>
                    <div v-if="i==12" class="block100"><span v-if='w!==null'>組數:{{w}}</span></div>
                    <div v-if="i==13" class="block100"><span v-if='w!==null'>備註:{{w}}</span></div>
                    <div v-if="i==14" class="block100"><span v-if='w!==null'>比賽結果:{{w}}</span></div>
                    <div v-if="i==15" class="block100"><span v-if='w!==null'>是否為內掛下注:{{w}}</span></div>
                    <div v-if="i==16" class="block100"><span v-if='w!==null'>結算時間:{{w}}</span></div>

                     
                </div>
            </span>

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

           <!-- <div style="position:relative;float:left;width:100%;">
           <h4 style="margin-bottom:2px">查詢三個月前歷史帳務</h4>
               <div style="margin-bottom:8px">
              <a-radio-group  v-model="conterTypeValue"   ><a-radio :value="1" @change="onChangeConterTypeValue">是</a-radio><a-radio :value="2" @change="onChangeConterTypeValue">否</a-radio></a-radio-group>
              </div>
           </div> -->
       
          <h4 style="margin-bottom:2px">選擇日期區間 (轉帳時間00:00:00,超過查昨天的帳)</h4>
           <div style="margin-bottom:8px">
             <rangeCalender/>
           </div>
            <h4 style="margin-bottom:2px">投注金額</h4>
            <div style="margin-bottom:8px">
              <a-input style="width:calc(50% - 15px)" placeholder="最低" size="small"/> 到 <a-input style="width:calc(50% - 15px)" placeholder="最高" size="small"/>
           </div>
            <h4 style="margin-bottom:2px">輸贏結果</h4>
            <div style="margin-bottom:8px">
              <a-input style="width:calc(50% - 15px)" placeholder="最低" size="small"/> 到 <a-input style="width:calc(50% - 15px)" placeholder="最高" size="small"/>
           </div>
            <h4 style="margin-bottom:2px">對壓報表明細ID</h4>
            <div style="margin-bottom:8px">
              <a-input size="small"></a-input>
            </div>
  
           <h4 style="margin-bottom:2px">搜尋結果排序</h4>
            <div style="margin-bottom:8px">
              <a-input-group compact>
              <a-select default-value="number1" style="width:120px;" size="small">
                <a-select-option value="number1" >注單編號</a-select-option>
                <a-select-option value="number2" >投注對象</a-select-option>
                <a-select-option value="number3" >投注金額</a-select-option>
                <a-select-option value="number4" >有效投注</a-select-option>
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

    </div>
  </div>
  </div>
</template>
 
<script>
import moment from 'moment';
import rangeCalender from './rangeCalender';
import { TreeSelect } from 'ant-design-vue';
const SHOW_PARENT = TreeSelect.SHOW_PARENT;
const { export_json_to_excel } = require("@/utils/Export2Excel");
import axios from 'axios'



const columns = [
  {title: '下注時間',dataIndex: 'betTime',key: 'betTime',scopedSlots: { customRender: 'betTime' },align:'center',width:'200px'},
  {title: '注單編號',dataIndex: 'betNumber',key: 'betNumber',scopedSlots: { customRender: 'betNumber'},align:'center',width:'250px'},
  {title: '投注對象',dataIndex: 'betObj',key: 'betObj',scopedSlots: { customRender: 'betObj' },align:'left',width:'250px'},
  {title: '投注金額',dataIndex: 'betMoney',key: 'betMoney',align:'center',width:'120px'},
  {title: '有效投注',dataIndex: 'validbet',key: 'validbet',align:'center',width:'120px'},
  {title: '會員',key: 'member',dataIndex: 'member',align:'center',width:'120px'},
  {title: '備註',key: 'notice',dataIndex: 'notice',scopedSlots: { customRender: 'notice' },align:'center',width:'120px'},
];

const data=[
  {key:'1',betTime:['2021/09/14 14:23:51'],betNumber:['#222351535','234517','wus888','18-8834472439'],
  betObj:['DG真人-財神百家樂','DG11','12','18','莊:50','2021/09/14 14:25:00','已結算','開7莊2'],betMoney:'50.00',validbet:'50.00',member:'-50.00',notice:['notice']},
  {key:'2',betTime:['2021/09/14 14:22:18'],betNumber:['#222351532','234517','wus888','18-8834472486'],
  betObj:['DG真人-財神百家樂','DG11','12','17','莊:50','2021/09/14 14:25:00','已結算','開7莊2'],betMoney:'50.00',validbet:'50.00',member:'-50.00',notice:['notice']},
  {key:'3',betTime:['2021/09/14 14:19:48'],betNumber:['#222351533','234517','wus888','18-8834472459'],
  betObj:['GTR彩票-皇家賽馬',null,null,null,null,null,null,null,'12413063','雙面盤@第1名:單','2','1.97','1','無','04,06,01,03,07,05,10,02,08,09','否','2021/09/14 13:20:00'],betMoney:'50.00',validbet:'50.00',member:'-50.00',notice:['notice']},
  {key:'4',betTime:['2021/09/14 14:19:48','118.63.137.97'],betNumber:['#222351534','234517','wus888','18-8834472459'],
  betObj:['WM真人-百家樂',null,null,null,null,null,null,null,'12413063','雙面盤@第1名:單','2','1.97','1','無','04,06,01,03,07,05,10,02,08,09','否','2021/09/14 13:20:00'],betMoney:'50.00',validbet:'50.00',member:'-50.00',notice:['notice']}
 
]
const paywayData=[
  {title:'全選',value: '0',key: '0'},
  {title: '系統',value: '0-0',key: '0-0'},{title: '虛擬ATM',value: '0-1',key: '0-1'}, {title: '網銀轉帳',value: '0-2',key: '0-2'},{title: '無',value: '0-3',key: '0-3'},
  {title: '全家超商條碼繳款',value: '0-4',key: '0-4'},{title: '7-11超商條碼繳款',value: '0-5',key: '0-5'}, {title: 'OK超商條碼繳款',value: '0-6',key: '0-6'},{title: '微信',value: '0-7',key: '0-7'},
  {title: '支付寶',value: '0-8',key: '0-8'},{title: 'QQ錢包',value: '0-9',key: '0-9'}, {title: '一般信用卡',value: '0-10',key: '0-10'},{title: '銀聯信用卡',value: '0-11',key: '0-11'},
  {title: '虛擬貨幣',value: '0-12',key: '0-12'},{title: 'Quick',value: '0-13',key: '0-13'}, {title: 'Jd',value: '0-14',key: '0-14'},{title: 'UnionPay',value: '0-15',key: '0-15'},
  {title: 'Meituan',value: '0-16',key: '0-16'},{title: 'Haiwai',value: '0-17',key: '0-17'}, {title: 'All Payment',value: '0-18',key: '0-18'}
]

const payComData=[
  {title:'全選',value: '1',key: '1'},
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

]

const kindData=[
    {title:'全選',value: '3',key: '3'},
    {title:'其他條件',value: '4',key: '4',children: [
      {
        title: '加點類型 (全選)',
        value: '5',
        key: '5',
        children: [
            {title: '儲值',value: '5-0-1',key: '5-0-1'},{title: '優惠',value: '5-0-2',key: '5-0-2'},
            {title: '遊戲點數異常補點',value: '5-0-3',key: '5-0-3'},{title: '手動上分',value: '5-0-4',key: '5-0-4'},
        ]
      },
       {
        title: '扣點類型 (全選)',
        value: '6',
        key: '6',
        children: [
            {title: '轉移',value: '6-0-1',key: '6-0-1'},
            {title: '手動加點',value: '6-0-2',key: '6-0-2'},
            {title: '優惠扣回',value: '6-0-3',key: '6-0-3'},
            {title: '遊戲點數異常扣點',value: '6-0-4',key: '6-0-4'}
            
        ]
      },
    ],}
]

const gamekindData=[
    {title:'全選',value: '10',key: '10',children: [
      {title: '遊戲1',value: '10-1',key: '10-1'},{title: '遊戲2',value: '10-2',key: '10-2'},
      {title: '遊戲3',value: '10-3',key: '10-3'},{title: '遊戲4',value: '10-4',key: '10-4'},
    ],}
]

const currentPageData=[
    {key:'0',betTime:[''],betNumber:[''],
  betObj:[''],betMoney:'50.00',validbet:'50.00',member:'-50.00',notice:['notice']},
]

export default {
  components:{rangeCalender},
  props:{
    customer:String
  },  
  data(){
    return {
      columns,  
      data,
      showStatisticsState:false,
      visible:false,
      currentPageData,
      payway:[],
        payCom:[],
        kind:[],
        gamekind:[],
        gamekindData,
        paywayData,
        payComData,
        kindData,
        SHOW_PARENT,
        paywaydropdownStyle:{height:'25vh'},
        maskStyle:{'opacity':'0.1','background':'#000000','animation':'none'},
        visibleNotice:false,
        MadeNoteTitle:'',
        MadeNoteValue:'',
        visibleShowIP:false,
        ipData:{},
        scrollxx:{ x: '100%'},
        pagination:{pageSize:5},

    }
  },
  mounted(){
    console.log(this.$refs.footerData,"李白.",this.$refs.bigTable,document.getElementsByClassName('ant-table'))
    // var table=document.getElementsByClassName('ant-table-striped')[0]
   
   
  },
  methods:{
      moment,
      moreSearch(){
      console.log("123456")
      this.visible=true
      },
      refresh(){

      },
      handleOk(){
          this.visible=false
      },
      handleCancel(){
          this.visible=false
      },
      lastPage(){
          this.$emit('chagePageName','profile')
      },
      showStatistics(){
      this.showStatisticsState=!this.showStatisticsState
      },
      tobeExcel(){ 
            require.ensure([], () => {
                const tHeader = ["姓名", "电话", "分数", "交卷时间"];//字段对应的中文
                const filterVal = ["name", "phone", "course", "createTime"]; //表格字段
                const list = [{key:1,name:'may',phone:'0322',course:'777',createTime:'666'}];
                const data = this.formatJson(filterVal, list);
                export_json_to_excel(tHeader, data, "考试成绩汇总");
            });
      },
      formatJson(filterVal, jsonData) {
      console.log(filterVal, jsonData,"filterVal, jsonData")
       return jsonData.map(v => filterVal.map(j => v[j]));
      },
      
      footer(){
          var footerDatasSource=[
               {key:'0',betTime:['總計: 4.00'],betNumber:[''],
               betObj:[''],betMoney:'50.00',validbet:'50.00',member:'-50.00',notice:['']},
 
          ]
          return(<a-table  
          class="ant-table-stripedno" 
          ref="footerData"
          rowKey={Math.random}
          bordered={false}
          showHeader={false}
          columns={columns}
          dataSource={footerDatasSource}
          pagination={false}
          style="width:100%"
          //scroll={this.scrollxx}
          
          
          >
          </a-table>)

          
      },
      toMadeNote(e){
      //获取订单编号
      var theName=e.path[5].childNodes[1].childNodes[0].childNodes[0].outerText
    
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
            if(item.betNumber[0]==name){
              item.notice[0]=this.MadeNoteValue
              item.notice[1]='modify'
              item.notice[2]='delete'
            }
          })

      }
      //console.log(this.MadeNoteValue,"123",this.MadeNoteTitle,name,this.data[0].notice)
    },
    visibleNoticeCancel(){
      this.visibleNotice=false
    },
    toModifyNote(e){
      console.log(e.path[4].childNodes[1].childNodes[0].childNodes[0].outerText,"e.path[4]")
      var theName =e.path[4].childNodes[1].childNodes[0].childNodes[0].outerText
      this.MadeNoteTitle="備註 ("+theName+")"
      this.visibleNotice=true
       this.MadeNoteValue=''
       this.data.map((item)=>{
         if(item.betNumber[0]==theName){
             if(item.notice.length==3){
               this.MadeNoteValue=item.notice[0]

             }
            
         }
      })
    },
    toMadeNoteDelete(e){
      //console.log("33332222222222222",e.path[4].childNodes[0].childNodes[0].childNodes[0].childNodes[0].outerText.split('製 ')[1])
      //var name =e.path[5].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].outerText.split('製 ')[1].replace(/^\s\s*/, '').replace(/\s\s*$/, '')
      var name =e.path[4].childNodes[1].childNodes[0].childNodes[0].outerText
      this.data.map((item)=>{

        if(item.betNumber[0]==name){
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
     visibleShowIPOk(){
      this.visibleShowIP=false
      this.ipData={}
    },
    visibleShowIPCancel(){
      this.visibleShowIP=false
      this.ipData={}
    },
    toshowIP(e){
      console.log(e,"12346")
      this.visibleShowIP=true
      var api="http://ip-api.com/json/"+e
      axios.get(api).then((res)=>{
        //请求成功的回调函数
        this.ipData={isp:res.data.isp,country:res.data.country,city:res.data.city,regionName:res.data.regionName}
        console.log(res.data.isp,'業者',res.data.country,'國家',res.data.city,'城市',res.data.regionName,'地區')
      }).catch((err)=>{
        //请求失败的回调函数
        this.ipData={isp:'數據錯誤',country:'數據錯誤',city:'數據錯誤',regionName:'數據錯誤'}
        console.log(err)
      })

      this.visibleShowIP=true
      //http://ip-api.com/json/
    },
  
  }
};
</script>
 
<style scoped lang="less">

.ant-table-striped /deep/ .ant-table{overflow-x:scroll ;}
.ant-table-stripedno /deep/ .ant-table{overflow-x:visible ;width:100%}
.ant-table-striped{margin: auto;}
.ant-table-striped :deep(.table-striped) td {background-color:rgb(206, 192, 192)!important}
.smallBallbox{position:relative;float:right;width:auto;height:auto;margin-bottom: 5px;}
.smallBallboxDiv{position:relative;float:left;margin-left:5px}
.smallBall{position: relative;float: left;width:15px;height: 15px;border-radius:30px ;margin-top: 3px;margin-right:3px}
.sumaryBox{position:relative;float:left;width:100%;height:auto;margin-bottom:8px}
.block100{position:relative;float:left;width:100%}
.sumaryDiv{position: relative;float: left;width:calc(100% / 6);height:50px;margin-right: 8px;padding:5px;color:#fff;
   font-size:0.8rem;
   
   p{margin:0}
}
.lineblock{position: relative;float: left;margin-right: 3px;}
.showobj{
    div{
        border:1px solid #333;
        width:50%;position:relative;float:left;
        border-top:none
    }
    div:nth-child(-n+2){border-top:1px solid #333;}
    div:nth-child(odd){border-right:none}
}

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