(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f352b04e"],{"0e54":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"搜索名称关键词"},model:{value:t.searchKey,callback:function(e){t.searchKey=e},expression:"searchKey"}})],1)],1),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.pageList,border:"",fit:""}},[a("el-table-column",{attrs:{prop:"ID",label:"设备号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"Addr",width:"180px",align:"center",label:"地址"}}),t._v(" "),a("el-table-column",{attrs:{width:"80px",align:"center",label:"通道数"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.Channels?e.row.Channels.length:0)+"\n      ")]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"100px",align:"center",label:"注册时间"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("show-time",{attrs:{time:t.row.RegisterTime}})]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"100px",align:"center",label:"更新时间"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("show-time",{attrs:{time:t.row.UpdateTime}})]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"110px",align:"center",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("status-show",{attrs:{status:t.row.Status}})]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",width:"120px",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.Channels&&e.row.Channels.length>0?a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return t.onShowChannelDialog(e.row)}}},[t._v("查看通道\n        ")]):t._e()]}}])})],1),t._v(" "),a("el-pagination",{staticStyle:{"margin-top":"10px"},attrs:{background:"","hide-on-single-page":"",layout:"prev, pager, next","current-page":t.currentLogPage,total:t.dataListFilter.length},on:{"update:currentPage":function(e){t.currentLogPage=e},"update:current-page":function(e){t.currentLogPage=e}}}),t._v(" "),a("el-dialog",{attrs:{title:"通道列表","show-close":!1,visible:t.dialogVisible,width:"70%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("div",[t.dialogVisible?a("el-table",{staticStyle:{width:"100%"},attrs:{fit:"",border:"",data:t.channelList}},[a("el-table-column",{attrs:{prop:"DeviceID",label:"通道编号",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"Name",label:"名称",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"Manufacturer",label:"厂商"}}),t._v(" "),a("el-table-column",{attrs:{prop:"Address",label:"地址"}}),t._v(" "),a("el-table-column",{attrs:{prop:"Status",label:"状态"}}),t._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return t.onPlay(e.row)}}},[t._v("播放")])]}}],null,!1,170552090)})],1):t._e()],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("关闭")])],1)]),t._v(" "),a("el-dialog",{attrs:{title:"设备播放","show-close":!1,"before-close":t.handlePlayClose,visible:t.dialogVisible2,width:"1000px"},on:{"update:visible":function(e){t.dialogVisible2=e}}},[t.dialogVisible2&&t.tempRtcStream?a("div",{staticStyle:{height:"400px",overflow:"hidden"}},[a("player",{attrs:{stream:t.tempRtcStream,"temp-play-option":t.tempPlayOption}})],1):t._e(),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:t.handlePlayClose}},[t._v("关闭")])],1)])],1)},r=[],o=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),l=a("2f62"),i=a("6280"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("el-tag",{attrs:{type:"success"}},[t._v(t._s(t.status))])],1)},c=[],p={name:"StatusShow",props:["status"]},u=p,d=a("2877"),h=Object(d["a"])(u,s,c,!1,null,"943aeb20",null),f=h.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:18}},[a("div",{staticStyle:{height:"400px",width:"700px",position:"relative"}},[a("jessibuca-player",{attrs:{"stream-path":t.stream}})],1)]),t._v(" "),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"operation-block"},[a("ptz-cmd",{attrs:{"temp-item":t.tempPlayOption}})],1)])],1)},v=[],g=a("a7ca"),b=a("d7f4"),w={name:"Player",components:{JessibucaPlayer:g["a"],PtzCmd:b["a"]},props:["stream","tempPlayOption"],data:function(){return{}}},z=w,y=(a("4075"),Object(d["a"])(z,m,v,!1,null,"38ec058a",null)),_=y.exports,C=a("4ec3");function P(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function x(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?P(Object(a),!0).forEach((function(e){Object(o["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):P(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var O={name:"gb28181",components:{ShowTime:i["a"],StatusShow:f,Player:_},data:function(){return{searchKey:"",dialogVisible:!1,dialogVisible2:!1,dialogItem:"",tempPlayOption:{},channelList:[],tempRtcStream:"",currentLogPage:1}},computed:x(x({},Object(l["b"])({dataList:function(t){return t.Gb28181List.filter((function(t){return t.Channels&&t.Channels.length}))},autoInvite:function(t){return t.gb28181AutoInvite}})),{},{dataListFilter:function(){var t=[],e=this.searchKey.trim();return t=e?this.dataList.filter((function(t){return-1!==t.ID.indexOf(e)})):this.dataList,t},pageList:function(){return this.dataListFilter.slice(10*(this.currentLogPage-1),10*this.currentLogPage)}}),methods:{onPlay:function(t){var e=this,a=this.dialogItem.ID,n={id:a,channel:t.DeviceID};this.tempPlayOption=n,this.autoInvite?this.handleInvite(t,a):Object(C["n"])(n).then((function(){e.handleInvite(t,a)})).catch((function(n){e.handleInvite(t,a)}))},handleInvite:function(t,e){var a=this;this.$nextTick((function(){a.tempRtcStream=e+"/"+t.DeviceID,a.dialogVisible2=!0}))},handlePlayClose:function(){this.autoInvite||Object(C["b"])({id:this.tempPlayOption.id,channel:this.tempPlayOption.channel}),this.dialogVisible2=!1},onShowChannelDialog:function(t){this.dialogItem=t,this.channelList=t.Channels||[],this.dialogVisible=!0}}},S=O,k=Object(d["a"])(S,n,r,!1,null,"f7dc7f92",null);e["default"]=k.exports},"3fe1":function(t,e,a){"use strict";a("c87c")},4075:function(t,e,a){"use strict";a("4c0c")},"4c0c":function(t,e,a){},6280:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.time?a("el-tooltip",{attrs:{effect:"light",placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t._f("parseTimeFilter")(t.time)))]),t._v(" "),a("span",[t._v(t._s(t._f("formatPassTimeFilter")(t.time)))])]):t._e()},r=[],o={name:"ShowTime",props:["time"]},l=o,i=a("2877"),s=Object(i["a"])(l,n,r,!1,null,"68b4158a",null);e["a"]=s.exports},"88a2":function(t,e,a){"use strict";(function(t){a.d(e,"b",(function(){return i})),a.d(e,"a",(function(){return n}));a("6b54");var n={stop:"stop",right:"right",left:"left",up:"up",down:"down",leftUp:"leftUp",leftDown:"leftDown",rightUp:"rightUp",rightDown:"rightDown",zoomFar:"zoomFar",zoomNear:"zoomNear",apertureFar:"apertureFar",apertureNear:"apertureNear",focusFar:"focusFar",focusNear:"focusNear",setPos:"setPos",calPos:"calPos",delPos:"delPos"},r={stop:0,right:1,left:2,up:8,down:4,leftUp:10,leftDown:6,rightUp:9,rightDown:5,zoomFar:16,zoomNear:32,apertureFar:72,apertureNear:68,focusFar:66,focusNear:65,setPos:129,calPos:130,delPos:131},o=[25,50,75,100,125,150,175,200,225,250],l=[1,2,3,4,5,6,7,8,9,16];function i(t){var e,a,o,l,i=t.type,u=t.speed,d=t.index,h=s(u);switch(e=r[i],i){case n.up:case n.down:case n.apertureFar:case n.apertureNear:o=h;break;case n.right:case n.left:case n.focusFar:case n.focusNear:a=h;break;case n.leftUp:case n.leftDown:case n.rightUp:case n.rightDown:a=h,o=h;break;case n.zoomFar:case n.zoomNear:l=16;break;case n.calPos:case n.delPos:case n.setPos:o=c(d);break;default:break}return p(e,a,o,l)}function s(t){t=t||5;var e=t-1,a=o[e]||o[4];return a}function c(t){return l[t-1]}function p(e,a,n,r){var o=t.alloc(8);return o[0]=165,o[1]=15,o[2]=1,e&&(o[3]=e),a&&(o[4]=a),n&&(o[5]=n),r&&(o[6]=r),o[7]=(o[0]+o[1]+o[2]+o[3]+o[4]+o[5]+o[6])%256,u(o)}function u(t){for(var e="",a=0;a<t.length;a++){var n=t[a].toString(16);1===n.length&&(n="0"+n),e+=n.toUpperCase()}return e}}).call(this,a("b639").Buffer)},c87c:function(t,e,a){},d7f4:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ptz-cmd-block"},[a("div",{staticClass:"control"},t._l(8,(function(e){return a("svg",{class:"arrow"+e,attrs:{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"64",height:"64"},on:{click:function(a){return t.ptzCmdDirection(e)}}},[a("path",{attrs:{d:"M682.666667 955.733333H341.333333a17.066667 17.066667 0 0 1-17.066666-17.066666V529.066667H85.333333a17.066667 17.066667 0 0 1-12.066133-29.1328l426.666667-426.666667a17.0496 17.0496 0 0 1 24.132266 0l426.666667 426.666667A17.066667 17.066667 0 0 1 938.666667 529.066667H699.733333v409.6a17.066667 17.066667 0 0 1-17.066666 17.066666z m-324.266667-34.133333h307.2V512a17.066667 17.066667 0 0 1 17.066667-17.066667h214.801066L512 109.4656 126.532267 494.933333H341.333333a17.066667 17.066667 0 0 1 17.066667 17.066667v409.6z","p-id":"6849"}})])})),0),t._v(" "),a("div",{staticClass:"control control2"},[a("el-tooltip",{attrs:{effect:"light",content:"镜头放大",placement:"top","open-delay":200}},[a("svg",{attrs:{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},on:{click:function(e){return t.ptzCmd(t.ptzType.zoomFar)}}},[a("path",{attrs:{d:"M994.990643 859.352971L713.884166 578.246494A381.208198 381.208198 0 0 0 767.307984 383.653992C767.307984 171.765089 595.542895 0 383.653992 0S0 171.765089 0 383.653992s171.765089 383.653992 383.653992 383.653992c71.119859 0 137.507985-19.694238 194.592502-53.423818l281.106477 281.090491a95.913498 95.913498 0 1 0 135.637672-135.621686zM383.653992 671.394486c-158.912681 0-287.740494-128.827813-287.740494-287.740494S224.741311 95.913498 383.653992 95.913498s287.740494 128.827813 287.740494 287.740494-128.827813 287.740494-287.740494 287.740494z m159.85583-335.697243h-111.899081v-111.899081a47.956749 47.956749 0 1 0-95.913498 0v111.899081h-111.899081a47.956749 47.956749 0 1 0 0 95.913498h111.899081v111.899081a47.956749 47.956749 0 1 0 95.913498 0v-111.899081h111.899081a47.956749 47.956749 0 1 0 0-95.913498z"}})])]),t._v(" "),a("el-tooltip",{attrs:{effect:"light",content:"镜头缩小",placement:"top","open-delay":200}},[a("svg",{attrs:{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},on:{click:function(e){return t.ptzCmd(t.ptzType.zoomNear)}}},[a("path",{attrs:{d:"M994.990643 859.352971L713.884166 578.246494A381.208198 381.208198 0 0 0 767.307984 383.653992C767.307984 171.765089 595.542895 0 383.653992 0S0 171.765089 0 383.653992s171.765089 383.653992 383.653992 383.653992c71.119859 0 137.507985-19.694238 194.592502-53.423818l281.106477 281.090491a95.913498 95.913498 0 1 0 135.637672-135.621686zM383.653992 671.394486c-158.912681 0-287.740494-128.827813-287.740494-287.740494S224.741311 95.913498 383.653992 95.913498s287.740494 128.827813 287.740494 287.740494-128.827813 287.740494-287.740494 287.740494z m159.85583-335.697243H223.798162a47.956749 47.956749 0 1 0 0 95.913498h319.71166a47.956749 47.956749 0 1 0 0-95.913498z"}})])])],1),t._v(" "),a("div",{staticClass:"control control3"},[a("el-tooltip",{attrs:{effect:"light",content:"光圈缩小",placement:"top","open-delay":200}},[a("svg",{attrs:{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},on:{click:function(e){return t.ptzCmd(t.ptzType.apertureFar)}}},[a("path",{attrs:{d:"M956.39 400.827C922.164 266.675 828.186 155.703 701.502 99.874l94.522 443.782L956.39 400.827zM206.208 189.167C106.183 286.191 56.845 424.181 72.696 562.659l351.347-309.096-217.835-64.396zM643.118 78.847a446.363 446.363 0 0 0-138.947-16.775 448.047 448.047 0 0 0-250.583 86.934l437.868 146.949-48.338-217.108zM83.786 623.979c34.443 133.772 128.248 244.407 254.583 300.291l-95.915-426.55L83.786 623.979zM969.893 496.089a372.746 372.746 0 0 0-2.37-34.138l-329.972 303.78 196.157 69.256c91.522-88.456 141.056-211.704 136.185-338.898zM396.862 945.166a447.857 447.857 0 0 0 139.077 16.766 447.784 447.784 0 0 0 250.322-86.718L349.286 733.05l47.576 212.116z"}}),t._v(" "),a("path",{attrs:{fill:"#333333",d:"M397.253 471.171h245.668c22.593 0 40.923 18.32 40.923 40.913 0 22.592-18.33 40.922-40.923 40.922H397.253c-22.592 0-40.922-18.33-40.922-40.922 0-22.593 18.33-40.913 40.922-40.913z"}}),t._v(" "),a("path",{attrs:{fill:"#333333",d:"M479.17 634.879V389.21c0-22.593 18.32-40.923 40.913-40.923s40.923 18.33 40.923 40.923v245.668c0 22.592-18.33 40.922-40.923 40.922s-40.913-18.329-40.913-40.921z"}})])]),t._v(" "),a("el-tooltip",{attrs:{effect:"light",content:"光圈放大",placement:"top","open-delay":200}},[a("svg",{attrs:{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},on:{click:function(e){return t.ptzCmd(t.ptzType.apertureNear)}}},[a("path",{attrs:{d:"M956.39 400.827C922.164 266.675 828.186 155.703 701.502 99.874l94.522 443.782L956.39 400.827z m-750.182-211.66C106.183 286.191 56.845 424.181 72.696 562.659l351.347-309.096-217.835-64.396z m436.91-110.32a446.363 446.363 0 0 0-138.947-16.775 448.047 448.047 0 0 0-250.583 86.934l437.868 146.949-48.338-217.108zM83.786 623.979c34.443 133.772 128.248 244.407 254.583 300.291l-95.915-426.55L83.786 623.979z m886.107-127.89a372.746 372.746 0 0 0-2.37-34.138l-329.972 303.78 196.157 69.256c91.522-88.456 141.056-211.704 136.185-338.898zM396.862 945.166a447.857 447.857 0 0 0 139.077 16.766 447.784 447.784 0 0 0 250.322-86.718L349.286 733.05l47.576 212.116z m0.391-474.039h245.668c22.593 0 40.923 18.32 40.923 40.912 0 22.593-18.33 40.923-40.923 40.923H397.253c-22.592 0-40.922-18.33-40.922-40.923 0-22.592 18.33-40.912 40.922-40.912z"}})])])],1),t._v(" "),a("div",{staticClass:"control control4"},[a("el-tooltip",{attrs:{effect:"light",content:"光圈缩小",placement:"top","open-delay":200}},[a("svg",{attrs:{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},on:{click:function(e){return t.ptzCmd(t.ptzType.focusFar)}}},[a("path",{attrs:{d:"M849.07153297 646.81872559c9.30432153 0 17.26391602 3.30249 23.82934617 9.88769507 6.60992408 6.59509253 9.88769508 14.52502465 9.88769508 23.79473901v101.14617896c0 27.90801978-9.87780761 51.70275879-29.61364722 71.47814965-19.75067115 19.77539086-43.56518578 29.66308594-71.48803711 29.66308594h-101.1165166c-9.32409644 0-17.25402856-3.29754663-23.83428954-9.9865725-6.59509253-6.49127173-9.90252662-14.52502465-9.90252662-23.7947383 0-9.26971435 3.30743408-17.20458984 9.90252662-23.79473901 6.58026099-6.59014916 14.51019311-9.88769508 23.83428954-9.88769507h101.1165166c9.29937744 0 17.26391602-3.29754663 23.82440137-9.88769579 6.61486816-6.59014916 9.88769508-14.52008057 9.88769579-23.89361573v-101.04235815c0-9.36859107 3.28765845-17.30346656 9.89758254-23.78979493 6.57531762-6.69396997 14.52502465-9.99151587 23.83923363-9.99151587l-0.06427025 0.09887671zM242.38726782 141.3103025h101.10168506c9.30432153 0 17.2688601 3.29754663 23.819458 9.88769578 6.62475562 6.59509253 9.89758325 14.52502465 9.89758254 23.7947383 0 9.37353516-3.27282691 17.30346656-9.89758254 23.79473901-6.5505979 6.69396997-14.51513648 9.9865725-23.81451463 9.9865725h-101.10168433c-9.31915307 0-17.2688601 3.19372583-23.82934547 9.88769508-6.62475562 6.49127173-9.91241479 14.52502465-9.91241479 23.794739v101.04235816c0 9.36859107-3.28271508 17.30346656-9.89758324 23.89361573-6.57531762 6.59014916-14.51513648 9.88769508-23.81451392 9.88769507-9.31420898 0-17.25402856-3.29754663-23.82934547-9.88769507C144.49908423 360.80230689 141.21142578 352.86743141 141.21142578 343.49884033V242.45648217c0-27.91296386 9.86792016-51.70275879 29.62353539-71.47814965 19.75067115-19.77539086 43.57507324-29.66308594 71.48803711-29.66308594h0.06426954zM174.9877932 646.81872559c9.30432153 0 17.24414039 3.30249 23.81451393 9.88769507 6.62475562 6.59509253 9.90252662 14.52502465 9.90252662 23.79473901v101.14617896c0 9.26971435 3.27282691 17.19964576 9.89758324 23.78979492 6.57531762 6.59014916 14.51513648 9.88769508 23.81451393 9.88769579h101.12640404c9.29937744 0 17.25402856 3.29754663 23.82934547 9.88769507 6.60992408 6.59014916 9.88769508 14.52502465 9.88769579 23.89361572 0 9.26971435-3.27777099 17.20458984-9.88769579 23.79473901-6.57531762 6.59014916-14.52996803 9.88769508-23.82934547 9.88769508H242.41693092c-27.91296386 0-51.71264625-9.88769508-71.47814895-29.66308594-19.75561523-19.67651344-29.62353539-43.57012915-29.62353539-71.47814965v-101.04235816c0-9.26971435 3.27282691-17.30346656 9.88769507-23.89361573 6.58026099-6.59509253 14.52502465-9.88769508 23.81451464-9.88769507h-0.02966309zM680.57037329 141.3103025h101.1165166c27.92285133 0 51.73736596 9.88769508 71.48803711 29.56420922 19.73583961 19.77539086 29.61364722 43.57012915 29.61364722 71.47814965v101.14617896c0 9.26971435-3.27777099 17.30346656-9.88769508 23.78979493-6.56542945 6.69396997-14.52502465 9.88769508-23.82934617 9.88769506-9.29937744 0-17.26391602-3.19372583-23.82440139-9.88769506-6.61486816-6.48632836-9.88769508-14.52008057-9.88769579-23.78979493V242.35266137c0-9.26971435-3.28765845-17.19964576-9.90252661-23.78979492-6.57037354-6.59509253-14.52008057-9.88769508-23.83428955-9.88769579h-101.10168433c-9.31420898 0-17.2688601-3.29754663-23.82934618-9.88769507-6.60992408-6.59509253-9.89758325-14.52502465-9.89758254-23.79473902 0-9.37353516 3.28765845-17.30346656 9.89758254-23.89361571 6.56048608-6.59014916 14.51513648-9.88769508 23.82934618-9.88769508l0.04943799 0.09887672z"}})])]),t._v(" "),a("el-tooltip",{attrs:{effect:"light",content:"光圈缩小",placement:"top","open-delay":200}},[a("svg",{attrs:{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},on:{click:function(e){return t.ptzCmd(t.ptzType.focusNear)}}},[a("path",{attrs:{d:"M512 170.666667A341.333333 341.333333 0 1 1 170.666667 512 341.333333 341.333333 0 0 1 512 170.666667m0-42.666667a384 384 0 1 0 384 384A384 384 0 0 0 512 128z"}}),t._v(" "),a("path",{attrs:{fill:"#333333",d:"M298.666667 533.333333H170.666667a21.333333 21.333333 0 0 1 0-42.666666h128a21.333333 21.333333 0 0 1 0 42.666666zM853.333333 533.333333h-128a21.333333 21.333333 0 0 1 0-42.666666h128a21.333333 21.333333 0 0 1 0 42.666666zM512 320a21.333333 21.333333 0 0 1-21.333333-21.333333V170.666667a21.333333 21.333333 0 0 1 42.666666 0v128a21.333333 21.333333 0 0 1-21.333333 21.333333zM512 874.666667a21.333333 21.333333 0 0 1-21.333333-21.333334v-128a21.333333 21.333333 0 0 1 42.666666 0v128a21.333333 21.333333 0 0 1-21.333333 21.333334z"}})])])],1),t._v(" "),a("div",{staticClass:"control-speed"},[t._v("\n    速度(1-10)：\n    "),a("el-input-number",{attrs:{size:"small",min:1,max:10,label:"速度"},model:{value:t.ptzSpeed,callback:function(e){t.ptzSpeed=e},expression:"ptzSpeed"}})],1)])},r=[],o=a("88a2"),l=a("4ec3"),i=[o["a"].up,o["a"].right,o["a"].down,o["a"].left,o["a"].leftUp,o["a"].rightUp,o["a"].leftDown,o["a"].rightDown],s={name:"PtzCmd",props:{tempItem:{type:Object}},data:function(){return{ptzType:o["a"],arrowTips:["上","右","下","左","左上","右上","左下","右下"],ptzSpeed:5,ptzPositionIndex:1}},methods:{ptzCmdDirection:function(t){var e=i[t-1];this.ptzCmd(e)},startPtzCmdCycle:function(){this.ptzCmd(o["a"].right,!0)},stopPtzCmdCycle:function(){this.ptzCmd(o["a"].stop)},ptzCmd:function(t,e){var a={type:t,speed:this.ptzSpeed,index:this.ptzPositionIndex,cycle:e},n=this.tempItem,r=Object(o["b"])(a),i=Object(o["b"])({type:o["a"].stop});Object(l["q"])({id:n.id,channel:n.deviceId||n.channel,ptzcmd:r}),setTimeout((function(){Object(l["q"])({id:n.id,channel:n.deviceId||n.channel,ptzcmd:i})}),500)}}},c=s,p=(a("3fe1"),a("2877")),u=Object(p["a"])(c,n,r,!1,null,"007823fe",null);e["a"]=u.exports}}]);