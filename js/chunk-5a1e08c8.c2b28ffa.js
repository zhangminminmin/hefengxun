(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a1e08c8"],{7254:function(e,t,a){e.exports=a.p+"img/avater.f1fa3b89.png"},8278:function(e,t,a){"use strict";var s=a("fb94"),r=a.n(s);r.a},fb94:function(e,t,a){},fdee:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"set"},[s("div",{staticClass:"set-top"},[s("div",{class:"1"==e.active?"active":"",on:{click:function(t){return e.select(1)}}},[e._v("个人资料")]),s("div",{class:"2"==e.active?"active":"",on:{click:function(t){return e.select(2)}}},[e._v("修改密码")])]),"1"==e.active?s("div",{staticClass:"set-card"},[s("div",{staticClass:"avater",on:{click:e.uploadAvater}},[e.form.formatAvatar?s("img",{attrs:{src:e.form.formatAvatar,alt:"头像"},on:{error:function(e){}}}):s("img",{attrs:{src:a("7254"),alt:""}}),s("input",{ref:"uploadAvater",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/jpeg,image/x-png"},on:{change:e.avaterChange}})]),s("el-form",{ref:"form",attrs:{"label-width":"80px"}},[s("el-form-item",{attrs:{label:"昵称"}},[s("el-input",{attrs:{placeholder:"昵称"},model:{value:e.form.nickname,callback:function(t){e.$set(e.form,"nickname",t)},expression:"form.nickname"}})],1),s("el-form-item",{attrs:{label:"生日"}},[s("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期"},model:{value:e.form.birthday,callback:function(t){e.$set(e.form,"birthday",t)},expression:"form.birthday"}})],1),s("el-form-item",{attrs:{label:"性别"}},[s("el-radio",{attrs:{label:"1"},model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},[e._v("男")]),s("el-radio",{attrs:{label:"2"},model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},[e._v("女")])],1),s("el-form-item",{attrs:{label:"签名"}},[s("el-input",{staticStyle:{width:"37.5rem"},model:{value:e.form.sign,callback:function(t){e.$set(e.form,"sign",t)},expression:"form.sign"}})],1),s("el-form-item",{attrs:{label:"日语等级"}},[s("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.japanese_level,callback:function(t){e.$set(e.form,"japanese_level",t)},expression:"form.japanese_level"}},e._l(e.japanLevelList,(function(e){return s("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),s("el-form-item",{attrs:{label:"英语等级"}},[s("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.english_level,callback:function(t){e.$set(e.form,"english_level",t)},expression:"form.english_level"}},e._l(e.englishLevelList,(function(e){return s("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("保存")])],1)],1)],1):s("div",{staticClass:"set-card"},[s("el-form",{ref:"form2",attrs:{"label-width":"80px"}},[s("el-form-item",{attrs:{label:"原始密码"}},[s("el-input",{attrs:{type:"password",placeholder:"原始密码"},model:{value:e.formPass.password,callback:function(t){e.$set(e.formPass,"password",t)},expression:"formPass.password"}})],1),s("el-form-item",{attrs:{label:"新密码"}},[s("el-input",{attrs:{type:"password",placeholder:"新密码"},model:{value:e.formPass.newPassword,callback:function(t){e.$set(e.formPass,"newPassword",t)},expression:"formPass.newPassword"}})],1),s("el-form-item",{attrs:{label:"确认密码"}},[s("el-input",{attrs:{type:"password",placeholder:"确认密码"},model:{value:e.formPass.newPassword2,callback:function(t){e.$set(e.formPass,"newPassword2",t)},expression:"formPass.newPassword2"}})],1),s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:e.submitPass}},[e._v("保存")])],1)],1)],1)])},r=[],n={name:"set",components:{},data:function(){return{active:"1",form:{avatar:"",birthday:"",english_level:"",formatAvatar:"",japanese_level:"",nickname:"",sex:"",sign:""},formPass:{password:"",newPassword:"",newPassword2:""},radio:"1",japanLevelList:[],englishLevelList:[],userInfo:{},formData:new FormData}},methods:{select:function(e){this.active=e},uploadAvater:function(){this.$refs.uploadAvater.click()},avaterChange:function(e){var t=this,a=e.target.files[0],s=new FileReader;s.readAsDataURL(a),s.onload=function(){t.form.formatAvatar=s.result},this.formData.append("avatar",a)},submit:function(){var e=this;this.formData.append("birthday",this.form.birthday),this.formData.append("nickname",this.form.nickname),this.formData.append("sex",this.form.sex),this.formData.append("sign",this.form.sign),this.formData.append("english_level",this.form.english_level),this.formData.append("japanese_level",this.form.japanese_level),this.$request("/user/updateUserDataPc",this.formData,"POST").then((function(t){e.$message({message:t.msg,type:"success"}),e.setUserInfo()})).catch((function(e){}))},submitPass:function(){var e=this,t={password:this.formPass.password,newPwd:this.formPass.newPassword,reNewPwd:this.formPass.newPassword2};this.$request("/user/modifyPwd",t,"POST").then((function(t){e.$message({message:t.msg,type:"success"})})).catch((function(e){}))},getUserInfo:function(){var e=this;this.$request("/user/userData").then((function(t){e.form=t.content.info,e.form.sex=e.form.sex+""})).catch((function(e){}))},setUserInfo:function(){var e=this;this.$request("/user/userCenter").then((function(t){var a=t.content.userinfo?t.content.userinfo:"";a&&(localStorage.setItem("userInfo",JSON.stringify(a)),e.$store.commit("setUserInfo",a))})).catch((function(e){}))},getUserDataParam:function(){var e=this;this.$request("/user/userDataParam").then((function(t){e.sexList=t.content.sex,e.japanLevelList=t.content.japan,e.englishLevelList=t.content.english})).catch((function(e){}))}},created:function(){this.getUserInfo(),this.getUserDataParam()}},o=n,i=(a("8278"),a("5511")),l=Object(i["a"])(o,s,r,!1,null,"f638e4ec",null);t["default"]=l.exports}}]);