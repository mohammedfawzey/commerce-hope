(window.webpackJsonp=window.webpackJsonp||[]).push([[25,16],{618:function(t,e,r){var content=r(625);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(9).default)("50f8f028",content,!0,{sourceMap:!1})},624:function(t,e,r){"use strict";r(618)},625:function(t,e,r){var o=r(8)(!1);o.push([t.i,".card-border[data-v-fdba890c]{border:1px solid #c4cdd5}.card-color[data-v-fdba890c]{display:inline-block;border:2px solid #fff!important;width:20px;height:20px;border-radius:50%}.bg-blur[data-v-fdba890c]{-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px)}.card-control[data-v-fdba890c]{cursor:auto!important}",""]),t.exports=o},627:function(t,e,r){"use strict";r.r(e);var o=r(584),l=r(231),c=r(78),n=r(591),d=r(604),m=r(155),f=r(351),v=r(31),_=r(68),h=r(605),x=r(61),y=(r(44),{data:function(){return{active:!0}},props:{item:{type:Object,default:function(){return{img:1,id:1,rival:"12",title:"Baby Don't Cry Shampoo",likes:1,colors:["primary","red","black","green"],rate:"4.5",price:25,sizes:["sm","md","lg","xl"]}}},miniSlider:{default:!1,type:Boolean},smallText:{default:!1,type:Boolean}},methods:{openPreviewDialog:function(){this.$store.commit("M_setPreviewDialog",{status:!0,item:this.item})},redirectToProductDetail:function(t){this.$router.push({path:"/products/".concat(t)})},addToCart:function(){this.$store.commit("M_addToCart",this.item)}}}),C=(r(624),r(23)),component=Object(C.a)(y,(function(){var t=this,e=t._self._c;return e(l.a,{staticClass:"card-border rounded-lg",class:[t.miniSlider?"ma-2 ma-md-3":"mx-auto"],attrs:{flat:"","max-width":"340","max-height":"495"}},[e("div",{staticClass:"image d-flex align-center justify-center"},[e(d.a,{scopedSlots:t._u([{key:"default",fn:function(l){var d=l.hover;return[e(f.a,{staticClass:"rounded-lg rounded-b-0 pointer",attrs:{src:r(113)("./".concat(t.item.img,".png")),"aspect-ratio":"1"},on:{click:function(e){return t.redirectToProductDetail(t.item.id)}},scopedSlots:t._u([{key:"placeholder",fn:function(){return[e(h.a,{staticClass:"custom_image_loader_height",attrs:{type:"image","min-height":"350"}})]},proxy:!0}],null,!0)},[t._v(" "),e(_.a,{staticClass:"s transition-fast-in-fast-out",class:{"bg-blur":d},attrs:{height:"100%",color:"transparent"}},[e(c.c,{staticClass:"d-flex justify-space-between"},[e("div",{staticClass:"rival"},[e(n.a,{attrs:{label:"",color:"primary darken-2",small:""},on:{click:function(t){t.stopPropagation()}}},[e("span",{staticClass:"font-weight-bold"},[t._v("-"+t._s(t.item.rival)+"%")])])],1),t._v(" "),e("div",{staticClass:"hidden-xs-only card-control d-sm-flex align-center justify-center flex-column",on:{click:function(t){t.stopPropagation()}}},[t._e(),t._v(" "),e(x.h,[d?e("div",{staticClass:"view-card-details mt-1"},[e(o.a,{attrs:{icon:"",small:"",width:"30",height:"30"},on:{click:function(e){return e.stopPropagation(),t.openPreviewDialog.apply(null,arguments)}}},[e(m.a,{attrs:{size:"20"}},[t._v("mdi-eye-outline")])],1)],1):t._e()])],1)])],1)],1)]}}])})],1),t._v(" "),e("div",{staticClass:"card-content pa-3"},[e("div",{staticClass:"card-title"},[e(v.c,{staticClass:"text-body-1 font-weight-medium",class:{"text-body-2":(t.miniSlider||t.smallText)&&t.$vuetify.breakpoint.smAndDown}},[t._v(t._s(t.item.title))])],1),t._v(" "),e("div",{staticClass:"card-content-details d-flex align-center justify-space-between"},[e("div",{staticClass:"likes"},[e(m.a,{attrs:{size:"20",color:"primary"}},[t._v("mdi-thumb-up-outline")]),t._v(" "),e("span",{staticClass:"text-body-2"},[t._v(t._s(t.item.likes))])],1),t._v(" "),e("div",{staticClass:"colors d-flex align-center"},[t._l(t.item.colors.slice(0,3),(function(r,o){return e("span",{key:o,staticClass:"card-color ml-n1",class:r,style:[t.$vuetify.breakpoint.smOnly?{width:"15px !important",height:"15px !important"}:""]})})),t._v(" "),t.item.colors.length>3?e("span",{staticClass:"text-caption ml-1"},[t._v("+"+t._s(t.item.colors.length-3))]):t._e()],2)]),t._v(" "),e("div",{staticClass:"card-content-rating-price d-flex align-center justify-space-between"},[e("div",{staticClass:"rating d-flex align-center"},[e(m.a,{attrs:{size:"17",color:"rgb(237, 108, 2)"}},[t._v("mdi-star")]),t._v(" "),e("span",{staticClass:"text-body-2 ml-1"},[t._v(t._s(t.item.rate))])],1),t._v(" "),e("div",{staticClass:"price text-body-1 font-w-600",staticStyle:{color:"rgb(33, 43, 54)"}},[t._v("\n        US$ "),e("span",[t._v(t._s(t.item.price))])])]),t._v(" "),e("div",{staticClass:"card-action mt-2"},[e(o.a,{staticClass:"rounded-lg",attrs:{block:"",color:"primary darken-2",dark:"",height:"40",depressed:""},on:{click:t.addToCart}},[e("span",{staticClass:"text-capitalize"},[t._v("add to cart")])])],1)])])}),[],!1,null,"fdba890c",null);e.default=component.exports},657:function(t,e,r){t.exports=r.p+"img/view.f911224.png"},658:function(t,e,r){var content=r(695);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(9).default)("36fe7eec",content,!0,{sourceMap:!1})},694:function(t,e,r){"use strict";r(658)},695:function(t,e,r){var o=r(8)(!1);o.push([t.i,".image-border[data-v-5c318494]{border:1px solid #c4cdd5}.active-mini-image[data-v-5c318494]{background-color:rgba(22,28,36,.48);border:3px solid #0d44fb}",""]),t.exports=o},725:function(t,e,r){"use strict";r.r(e);var o=r(584),l=r(607),c=r(155),n=r(351),d=r(606),m=(r(44),r(243)),f={data:function(){return{items:m}}},v=(r(694),r(23)),component=Object(v.a)(f,(function(){var t=this,e=t._self._c;return e("section",{attrs:{id:"c-top-collections"}},[t._m(0),t._v(" "),e(d.a,{staticClass:"mt-6"},t._l(t.items.slice(0,6),(function(t,r){return e(l.a,{key:r,attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[e("BaseCardItem",{attrs:{item:t}})],1)})),1),t._v(" "),e("div",{staticClass:"view-all d-flex justify-end mt-2"},[e(o.a,{staticClass:"text-capitalize font-w-600",attrs:{nuxt:"",to:"/products",color:"primary darken-2",text:""}},[e("span",[t._v("view all")]),t._v(" "),e(c.a,{attrs:{right:"",size:"25"}},[t._v("mdi-chevron-right")])],1)],1),t._v(" "),e("div",{staticClass:"view-image mt-8"},[e(n.a,{staticClass:"rounded-lg zoom-img-on-hover",attrs:{src:r(657),"lazy-src":r(657),"min-height":"160"}})],1)],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"top-collections-header"},[e("div",{staticClass:"text-h4 text-sm-h2 text-center font-weight-bold text-head"},[t._v("\n      Top Collections\n    ")]),t._v(" "),e("div",{staticClass:"text-body-1 text-center text-subhead mt-4"},[t._v("\n      Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting\n      Industry.\n    ")])])}],!1,null,"5c318494",null);e.default=component.exports;installComponents(component,{BaseCardItem:r(627).default})}}]);