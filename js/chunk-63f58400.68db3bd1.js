(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63f58400"],{"18ae":function(t,e,s){"use strict";var i=s("ae46"),o=s.n(i);o.a},"221f":function(t,e,s){"use strict";var i=s("8ce8"),o=s.n(i);o.a},"54e2":function(t,e,s){},"6fde":function(t,e,s){"use strict";var i=s("54e2"),o=s.n(i);o.a},"8ce8":function(t,e,s){},ae46:function(t,e,s){},b2e7:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"el-fade-in"}},[i("div",{staticClass:"overlay",on:{mousewheel:function(t){t.preventDefault()}}},[i("div",{staticClass:"overlay-box"},[i("div",{staticClass:"pay-select"},[i("img",{attrs:{src:s("6e68"),alt:""},on:{click:t.closed}}),i("div",{staticClass:"title"},[t._v("\n\t\t\t\t\t选择支付方式\n\t\t\t\t")]),i("div",{staticClass:"pay-style"},[i("div",{on:{click:function(e){return t.select(2)}}},[i("img",{attrs:{src:s("e6d9"),alt:""}}),i("span",{staticClass:"ml15"},[t._v("微信支付")]),"2"==t.selected?i("img",{staticClass:"ml20",attrs:{src:s("fff0"),alt:""}}):i("img",{staticClass:"ml20",attrs:{src:s("8490"),alt:""}})]),i("div",{on:{click:function(e){return t.select(1)}}},[i("img",{attrs:{src:s("f99e"),alt:""}}),i("span",{staticClass:"ml15"},[t._v("支付宝支付")]),"1"==t.selected?i("img",{staticClass:"ml20",attrs:{src:s("fff0"),alt:""}}):i("img",{staticClass:"ml20",attrs:{src:s("8490"),alt:""}})]),i("el-button",{attrs:{type:"primary"},on:{click:t.sure}},[t._v("确定")])],1)])])])])},o=[],a={name:"pay-select",props:{content:String},data:function(){return{selected:"2"}},methods:{closed:function(){this.$emit("update:visible",!1)},select:function(t){this.selected=t},sure:function(){this.closed(),this.$emit("sure",this.selected)}},created:function(){},mounted:function(){}},n=a,c=(s("6fde"),s("4e82")),r=Object(c["a"])(n,i,o,!1,null,"9ea3c8da",null);e["a"]=r.exports},e4f8:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"course-detail"},[s("div",{staticClass:"breadcrumb"},[s("div",[t._v("当前位置：")]),s("div",{on:{click:t.toHome}},[t._v("首页"),s("i",{staticClass:"el-icon-arrow-right"})]),s("div",{on:{click:t.toCourse}},[t._v("精品课程"),s("i",{staticClass:"el-icon-arrow-right"})]),s("div",[t._v("详情")])]),s("div",{staticClass:"detail-card flex-between"},[s("div",{staticClass:"card-left"},[s("img",{attrs:{src:t.goodCourseInfo.image,alt:""}})]),s("div",{staticClass:"card-right"},[s("div",{staticClass:"content"},[t._v("\n\t\t\t\t"+t._s(t.goodCourseInfo.title)+"\n\t\t\t")]),s("div",{staticClass:"tips"},[s("span",[t._v(t._s(t.goodCourseInfo.created_at))]),s("span",{staticStyle:{"margin-left":"1.875rem"}},[t._v(t._s(t.goodCourseInfo.buynum)+"人已购买")])]),s("div",{staticClass:"price"},[t._v("￥"+t._s(t.goodCourseInfo.price))]),s("div",{staticClass:"buy"},[1==t.goodCourseInfo.orderStatus?s("el-button",{attrs:{type:"primary"},on:{click:t.buy}},[t._v("立即购买")]):s("el-button",{attrs:{type:"primary"},on:{click:t.toCourseMaterial}},[t._v("查看课程素材")])],1)])]),s("div",{staticClass:"detail-box mt20"},[s("div",{staticClass:"left"},[s("div",{staticClass:"left-title"},[t._v("\n\t\t\t\t课程简介\n\t\t\t")]),s("div",{staticClass:"left-content"},[t._v("\n\t\t\t\t"+t._s(t.goodCourseInfo.description)+"\n\t\t\t")])]),s("div",{staticClass:"right"},[s("hotCourse",{attrs:{title:"热门课程",hots:t.hots},on:{toDetail:t.toDetail}})],1)]),t.paySelectDialogShow?s("paySelectDialog",{attrs:{visible:t.paySelectDialogShow},on:{"update:visible":function(e){t.paySelectDialogShow=e},sure:t.sure}}):t._e(),t.payQRCodeShow?s("payQRCode",{attrs:{visible:t.payQRCodeShow,content:t.wxPayUrl},on:{"update:visible":function(e){t.payQRCodeShow=e}}}):t._e()],1)},o=[],a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hot-card"},[s("div",{staticClass:"hot-title"},[t._v("\n\t\t"+t._s(t.title)+"\n\t")]),t._l(t.hots,(function(e){return s("div",{staticClass:"hot-cell",on:{click:function(s){return t.toDetail(e.id)}}},[s("div",{staticClass:"title"},[t._v("\n\t\t\t"+t._s(e.title)+"\n\t\t")]),s("div",{staticClass:"time"},[s("span",[t._v(t._s(e.updated_at)+"更新")]),s("span",{staticStyle:{"margin-left":"0.9375rem"}},[t._v(t._s(e.buynum)+"人已购买")])])])}))],2)},n=[],c={name:"hotCourse",props:{title:String,hots:Array},data:function(){return{}},created:function(){},mounted:function(){},methods:{toDetail:function(t){this.$emit("toDetail",t)}}},r=c,l=(s("18ae"),s("4e82")),u=Object(l["a"])(r,a,n,!1,null,"0d5f38c5",null),d=u.exports,f=s("b2e7"),h=s("c559"),p={name:"courselDetail",components:{hotCourse:d,paySelectDialog:f["a"],payQRCode:h["a"]},watch:{$route:function(t,e){this.getDetail()}},data:function(){return{hots:[],goodCourseInfo:{},signBoxShow:!1,orderId:0,paySelectDialogShow:!1,payType:1,wxPayUrl:"",payQRCodeShow:!1}},created:function(){this.getDetail(),this.getHots(),this.getTagList()},methods:{select:function(t){this.active=t},toHome:function(){this.$router.push({path:"/"})},toCourse:function(){this.$router.push({path:"/course"})},toCourseMaterial:function(){this.$router.push({path:"/course/list"})},getDetail:function(){var t=this,e={};e.id=this.$route.params.id,this.$request("/goodCourse/goodCourseInfo",e,"POST").then((function(e){t.goodCourseInfo=e.content.goodCourseInfo})).catch((function(t){}))},getHots:function(){var t=this;this.$request("/goodCourse/positionList",{},"POST").then((function(e){t.hots=e.content.positionList})).catch((function(t){}))},toDetail:function(t){this.$router.push({path:"/course/detail/".concat(t)})},getTagList:function(){var t=this;this.$request("/source/dictationTagList",{},"POST").then((function(e){var s=e.content.dictationTag;t.$store.commit("setTagList",s)})).catch((function(t){}))},buy:function(){this.paySelectDialogShow=!0},sure:function(t){this.payType=t,this.makeOrder()},makeOrder:function(){var t=this,e={};e.course_id=this.$route.params.id,this.$request("/order/courseOrder",e,"POST").then((function(e){t.orderId=e.content.addCourseOrder,t.pay()})).catch((function(t){}))},pay:function(){var t=this,e={};e.pay_id=this.payType,e.order_id=this.orderId,e.type=2,e.pay_client=2,this.$request("/pay/getPayCode",e,"POST").then((function(e){e.content.html&&(t.wxPayUrl=e.content.html,t.payQRCodeShow=!0)})).catch((function(t){}))}}},v=p,C=(s("221f"),Object(l["a"])(v,i,o,!1,null,"3fb837d0",null));e["default"]=C.exports}}]);