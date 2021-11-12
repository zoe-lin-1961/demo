<template>
<div>
  <div style="padding:12px;"><h2><a-icon type="link"/>&nbsp;&nbsp;在線玩家</h2></div>
<div class="theBox" v-if="this.page=='playList'">

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

       <a-table class="ant-table-striped" :columns="columns" :data-source="data" bordered  
            :scroll="{ x: '100%'}"
       >  
          <span slot="ip" slot-scope="ip">
          <div class='btnDiv' v-if="ip">
              <a  @click="toshowIP(ip)">{{ip}}</a>
          </div>
          </span>
          <span slot="btn" slot-scope="btn">
          <div class='btnDiv' v-for="b in btn" :key="b">
              <div v-if="b=='btn'">
                <a-button style="background-color:blue;color:#fff" icon="user-delete" @click="userDelete">踢下線</a-button>
              </div>
          </div>
          </span>
          <span slot="merber" slot-scope="merber"  style="background-color:pink">
            <div class='btnDiv' v-for="btn in merber" :key="btn" >
              <div><a-button   style="background-color:blue;color:#fff;margin-right:2px" size="small" @click="copyName">複製</a-button>  <span>{{btn}}</span></div>
            </div>
            </span>
          <span slot="lastlogin" slot-scope="lastlogin">
            <div class='btnDiv' v-for="(btn,key) in lastlogin" :key="btn">
                <div >
                  <span v-if="key==0">{{btn}}</span>   <a v-if="key==1" @click="toshowIP(btn)">{{btn}}</a>

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
           <h4 style="margin-bottom:2px">IP</h4>
           <div style="margin-bottom:8px"><a-input style="width: 48%" size="small" ><a-icon slot="prefix" type="idcard" /></a-input></div>
           </div>
           <div style="position:relative;float:left;width:100%;">
           <h4 style="margin-bottom:2px">上次IP</h4>
           <div style="margin-bottom:8px"><a-input style="width: 48%" size="small" ><a-icon slot="prefix" type="idcard" /></a-input></div>
           </div>

          <h4 style="margin-bottom:2px">本次登入時間</h4>
           <div style="margin-bottom:8px">
             <rangeCalender/>
           </div>

           <h4 style="margin-bottom:2px">上次登入時間</h4>
          <div style="margin-bottom:8px">
            <rangeCalender/>
           </div>

           <h4 style="margin-bottom:2px">持續時間</h4>
           <div style="margin-bottom:8px">
             <rangeCalender/>
           </div>


           <h4 style="margin-bottom:2px">搜尋結果排序</h4>
            <div style="margin-bottom:8px">
              <a-input-group compact>
              <a-select default-value="id" style="width:120px;" size="small">
                <a-select-option value="id" >會員帳號</a-select-option>
                <a-select-option value="moneyFlu" >IP</a-select-option>
                <a-select-option value="buildTime" >上次IP</a-select-option>
                <a-select-option value="lastLofinTime" >本次登入時間</a-select-option>
                <a-select-option value="handelTime" >上次登入時間</a-select-option>
                <a-select-option value="reman" >持續時間</a-select-option>
                
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
import axios from 'axios'

const columns = [
  {title: '會員帳號',dataIndex: 'merber',key: 'merber',scopedSlots: { customRender: 'merber' },align:'center',width:'150px'},
  {title: '餘額',dataIndex: 'remain',key: 'remain',align:'center',width:'100px'},
  {title: '登入設備',dataIndex: 'loginDevice',key: 'loginDevice',align:'center',width:'100px'},
  {title: 'IP',dataIndex: 'ip',key: 'ip',align:'center',width:'150px',scopedSlots:{ customRender:'ip'}},
  {title: '同IP會員數量',dataIndex: 'thesameipcount',key: 'thesameipcount',align:'center',width:'100px'},
  {title: '本次登入時間',key: 'logintime',dataIndex: 'logintime',align:'center',width:'120px'},
  {title: '在線時間',key: 'onlinetime',dataIndex: 'onlinetime',align:'center',width:'120px'},
  {title: '上次登入時間/IP',key: 'lastlogin',dataIndex: 'lastlogin',align:'center',scopedSlots:{ customRender:'lastlogin'},width:'150px'},
  {title: '操作',key: 'btn',dataIndex: 'btn',scopedSlots: { customRender: 'btn' },align:'center',width:'120px'},
];
const data=[
  {key:'1',merber:['AA1234'],remain:'1235555',loginDevice:'pc',ip:'36.232.180.179',thesameipcount:'3',
  logintime:'2021/04/23 03:11:54',onlinetime:"05:06:30",lastlogin:['2021/04/23 00:59:03','35.232.180.179'],btn:['btn']},
  {key:'2',merber:['AA1235'],remain:'1235555',loginDevice:'pc',ip:'36.232.180.179',thesameipcount:'3',
  logintime:'2021/04/23 03:11:54',onlinetime:"05:06:30",lastlogin:['2021/04/23 00:59:03','35.232.180.179'],btn:['btn']},
  {key:'3',merber:['AA1236'],remain:'1235555',loginDevice:'pc',ip:'36.232.180.179',thesameipcount:'3',
  logintime:'2021/04/23 03:11:54',onlinetime:"05:06:30",lastlogin:['2021/04/23 00:59:03','35.232.180.179'],btn:['btn']},
  {key:'4',merber:['AA1237'],remain:'1235555',loginDevice:'pc',ip:'36.232.180.179',thesameipcount:'3',
  logintime:'2021/04/23 03:11:54',onlinetime:"05:06:30",lastlogin:['2021/04/23 00:59:03','35.232.180.179'],btn:['btn']},
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
    userDelete(e){
      var name =e.path[5].childNodes[0].childNodes[0].childNodes[0].childNodes[0].outerText.split('製')[1].replace(/^\s\s*/, '').replace(/\s\s*$/, '')
      

      //var k=this.selectBall.indexOf(obj)
      //this.$delete(this.selectBall,k)

      this.data.map((item)=>{
        if(item.merber[0]==name){
          var that=this
          this.$confirm({
                    title: '踢掉玩家',
                    content:'確定踢掉這個玩家?',
                    onOk() {
                            var k=that.data.indexOf(item)
                            that.$delete(that.data,k)
                    },
                    onCancel(){
                      console.log('留你一条小命')
                    }
                   
          })
          
         

        }
      })
      //merber[0]
      // console.log(e.path[5].childNodes[0].childNodes[0].childNodes[0].childNodes[0].outerText.split('製')[1].replace(/^\s\s*/, '').replace(/\s\s*$/, ''),"踢掉....")
    }

  
  }
};
</script>
 
<style scoped lang="less">
.ant-table-striped{margin: auto;}
.btnDiv{position:relative;float:left;width: 100%;display: flex;flex-direction: row;justify-content: center;align-items: center;}
.btnDiv div{position:relative;float:left;margin:0 2px 0 2px;}
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