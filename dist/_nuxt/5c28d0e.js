(window.webpackJsonp=window.webpackJsonp||[]).push([[25,16],{615:function(t,e,r){var content=r(620);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(9).default)("273939c8",content,!0,{sourceMap:!1})},619:function(t,e,r){"use strict";r(615)},620:function(t,e,r){var o=r(8)(!1);o.push([t.i,".card-border[data-v-27f72e08]{border:1px solid #c4cdd5}.card-color[data-v-27f72e08]{display:inline-block;border:2px solid #fff!important;width:20px;height:20px;border-radius:50%}.bg-blur[data-v-27f72e08]{-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px)}.card-control[data-v-27f72e08]{cursor:auto!important}",""]),t.exports=o},621:function(t,e,r){"use strict";r.r(e);var o=r(578),l=r(231),n=r(78),c=r(585),d=r(598),m=r(154),v=r(349),f=r(31),_=r(68),h=r(599),x=r(59),y=(r(45),{data:function(){return{active:!0}},props:{item:{type:Object,default:function(){return{img:1,id:1,rival:"12",title:"Baby Don't Cry Shampoo",likes:1,colors:["primary","red","black","green"],rate:"4.5",price:25,sizes:["sm","md","lg","xl"]}}},miniSlider:{default:!1,type:Boolean},smallText:{default:!1,type:Boolean}},methods:{openPreviewDialog:function(){this.$store.commit("M_setPreviewDialog",{status:!0,item:this.item})},redirectToProductDetail:function(t){this.$router.push({path:"/products/".concat(t)})}}}),C=(r(619),r(23)),component=Object(C.a)(y,(function(){var t=this,e=t._self._c;return e(l.a,{staticClass:"card-border rounded-lg",class:[t.miniSlider?"ma-2 ma-md-3":"mx-auto"],attrs:{flat:"","max-width":"340","max-height":"495"}},[e("div",{staticClass:"image d-flex align-center justify-center"},[e(d.a,{scopedSlots:t._u([{key:"default",fn:function(l){var d=l.hover;return[e(v.a,{staticClass:"rounded-lg pointer",attrs:{src:r(200)("./".concat(t.item.img,".png")),"aspect-ratio":"1"},on:{click:function(e){return t.redirectToProductDetail(t.item.id)}},scopedSlots:t._u([{key:"placeholder",fn:function(){return[e(h.a)]},proxy:!0}],null,!0)},[t._v(" "),e(_.a,{staticClass:"s transition-fast-in-fast-out",class:{"bg-blur":d},attrs:{height:"100%",color:"transparent"}},[e(n.c,{staticClass:"d-flex justify-space-between"},[e("div",{staticClass:"rival"},[e(c.a,{attrs:{label:"",color:"primary darken-2",small:""},on:{click:function(t){t.stopPropagation()}}},[e("span",{staticClass:"font-weight-bold"},[t._v("-"+t._s(t.item.rival)+"%")])])],1),t._v(" "),e("div",{staticClass:"hidden-xs-only card-control d-sm-flex align-center justify-center flex-column",on:{click:function(t){t.stopPropagation()}}},[e(x.g,[d?e("div",{staticClass:"add-to-favourite"},[e(o.a,{attrs:{icon:"",small:"",width:"30",height:"30"},on:{click:function(t){t.stopPropagation()}}},[e(m.a,{attrs:{size:"20"}},[t._v("mdi-heart-outline")])],1)],1):t._e()]),t._v(" "),e(x.i,[d?e("div",{staticClass:"view-card-details mt-1"},[e(o.a,{attrs:{icon:"",small:"",width:"30",height:"30"},on:{click:function(e){return e.stopPropagation(),t.openPreviewDialog.apply(null,arguments)}}},[e(m.a,{attrs:{size:"20"}},[t._v("mdi-eye-outline")])],1)],1):t._e()])],1)])],1)],1)]}}])})],1),t._v(" "),e("div",{staticClass:"card-content pa-3"},[e("div",{staticClass:"card-title"},[e(f.c,{staticClass:"text-body-1 font-weight-medium",class:{"text-body-2":(t.miniSlider||t.smallText)&&t.$vuetify.breakpoint.smAndDown}},[t._v(t._s(t.item.title))])],1),t._v(" "),e("div",{staticClass:"card-content-details d-flex align-center justify-space-between"},[e("div",{staticClass:"likes"},[e(m.a,{attrs:{size:"20",color:"primary"}},[t._v("mdi-thumb-up-outline")]),t._v(" "),e("span",{staticClass:"text-body-2"},[t._v(t._s(t.item.likes))])],1),t._v(" "),e("div",{staticClass:"colors d-flex align-center"},[t._l(t.item.colors.slice(0,3),(function(r,o){return e("span",{key:o,staticClass:"card-color ml-n1",class:r,style:[t.$vuetify.breakpoint.smOnly?{width:"15px !important",height:"15px !important"}:""]})})),t._v(" "),t.item.colors.length>3?e("span",{staticClass:"text-caption ml-1"},[t._v("+"+t._s(t.item.colors.length-3))]):t._e()],2)]),t._v(" "),e("div",{staticClass:"card-content-rating-price d-flex align-center justify-space-between"},[e("div",{staticClass:"rating d-flex align-center"},[e(m.a,{attrs:{size:"17",color:"rgb(237, 108, 2)"}},[t._v("mdi-star")]),t._v(" "),e("span",{staticClass:"text-body-2 ml-1"},[t._v(t._s(t.item.rate))])],1),t._v(" "),e("div",{staticClass:"price text-body-1 font-w-600",staticStyle:{color:"rgb(33, 43, 54)"}},[t._v("\n        US$ "),e("span",[t._v(t._s(t.item.price))])])]),t._v(" "),e("div",{staticClass:"card-action mt-2"},[e(o.a,{staticClass:"rounded-lg",attrs:{block:"",color:"primary darken-2",dark:"",height:"40",depressed:""}},[e("span",{staticClass:"text-capitalize"},[t._v("add to cart")])])],1)])])}),[],!1,null,"27f72e08",null);e.default=component.exports},645:function(t,e,r){var content=r(684);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(9).default)("73326a9c",content,!0,{sourceMap:!1})},683:function(t,e,r){"use strict";r(645)},684:function(t,e,r){var o=r(8)(!1);o.push([t.i,".image-border[data-v-a9d9ba18]{border:1px solid #c4cdd5}.active-mini-image[data-v-a9d9ba18]{background-color:rgba(22,28,36,.48);border:3px solid #0d44fb}",""]),t.exports=o},714:function(t,e,r){"use strict";r.r(e);var o=r(578),l=r(601),n=r(154),c=r(349),d=r(600),m=(r(45),r(245)),v={data:function(){return{items:m}}},f=(r(683),r(23)),component=Object(f.a)(v,(function(){var t=this,e=t._self._c;return e("section",{attrs:{id:"c-top-collections"}},[t._m(0),t._v(" "),e(d.a,{staticClass:"mt-6"},t._l(t.items.slice(0,6),(function(t,r){return e(l.a,{key:r,attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[e("BaseCardItem",{attrs:{item:t}})],1)})),1),t._v(" "),e("div",{staticClass:"view-all d-flex justify-end mt-2"},[e(o.a,{staticClass:"text-capitalize font-w-600",attrs:{nuxt:"",to:"/products",color:"primary darken-2",text:""}},[e("span",[t._v("view all")]),t._v(" "),e(n.a,{attrs:{right:"",size:"25"}},[t._v("mdi-chevron-right")])],1)],1),t._v(" "),e("div",{staticClass:"view-image mt-8"},[e(c.a,{staticClass:"rounded-lg zoom-img-on-hover",attrs:{src:r(355),"min-height":"160"}})],1)],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"top-collections-header"},[e("div",{staticClass:"text-h4 text-sm-h2 text-center font-weight-bold text-head"},[t._v("\n      Top Collections\n    ")]),t._v(" "),e("div",{staticClass:"text-body-1 text-center text-subhead mt-4"},[t._v("\n      Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting\n      Industry.\n    ")])])}],!1,null,"a9d9ba18",null);e.default=component.exports;installComponents(component,{BaseCardItem:r(621).default})}}]);