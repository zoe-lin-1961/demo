<template>
<div>
  <div style="padding:12px;"><h2><a-icon type="profile"/>&nbsp;&nbsp;帳務報表</h2></div>
<div class="theBox" v-if="this.page=='profile'">

  <div class="centerDiv" >
    <div class="topBox">
     <h3>玩家查詢
    <a-input placeholder="編號/暱稱" style="width:25%"/>
    <a-button danger style="margin-left:8px" @click="moreSearch">進階搜尋</a-button>
    <a-button type="primary"  style="margin-left:8px">查詢</a-button>

    </h3>
    </div>

   
    <div class="bottomBox" >
       <h4>玩家數: 4 </h4>
       <a-table ref="table" class="ant-table-striped" :columns="columns" :data-source="data" :pagination="pagination"  :scroll="{ x: '100%'}"  bordered >    
            <span slot="lastLogin" slot-scope="lastLogin">
            <div class='btnDiv' v-for="(btn,key) in lastLogin" :key="btn">
                <div >
                  <span v-if="key==0">{{btn}}</span>  <a v-if="key==1" @click="toshowIP(btn)">{{btn}}</a>
                </div>
                <a-modal title="IP資訊" :visible="visibleShowIP" 
                   @ok="visibleShowIPOk" @cancel="visibleShowIPCancel" 
                   :centered="true" :maskClosable="false" :footer="null"
                  :maskStyle="maskStyle"
                   >  
                   <div><p>國家:{{ipData['country']}}</p><p>城市:{{ipData['city']}}</p><p>地區:{{ipData['regionName']}}</p><p>電信業者:{{ipData['isp']}}</p></div>
                  </a-modal>
            </div>
            </span>
            <span slot="notice" slot-scope="notice">
            <span  v-for="btn in notice" :key="btn">
                <div v-if="btn=='notice'" class='btnDiv'>
                   <a-button style="background-color:blue;color:#fff" @click="toMadeNote">檢視</a-button>
                </div>
                <span v-if="btn!=='notice' && btn!=='modify' && btn!=='delete'" class='btnDiv'>{{btn}}</span>
                <a-button v-if="btn=='modify'" style="background-color:blue;color:#fff;margin-left:3px" @click="toModifyNote" icon="edit" size="small"></a-button>
                <a-button v-if="btn=='delete'" style="background-color:blue;color:#fff;margin-left:3px" @click="toMadeNoteDelete" icon="delete" size="small"></a-button>
                <a-modal :title="MadeNoteTitle" :visible="visibleNotice" @ok="visibleNoticeOk" @cancel="visibleNoticeCancel" :centered="true" :maskClosable="false">

                    <a-textarea
                        v-model="MadeNoteValue"
                        placeholder="請輸入備註"
                        :auto-size="{ minRows: 3, maxRows: 5 }"
                      />
                </a-modal>

           
            </span>
            </span> 
            <span slot="tradeHis" slot-scope="tradeHis">
            <div class='btnDiv' v-for="btn in tradeHis" :key="btn" >
                <div v-if="btn=='tradeHis'">
                  <a-button style="background-color:blue;color:#fff"  @click="theTradeHis"  icon="search" />
                </div>
            </div>
            </span>
            <span slot="merberNumber" slot-scope="merberNumber"  style="background-color:pink">
            <div class='btnDiv' v-for="btn in merberNumber" :key="btn" >
              <div><a-button   style="background-color:blue;color:#fff;margin-right:2px" size="small" @click="copyName">複製</a-button>  <span>{{btn}}</span></div>
            </div>
            </span>
      </a-table>
      

      <!-- 进阶搜寻的弹窗 开始-->
      <a-modal title="進階搜尋" :visible="visible" @ok="handleOk" @cancel="handleCancel" :centered="true" :maskClosable="false">
         <div>
           <h4 style="margin-bottom:2px">手機號碼</h4>
           <div style="margin-bottom:8px">
            <a-input-group compact><a-select default-value="886" style="width: 30%" size="small" >
                  <a-select-option value="886" >台灣(+886)</a-select-option><a-select-option value="86" >中國大陸(+86)</a-select-option>
                </a-select><a-input :value="phone" style="width: 70%" size="small" placeholder="請輸入完整的電話號碼" />
            </a-input-group>
           </div>
           <div style="position:relative;float:left;width:100%">
           <h4 style="margin-bottom:2px">最後登入的IP</h4>
           <div style="margin-bottom:8px"><a-input style="width: 100%" size="small" ></a-input></div>
           </div>
           <h4 style="margin-bottom:2px">狀態</h4>
           <div style="margin-bottom:8px">
              <a-radio-group  v-model="conterTypeValue"   ><a-radio :value="1" @change="onChangeConterTypeValue">正常</a-radio><a-radio :value="2" @change="onChangeConterTypeValue">凍結</a-radio></a-radio-group>
           </div>
           <h4 style="margin-bottom:2px">餘額</h4>
           <div style="margin-bottom:8px"><a-input style="width:calc(50% - 15px)" placeholder="最低" size="small"/> 到 <a-input style="width:calc(50% - 15px)" placeholder="最高" size="small"/></div>
            <h4 style="margin-bottom:2px">存款餘額</h4>
           <div style="margin-bottom:8px"><a-input style="width:calc(50% - 15px)" placeholder="最低" size="small"/> 到 <a-input style="width:calc(50% - 15px)" placeholder="最高" size="small"/></div>


          <h4 style="margin-bottom:2px">建立時間</h4>
          <div style="margin-bottom:8px"><rangeCalender/></div>

           <h4 style="margin-bottom:2px">最後登入時間</h4>
           <div style="margin-bottom:8px"><rangeCalender/></div>



           <h4 style="margin-bottom:2px">搜尋結果排序</h4>
            <div style="margin-bottom:8px">
              <a-input-group compact>
              <a-select default-value="id" style="width:120px;" size="small">
                <a-select-option value="id" >ID</a-select-option>
                <a-select-option value="reman" >餘額</a-select-option>
                <a-select-option value="moneyFlu" >存款餘額</a-select-option>
                <a-select-option value="thesamIP" >同IP會員數量</a-select-option>
                <a-select-option value="buildTime" >建立時間</a-select-option>
                <a-select-option value="lastLofinTime" >最後登入時間</a-select-option>
                <a-select-option value="handelTime" >處理時間</a-select-option>
              </a-select>
              <a-button size="small">升序</a-button><a-button size="small">降序</a-button>
              </a-input-group>
            </div>
           
         </div>
          <template slot="footer">
            <a-button type="primary" @click="handleOk">確定</a-button>
          </template>
      </a-modal>
      <!-- 进阶搜寻的弹窗 结束-->
    </div>
  </div >

  </div>
  <div v-if="this.page=='detaile'"><detailProfile v-on:chagePageName="chagePageName"  :customer="customer" /></div>
  <!-- <div v-if="this.page=='addplayer'"><addplayer v-on:chagePageName="chagePageName" /></div>
  <div v-if="this.page=='history'"><history v-on:chagePageName="chagePageName" :titleName="histitleName" /></div> -->
  </div>
  

