(function(e){function t(t){for(var r,o,i=t[0],c=t[1],l=t[2],u=0,f=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&f.push(s[o][0]),s[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(f.length)f.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],r=!0,i=1;i<a.length;i++){var c=a[i];0!==s[c]&&(r=!1)}r&&(n.splice(t--,1),e=o(o.s=a[0]))}return e}var r={},s={app:0},n=[];function o(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=r,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(a,r,function(t){return e[t]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=c;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},4678:function(e,t,a){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf755","./tlh.js":"cf755","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=n(e);return a(t)}function n(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}s.keys=function(){return Object.keys(r)},s.resolve=n,e.exports=s,s.id="4678"},"52a2":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",{attrs:{fluid:"",id:"app"}},[a("router-view")],1)},n=[],o={},i=o,c=(a("9e6d"),a("2877")),l=Object(c["a"])(i,s,n,!1,null,"88eb3c72",null),d=l.exports,u=a("5f5b"),f=a("b1e0"),m=a("8c4f"),b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"login"}},[a("b-row",{staticClass:"vh-100 row-reverse"},[a("b-col",{attrs:{id:"sidePart",sm:"12",lg:"7",md:"12"}}),a("b-col",{attrs:{id:"cont",lg:"5",md:"12",sm:"12"}},[a("b-form",{attrs:{id:"form"}},[a("b-form-group",[a("b-input-group",{staticClass:"mb-4"},[a("b-form-input",{attrs:{type:"email",placeholder:"Email",required:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.login.apply(null,arguments)}},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),a("b-input-group",{staticClass:"mb-3"},[a("b-form-input",{attrs:{type:"password",placeholder:"Password",required:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.login.apply(null,arguments)}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),a("div",{staticStyle:{"margin-bottom":"25px"}},[e._v(" "+e._s(e.error)+" ")])],1),a("b-container",[a("b-row",{attrs:{"align-h":"center"}},[a("b-button",{staticStyle:{width:"100px"},attrs:{variant:"primary"},on:{click:e.login}},[e._v("Sign In")])],1)],1)],1)],1)],1)],1)},p=[],h=a("1da1"),_=(a("96cf"),a("bc3a")),v=a.n(_),g=v.a.create({baseURL:"https://mehmapp.herokuapp.com/"}),j=g,k={data:function(){return{email:"",password:"",error:""}},methods:{login:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.post("auth/signin",{email:e.email,password:e.password}).then((function(t){201===t.status&&(console.log(t.data.token),localStorage.setItem("token",t.data.token),console.log("LoggedIn!!!!"),e.error="",e.$router.push({path:"/schedule"}))}));case 3:t.next=10;break;case 5:t.prev=5,t.t0=t["catch"](0),e.error=t.t0.response.data.error,console.log("Invalid email or password"),e.password="";case 10:case"end":return t.stop()}}),t,null,[[0,5]])})))()}},created:function(){null!=localStorage.getItem("token")&&this.$router.push("/schedule")}},y=k,x=(a("e968"),Object(c["a"])(y,b,p,!1,null,"309b5622",null)),$=x.exports,w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",{staticClass:"vh-100"},[a("app-header"),a("h1",[e._v("Reports")]),a("app-forms")],1)},C=[],S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",{staticClass:"p-4",attrs:{fluid:""}},[a("b-navbar",{attrs:{toggleable:"md"}},[a("b-navbar-brand",[e._v("MeHMApp")]),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",[a("b-nav-item",{attrs:{to:"/schedule","active-class":"active"}},[e._v(" Schedule ")]),a("b-nav-item",{attrs:{to:"/reports","active-class":"active"}},[e._v(" Assessment Form Reports ")]),a("b-nav-item",{attrs:{"exact-active-class":"active"},on:{click:e.logout}},[e._v(" Logout ")])],1)],1)],1)],1)},I=[],D={methods:{logout:function(){localStorage.clear(),this.$router.push("/")}}},O=D,P=(a("bf47"),Object(c["a"])(O,S,I,!1,null,"0e4f37e9",null)),z=P.exports,M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",[a("div",[a("b-col",[a("app-date-picker",{attrs:{range:"",valueType:"format"},model:{value:e.range,callback:function(t){e.range=t},expression:"range"}})],1),a("b-col",[a("b-button",{staticClass:"mt-2 mb-2",attrs:{variant:"primary"},on:{click:e.ranger}},[e._v("Print")])],1)],1),a("b-table",{staticClass:"text-center",attrs:{items:this.$store.state.all_forms,fields:e.fields},scopedSlots:e._u([e.forms?{key:"cell(buttons)",fn:function(t){return[a("b-button",{staticClass:"m-2",attrs:{variant:"outline-primary",size:"sm"},on:{click:function(a){return e.setter(t.item)}}},[e._v(" Print ")])]}}:null],null,!0)}),e.loading?a("div",{staticClass:"text-center"},[a("b-spinner",{staticClass:"m-5",attrs:{variant:"secondary"}})],1):e._e()],1)},E=[],R=(a("ac1f"),a("1276"),a("ec45")),N=(a("411c"),a("c1df")),Y=a.n(N),A={data:function(){return{fields:[{key:"formId",label:"Form ID"},{key:"userId",label:"User ID"},{key:"studentNumber",label:"Student Number"},{key:"phoneNumber",label:"Contact Number"},{key:"userdescribe",label:"Describe"},{key:"userPresentIssues",label:"Present Issues"},{key:"userProblemIssue",label:"Problem Issue"},{key:"userReceivedCounseling",label:"Received Counseling"},{key:"userIfYes",label:"If Yes"},{key:"userDuration",label:"Duration"},{key:"userPreviousCounseling",label:"Previous Counseling"},{key:"buttons",label:""}],forms:[],loading:!0,range:"",start:"",end:"",allRange:[]}},beforeCreate:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,j.get("/form/allForms");case 2:a=t.sent,e.$store.state.all_forms=a.data,e.loading=!1;case 5:case"end":return t.stop()}}),t)})))()},methods:{setter:function(e){this.$store.dispatch("printInfo",e),this.$router.push({path:"/print"})},ranger:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var a,r,s,n,o,i,c,l,d,u,f;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(e.range.length>0)){t.next=27;break}return e.$store.state.multiple_print=[],t.next=4,j.get("/schedule/getDate/".concat(e.range[0]));case 4:if(a=t.sent,""==!a.data[0]&&a.data.length>1)for(r=0;r<a.data.length;r++)e.$store.state.multiple_print.push(a.data[r]);s=e.range[0],n=Y()(e.range[0],"YYYY-MM-DD"),o=Y()(e.range[1],"YYYY-MM-DD"),i=Y.a.duration(o.diff(n)).asDays(),console.log(e.allRange),c=0;case 12:if(!(c<i)){t.next=23;break}return l=s.split("-"),d=new Date(parseInt(l[0]),parseInt(l[1])-1,parseInt(l[2])+1),s=e.formatDate(d),t.next=18,j.get("/schedule/getDate/".concat(s));case 18:if(u=t.sent,""==!u.data[0])if(u.data.length>1)for(f=0;f<u.data.length;f++)e.$store.state.multiple_print.push(u.data[f]);else e.$store.state.multiple_print.push(u.data[0]);case 20:c++,t.next=12;break;case 23:console.log(e.$store.state.multiple_print),e.$router.push({path:"/print"}),t.next=28;break;case 27:console.log("empty");case 28:case"end":return t.stop()}}),t)})))()},formatDate:function(e){var t=Y()(e);return t.format("YYYY-MM-DD")}},components:{appDatePicker:R["a"]}},T=A,U=Object(c["a"])(T,M,E,!1,null,"0f811a0c",null),q=U.exports,F={components:{appHeader:z,appForms:q},created:function(){null===localStorage.getItem("token")&&this.$router.push("/")}},L=F,H=Object(c["a"])(L,w,C,!1,null,null,null),V=H.exports,B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",{staticClass:"vh-100"},[a("app-header"),a("h1",[e._v("Schedule")]),a("app-calendar")],1)},G=[],J=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",[a("b-row",[a("b-col",{attrs:{xl:"5",lg:"4",md:"*"}},[a("b-calendar",{staticClass:"mb-2",attrs:{locale:"en"},model:{value:e.selected_date,callback:function(t){e.selected_date=t},expression:"selected_date"}}),a("b-row",[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.add",modifiers:{add:!0}}],staticStyle:{width:"80px"},attrs:{variant:"primary"}},[e._v("Add")])],1)],1),a("b-col",{attrs:{xl:"7",lg:"8",md:"*"}},[e.sched_day?a("div",{staticClass:"m-3"},[a("b-table",{staticClass:"text-center",attrs:{items:e.sched_day[0],fields:e.fields},scopedSlots:e._u([e.selected_date?{key:"cell(buttons)",fn:function(t){return[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.edit",modifiers:{edit:!0}}],staticClass:"m-2",attrs:{variant:"outline-primary",size:"sm"},on:{click:function(a){return e.setter(t.item)}}},[e._v(" Edit ")]),a("b-button",{staticStyle:{margin:"3"},attrs:{variant:"outline-primary",size:"sm"},on:{click:function(a){return e.del(t.item)}}},[e._v(" Delete ")])]}}:null],null,!0)}),a("b-modal",{attrs:{id:"edit",title:"Edit","ok-title":"Save"},on:{ok:e.edit}},[a("b-form",[a("b-form-group",{staticClass:"mb-3",attrs:{id:"group_uid"}},[a("label",{attrs:{for:"user_id"}},[e._v("User ID")]),a("b-form-input",{attrs:{id:"user_id",type:"number",required:"",state:e.id_checker},model:{value:e.user_id,callback:function(t){e.user_id=t},expression:"user_id"}})],1),a("b-form-group",{staticClass:"mb-3",attrs:{id:"group_date"}},[a("b-form-datepicker",{attrs:{state:e.date_checker},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1),a("b-form-group",{attrs:{id:"group_time",label:"Time"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.ariaDescribedby;return[a("b-form-radio",{staticClass:"mb-2",attrs:{"aria-describedby":r,value:"9:00AM - 12:00PM"},model:{value:e.time,callback:function(t){e.time=t},expression:"time"}},[e._v("9:00AM - 12:00PM")]),a("b-form-radio",{staticClass:"mb-4",attrs:{"aria-describedby":r,value:"1:00PM - 4:00PM"},model:{value:e.time,callback:function(t){e.time=t},expression:"time"}},[e._v("1:00PM - 4:00PM")])]}}],null,!1,2784742231)}),a("b-form-group",{staticClass:"mb-3",attrs:{id:"number"}},[a("label",{attrs:{for:"number"}},[e._v("Contact Number")]),a("b-form-input",{attrs:{type:"number",required:"",id:"number",state:e.contact_checker},model:{value:e.contact_number,callback:function(t){e.contact_number=t},expression:"contact_number"}})],1)],1)],1),e.loading?a("div",{staticClass:"text-center"},[a("b-spinner",{staticClass:"m-5",attrs:{variant:"secondary"}})],1):e._e()],1):e._e()])],1),a("b-modal",{attrs:{id:"add",title:"Add","ok-title":"Add"},on:{ok:e.confirm}},[a("b-form",[a("b-form-group",{staticClass:"mb-3",attrs:{id:"group_uid"}},[a("b-form-input",{attrs:{id:"user_id",type:"number",placeholder:"User ID",required:"",state:e.id_checker},model:{value:e.user_id,callback:function(t){e.user_id=t},expression:"user_id"}})],1),a("b-form-group",{staticClass:"mb-3",attrs:{id:"group_date"}},[a("b-form-datepicker",{attrs:{state:e.date_checker},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1),a("b-form-group",{attrs:{id:"group_time",label:"Time"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.ariaDescribedby;return[a("b-form-radio",{staticClass:"mb-2",attrs:{"aria-describedby":r,value:"9:00AM - 12:00PM"},model:{value:e.time,callback:function(t){e.time=t},expression:"time"}},[e._v("9:00AM - 12:00PM")]),a("b-form-radio",{staticClass:"mb-4",attrs:{"aria-describedby":r,value:"1:00PM - 4:00PM"},model:{value:e.time,callback:function(t){e.time=t},expression:"time"}},[e._v("1:00PM - 4:00PM")])]}}])}),a("b-form-group",{staticClass:"mb-3",attrs:{id:"number"}},[a("b-form-input",{attrs:{type:"number",required:"",id:"number",placeholder:"Phone Number",state:e.contact_checker},model:{value:e.contact_number,callback:function(t){e.contact_number=t},expression:"contact_number"}})],1)],1)],1),a("b-alert",{staticClass:"position-fixed fixed-top m-0 rounded-0",staticStyle:{"z-index":"2000"},attrs:{variant:"danger",dismissible:""},model:{value:e.empty,callback:function(t){e.empty=t},expression:"empty"}},[e._v(" Empty Field/s ")]),a("b-alert",{staticClass:"position-fixed fixed-top m-0 rounded-0",staticStyle:{"z-index":"2000"},attrs:{variant:"danger",dismissible:""},model:{value:e.invalid,callback:function(t){e.invalid=t},expression:"invalid"}},[e._v(" Invalid Contact Number ")]),a("b-alert",{staticClass:"position-fixed fixed-top m-0 rounded-0",staticStyle:{"z-index":"2000"},attrs:{variant:"warning",dismissible:""},model:{value:e.existing,callback:function(t){e.existing=t},expression:"existing"}},[e._v(" Existing Schedule ")]),a("b-alert",{staticClass:"position-fixed fixed-top m-0 rounded-0",staticStyle:{"z-index":"2000"},attrs:{variant:"success",dismissible:""},model:{value:e.added,callback:function(t){e.added=t},expression:"added"}},[e._v(" Schedule Added! ")]),a("b-alert",{staticClass:"position-fixed fixed-top m-0 rounded-0",staticStyle:{"z-index":"2000"},attrs:{variant:"success",dismissible:""},model:{value:e.editted,callback:function(t){e.editted=t},expression:"editted"}},[e._v(" Editted Saved! ")]),a("b-alert",{staticClass:"position-fixed fixed-top m-0 rounded-0",staticStyle:{"z-index":"2000"},attrs:{variant:"warning",dismissible:""},model:{value:e.deleted,callback:function(t){e.deleted=t},expression:"deleted"}},[e._v(" Schedule Deleted! ")])],1)},W=[],K=(a("caad"),a("2532"),a("a15b"),a("4d90"),{data:function(){return{selected_date:"",sched_day:[],fields:[{key:"appointment_id",label:"Appointment ID"},{key:"user_id",label:"User ID"},{key:"date",label:"Date"},{key:"time",label:"Time"},{key:"contact_number",label:"Contact Number"},{key:"buttons",label:""}],loading:!1,empty:!1,invalid:!1,existing:!1,added:!1,editted:!1,deleted:!1}},methods:{confirm:function(){var e=this;return this.$store.state.form.user_id&&this.$store.state.form.set_date&&this.$store.state.form.selected_time&&this.$store.state.form.contact_number?this.$store.state.form.contact_number.length<11||!this.$store.state.form.contact_number.includes("09")?(this.invalid=!0,console.log("Please provide valid contact number")):void this.$bvModal.msgBoxConfirm("Want to add schedule in this student with User ID of ".concat(this.$store.state.form.user_id,"? "),{title:"Please Confirm",centered:!0}).then(function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(a){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a){t.next=22;break}return t.prev=1,t.next=4,j.post("/schedule/add",{user_id:e.$store.state.form.user_id,date:e.$store.state.form.set_date,time:e.$store.state.form.selected_time,contact_number:e.$store.state.form.contact_number});case 4:r=t.sent,e.added=!0,e.$store.state.form.appointment_id="",e.$store.state.form.user_id="",e.$store.state.form.set_date="",e.$store.state.form.selected_time="",e.$store.state.form.contact_number="",e.selectSched(),console.log(r),t.next=20;break;case 15:if(t.prev=15,t.t0=t["catch"](1),!t.t0.response){t.next=20;break}return e.existing=!0,t.abrupt("return",console.log(t.t0.response.data));case 20:t.next=23;break;case 22:console.log("Cancelled!");case 23:case"end":return t.stop()}}),t,null,[[1,15]])})));return function(e){return t.apply(this,arguments)}}()).catch((function(e){console.log("Not Available",e)})):(this.$store.state.form.user_id="",this.$store.state.form.set_date="",this.$store.state.form.selected_time="",this.$store.state.form.contact_number="",this.empty=!0,console.log("empty field"))},selectSched:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,e.sched_day=[],a=e.selected_date.split("/").join("-"),t.next=5,j.get("/schedule/getDate/".concat(a));case 5:r=t.sent,e.loading=!1,e.sched_day.push(r.data);case 8:case"end":return t.stop()}}),t)})))()},edit:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,j.put("/schedule/edit/".concat(e.$store.state.form.appointment_id),{user_id:e.$store.state.form.user_id,date:e.$store.state.form.set_date,time:e.$store.state.form.selected_time,contact_number:e.$store.state.form.contact_number});case 2:e.selectSched(),console.log("Edited"+e.$store.state.form.appointment_id),e.$store.state.form.appointment_id="",e.$store.state.form.user_id="",e.$store.state.form.set_date="",e.$store.state.form.selected_time="",e.$store.state.form.contact_number="",e.editted=!0;case 10:case"end":return t.stop()}}),t)})))()},del:function(e){var t=this;this.$bvModal.msgBoxConfirm("Want to delete this schedule with User ID of ".concat(e.user_id,"? "),{title:"Please Confirm to delete",centered:!0}).then(function(){var a=Object(h["a"])(regeneratorRuntime.mark((function a(r){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!r){a.next=14;break}return a.prev=1,a.next=4,j.delete("/schedule/delete/".concat(e.appointment_id));case 4:t.selectSched(),t.deleted=!0,console.log("Deleted"+e.appointment_id),a.next=12;break;case 9:a.prev=9,a.t0=a["catch"](1),console.log(a.t0);case 12:a.next=15;break;case 14:console.log("Delete Cancelled!");case 15:case"end":return a.stop()}}),a,null,[[1,9]])})));return function(e){return a.apply(this,arguments)}}())},setter:function(e){this.$store.state.form.appointment_id=e.appointment_id,this.$store.state.form.user_id=e.user_id,this.$store.state.form.set_date=e.date,this.$store.state.form.selected_time=e.time,this.$store.state.form.contact_number=e.contact_number}},watch:{selected_date:function(){this.selectSched()}},computed:{id_checker:function(){return!(!this.$store.state.form.user_id.length>0)},date_checker:function(){return!(!this.$store.state.form.set_date.length>0)},contact_checker:function(){return!(this.$store.state.form.contact_number.length<11||this.$store.state.form.contact_number.length>11||!this.$store.state.form.contact_number.includes("09"))},user_id:{get:function(){return this.$store.getters.user_id},set:function(e){this.$store.dispatch("updateUserId",e)}},date:{get:function(){return this.$store.getters.set_date},set:function(e){this.$store.dispatch("updateDate",e)}},time:{get:function(){return this.$store.getters.selected_time},set:function(e){this.$store.dispatch("updateTime",e)}},contact_number:{get:function(){return this.$store.getters.contact_number},set:function(e){this.$store.dispatch("updateContact",e)}}},created:function(){var e=new Date,t=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");this.selected_date=t+"/"+a+"/"+r,this.selectSched()}}),Q=K,X=Object(c["a"])(Q,J,W,!1,null,"5c30fb02",null),Z=X.exports,ee={components:{appHeader:z,appCalendar:Z},created:function(){null===localStorage.getItem("token")&&this.$router.push("/")}},te=ee,ae=Object(c["a"])(te,B,G,!1,null,"f1c49b78",null),re=ae.exports,se=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{staticClass:"vh-100"},[r("div",{staticClass:"text-center pt-4"},[r("b-col",[r("b-row",[r("img",{staticStyle:{width:"100px",height:"60px",position:"relative",left:"50px",top:"75px"},attrs:{src:a("efd4")}})]),r("b-row",[r("p",[r("strong",[e._v("CAVITE STATE UNIVERSITY")])]),r("p",[r("strong",[e._v("Office of Student Affairs and Services - Guidance Office")])]),r("p",[r("strong",[e._v("COUNSELING SERVICES - MASTERLIST")])])])],1)],1),r("div",[r("p",[e._v("School Year - "),r("strong",[e._v("SY "+e._s(e.year)+" ")])])]),r("br"),r("br"),r("br"),r("div",[r("b-table",{attrs:{items:this.$store.state.multiple_print,fields:e.fields}})],1),r("br"),r("div",{attrs:{id:"print_button"}},[r("b-button",{staticClass:"mb-4",attrs:{variant:"primary"},on:{click:e.print}},[e._v(" Print ")])],1)])},ne=[],oe={data:function(){return{year:"",fields:[{key:"appointment_id",label:"Appointment ID"},{key:"user_id",label:"User ID"},{key:"contact_number",label:"Contact Number"},{key:"date",label:"Date"}]}},beforeCreate:function(){null===localStorage.getItem("token")&&this.$router.push({path:"/"})},methods:{print:function(){window.print()}},created:function(){var e=new Date,t=e.getFullYear();this.year=t}},ie=oe,ce=(a("e5d9"),Object(c["a"])(ie,se,ne,!1,null,"1abf76ff",null)),le=ce.exports,de=[{path:"/",component:$},{path:"/reports",component:V},{path:"/schedule",component:re},{path:"/print",component:le}],ue=a("2f62");r["default"].use(ue["a"]);var fe=new ue["a"].Store({state:{form:{appointment_id:"",user_id:"",set_date:"",selected_time:"",contact_number:""},print_info:[],all_forms:[],multiple_print:[]},getters:{appointment_id:function(e){return e.form.appointment_id},user_id:function(e){return e.form.user_id},set_date:function(e){return e.form.set_date},selected_time:function(e){return e.form.selected_time},contact_number:function(e){return e.form.contact_number}},mutations:{update_user_id:function(e,t){e.form.user_id=t},update_date:function(e,t){e.form.set_date=t},update_time:function(e,t){e.form.selected_time=t},update_contact:function(e,t){e.form.contact_number=t},print_info:function(e,t){e.print_info=[],e.print_info.push({formId:t.formId,userId:t.userId,fullname:t.fullname,studentNumber:t.studentNumber,phoneNumber:t.phoneNumber})}},actions:{updateUserId:function(e,t){var a=e.commit;a("update_user_id",t)},updateDate:function(e,t){var a=e.commit;a("update_date",t)},updateTime:function(e,t){var a=e.commit;a("update_time",t)},updateContact:function(e,t){var a=e.commit;a("update_contact",t)},printInfo:function(e,t){var a=e.commit;a("print_info",t)}}});a("f9e3"),a("2dd8");r["default"].config.productionTip=!1,r["default"].use(u["a"]),r["default"].use(f["a"]),r["default"].use(m["a"]);var me=new m["a"]({mode:"history",routes:de});new r["default"]({render:function(e){return e(d)},router:me,store:fe}).$mount("#app")},"714b":function(e,t,a){},8716:function(e,t,a){},"9e6d":function(e,t,a){"use strict";a("52a2")},bf47:function(e,t,a){"use strict";a("8716")},db82:function(e,t,a){},e5d9:function(e,t,a){"use strict";a("714b")},e968:function(e,t,a){"use strict";a("db82")},efd4:function(e,t,a){e.exports=a.p+"img/cvsu_logo.c53373ad.png"}});
//# sourceMappingURL=app.95794dfa.js.map