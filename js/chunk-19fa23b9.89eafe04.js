(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19fa23b9"],{"17fc":function(t,e,s){"use strict";var o=s("5f02"),n=s.n(o);n.a},"5f02":function(t,e,s){},"638c":function(t,e,s){},"75d9":function(t,e,s){"use strict";var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"overlay",on:{mousewheel:function(t){t.preventDefault()}}},[o("div",{staticClass:"overlay-box"},[o("div",{staticClass:"edit-box"},[o("div",{staticClass:"dialog-title flex-between flex-center"},[o("span",[t._v(t._s(t.title))]),o("img",{attrs:{alt:"",src:s("6e68")},on:{click:function(e){return t.closed()}}})]),o("div",[o("el-form",{ref:"form",attrs:{"label-width":"40px"}},[o("el-form-item",{attrs:{label:"生词"}},[o("el-input",{model:{value:t.wordsInfo.name,callback:function(e){t.$set(t.wordsInfo,"name",e)},expression:"wordsInfo.name"}})],1),o("el-form-item",{attrs:{label:"分类"}},[o("div",{staticClass:"flex-between"},[o("el-select",{attrs:{placeholder:"请选择"},on:{change:t.categorysChange},model:{value:t.cate1,callback:function(e){t.cate1=e},expression:"cate1"}},t._l(t.categorys,(function(t){return o("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1),o("el-select",{attrs:{placeholder:"请选择"},model:{value:t.cate2,callback:function(e){t.cate2=e},expression:"cate2"}},t._l(t.categorys2,(function(t){return o("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1)]),o("el-form-item",{attrs:{label:"释义"}},[o("el-input",{model:{value:t.wordsInfo.paraphrase,callback:function(e){t.$set(t.wordsInfo,"paraphrase",e)},expression:"wordsInfo.paraphrase"}})],1),o("el-form-item",{attrs:{label:"读音"}},[o("el-input",{model:{value:t.wordsInfo.pronunciation_words,callback:function(e){t.$set(t.wordsInfo,"pronunciation_words",e)},expression:"wordsInfo.pronunciation_words"}})],1),o("el-form-item",{attrs:{label:"例句"}},[o("el-input",{attrs:{type:"textarea",rows:4,placeholder:"请输入内容"},model:{value:t.wordsInfo.sentences,callback:function(e){t.$set(t.wordsInfo,"sentences",e)},expression:"wordsInfo.sentences"}})],1),o("el-form-item",{attrs:{label:"联想"}},[o("el-input",{attrs:{type:"textarea",rows:4,placeholder:"请输入内容"},model:{value:t.wordsInfo.associate,callback:function(e){t.$set(t.wordsInfo,"associate",e)},expression:"wordsInfo.associate"}})],1)],1)],1),o("div",{staticClass:"dialog-footer flex-between"},[o("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("提交")]),t.worsId&&0!=t.worsId?o("div",{staticClass:"btn",on:{click:t.delWord}},[t._v("删除")]):t._e()],1)])])])},n=[],r=(s("cc57"),s("163d"),{name:"editWord",props:{title:String,worsId:[String,Number],sourceId:String,type:[String,Number],wordType:[String,Number]},data:function(){return{cate1:"",cate2:"",categorys:[],categorys2:[],wordsInfo:{id:this.worsId,name:"",sort_id:"",paraphrase:"",pronunciation:"",pronunciation_words:"",sentences:"",associate:"",user_id:"0",type:"",source_id:this.sourceId}}},methods:{closed:function(){this.$emit("update:visible",!1)},categorysChange:function(t){for(var e=[],s=0;s<this.categorys.length;s++)this.categorys[s].id==t&&this.categorys[s].son&&(e=this.categorys[s].son);this.categorys2=e,this.cate2=""},submit:function(){var t=this,e={};e.source_id=this.wordsInfo.source_id,e.words_id=this.wordsInfo.id,e.name=this.wordsInfo.name,e.sort_id=this.cate2,e.paraphrase=this.wordsInfo.paraphrase,e.pronunciation=this.wordsInfo.pronunciation,e.pronunciation_words=this.wordsInfo.pronunciation_words,e.sentences=this.wordsInfo.sentences,e.associate=this.wordsInfo.associate,this.wordType&&3==this.type&&(e.type=this.wordType);var s="/source/subWords",o="/userSource/subUserWords",n="/user/reSubWords",r="/goodCourse/myCourseSubWords",a=[s,s,o,n,r],i=a[this.type];this.$request(i,e,"POST").then((function(e){t.$message.closeAll(),t.$message({message:e.msg,type:"success"}),t.closed()})).catch((function(t){}))},delWord:function(){var t=this,e={};e.words_id=this.worsId,this.$request("/user/delWords",e,"POST").then((function(e){t.$message.closeAll(),t.$message({message:e.msg,type:"success"}),t.closed()})).catch((function(t){}))}},created:function(){var t=this,e={words_id:this.wordsInfo.id},s="/source/wordsInfo",o="/userSource/userWordsInfo",n="/source/wordsInfo",r="/goodCourse/myCourseWordsInfo",a=[s,s,o,n,r],i=a[this.type];this.$request(i,e,"POST").then((function(e){"{}"!==JSON.stringify(e.content.wordsInfo)&&"[]"!==JSON.stringify(e.content.wordsInfo)&&(t.wordsInfo=e.content.wordsInfo),t.categorys=e.content.wordsCategory;for(var s=0;s<t.categorys.length;s++)for(var o=t.categorys[s].son,n=o?o.length:0,r=0;r<n;r++)t.wordsInfo.sort_id==o[r].id&&(t.cate1=o[r].pid,t.cate2=t.wordsInfo.sort_id,t.categorys2=t.categorys[s].son)})).catch((function(t){}))}}),a=r,i=(s("8e23"),s("5511")),c=Object(i["a"])(a,o,n,!1,null,"ab11cb18",null);e["a"]=c.exports},"897b":function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"words-detail"},[o("div",{staticClass:"breadcrumb"},[o("div",[t._v("当前位置：")]),o("div",{on:{click:t.toPersonal}},[t._v("个人中心"),o("i",{staticClass:"el-icon-arrow-right"})]),o("div",{on:{click:t.toWordsBook}},[t._v("我的生词"),o("i",{staticClass:"el-icon-arrow-right"})]),o("div",[t._v("详情")])]),o("div",{staticClass:"detail mt10"},[o("div",{staticClass:"card-top flex-between flex-center"},[o("div",[o("div",{staticClass:"flex-center"},[o("span",{staticClass:"name"},[t._v(t._s(t.wordsInfo.name))]),o("span",{staticClass:"pronunciation"},[t._v("/"+t._s(t.wordsInfo.pronunciation_words)+"/")]),o("img",{staticClass:"voice",attrs:{src:s("8b9c"),alt:""},on:{click:t.play}})]),o("span",{staticClass:"tips"},[t._v("本条生词由 燃烧的陀螺仪 制作")])]),0==t.issearch?o("el-button",{attrs:{type:"primary"},on:{click:function(e){t.wordsEditShow=!0}}},[t._v("编辑生词")]):t._e(),1==t.issearch&&1==t.wordsInfo.is_exist?o("el-button",{attrs:{type:"primary"},on:{click:t.addMyWord}},[t._v("添加到生词")]):t._e(),1==t.issearch&&2==t.wordsInfo.is_exist?o("el-button",{staticClass:"bg-grey"},[t._v("已添加生词")]):t._e()],1),o("div",{staticClass:"title mt30"},[t._v("释义")]),o("div",{staticClass:"content mt10"},[t._v(t._s(t.wordsInfo.paraphrase))]),o("div",{staticClass:"title mt30"},[t._v("例句")]),o("div",{staticClass:"content mt10"},[t._v(t._s(t.wordsInfo.sentences))]),o("div",{staticClass:"title mt30"},[t._v("联想")]),o("div",{staticClass:"content mt10"},[t._v("\n\t\t\t"+t._s(t.wordsInfo.associate)+"\n\t\t")])]),t.wordsInfo.pronunciation?o("div",[o("audio",{ref:"wordAudio",attrs:{src:t.wordsInfo.pronunciation}})]):t._e(),t.wordsEditShow?o("editWord",{attrs:{type:t.wordsInfo.type,title:"编辑生词",visible:t.wordsEditShow,worsId:t.wordsInfo.id,sourceId:t.wordsInfo.source_id,wordType:t.wordsInfo.pid},on:{"update:visible":function(e){t.wordsEditShow=e}}}):t._e(),t.selectCateShow?o("selectCate",{attrs:{visible:t.selectCateShow},on:{"update:visible":function(e){t.selectCateShow=e},submit:t.addSearch}}):t._e()],1)},n=[],r=s("75d9"),a=s("d639"),i={name:"material",components:{editWord:r["a"],selectCate:a["a"]},data:function(){return{wordsInfo:{name:""},issearch:0,wordsEditShow:!1,selectCateShow:!1}},created:function(){this.issearch=this.$route.query.isSearch,this.getDetail()},methods:{getDetail:function(){var t=this,e={words_id:this.$route.query.wordsId},s="/source/wordsInfo",o="/userSource/userWordsInfo",n="/source/wordsInfo",r="/goodCourse/myCourseWordsInfo",a=[s,s,o,n,r],i=a[this.$route.query.wordsType];this.$request(i,e,"POST").then((function(e){"{}"!==JSON.stringify(e.content.wordsInfo)&&"[]"!==JSON.stringify(e.content.wordsInfo)&&(t.wordsInfo=e.content.wordsInfo),t.categorys=e.content.wordsCategory})).catch((function(t){}))},addMyWord:function(){this.selectCateShow=!0},addSearch:function(t){var e=this,s={};s.words_id=this.wordsInfo.id,s.sort_id=t,this.$request("/user/addOtherWords",s,"POST").then((function(t){e.$message.closeAll(),e.$message({message:t.msg,type:"success"})})).catch((function(t){}))},toPersonal:function(){},toWordsBook:function(){this.$router.push({path:"/personal/wordsbook"})},play:function(){this.$refs.wordAudio&&(this.$refs.wordAudio.paused?this.$refs.wordAudio.play():this.$refs.wordAudio.pause())}}},c=i,d=(s("ee45"),s("5511")),l=Object(d["a"])(c,o,n,!1,null,"adc6459e",null);e["default"]=l.exports},"8b9c":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAEcUlEQVRYR8WYa2gcVRTHz5mZ3c3DNDbGWiLRnfUVUVtrFbVYTasgpUWlRZCKKAqKICrUByjFiNUatSK+qigUtdovfaCtWPBVkLZ+sBgfCPphZ7NrxRolRlPc7s7M8T+zszuTfWdCNvMhuTtz77m/+z/nnntmmGZ4ydH2fjqRe41IriGFhjluPzMTkzyTwZKOXEqWtZeEFnp2xjhhL5iJzdBAklLXksh7gOmYAqBfHWE+YIaFCgUkhvIIJnwWMJXj9YEY80+5lgCJLI1QauQNKHNnzQlbBSSj3fPJntwFmBV1V98KIEnHziIr/zFcdF5DV9QBkpT2FNlyBSm8mePmF9VsNYwhSWvLybL3AOaUhjBOhxpAMqpdBzuflmwwf0CdPffwgrHJoN26QJJUb0N+eRsDok3B1APKRC+ivHkEXSIBWz/Qyd3LuWd8onivKpCIMI1GniTb3tg0SLFjXZepqxGDO6F2W0CpTyi+cQ3zkO3cqwASI47OmW0YeMu0YeooVLQF112LhX4IqE7fvvIiJ8wNLpBkYmeTab4K1yz28opD3x0KpgkgpwuS6ios2NkkviCsXsl6/msWQz2Ih8tCA5QPrOIy7K5l2F0XcMJ6q6RUUttEZD8ecN0O1q31LEklj5vabAFJqk0nyf3oHjGsvMy6+YCrktyskrH7MFqXeXPnSWuLQyHFrnoEhCUsUwgLfhimnvPN8Y1Q6iMXylBvAtkeXyV6dPaB/uqZR//8nSzlMaZvWbcvKaiE3WyoP6N5jgvF/M6sA7kTJ7WnES+PlZRQogmOZw1PJWdH3+EBHWoNkBvU9kHfNcoqxNL+AhAqB6Fh79kfrQFKd/SRmT3qK8RrOW65sSMpZQPZ9EJrgQrHxve+QoWc47nsTbjs7sIz/qY1ChnaEIn9hAc0QfqSU5mPOOkG8aV8h3+LPKBdsw4kRuRiIusQ4qTdnVThV+Cu+wvqaIMA/TIQW8MO0OTUc6X0OFyjIg+pOzH1Os/YMVK7zuczJ8Y9d+2Hu64vTaQqVyFTq9sx4NZws1cZVQ6UUtfj2NiGU2uSNG0F9+fcWIIQ90KI1wMWfiHdGoBCON0lfR+kXIRoV3DcLkXHgdCA1c6y37p6Sen4jxceO16Acd14eEoZQnw7Mvi7leXHWG8X/Tu+A8NWh4JqUFOLEcVizc8B0+fHDh+guLmSmZG6q1wiQwqlNm1BwD04bah6BVo6eiFKnc9g8zQfhn6nWPRy7sumnXsNSljFyQ94TZ5GNVCrps60n075EyOw1RtY5J9uXJ2BasC7Ghf5KW0llHLKzvlNqVULqHyLE6G+jq7jRHY0aLchkBuEv8bOpVx+H5qFU7neVQtIBjUyvtqNTePUP5spvmRrMTlOG8iFyszrIfO486I4GAao0TqadlnQkPsqbYxsBd5dNSdoxZtr+eQ4fx7CdhhGXCkVYHMB5Lowqd6Av++jedIUqLn4HFMEkGRkMTLuXvzu9+7N3QerEpTRia9n2Ze8YN+CL2jPNxvA1fr9DwuJ/ASx9M5fAAAAAElFTkSuQmCC"},"8e23":function(t,e,s){"use strict";var o=s("638c"),n=s.n(o);n.a},aa86:function(t,e,s){},cc57:function(t,e,s){var o=s("064e").f,n=Function.prototype,r=/^\s*function ([^ (]*)/,a="name";a in n||s("149f")&&o(n,a,{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(t){return""}}})},d639:function(t,e,s){"use strict";var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("transition",{attrs:{name:"el-fade-in"}},[o("div",{staticClass:"overlay",on:{mousewheel:function(t){t.preventDefault()}}},[o("div",{staticClass:"overlay-box"},[o("div",{staticClass:"select-cate"},[o("div",{staticClass:"dialog-title flex-between flex-center"},[o("span",[t._v("请选择分类")]),o("img",{attrs:{alt:"",src:s("6e68")},on:{click:function(e){return t.closed()}}})]),o("div",[o("el-form",{ref:"form",attrs:{"label-width":"40px"}},[o("el-form-item",{attrs:{label:"分类"}},[o("div",{staticClass:"flex-between"},[o("el-select",{attrs:{placeholder:"请选择"},on:{change:t.categorysChange},model:{value:t.cate1,callback:function(e){t.cate1=e},expression:"cate1"}},t._l(t.categorys,(function(t){return o("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1),o("el-select",{attrs:{placeholder:"请选择"},model:{value:t.cate2,callback:function(e){t.cate2=e},expression:"cate2"}},t._l(t.categorys2,(function(t){return o("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1)])],1)],1),o("div",{staticClass:"dialog-footer"},[o("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("提交")])],1)])])])])},n=[],r={name:"select-cate",props:{worsId:String,sourceId:String},data:function(){return{cate1:"",cate2:"",categorys:[],categorys2:[],wordsInfo:{id:this.worsId,name:"",sort_id:"",paraphrase:"",pronunciation:"",pronunciation_words:"",sentences:"",associate:"",user_id:"0",type:"",source_id:this.sourceId}}},methods:{closed:function(){this.$emit("update:visible",!1)},categorysChange:function(t){for(var e=[],s=0;s<this.categorys.length;s++)this.categorys[s].id==t&&this.categorys[s].son&&(e=this.categorys[s].son);this.categorys2=e,this.cate2=""},submit:function(){this.closed(),this.$emit("submit",this.cate2)}},created:function(){var t=this;this.$request("/source/wordsCategoryList",{},"POST").then((function(e){t.categorys=e.content.wordsCategory})).catch((function(t){}))}},a=r,i=(s("17fc"),s("5511")),c=Object(i["a"])(a,o,n,!1,null,"08bff40f",null);e["a"]=c.exports},ee45:function(t,e,s){"use strict";var o=s("aa86"),n=s.n(o);n.a}}]);