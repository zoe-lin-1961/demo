<template>
 <div>
 <div v-if="page=='openpalte'" class="theBox">
   <h3>遊戲1 - 新增比賽 <a-button  icon="left-circle" @click="lastPage" size="small" style="margin-left:5px">回上一頁</a-button></h3>

   <div class="centerDiv" ref="centerDiv">
      <h4>新增比賽 - 配置參賽信鴿 - 賠率設置</h4>
      <div class="top" ref="top"> 
         <h5>請輸入參賽賽鴿的賠率 
             <!-- <a-button v-if="openSetScore==true" size="small"  type="primary" @click="allSet">完成修改</a-button> -->
         </h5>
         <div class="scoreDiv">
             <div class="scoreBox"  v-for="s in score" :key="s.number" >
                <div class="scoreNumber" @click="setNum(s)">{{s.number}}</div>
                <template>
                    <div class="scoreCount" @click="setScore(s)">
                   {{s.score}}
                    </div>
                </template>

                <template v-if="openSetScore==true">
              
                    <div  v-if="isNaN(s.score)==false"  class="scoreCount setScore" >

                        <div class="setinput" >
                            <a-input style="height:100%;text-align:center;border:none" ref="setValue" :v-model:value="s.score" :placeholder="s.score"   @blur="setValue" />
                        </div>
                    </div>
                    <div  v-if="isNaN(s.score)==true"  class="scoreCount setScore" style="border:2px solid red" >

                        <div class="setinput" >
                            <a-input class="errInput" style="height:100%;text-align:center;border:none" ref="setValue" :v-model:value="s.score"  :placeholder="s.score"   @blur="setValue" />
                        </div>
                    </div>
                </template>
       
                
            </div> 
         </div>
         <div style="position:relative;float:left;height:auto;margin-bottom:15px">
            <!-- <h5 >請輸入本次預期的收益比例</h5> -->
            <!-- <a-input placeholder="0-95" style="width:100px" size="small"/> <span> % </span>  -->
            <!-- <a-button danger size="small" style="margin-left:20px" @click="calcAllScore">計算賠率</a-button> -->
            <a-button danger size="small" @click="calcAllScore">計算賠率</a-button>
            <span style="font-size:8px ">(本次預期的收益比例,功能未開發)</span>
          </div>
      </div>
      
      <div class="bottom"  style="backgroud-color:red" >
         
          <a-divider  style="margin-bottom:0"/>
          <h5>從預設值更改押注區賠率 <span>v</span></h5>
          <div :v-model="selectBall">
             <div v-if="selectBall.length==0">
                 <div class="cir"></div><div class="cir"></div> 
             </div> 
             <div v-if="selectBall.length==1">
                 <div class="cir greenBall">{{selectBall[0].number}}</div><div class="cir"></div> 
             </div> 
             <div v-if="selectBall.length==2">
                 <div class="cir greenBall">{{selectBall[0].number}}</div><div class="cir greenBall">{{selectBall[1].number}}</div> 
             </div> 
            
            <a-input ref="isTrobleInput" style="width:100px"  size="small" v-model="setNewScore" :value="setNewScore"   @change="toSetNewScore"/>
            <!-- <a-input v-if="isTrobleInput==false"  style="width:100px" size="small" v-model="setNewScore" :value="setNewScore"   @change="toSetNewScore"/>
            <a-input v-if="isTrobleInput==true"  style="width:100px;border:2px solid red" size="small" v-model="setNewScore" :value="setNewScore"   @change="toSetNewScore"/> -->
            
            <a-button danger  style="margin-left:5px" size="small" @click="reSetNum">重設數字</a-button>
            <a-button v-if="this.selectBall.length==2" type="primary"  style="margin-left:5px" size="small" @click="reSetScore">設置新賠率</a-button>
            <span style="font-size:0.8rem"> (點選上方的號碼,查詢該注區賠率)</span>
          </div>
          <!-- <span  v-if="isTrobleInput==true"  style="color:red">{{isTrobleInputNotice}}</span> -->
          <h5>所有注區賠率</h5>

          <div class="ballBax" :style="{height: bottomHeight}"  >
            <div :v-model="showBalls"  style="position:relative;float:left;width:100%;height:auto;" >
                <div v-for="b in showBalls" :key="b.key">
                   
                <div class="ballDiv" v-if="b.twoBall==false"  >
                    <div class="cir"></div>
                    <div class="cir greenBall">{{b.numTwo}}</div>
                    <div class="ballScoreDiv" size="small">{{b.odds}}</div>
                    <!-- <a-input  style="width:calc(100% - 70px);text-align:center" size="small" :value="b.odds" disabled="true"/>  -->
                </div>
                <div class="ballDiv" v-if="b.twoBall==true">
                    <div class="cir greenBall">{{b.numOne}}</div>
                    <div class="cir greenBall">{{b.numTwo}}</div> 
                    <div class="ballScoreDiv" size="small">{{b.odds}}</div>
                    <!-- <a-input  style="width:calc(100% - 70px);text-align:center" size="small" disabled="true" />  -->
                </div>
                </div> 
            </div>
            
          </div>
          <div class="btnBox">
             <a-checkbox @change="onCheckAll" style="line-height:30px">我已確認所填所有賠率正確無誤</a-checkbox>
            <a-button type="primary"  style="margin-left:20px" @click="backFirstPage">查詢</a-button>
            <a-button danger style="margin-left:20px">取消</a-button>
          </div>
      </div>
    
      
   </div>
 </div>

 </div>
