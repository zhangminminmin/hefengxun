(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bb3e0afe"],{1649:function(t,e,n){"use strict";var s=n("686f"),i=n.n(s);i.a},"2b06":function(t,e,n){t.exports=n.p+"img/successIcon.e4ddad05.png"},"686f":function(t,e,n){},"77f7":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"success"},[s("div",{staticClass:"success-box"},[s("img",{attrs:{src:n("2b06"),alt:""}}),s("div",{staticClass:"phone-success"},[t._v("手机绑定成功")]),s("div",{staticStyle:{"margin-top":"0.625rem"}},[s("span",[t._v(t._s(t.timmer))]),s("span",[t._v("秒后自动跳转到首页")])]),s("el-button",{attrs:{type:"primary"},on:{click:t.toHome}},[t._v("进入首页")])],1)])},i=[],c=(n("f548"),{name:"bind",data:function(){return{timmer:3}},methods:{toHome:function(){this.$router.replace("/")}},mounted:function(){var t=this,e=setInterval((function(){if(t.timmer<=0)return clearInterval(e),void t.toHome();t.timmer--}),1e3)}}),a=c,r=(n("1649"),n("e90a")),o=Object(r["a"])(a,s,i,!1,null,"7d2d53e5",null);e["default"]=o.exports}}]);