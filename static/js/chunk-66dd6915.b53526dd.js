(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66dd6915"],{"2e88":function(e,t,a){"use strict";var i=a("9655"),n=a.n(i);n.a},"67e0":function(e,t,a){"use strict";var i=a("ba90"),n=a.n(i);n.a},9655:function(e,t,a){},ba90:function(e,t,a){},d104:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticStyle:{padding:"12px"}},[a("h2",[a("a-icon",{attrs:{type:"profile"}}),e._v(" 帳務報表")],1)]),"profile"==this.page?a("div",{staticClass:"theBox"},[a("div",{staticClass:"centerDiv"},[a("div",{staticClass:"topBox"},[a("h3",[e._v("玩家查詢 "),a("a-input",{staticStyle:{width:"25%"},attrs:{placeholder:"編號/暱稱"}}),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{danger:""},on:{click:e.moreSearch}},[e._v("進階搜尋")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary"}},[e._v("查詢")])],1)]),a("div",{staticClass:"bottomBox"},[a("h4",[e._v("玩家數: 4 ")]),a("a-table",{ref:"table",staticClass:"ant-table-striped",attrs:{columns:e.columns,"data-source":e.data,pagination:e.pagination,scroll:{x:"100%"},bordered:""},scopedSlots:e._u([{key:"lastLogin",fn:function(t){return a("span",{},e._l(t,(function(t,i){return a("div",{key:t,staticClass:"btnDiv"},[a("div",[0==i?a("span",[e._v(e._s(t))]):e._e(),e._v(" "),1==i?a("a",{on:{click:function(a){return e.toshowIP(t)}}},[e._v(e._s(t))]):e._e()]),a("a-modal",{attrs:{title:"IP資訊",visible:e.visibleShowIP,centered:!0,maskClosable:!1,footer:null,maskStyle:e.maskStyle},on:{ok:e.visibleShowIPOk,cancel:e.visibleShowIPCancel}},[a("div",[a("p",[e._v("國家:"+e._s(e.ipData["country"]))]),a("p",[e._v("城市:"+e._s(e.ipData["city"]))]),a("p",[e._v("地區:"+e._s(e.ipData["regionName"]))]),a("p",[e._v("電信業者:"+e._s(e.ipData["isp"]))])])])],1)})),0)}},{key:"notice",fn:function(t){return a("span",{},e._l(t,(function(t){return a("span",{key:t},["notice"==t?a("div",{staticClass:"btnDiv"},[a("a-button",{staticStyle:{"background-color":"blue",color:"#fff"},on:{click:e.toMadeNote}},[e._v("檢視")])],1):e._e(),"notice"!==t&&"modify"!==t&&"delete"!==t?a("span",{staticClass:"btnDiv"},[e._v(e._s(t))]):e._e(),"modify"==t?a("a-button",{staticStyle:{"background-color":"blue",color:"#fff","margin-left":"3px"},attrs:{icon:"edit",size:"small"},on:{click:e.toModifyNote}}):e._e(),"delete"==t?a("a-button",{staticStyle:{"background-color":"blue",color:"#fff","margin-left":"3px"},attrs:{icon:"delete",size:"small"},on:{click:e.toMadeNoteDelete}}):e._e(),a("a-modal",{attrs:{title:e.MadeNoteTitle,visible:e.visibleNotice,centered:!0,maskClosable:!1},on:{ok:e.visibleNoticeOk,cancel:e.visibleNoticeCancel}},[a("a-textarea",{attrs:{placeholder:"請輸入備註","auto-size":{minRows:3,maxRows:5}},model:{value:e.MadeNoteValue,callback:function(t){e.MadeNoteValue=t},expression:"MadeNoteValue"}})],1)],1)})),0)}},{key:"tradeHis",fn:function(t){return a("span",{},e._l(t,(function(t){return a("div",{key:t,staticClass:"btnDiv"},["tradeHis"==t?a("div",[a("a-button",{staticStyle:{"background-color":"blue",color:"#fff"},attrs:{icon:"search"},on:{click:e.theTradeHis}})],1):e._e()])})),0)}},{key:"merberNumber",fn:function(t){return a("span",{staticStyle:{"background-color":"pink"}},e._l(t,(function(t){return a("div",{key:t,staticClass:"btnDiv"},[a("div",[a("a-button",{staticStyle:{"background-color":"blue",color:"#fff","margin-right":"2px"},attrs:{size:"small"},on:{click:e.copyName}},[e._v("複製")]),e._v(" "),a("span",[e._v(e._s(t))])],1)])})),0)}}],null,!1,1219014502)}),a("a-modal",{attrs:{title:"進階搜尋",visible:e.visible,centered:!0,maskClosable:!1},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("div",[a("h4",{staticStyle:{"margin-bottom":"2px"}},[e._v("手機號碼")]),a("div",{staticStyle:{"margin-bottom":"8px"}},[a("a-input-group",{attrs:{compact:""}},[a("a-select",{staticStyle:{width:"30%"},attrs:{"default-value":"886",size:"small"}},[a("a-select-option",{attrs:{value:"886"}},[e._v("台灣(+886)")]),a("a-select-option",{attrs:{value:"86"}},[e._v("中國大陸(+86)")])],1),a("a-input",{staticStyle:{width:"70%"},attrs:{value:e.phone,size:"small",placeholder:"請輸入完整的電話號碼"}})],1)],1),a("div",{staticStyle:{position:"relative",float:"left",width:"100%"}},[a("h4",{staticStyle:{"margin-bottom":"2px"}},[e._v("最後登入的IP")]),a("div",{staticStyle:{"margin-bottom":"8px"}},[a("a-input",{staticStyle:{width:"100%"},attrs:{size:"small"}})],1)]),a("h4",{staticStyle:{"margin-bottom":"2px"}},[e._v("狀態")]),a("div",{staticStyle:{"margin-bottom":"8px"}},[a("a-radio-group",{model:{value:e.conterTypeValue,callback:function(t){e.conterTypeValue=t},expression:"conterTypeValue"}},[a("a-radio",{attrs:{value:1},on:{change:e.onChangeConterTypeValue}},[e._v("正常")]),a("a-radio",{attrs:{value:2},on:{change:e.onChangeConterTypeValue}},[e._v("凍結")])],1)],1),a("h4",{staticStyle:{"margin-bottom":"2px"}},[e._v("餘額")]),a("div",{staticStyle:{"margin-bottom":"8px"}},[a("a-input",{staticStyle:{width:"calc(50% - 15px)"},attrs:{placeholder:"最低",size:"small"}}),e._v(" 到 "),a("a-input",{staticStyle:{width:"calc(50% - 15px)"},attrs:{placeholder:"最高",size:"small"}})],1),a("h4",{staticStyle:{"margin-bottom":"2px"}},[e._v("存款餘額")]),a("div",{staticStyle:{"margin-bottom":"8px"}},[a("a-input",{staticStyle:{width:"calc(50% - 15px)"},attrs:{placeholder:"最低",size:"small"}}),e._v(" 到 "),a("a-input",{staticStyle:{width:"calc(50% - 15px)"},attrs:{placeholder:"最高",size:"small"}})],1),a("h4",{staticStyle:{"margin-bottom":"2px"}},[e._v("建立時間")]),a("div",{staticStyle:{"margin-bottom":"8px"}},[a("rangeCalender")],1),a("h4",{staticStyle:{"margin-bottom":"2px"}},[e._v("最後登入時間")]),a("div",{staticStyle:{"margin-bottom":"8px"}},[a("rangeCalender")],1),a("h4",{staticStyle:{"margin-bottom":"2px"}},[e._v("搜尋結果排序")]),a("div",{staticStyle:{"margin-bottom":"8px"}},[a("a-input-group",{attrs:{compact:""}},[a("a-select",{staticStyle:{width:"120px"},attrs:{"default-value":"id",size:"small"}},[a("a-select-option",{attrs:{value:"id"}},[e._v("ID")]),a("a-select-option",{attrs:{value:"reman"}},[e._v("餘額")]),a("a-select-option",{attrs:{value:"moneyFlu"}},[e._v("存款餘額")]),a("a-select-option",{attrs:{value:"thesamIP"}},[e._v("同IP會員數量")]),a("a-select-option",{attrs:{value:"buildTime"}},[e._v("建立時間")]),a("a-select-option",{attrs:{value:"lastLofinTime"}},[e._v("最後登入時間")]),a("a-select-option",{attrs:{value:"handelTime"}},[e._v("處理時間")])],1),a("a-button",{attrs:{size:"small"}},[e._v("升序")]),a("a-button",{attrs:{size:"small"}},[e._v("降序")])],1)],1)]),a("template",{slot:"footer"},[a("a-button",{attrs:{type:"primary"},on:{click:e.handleOk}},[e._v("確定")])],1)],2)],1)])]):e._e(),"detaile"==this.page?a("div",[a("detailProfile",{attrs:{customer:e.customer},on:{chagePageName:e.chagePageName}})],1):e._e()])},n=[],l=(a("d81d"),a("ac1f"),a("5319"),a("1276"),a("c1df")),s=a.n(l),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-input-group",{attrs:{compact:""}},[a("a-range-picker",{attrs:{ranges:{"今天":[e.moment(this.rangetodayStart),e.moment(this.rangetodayEnd)],"昨天":[e.moment(this.rangeYestodayStart),e.moment(this.rangeYestodayEnd)],"本週":[e.moment(this.rangeThisWeekStart),e.moment(this.rangeThisWeekEnd)],"上週":[e.moment(this.rangeLastWeekStart),e.moment(this.rangeLastWeekEnd)],"本月":[e.moment(this.rangeThisMonthStart),e.moment(this.rangeThisMonthEnd)],"上月":[e.moment(this.rangeLastMonthStart),e.moment(this.rangeLastMonthEnd)],"最近一個月":[e.moment(this.rangeNearStart),e.moment(this.rangeNearEnd)]},format:"YYYY/MM/DD HH:mm:ss","show-time":"",width:"200px",size:"small",value:e.defaultSelectDate,"default-value":e.defaultSelectDate},on:{change:e.onChangeBuildTime}}),a("a-button",{attrs:{size:"small"},on:{click:e.theDayBefore}},[e._v("前一天")]),a("a-button",{attrs:{size:"small"},on:{click:e.theDayAfter}},[e._v("後一天")])],1)],1)},r=[],c={created:function(){this.calcCalender()},data:function(){return{rangetodayStart:"",rangetodayEnd:"",rangeYestodayStart:"",rangeYestodayEnd:"",rangeThisWeekStart:"",rangeThisWeekEnd:"",rangeLastWeekStart:"",rangeLastWeekEnd:"",rangeThisMonthStart:"",rangeThisMonthEnd:"",rangeLastMonthStart:"",rangeLastMonthEnd:"",rangeNearStart:"",rangeNearEnd:"",defaultSelectDate:[]}},methods:{moment:s.a,onChangeBuildTime:function(e,t){void 0==e[0]&&void 0==e[1]?this.defaultSelectDate.length=0:(this.defaultSelectDate.length=0,this.defaultSelectDate.push(e[0]),this.defaultSelectDate.push(e[1]))},theDayBefore:function(){var e=this.defaultSelectDate,t=new Date(new Date(e[0]._d).getTime()-864e5),a=new Date(new Date(e[1]._d).getTime()-864e5),i=t.getFullYear(),n=t.getMonth()+1,l=t.getDate(),o=t.getHours(),r=t.getMinutes(),c=t.getSeconds(),u=a.getFullYear(),d=a.getMonth()+1,h=a.getDate(),m=a.getHours(),v=a.getMinutes(),g=a.getSeconds();n<10&&(n="0"+n),l<10&&(l="0"+l),o<10&&(o="0"+o),r<10&&(r="0"+r),c<10&&(c="0"+c),d<10&&(d="0"+d),h<10&&(h="0"+h),m<10&&(m="0"+m),v<10&&(v="0"+v),g<10&&(g="0"+g),this.defaultSelectDate.length=0,this.defaultSelectDate.push(s()(i+"/"+n+"/"+l+" "+o+":"+r+":"+c)),this.defaultSelectDate.push(s()(u+"/"+d+"/"+h+" "+m+":"+v+":"+g))},theDayAfter:function(){var e=this.defaultSelectDate,t=new Date(new Date(e[0]._d).getTime()+864e5),a=new Date(new Date(e[1]._d).getTime()+864e5),i=t.getFullYear(),n=t.getMonth()+1,l=t.getDate(),o=t.getHours(),r=t.getMinutes(),c=t.getSeconds(),u=a.getFullYear(),d=a.getMonth()+1,h=a.getDate(),m=a.getHours(),v=a.getMinutes(),g=a.getSeconds();n<10&&(n="0"+n),l<10&&(l="0"+l),o<10&&(o="0"+o),r<10&&(r="0"+r),c<10&&(c="0"+c),d<10&&(d="0"+d),h<10&&(h="0"+h),m<10&&(m="0"+m),v<10&&(v="0"+v),g<10&&(g="0"+g),this.defaultSelectDate.length=0,this.defaultSelectDate.push(s()(i+"/"+n+"/"+l+" "+o+":"+r+":"+c)),this.defaultSelectDate.push(s()(u+"/"+d+"/"+h+" "+m+":"+v+":"+g))},calcCalender:function(){var e=" 00:00:00",t=" 23:59:59",a=(new Date).getFullYear(),i=(new Date).getMonth()+1,n=(new Date).getMonth(),l=(new Date).getDate(),s=(new Date).getTime()-24*((new Date).getDay()-1)*60*60*1e3,o=s+5184e5,r=s-6048e5,c=o-6048e5,u=(new Date).getTime()-24*((new Date).getDate()-1)*60*60*1e3,d=u+24*(new Date(a,i,0).getDate()-1)*60*60*1e3,h=u-24*new Date(a,n,0).getDate()*60*60*1e3,m=h+24*(new Date(a,n,0).getDate()-1)*60*60*1e3,v=new Date-24*new Date(a,n,0).getDate()*60*60*1e3;i<10&&(i="0"+i),n<10&&(n="0"+n),l<10&&(l="0"+l),this.rangetodayStart=a+"/"+i+"/"+l+e,this.rangetodayEnd=a+"/"+i+"/"+l+t;var g=new Date(this.rangetodayStart).getTime()-864e5,p=new Date(g).getFullYear(),y=new Date(g).getMonth()+1,b=new Date(g).getDate();y<10&&(y="0"+y),b<10&&(b="0"+b),this.rangeYestodayStart=p+"/"+y+"/"+b+e,this.rangeYestodayEnd=p+"/"+y+"/"+b+t;var k=new Date(s).getFullYear(),D=new Date(s).getMonth()+1,f=new Date(s).getDate();D<10&&(D="0"+D),f<10&&(f="0"+f);var _=new Date(o).getFullYear(),S=new Date(o).getMonth()+1,w=new Date(o).getDate();S<10&&(S="0"+S),w<10&&(w="0"+w),this.rangeThisWeekStart=k+"/"+D+"/"+f+e,this.rangeThisWeekEnd=_+"/"+S+"/"+w+t;var N=new Date(r).getFullYear(),M=new Date(r).getMonth()+1,x=new Date(r).getDate();M<10&&(M="0"+M),x<10&&(f="0"+f);var T=new Date(c).getFullYear(),C=new Date(c).getMonth()+1,P=new Date(c).getDate();C<10&&(C="0"+C),P<10&&(P="0"+P),this.rangeLastWeekStart=N+"/"+M+"/"+x+e,this.rangeLastWeekEnd=T+"/"+C+"/"+P+t;var I=new Date(u).getFullYear(),E=new Date(u).getMonth()+1,Y=new Date(u).getDate();E<10&&(E="0"+E),Y<10&&(Y="0"+Y);var H=new Date(d).getFullYear(),z=new Date(d).getMonth()+1,O=new Date(d).getDate();z<10&&(z="0"+z),O<10&&(O="0"+O),this.rangeThisMonthStart=I+"/"+E+"/"+Y+e,this.rangeThisMonthEnd=H+"/"+z+"/"+O+t;var F=new Date(h).getFullYear(),L=new Date(h).getMonth()+1,W=new Date(h).getDate();L<10&&(L="0"+L),W<10&&(W="0"+W);var V=new Date(m).getFullYear(),R=new Date(m).getMonth()+1,j=new Date(m).getDate();R<10&&(R="0"+R),j<10&&(j="0"+j),this.rangeLastMonthStart=F+"/"+L+"/"+W+e,this.rangeLastMonthEnd=V+"/"+R+"/"+j+t;var A=a,B=i,$=l,G=(new Date).getHours(),J=(new Date).getMinutes(),Q=(new Date).getSeconds(),K=new Date(v).getFullYear(),U=new Date(v).getMonth()+1,q=new Date(v).getDate(),X=new Date(v).getHours(),Z=new Date(v).getMinutes(),ee=new Date(v).getSeconds();G<0&&(G="0"+G),J<0&&(J="0"+J),Q<0&&(Q="0"+Q),U<0&&(U="0"+U),q<0&&(q="0"+q),Z<0&&(Z="0"+Z),ee<0&&(ee="0"+ee),this.rangeNearStart=K+"/"+U+"/"+q+" "+X+":"+Z+":"+ee,this.rangeNearEnd=A+"/"+B+"/"+$+" "+G+":"+J+":"+Q}}},u=c,d=a("2877"),h=Object(d["a"])(u,o,r,!1,null,"53ce8d5a",null),m=h.exports,v=m,g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"theBox"},[a("div",{staticClass:"centerDiv"},[a("h3",[e._v("帳務報表 / 會員("+e._s(e.customer)+")的明細 "),a("a-button",{staticStyle:{"margin-left":"5px"},attrs:{icon:"left-circle",size:"small"},on:{click:e.lastPage}},[e._v("回上一頁")])],1),a("div",{staticClass:"topBox"},[a("h3",[a("a-tree-select",{staticStyle:{width:"25%"},attrs:{"tree-data":e.gamekindData,"tree-checkable":"","show-checked-strategy":e.SHOW_PARENT,placeholder:"選擇遊戲",dropdownStyle:e.paywaydropdownStyle,"allow-clear":""},model:{value:e.gamekind,callback:function(t){e.gamekind=t},expression:"gamekind"}}),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary"}},[e._v("查詢")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{danger:""},on:{click:e.moreSearch}},[e._v("進階搜尋")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary"},on:{click:e.tobeExcel}},[e._v("匯出Excel")])],1)]),e._m(0),a("div",{staticClass:"bottomBox"},[a("a-table",{ref:"bigTable",staticClass:"ant-table-striped",staticStyle:{width:"100%"},attrs:{columns:e.columns,"data-source":e.data,bordered:"",pagination:e.pagination,footer:e.footer},scopedSlots:e._u([{key:"betTime",fn:function(t){return a("span",{},[e._l(t,(function(t,i){return a("div",{key:t},[0==i?a("div",[e._v(e._s(t))]):e._e(),1==i?a("div",{on:{click:function(a){return e.toshowIP(t)}}},[a("a",[e._v(e._s(t))])]):e._e()])})),a("a-modal",{attrs:{title:"IP資訊",visible:e.visibleShowIP,centered:!0,maskClosable:!1,footer:null,maskStyle:e.maskStyle},on:{ok:e.visibleShowIPOk,cancel:e.visibleShowIPCancel}},[a("div",[a("p",[e._v("國家:"+e._s(e.ipData["country"]))]),a("p",[e._v("城市:"+e._s(e.ipData["city"]))]),a("p",[e._v("地區:"+e._s(e.ipData["regionName"]))]),a("p",[e._v("電信業者:"+e._s(e.ipData["isp"]))])])])],2)}},{key:"betNumber",fn:function(t){return a("span",{},e._l(t,(function(t,i){return a("div",{key:t},[0==i?a("div",[e._v(e._s(t))]):e._e(),1==i?a("div",[e._v(e._s(t))]):e._e(),2==i?a("div",[e._v(e._s(t))]):e._e(),3==i?a("div",[e._v(e._s(t))]):e._e()])})),0)}},{key:"betObj",fn:function(t){return a("span",{},e._l(t,(function(t,i){return a("div",{key:t,staticStyle:{"font-size":"0.8rem"}},[0==i?a("div",{staticClass:"block100"},[e._v(e._s(t))]):e._e(),a("div",[1==i?a("div",{staticClass:"lineblock"},[null!==t?a("span",[e._v("桌號:"+e._s(t))]):e._e()]):e._e(),2==i?a("div",{staticClass:"lineblock"},[null!==t?a("span",[e._v("批號:"+e._s(t))]):e._e()]):e._e(),3==i?a("div",{staticClass:"lineblock"},[null!==t?a("span",[e._v("局號:"+e._s(t))]):e._e()]):e._e()]),4==i?a("div",{staticClass:"block100"},[null!==t?a("span",[e._v("投注對象:"+e._s(t))]):e._e()]):e._e(),5==i?a("div",{staticClass:"block100"},[null!==t?a("span",[e._v("結算時間:"+e._s(t))]):e._e()]):e._e(),6==i?a("div",{staticClass:"block100"},[null!==t?a("span",[e._v("注單狀態:"+e._s(t))]):e._e()]):e._e(),7==i?a("div",{staticClass:"block100"},[a("div",[e._v(e._s(t)+" "),null!==t?a("div",[a("a",[e._v("顯示結果^")])]):e._e(),a("div",{staticClass:"block100 showobj"})])]):e._e(),8==i?a("div",{staticClass:"block100"},[null!==t?a("span",[e._v("期數:"+e._s(t))]):e._e()]):e._e(),9==i?a("div",{staticClass:"block100"},[null!==t?a("span",[e._v("投注對象:"+e._s(t))]):e._e()]):e._e(),10==i?a("div",{staticClass:"block100"},[null!==t?a("span",[e._v("投注類型:"+e._s(t))]):e._e()]):e._e(),11==i?a("div",{staticClass:"block100"},[null!==t?a("span",[e._v("賠率:"+e._s(t))]):e._e()]):e._e(),12==i?a("div",{staticClass:"block100"},[null!==t?a("span",[e._v("組數:"+e._s(t))]):e._e()]):e._e(),13==i?a("div",{staticClass:"block100"},[null!==t?a("span",[e._v("備註:"+e._s(t))]):e._e()]):e._e(),14==i?a("div",{staticClass:"block100"},[null!==t?a("span",[e._v("比賽結果:"+e._s(t))]):e._e()]):e._e(),15==i?a("div",{staticClass:"block100"},[null!==t?a("span",[e._v("是否為內掛下注:"+e._s(t))]):e._e()]):e._e(),16==i?a("div",{staticClass:"block100"},[null!==t?a("span",[e._v("結算時間:"+e._s(t))]):e._e()]):e._e()])})),0)}},{key:"notice",fn:function(t){return a("span",{},e._l(t,(function(t){return a("span",{key:t},["notice"==t?a("div",{staticClass:"btnDiv"},[a("a-button",{staticStyle:{"background-color":"blue",color:"#fff"},on:{click:e.toMadeNote}},[e._v("檢視")])],1):e._e(),"notice"!==t&&"modify"!==t&&"delete"!==t?a("span",{staticClass:"btnDiv"},[e._v(e._s(t))]):e._e(),"modify"==t?a("a-button",{staticStyle:{"background-color":"blue",color:"#fff","margin-left":"3px"},attrs:{icon:"edit",size:"small"},on:{click:e.toModifyNote}}):e._e(),"delete"==t?a("a-button",{staticStyle:{"background-color":"blue",color:"#fff","margin-left":"3px"},attrs:{icon:"delete",size:"small"},on:{click:e.toMadeNoteDelete}}):e._e(),a("a-modal",{attrs:{title:e.MadeNoteTitle,maskStyle:e.maskStyle,visible:e.visibleNotice,centered:!0,maskClosable:!1},on:{ok:e.visibleNoticeOk,cancel:e.visibleNoticeCancel}},[a("a-textarea",{attrs:{placeholder:"請輸入備註","auto-size":{minRows:3,maxRows:5}},model:{value:e.MadeNoteValue,callback:function(t){e.MadeNoteValue=t},expression:"MadeNoteValue"}})],1)],1)})),0)}}])}),a("a-modal",{attrs:{title:"進階搜尋",visible:e.visible,centered:!0,maskClosable:!1},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("div",[a("h4",{staticStyle:{"margin-bottom":"2px"}},[e._v("選擇日期區間 (轉帳時間00:00:00,超過查昨天的帳)")]),a("div",{staticStyle:{"margin-bottom":"8px"}},[a("rangeCalender")],1),a("h4",{staticStyle:{"margin-bottom":"2px"}},[e._v("投注金額")]),a("div",{staticStyle:{"margin-bottom":"8px"}},[a("a-input",{staticStyle:{width:"calc(50% - 15px)"},attrs:{placeholder:"最低",size:"small"}}),e._v(" 到 "),a("a-input",{staticStyle:{width:"calc(50% - 15px)"},attrs:{placeholder:"最高",size:"small"}})],1),a("h4",{staticStyle:{"margin-bottom":"2px"}},[e._v("輸贏結果")]),a("div",{staticStyle:{"margin-bottom":"8px"}},[a("a-input",{staticStyle:{width:"calc(50% - 15px)"},attrs:{placeholder:"最低",size:"small"}}),e._v(" 到 "),a("a-input",{staticStyle:{width:"calc(50% - 15px)"},attrs:{placeholder:"最高",size:"small"}})],1),a("h4",{staticStyle:{"margin-bottom":"2px"}},[e._v("對壓報表明細ID")]),a("div",{staticStyle:{"margin-bottom":"8px"}},[a("a-input",{attrs:{size:"small"}})],1),a("h4",{staticStyle:{"margin-bottom":"2px"}},[e._v("搜尋結果排序")]),a("div",{staticStyle:{"margin-bottom":"8px"}},[a("a-input-group",{attrs:{compact:""}},[a("a-select",{staticStyle:{width:"120px"},attrs:{"default-value":"number1",size:"small"}},[a("a-select-option",{attrs:{value:"number1"}},[e._v("注單編號")]),a("a-select-option",{attrs:{value:"number2"}},[e._v("投注對象")]),a("a-select-option",{attrs:{value:"number3"}},[e._v("投注金額")]),a("a-select-option",{attrs:{value:"number4"}},[e._v("有效投注")])],1),a("a-button",{attrs:{size:"small"}},[e._v("升序")]),a("a-button",{attrs:{size:"small"}},[e._v("降序")])],1)],1)]),a("template",{slot:"footer"},[a("a-button",{attrs:{type:"primary"},on:{click:e.handleOk}},[e._v("確定")])],1)],2)],1)])])])},p=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sumaryBox"},[a("div",{staticClass:"sumaryDiv",staticStyle:{"background-color":"orange"}},[a("p",[e._v("總注單數")]),a("p",[e._v("4.00")])]),a("div",{staticClass:"sumaryDiv",staticStyle:{"background-color":"blue"}},[a("p",[e._v("總下注量")]),a("p",[e._v("180.00")])]),a("div",{staticClass:"sumaryDiv",staticStyle:{"background-color":"blue"}},[a("p",[e._v("總有效投注")]),a("p",[e._v("130.00")])]),a("div",{staticClass:"sumaryDiv",staticStyle:{"background-color":"#666"}},[a("p",[e._v("會員")]),a("p",[e._v("-130.00")])])])}],y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-input-group",{attrs:{compact:""}},[a("a-range-picker",{attrs:{ranges:{"今天":[e.moment(this.rangetodayStart),e.moment(this.rangetodayEnd)],"昨天":[e.moment(this.rangeYestodayStart),e.moment(this.rangeYestodayEnd)],"本週":[e.moment(this.rangeThisWeekStart),e.moment(this.rangeThisWeekEnd)],"上週":[e.moment(this.rangeLastWeekStart),e.moment(this.rangeLastWeekEnd)],"本月":[e.moment(this.rangeThisMonthStart),e.moment(this.rangeThisMonthEnd)],"上月":[e.moment(this.rangeLastMonthStart),e.moment(this.rangeLastMonthEnd)],"最近一個月":[e.moment(this.rangeNearStart),e.moment(this.rangeNearEnd)]},format:"YYYY/MM/DD HH:mm:ss","show-time":"",width:"200px",size:"small",value:e.defaultSelectDate,"default-value":e.defaultSelectDate},on:{change:e.onChangeBuildTime}}),a("a-button",{attrs:{size:"small"},on:{click:e.theDayBefore}},[e._v("前一天")]),a("a-button",{attrs:{size:"small"},on:{click:e.theDayAfter}},[e._v("後一天")])],1)],1)},b=[],k={created:function(){this.calcCalender()},data:function(){return{rangetodayStart:"",rangetodayEnd:"",rangeYestodayStart:"",rangeYestodayEnd:"",rangeThisWeekStart:"",rangeThisWeekEnd:"",rangeLastWeekStart:"",rangeLastWeekEnd:"",rangeThisMonthStart:"",rangeThisMonthEnd:"",rangeLastMonthStart:"",rangeLastMonthEnd:"",rangeNearStart:"",rangeNearEnd:"",defaultSelectDate:[]}},methods:{moment:s.a,onChangeBuildTime:function(e,t){void 0==e[0]&&void 0==e[1]?this.defaultSelectDate.length=0:(this.defaultSelectDate.length=0,this.defaultSelectDate.push(e[0]),this.defaultSelectDate.push(e[1]))},theDayBefore:function(){var e=this.defaultSelectDate,t=new Date(new Date(e[0]._d).getTime()-864e5),a=new Date(new Date(e[1]._d).getTime()-864e5),i=t.getFullYear(),n=t.getMonth()+1,l=t.getDate(),o=t.getHours(),r=t.getMinutes(),c=t.getSeconds(),u=a.getFullYear(),d=a.getMonth()+1,h=a.getDate(),m=a.getHours(),v=a.getMinutes(),g=a.getSeconds();n<10&&(n="0"+n),l<10&&(l="0"+l),o<10&&(o="0"+o),r<10&&(r="0"+r),c<10&&(c="0"+c),d<10&&(d="0"+d),h<10&&(h="0"+h),m<10&&(m="0"+m),v<10&&(v="0"+v),g<10&&(g="0"+g),this.defaultSelectDate.length=0,this.defaultSelectDate.push(s()(i+"/"+n+"/"+l+" "+o+":"+r+":"+c)),this.defaultSelectDate.push(s()(u+"/"+d+"/"+h+" "+m+":"+v+":"+g))},theDayAfter:function(){var e=this.defaultSelectDate,t=new Date(new Date(e[0]._d).getTime()+864e5),a=new Date(new Date(e[1]._d).getTime()+864e5),i=t.getFullYear(),n=t.getMonth()+1,l=t.getDate(),o=t.getHours(),r=t.getMinutes(),c=t.getSeconds(),u=a.getFullYear(),d=a.getMonth()+1,h=a.getDate(),m=a.getHours(),v=a.getMinutes(),g=a.getSeconds();n<10&&(n="0"+n),l<10&&(l="0"+l),o<10&&(o="0"+o),r<10&&(r="0"+r),c<10&&(c="0"+c),d<10&&(d="0"+d),h<10&&(h="0"+h),m<10&&(m="0"+m),v<10&&(v="0"+v),g<10&&(g="0"+g),this.defaultSelectDate.length=0,this.defaultSelectDate.push(s()(i+"/"+n+"/"+l+" "+o+":"+r+":"+c)),this.defaultSelectDate.push(s()(u+"/"+d+"/"+h+" "+m+":"+v+":"+g))},calcCalender:function(){var e=" 00:00:00",t=" 23:59:59",a=(new Date).getFullYear(),i=(new Date).getMonth()+1,n=(new Date).getMonth(),l=(new Date).getDate(),s=(new Date).getTime()-24*((new Date).getDay()-1)*60*60*1e3,o=s+5184e5,r=s-6048e5,c=o-6048e5,u=(new Date).getTime()-24*((new Date).getDate()-1)*60*60*1e3,d=u+24*(new Date(a,i,0).getDate()-1)*60*60*1e3,h=u-24*new Date(a,n,0).getDate()*60*60*1e3,m=h+24*(new Date(a,n,0).getDate()-1)*60*60*1e3,v=new Date-24*new Date(a,n,0).getDate()*60*60*1e3;i<10&&(i="0"+i),n<10&&(n="0"+n),l<10&&(l="0"+l),this.rangetodayStart=a+"/"+i+"/"+l+e,this.rangetodayEnd=a+"/"+i+"/"+l+t;var g=new Date(this.rangetodayStart).getTime()-864e5,p=new Date(g).getFullYear(),y=new Date(g).getMonth()+1,b=new Date(g).getDate();y<10&&(y="0"+y),b<10&&(b="0"+b),this.rangeYestodayStart=p+"/"+y+"/"+b+e,this.rangeYestodayEnd=p+"/"+y+"/"+b+t;var k=new Date(s).getFullYear(),D=new Date(s).getMonth()+1,f=new Date(s).getDate();D<10&&(D="0"+D),f<10&&(f="0"+f);var _=new Date(o).getFullYear(),S=new Date(o).getMonth()+1,w=new Date(o).getDate();S<10&&(S="0"+S),w<10&&(w="0"+w),this.rangeThisWeekStart=k+"/"+D+"/"+f+e,this.rangeThisWeekEnd=_+"/"+S+"/"+w+t;var N=new Date(r).getFullYear(),M=new Date(r).getMonth()+1,x=new Date(r).getDate();M<10&&(M="0"+M),x<10&&(f="0"+f);var T=new Date(c).getFullYear(),C=new Date(c).getMonth()+1,P=new Date(c).getDate();C<10&&(C="0"+C),P<10&&(P="0"+P),this.rangeLastWeekStart=N+"/"+M+"/"+x+e,this.rangeLastWeekEnd=T+"/"+C+"/"+P+t;var I=new Date(u).getFullYear(),E=new Date(u).getMonth()+1,Y=new Date(u).getDate();E<10&&(E="0"+E),Y<10&&(Y="0"+Y);var H=new Date(d).getFullYear(),z=new Date(d).getMonth()+1,O=new Date(d).getDate();z<10&&(z="0"+z),O<10&&(O="0"+O),this.rangeThisMonthStart=I+"/"+E+"/"+Y+e,this.rangeThisMonthEnd=H+"/"+z+"/"+O+t;var F=new Date(h).getFullYear(),L=new Date(h).getMonth()+1,W=new Date(h).getDate();L<10&&(L="0"+L),W<10&&(W="0"+W);var V=new Date(m).getFullYear(),R=new Date(m).getMonth()+1,j=new Date(m).getDate();R<10&&(R="0"+R),j<10&&(j="0"+j),this.rangeLastMonthStart=F+"/"+L+"/"+W+e,this.rangeLastMonthEnd=V+"/"+R+"/"+j+t;var A=a,B=i,$=l,G=(new Date).getHours(),J=(new Date).getMinutes(),Q=(new Date).getSeconds(),K=new Date(v).getFullYear(),U=new Date(v).getMonth()+1,q=new Date(v).getDate(),X=new Date(v).getHours(),Z=new Date(v).getMinutes(),ee=new Date(v).getSeconds();G<0&&(G="0"+G),J<0&&(J="0"+J),Q<0&&(Q="0"+Q),U<0&&(U="0"+U),q<0&&(q="0"+q),Z<0&&(Z="0"+Z),ee<0&&(ee="0"+ee),this.rangeNearStart=K+"/"+U+"/"+q+" "+X+":"+Z+":"+ee,this.rangeNearEnd=A+"/"+B+"/"+$+" "+G+":"+J+":"+Q}}},D=k,f=Object(d["a"])(D,y,b,!1,null,"4d5f50e3",null),_=f.exports,S=_,w=a("7bec"),N=a("cebe"),M=a.n(N),x=w["a"].SHOW_PARENT,T=a("8530"),C=T.export_json_to_excel,P=[{title:"下注時間",dataIndex:"betTime",key:"betTime",scopedSlots:{customRender:"betTime"},align:"center",width:"200px"},{title:"注單編號",dataIndex:"betNumber",key:"betNumber",scopedSlots:{customRender:"betNumber"},align:"center",width:"250px"},{title:"投注對象",dataIndex:"betObj",key:"betObj",scopedSlots:{customRender:"betObj"},align:"left",width:"250px"},{title:"投注金額",dataIndex:"betMoney",key:"betMoney",align:"center",width:"120px"},{title:"有效投注",dataIndex:"validbet",key:"validbet",align:"center",width:"120px"},{title:"會員",key:"member",dataIndex:"member",align:"center",width:"120px"},{title:"備註",key:"notice",dataIndex:"notice",scopedSlots:{customRender:"notice"},align:"center",width:"120px"}],I=[{key:"1",betTime:["2021/09/14 14:23:51"],betNumber:["#222351535","234517","wus888","18-8834472439"],betObj:["DG真人-財神百家樂","DG11","12","18","莊:50","2021/09/14 14:25:00","已結算","開7莊2"],betMoney:"50.00",validbet:"50.00",member:"-50.00",notice:["notice"]},{key:"2",betTime:["2021/09/14 14:22:18"],betNumber:["#222351532","234517","wus888","18-8834472486"],betObj:["DG真人-財神百家樂","DG11","12","17","莊:50","2021/09/14 14:25:00","已結算","開7莊2"],betMoney:"50.00",validbet:"50.00",member:"-50.00",notice:["notice"]},{key:"3",betTime:["2021/09/14 14:19:48"],betNumber:["#222351533","234517","wus888","18-8834472459"],betObj:["GTR彩票-皇家賽馬",null,null,null,null,null,null,null,"12413063","雙面盤@第1名:單","2","1.97","1","無","04,06,01,03,07,05,10,02,08,09","否","2021/09/14 13:20:00"],betMoney:"50.00",validbet:"50.00",member:"-50.00",notice:["notice"]},{key:"4",betTime:["2021/09/14 14:19:48","118.63.137.97"],betNumber:["#222351534","234517","wus888","18-8834472459"],betObj:["WM真人-百家樂",null,null,null,null,null,null,null,"12413063","雙面盤@第1名:單","2","1.97","1","無","04,06,01,03,07,05,10,02,08,09","否","2021/09/14 13:20:00"],betMoney:"50.00",validbet:"50.00",member:"-50.00",notice:["notice"]}],E=[{title:"全選",value:"0",key:"0"},{title:"系統",value:"0-0",key:"0-0"},{title:"虛擬ATM",value:"0-1",key:"0-1"},{title:"網銀轉帳",value:"0-2",key:"0-2"},{title:"無",value:"0-3",key:"0-3"},{title:"全家超商條碼繳款",value:"0-4",key:"0-4"},{title:"7-11超商條碼繳款",value:"0-5",key:"0-5"},{title:"OK超商條碼繳款",value:"0-6",key:"0-6"},{title:"微信",value:"0-7",key:"0-7"},{title:"支付寶",value:"0-8",key:"0-8"},{title:"QQ錢包",value:"0-9",key:"0-9"},{title:"一般信用卡",value:"0-10",key:"0-10"},{title:"銀聯信用卡",value:"0-11",key:"0-11"},{title:"虛擬貨幣",value:"0-12",key:"0-12"},{title:"Quick",value:"0-13",key:"0-13"},{title:"Jd",value:"0-14",key:"0-14"},{title:"UnionPay",value:"0-15",key:"0-15"},{title:"Meituan",value:"0-16",key:"0-16"},{title:"Haiwai",value:"0-17",key:"0-17"},{title:"All Payment",value:"0-18",key:"0-18"}],Y=[{title:"全選",value:"1",key:"1"},{title:"系統",value:"1-0",key:"1-0"},{title:"綠界",value:"1-1",key:"1-1"},{title:"金恆通",value:"1-2",key:"1-2"},{title:"聯通支付",value:"1-3",key:"1-3"},{title:"FuPay",value:"1-4",key:"1-4"},{title:"財富通",value:"1-5",key:"1-5"},{title:"CgPay",value:"1-6",key:"1-6"},{title:"閎捷支付",value:"1-7",key:"1-7"},{title:"DmPay",value:"1-8",key:"1-8"},{title:"支付寶",value:"1-9",key:"1-9"},{title:"QPay",value:"1-10",key:"1-10"},{title:"OneGoPay",value:"1-11",key:"1-11"},{title:"幣安BitSaifu",value:"1-12",key:"1-12"},{title:"利資",value:"1-13",key:"1-13"},{title:"JiaPay",value:"1-14",key:"1-14"},{title:"CuPay",value:"1-15",key:"1-15"},{title:"海皇",value:"1-16",key:"1-16"},{title:"Ost168",value:"1-17",key:"1-17"},{title:"發發支付",value:"1-18",key:"1-18"},{title:"2vPay",value:"1-19",key:"1-19"},{title:"匯豐支付",value:"1-20",key:"1-20"},{title:"Gpay88",value:"1-21",key:"1-21"},{title:"Bvac Pay",value:"1-22",key:"1-22"},{title:"Pay Trust88",value:"1-23",key:"1-23"},{title:"Ak Pay",value:"1-24",key:"1-24"},{title:"Rft Pay",value:"1-25",key:"1-25"},{title:"Fun Pay",value:"1-26",key:"1-26"},{title:"富責東",value:"1-27",key:"1-27"},{title:"信付東",value:"1-28",key:"1-28"},{title:"8957",value:"1-29",key:"1-29"},{title:"MTPays",value:"1-30",key:"1-30"},{title:"保時捷",value:"1-31",key:"1-31"},{title:"Sky Pay",value:"1-32",key:"1-32"},{title:"InstantPay",value:"1-33",key:"1-33"},{title:"VanderPays",value:"1-34",key:"1-34"},{title:"EexiePay",value:"1-35",key:"1-35"},{title:"Help2Pay",value:"1-36",key:"1-36"}],H=[{title:"全選",value:"3",key:"3"},{title:"其他條件",value:"4",key:"4",children:[{title:"加點類型 (全選)",value:"5",key:"5",children:[{title:"儲值",value:"5-0-1",key:"5-0-1"},{title:"優惠",value:"5-0-2",key:"5-0-2"},{title:"遊戲點數異常補點",value:"5-0-3",key:"5-0-3"},{title:"手動上分",value:"5-0-4",key:"5-0-4"}]},{title:"扣點類型 (全選)",value:"6",key:"6",children:[{title:"轉移",value:"6-0-1",key:"6-0-1"},{title:"手動加點",value:"6-0-2",key:"6-0-2"},{title:"優惠扣回",value:"6-0-3",key:"6-0-3"},{title:"遊戲點數異常扣點",value:"6-0-4",key:"6-0-4"}]}]}],z=[{title:"全選",value:"10",key:"10",children:[{title:"遊戲1",value:"10-1",key:"10-1"},{title:"遊戲2",value:"10-2",key:"10-2"},{title:"遊戲3",value:"10-3",key:"10-3"},{title:"遊戲4",value:"10-4",key:"10-4"}]}],O=[{key:"0",betTime:[""],betNumber:[""],betObj:[""],betMoney:"50.00",validbet:"50.00",member:"-50.00",notice:["notice"]}],F={components:{rangeCalender:S},props:{customer:String},data:function(){return{columns:P,data:I,showStatisticsState:!1,visible:!1,currentPageData:O,payway:[],payCom:[],kind:[],gamekind:[],gamekindData:z,paywayData:E,payComData:Y,kindData:H,SHOW_PARENT:x,paywaydropdownStyle:{height:"25vh"},maskStyle:{opacity:"0.1",background:"#000000",animation:"none"},visibleNotice:!1,MadeNoteTitle:"",MadeNoteValue:"",visibleShowIP:!1,ipData:{},scrollxx:{x:"100%"},pagination:{pageSize:5}}},mounted:function(){},methods:{moment:s.a,moreSearch:function(){this.visible=!0},refresh:function(){},handleOk:function(){this.visible=!1},handleCancel:function(){this.visible=!1},lastPage:function(){this.$emit("chagePageName","profile")},showStatistics:function(){this.showStatisticsState=!this.showStatisticsState},tobeExcel:function(){var e=this;Promise.resolve().then(function(){var t=["姓名","电话","分数","交卷时间"],a=["name","phone","course","createTime"],i=[{key:1,name:"may",phone:"0322",course:"777",createTime:"666"}],n=e.formatJson(a,i);C(t,n,"考试成绩汇总")}.bind(null,a)).catch(a.oe)},formatJson:function(e,t){return t.map((function(t){return e.map((function(e){return t[e]}))}))},footer:function(){var e=this.$createElement,t=[{key:"0",betTime:["總計: 4.00"],betNumber:[""],betObj:[""],betMoney:"50.00",validbet:"50.00",member:"-50.00",notice:[""]}];return e("a-table",{class:"ant-table-stripedno",ref:"footerData",attrs:{rowKey:Math.random,bordered:!1,showHeader:!1,columns:P,dataSource:t,pagination:!1},style:"width:100%"})},toMadeNote:function(e){var t=e.path[5].childNodes[1].childNodes[0].childNodes[0].outerText;this.MadeNoteTitle="備註 ("+t+")",this.visibleNotice=!0,this.MadeNoteValue=""},visibleNoticeOk:function(){var e=this;this.visibleNotice=!1;var t=this.MadeNoteTitle.split("(")[1].split(")")[0].replace(/^\s\s*/,"").replace(/\s\s*$/,"");0!==this.MadeNoteValue.replace(/^\s\s*/,"").replace(/\s\s*$/,"").length&&this.data.map((function(a){a.betNumber[0]==t&&(a.notice[0]=e.MadeNoteValue,a.notice[1]="modify",a.notice[2]="delete")}))},visibleNoticeCancel:function(){this.visibleNotice=!1},toModifyNote:function(e){var t=this,a=e.path[4].childNodes[1].childNodes[0].childNodes[0].outerText;this.MadeNoteTitle="備註 ("+a+")",this.visibleNotice=!0,this.MadeNoteValue="",this.data.map((function(e){e.betNumber[0]==a&&3==e.notice.length&&(t.MadeNoteValue=e.notice[0])}))},toMadeNoteDelete:function(e){var t=e.path[4].childNodes[1].childNodes[0].childNodes[0].outerText;this.data.map((function(e){if(e.betNumber[0]==t){var a=["notice"];e.notice=a}}))},visibleShowIPOk:function(){this.visibleShowIP=!1,this.ipData={}},visibleShowIPCancel:function(){this.visibleShowIP=!1,this.ipData={}},toshowIP:function(e){var t=this;this.visibleShowIP=!0;var a="http://ip-api.com/json/"+e;M.a.get(a).then((function(e){t.ipData={isp:e.data.isp,country:e.data.country,city:e.data.city,regionName:e.data.regionName}})).catch((function(e){t.ipData={isp:"數據錯誤",country:"數據錯誤",city:"數據錯誤",regionName:"數據錯誤"}})),this.visibleShowIP=!0}}},L=F,W=(a("67e0"),Object(d["a"])(L,g,p,!1,null,"1c95ebbd",null)),V=W.exports,R=V,j=[{title:"會員編號",dataIndex:"merberNumber",key:"merberNumber",scopedSlots:{customRender:"merberNumber"},align:"center",width:"150px"},{title:"狀態",dataIndex:"status",key:"status",align:"center",width:"80px"},{title:"餘額",dataIndex:"remain",key:"remain",align:"center",width:"100px"},{title:"存款餘額",key:"storeRemain",dataIndex:"storeRemain",align:"center",width:"100px"},{title:"手機號碼",key:"phoneCode",dataIndex:"phoneCode",align:"center",width:"120px"},{title:"同IP會員數量",key:"samIpCount",dataIndex:"samIpCount",align:"center",width:"100px"},{title:"建立時間",key:"buildTime",dataIndex:"buildTime",align:"center",width:"150px"},{title:"最後登入時間/IP",key:"lastLogin",dataIndex:"lastLogin",scopedSlots:{customRender:"lastLogin"},align:"center",width:"150px"},{title:"備註",key:"notice",dataIndex:"notice",scopedSlots:{customRender:"notice"},align:"center",width:"150px"},{title:"詳細報表",key:"tradeHis",dataIndex:"tradeHis",scopedSlots:{customRender:"tradeHis"},align:"center",width:"120px"}],A=[{key:"1",merberNumber:["AA1234"],merberNumberCopy:"copy",status:"正常",remain:15e3,storeRemain:15e4,phoneCode:"0912345678",samIpCount:7,buildTime:"2021/04/03 23:11:54",lastLogin:["2021/04/03 23:11:54","35.232.180.179"],notice:["notice"],tradeHis:["tradeHis"]},{key:"2",merberNumber:["AA1235"],merberNumberCopy:"copy",status:"正常",remain:15e3,storeRemain:15e4,phoneCode:"0912345678",samIpCount:7,buildTime:"2021/04/03 23:11:54",lastLogin:["2021/04/03 23:11:54","35.232.180.179"],notice:["notice"],tradeHis:["tradeHis"]},{key:"3",merberNumber:["AA1236"],merberNumberCopy:"copy",status:"正常",remain:15e3,storeRemain:15e4,phoneCode:"0912345678",samIpCount:7,buildTime:"2021/04/03 23:11:54",lastLogin:["2021/04/03 23:11:54","35.232.180.179"],notice:["notice"],tradeHis:["tradeHis"]},{key:"4",merberNumber:["AA1237"],merberNumberCopy:"copy",status:"正常",remain:15e3,storeRemain:15e4,phoneCode:"0912345678",samIpCount:7,buildTime:"2021/04/03 23:11:54",lastLogin:["2021/04/03 23:11:54","35.232.180.179"],notice:["notice"],tradeHis:["tradeHis"]}],B={components:{rangeCalender:v,detailProfile:R},created:function(){},data:function(){return{columns:j,data:A,visible:!1,conterTypeValue:"",page:"profile",phone:"",visibleNotice:!1,MadeNoteTitle:"",MadeNoteValue:"",tableScroll:{x:10},pagination:{pageSize:5},histitleName:"",customer:"",visibleShowIP:!1,maskStyle:{opacity:"0.1",background:"#000000",animation:"none"},ipData:{}}},methods:{moment:s.a,moreSearch:function(){this.visible=!0},handleOk:function(){this.visible=!1},handleCancel:function(){this.visible=!1},onChangeConterTypeValue:function(e){this.conterTypeValue=e.target.value},chagePageName:function(e){this.page=e},toMadeNote:function(e){var t=e.path[5].childNodes[0].outerText.split("製")[1];this.MadeNoteTitle="備註 ("+t+")",this.visibleNotice=!0,this.MadeNoteValue=""},visibleNoticeOk:function(){var e=this;this.visibleNotice=!1;var t=this.MadeNoteTitle.split("(")[1].split(")")[0].replace(/^\s\s*/,"").replace(/\s\s*$/,"");0!==this.MadeNoteValue.replace(/^\s\s*/,"").replace(/\s\s*$/,"").length&&this.data.map((function(a){a.merberNumber[0]==t&&(a.notice[0]=e.MadeNoteValue,a.notice[1]="modify",a.notice[2]="delete")}))},toMadeNoteDelete:function(e){var t=e.path[4].childNodes[0].childNodes[0].childNodes[0].childNodes[0].outerText.split("製 ")[1].replace(/^\s\s*/,"").replace(/\s\s*$/,"");this.data.map((function(e){if(e.merberNumber[0]==t){var a=["notice"];e.notice=a}}))},toModifyNote:function(e){var t=this,a=e.path[4].childNodes[0].childNodes[0].childNodes[0].childNodes[0].outerText.split("製 ")[1];this.MadeNoteTitle="備註 ("+a+")",this.visibleNotice=!0,this.MadeNoteValue="",this.data.map((function(e){e.merberNumber[0]==a&&3==e.notice.length&&(t.MadeNoteValue=e.notice[0])}))},visibleNoticeCancel:function(){this.visibleNotice=!1},theTradeHis:function(e){var t=e.path[5].childNodes[0].innerText.split("製")[1].replace(/^\s\s*/,"").replace(/\s\s*$/,"");this.page="detaile",this.histitleName=t,this.customer=t},copyName:function(e){var t=e.path[5].childNodes[0].innerText.split("製")[1].replace(/^\s\s*/,"").replace(/\s\s*$/,""),a=this;this.$copyText(t).then((function(e){a.$confirm({title:"已成功複製",content:"您已成功複製,可直接黏貼",onOk:function(){},cancelButtonProps:{style:{display:"none"}}})}))},toshowIP:function(e){var t=this;this.visibleShowIP=!0;var a="http://ip-api.com/json/"+e;M.a.get(a).then((function(e){t.ipData={isp:e.data.isp,country:e.data.country,city:e.data.city,regionName:e.data.regionName}})).catch((function(e){t.ipData={isp:"數據錯誤",country:"數據錯誤",city:"數據錯誤",regionName:"數據錯誤"}})),this.visibleShowIP=!0},visibleShowIPOk:function(){this.visibleShowIP=!1,this.ipData={}},visibleShowIPCancel:function(){this.visibleShowIP=!1,this.ipData={}}}},$=B,G=(a("2e88"),Object(d["a"])($,i,n,!1,null,"5d94c07c",null)),J=G.exports;t["default"]=J}}]);