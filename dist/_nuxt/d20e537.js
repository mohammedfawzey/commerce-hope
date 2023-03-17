(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{634:function(t,e,n){"use strict";n(19),n(52),n(4),n(85);var r=n(59),l=n(115),c=n(0),o=n(3),d=Object(o.a)(Object(l.a)("stepper","v-stepper-content","v-stepper"));e.a=d.extend().extend({name:"v-stepper-content",inject:{isVerticalProvided:{from:"isVertical"}},props:{step:{type:[Number,String],required:!0}},data:function(){return{height:0,isActive:null,isReverse:!1,isVertical:this.isVerticalProvided}},computed:{computedTransition:function(){return(this.$vuetify.rtl?!this.isReverse:this.isReverse)?r.j:r.k},styles:function(){return this.isVertical?{height:Object(c.g)(this.height)}:{}}},watch:{isActive:function(t,e){t&&null==e?this.height="auto":this.isVertical&&(this.isActive?this.enter():this.leave())}},mounted:function(){this.$refs.wrapper.addEventListener("transitionend",this.onTransition,!1),this.stepper&&this.stepper.register(this)},beforeDestroy:function(){this.$refs.wrapper.removeEventListener("transitionend",this.onTransition,!1),this.stepper&&this.stepper.unregister(this)},methods:{onTransition:function(t){this.isActive&&"height"===t.propertyName&&(this.height="auto")},enter:function(){var t=this,e=0;requestAnimationFrame((function(){e=t.$refs.wrapper.scrollHeight})),this.height=0,setTimeout((function(){return t.isActive&&(t.height=e||"auto")}),450)},leave:function(){var t=this;this.height=this.$refs.wrapper.clientHeight,setTimeout((function(){return t.height=0}),10)},toggle:function(t,e){this.isActive=t.toString()===this.step.toString(),this.isReverse=e}},render:function(t){var e={staticClass:"v-stepper__content"},n={staticClass:"v-stepper__wrapper",style:this.styles,ref:"wrapper"};this.isVertical||(e.directives=[{name:"show",value:this.isActive}]);var r=t("div",n,[this.$slots.default]),content=t("div",e,[r]);return t(this.computedTransition,{on:this.$listeners},[content])}})},704:function(t,e,n){"use strict";n.r(e);var r=n(578),l=n(601),c=n(584),o=n(154),d=n(349),v=n(31),h=n(600),_=n(634),m=(n(45),n(245)),f={data:function(){return{items:m}}},x=n(23),component=Object(x.a)(f,(function(){var t=this,e=t._self._c;return e(_.a,{staticClass:"px-0",attrs:{step:"1",id:"cart"}},[e("div",{staticClass:"step-head px-4"},[e("span",{staticClass:"text-h5 text-head font-weight-bold"},[t._v("Cart ")]),t._v(" "),e("span",{staticClass:"font-weight-medium text-body-1",staticStyle:{color:"rgb(99, 115, 129)"}},[t._v("(0 Items)")])]),t._v(" "),e("div",{staticClass:"with-items mt-sm-8"},[e("div",{staticClass:"preview hidden-xs-only pr-3"},[e(h.a,{staticClass:"primary darken-1 white--text text-caption font-w-600",attrs:{id:"preview-item"}},[e(l.a,{staticClass:"text-left d-flex align-center",attrs:{cols:"4",lg:"5"}},[e("span",{staticClass:"pl-3"},[t._v(" Product ")])]),t._v(" "),e(l.a,{staticClass:"d-flex align-center",attrs:{cols:"2"}},[e("span",[t._v("Price")])]),t._v(" "),e(l.a,{staticClass:"d-flex align-center",attrs:{cols:"2"}},[e("span",[t._v("Quantity")])]),t._v(" "),e(l.a,{staticClass:"d-flex align-center",attrs:{cols:"2"}},[e("span",[t._v(" Total Price")])]),t._v(" "),e(l.a,{staticClass:"d-flex align-center",attrs:{cols:"2",lg:"1"}})],1)],1),t._v(" "),e("div",{staticClass:"items pr-3 mt-3"},[t._l(t.items.slice(0,3),(function(_,m){return[e(c.a,{key:"divider-".concat(m),staticClass:"my-4"}),t._v(" "),e(h.a,{key:m},[e(l.a,[e(h.a,[e(l.a,{attrs:{cols:"12",sm:"4",lg:"5"}},[e("div",{staticClass:"pl-3 d-flex align-center"},[e(d.a,{staticClass:"border-color pl-2 rounded-lg",attrs:{src:n(200)("./".concat(_.img,".png")),"aspect-ratio":"1",width:"64","max-width":"64","max-height":"64"}}),t._v(" "),e(v.a,{staticClass:"ml-3"},[e(v.c,{staticClass:"text-body-2 font-w-600 text-head"},[t._v(t._s(_.title))]),t._v(" "),e("div",{staticClass:"size-color text-caption hidden-xs-only"},[e("span",{staticClass:"size text-subhead"},[t._v("size: "),e("span",{staticClass:"black--text"},[t._v("XS")])]),t._v(" "),e("span",{staticClass:"text-subhead d-none d-lg-inline-block"},[t._v("|")]),t._v(" "),e("span",{staticClass:"color d-sm-block d-md-inline-block text-subhead"},[t._v("color: "),e("span",{staticClass:"black--text"},[t._v("aqua")])])])],1)],1)]),t._v(" "),t.$vuetify.breakpoint.smAndUp?e(l.a,{staticClass:"d-flex align-center",attrs:{cols:"2"}},[e("span",{staticClass:"text-caption"},[t._v("US$ 22")])]):t._e(),t._v(" "),t.$vuetify.breakpoint.smAndUp?e(l.a,{staticClass:"d-flex align-center",attrs:{cols:"2"}},[e("div",{staticClass:"quantity",staticStyle:{"max-width":"96px",width:"96px"}},[e("div",{staticClass:"quantity-controller d-flex align-center justify-space-between border-color rounded-lg px-3 py-1"},[e(r.a,{attrs:{icon:"",height:"26",width:"26"}},[e(o.a,{attrs:{small:""}},[t._v("mdi-minus")])],1),t._v(" "),e("span",{staticClass:"text-caption"},[t._v("1")]),t._v(" "),e(r.a,{attrs:{icon:"",height:"26",width:"26"}},[e(o.a,{attrs:{small:""}},[t._v("mdi-plus")])],1)],1)])]):t._e(),t._v(" "),t.$vuetify.breakpoint.smAndUp?e(l.a,{staticClass:"d-flex align-center",attrs:{cols:"2"}},[e("span",{staticClass:"text-caption"},[t._v("US$ 22")])]):t._e(),t._v(" "),t.$vuetify.breakpoint.smAndUp?e(l.a,{staticClass:"d-flex align-center justify-center justify-lg-start",attrs:{cols:"2",lg:"1"}},[e(r.a,{attrs:{icon:"",color:"primary darken-2"}},[e(o.a,[t._v("mdi-delete-outline")])],1)],1):t._e(),t._v(" "),e(l.a,[e("div",{staticClass:"px-4 d-flex d-sm-none align-center justify-space-between"},[e("div",{staticClass:"content text-caption"},[e("div",[e("b",[t._v("size")]),t._v(": XS")]),t._v(" "),e("div",[e("b",[t._v("color")]),t._v(": aqua")]),t._v(" "),e("div",[e("b",[t._v("Price")]),t._v(": US$ 22")]),t._v(" "),e("div",[e("b",[t._v("Total")]),t._v(": US$ 22")])]),t._v(" "),e("div",{staticClass:"controller"},[e("div",{staticClass:"quantity ml-auto d-block",staticStyle:{"max-width":"96px",width:"96px"}},[e("div",{staticClass:"quantity-controller d-flex align-center justify-space-between border-color rounded-lg px-3 py-1"},[e(r.a,{attrs:{icon:"",height:"26",width:"26"}},[e(o.a,{attrs:{small:""}},[t._v("mdi-minus")])],1),t._v(" "),e("span",{staticClass:"text-caption"},[t._v("1")]),t._v(" "),e(r.a,{attrs:{icon:"",height:"26",width:"26"}},[e(o.a,{attrs:{small:""}},[t._v("mdi-plus")])],1)],1)]),t._v(" "),e(r.a,{staticClass:"ml-auto d-block mt-2",attrs:{icon:"",color:"primary darken-2"}},[e(o.a,[t._v("mdi-delete-outline")])],1)],1)])])],1)],1)],1)]}))],2)]),t._v(" "),t._e()])}),[],!1,null,null,null);e.default=component.exports}}]);