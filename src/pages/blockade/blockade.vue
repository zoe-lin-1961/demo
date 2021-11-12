<template>
<div>
  <div style="padding:12px;"><h2><a-icon type="disconnect"/>&nbsp;&nbsp;凍結玩家</h2></div>
<div class="theBox" v-if="this.page=='blockade'">

  <div class="centerDiv" >
    <div class="topBox">
     <h3>玩家查詢
    <a-input placeholder="編號/暱稱" style="width:25%"/>
    <a-button danger style="margin-left:8px" @click="moreSearch">進階搜尋</a-button>
    <a-button type="primary"  style="margin-left:8px">查詢</a-button>
    <a-button type="primary"  style="margin-left:8px" @click="addblockade">新增凍結玩家</a-button>
    </h3>
    </div>

   
    <div class="bottomBox" >
       <h4>玩家數: 59 </h4>
       <a-table class="ant-table-striped" :columns="columns" :data-source="data" bordered 
          :scroll="{ x: '100%'}"
       >
         <span slot="merberNumber" slot-scope="merberNumber">
          <div class='btnDiv' v-for="btn in merberNumber" :key="btn">
            <div><a-button   style="background-color:blue;color:#fff;margin-right:2px" size="small" @click="copyName">複製</a-button><span>{{btn}}</span></div>
          </div>
          </span>
          <!-- <span slot="notice" slot-scope="notice">
            <div class='btnDiv' v-for="btn in notice" :key="btn">
                <div v-if="btn=='notice'">
                  <a-button style="background-color:blue;color:#fff" @click="toMadeNote">檢視</a-button>
                </div>
                 <div v-if="btn=='modify'">
                  <a-button style="background-color:blue;color:#fff" @click="toMadeNote" icon="edit"></a-button>
                </div>
                <div v-if="btn=='delete'">
                  <a-button style="background-color:blue;color:#fff" @click="toMadeNoteDelete" icon="delete"></a-button>
                </div>
                <div v-if="btn!=='notice' && btn!=='modify' && btn!=='delete'">
                  <span>{{btn}}</span>
                </div>

              备注的弹窗 开始 
                <a-modal :title="MadeNoteTitle" :visible="visibleNotice" @ok="visibleNoticeOk" @cancel="visibleNoticeCancel" :centered="true" :maskClosable="false">

                    <a-textarea
                        v-model="MadeNoteValue"
                        placeholder="請輸入備註"
                        :auto-size="{ minRows: 3, maxRows: 5 }"
                      />
                </a-modal> 

                 备注的弹窗 结束 
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
          <span slot="operater" slot-scope="operater">
            <div class='btnDiv' v-for="btn in operater" :key="btn">
                <div v-if="btn=='operater'">
                  <a-button style="background-color:blue;color:#fff" icon="setting"  @click="operator"/>
                </div>

                <!-- 操作的弹窗 开始 -->
                <a-modal :title="OparaTitle" :visible="visibleOpara" @ok="visibleOparaOk" @cancel="visibleOparaCancel" :centered="true" :maskClosable="false">
                       <div>
                         <h4 style="margin-bottom:2px">帳號</h4>
                         <div>{{OparaValue}}</div>
                       </div>
                        <div style="position:relative;float:left;width:100%">
                        <h4 style="margin-bottom:2px">原因</h4>
                        <div style="margin-bottom:8px"><a-input style="width: 100%" size="small"  :value="OparaWhy" ></a-input></div>
                        </div>
                        <div style="position:relative;float:left;width:100%">
                        <h4 style="margin-bottom:2px">選擇類型</h4>
                        <div style="margin-bottom:8px">
                           <a-radio-group name="radioGroup" :default-value="1"  v-model="conterOprateValue" > 
                                <a-radio :value="1" @change="onChangeConterOprateValue">
                                  一般
                                </a-radio>
                                <a-radio :value="2" @change="onChangeConterOprateValue">
                                  無限期凍結
                                </a-radio>
                              </a-radio-group>
                        </div>
                        </div>

                        <div v-if="conterOprateValue==1" style="position:relative;float:left;width:100%">
                          <h4 style="margin-bottom:2px">選擇凍結時間</h4>
                          <rangeCalender :size="size"/>
                        </div>

                        <div style="position:relative;float:left;width:100%">
                        <h4 style="margin-bottom:2px">備註</h4>
                        <div style="margin-bottom:8px">
                           <a-input placeholder="備註" size="small"/>
                        </div>
                        </div>
                </a-modal>

                <!-- 操作的弹窗 结束 -->
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
           <h4 style="margin-bottom:2px">建立人</h4>
           <div style="margin-bottom:8px"><a-input style="width: 48%" size="small" ><a-icon slot="prefix" type="idcard" /></a-input></div>
           </div>
            <div style="position:relative;float:left;width:100%;">
           <h4 style="margin-bottom:2px">修改人</h4>
           <div style="margin-bottom:8px"><a-input style="width: 48%" size="small" ><a-icon slot="prefix" type="idcard" /></a-input></div>
           </div>
           <h4 style="margin-bottom:2px">選擇凍結類型</h4>
           <div style="margin-bottom:8px">
              <a-radio-group  v-model="conterTypeValue"   >
                <a-radio :value="1" @change="onChangeConterTypeValue">一般</a-radio>
                <a-radio :value="2" @change="onChangeConterTypeValue">無限期凍結</a-radio>
              </a-radio-group>
           </div>
      

          <h4 style="margin-bottom:2px">建立時間</h4>
           <div style="margin-bottom:8px">
             <rangeCalender :size="size" />
           </div>

          <h4 style="margin-bottom:2px">修改時間</h4>
           <div style="margin-bottom:8px">
             <rangeCalender :size="size" />
           </div>


           <h4 style="margin-bottom:2px">搜尋結果排序</h4>
            <div style="margin-bottom:8px">
              <a-input-group compact>
              <a-select default-value="id" style="width:120px;" size="small">
                <a-select-option value="id" >ID</a-select-option>
                <a-select-option value="reman" >會員編號</a-select-option>
                <a-select-option value="moneyFlu" >建立人</a-select-option>
                <a-select-option value="buildTime" >修改人</a-select-option>
                <a-select-option value="lastLofinTime" >建立時間</a-select-option>
                <a-select-option value="handelTime" >修改時間</a-select-option>
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
  <div v-if="this.page=='addblockade'"><addBlockade v-on:chagePageName="chagePageName"  /></div>
  </div>
  

