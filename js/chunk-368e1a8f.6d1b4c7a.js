(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-368e1a8f"],{1399:function(t,e,s){},"14a2":function(t,e,s){"use strict";var i=s("1399"),n=s.n(i);n.a},"69a2":function(t,e,s){"use strict";var i=s("a152"),n=s.n(i);n.a},9042:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"overlay",on:{mousewheel:function(t){t.preventDefault()}}},[i("div",{staticClass:"overlay-box"},[i("div",{staticClass:"hfx-dialog"},[i("div",{staticClass:"content"},[t._v(t._s(t.content))]),i("img",{attrs:{src:s("6e68"),alt:""},on:{click:t.closed}}),t._t("footer")],2)])])},n=[],o={name:"hfx-dialog",props:{title:String,content:String},data:function(){return{}},methods:{closed:function(){this.$emit("update:visible",!1)},confirm:function(){this.closed(),this.$emit("confirm")}},created:function(){var t=this;this.$request("/source/wordsCategoryList",{},"POST").then((function(e){t.categorys=e.content.wordsCategory})).catch((function(t){}))}},a=o,c=(s("14a2"),s("e90a")),r=Object(c["a"])(a,i,n,!1,null,"02ddf7d9",null);e["a"]=r.exports},a152:function(t,e,s){},a2ed:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"captions-subDetail"},[t._m(0),s("div",{staticClass:"detail mt10"},[t.sourceInfo.path?s("div",{staticClass:"player"},[s("mediaPlay",{attrs:{type:t.avType,mediaUrl:t.sourceInfo.path,showCaption:t.subtitlesList.length>0,subtitlesList:t.subtitlesList}})],1):t._e(),s("div",{staticClass:"caption mt20"},t._l(t.subtitlesList,(function(e){return s("p",[t._v(t._s(e.content))])})),0)]),s("div",{staticClass:"option"},[s("el-button",{on:{click:function(e){t.delCaptionsShow=!0}}},[t._v("删除字幕")]),s("el-button",{staticClass:"ml20",attrs:{type:"primary"},on:{click:t.toMaterialDetail}},[t._v("重新制作字幕")])],1),t.delCaptionsShow?s("hfxDialog",{attrs:{content:t.delDialogContent,visible:t.delCaptionsShow},on:{"update:visible":function(e){t.delCaptionsShow=e}},scopedSlots:t._u([{key:"footer",fn:function(){return[s("div",{staticClass:"flex-between dialog-footer"},[s("div",{on:{click:function(e){t.delCaptionsShow=!1}}},[t._v("取消")]),s("div",{on:{click:t.delSubtitles}},[t._v("确认")])])]},proxy:!0}],null,!1,1795099286)}):t._e()],1)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"breadcrumb"},[s("a",{attrs:{href:""}},[t._v("个人中心")]),t._v(" > "),s("a",{attrs:{href:""}},[t._v("我的字幕")]),t._v(" > "),s("a",{attrs:{href:""}},[t._v("字幕详情")])])}],o=s("01e0"),a=s("9042"),c={name:"captions-subDetail",components:{mediaPlay:o["a"],hfxDialog:a["a"]},data:function(){return{sourceInfo:{},subtitlesList:[],delCaptionsShow:!1,delDialogContent:"删除字幕"}},computed:{avType:function(){var t="audio";return 2!=this.sourceInfo.type&&5!=this.sourceInfo.type||(t="video"),t}},created:function(){this.getsubtitles()},methods:{getsubtitles:function(){var t=this,e={};e.source_period_id=this.$route.query.id,this.$request("/source/subtitlesInfo",e,"POST").then((function(e){t.sourceInfo=e.content.sourceInfo,t.subtitlesList=e.content.subtitlesList})).catch((function(t){}))},delSubtitles:function(){var t=this;this.delCaptionsShow=!1;var e={};e.source_id=this.sourceInfo.source_id,e.sourceType=1,e.doType=4,this.$request("/user/delDosource",e,"POST").then((function(e){t.$message.closeAll(),t.$message({message:e.msg,type:"success"}),t.getDetail()})).catch((function(t){}))},toMaterialDetail:function(){this.$router.push({path:"/material/detailPerson/".concat(this.sourceInfo.source_id)})}}},r=c,l=(s("69a2"),s("e90a")),u=Object(l["a"])(r,i,n,!1,null,"312a2d38",null);e["default"]=u.exports}}]);