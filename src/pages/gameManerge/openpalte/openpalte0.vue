<template>
 <div>
 <div v-if="page=='openpalte'" class="theBox">
   <h3>遊戲1 - 新增比賽 <a-button  icon="left-circle" @click="lastPage" size="small" style="margin-left:5px">回上一頁</a-button></h3>

   <div class="centerDiv" ref="centerDiv">
      <h4>新增比賽 - 配置參賽信鴿 - 賠率設置</h4>
      <div class="top" ref="top"> 
         <h5>請輸入參賽賽鴿的評分 <a-button v-if="openSetScore==true" size="small"  type="primary" @click="allSet">完成修改</a-button></h5>
         <div class="scoreDiv">
             <div class="scoreBox"  v-for="s in score" :key="s.number" >
                <div class="scoreNumber" @click="setNum(s)">{{s.number}}</div>
                <template>
                    <div class="scoreCount" @click="setScore(s)">
                   {{s.score}}
                    </div>
                </template>

                <template v-if="openSetScore==true">
                <div class="scoreCount setScore" >

                      <div class="setinput">
                        <a-input style="height:100%;text-align:center" ref="setValue" :v-model:value="s.score" :placeholder="s.score"   @blur="setValue" />
                    </div>
                </div>
                </template>
       
                
            </div> 
         </div>
         <div style="position:relative;float:left;height:auto;margin-bottom:15px">
            <h5 >請輸入本次預期的收益比例</h5>
            <a-input placeholder="0-95" style="width:100px" size="small"/> <span> % </span> 
            <a-button danger size="small" style="margin-left:20px">計算賠率</a-button>
          </div>
      </div>
      
      <div class="bottom"  >
         
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
            
            <a-input  style="width:100px" size="small"/>
            <a-button danger  style="margin-left:5px" size="small" @click="reSetNum">重設數字</a-button>
            <span style="font-size:0.8rem"> (點選上方的號碼,查詢該注區賠率)</span>
          </div>
          <h5>所有注區賠率</h5>
          <div class="ballBax" :style="{height: bottomHeight}"  >
            <div :v-model="showBalls"  style="position:relative;float:left;width:100%;height:auto;" >
                <div v-for="b in showBalls" :key="b.key">
                   
                <div class="ballDiv" v-if="b.twoBall==false"  >
                    <div class="cir"></div>
                    <div class="cir greenBall">{{b.numTwo}}</div>
                    <a-input  style="width:100px" size="small"/> 
                </div>
                <div class="ballDiv" v-if="b.twoBall==true">
                    <div class="cir greenBall">{{b.numOne}}</div>
                    <div class="cir greenBall">{{b.numTwo}}</div> 
                    <a-input  style="width:100px" size="small"/> 
                </div>
                </div> 
            </div>
            
          </div>
          <div class="btnBox">
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
      page:'openpalte'
    };
  },
  created(){
    
     this.initCreated();
  },
  mounted(){
      this.topHeight=this.$refs.top.clientHeight
      this.centerDivHeight=this.$refs.centerDiv.clientHeight
      this.bottomHeight= (this.centerDivHeight-this.topHeight- 300)+'px'
      
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
           obj.score='請輸入分數'
           obj.isSet=false
           arr.push(obj)
           if(i==5){
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
       console.log(obj,"obj3322222",obj.number,obj.score,obj.isSet)
       this.openSetScore=true
       
   },
   setValue(e){
       var number=e.path[3].children[0].innerHTML
       var value =Number(e.target._value)
       this.score.map((item)=>{
           if(item.number==number){
               if(isNaN(value)==true || value<0){
                   item.score="請輸入分數"
               }else{
                   var r = /^\+?[1-9][0-9]*$/
                   if(r.test(value)==true){
                       item.score=value
                   }else{
                       if(value<1){item.score="請輸入分數"}else{item.score=parseInt(value)}
                   }
               }
           }
       })
   },
   
   setNum(obj){

       //判断obj是否在数组里面

       var hasD = this.selectBall.some(function(item){return item.number==obj.number})
           if(hasD==false){
                if(this.selectBall.length<=1){
                     this.selectBall.push(obj)
                }
            }
           if(hasD==true){
           var k=this.selectBall.indexOf(obj)
           this.$delete(this.selectBall,k)
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
   },
   backFirstPage(){
       console.log("123456,都结束了...")
       location.reload()
     
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
.theBox{
//   position:absolute;
//   padding: 8px;
//   display: block;
//   height: calc(100vh - 64px);
//   width: 100%;
//    color: #fff;
height: auto; width: 100%;color: #fff;
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

  .centerDiv{
     display: block;
     width:calc(100% - 32px);
     height: 90%;
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
     .bottom{
         display: block;         
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
       height:100%;width:100%
    }
  }
  .btnBox{
      display: absolute;height: auto;width: 100%;display: flex;justify-content: center;bottom:0;
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

 
}


</style>