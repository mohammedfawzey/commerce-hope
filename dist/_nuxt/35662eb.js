(window.webpackJsonp=window.webpackJsonp||[]).push([[5,22],{635:function(t,e,l){var content=l(659);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(9).default)("2015497c",content,!0,{sourceMap:!1})},658:function(t,e,l){"use strict";l(635)},659:function(t,e,l){var n=l(8)(!1);n.push([t.i,'.z-index-1[data-v-ecf9a87a]{z-index:1}.pos-relative[data-v-ecf9a87a]{position:relative}.line[data-v-ecf9a87a]{position:absolute;content:"";width:100%;height:3px;background:#eaeaf0;transform:translateY(25px);z-index:0;left:50%}.line.l-completed[data-v-ecf9a87a]{background-image:linear-gradient(95deg,#0027b7,50%,#6697ff)!important}.completed[data-v-ecf9a87a]{background-image:linear-gradient(136deg,#0027b7,50%,#6697ff)!important;box-shadow:inset 0 0 1px grey!important}.not-completed[data-v-ecf9a87a]{background-color:#ccc!important}.not-completed-text[data-v-ecf9a87a]{color:#637381!important}',""]),t.exports=n},702:function(t,e,l){"use strict";l.r(e);var n=l(693),c=l(632),o=l(154),r={props:{title:{required:!0,default:"title"}},computed:{C_path:function(){return[{text:"Home",route:"/"},{text:this.title,disabled:!0}]}}},d=l(23),component=Object(d.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"product_detail-header"},[e("div",{staticClass:"text-h6 text-sm-h5 text-md-h4 text-head font-weight-bold"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),e(n.a,{attrs:{items:t.C_path},scopedSlots:t._u([{key:"divider",fn:function(){return[e(o.a,{staticClass:"px-0",attrs:{small:""}},[t._v("mdi-chevron-right")])]},proxy:!0},{key:"item",fn:function(l){var n=l.item;return[e(c.a,{attrs:{disabled:n.disabled,nuxt:"",to:n.route,link:""}},[e("span",{staticClass:"text-caption"},[t._v(t._s(n.text))])])]}}])})],1)}),[],!1,null,"dbbc528c",null);e.default=component.exports},703:function(t,e,l){"use strict";l.r(e);var n=l(234),c=l(601),o=l(609),r=l(154),d=l(600),v={data:function(){return{}},props:{step:{required:!0}}},m=(l(658),l(23)),component=Object(m.a)(v,(function(){var t=this,e=t._self._c;return e(o.a,{attrs:{fluid:""}},[e(d.a,[e(c.a,{staticClass:"d-flex flex-column align-center text-center pos-relative"},[e(n.a,{staticClass:"z-index-1",class:[t.step>=1?"completed":"not-completed"],attrs:{size:"50"}},[e(r.a,{attrs:{color:"white"}},[t._v("mdi-basket")])],1),t._v(" "),e("div",{staticClass:"text-caption mt-2",class:[t.step<1?"not-completed-text":"black--text font-weight-medium"]},[t._v("\n        Cart\n      ")]),t._v(" "),e("span",{staticClass:"line",class:{"l-completed":t.step>=2}})],1),t._v(" "),e(c.a,{staticClass:"d-flex flex-column align-center text-center pos-relative"},[e(n.a,{staticClass:"z-index-1",class:[t.step>=2?"completed":"not-completed"],attrs:{fab:""}},[e(r.a,{attrs:{color:"white"}},[t._v("mdi-receipt-text")])],1),t._v(" "),e("div",{staticClass:"text-caption mt-2",class:[t.step<2?"not-completed-text":"black--text font-weight-medium"]},[t._v("\n        Billing & Address\n      ")]),t._v(" "),e("span",{staticClass:"line",class:{"l-completed":t.step>=3}})],1),t._v(" "),e(c.a,{staticClass:"d-flex flex-column align-center text-center pos-relative"},[e(n.a,{staticClass:"z-index-1",class:[t.step>=3?"completed":"not-completed"],attrs:{fab:""}},[e(r.a,{attrs:{color:"white"}},[t._v("mdi-currency-usd")])],1),t._v(" "),e("div",{staticClass:"text-caption mt-2",class:[t.step<3?"not-completed-text":"black--text font-weight-medium"]},[t._v("\n        Payment\n      ")])],1)],1)],1)}),[],!1,null,"ecf9a87a",null);e.default=component.exports},704:function(t,e,l){"use strict";l.r(e);var n=l(578),c=l(601),o=l(584),r=l(154),d=l(349),v=l(31),m=l(600),_=l(634),f=(l(45),l(245)),x={data:function(){return{items:f}}},C=l(23),component=Object(C.a)(x,(function(){var t=this,e=t._self._c;return e(_.a,{staticClass:"px-0",attrs:{step:"1",id:"cart"}},[e("div",{staticClass:"step-head px-4"},[e("span",{staticClass:"text-h5 text-head font-weight-bold"},[t._v("Cart ")]),t._v(" "),e("span",{staticClass:"font-weight-medium text-body-1",staticStyle:{color:"rgb(99, 115, 129)"}},[t._v("(0 Items)")])]),t._v(" "),e("div",{staticClass:"with-items mt-sm-8"},[e("div",{staticClass:"preview hidden-xs-only pr-3"},[e(m.a,{staticClass:"primary darken-1 white--text text-caption font-w-600",attrs:{id:"preview-item"}},[e(c.a,{staticClass:"text-left d-flex align-center",attrs:{cols:"4",lg:"5"}},[e("span",{staticClass:"pl-3"},[t._v(" Product ")])]),t._v(" "),e(c.a,{staticClass:"d-flex align-center",attrs:{cols:"2"}},[e("span",[t._v("Price")])]),t._v(" "),e(c.a,{staticClass:"d-flex align-center",attrs:{cols:"2"}},[e("span",[t._v("Quantity")])]),t._v(" "),e(c.a,{staticClass:"d-flex align-center",attrs:{cols:"2"}},[e("span",[t._v(" Total Price")])]),t._v(" "),e(c.a,{staticClass:"d-flex align-center",attrs:{cols:"2",lg:"1"}})],1)],1),t._v(" "),e("div",{staticClass:"items pr-3 mt-3"},[t._l(t.items.slice(0,3),(function(_,f){return[e(o.a,{key:"divider-".concat(f),staticClass:"my-4"}),t._v(" "),e(m.a,{key:f},[e(c.a,[e(m.a,[e(c.a,{attrs:{cols:"12",sm:"4",lg:"5"}},[e("div",{staticClass:"pl-3 d-flex align-center"},[e(d.a,{staticClass:"border-color pl-2 rounded-lg",attrs:{src:l(200)("./".concat(_.img,".png")),"aspect-ratio":"1",width:"64","max-width":"64","max-height":"64"}}),t._v(" "),e(v.a,{staticClass:"ml-3"},[e(v.c,{staticClass:"text-body-2 font-w-600 text-head"},[t._v(t._s(_.title))]),t._v(" "),e("div",{staticClass:"size-color text-caption hidden-xs-only"},[e("span",{staticClass:"size text-subhead"},[t._v("size: "),e("span",{staticClass:"black--text"},[t._v("XS")])]),t._v(" "),e("span",{staticClass:"text-subhead d-none d-lg-inline-block"},[t._v("|")]),t._v(" "),e("span",{staticClass:"color d-sm-block d-md-inline-block text-subhead"},[t._v("color: "),e("span",{staticClass:"black--text"},[t._v("aqua")])])])],1)],1)]),t._v(" "),t.$vuetify.breakpoint.smAndUp?e(c.a,{staticClass:"d-flex align-center",attrs:{cols:"2"}},[e("span",{staticClass:"text-caption"},[t._v("US$ 22")])]):t._e(),t._v(" "),t.$vuetify.breakpoint.smAndUp?e(c.a,{staticClass:"d-flex align-center",attrs:{cols:"2"}},[e("div",{staticClass:"quantity",staticStyle:{"max-width":"96px",width:"96px"}},[e("div",{staticClass:"quantity-controller d-flex align-center justify-space-between border-color rounded-lg px-3 py-1"},[e(n.a,{attrs:{icon:"",height:"26",width:"26"}},[e(r.a,{attrs:{small:""}},[t._v("mdi-minus")])],1),t._v(" "),e("span",{staticClass:"text-caption"},[t._v("1")]),t._v(" "),e(n.a,{attrs:{icon:"",height:"26",width:"26"}},[e(r.a,{attrs:{small:""}},[t._v("mdi-plus")])],1)],1)])]):t._e(),t._v(" "),t.$vuetify.breakpoint.smAndUp?e(c.a,{staticClass:"d-flex align-center",attrs:{cols:"2"}},[e("span",{staticClass:"text-caption"},[t._v("US$ 22")])]):t._e(),t._v(" "),t.$vuetify.breakpoint.smAndUp?e(c.a,{staticClass:"d-flex align-center justify-center justify-lg-start",attrs:{cols:"2",lg:"1"}},[e(n.a,{attrs:{icon:"",color:"primary darken-2"}},[e(r.a,[t._v("mdi-delete-outline")])],1)],1):t._e(),t._v(" "),e(c.a,[e("div",{staticClass:"px-4 d-flex d-sm-none align-center justify-space-between"},[e("div",{staticClass:"content text-caption"},[e("div",[e("b",[t._v("size")]),t._v(": XS")]),t._v(" "),e("div",[e("b",[t._v("color")]),t._v(": aqua")]),t._v(" "),e("div",[e("b",[t._v("Price")]),t._v(": US$ 22")]),t._v(" "),e("div",[e("b",[t._v("Total")]),t._v(": US$ 22")])]),t._v(" "),e("div",{staticClass:"controller"},[e("div",{staticClass:"quantity ml-auto d-block",staticStyle:{"max-width":"96px",width:"96px"}},[e("div",{staticClass:"quantity-controller d-flex align-center justify-space-between border-color rounded-lg px-3 py-1"},[e(n.a,{attrs:{icon:"",height:"26",width:"26"}},[e(r.a,{attrs:{small:""}},[t._v("mdi-minus")])],1),t._v(" "),e("span",{staticClass:"text-caption"},[t._v("1")]),t._v(" "),e(n.a,{attrs:{icon:"",height:"26",width:"26"}},[e(r.a,{attrs:{small:""}},[t._v("mdi-plus")])],1)],1)]),t._v(" "),e(n.a,{staticClass:"ml-auto d-block mt-2",attrs:{icon:"",color:"primary darken-2"}},[e(r.a,[t._v("mdi-delete-outline")])],1)],1)])])],1)],1)],1)]}))],2)]),t._v(" "),t._e()])}),[],!1,null,null,null);e.default=component.exports},705:function(t,e,l){"use strict";l.r(e);var n=l(578),c=l(601),o=l(600),r=l(777),d=l(634),v=l(580),m={data:function(){return{inputs:[{label:"First Name",state:"",grid:6},{label:"Last Name",state:"",grid:6},{label:"Email",state:"",grid:6},{label:"Phone",state:"",grid:6},{label:"Address",state:"",grid:12},{label:"Town/City",state:"",grid:4},{label:"State",state:"",grid:4},{label:"Zip/Postal Code",state:"",grid:4},{label:"Country",state:"",enum:["oman","egypt","cairo","dandil"],isSelect:!0,grid:12}]}},props:{nextStep:{type:Function}}},_=l(23),component=Object(_.a)(m,(function(){var t=this,e=t._self._c;return e(d.a,{attrs:{step:"2",id:"billing-info"}},[e("div",{staticClass:"step-head"},[e("span",{staticClass:"text-h5 text-head font-weight-bold"},[t._v("Guest Information ")])]),t._v(" "),e(o.a,{staticClass:"mt-4"},t._l(t.inputs,(function(l,n){return e(c.a,{key:n,attrs:{cols:"12",sm:l.grid?l.grid:12}},[l.isSelect?e(r.a,{staticClass:"rounded-lg",attrs:{outlined:"",label:l.label,"hide-details":"",items:l.enum},model:{value:l.state,callback:function(e){t.$set(l,"state",e)},expression:"item.state"}}):e(v.a,{staticClass:"rounded-lg",attrs:{"hide-details":"",outlined:"",label:l.label},model:{value:l.state,callback:function(e){t.$set(l,"state",e)},expression:"item.state"}})],1)})),1),t._v(" "),e(n.a,{staticClass:"rounded-lg mt-6",attrs:{color:"primary darken-3",block:"",large:"",height:"48"},on:{click:function(e){return t.nextStep(3)}}},[e("span",{staticClass:"text-capitalize font-weight-bold"},[t._v("deliver to this address")])])],1)}),[],!1,null,null,null);e.default=component.exports},706:function(t,e,l){"use strict";l.r(e);var n=l(730),c=l(729),o=l(634),r={data:function(){return{active:1}}},d=l(23),component=Object(d.a)(r,(function(){var t=this,e=t._self._c;return e(o.a,{attrs:{id:"payment",step:"3"}},[e("div",{staticClass:"step-head"},[e("span",{staticClass:"text-h5 text-head font-weight-bold"},[t._v("Payment options")])]),t._v(" "),e("div",{staticClass:"options mt-4"},[e("div",{staticClass:"on-delivery py-3 px-5 rounded-lg border-color d-flex align-center"},[e(c.a,{model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[e(n.a,{attrs:{color:"primary darken-2","on-icon":"mdi-check-circle",value:1}})],1),t._v(" "),e("div",{staticClass:"content ml-3"},[e("div",{staticClass:"text-body-2 font-w-600"},[t._v("Cash on Delivery")]),t._v(" "),e("div",{staticClass:"text-caption"},[t._v("\n          Pay With cash when your order is delivered\n        ")])])],1)])])}),[],!1,null,"a817bd70",null);e.default=component.exports},757:function(t,e,l){"use strict";l.r(e);var n=l(595),c=l(578),o=l(231),r=l(78),d=l(601),v=l(609),m=l(584),_=l(59),f=l(154),x=l(596),C=l(600),h=l(597),k=l(694),y=l(627),w=l(605),S=(l(4),l(52),{data:function(){return{done:!1,step:1,timeout:2e3,isBtnClicked:!1}},methods:{nextStep:function(t){this.step=t},completeOrder:function(){var t=this;this.isBtnClicked=!0,new Promise((function(e,l){setTimeout((function(){t.isBtnClicked=!1,e("end")}),t.timeout)})).then((function(){t.$toast.success("Order Completed",{timeout:t.timeout}),setTimeout((function(){t.$router.push({path:"/profile"})}),t.timeout)}))}}}),z=l(23),component=Object(z.a)(S,(function(){var t=this,e=t._self._c;return e(n.a,{staticClass:"transparent"},[e(x.a,{staticClass:"pt-5"},[e("section",{attrs:{id:"checkout"}},[e(v.a,{attrs:{fluid:t.$vuetify.breakpoint.mdAndDown}},[e("AppsThePageInfo",{attrs:{title:"Checkout"}}),t._v(" "),e("CheckoutSteps",{staticClass:"mb-10 mt-5",attrs:{step:t.step}}),t._v(" "),e(C.a,[e(d.a,{attrs:{cols:"12",md:"8"}},[e(k.a,{staticClass:"border-color py-2",attrs:{outlined:"",flat:""},model:{value:t.step,callback:function(e){t.step=e},expression:"step"}},[e(y.a,{staticClass:"pa-0"},[e("CheckoutCart"),t._v(" "),e("CheckoutBillingInfo",{attrs:{"next-step":t.nextStep}}),t._v(" "),e("CheckoutPayment")],1)],1),t._v(" "),e("div",{staticClass:"routing mt-4"},[2==t.step||3==t.step?e(c.a,{attrs:{text:"",depressed:""},on:{click:function(e){t.step--}}},[e(f.a,{attrs:{left:""}},[t._v("mdi-arrow-left")]),t._v(" "),e("span",{staticClass:"font-weight-bold text-capitalize"},[t._v(" back ")])],1):t._e(),t._v(" "),t.step<=1?e(c.a,{attrs:{text:"",depressed:"",nuxt:"",to:"/products"}},[e(f.a,{attrs:{left:""}},[t._v("mdi-arrow-left")]),t._v(" "),e("span",{staticClass:"font-weight-bold text-capitalize"},[t._v("\n                  continue shopping\n                ")])],1):t._e()],1)],1),t._v(" "),e(d.a,{attrs:{cols:"12",md:"4"}},[t.step>=3?e(o.a,{staticClass:"mb-5 border-color pa-3 rounded-lg",attrs:{outlined:"",flat:""}},[e(r.d,{staticClass:"text-h5 text-head font-weight-bold"},[e("span",[t._v("Billing & Address")]),t._v(" "),e(w.a,{attrs:{color:"black","content-class":"rounded-lg text--caption custom-line-height arrow-top","open-delay":"750",transition:"slide-y-reverse-transition",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(l){var n=l.on,o=l.attrs;return[e(c.a,t._g(t._b({staticClass:"ml-auto",attrs:{icon:"",color:"primary darken-2"},on:{click:function(e){t.step=2}}},"v-btn",o,!1),n),[e(f.a,[t._v("mdi-pencil")])],1)]}}],null,!1,2725516929)},[t._v(" "),e("span",{staticClass:"text--xsmall"},[t._v("Edit address")])])],1),t._v(" "),e("div",{staticClass:"billing-info mt-0 pa-3"},[e("span",{staticClass:"text-caption"},[t._v("\n                  undefined undefined undefined undefined\n                ")])])],1):t._e(),t._v(" "),e(o.a,{staticClass:"border-color pa-3 rounded-lg",attrs:{outlined:"",flat:""}},[e(r.d,{staticClass:"text-h5 text-md-h6 text-lg-h5 text-head font-weight-bold"},[e("span",[t._v("Checkout Summary")]),t._v(" "),t.step>=3?e(c.a,{staticClass:"ml-auto",attrs:{icon:"",color:"primary darken-2"},on:{click:function(e){t.step=1}}},[e(f.a,[t._v("mdi-pencil")])],1):t._e()],1),t._v(" "),e(r.c,{staticClass:"pb-0 d-flex align-center"},[e("span",{staticClass:"text-caption"},[t._v("Sup Total")]),t._v(" "),e("span",{staticClass:"ml-auto text-body-2 font-weight-medium black--text"},[t._v("US$ 0")])]),t._v(" "),e(r.c,{staticClass:"d-flex align-center"},[e("span",{staticClass:"text-caption text--darken-3"},[t._v("Shipping")]),t._v(" "),e(h.a),t._v(" "),e("span",{staticClass:"text-body-2 font-weight-medium black--text"},[t._v("US$ 0")])],1),t._v(" "),e("div",{staticClass:"px-3"},[e(m.a)],1),t._v(" "),e(r.c,{staticClass:"d-flex align-center"},[e("span",{staticClass:"text-body-1 font-w-600 black--text"},[t._v("Total")]),t._v(" "),e("span",{staticClass:"ml-auto text-body-1 font-weight-medium error--text text--darken-1"},[t._v("US$ 0")])])],1),t._v(" "),e(_.a,[t.step<=1?e(c.a,{staticClass:"rounded-lg mt-6",attrs:{block:"",color:"primary darken-2",depressed:"",large:"",height:"48"},on:{click:function(e){t.step=2}}},[e("span",{staticClass:"text-capitalize font-weight-bold"},[t._v("checkout")])]):t._e(),t._v(" "),t.step>=3?e(c.a,{staticClass:"rounded-lg mt-6",attrs:{block:"",color:"primary darken-2",depressed:"",large:"",height:"48",disabled:t.isBtnClicked,loading:t.isBtnClicked},on:{click:t.completeOrder}},[e("span",{staticClass:"text-capitalize font-weight-bold"},[t._v("complete order")])]):t._e()],1)],1)],1)],1)],1)])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppsThePageInfo:l(702).default,CheckoutSteps:l(703).default,CheckoutCart:l(704).default,CheckoutBillingInfo:l(705).default,CheckoutPayment:l(706).default})}}]);