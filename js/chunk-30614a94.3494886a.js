(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-30614a94"],{"3d48":function(t,s,n){"use strict";var a=n("78a3"),e=n.n(a);e.a},"770a":function(t,s,n){"use strict";n.r(s);var a=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"sign-log"},[t._m(0),n("div",{staticClass:"list mt10"},t._l(t.learnLogList,(function(s){return n("div",{staticClass:"cell"},[n("div",{staticClass:"cell-top flex-between"},[n("div",{staticClass:"title"},[n("span",[t._v("今天我在猩听译平台学习了"+t._s(s.days)+"天")])]),n("div",{staticClass:"time"},[t._v(t._s(s.created_at))])]),n("div",{staticClass:"content"},[t._v("\n\t\t\t\t我已经听写了"+t._s(s.dictationNum)+"篇文章，制作了"+t._s(s.subtitles)+"个字幕，朗读了"+t._s(s.readNum)+"篇文章，翻译了"+t._s(s.translationNum)+"篇文章，添加了"+t._s(s.wordsNum)+"个生词\n\t\t\t")])])})),0)])},e=[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"top-box"},[n("span",[t._v("打卡记录")])])}],i={name:"sign-log",data:function(){return{learnLogList:[]}},created:function(){this.getLearnLogList()},methods:{getLearnLogList:function(){var t=this,s={};this.$request("/user/learnLog",s,"POST").then((function(s){t.learnLogList=s.content.learnLogList})).catch((function(t){}))}}},c=i,l=(n("3d48"),n("4e82")),o=Object(l["a"])(c,a,e,!1,null,"0970dd5a",null);s["default"]=o.exports},"78a3":function(t,s,n){}}]);