</template>
 
<script>
import moment from 'moment';
import rangeCalender from './rangeCalender';
import addBlockade from './addBlockade';

// import addBlockade from './addblockade';



const columns = [
  {title: '會員編號',dataIndex: 'merberNumber',key: 'merberNumber',scopedSlots: {customRender: 'merberNumber'},align:'center',width:'150px'},
  {title: '狀態',dataIndex: 'status',key: 'status',align:'center',width:'100px'},
  {title: '凍結時間',dataIndex: 'freezTime',key: 'freezTime',align:'center',width:'250px'},
  {title: '原因',dataIndex: 'reason',key: 'reason',align:'center',width:'250px'},
  {title: '創建人',dataIndex: 'founder',key: 'founder',align:'center',width:'100px'},
  {title: '創建時間',dataIndex: 'foundTime',key: 'foundTime',align:'center',width:'250px'},
  {title: '修改人',dataIndex: 'modifier',key: 'modifier',align:'center',width:'100px'},
  {title: '修改時間',dataIndex: 'modifyTime',key: 'modifyTime',align:'center',width:'120px'},
  {title: '備註',key: 'notice',dataIndex: 'notice',scopedSlots: { customRender: 'notice' },align:'center',width:'120px'},
  {title: '操作',key: 'operater',dataIndex: 'operater',scopedSlots: { customRender: 'operater' },align:'center',width:'120px'},
];
const data=[
  {key: '1',merberNumber: ['AA0001'],status: '凍結',freezTime:'無限期凍結',reason:'利用BUG,非法獲取遊戲幣',
  founder:'AR147',foundTime:'2021/04/03 23:11:54',modifier:'SS501',modifyTime:'2021/04/07 23:11:54',notice:['notice'],operater:['operater']},
  {key: '2',merberNumber: ['AA0002'],status: '凍結',freezTime:'2021/10/30-2025/10/30',reason:'惡意洗屏',
  founder:'AR147',foundTime:'2021/04/03 23:11:54',modifier:'李東海',modifyTime:'2021/04/07 23:11:54',notice:['notice'],operater:['operater']},
  {key: '3',merberNumber: ['AA0003'],status: '凍結',freezTime:'2021/10/30-2025/10/30',reason:'惡意洗屏',
  founder:'AR772',foundTime:'2021/04/03 23:11:54',modifier:'李梅玲',modifyTime:'2021/04/07 23:11:54',notice:['notice'],operater:['operater']},
  {key: '4',merberNumber: ['AA0004'],status: '凍結',freezTime:'2021/10/30-2025/10/30',reason:'假冒官方人員',
  founder:'AR168',foundTime:'2021/04/03 23:11:54',modifier:'李保田',modifyTime:'2021/04/07 23:11:54',notice:['notice'],operater:['operater']},
]
export default {
  // components:{rangeCalender,addplayer},
  // components:{rangeCalender,addBlockade},
  components:{rangeCalender,addBlockade},
  created(){
  
    

  },
  data() {
    return {
        columns,
        data,
        visible:false,
        conterTypeValue:'',
        page:'blockade',
        phone:'',
        size:'small',
        visibleNotice:false,
        MadeNoteTitle:'',
        MadeNoteValue:'',
        visibleOpara:false,
        OparaTitle:'更改凍結狀態',
        OparaValue:'',
        OparaWhy:'',
        conterOprateValue:'',
        maskStyle:{'opacity':'0.1','background':'#000000','animation':'none'},
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
    addblockade(){

      this.page='addblockade'
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
    toMadeNote(e){
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
   visibleNoticeCancel(){
      this.visibleNotice=false
    },
    toMadeNoteDelete(e){

      //console.log("吊死在眉山上....",e.path[4].childNodes[0].childNodes[0].childNodes[0].childNodes[0].outerText.split('製 ')[1].replace(/^\s\s*/, '').replace(/\s\s*$/, ''))
      //var name =e.path[5].childNodes[0].innerText.split('製')[1].replace(/^\s\s*/, '').replace(/\s\s*$/, '')
      //  var name =e.path[5].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].outerText.split('製 ')[1].replace(/^\s\s*/, '').replace(/\s\s*$/, '')
      var name =e.path[4].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].outerText
      //     this.data.map((item)=>{

      //       if(item.merberNumber[0]==name){
      //         var arr=['notice']
      //         item.notice=arr
      //         console.log(item,"123")
      //         // item.notice[0]='notice'
      //         // delete item.notice[1]
      //         // delete item.notice[2]
      //       }
      //     })
      //   var name =e.path[4].childNodes[0].childNodes[0].childNodes[0].childNodes[0].outerText.split('製 ')[1].replace(/^\s\s*/, '').replace(/\s\s*$/, '')
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
      
    },
    toModifyNote(e){
       var theName =e.path[4].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].outerText
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
    operator(e){
      var name =e.path[5].childNodes[0].innerText.split('製')[1].replace(/^\s\s*/, '').replace(/\s\s*$/, '')
      this.OparaValue=name 

      var why =e.path[5].childNodes[3].innerText.replace(/^\s\s*/, '').replace(/\s\s*$/, '')

      // OparaValue
      this.OparaWhy=why
      this.visibleOpara=true
    },
    visibleOparaOk(){
      this.visibleOpara=false
      this.OparaWhy=''
    },
    visibleOparaCancel(){
      this.visibleOpara=false
      this.OparaWhy=''
    },
    onChangeConterOprateValue(e){
      this.conterOprateValue=e.target.value
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