<template>
    <div>
      <a-input-group compact>
       <a-range-picker 
         :ranges="{'今天': [moment(this.rangetodayStart), moment(this.rangetodayEnd)],
         '昨天': [moment(this.rangeYestodayStart), moment(this.rangeYestodayEnd)],
          '本週': [moment(this.rangeThisWeekStart), moment(this.rangeThisWeekEnd)],
          '上週': [moment(this.rangeLastWeekStart), moment(this.rangeLastWeekEnd)],
          '本月': [moment(this.rangeThisMonthStart), moment(this.rangeThisMonthEnd)], 
          '上月': [moment(this.rangeLastMonthStart), moment(this.rangeLastMonthEnd)],
          '最近一個月': [moment(this.rangeNearStart), moment(this.rangeNearEnd)], }"
          format="YYYY/MM/DD HH:mm:ss"
          show-time
          @change="onChangeBuildTime"
          width="200px"
          size="small"
          :value="defaultSelectDate"
          :default-value="defaultSelectDate"
        />
          <a-button size="small" @click="theDayBefore">前一天</a-button>
          <a-button size="small" @click="theDayAfter">後一天</a-button>
      </a-input-group>
      </div>

</template>
 
<script>
import moment from 'moment';

export default {

  created(){
    this.calcCalender()
    
    
  //console.log("就看看..",new Date(),new Date(nearM))
  },
  data() {
    return {
        rangetodayStart:'',
        rangetodayEnd:'',
        rangeYestodayStart:'',
        rangeYestodayEnd:'',
        rangeThisWeekStart:'',
        rangeThisWeekEnd:'',
        rangeLastWeekStart:'',
        rangeLastWeekEnd:'',
        rangeThisMonthStart:'',
        rangeThisMonthEnd:'',
        rangeLastMonthStart:'',
        rangeLastMonthEnd:'',
        rangeNearStart:'',
        rangeNearEnd:'',
        defaultSelectDate:[]
 
    };
  },
  methods:{
    moment,

    onChangeBuildTime(dates, dateStrings){

     if(dates[0]==undefined && dates[1]==undefined){
       this.defaultSelectDate.length=0
     }else{
       this.defaultSelectDate.length=0
       this.defaultSelectDate.push(dates[0])
       this.defaultSelectDate.push(dates[1])
     }

       console.log('From: ', dates[0], ', to: ', dates[1]);
       console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
   
    },
    theDayBefore(){
      var theArr=this.defaultSelectDate
      var ss=new Date(new Date(theArr[0]._d).getTime()-24*60*60*1000)
      var ee=new Date(new Date(theArr[1]._d).getTime()-24*60*60*1000)
      var sy=ss.getFullYear();var sM=ss.getMonth()+1;var sd=ss.getDate();var sh=ss.getHours();var sm=ss.getMinutes();var sS=ss.getSeconds()
      var ey = ee.getFullYear();var eM=ee.getMonth()+1;var ed=ee.getDate();var eh=ee.getHours(); var em=ee.getMinutes();var eS=ee.getSeconds()
      if(sM<10){sM='0'+sM}
      if(sd<10){sd='0'+sd}
      if(sh<10){sh='0'+sh}
      if(sm<10){sm='0'+sm}
      if(sS<10){sS='0'+sS}
      if(eM<10){eM='0'+eM}
      if(ed<10){ed='0'+ed}
      if(eh<10){eh='0'+eh}
      if(em<10){em='0'+em}
      if(eS<10){eS='0'+eS}
      this.defaultSelectDate.length=0
      this.defaultSelectDate.push(moment(sy+'/'+sM+'/'+sd+' '+sh+':'+sm+':'+sS))
      this.defaultSelectDate.push(moment(ey+'/'+eM+'/'+ed+' '+eh+':'+em+':'+eS))

       
    },
    theDayAfter(){
      var theArr=this.defaultSelectDate
      var ss=new Date(new Date(theArr[0]._d).getTime()+24*60*60*1000)
      var ee=new Date(new Date(theArr[1]._d).getTime()+24*60*60*1000)
      var sy=ss.getFullYear();var sM=ss.getMonth()+1;var sd=ss.getDate();var sh=ss.getHours();var sm=ss.getMinutes();var sS=ss.getSeconds()
      var ey = ee.getFullYear();var eM=ee.getMonth()+1;var ed=ee.getDate();var eh=ee.getHours(); var em=ee.getMinutes();var eS=ee.getSeconds()
      if(sM<10){sM='0'+sM}
      if(sd<10){sd='0'+sd}
      if(sh<10){sh='0'+sh}
      if(sm<10){sm='0'+sm}
      if(sS<10){sS='0'+sS}
      if(eM<10){eM='0'+eM}
      if(ed<10){ed='0'+ed}
      if(eh<10){eh='0'+eh}
      if(em<10){em='0'+em}
      if(eS<10){eS='0'+eS}
      this.defaultSelectDate.length=0
      this.defaultSelectDate.push(moment(sy+'/'+sM+'/'+sd+' '+sh+':'+sm+':'+sS))
      this.defaultSelectDate.push(moment(ey+'/'+eM+'/'+ed+' '+eh+':'+em+':'+eS))

    },
    calcCalender(){
      var fs=' 00:00:00'; var fe=' 23:59:59'
     var yy= new Date().getFullYear();var tM= new Date().getMonth()+1;var lM= new Date().getMonth();var td = new Date().getDate()
     var tWS = new Date().getTime()-(new Date().getDay()-1)*24*60*60*1000
     var tWE = tWS+6*24*60*60*1000
     var lWS = tWS-7*24*60*60*1000
     var lWE = tWE-7*24*60*60*1000
     var tMS = new Date().getTime()-(new Date().getDate()-1)*24*60*60*1000
     var tME = tMS+(new Date(yy, tM, 0).getDate()-1)*24*60*60*1000
     var lMS = tMS-(new Date(yy, lM, 0).getDate())*24*60*60*1000
     var lME = lMS+(new Date(yy, lM, 0).getDate()-1)*24*60*60*1000
     var nearM =new Date()-(new Date(yy, lM, 0).getDate())*24*60*60*1000
     if(tM<10){tM='0'+tM}
     if(lM<10){lM='0'+lM}
     if(td<10){td='0'+td}
    
    this.rangetodayStart=yy+'/'+tM+'/'+td+fs;this.rangetodayEnd=yy+'/'+tM+'/'+td+fe
    var yestodayStr =new Date(this.rangetodayStart).getTime()-24*60*60*1000;var yyy=new Date(yestodayStr).getFullYear()
    var ytM= new Date(yestodayStr).getMonth()+1;var ytd = new Date(yestodayStr).getDate()
    if(ytM<10){ytM='0'+ytM}
    if(ytd<10){ytd='0'+ytd}

    this.rangeYestodayStart=yyy+'/'+ytM+'/'+ytd+fs;this.rangeYestodayEnd=yyy+'/'+ytM+'/'+ytd+fe

    var twsy=new Date(tWS).getFullYear();var twsM= new Date(tWS).getMonth()+1;var twsd = new Date(tWS).getDate()
    if(twsM<10){twsM='0'+twsM}
    if(twsd<10){twsd='0'+twsd}

    var twey=new Date(tWE).getFullYear();var tweM= new Date(tWE).getMonth()+1;var twed = new Date(tWE).getDate()
    if(tweM<10){tweM='0'+tweM}
    if(twed<10){twed='0'+twed}

    this.rangeThisWeekStart=twsy+'/'+twsM+'/'+twsd+fs;this.rangeThisWeekEnd=twey+'/'+tweM+'/'+twed+fe


    var lwsy=new Date(lWS).getFullYear();var lwsM= new Date(lWS).getMonth()+1;var lwsd = new Date(lWS).getDate()
    if(lwsM<10){lwsM='0'+lwsM}
    if(lwsd<10){twsd='0'+twsd}

    var lwey=new Date(lWE).getFullYear();var lweM= new Date(lWE).getMonth()+1;var lwed = new Date(lWE).getDate()
    if(lweM<10){lweM='0'+lweM}
    if(lwed<10){lwed='0'+lwed}

    this.rangeLastWeekStart=lwsy+'/'+lwsM+'/'+lwsd+fs;this.rangeLastWeekEnd=lwey+'/'+lweM+'/'+lwed+fe


    var tmsy=new Date(tMS).getFullYear();var tmsM= new Date(tMS).getMonth()+1;var tmsd = new Date(tMS).getDate()
    if(tmsM<10){tmsM='0'+tmsM}
    if(tmsd<10){tmsd='0'+tmsd}

    var tmey=new Date(tME).getFullYear();var tmeM= new Date(tME).getMonth()+1;var tmed = new Date(tME).getDate()
    if(tmeM<10){tmeM='0'+tmeM}
    if(tmed<10){tmed='0'+tmed}

    this.rangeThisMonthStart=tmsy+'/'+tmsM+'/'+tmsd+fs;this.rangeThisMonthEnd=tmey+'/'+tmeM+'/'+tmed+fe
   

    var lmsy=new Date(lMS).getFullYear();var lmsM= new Date(lMS).getMonth()+1;var lmsd = new Date(lMS).getDate()
    if(lmsM<10){lmsM='0'+lmsM}
    if(lmsd<10){lmsd='0'+lmsd}

    var lmey=new Date(lME).getFullYear();var lmeM= new Date(lME).getMonth()+1;var lmed = new Date(lME).getDate()
    if(lmeM<10){lmeM='0'+lmeM}
    if(lmed<10){lmed='0'+lmed}

    this.rangeLastMonthStart=lmsy+'/'+lmsM+'/'+lmsd+fs;this.rangeLastMonthEnd=lmey+'/'+lmeM+'/'+lmed+fe

     var ny= yy;var nM= tM;var nd =td
     var nh=new Date().getHours();var nm=new Date().getMinutes();var ns=new Date().getSeconds()
     var ney= new Date(nearM).getFullYear();var neM= new Date(nearM).getMonth()+1;var ned =new Date(nearM).getDate()
     var neh=new Date(nearM).getHours();var nem=new Date(nearM).getMinutes();var nes=new Date(nearM).getSeconds()
     if(nh<0){nh='0'+nh}
     if(nm<0){nm='0'+nm}
     if(ns<0){ns='0'+ns}
     if(neM<0){neM='0'+neM}
     if(ned<0){ned='0'+ned}
     if(nem<0){nem='0'+nem}
     if(nes<0){nes='0'+nes}

     this.rangeNearStart = ney+'/'+neM+'/'+ned+' '+neh+':'+nem+':'+nes;this.rangeNearEnd = ny+'/'+nM+'/'+nd+' '+nh+':'+nm+':'+ns

    },


  
  }
};
</script>
 
<style scoped lang="less">


</style>