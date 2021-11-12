<template>
  <div class="randomBox" :style="bdC" >
      <div class="outBox"  :style="bdO">
      <div class="NumBox" >
          <div :style="NOS">{{NO}}</div>
          <div :style="NTS">{{NT}}</div>
          <div :style="NTRS">{{NTR}}</div>
          <div :style="NFS">{{NF}}</div>
      </div>
      <div class="refrashBox">
      <a-button type="primary" icon="redo" @click="redo"/>
      </div>
      </div>
  </div>
</template>

<script>


export default {
  data () {
    return {
     bdO:"background-image:url('randomCode.png') ;background-position:0% 0%",  
     bdC:'background:RGB(111,111,111)',
     NO:'8',
     NT:'6',
     NTR:'1',
     NF:'2',
     NOS:'transform: skew(-1deg)',
     NTS:'transform: skew(10deg)',
     NTRS:'transform: skew(5deg)',
     NFS:'transform: skew(0deg)',
     code:''
    }
  },
  mounted(){
      this.redo()
  },
  computed: {

  },
  watch: {
    code(value) {
      this.$emit('changeCode', value, this.code)
    }
  },
  methods: {
    redo(){
        //颜色的随机数
        var colornum =this.twoNumber(0,210)
        var colornum2 =this.twoNumber(0,225)
        var colornum3 =this.twoNumber(0,225)
        var colornum4 =this.twoNumber(0,210)
        var colornum5 =this.twoNumber(0,225)
        var colornum6 =this.twoNumber(0,225)
        var p1 =this.twoNumber(0,20)
        var p2 =this.twoNumber(0,20)

        this.bdC="background:RGB("+colornum+","+colornum2+","+colornum3+");color:#fff;background-image:linear-gradient(to right, rgba("+colornum+","+colornum2+","+colornum3+",0), rgba("+colornum4+","+colornum5+","+colornum6+",1));"
      

        this.bdO="background-image:url('randomCode.png') ;background-position:"+p1+"% "+p2+"%"
        
        var code =this.twoNumber(1000,9999)
        var codeOne = parseInt(code/1000) 
        var codeTwo = parseInt((code-codeOne*1000)/100)
        var codeThree = parseInt((code-codeOne*1000-codeTwo*100)/10)
        var codeFore=code-codeOne*1000-codeTwo*100-codeThree*10

         this.NO=codeOne
         this.NT=codeTwo
         this.NTR=codeThree
         this.NF=codeFore
         this.code=code

         var degOne =this.twoNumber(-30,30)
         var degTwo =this.twoNumber(-30,30)
         var degThree =this.twoNumber(-30,30)
         var degFore =this.twoNumber(-30,30)
         this.NOS="transform: skew("+degOne+"deg)"
         this.NTS="transform: skew("+degTwo+"deg)"
         this.NTRS="transform: skew("+degThree+"deg)"
         this.NFS="transform: skew("+degFore+"deg)"
        

 

    },
    twoNumber(Min,Max){
        var Range = Max - Min;
        var Rand = Math.random();
        var num = Min + Math.round(Rand * Range); 
        return num
    }
  }
}
</script>

<style lang="less" scoped>
.randomBox{
    // text-align: center;
    position: relative;float:left;width: 100%;
    .outBox{position: relative;float: left;width: 100%;height: 100%;}
    .NumBox{
        position: relative;
        float:left;        
        width:calc(100% - 40px);
        padding-left:5px;
        display: flex;
        flex-direction: row;
        div{
            position:relative;
            float:left;
            width:calc(100% / 4);
            height:30px;
            margin-top: 0px;
            font-size:30px;
            text-align: center;
            // background-color: crimson;

        }
    }
    .refrashBox{
         position: relative;
        float:left;
    }
}

</style>
