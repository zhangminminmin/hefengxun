(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8bd000a2"],{"0a6f":function(t,e,s){},"41fa":function(t,e,s){"use strict";var i=s("0a6f"),a=s.n(i);a.a},"6b6b":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bind"},[s("div",{staticClass:"bind-box"},[s("div",{staticClass:"form"},[s("div",{staticClass:"title"},[t._v("绑定手机")]),s("div",{staticClass:"cell"},[s("div",{staticClass:"lable"},[t._v("手机号码")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],attrs:{type:"text",placeholder:"输入手机号码"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})]),s("div",{staticClass:"cell"},[s("div",{staticClass:"lable"},[t._v("验证码")]),s("div",{staticClass:"cell-right"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],staticStyle:{width:"13.125rem"},attrs:{type:"text",placeholder:"输入验证码"},domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value)}}}),s("div",{staticClass:"vitify",class:"0"!=t.timmer?"bg-gray":"",on:{click:t.getCode}},[t._v(t._s(t.vitifyText))])])]),s("div",{staticClass:"cell"},[s("div",{staticClass:"lable"},[t._v("新密码")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"text",placeholder:"输入新密码"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),s("div",{staticClass:"cell"},[s("div",{staticClass:"lable"},[t._v("确认密码")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password2,expression:"password2"}],attrs:{type:"text",placeholder:"确认密码"},domProps:{value:t.password2},on:{input:function(e){e.target.composing||(t.password2=e.target.value)}}})]),s("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("提交")])],1)])])},a=[],o=(s("2b45"),s("fa7d")),r={name:"bind",data:function(){return{timmer:0,vitifyText:"获取验证码",phone:"",code:"",password:"",password2:""}},methods:{check:function(){return""==this.phone.toString().trim()?(this.$message({message:"请输入手机号",type:"error"}),!1):""==this.code.toString().trim()?(this.$message({message:"请输入验证码",type:"error"}),!1):""==this.password.toString().trim()?(this.$message({message:"请输入密码",type:"error"}),!1):this.password2.toString().trim()===this.password.toString().trim()||(this.$message({message:"2次密码不一致",type:"error"}),!1)},getCode:function(){var t=this;if(0==this.timmer){if(""==this.phone.toString().trim())return this.$message({message:"请输入手机号",type:"error"}),!1;var e={};e.mobile=this.phone,e.act="bind",this.$request("/login/sendcode",e,"POST").then((function(e){t.timmer=60,t.vitifyText=t.timmer+"";var s=setInterval((function(){t.timmer--,t.vitifyText=t.timmer+"",0==t.timmer&&(t.vitifyText="获取验证码",clearInterval(s))}),1e3)})).catch((function(t){}))}},submit:function(){var t=this,e=Object(o["b"])("platformId"),s=this.check();if(s){var i={};i.mobile=this.phone,i.platformid=e,i.code=this.code,i.password=this.password,i.repassword=this.password2,this.$request("/login/bindMobilePc",i,"POST").then((function(e){t.$message({message:e.msg,type:"success"}),t.getUserInfo()})).catch((function(t){}))}},getUserInfo:function(){var t=this;this.$request("/user/userCenter").then((function(e){var s=e.content.userinfo?e.content.userinfo:"";s&&(localStorage.setItem("userInfo",JSON.stringify(s)),t.$store.commit("setUserInfo",s),t.closed(),location.reload(!1))})).catch((function(t){}))}}},n=r,c=(s("41fa"),s("5511")),l=Object(c["a"])(n,i,a,!1,null,"36dd1354",null);e["default"]=l.exports},fa7d:function(t,e,s){"use strict";s.d(e,"a",(function(){return i})),s.d(e,"b",(function(){return a}));s("c0c3"),s("9e76"),s("9dd9"),s("2b45");var i=function(){return document.selection?document.selection.createRange().text:window.getSelection().toString()},a=function(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)"),s=window.location.search.substr(1).match(e);return null!=s?unescape(s[2]):null}}}]);