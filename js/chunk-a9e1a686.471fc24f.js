(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a9e1a686"],{"20d6":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"members"},[n("div",{staticClass:"member-top"},[n("div",{staticClass:"title"},[t._v("\n\t\t\t会员中心\n\t\t")]),n("p",{staticClass:"mem-info"},[n("span",[t._v("您现在是")]),n("span",[t._v(t._s(t.member[t.userInfo.type]))]),3!=t.userInfo.type?n("span",[t._v("，剩余"),n("span",{staticStyle:{color:"#DB233A"}},[t._v(t._s(t.userInfo.days))]),t._v("天")]):t._e()])]),n("div",{staticClass:"member-content"},[t._m(0),n("div",{staticClass:"title",staticStyle:{"margin-top":"1.875rem"}},[t._v("\n\t\t\t会员权益\n\t\t")]),n("div",{staticClass:"auth",domProps:{innerHTML:t._s(t.userVip)}}),n("div",{staticClass:"title",staticStyle:{"margin-top":"1.875rem"}},[t._v("\n\t\t\t选择您要购买的时长\n\t\t")]),n("div",{staticClass:"timer-select"},t._l(t.userConfig,(function(e,s){return n("div",{class:t.active==s?"active":"",on:{click:function(e){return t.timerSelect(s)}}},[n("p",[t._v(t._s(e.limitnum)+"个月")]),n("p",[t._v("￥"+t._s(e.price))])])})),0),n("div",{staticClass:"title",staticStyle:{"margin-top":"1.875rem"}},[t._v("\n\t\t\t选择支付方式\n\t\t")]),n("div",{staticClass:"pay-style"},[n("div",{on:{click:function(e){return t.select(2)}}},[n("img",{attrs:{src:s("e6d9"),alt:""}}),n("span",{staticClass:"ml15"},[t._v("微信支付")]),"2"==t.selected?n("img",{staticClass:"ml20",attrs:{src:s("fff0"),alt:""}}):n("img",{staticClass:"ml20",attrs:{src:s("8490"),alt:""}})]),n("div",{on:{click:function(e){return t.select(1)}}},[n("img",{attrs:{src:s("f99e"),alt:""}}),n("span",{staticClass:"ml15"},[t._v("支付宝支付")]),"1"==t.selected?n("img",{staticClass:"ml20",attrs:{src:s("fff0"),alt:""}}):n("img",{staticClass:"ml20",attrs:{src:s("8490"),alt:""}})])]),n("div",{staticClass:"buy-box"},[n("div",{staticClass:"price"},[t._v("\n\t\t\t\t￥"+t._s(t.buyPrice)+"\n\t\t\t")]),n("div",{staticClass:"buy-btn",on:{click:t.memberBuy}},[t._v("\n\t\t\t\t立即购买\n\t\t\t")])])]),t.payPopShow?n("payPop",{attrs:{visible:t.payPopShow,title:t.payTitle,type:t.payType},on:{"update:visible":function(e){t.payPopShow=e}}}):t._e(),t.payQRCodeShow?n("payQRCode",{attrs:{visible:t.payQRCodeShow,content:t.wxPayUrl},on:{"update:visible":function(e){t.payQRCodeShow=e}}}):t._e()],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"members-card"},[n("img",{attrs:{src:s("c1da"),alt:""}})])}],r=s("35c5"),a=s("c559"),c={name:"members",components:{payPop:r["a"],payQRCode:a["a"]},data:function(){return{active:"0",selected:"2",payTitle:"支付成功",payType:"success",payPopShow:!1,payQRCodeShow:!1,userConfig:[],userVip:"",wxPayUrl:"",member:["","普通会员","猩听译会员","永久会员"],orderTimer:null}},computed:{buyPrice:function(){return this.userConfig.length>0?this.userConfig[this.active].price:0},userInfo:function(){return this.$store.getters["getUserInfo"]}},created:function(){this.getUserConfig()},methods:{timerSelect:function(t){this.active=t},select:function(t){this.selected=t},getUserConfig:function(){var t=this;this.$request("/order/userConfig").then((function(e){t.userConfig=e.content.userConfig,t.userVip=e.content.userVip})).catch((function(t){}))},memberBuy:function(){var t=this,e={};e.userConfigId=this.userConfig.length>0?this.userConfig[this.active].id:0,this.$request("/order/userOrder",e,"POST").then((function(e){var s=e.content.order_id;s&&t.pay(s)})).catch((function(t){}))},pay:function(t){var e=this,s={};s.pay_id=this.selected,s.order_id=t,s.type=1,s.pay_client=2,this.$request("/pay/getPayCode",s,"POST").then((function(s){if(s.content.html)e.wxPayUrl=s.content.html,e.payQRCodeShow=!0,e.checkOrderCycle(t);else{var n=s.content,i=document.getElementsByTagName("divform");i.length&&document.body.removeChild(i[0]);var r=document.createElement("divform");r.innerHTML=n,document.body.appendChild(r),document.forms[0].setAttribute("target","_blank"),document.forms[0].submit()}})).catch((function(t){}))},checkOrderCycle:function(t){var e=this,s={};s.order_id=t,s.type=1,this.orderTimer=setInterval((function(){0!=e.payQRCodeShow?e.$request("/pay/checkOrder",s,"POST").then((function(t){"1"==t.content||(e.payQRCodeShow=!1,e.payPopShow=!0,clearInterval(e.orderTimer),e.orderTimer=null,e.getUserInfo())})).catch((function(t){})):e.orderTimer&&(clearInterval(e.orderTimer),e.orderTimer=null)}),2e3)},getUserInfo:function(){var t=this;this.$request("/user/userCenter").then((function(e){var s=e.content.userinfo?e.content.userinfo:"";s&&(localStorage.setItem("userInfo",JSON.stringify(s)),t.$store.commit("setUserInfo",s))})).catch((function(t){}))}}},o=c,l=(s("4c6e"),s("2173"),s("5511")),u=Object(l["a"])(o,n,i,!1,null,"6ee86b85",null);e["default"]=u.exports},2173:function(t,e,s){"use strict";var n=s("3a32"),i=s.n(n);i.a},"3a32":function(t,e,s){},"3e90":function(t,e,s){},"4c6e":function(t,e,s){"use strict";var n=s("3e90"),i=s.n(n);i.a},c1da:function(t,e,s){t.exports=s.p+"img/memberCard.b136831e.png"}}]);