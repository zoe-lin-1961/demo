(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e987d74"],{"6cfe":function(t,e,a){"use strict";var n=a("6f75"),i=a.n(n);i.a},"6f75":function(t,e,a){},c5f9:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticStyle:{padding:"12px"}},[a("h2",[a("a-icon",{attrs:{type:"link"}}),t._v(" 在線玩家")],1)]),"playList"==this.page?a("div",{staticClass:"theBox"},[a("div",{staticClass:"centerDiv"},[a("div",{staticClass:"topBox"},[a("h3",[t._v("玩家查詢 "),a("a-input",{staticStyle:{width:"25%"},attrs:{placeholder:"編號/暱稱"}}),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{danger:""},on:{click:t.moreSearch}},[t._v("進階搜尋")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary"}},[t._v("查詢")])],1)]),a("div",{staticClass:"bottomBox"},[a("h4",[t._v("玩家數: 4 ")]),a("a-table",{staticClass:"ant-table-striped",attrs:{columns:t.columns,"data-source":t.data,bordered:"",scroll:{x:"100%"}},scopedSlots:t._u([{key:"ip",fn:function(e){return a("span",{},[e?a("div",{staticClass:"btnDiv"},[a("a",{on:{click:function(a){return t.toshowIP(e)}}},[t._v(t._s(e))])]):t._e()])}},{key:"btn",fn:function(e){return a("span",{},t._l(e,(function(e){return a("div",{key:e,staticClass:"btnDiv"},["btn"==e?a("div",[a("a-button",{staticStyle:{"background-color":"blue",color:"#fff"},attrs:{icon:"user-delete"},on:{click:t.userDelete}},[t._v("踢下線")])],1):t._e()])})),0)}},{key:"merber",fn:function(e){return a("span",{staticStyle:{"background-color":"pink"}},t._l(e,(function(e){return a("div",{key:e,staticClass:"btnDiv"},[a("div",[a("a-button",{staticStyle:{"background-color":"blue",color:"#fff","margin-right":"2px"},attrs:{size:"small"},on:{click:t.copyName}},[t._v("複製")]),t._v(" "),a("span",[t._v(t._s(e))])],1)])})),0)}},{key:"lastlogin",fn:function(e){return a("span",{},t._l(e,(function(e,n){return a("div",{key:e,staticClass:"btnDiv"},[a("div",[0==n?a("span",[t._v(t._s(e))]):t._e(),t._v(" "),1==n?a("a",{on:{click:function(a){return t.toshowIP(e)}}},[t._v(t._s(e))]):t._e()]),a("a-modal",{attrs:{title:"IP資訊",visible:t.visibleShowIP,centered:!0,maskClosable:!1,footer:null,maskStyle:t.maskStyle},on:{ok:t.visibleShowIPOk,cancel:t.visibleShowIPCancel}},[a("div",[a("p",[t._v("國家:"+t._s(t.ipData["country"]))]),a("p",[t._v("城市:"+t._s(t.ipData["city"]))]),a("p",[t._v("地區:"+t._s(t.ipData["regionName"]))]),a("p",[t._v("電信業者:"+t._s(t.ipData["isp"]))])])])],1)})),0)}}],null,!1,2479633433)}),a("a-modal",{attrs:{title:"進階搜尋",visible:t.visible,centered:!0,maskClosable:!1},on:{ok:t.handleOk,cancel:t.handleCancel}},[a("div",[a("div",{staticStyle:{position:"relative",float:"left",width:"100%"}},[a("h4",{staticStyle:{"margin-bottom":"2px"}},[t._v("會員帳號")]),a("div",{staticStyle:{"margin-bottom":"8px"}},[a("a-input",{staticStyle:{width:"48%"},attrs:{size:"small"}},[a("a-icon",{attrs:{slot:"prefix",type:"idcard"},slot:"prefix"})],1)],1)]),a("div",{staticStyle:{position:"relative",float:"left",width:"100%"}},[a("h4",{staticStyle:{"margin-bottom":"2px"}},[t._v("IP")]),a("div",{staticStyle:{"margin-bottom":"8px"}},[a("a-input",{staticStyle:{width:"48%"},attrs:{size:"small"}},[a("a-icon",{attrs:{slot:"prefix",type:"idcard"},slot:"prefix"})],1)],1)]),a("div",{staticStyle:{position:"relative",float:"left",width:"100%"}},[a("h4",{staticStyle:{"margin-bottom":"2px"}},[t._v("上次IP")]),a("div",{staticStyle:{"margin-bottom":"8px"}},[a("a-input",{staticStyle:{width:"48%"},attrs:{size:"small"}},[a("a-icon",{attrs:{slot:"prefix",type:"idcard"},slot:"prefix"})],1)],1)]),a("h4",{staticStyle:{"margin-bottom":"2px"}},[t._v("本次登入時間")]),a("div",{staticStyle:{"margin-bottom":"8px"}},[a("rangeCalender")],1),a("h4",{staticStyle:{"margin-bottom":"2px"}},[t._v("上次登入時間")]),a("div",{staticStyle:{"margin-bottom":"8px"}},[a("rangeCalender")],1),a("h4",{staticStyle:{"margin-bottom":"2px"}},[t._v("持續時間")]),a("div",{staticStyle:{"margin-bottom":"8px"}},[a("rangeCalender")],1),a("h4",{staticStyle:{"margin-bottom":"2px"}},[t._v("搜尋結果排序")]),a("div",{staticStyle:{"margin-bottom":"8px"}},[a("a-input-group",{attrs:{compact:""}},[a("a-select",{staticStyle:{width:"120px"},attrs:{"default-value":"id",size:"small"}},[a("a-select-option",{attrs:{value:"id"}},[t._v("會員帳號")]),a("a-select-option",{attrs:{value:"moneyFlu"}},[t._v("IP")]),a("a-select-option",{attrs:{value:"buildTime"}},[t._v("上次IP")]),a("a-select-option",{attrs:{value:"lastLofinTime"}},[t._v("本次登入時間")]),a("a-select-option",{attrs:{value:"handelTime"}},[t._v("上次登入時間")]),a("a-select-option",{attrs:{value:"reman"}},[t._v("持續時間")])],1),a("a-button",{attrs:{size:"small"}},[t._v("升序")]),a("a-button",{attrs:{size:"small"}},[t._v("降序")])],1)],1)]),a("template",{slot:"footer"},[a("a-button",{attrs:{type:"primary"},on:{click:t.handleOk}},[t._v("確定")])],1)],2)],1)])]):t._e()])},i=[],s=(a("c975"),a("d81d"),a("ac1f"),a("5319"),a("1276"),a("c1df")),o=a.n(s),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a-input-group",{attrs:{compact:""}},[a("a-range-picker",{attrs:{ranges:{"今天":[t.moment(this.rangetodayStart),t.moment(this.rangetodayEnd)],"昨天":[t.moment(this.rangeYestodayStart),t.moment(this.rangeYestodayEnd)],"本週":[t.moment(this.rangeThisWeekStart),t.moment(this.rangeThisWeekEnd)],"上週":[t.moment(this.rangeLastWeekStart),t.moment(this.rangeLastWeekEnd)],"本月":[t.moment(this.rangeThisMonthStart),t.moment(this.rangeThisMonthEnd)],"上月":[t.moment(this.rangeLastMonthStart),t.moment(this.rangeLastMonthEnd)],"最近一個月":[t.moment(this.rangeNearStart),t.moment(this.rangeNearEnd)]},format:"YYYY/MM/DD HH:mm:ss","show-time":"",width:"200px",size:"small",value:t.defaultSelectDate,"default-value":t.defaultSelectDate},on:{change:t.onChangeBuildTime}}),a("a-button",{attrs:{size:"small"},on:{click:t.theDayBefore}},[t._v("前一天")]),a("a-button",{attrs:{size:"small"},on:{click:t.theDayAfter}},[t._v("後一天")])],1)],1)},r=[],c={created:function(){this.calcCalender()},data:function(){return{rangetodayStart:"",rangetodayEnd:"",rangeYestodayStart:"",rangeYestodayEnd:"",rangeThisWeekStart:"",rangeThisWeekEnd:"",rangeLastWeekStart:"",rangeLastWeekEnd:"",rangeThisMonthStart:"",rangeThisMonthEnd:"",rangeLastMonthStart:"",rangeLastMonthEnd:"",rangeNearStart:"",rangeNearEnd:"",defaultSelectDate:[]}},methods:{moment:o.a,onChangeBuildTime:function(t,e){void 0==t[0]&&void 0==t[1]?this.defaultSelectDate.length=0:(this.defaultSelectDate.length=0,this.defaultSelectDate.push(t[0]),this.defaultSelectDate.push(t[1]))},theDayBefore:function(){var t=this.defaultSelectDate,e=new Date(new Date(t[0]._d).getTime()-864e5),a=new Date(new Date(t[1]._d).getTime()-864e5),n=e.getFullYear(),i=e.getMonth()+1,s=e.getDate(),l=e.getHours(),r=e.getMinutes(),c=e.getSeconds(),d=a.getFullYear(),g=a.getMonth()+1,h=a.getDate(),u=a.getHours(),m=a.getMinutes(),p=a.getSeconds();i<10&&(i="0"+i),s<10&&(s="0"+s),l<10&&(l="0"+l),r<10&&(r="0"+r),c<10&&(c="0"+c),g<10&&(g="0"+g),h<10&&(h="0"+h),u<10&&(u="0"+u),m<10&&(m="0"+m),p<10&&(p="0"+p),this.defaultSelectDate.length=0,this.defaultSelectDate.push(o()(n+"/"+i+"/"+s+" "+l+":"+r+":"+c)),this.defaultSelectDate.push(o()(d+"/"+g+"/"+h+" "+u+":"+m+":"+p))},theDayAfter:function(){var t=this.defaultSelectDate,e=new Date(new Date(t[0]._d).getTime()+864e5),a=new Date(new Date(t[1]._d).getTime()+864e5),n=e.getFullYear(),i=e.getMonth()+1,s=e.getDate(),l=e.getHours(),r=e.getMinutes(),c=e.getSeconds(),d=a.getFullYear(),g=a.getMonth()+1,h=a.getDate(),u=a.getHours(),m=a.getMinutes(),p=a.getSeconds();i<10&&(i="0"+i),s<10&&(s="0"+s),l<10&&(l="0"+l),r<10&&(r="0"+r),c<10&&(c="0"+c),g<10&&(g="0"+g),h<10&&(h="0"+h),u<10&&(u="0"+u),m<10&&(m="0"+m),p<10&&(p="0"+p),this.defaultSelectDate.length=0,this.defaultSelectDate.push(o()(n+"/"+i+"/"+s+" "+l+":"+r+":"+c)),this.defaultSelectDate.push(o()(d+"/"+g+"/"+h+" "+u+":"+m+":"+p))},calcCalender:function(){var t=" 00:00:00",e=" 23:59:59",a=(new Date).getFullYear(),n=(new Date).getMonth()+1,i=(new Date).getMonth(),s=(new Date).getDate(),o=(new Date).getTime()-24*((new Date).getDay()-1)*60*60*1e3,l=o+5184e5,r=o-6048e5,c=l-6048e5,d=(new Date).getTime()-24*((new Date).getDate()-1)*60*60*1e3,g=d+24*(new Date(a,n,0).getDate()-1)*60*60*1e3,h=d-24*new Date(a,i,0).getDate()*60*60*1e3,u=h+24*(new Date(a,i,0).getDate()-1)*60*60*1e3,m=new Date-24*new Date(a,i,0).getDate()*60*60*1e3;n<10&&(n="0"+n),i<10&&(i="0"+i),s<10&&(s="0"+s),this.rangetodayStart=a+"/"+n+"/"+s+t,this.rangetodayEnd=a+"/"+n+"/"+s+e;var p=new Date(this.rangetodayStart).getTime()-864e5,v=new Date(p).getFullYear(),D=new Date(p).getMonth()+1,f=new Date(p).getDate();D<10&&(D="0"+D),f<10&&(f="0"+f),this.rangeYestodayStart=v+"/"+D+"/"+f+t,this.rangeYestodayEnd=v+"/"+D+"/"+f+e;var y=new Date(o).getFullYear(),w=new Date(o).getMonth()+1,S=new Date(o).getDate();w<10&&(w="0"+w),S<10&&(S="0"+S);var b=new Date(l).getFullYear(),k=new Date(l).getMonth()+1,_=new Date(l).getDate();k<10&&(k="0"+k),_<10&&(_="0"+_),this.rangeThisWeekStart=y+"/"+w+"/"+S+t,this.rangeThisWeekEnd=b+"/"+k+"/"+_+e;var x=new Date(r).getFullYear(),M=new Date(r).getMonth()+1,I=new Date(r).getDate();M<10&&(M="0"+M),I<10&&(S="0"+S);var T=new Date(c).getFullYear(),C=new Date(c).getMonth()+1,Y=new Date(c).getDate();C<10&&(C="0"+C),Y<10&&(Y="0"+Y),this.rangeLastWeekStart=x+"/"+M+"/"+I+t,this.rangeLastWeekEnd=T+"/"+C+"/"+Y+e;var E=new Date(d).getFullYear(),P=new Date(d).getMonth()+1,N=new Date(d).getDate();P<10&&(P="0"+P),N<10&&(N="0"+N);var F=new Date(g).getFullYear(),L=new Date(g).getMonth()+1,W=new Date(g).getDate();L<10&&(L="0"+L),W<10&&(W="0"+W),this.rangeThisMonthStart=E+"/"+P+"/"+N+t,this.rangeThisMonthEnd=F+"/"+L+"/"+W+e;var z=new Date(h).getFullYear(),A=new Date(h).getMonth()+1,O=new Date(h).getDate();A<10&&(A="0"+A),O<10&&(O="0"+O);var B=new Date(u).getFullYear(),H=new Date(u).getMonth()+1,$=new Date(u).getDate();H<10&&(H="0"+H),$<10&&($="0"+$),this.rangeLastMonthStart=z+"/"+A+"/"+O+t,this.rangeLastMonthEnd=B+"/"+H+"/"+$+e;var R=a,j=n,V=s,J=(new Date).getHours(),q=(new Date).getMinutes(),G=(new Date).getSeconds(),K=new Date(m).getFullYear(),Q=new Date(m).getMonth()+1,U=new Date(m).getDate(),X=new Date(m).getHours(),Z=new Date(m).getMinutes(),tt=new Date(m).getSeconds();J<0&&(J="0"+J),q<0&&(q="0"+q),G<0&&(G="0"+G),Q<0&&(Q="0"+Q),U<0&&(U="0"+U),Z<0&&(Z="0"+Z),tt<0&&(tt="0"+tt),this.rangeNearStart=K+"/"+Q+"/"+U+" "+X+":"+Z+":"+tt,this.rangeNearEnd=R+"/"+j+"/"+V+" "+J+":"+q+":"+G}}},d=c,g=a("2877"),h=Object(g["a"])(d,l,r,!1,null,"42e8841d",null),u=h.exports,m=u,p=a("cebe"),v=a.n(p),D=[{title:"會員帳號",dataIndex:"merber",key:"merber",scopedSlots:{customRender:"merber"},align:"center",width:"150px"},{title:"餘額",dataIndex:"remain",key:"remain",align:"center",width:"100px"},{title:"登入設備",dataIndex:"loginDevice",key:"loginDevice",align:"center",width:"100px"},{title:"IP",dataIndex:"ip",key:"ip",align:"center",width:"150px",scopedSlots:{customRender:"ip"}},{title:"同IP會員數量",dataIndex:"thesameipcount",key:"thesameipcount",align:"center",width:"100px"},{title:"本次登入時間",key:"logintime",dataIndex:"logintime",align:"center",width:"120px"},{title:"在線時間",key:"onlinetime",dataIndex:"onlinetime",align:"center",width:"120px"},{title:"上次登入時間/IP",key:"lastlogin",dataIndex:"lastlogin",align:"center",scopedSlots:{customRender:"lastlogin"},width:"150px"},{title:"操作",key:"btn",dataIndex:"btn",scopedSlots:{customRender:"btn"},align:"center",width:"120px"}],f=[{key:"1",merber:["AA1234"],remain:"1235555",loginDevice:"pc",ip:"36.232.180.179",thesameipcount:"3",logintime:"2021/04/23 03:11:54",onlinetime:"05:06:30",lastlogin:["2021/04/23 00:59:03","35.232.180.179"],btn:["btn"]},{key:"2",merber:["AA1235"],remain:"1235555",loginDevice:"pc",ip:"36.232.180.179",thesameipcount:"3",logintime:"2021/04/23 03:11:54",onlinetime:"05:06:30",lastlogin:["2021/04/23 00:59:03","35.232.180.179"],btn:["btn"]},{key:"3",merber:["AA1236"],remain:"1235555",loginDevice:"pc",ip:"36.232.180.179",thesameipcount:"3",logintime:"2021/04/23 03:11:54",onlinetime:"05:06:30",lastlogin:["2021/04/23 00:59:03","35.232.180.179"],btn:["btn"]},{key:"4",merber:["AA1237"],remain:"1235555",loginDevice:"pc",ip:"36.232.180.179",thesameipcount:"3",logintime:"2021/04/23 03:11:54",onlinetime:"05:06:30",lastlogin:["2021/04/23 00:59:03","35.232.180.179"],btn:["btn"]}],y={components:{rangeCalender:m},created:function(){},data:function(){return{columns:D,data:f,visible:!1,conterTypeValue:"",page:"playList",phone:"",visibleShowIP:!1,maskStyle:{opacity:"0.1",background:"#000000",animation:"none"},ipData:{}}},methods:{moment:o.a,moreSearch:function(){this.visible=!0},handleOk:function(){this.visible=!1},handleCancel:function(){this.visible=!1},onChangeConterTypeValue:function(t){this.conterTypeValue=t.target.value},chagePageName:function(t){this.page=t},copyName:function(t){var e=t.path[5].childNodes[0].innerText.split("製")[1].replace(/^\s\s*/,"").replace(/\s\s*$/,""),a=this;this.$copyText(e).then((function(t){a.$confirm({title:"已成功複製",content:"您已成功複製,可直接黏貼",onOk:function(){},cancelButtonProps:{style:{display:"none"}}})}))},visibleShowIPOk:function(){this.visibleShowIP=!1,this.ipData={}},visibleShowIPCancel:function(){this.visibleShowIP=!1,this.ipData={}},toshowIP:function(t){var e=this;this.visibleShowIP=!0;var a="http://ip-api.com/json/"+t;v.a.get(a).then((function(t){e.ipData={isp:t.data.isp,country:t.data.country,city:t.data.city,regionName:t.data.regionName}})).catch((function(t){e.ipData={isp:"數據錯誤",country:"數據錯誤",city:"數據錯誤",regionName:"數據錯誤"}})),this.visibleShowIP=!0},userDelete:function(t){var e=this,a=t.path[5].childNodes[0].childNodes[0].childNodes[0].childNodes[0].outerText.split("製")[1].replace(/^\s\s*/,"").replace(/\s\s*$/,"");this.data.map((function(t){if(t.merber[0]==a){var n=e;e.$confirm({title:"踢掉玩家",content:"確定踢掉這個玩家?",onOk:function(){var e=n.data.indexOf(t);n.$delete(n.data,e)},onCancel:function(){}})}}))}}},w=y,S=(a("6cfe"),Object(g["a"])(w,n,i,!1,null,"8b8b12d4",null)),b=S.exports;e["default"]=b}}]);