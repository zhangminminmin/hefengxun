(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4241260f"],{a17b:function(t,i,o){},b43f:function(t,i,o){"use strict";var e=o("a17b"),n=o.n(e);n.a},f798:function(t,i,o){"use strict";o.r(i);var e=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"dictation-detail"},[e("div",{staticClass:"breadcrumb"},[e("div",[t._v("当前位置：")]),e("div",{on:{click:t.toPersonal}},[t._v("个人中心"),e("i",{staticClass:"el-icon-arrow-right"})]),e("div",{on:{click:t.toDictation}},[t._v("我的听写"),e("i",{staticClass:"el-icon-arrow-right"})]),e("div",[t._v("详情")])]),e("div",{staticClass:"detail mt10"},[e("div",{staticClass:"card",on:{click:t.toMaterialDetail}},[e("materialCard",{attrs:{created_at:t.baseInfo.created_at,title:t.baseInfo.title,image:t.baseInfo.image,type:t.baseInfo.type,id:t.baseInfo.id}})],1),e("div",{staticClass:"tag-list mt20"},[e("div",[t._v("标签:")]),t._l(t.baseInfo.dictation_tag,(function(i){return e("div",[t._v(t._s(i.name))])}))],2),e("div",{staticClass:"player mt30"},[t.baseInfo.source_path?e("mediaPlay",{attrs:{type:t.avType,mediaUrl:t.baseInfo.source_path,showCaption:1==t.avInfo.length&&t.avInfo[0].subtitlesList.length>0,subtitlesList:t.avInfo[0].subtitlesList}}):t._e()],1),1==t.avInfo.length?e("div",{staticClass:"mt30"},[e("div",{domProps:{innerHTML:t._s(t.subAvInfo.dictationInfo.content)}})]):e("div",t._l(t.avInfo,(function(i){return e("div",{staticClass:"mt40"},[e("div",{staticClass:"flex-between flex-center dictation-item"},[e("div",{domProps:{innerHTML:t._s(i.dictationInfo.content)}}),e("div",{staticClass:"flex-center"},[e("img",{attrs:{src:o("dddc"),alt:""},on:{click:function(i){t.appTipsShow=!0}}}),e("img",{staticStyle:{"margin-left":"0.625rem"},attrs:{src:o("9f04"),alt:""},on:{click:function(o){return t.openTranslate(i)}}})])])])})),0),e("div",{staticClass:"option flex-between flex-center mt40"},[e("div",{staticClass:"option-left flex-center"},[1==t.avInfo.length?e("img",{attrs:{src:o("dddc"),alt:""},on:{click:function(i){t.appTipsShow=!0}}}):t._e(),1==t.avInfo.length?e("img",{staticStyle:{"margin-left":"0.625rem"},attrs:{src:o("9f04"),alt:""},on:{click:function(i){return t.openTranslate(t.subAvInfo)}}}):t._e(),e("div",{staticClass:"btn",staticStyle:{"margin-left":"0.625rem"},on:{click:function(i){t.wordListShow=!0}}},[e("span",[t._v("添加生词")])])]),e("div",{staticClass:"option-right flex-center"},[e("div",{staticClass:"btn",on:{click:function(i){t.delDictationShow=!0}}},[e("span",[t._v("删除听写")])]),e("div",{staticClass:"btn bg-yellow",staticStyle:{"margin-left":"0.625rem"},on:{click:t.toMaterialDetail}},[e("span",[t._v("重新听写")])])])]),e("div",{staticClass:"lsit mt10"},t._l(t.list,(function(t){return e("div",{staticClass:"list-item mt10"},[e("img",{attrs:{src:o("a2f1"),alt:""}}),e("div",{staticClass:"content"})])})),0)]),t.appTipsShow?e("appTips",{attrs:{visible:t.appTipsShow,title:"朗读功能请下载“猩听译”APP体验"},on:{"update:visible":function(i){t.appTipsShow=i}}}):t._e(),t.translateBoxShow?e("translateBox",{attrs:{content:t.subAvInfo.dictationInfo.content,sourceId:t.subAvInfo.dictationInfo.source_id,source_period_id:t.subAvInfo.dictationInfo.source_period_id,tranType:"1",visible:t.translateBoxShow},on:{"update:visible":function(i){t.translateBoxShow=i}}}):t._e(),e("transition",{attrs:{name:"el-fade-in"}},[t.wordListShow?e("wordListBox",{attrs:{type:"3",reType:"3",sourceId:t.sourceId},on:{wordListClosed:function(i){t.wordListShow=!1},wordListEdit:t.editWord,wordListAdd:t.addWord}}):t._e()],1),t.wordEditShow?e("editWord",{attrs:{type:"3",title:"添加生词",visible:t.wordEditShow,worsId:t.editWordId,sourceId:t.sourceId,wordType:"1"},on:{"update:visible":function(i){t.wordEditShow=i}}}):t._e(),t.delDictationShow?e("hfxDialog",{attrs:{content:t.delDialogContent,visible:t.delDictationShow},on:{"update:visible":function(i){t.delDictationShow=i}},scopedSlots:t._u([{key:"footer",fn:function(){return[e("div",{staticClass:"flex-between dialog-footer"},[e("div",{on:{click:function(i){t.delDictationShow=!1}}},[t._v("取消")]),e("div",{on:{click:t.delDictation}},[t._v("确认")])])]},proxy:!0}],null,!1,2093246236)}):t._e()],1)},n=[],s=(o("e6d1"),o("1951")),a=o("01e0"),c=o("b20f"),d=o("8d29"),r=o("503c"),l=o("75d9"),f=o("9042"),u={name:"dictation-detail",components:{materialCard:s["a"],mediaPlay:a["a"],appTips:c["a"],wordListBox:r["a"],translateBox:d["a"],hfxDialog:f["a"],editWord:l["a"]},data:function(){return{active:"1",list:[],appTipsShow:!1,dictationInfo:{},baseInfo:{},textInfo:[],avInfo:[],subAvInfo:{},countList:[],translateBoxShow:!1,delDictationShow:!1,wordEditShow:!1,wordListShow:!1,delDialogContent:"删除听写内容",sourceId:"0",editWordId:0,selectedTagIdList:[]}},computed:{avType:function(){var t="audio";return 2!=this.baseInfo.type&&5!=this.baseInfo.type||(t="video"),t}},created:function(){this.sourceId=this.$route.query.id,this.getDetail(),this.getTagList()},methods:{getDetail:function(){var t=this,i={source_id:this.sourceId};this.$request("/goodCourse/myGoodCourseInfo",i,"POST").then((function(i){t.baseInfo=i.content.info,t.textInfo=i.content.textInfo,t.avInfo=i.content.avInfo,t.selectedTagIdList=t.avInfo[0].dictationInfo.dictation_tag.split(","),t.countList=i.content.countList,t.subAvInfo=t.avInfo[0],3!=t.baseInfo.type&&t.baseInfo.subtitles&&getFileContent(t.baseInfo.subtitles).then((function(t){console.log(t)})).catch((function(t){}))})).catch((function(t){}))},getTagList:function(){var t=this;this.$request("/source/dictationTagList",{},"POST").then((function(i){var o=i.content.dictationTag;t.$store.commit("setTagList",o)})).catch((function(t){}))},delDictation:function(){var t=this;this.delDictationShow=!1;var i={};i.source_id=this.baseInfo.id,i.sourceType=1,i.doType=1,this.$request("/user/delDosource",i,"POST").then((function(i){t.$message.closeAll(),t.$message({message:i.msg,type:"success"})})).catch((function(t){}))},toMaterialDetail:function(){this.$router.push({path:"/course/materialDetail/".concat(this.sourceId)})},toPersonal:function(){},toDictation:function(){this.$router.push({path:"/personal/dictation",query:{type:3}})},openTranslate:function(t){this.subAvInfo=t,this.translateBoxShow=!0},editWord:function(t){this.editWordId=t,this.wordEditShow=!0,this.wordListShow=!1},addWord:function(){this.editWordId=0,this.wordEditShow=!0,this.wordListShow=!1}}},h=u,v=(o("b43f"),o("4e82")),p=Object(v["a"])(h,e,n,!1,null,"0412415c",null);i["default"]=p.exports}}]);