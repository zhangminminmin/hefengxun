(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bffe3658"],{"770a":function(t,s,e){"use strict";e.r(s);var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"sign-log"},[t._m(0),e("div",{staticClass:"list mt10"},t._l(t.learnLogList,(function(s){return e("div",{staticClass:"cell"},[e("div",{staticClass:"cell-top flex-between"},[e("div",{staticClass:"title"},[e("span",[t._v("今天我在猩听译平台学习了"+t._s(s.days)+"天")])]),e("div",{staticClass:"time"},[t._v(t._s(s.created_at))])]),e("div",{staticClass:"content"},[t._v("\n\t\t\t\t我已经听写了"+t._s(s.dictationNum)+"篇文章，制作了"+t._s(s.subtitles)+"个字幕，朗读了"+t._s(s.readNum)+"篇文章，翻译了"+t._s(s.translationNum)+"篇文章，添加了"+t._s(s.wordsNum)+"个生词\n\t\t\t")])])})),0)])},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"top-box"},[e("span",[t._v("打卡记录")])])}],a={name:"sign-log",data:function(){return{learnLogList:[]}},created:function(){console.log(this.$route.query),this.getLearnLogList()},methods:{getLearnLogList:function(){var t=this,s={};s.learn_time=this.$route.query.date,this.$request("/user/learnLog",s,"POST").then((function(s){t.learnLogList=s.content.learnLogList})).catch((function(t){}))}}},c=a,o=(e("d480"),e("5511")),r=Object(o["a"])(c,n,i,!1,null,"679efc34",null);s["default"]=r.exports},b86d:function(t,s,e){},d480:function(t,s,e){"use strict";var n=e("b86d"),i=e.n(n);i.a}}]);