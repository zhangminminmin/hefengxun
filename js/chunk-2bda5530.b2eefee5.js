(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2bda5530"],{"18ae":function(t,e,i){"use strict";var s=i("e691"),o=i.n(s);o.a},"6fde":function(t,e,i){"use strict";var s=i("9af5"),o=i.n(s);o.a},"781d":function(t,e,i){},"9af5":function(t,e,i){},b2e7:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"el-fade-in"}},[s("div",{staticClass:"overlay",on:{mousewheel:function(t){t.preventDefault()}}},[s("div",{staticClass:"overlay-box"},[s("div",{staticClass:"pay-select"},[s("img",{attrs:{src:i("6e68"),alt:""},on:{click:t.closed}}),s("div",{staticClass:"title"},[t._v("\n\t\t\t\t\t选择支付方式\n\t\t\t\t")]),s("div",{staticClass:"pay-style"},[s("div",{on:{click:function(e){return t.select(2)}}},[s("img",{attrs:{src:i("e6d9"),alt:""}}),s("span",{staticClass:"ml15"},[t._v("微信支付")]),"2"==t.selected?s("img",{staticClass:"ml20",attrs:{src:i("fff0"),alt:""}}):s("img",{staticClass:"ml20",attrs:{src:i("8490"),alt:""}})]),s("div",{on:{click:function(e){return t.select(1)}}},[s("img",{attrs:{src:i("f99e"),alt:""}}),s("span",{staticClass:"ml15"},[t._v("支付宝支付")]),"1"==t.selected?s("img",{staticClass:"ml20",attrs:{src:i("fff0"),alt:""}}):s("img",{staticClass:"ml20",attrs:{src:i("8490"),alt:""}})]),s("el-button",{attrs:{type:"primary"},on:{click:t.sure}},[t._v("确定")])],1)])])])])},o=[],a={name:"pay-select",props:{content:String},data:function(){return{selected:"2"}},methods:{closed:function(){this.$emit("update:visible",!1)},select:function(t){this.selected=t},sure:function(){this.closed(),this.$emit("sure",this.selected)}},created:function(){},mounted:function(){}},n=a,c=(i("6fde"),i("5511")),r=Object(c["a"])(n,s,o,!1,null,"9ea3c8da",null);e["a"]=r.exports},b511:function(t,e,i){"use strict";var s=i("781d"),o=i.n(s);o.a},e4f8:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"course-detail"},[i("div",{staticClass:"breadcrumb"},[i("div",[t._v("当前位置：")]),i("div",{on:{click:t.toHome}},[t._v("首页"),i("i",{staticClass:"el-icon-arrow-right"})]),i("div",{on:{click:t.toCourse}},[t._v("精品课程"),i("i",{staticClass:"el-icon-arrow-right"})]),i("div",[t._v("详情")])]),i("div",{staticClass:"detail-card flex-between"},[i("div",{staticClass:"card-left"},[i("img",{attrs:{src:t.goodCourseInfo.image,alt:""}})]),i("div",{staticClass:"card-right"},[i("div",{staticClass:"content"},[t._v("\n\t\t\t\t"+t._s(t.goodCourseInfo.title)+"\n\t\t\t")]),i("div",{staticClass:"tips"},[i("span",[t._v(t._s(t.goodCourseInfo.created_at))]),i("span",{staticStyle:{"margin-left":"1.875rem"}},[t._v(t._s(t.goodCourseInfo.buynum)+"人已购买")])]),i("div",{staticClass:"price"},[t._v("￥"+t._s(t.goodCourseInfo.price))]),i("div",{staticClass:"buy"},[1==t.goodCourseInfo.orderStatus?i("el-button",{attrs:{type:"primary"},on:{click:t.buy}},[t._v("立即购买")]):i("el-button",{attrs:{type:"primary"},on:{click:t.toCourseMaterial}},[t._v("查看课程素材")])],1)])]),i("div",{staticClass:"detail-box mt20"},[i("div",{staticClass:"left"},[i("div",{staticClass:"left-title"},[t._v("\n\t\t\t\t课程简介\n\t\t\t")]),i("div",{staticClass:"left-content"},[t._v("\n\t\t\t\t"+t._s(t.goodCourseInfo.description)+"\n\t\t\t")])]),i("div",{staticClass:"right"},[i("hotCourse",{attrs:{title:"热门课程",hots:t.hots},on:{toDetail:t.toDetail}})],1)]),t.paySelectDialogShow?i("paySelectDialog",{attrs:{visible:t.paySelectDialogShow},on:{"update:visible":function(e){t.paySelectDialogShow=e},sure:t.sure}}):t._e(),t.payQRCodeShow?i("payQRCode",{attrs:{visible:t.payQRCodeShow,content:t.wxPayUrl},on:{"update:visible":function(e){t.payQRCodeShow=e}}}):t._e(),t.payPopShow?i("payPop",{attrs:{visible:t.payPopShow,title:t.payTitle,type:t.payTitleType},on:{"update:visible":function(e){t.payPopShow=e}}}):t._e()],1)},o=[],a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hot-card"},[i("div",{staticClass:"hot-title"},[t._v("\n\t\t"+t._s(t.title)+"\n\t")]),t._l(t.hots,(function(e){return i("div",{staticClass:"hot-cell",on:{click:function(i){return t.toDetail(e.id)}}},[i("div",{staticClass:"title"},[t._v("\n\t\t\t"+t._s(e.title)+"\n\t\t")]),i("div",{staticClass:"time"},[i("span",[t._v(t._s(e.updated_at)+"更新")]),i("span",{staticStyle:{"margin-left":"0.9375rem"}},[t._v(t._s(e.buynum)+"人已购买")])])])}))],2)},n=[],c={name:"hotCourse",props:{title:String,hots:Array},data:function(){return{}},created:function(){},mounted:function(){},methods:{toDetail:function(t){this.$emit("toDetail",t)}}},r=c,l=(i("18ae"),i("5511")),u=Object(l["a"])(r,a,n,!1,null,"0d5f38c5",null),d=u.exports,h=i("b2e7"),p=i("c559"),f=i("35c5"),v={name:"courselDetail",components:{hotCourse:d,paySelectDialog:h["a"],payQRCode:p["a"],payPop:f["a"]},watch:{$route:function(t,e){this.getDetail()}},data:function(){return{hots:[],goodCourseInfo:{},signBoxShow:!1,orderId:0,paySelectDialogShow:!1,payType:1,wxPayUrl:"",payQRCodeShow:!1,payPopShow:!1,payTitle:"支付成功",payTitleType:"success",orderTimer:null}},created:function(){this.getDetail(),this.getHots(),this.getTagList()},methods:{select:function(t){this.active=t},toHome:function(){this.$router.push({path:"/"})},toCourse:function(){this.$router.push({path:"/course"})},toCourseMaterial:function(){this.$router.push({path:"/course/list"})},getDetail:function(){var t=this,e={};e.id=this.$route.params.id,this.$request("/goodCourse/goodCourseInfo",e,"POST").then((function(e){t.goodCourseInfo=e.content.goodCourseInfo})).catch((function(t){}))},getHots:function(){var t=this;this.$request("/goodCourse/positionList",{},"POST").then((function(e){t.hots=e.content.positionList})).catch((function(t){}))},toDetail:function(t){this.$router.push({path:"/course/detail/".concat(t)})},getTagList:function(){var t=this;this.$request("/source/dictationTagList",{},"POST").then((function(e){var i=e.content.dictationTag;t.$store.commit("setTagList",i)})).catch((function(t){}))},buy:function(){this.paySelectDialogShow=!0},sure:function(t){this.payType=t,this.makeOrder()},makeOrder:function(){var t=this,e={};e.course_id=this.$route.params.id,this.$request("/order/courseOrder",e,"POST").then((function(e){t.orderId=e.content.addCourseOrder,t.pay()})).catch((function(t){}))},pay:function(){var t=this,e={};e.pay_id=this.payType,e.order_id=this.orderId,e.type=2,e.pay_client=2,this.$request("/pay/getPayCode",e,"POST").then((function(e){e.content.html&&(t.wxPayUrl=e.content.html,t.payQRCodeShow=!0,t.checkOrderCycle(t.orderId))})).catch((function(t){}))},checkOrderCycle:function(t){var e=this,i={};i.order_id=t,i.type=2,this.orderTimer=setInterval((function(){0!=e.payQRCodeShow?e.$request("/pay/checkOrder",i,"POST").then((function(t){"1"==t.content||(e.payQRCodeShow=!1,e.payPopShow=!0,clearInterval(e.orderTimer),e.orderTimer=null,e.getDetail())})).catch((function(t){})):e.orderTimer&&(clearInterval(e.orderTimer),e.orderTimer=null)}),2e3)}}},y=v,C=(i("b511"),Object(l["a"])(y,s,o,!1,null,"7cafc6f4",null));e["default"]=C.exports},e691:function(t,e,i){}}]);