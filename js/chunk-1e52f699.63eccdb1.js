(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e52f699"],{"1e81":function(t,e,n){t.exports=n.p+"img/contactUs.e6a56432.png"},"44b5":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contact-us"},[t._m(0),n("p",{staticClass:"company-name"},[t._v("北京和风熏文化传媒有限公司")]),n("div",{staticClass:"company-content",domProps:{innerHTML:t._s(t.contactInfo.content)}}),n("div",{staticClass:"contact-info"},[n("div",{staticClass:"contact-box"},[n("div",{staticClass:"title"},[t._v("联系我们")]),n("div",{staticClass:"img flex-center mt40"},[n("div",{staticClass:"map",domProps:{innerHTML:t._s(t.contactInfo.map)}}),n("div",{staticClass:"contacter-info"},[n("p",[t._v("地址："+t._s(t.contactInfo.addr))]),n("p",{staticClass:"mt30"},[t._v("联系人："+t._s(t.contactInfo.linkname))]),n("p",{staticClass:"mt30"},[t._v("电话："+t._s(t.contactInfo.tel))]),n("div",{staticClass:"qrcode flex-center mt30"},t._l(t.contactInfo.imgs,(function(e){return n("div",[n("img",{attrs:{src:e.image,alt:""}}),n("p",[t._v(t._s(e.name))])])})),0)])])])]),n("div",{staticClass:"guestbook"},[n("p",{staticClass:"title"},[t._v("留言板")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.mobile,expression:"mobile"}],attrs:{type:"text",placeholder:"输入手机号"},domProps:{value:t.mobile},on:{input:function(e){e.target.composing||(t.mobile=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticStyle:{"margin-left":"1.25rem"},attrs:{type:"text",placeholder:"输入姓名"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"mt20",attrs:{placeholder:"输入留言内容"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}}),n("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("提交")])],1)])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"top"},[s("img",{attrs:{src:n("1e81"),alt:""}}),s("div",[s("p",{staticClass:"zh"},[t._v("联系我们")]),s("p",{staticClass:"en"},[t._v("CONTACT US")])])])}],c={name:"contact-us",components:{},data:function(){return{contactInfo:{map:"",addr:"",linkname:"",tel:"",imgs:[]},mobile:"",content:"",username:""}},created:function(){this.getData()},methods:{getData:function(){var t=this;this.$request("/user/contactUs",{},"POST").then((function(e){t.contactInfo=e.content.contactInfo})).catch((function(t){}))},submit:function(){var t=this,e={};e.mobile=this.mobile,e.username=this.username,e.content=this.content,this.$request("/user/leaveMsg",e,"POST").then((function(e){t.$message.closeAll(),t.$message({message:e.msg,type:"success"})})).catch((function(t){}))}}},o=c,i=(n("896b"),n("e90a")),r=Object(i["a"])(o,s,a,!1,null,"df7c6f06",null);e["default"]=r.exports},"896b":function(t,e,n){"use strict";var s=n("f930"),a=n.n(s);a.a},f930:function(t,e,n){}}]);