</template>
<script>


export default {
  data() {
    return {
      score:[],
      balls:[],
      showBalls:[],
      topHeight:0,
      centerDivHeight:0,
      bottomHeight:'0px',
      selectBall:[],
      openSetScore:false,
      pushBall:false,
      fatherPage:'odds',
      page:'openpalte',
      setNewScore:'',
      toSetNewScoreValue:'',
      onCheckAllStatus:false,
    //   isTrobleInput:false,
    //   isTrobleInputNotice:''
    };
  },
  created(){
    
     this.initCreated();
      console.log("window",window,document)
  },
  mounted(){
      this.topHeight=this.$refs.top.clientHeight
      this.centerDivHeight=this.$refs.centerDiv.clientHeight
     // console.log(this.$refs.top,this.$refs.centerDiv,"this.$refs.top,this.$refs.centerDiv7777")
      this.bottomHeight= (this.centerDivHeight-60- 250)+'px'
      
  },



  methods:{
   lastPage(){
       this.$emit('fPage',this.fatherPage)
   },
   initCreated(){
       var arr=[]
       for(var i=1;i<=40;i++){
           var obj={}
           obj.number=i
           obj.score='請輸入賠率'
           obj.isSet=false
           arr.push(obj)
           if(i!==5){
              obj.score=75
              obj.isSet=true
           }
       }
       this.score=arr

       var ballArr=[]
       for(var j=1;j<=40;j++){
           var ob={}
           ob.numbers=[null,j]
           ob.isSet=false
           ob.odds=null
           ob.twoBall=false
           ob.numOne=null
           ob.numTwo=j
           ballArr.push(ob)
       }
       var twoBallArr=[[1,2].toString()]
       for(var a=1;a<=40;a++){
           for(var b=1;b<=40;b++){
               if(a!==b){
                   var c1=[a,b].toString()
                    var c2=[b,a].toString()
                   if(twoBallArr.indexOf(c1)== -1 && twoBallArr.indexOf(c2)== -1 ){ twoBallArr.push(c1)}
               }
           }
       }
       twoBallArr.map((item)=>{
            var cb={}
            cb.number=[item.split(',')[0],item.split(',')[1]]
            cb.isSet=false
            cb.odds=null
            cb.twoBall=true
            cb.numOne=item.split(',')[0]
            cb.numTwo=item.split(',')[1]
            // theTwo.push(cb)
            ballArr.push(cb)
       })

       this.balls=ballArr
       this.showBalls=ballArr
        
   },
   allSet(){
       this.openSetScore=false
   },
   setScore(obj){
       console.log(obj,"obj3322222",window)
       this.openSetScore=true

        var that=this
        //按下enter键之后可以执行
            document.onkeydown=function(ev){
                var event=ev ||event
                if(event.keyCode==13){
                    if(that.openSetScore==true){
                        that.allSet()
                        that.setValue(event)
                        that.calcAllScore()
                    }
                }
            }
   },
   setValue(e){       
       var number=e.path[3].children[0].innerHTML
       var value =Number(e.target._value)

       console.log(value,"value33222")
       
       this.score.map((item)=>{
           if(item.number==number){
               if(isNaN(value)==true){
                   item.score="請輸入分數"
               }else{
                   if(value<0){
                       item.score="賠率需>1"
                   }
                   if(value>0 && value<1){
                       item.score="賠率需>1"
                
                   }
                   if(value>1){
                        item.score=value
                        if(this.selectBall.length==1){this.setNewScore=value}
                   }
                   if(value==0){
                       item.score=value
                       if(this.selectBall.length==1){this.setNewScore=value}
                   }

                  
                   
               }
           }
       })
   },

   toSetNewScore(e){
     //  this.toSetNewScoreValue=e.target._value

     console.log(e.target._value)
         
   },
   reSetScore(){
       var ballone=""
       var balltwo=""
       if(this.selectBall[0].number>this.selectBall[1].number){
            ballone =this.selectBall[1].number
            balltwo =this.selectBall[0].number
       }
       
       if(this.selectBall[0].number<this.selectBall[1].number){
           ballone =this.selectBall[0].number
            balltwo =this.selectBall[1].number
       }

       this.showBalls.map((item)=>{
           if(item.numOne==ballone && item.numTwo==balltwo){
               console.log(this.setNewScore,"883322")
                if(this.setNewScore<0){
                       //this.setNewScore="請輸入大於0的數字"
                       
                    //    this.isTrobleInput=true
                    //    this.isTrobleInputNotice="賠率需>1"
                     console.log(this.$refs.isTrobleInput.$refs.input,"21A33")


                    this.setNewScore=item.odds
                    this.$refs.isTrobleInput.$refs.input.setAttribute("class", "isTrobleInput ant-input ant-input-sm")
                    this.$confirm({
                    title: '賠率設置錯誤',
                    content:`賠率需>1`,
                    onOk() {
                    console.log('OK');
                    },
                    cancelButtonProps: { style: { display: 'none' } }                 
                   })
                    // this.$refs.isTrobleInput.$refs.input.setAttribute("placeholder", "賠率需>1")
                   
                }
                if(this.setNewScore>0 && this.setNewScore<1){
                       //this.setNewScore="小數需>1"
                       this.setNewScore=item.odds
                    //    this.isTrobleInput=true
                    //    this.isTrobleInputNotice="賠率需>1"
                     
                       this.$refs.isTrobleInput.$refs.input.setAttribute("class", "isTrobleInput ant-input ant-input-sm")
                    //    this.$refs.isTrobleInput.$refs.input.setAttribute("placeholder", "賠率需>1")
                    this.$confirm({
                    title: '賠率設置錯誤',
                    content:`賠率需>1`,
                    onOk() {
                    console.log('OK');
                    },
                    cancelButtonProps: { style: { display: 'none' } }                 
                   })
                       console.log(item.odds,"item.odds.....")
                }

                if(isNaN(this.setNewScore)){
                    //this.setNewScore="不是數字"
                    this.setNewScore=item.odds
                    // this.isTrobleInput=true
                    // this.isTrobleInputNotice="不是數字"
                    this.$refs.isTrobleInput.$refs.input.setAttribute("class", "isTrobleInput ant-input ant-input-sm")
                     this.$confirm({
                    title: '賠率設置錯誤',
                    content:`賠率需>1`,
                    onOk() {
                    console.log('OK');
                    },
                    cancelButtonProps: { style: { display: 'none' } }                 
                   })
                    // this.$refs.isTrobleInput.$refs.input.setAttribute("placeholder", "賠率需>1")
                }

                if(this.setNewScore>1){
                    item.odds=this.setNewScore
                    // this.isTrobleInput=false
                    this.$refs.isTrobleInput.$refs.input.removeAttribute("class", "isTrobleInput")
                    this.$refs.isTrobleInput.$refs.input.setAttribute("class", "ant-input ant-input-sm")
                    // this.$refs.isTrobleInput.$refs.input.setAttribute("placeholder", this.setNewScore)
                }
                if(this.setNewScore==0){
                    item.odds=this.setNewScore
                     this.$refs.isTrobleInput.$refs.input.removeAttribute("class", "isTrobleInput")
                    this.$refs.isTrobleInput.$refs.input.setAttribute("class", "ant-input ant-input-sm")
                    // this.$refs.isTrobleInput.$refs.input.setAttribute("placeholder", this.setNewScore)
                    // this.isTrobleInput=false
                    // this.$refs.isTrobleInput.$refs.input.setAttribute("class", "ant-input ant-input-sm")
                }
               //item.odds=this.setNewScore
           }
       })

       var divArrr=document.getElementsByClassName('ballDiv')
               for(var j=0;j<divArrr.length-1;j++){
                //    divArrr[j].setAttribute("class", "ballDiv")
                   if(divArrr[j].childNodes[0].innerHTML==ballone && divArrr[j].childNodes[1].innerHTML==balltwo){
                       divArrr[j].scrollIntoView()
                    //   divArrr[j].setAttribute("class", "ballDiv viewDIv")
                    //   console.log(this.setNewScore,"this.setNewScore7788****")
                    //   this.setNewScore=divArrr[j].childNodes[2].innerHTML
                   }
               }
   },
   setNum(obj){

       //判断obj是否在数组里面

       var hasD = this.selectBall.some(function(item){return item.number==obj.number})
           if(hasD==false){
                if(this.selectBall.length<=1){
                     this.selectBall.push(obj)
                }
                if(this.selectBall.length==2){
                  console.log(this.selectBall,"MIAO")
                  var first = this.selectBall[0]
                  var second =this.selectBall[1]
                  if(this.selectBall[0].number>this.selectBall[1].number){
                     this.selectBall[0]=second
                     this.selectBall[1]=first
                  }
                }
            }
           if(hasD==true){
           var k=this.selectBall.indexOf(obj)
           this.$delete(this.selectBall,k)
           
           }

           //检查显示的数组里面前40个是否有填写了
           var isClacArr=this.showBalls.filter((item,key)=> key<40 && item.odds!==null)
           var that =this
           if(isClacArr.length>0){
              console.log("已有计算了..") 
              
            }else if(isClacArr.length==0){
                console.log("还没计算")  
                this.$confirm({
                    title: '賠率還沒計算',
                    content:'賠率還沒計算,請計算好賠率之後再選擇數字',
                    onOk() {
                            that.reSetNum()
                
                    },
                    cancelButtonProps: { style: { display: 'none' } }                 
               })
            }
        

           //判断要显示的数组
           var arr=[]
           if(this.selectBall[0]==undefined){
                arr=[]
                arr.length=0
           }
           if(this.selectBall[0]!==undefined && this.selectBall[1]==undefined){
                arr[0]=this.selectBall[0].number
                
           }
           if(this.selectBall[1]!==undefined){
               if(this.selectBall[0].number<this.selectBall[1].number){
                   arr[0]=this.selectBall[0].number
                   arr[1]=this.selectBall[1].number
               }
               if(this.selectBall[1].number<this.selectBall[0].number){
                   arr[0]=this.selectBall[1].number
                   arr[1]=this.selectBall[0].number
               }
           }

           if(arr.length==1){
               var divArr=document.getElementsByClassName('ballDiv')
               for(var i=0;i<divArr.length-1;i++){
                    divArr[i].setAttribute("class", "ballDiv")
                   if(divArr[i].childNodes[0].innerHTML=='' && divArr[i].childNodes[1].innerHTML==arr[0]){
                       divArr[i].scrollIntoView()
                       divArr[i].setAttribute("class", "ballDiv viewDIv")
                       this.setNewScore=divArr[i].childNodes[2].innerHTML
                   }
               }
           }
           if(arr.length==2){
               var divArrr=document.getElementsByClassName('ballDiv')
               for(var j=0;j<divArrr.length-1;j++){
                   divArrr[j].setAttribute("class", "ballDiv")
                   if(divArrr[j].childNodes[0].innerHTML==arr[0] && divArrr[j].childNodes[1].innerHTML==arr[1]){
                       divArrr[j].scrollIntoView()
                      divArrr[j].setAttribute("class", "ballDiv viewDIv")
                      this.setNewScore=divArrr[j].childNodes[2].innerHTML
                   }
               }
           }

           if(arr.length==0){
               var divAR=document.getElementsByClassName('ballDiv')
               this.setNewScore=''
               for(var m=0;m<divAR.length-1;m++){
                   divAR[0].scrollIntoView()
                   divAR[m].setAttribute("class", "ballDiv")
               }
           }

           
   },

   addvalue(data){
       console.log(data,"123321addvalue")
       this.score.map((item)=>{
           if(item.number==data.number){
               var score = item.score
               score = score+1
               item.score=score
           }
       })
   },
   disvalue(data){
       console.log(data,"123321disvalue")
       this.score.map((item)=>{
           if(item.number==data.number && item.score>0){
               var score = item.score
               score = score-1
               item.score=score
           }
           if(item.number==data.number && item.score==0){
               alert("最小值為0,不可以再減了")
           }
       })
   },
   reSetNum(){
       console.log("删除了")
       this.selectBall=[]
       this.selectBall.length=0
       this.setNewScore=''
       var divAR=document.getElementsByClassName('ballDiv')
       for(var m=0;m<divAR.length-1;m++){
            divAR[m].setAttribute("class", "ballDiv")
            divAR[0].scrollIntoView()
       }
   },
   backFirstPage(){
       console.log("123456,都结束了...")
       if(this.onCheckAllStatus==true){
           location.reload()
       }

       if(this.onCheckAllStatus==false){
  
             this.$confirm({
                    title: '',
                    content:'確認所填所有賠率正確無誤',
                    onOk() {
                    console.log('OK');
   
                    },
                    cancelButtonProps: { style: { display: 'none' } }                 
            })
       }
       
     
   },
   onCheckAll(e){
       this.onCheckAllStatus=e.target.checked

   },
   calcAllScore(){
       this.openSetScore=false
       var withoutScore= this.score.filter((item)=>isNaN(item.score)==true)
       if(withoutScore.length>0){
           
           console.log("请输入所有的",)
           var that = this
           this.$confirm({
                    title: '請確認所有號碼的賠率是否填妥',
                    content:`您還有 ${withoutScore.length} 個號碼沒有正確填寫賠率`,
                    onOk() {
                    console.log('OK',that);
                    that.setScore(withoutScore[0])
                    },
                    cancelButtonProps: { style: { display: 'none' } }                 
            })
           
       }

       if(withoutScore.length==0){
           console.log(this.score,this.showBalls)
           this.showBalls.map((ba)=>{
               if(ba.twoBall==false){
                   this.score.map((item)=>{
                   if(ba.numbers[1]==item.number){
                       ba.odds=item.score
                       ba.isSet=true
                   }   
                   })
               }

               if(ba.twoBall==true){
                   
                //    var BallOne =this.showBalls.filter((a)=>a.numOne==null && a.numTwo==ba.numOne)[0].odds
                //    var BallTwo =this.showBalls.filter((a)=>a.numOne==null && a.numTwo==ba.numTwo)[0].odds
                       //假的賠率計算BallOne*BallTwo

                       //ba.odds=BallOne*BallTwo
                       ba.odds=0
                       ba.isSet=true        
               }

           })
       }
       console.log("计算赔率",this.score,this.showBalls)

   }
  }
};
</script>
<style scoped lang="less">
.ant-table-striped{
  width:95%;
  margin: auto;
  margin-top: 50px ;
}
.ant-table-striped :deep(.table-striped) td {
  background-color:rgb(206, 192, 192)!important;
}
.btnDiv div{
 position:relative;float:left;margin:0 2px 0 2px
}
.ballScoreDiv{position:relative;float:left;width:calc(100% - 70px);text-align:center;height:25px;
border:1px solid #D9D9D9;border-radius:2px;background-color: #fff;}

.viewDIv{background-color:rgba(0,128,0,0.2)}
.isTrobleInput{border:2px solid red}
//特殊规格
.theBox{
//   position:absolute;
//   padding: 8px;
//   display: block;
//   height: calc(100vh - 64px);
//   width: 100%;
//    color: #fff;

height: auto; width: 100%; height: calc(100vh - 158px);
   .leftDiv{
  // position:absolute;
    position:relative;
    float: left;
    width:230px;
    height: calc(100vh - 64px);
    background-color: #333;
    padding: 8px;
    h3{color: #fff;}
  }
  .rightDiv{
  position:relative;
  float: left;
  width: calc(100% - 230px);
   height: calc(100vh - 64px);
  background-color: #666;
  padding: 8px;
  h3,h4{color: #fff;}
  }
  //特殊规格
  .centerDiv{
     display: block;
     width:calc(100% - 32px);
     //height: 90%;
     height:calc(90vh - 250px);
     margin:0 ;
    //  margin-top:30px;
     background-color: #fff; 
     padding: 8px;
     color: #333;
     h5{margin-top: 15px;}
     .top{
         display: block;
         height: auto;
        .scoreDiv{
            position: relative;
            float: left;
            width: 100%;
            height: auto;
        }
     }
    //  这一页的特殊规格
     .bottom{
         display: block;  
        //  background-color: red;   
         height:calc(100vh - 300px)
     }
  }
  .scoreBox{
      position: relative;float: left;width:calc(100% / 8);height:30px;margin-bottom:7px;
      .scoreNumber{
        position: relative;float: left;width:30px;height:100%;margin-left:4%;
        border:1px solid black;text-align: center;line-height: 30px;cursor: pointer;
      }
      .scoreCount{
        position: relative;float: left;width:calc(90% - 30px);height:100%;border:1px solid black;
        border-left:none;text-align: center;line-height: 30px;font-size: 0.8rem;cursor: pointer;overflow:hidden ;
      }
    .setScore{
      background-color:#fff;position:absolute;right:0;width:calc(96% - 30px);border:1px solid black;
      border-left:none;display: flex;justify-content: center;align-items: center; 
    }
    .setbtn{
        height:100%;width:30px;border:1px solid #d9d9d9;border-radius: 3px;line-height: 2;
    }
    .setinput{
       height:100%;width:100%;display: flex;align-items:center;
    }
  }
//   特殊规格
  .btnBox{
      display: relative;float:left;height:30px;width: 100%;display: flex;justify-content: center;bottom:0;
     
  }
  .cir{
      position: relative;float: left;background-color: rgb(153, 153, 153);width:25px;height:25px;
      border-radius: 50px;margin-right:5px;text-align: center;line-height: 25px;
  }
  .greenBall{background-color:green;color: #fff;}

  .ballBax{position: relative;float: left;width: 100%;margin-top:5px;margin-bottom:5px;padding:8px;overflow-y: scroll;}
  .ballDiv{
      position:relative;float: left;width:calc(100% / 6);height: auto;padding:8px;
  }

  .errInput::-webkit-input-placeholder {
    color: red;
}

 
}


</style>