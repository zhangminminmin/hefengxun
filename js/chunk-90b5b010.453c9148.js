(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-90b5b010"],{"0997":function(t,e,o){},2304:function(t,e,o){"use strict";var i=o("ab5d"),s=o.n(i);s.a},"503c":function(t,e,o){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"modal"},[i("div",{staticClass:"modal-box"},[i("div",{staticClass:"add-word"},[i("div",{staticClass:"top flex-between flex-center"},[i("span",[t._v("添加生词")]),i("img",{attrs:{src:o("6e68"),alt:""},on:{click:t.closed}})]),i("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.getList,expression:"getList"}],staticClass:"container scroll_content"},t._l(t.wordsList,(function(e){return i("div",{staticClass:"word-cell flex-between flex-center"},[i("div",[i("div",[i("span",{staticClass:"name"},[t._v(t._s(e.name))]),i("span",{staticStyle:{"margin-left":"1.25rem"}},[t._v("["+t._s(e.pronunciation_words)+"]")])]),i("p",{staticClass:"mt10"},[t._v(t._s(e.paraphrase))])]),i("img",{attrs:{src:o("d5ad"),alt:""},on:{click:function(o){return t.editWord(e.id)}}})])})),0),i("div",{staticClass:"submit flex-center"},[i("el-button",{attrs:{type:"primary"},on:{click:t.addWord}},[t._v("添加生词")])],1)])])])},s=[],n=(o("8f42"),o("75d9"),{name:"wordListBox",props:{sourceId:[Number,String],type:[Number,String],reType:[Number,String]},data:function(){return{wordListShow:!1,addWordShow:!0,wordsList:[],page:1}},created:function(){},methods:{getList:function(){var t=this,e={source_id:this.sourceId,page:this.page};3==this.type&&(e.type=this.reType);var o="/source/sourceWordList",i="/userSource/userSourceWordList",s="/user/dictationWordsList",n="/goodCourse/myCourseSourceWordList",a=[o,o,i,s,n],r=a[this.type];this.$request(r,e,"POST").then((function(e){t.page++;for(var o=e.content.wordsList,i=0;i<o.length;i++)t.wordsList.push(o[i])})).catch((function(t){}))},addWord:function(){this.$emit("wordListAdd")},editWord:function(t){this.$emit("wordListEdit",t)},closed:function(){this.$emit("wordListClosed")}}}),a=n,r=(o("2304"),o("4e82")),c=Object(r["a"])(a,i,s,!1,null,"04e9b508",null);e["a"]=c.exports},"75d9":function(t,e,o){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"overlay",on:{mousewheel:function(t){t.preventDefault()}}},[i("div",{staticClass:"overlay-box"},[i("div",{staticClass:"edit-box"},[i("div",{staticClass:"dialog-title flex-between flex-center"},[i("span",[t._v(t._s(t.title))]),i("img",{attrs:{alt:"",src:o("6e68")},on:{click:function(e){return t.closed()}}})]),i("div",[i("el-form",{ref:"form",attrs:{"label-width":"40px"}},[i("el-form-item",{attrs:{label:"生词"}},[i("el-input",{model:{value:t.wordsInfo.name,callback:function(e){t.$set(t.wordsInfo,"name",e)},expression:"wordsInfo.name"}})],1),i("el-form-item",{attrs:{label:"分类"}},[i("div",{staticClass:"flex-between"},[i("el-select",{attrs:{placeholder:"请选择"},on:{change:t.categorysChange},model:{value:t.cate1,callback:function(e){t.cate1=e},expression:"cate1"}},t._l(t.categorys,(function(t){return i("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1),i("el-select",{attrs:{placeholder:"请选择"},model:{value:t.cate2,callback:function(e){t.cate2=e},expression:"cate2"}},t._l(t.categorys2,(function(t){return i("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1)]),i("el-form-item",{attrs:{label:"释义"}},[i("el-input",{model:{value:t.wordsInfo.paraphrase,callback:function(e){t.$set(t.wordsInfo,"paraphrase",e)},expression:"wordsInfo.paraphrase"}})],1),i("el-form-item",{attrs:{label:"读音"}},[i("el-input",{model:{value:t.wordsInfo.pronunciation_words,callback:function(e){t.$set(t.wordsInfo,"pronunciation_words",e)},expression:"wordsInfo.pronunciation_words"}})],1),i("el-form-item",{attrs:{label:"例句"}},[i("el-input",{attrs:{type:"textarea",rows:4,placeholder:"请输入内容"},model:{value:t.wordsInfo.sentences,callback:function(e){t.$set(t.wordsInfo,"sentences",e)},expression:"wordsInfo.sentences"}})],1),i("el-form-item",{attrs:{label:"联想"}},[i("el-input",{attrs:{type:"textarea",rows:4,placeholder:"请输入内容"},model:{value:t.wordsInfo.associate,callback:function(e){t.$set(t.wordsInfo,"associate",e)},expression:"wordsInfo.associate"}})],1)],1)],1),i("div",{staticClass:"dialog-footer flex-between"},[i("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("提交")]),t.worsId&&0!=t.worsId?i("div",{staticClass:"btn",on:{click:t.delWord}},[t._v("删除")]):t._e()],1)])])])},s=[],n=(o("7cfd"),o("8f42"),{name:"editWord",props:{title:String,worsId:[String,Number],sourceId:String,type:[String,Number],wordType:[String,Number]},data:function(){return{cate1:"",cate2:"",categorys:[],categorys2:[],wordsInfo:{id:this.worsId,name:"",sort_id:"",paraphrase:"",pronunciation:"",pronunciation_words:"",sentences:"",associate:"",user_id:"0",type:"",source_id:this.sourceId}}},methods:{closed:function(){this.$emit("update:visible",!1)},categorysChange:function(t){for(var e=[],o=0;o<this.categorys.length;o++)this.categorys[o].id==t&&this.categorys[o].son&&(e=this.categorys[o].son);this.categorys2=e,this.cate2=""},submit:function(){var t=this,e={};e.source_id=this.wordsInfo.source_id,e.words_id=this.wordsInfo.id,e.name=this.wordsInfo.name,e.sort_id=this.cate2,e.paraphrase=this.wordsInfo.paraphrase,e.pronunciation=this.wordsInfo.pronunciation,e.pronunciation_words=this.wordsInfo.pronunciation_words,e.sentences=this.wordsInfo.sentences,e.associate=this.wordsInfo.associate,this.wordType&&3==this.type&&(e.type=this.wordType);var o="/source/subWords",i="/userSource/subUserWords",s="/user/reSubWords",n="/goodCourse/myCourseSubWords",a=[o,o,i,s,n],r=a[this.type];this.$request(r,e,"POST").then((function(e){t.$message.closeAll(),t.$message({message:e.msg,type:"success"}),t.closed()})).catch((function(t){}))},delWord:function(){var t=this,e={};e.words_id=this.worsId,this.$request("/user/delWords",e,"POST").then((function(e){t.$message.closeAll(),t.$message({message:e.msg,type:"success"}),t.closed()})).catch((function(t){}))}},created:function(){var t=this,e={words_id:this.wordsInfo.id},o="/source/wordsInfo",i="/userSource/userWordsInfo",s="/source/wordsInfo",n="/goodCourse/myCourseWordsInfo",a=[o,o,i,s,n],r=a[this.type];this.$request(r,e,"POST").then((function(e){"{}"!==JSON.stringify(e.content.wordsInfo)&&"[]"!==JSON.stringify(e.content.wordsInfo)&&(t.wordsInfo=e.content.wordsInfo),t.categorys=e.content.wordsCategory;for(var o=0;o<t.categorys.length;o++)for(var i=t.categorys[o].son,s=i?i.length:0,n=0;n<s;n++)t.wordsInfo.sort_id==i[n].id&&(t.cate1=i[n].pid,t.cate2=t.wordsInfo.sort_id,t.categorys2=t.categorys[o].son)})).catch((function(t){}))}}),a=n,r=(o("8e23"),o("4e82")),c=Object(r["a"])(a,i,s,!1,null,"ab11cb18",null);e["a"]=c.exports},"8e23":function(t,e,o){"use strict";var i=o("eb56"),s=o.n(i);s.a},"9f04":function(t,e){t.exports="data:image/png;base64,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"},a56a:function(t,e){t.exports="data:image/png;base64,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"},ab5d:function(t,e,o){},b20f:function(t,e,o){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"el-fade-in"}},[i("div",{staticClass:"overlay",on:{mousewheel:function(t){t.preventDefault()}}},[i("div",{staticClass:"overlay-box"},[i("div",{staticClass:"app-tips"},[i("div",{staticClass:"title"},[t._v(t._s(t.title))]),i("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("知道了")]),i("img",{staticClass:"close",attrs:{src:o("6e68"),alt:""},on:{click:t.closed}})],1)])])])},s=[],n={name:"app-tips",props:{title:String},data:function(){return{}},methods:{closed:function(){this.$emit("update:visible",!1)},categorysChange:function(t){for(var e=[],o=0;o<this.categorys.length;o++)this.categorys[o].id==t&&this.categorys[o].son&&(e=this.categorys[o].son);this.categorys2=e,this.cate2=""},submit:function(){this.closed(),this.$emit("submit")}},created:function(){var t=this;this.$request("/source/wordsCategoryList",{},"POST").then((function(e){t.categorys=e.content.wordsCategory})).catch((function(t){}))}},a=n,r=(o("ddd4"),o("4e82")),c=Object(r["a"])(a,i,s,!1,null,"1e4e1a20",null);e["a"]=c.exports},c006:function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dictation-detail"},[i("div",{staticClass:"breadcrumb"},[i("div",[t._v("当前位置：")]),i("div",{on:{click:t.toPersonal}},[t._v("个人中心"),i("i",{staticClass:"el-icon-arrow-right"})]),i("div",{on:{click:t.toDictation}},[t._v("我的听写"),i("i",{staticClass:"el-icon-arrow-right"})]),i("div",[t._v("详情")])]),i("div",{staticClass:"detail mt10"},[i("div",{staticClass:"card",on:{click:t.toMaterialDetail}},[i("materialCard",{attrs:{created_at:t.baseInfo.created_at,title:t.baseInfo.title,image:t.baseInfo.image,type:t.baseInfo.type,id:t.baseInfo.id}})],1),i("div",{staticClass:"tag-list mt20"},[i("div",[t._v("标签:")]),t._l(t.baseInfo.dictation_tag,(function(e){return i("div",{on:{click:function(o){return t.toSameTagList(e.id)}}},[t._v(t._s(e.name))])}))],2),i("div",{staticClass:"player mt30"},[t.baseInfo.source_path?i("mediaPlay",{attrs:{type:t.avType,mediaUrl:t.baseInfo.source_path,showCaption:1==t.avInfo.length&&t.avInfo[0].subtitlesList.length>0,subtitlesList:t.avInfo[0].subtitlesList}}):t._e()],1),1==t.avInfo.length?i("div",{staticClass:"mt30"},[i("div",{domProps:{innerHTML:t._s(t.subAvInfo.dictationInfo.content)}})]):i("div",t._l(t.avInfo,(function(e){return i("div",{staticClass:"mt40"},[i("div",{staticClass:"flex-between flex-center dictation-item"},[i("div",{domProps:{innerHTML:t._s(e.dictationInfo.content)}}),i("div",{staticClass:"flex-center"},[e.dictationInfo.dictationRead.path?i("img",{attrs:{src:o("a2f1"),alt:""},on:{click:function(o){return t.playMusic(e.dictationInfo.dictationRead.path)}}}):i("img",{attrs:{src:o("a56a"),alt:""}}),i("img",{staticStyle:{"margin-left":"0.625rem"},attrs:{src:o("9f04"),alt:""},on:{click:function(o){return t.openTranslate(e)}}})])])])})),0),i("div",{staticClass:"option flex-between flex-center mt40"},[i("div",{staticClass:"option-left flex-center"},[1==t.avInfo.length&&t.avInfo[0].dictationInfo.dictationRead.path?i("img",{attrs:{src:o("a2f1"),alt:""},on:{click:function(e){return t.playMusic(t.avInfo[0].dictationInfo.dictationRead.path)}}}):t._e(),1!=t.avInfo.length||t.avInfo[0].dictationInfo.dictationRead.path?t._e():i("img",{attrs:{src:o("a56a"),alt:""}}),1==t.avInfo.length?i("img",{staticStyle:{"margin-left":"0.625rem"},attrs:{src:o("9f04"),alt:""},on:{click:function(e){return t.openTranslate(t.subAvInfo)}}}):t._e(),i("div",{staticClass:"btn",staticStyle:{"margin-left":"0.625rem"},on:{click:function(e){t.wordListShow=!0}}},[i("span",[t._v("添加生词")])])]),i("div",{staticClass:"option-right flex-center"},[i("div",{staticClass:"btn",on:{click:function(e){t.delDictationShow=!0}}},[i("span",[t._v("删除听写")])]),i("div",{staticClass:"btn bg-yellow",staticStyle:{"margin-left":"0.625rem"},on:{click:t.toMaterialDetail}},[i("span",[t._v("重新听写")])])])])]),i("audio",{ref:"dictionPlay",attrs:{src:"''"}}),t.appTipsShow?i("appTips",{attrs:{visible:t.appTipsShow,title:"朗读功能请下载“猩听译”APP体验"},on:{"update:visible":function(e){t.appTipsShow=e}}}):t._e(),t.translateBoxShow?i("translateBox",{attrs:{content:t.subAvInfo.dictationInfo.content,sourceId:t.subAvInfo.dictationInfo.source_id,source_period_id:t.subAvInfo.dictationInfo.source_period_id,tranType:"1",visible:t.translateBoxShow},on:{"update:visible":function(e){t.translateBoxShow=e}}}):t._e(),i("transition",{attrs:{name:"el-fade-in"}},[t.wordListShow?i("wordListBox",{attrs:{type:"3",reType:"1",sourceId:t.sourceId},on:{wordListClosed:function(e){t.wordListShow=!1},wordListEdit:t.editWord,wordListAdd:t.addWord}}):t._e()],1),t.wordEditShow?i("editWord",{attrs:{type:"3",title:"添加生词",visible:t.wordEditShow,worsId:t.editWordId,sourceId:t.sourceId,wordType:"1"},on:{"update:visible":function(e){t.wordEditShow=e}}}):t._e(),t.delDictationShow?i("hfxDialog",{attrs:{content:t.delDialogContent,visible:t.delDictationShow},on:{"update:visible":function(e){t.delDictationShow=e}},scopedSlots:t._u([{key:"footer",fn:function(){return[i("div",{staticClass:"flex-between dialog-footer"},[i("div",{on:{click:function(e){t.delDictationShow=!1}}},[t._v("取消")]),i("div",{on:{click:t.delDictation}},[t._v("确认")])])]},proxy:!0}],null,!1,2093246236)}):t._e()],1)},s=[],n=(o("e6d1"),o("1951")),a=o("01e0"),r=o("b20f"),c=o("8d29"),d=o("503c"),l=o("75d9"),u=o("9042"),f={name:"dictation-detail",components:{materialCard:n["a"],mediaPlay:a["a"],appTips:r["a"],wordListBox:d["a"],translateBox:c["a"],hfxDialog:u["a"],editWord:l["a"]},data:function(){return{active:"1",list:[],appTipsShow:!1,dictationInfo:{},baseInfo:{},textInfo:[],avInfo:[],subAvInfo:{},countList:[],translateBoxShow:!1,delDictationShow:!1,wordEditShow:!1,wordListShow:!1,delDialogContent:"删除听写内容",sourceId:"0",editWordId:0,selectedTagIdList:[],musicSrc:""}},computed:{avType:function(){var t="audio";return 2!=this.baseInfo.type&&5!=this.baseInfo.type||(t="video"),t}},created:function(){this.sourceId=this.$route.query.id,this.getDetail(),this.getTagList()},methods:{getDetail:function(){var t=this,e={id:this.sourceId};this.$request("/source/sourceInfo",e,"POST").then((function(e){t.hots=e.content.position,t.baseInfo=e.content.info,t.textInfo=e.content.textInfo,t.avInfo=e.content.avInfo,t.selectedTagIdList=t.avInfo[0].dictationInfo.dictation_tag.split(","),t.countList=e.content.countList,t.subAvInfo=t.avInfo[0],3!=t.baseInfo.type&&t.baseInfo.subtitles&&getFileContent(t.baseInfo.subtitles).then((function(t){console.log(t)})).catch((function(t){}))})).catch((function(t){}))},getTagList:function(){var t=this;this.$request("/source/dictationTagList",{},"POST").then((function(e){var o=e.content.dictationTag;t.$store.commit("setTagList",o)})).catch((function(t){}))},delDictation:function(){var t=this;this.delDictationShow=!1;var e={};e.source_id=this.baseInfo.id,e.sourceType=1,e.doType=1,this.$request("/user/delDosource",e,"POST").then((function(e){t.$message.closeAll(),t.$message({message:e.msg,type:"success"})})).catch((function(t){}))},toMaterialDetail:function(){this.$router.push({path:"/material/detail/".concat(this.sourceId)})},toPersonal:function(){},toDictation:function(){this.$router.push({path:"/personal/dictation",query:{type:1}})},openTranslate:function(t){this.subAvInfo=t,this.translateBoxShow=!0},editWord:function(t){this.editWordId=t,this.wordEditShow=!0,this.wordListShow=!1},addWord:function(){this.editWordId=0,this.wordEditShow=!0,this.wordListShow=!1,console.log(this.sourceId)},toSubDetail:function(t,e){this.$router.push({path:"/personal/dictation/subDetail",query:{id:t,period_id:e}})},toSameTagList:function(t){this.$router.push({path:"/personal/sametaglist",query:{tag:t}})},playMusic:function(t){if(t){var e=this.$refs.dictionPlay;e.src=t,e.load(),e.play()}}}},p=f,h=(o("cd63"),o("4e82")),w=Object(h["a"])(p,i,s,!1,null,"ef95976a",null);e["default"]=w.exports},cd63:function(t,e,o){"use strict";var i=o("d2d5"),s=o.n(i);s.a},d2d5:function(t,e,o){},ddd4:function(t,e,o){"use strict";var i=o("0997"),s=o.n(i);s.a},eb56:function(t,e,o){},fa7d:function(t,e,o){"use strict";o.d(e,"a",(function(){return i}));o("cc1d");var i=function(){return document.selection?document.selection.createRange().text:window.getSelection().toString()}}}]);