</template>
 
<script>
import moment from 'moment';
import rangeCalender from './rangeCalender';
import detailProfile from './detailProfile';
import axios from 'axios';




const columns = [
  {title: '會員編號',dataIndex: 'merberNumber',key: 'merberNumber',scopedSlots: { customRender: 'merberNumber' },align:'center',width:'150px'},
  {title: '狀態',dataIndex: 'status',key: 'status',align:'center',width:'80px'},
  {title: '餘額',dataIndex: 'remain',key: 'remain',align:'center',width:'100px'},
  {title: '存款餘額',key: 'storeRemain',dataIndex: 'storeRemain',align:'center',width:'100px'},
  {title: '手機號碼',key: 'phoneCode',dataIndex: 'phoneCode',align:'center',width:'120px'},
  {title: '同IP會員數量',key: 'samIpCount',dataIndex: 'samIpCount',align:'center',width:'100px'},
  {title: '建立時間',key: 'buildTime',dataIndex: 'buildTime',align:'center',width:'150px'},
  {title: '最後登入時間/IP',key: 'lastLogin',dataIndex: 'lastLogin',scopedSlots:{ customRender:'lastLogin'},align:'center',width:'150px'},
  {title: '備註',key: 'notice',dataIndex: 'notice',scopedSlots: { customRender: 'notice' },align:'center',width:'150px'},
  {title: '詳細報表',key: 'tradeHis',dataIndex: 'tradeHis',scopedSlots: { customRender: 'tradeHis' },align:'center',width:'120px'},
];
const data=[
  {key: '1',merberNumber: ['AA1234'],merberNumberCopy:'copy',status: '正常',remain: 15000,storeRemain:150000,phoneCode:'0912345678'
  ,samIpCount:7,buildTime:'2021/04/03 23:11:54',lastLogin:['2021/04/03 23:11:54','35.232.180.179'],notice:['notice'],tradeHis:['tradeHis']},
  {key: '2',merberNumber: ['AA1235'],merberNumberCopy:'copy',status: '正常',remain: 15000,storeRemain:150000,phoneCode:'0912345678'
  ,samIpCount:7,buildTime:'2021/04/03 23:11:54',lastLogin:['2021/04/03 23:11:54','35.232.180.179'],notice:['notice'],tradeHis:['tradeHis']},
  {key: '3',merberNumber: ['AA1236'],merberNumberCopy:'copy',status: '正常',remain: 15000,storeRemain:150000,phoneCode:'0912345678'
  ,samIpCount:7,buildTime:'2021/04/03 23:11:54',lastLogin:['2021/04/03 23:11:54','35.232.180.179'],notice:['notice'],tradeHis:['tradeHis']},
  {key: '4',merberNumber: ['AA1237'],merberNumberCopy:'copy',status: '正常',remain: 15000,storeRemain:150000,phoneCode:'0912345678'
  ,samIpCount:7,buildTime:'2021/04/03 23:11:54',lastLogin:['2021/04/03 23:11:54','35.232.180.179'],notice:['notice'],tradeHis:['tradeHis']},
]
export default {
  components:{rangeCalender,detailProfile},

  created(){
  
    

  },

  data() {
    return {
        columns,
        data:data,
        visible:false,
        conterTypeValue:'',
        page:'profile',
        phone:'',
        visibleNotice:false,
        MadeNoteTitle:'',
        MadeNoteValue:'',
        tableScroll:{x:10},
        pagination:{pageSize:5},
        histitleName:'',
        customer:'',
        visibleShowIP:false,
        maskStyle:{'opacity':'0.1','background':'#000000','animation':'none'},
        ipData:{}

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
      //console.log("33332222222222222",e.path[4].childNodes[0].childNodes[0].childNodes[0].childNodes[0].outerText.split('製 ')[1])
      //var name =e.path[5].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].outerText.split('製 ')[1].replace(/^\s\s*/, '').replace(/\s\s*$/, '')
      var name =e.path[4].childNodes[0].childNodes[0].childNodes[0].childNodes[0].outerText.split('製 ')[1].replace(/^\s\s*/, '').replace(/\s\s*$/, '')
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
    // toMadeNoteDelete(e){
    //   var name =e.path[5].childNodes[0].innerText.split('製')[1].replace(/^\s\s*/, '').replace(/\s\s*$/, '')
    //   this.data.map((item)=>{

    //     if(item.merberNumber[0]==name){
    //       var arr=['notice']
    //       item.notice=arr
    //       console.log(item,"123")
    //       // item.notice[0]='notice'
    //       // delete item.notice[1]
    //       // delete item.notice[2]
    //     }
    //   })

    //   console.log(name,"1234")
    // },
    toModifyNote(e){
       var theName =e.path[4].childNodes[0].childNodes[0].childNodes[0].childNodes[0].outerText.split('製 ')[1]
      this.MadeNoteTitle="備註 ("+theName+")"
      this.visibleNotice=true
       this.MadeNoteValue=''
       this.data.map((item)=>{
         if(item.merberNumber[0]==theName){
             if(item.notice.length==3){
               this.MadeNoteValue=item.notice[0]

             }
            
         }
      })
    },
    visibleNoticeCancel(){
      this.visibleNotice=false
    },
       
    theTradeHis(e){
      var name =e.path[5].childNodes[0].innerText.split('製')[1].replace(/^\s\s*/, '').replace(/\s\s*$/, '')
      console.log(name,123456)
      this.page='detaile'
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
    visibleShowIPOk(){
      this.visibleShowIP=false
      this.ipData={}
    },
    visibleShowIPCancel(){
      this.visibleShowIP=false
      this.ipData={}
    },

  
  }
};
</script>
 
<style scoped lang="less">
.ant-table-striped{margin: auto; }
.btnDiv{position:relative;float:left;width: 100%;display: flex;flex-direction: row;justify-content: center;align-items: center;}
.btnDiv div{position:relative;float:left;margin:0 2px 0 2px;}

.pageCenter{float: none !important; text-align: center}

// .ant-table-pagination {float: none !important; text-align: center}

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