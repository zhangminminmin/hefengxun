(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38067789"],{"2fd4":function(t,e,n){var i=n("fb68"),r=n("75c4"),s=n("cb3d")("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==r(t))}},"326c":function(t,e,n){"use strict";var i=n("c101"),r=n.n(i);r.a},"6b6b":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bind"},[n("div",{staticClass:"bind-box"},[n("div",{staticClass:"form"},[n("div",{staticClass:"title"},[t._v("绑定手机")]),n("div",{staticClass:"cell"},[n("div",{staticClass:"lable"},[t._v("手机号码")]),n("div",{staticClass:"flex-between",staticStyle:{width:"320px"}},[n("el-select",{staticStyle:{width:"40%"},attrs:{filterable:"",placeholder:"请选择国家"},model:{value:t.countryCode,callback:function(e){t.countryCode=e},expression:"countryCode"}},t._l(t.countryList,(function(t,e){return n("el-option",{key:e,attrs:{label:t.name,value:t.code}})})),1),n("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticStyle:{width:"60%","margin-left":"10px"},attrs:{type:"text",placeholder:"输入手机号码"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})],1)]),n("div",{staticClass:"cell"},[n("div",{staticClass:"lable"},[t._v("验证码")]),n("div",{staticClass:"cell-right"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],staticStyle:{width:"13.125rem"},attrs:{type:"text",placeholder:"输入验证码"},domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value)}}}),n("div",{staticClass:"vitify",class:"0"!=t.timmer?"bg-gray":"",on:{click:t.getCode}},[t._v(t._s(t.vitifyText))])])]),n("div",{staticClass:"cell"},[n("div",{staticClass:"lable"},[t._v("新密码")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"输入新密码"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),n("div",{staticClass:"cell"},[n("div",{staticClass:"lable"},[t._v("确认密码")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password2,expression:"password2"}],attrs:{type:"password",placeholder:"确认密码"},domProps:{value:t.password2},on:{input:function(e){e.target.composing||(t.password2=e.target.value)}}})]),n("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("提交")])],1)])])},r=[],s=(n("f548"),n("2b45"),n("fa7d")),o={name:"bind",data:function(){return{timmer:0,vitifyText:"获取验证码",phone:"",code:"",password:"",password2:"",countryList:[],countryCode:"86"}},created:function(){this.getCountryList()},methods:{check:function(){return""==this.phone.toString().trim()?(this.$message({message:"请输入手机号",type:"error"}),!1):""==this.code.toString().trim()?(this.$message({message:"请输入验证码",type:"error"}),!1):""==this.password.toString().trim()?(this.$message({message:"请输入密码",type:"error"}),!1):this.password2.toString().trim()===this.password.toString().trim()||(this.$message({message:"2次密码不一致",type:"error"}),!1)},getCode:function(){var t=this;if(0==this.timmer){if(""==this.phone.toString().trim())return this.$message({message:"请输入手机号",type:"error"}),!1;var e={};e.mobile=this.phone,e.act="bind",e.nation_code=this.countryCode,this.$request("/login/sendcode",e,"POST").then((function(e){t.timmer=60,t.vitifyText=t.timmer+"";var n=setInterval((function(){t.timmer--,t.vitifyText=t.timmer+"",0==t.timmer&&(t.vitifyText="获取验证码",clearInterval(n))}),1e3)})).catch((function(t){}))}},submit:function(){var t=this,e=Object(s["c"])("platformId"),n=this.check();if(n){var i={};i.mobile=this.phone,i.platformid=e,i.code=this.code,i.password=this.password,i.repassword=this.password2,i.nation_code=this.countryCode,this.$request("/login/bindMobilePc",i,"POST").then((function(e){t.$message({message:e.msg,type:"success"}),t.getUserInfo()})).catch((function(t){}))}},getUserInfo:function(){var t=this;this.$request("/user/userCenter").then((function(e){var n=e.content.userinfo?e.content.userinfo:"";n&&(localStorage.setItem("userInfo",JSON.stringify(n)),t.$store.commit("setUserInfo",n)),t.$router.replace("/bind/success")})).catch((function(t){}))},getCountryList:function(){var t=this;this.$request("/login/nationCode",{},"POST").then((function(e){t.countryList=e.content.list})).catch((function(t){}))}}},a=o,c=(n("326c"),n("e90a")),u=Object(c["a"])(a,i,r,!1,null,"3ab79c72",null);e["default"]=u.exports},8704:function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"9dd9":function(t,e,n){var i=n("e7ad"),r=n("1e5b"),s=n("064e").f,o=n("2ea2").f,a=n("2fd4"),c=n("f1fe"),u=i.RegExp,l=u,d=u.prototype,f=/a/g,p=/a/g,v=new u(f)!==f;if(n("149f")&&(!v||n("238a")((function(){return p[n("cb3d")("match")]=!1,u(f)!=f||u(p)==p||"/a/i"!=u(f,"i")})))){u=function(t,e){var n=this instanceof u,i=a(t),s=void 0===e;return!n&&i&&t.constructor===u&&s?t:r(v?new l(i&&!s?t.source:t,e):l((i=t instanceof u)?t.source:t,i&&s?c.call(t):e),n?this:d,u)};for(var h=function(t){t in u||s(u,t,{configurable:!0,get:function(){return l[t]},set:function(e){l[t]=e}})},m=o(l),g=0;m.length>g;)h(m[g++]);d.constructor=u,u.prototype=d,n("bf16")(i,"RegExp",u)}n("1157")("RegExp")},"9e76":function(t,e,n){"use strict";var i=n("69b3"),r=n("eafa"),s=n("e754"),o=n("7108");n("0aed")("match",1,(function(t,e,n,a){return[function(n){var i=t(this),r=void 0==n?void 0:n[e];return void 0!==r?r.call(n,i):new RegExp(n)[e](String(i))},function(t){var e=a(n,t,this);if(e.done)return e.value;var c=i(t),u=String(this);if(!c.global)return o(c,u);var l=c.unicode;c.lastIndex=0;var d,f=[],p=0;while(null!==(d=o(c,u))){var v=String(d[0]);f[p]=v,""===v&&(c.lastIndex=s(u,r(c.lastIndex),l)),p++}return 0===p?null:f}]}))},c0c3:function(t,e,n){"use strict";var i=n("69b3"),r=n("8704"),s=n("7108");n("0aed")("search",1,(function(t,e,n,o){return[function(n){var i=t(this),r=void 0==n?void 0:n[e];return void 0!==r?r.call(n,i):new RegExp(n)[e](String(i))},function(t){var e=o(n,t,this);if(e.done)return e.value;var a=i(t),c=String(this),u=a.lastIndex;r(u,0)||(a.lastIndex=0);var l=s(a,c);return r(a.lastIndex,u)||(a.lastIndex=u),null===l?-1:l.index}]}))},c101:function(t,e,n){},fa7d:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return s})),n.d(e,"a",(function(){return o}));n("f548"),n("c0c3"),n("9e76"),n("9dd9"),n("2b45");var i=function(){return document.selection?document.selection.createRange().text:window.getSelection().toString()},r=function(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)"),n=window.location.search.substr(1).match(e);return null!=n?unescape(n[2]):null},s=function(){var t=navigator.userAgent;return t.indexOf("iPhone")>-1||t.indexOf("Mac OS")>-1},o=function(t,e){var n=new Date(e);/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(n.getFullYear()+"").substr(4-RegExp.$1.length)));var i={"M+":n.getMonth()+1,"d+":n.getDate(),"h+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds()};for(var r in i)if(new RegExp("(".concat(r,")")).test(t)){var s=i[r]+"";t=t.replace(RegExp.$1,1===RegExp.$1.length?s:a(s))}return t};function a(t){return("00"+t).substr(t.length)}}}]);