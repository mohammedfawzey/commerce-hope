(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{639:function(e,t,r){e.exports=r.p+"img/view.f911224.png"},641:function(e,t,r){"use strict";r(19),r(52),r(4),r(85);var l=r(59),n=r(116),o=r(0),c=r(3),d=Object(c.a)(Object(n.a)("stepper","v-stepper-content","v-stepper"));t.a=d.extend().extend({name:"v-stepper-content",inject:{isVerticalProvided:{from:"isVertical"}},props:{step:{type:[Number,String],required:!0}},data:function(){return{height:0,isActive:null,isReverse:!1,isVertical:this.isVerticalProvided}},computed:{computedTransition:function(){return(this.$vuetify.rtl?!this.isReverse:this.isReverse)?l.j:l.k},styles:function(){return this.isVertical?{height:Object(o.g)(this.height)}:{}}},watch:{isActive:function(e,t){e&&null==t?this.height="auto":this.isVertical&&(this.isActive?this.enter():this.leave())}},mounted:function(){this.$refs.wrapper.addEventListener("transitionend",this.onTransition,!1),this.stepper&&this.stepper.register(this)},beforeDestroy:function(){this.$refs.wrapper.removeEventListener("transitionend",this.onTransition,!1),this.stepper&&this.stepper.unregister(this)},methods:{onTransition:function(e){this.isActive&&"height"===e.propertyName&&(this.height="auto")},enter:function(){var e=this,t=0;requestAnimationFrame((function(){t=e.$refs.wrapper.scrollHeight})),this.height=0,setTimeout((function(){return e.isActive&&(e.height=t||"auto")}),450)},leave:function(){var e=this;this.height=this.$refs.wrapper.clientHeight,setTimeout((function(){return e.height=0}),10)},toggle:function(e,t){this.isActive=e.toString()===this.step.toString(),this.isReverse=t}},render:function(e){var t={staticClass:"v-stepper__content"},r={staticClass:"v-stepper__wrapper",style:this.styles,ref:"wrapper"};this.isVertical||(t.directives=[{name:"show",value:this.isActive}]);var l=e("div",r,[this.$slots.default]),content=e("div",t,[l]);return e(this.computedTransition,{on:this.$listeners},[content])}})},667:function(e,t,r){var map={"./1.png":668,"./2.png":669,"./3.png":670,"./4.png":671,"./5.png":672,"./view.png":639};function l(e){var t=n(e);return r(t)}function n(e){if(!r.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}l.keys=function(){return Object.keys(map)},l.resolve=n,e.exports=l,l.id=667},668:function(e,t,r){e.exports=r.p+"img/1.2dbe231.png"},669:function(e,t,r){e.exports=r.p+"img/2.fe01527.png"},670:function(e,t,r){e.exports=r.p+"img/3.a78480a.png"},671:function(e,t,r){e.exports=r.p+"img/4.53046fd.png"},672:function(e,t,r){e.exports=r.p+"img/5.8b6a0e0.png"},673:function(e){e.exports=JSON.parse('[{"img":1,"rival":"12","id":1,"title":"Baby Don\'t Cry Shampoo","likes":1,"colors":["primary","red","black","green"],"rate":"4.5","price":25,"sizes":["sm","md","lg","xl"],"description":"Soft Touch distinct formula baby shampoo is the first of its kind, which cleanses and protects the hair and scalp without stripping its natural oils. It is ideal for all hair types and frequent washing leaves hair clean, shining, and easy to manage."},{"img":2,"rival":"34","id":2,"title":"Funtime Bubble Bath","likes":2,"colors":["success","red","black","info"],"rate":"3.0","price":50,"sizes":["sm","md","lg","xl"],"description":"Our gentle plant-based ingredients including soothing organic chamomile and hydrating New Zealand harakeke help protect babies\' skin."},{"img":3,"rival":"20","id":3,"title":"Nexton Baby Shampoo","likes":4,"colors":["indigo","error darken-2","secondary","success"],"rate":"3.5","price":77,"sizes":["sm","md","lg","xl"]},{"img":4,"title":"Intea Children\'s Shampoo Blond Highlights 250ml","rival":"33","id":4,"likess":2,"colors":["primary darken-4","red","black","green"],"rate":"4","price":105,"sizes":["sm","md","lg","xl"]},{"img":1,"rival":"12","id":5,"title":"Baby Don\'t Cry Shampoo","likes":1,"colors":["primary","red","black","green"],"rate":"4.5","price":25,"sizes":["sm","md","lg","xl"]},{"img":2,"rival":"34","id":6,"title":"Funtime Bubble Bath","likes":2,"colors":["success","red","black","info"],"rate":"3.0","price":50,"sizes":["sm","md","lg","xl"]},{"img":3,"rival":"20","id":7,"title":"Nexton Baby Shampoo","likes":4,"colors":["indigo","error darken-2","secondary","success"],"rate":"3.5","price":77,"sizes":["sm","md","lg","xl"]},{"img":4,"title":"Intea Children\'s Shampoo Blond Highlights 250ml","rival":"33","id":8,"likess":2,"colors":["primary darken-4","red","black","green"],"rate":"4","price":105,"sizes":["sm","md","lg","xl"]},{"img":1,"rival":"12","id":9,"title":"Baby Don\'t Cry Shampoo","likes":1,"colors":["primary","red","black","green"],"rate":"4.5","price":25,"sizes":["sm","md","lg","xl"]},{"img":2,"rival":"34","id":10,"title":"Funtime Bubble Bath","likes":2,"colors":["success","red","black","info"],"rate":"3.0","price":50,"sizes":["sm","md","lg","xl"]},{"img":3,"rival":"20","id":11,"title":"Nexton Baby Shampoo","likes":4,"colors":["indigo","error darken-2","secondary","success"],"rate":"3.5","price":77,"sizes":["sm","md","lg","xl"]},{"img":4,"title":"Intea Children\'s Shampoo Blond Highlights 250ml","rival":"33","id":12,"likess":2,"colors":["primary darken-4","red","black","green"],"rate":"4","price":105,"sizes":["sm","md","lg","xl"]},{"img":1,"rival":"12","id":13,"title":"Baby Don\'t Cry Shampoo","likes":1,"colors":["primary","red","black","green"],"rate":"4.5","price":25,"sizes":["sm","md","lg","xl"]},{"img":2,"rival":"34","id":14,"title":"Funtime Bubble Bath","likes":2,"colors":["success","red","black","info"],"rate":"3.0","price":50,"sizes":["sm","md","lg","xl"]},{"img":3,"rival":"20","id":15,"title":"Nexton Baby Shampoo","likes":4,"colors":["indigo","error darken-2","secondary","success"],"rate":"3.5","price":77,"sizes":["sm","md","lg","xl"]},{"img":4,"title":"Intea Children\'s Shampoo Blond Highlights 250ml","rival":"33","id":16,"likess":2,"colors":["primary darken-4","red","black","green"],"rate":"4","price":105,"sizes":["sm","md","lg","xl"]},{"img":1,"rival":"12","id":17,"title":"Baby Don\'t Cry Shampoo","likes":1,"colors":["primary","red","black","green"],"rate":"4.5","price":25,"sizes":["sm","md","lg","xl"]},{"img":2,"rival":"34","id":18,"title":"Funtime Bubble Bath","likes":2,"colors":["success","red","black","info"],"rate":"3.0","price":50,"sizes":["sm","md","lg","xl"]},{"img":3,"rival":"20","id":19,"title":"Nexton Baby Shampoo","likes":4,"colors":["indigo","error darken-2","secondary","success"],"rate":"3.5","price":77,"sizes":["sm","md","lg","xl"]},{"img":4,"title":"Intea Children\'s Shampoo Blond Highlights 250ml","rival":"33","id":20,"likess":2,"colors":["primary darken-4","red","black","green"],"rate":"4","price":105,"sizes":["sm","md","lg","xl"]},{"img":1,"rival":"12","id":21,"title":"Baby Don\'t Cry Shampoo","likes":1,"colors":["primary","red","black","green"],"rate":"4.5","price":25,"sizes":["sm","md","lg","xl"]},{"img":2,"rival":"34","id":22,"title":"Funtime Bubble Bath","likes":2,"colors":["success","red","black","info"],"rate":"3.0","price":50,"sizes":["sm","md","lg","xl"]},{"img":3,"rival":"20","id":23,"title":"Nexton Baby Shampoo","likes":4,"colors":["indigo","error darken-2","secondary","success"],"rate":"3.5","price":77,"sizes":["sm","md","lg","xl"]},{"img":4,"title":"Intea Children\'s Shampoo Blond Highlights 250ml","rival":"33","id":24,"likess":2,"colors":["primary darken-4","red","black","green"],"rate":"4","price":105,"sizes":["sm","md","lg","xl"]},{"img":1,"rival":"12","id":25,"title":"Baby Don\'t Cry Shampoo","likes":1,"colors":["primary","red","black","green"],"rate":"4.5","price":25,"sizes":["sm","md","lg","xl"]},{"img":2,"rival":"34","id":26,"title":"Funtime Bubble Bath","likes":2,"colors":["success","red","black","info"],"rate":"3.0","price":50,"sizes":["sm","md","lg","xl"]},{"img":3,"rival":"20","id":27,"title":"Nexton Baby Shampoo","likes":4,"colors":["indigo","error darken-2","secondary","success"],"rate":"3.5","price":77,"sizes":["sm","md","lg","xl"]},{"img":4,"title":"Intea Children\'s Shampoo Blond Highlights 250ml","rival":"33","id":28,"likess":2,"colors":["primary darken-4","red","black","green"],"rate":"4","price":105,"sizes":["sm","md","lg","xl"]},{"img":1,"rival":"12","id":29,"title":"Baby Don\'t Cry Shampoo","likes":1,"colors":["primary","red","black","green"],"rate":"4.5","price":25,"sizes":["sm","md","lg","xl"]},{"img":2,"rival":"34","id":30,"title":"Funtime Bubble Bath","likes":2,"colors":["success","red","black","info"],"rate":"3.0","price":50,"sizes":["sm","md","lg","xl"]},{"img":3,"rival":"20","id":31,"title":"Nexton Baby Shampoo","likes":4,"colors":["indigo","error darken-2","secondary","success"],"rate":"3.5","price":77,"sizes":["sm","md","lg","xl"]},{"img":4,"title":"Intea Children\'s Shampoo Blond Highlights 250ml","rival":"33","id":32,"likess":2,"colors":["primary darken-4","red","black","green"],"rate":"4","price":105,"sizes":["sm","md","lg","xl"]}]')},717:function(e,t,r){"use strict";r.r(t);var l=r(584),n=r(607),o=r(590),c=r(155),d=r(350),m=r(31),h=r(606),v=r(641),x=(r(44),r(673)),k={data:function(){return{items:x}}},y=r(23),component=Object(y.a)(k,(function(){var e=this,t=e._self._c;return t(v.a,{staticClass:"px-0",attrs:{step:"1",id:"cart"}},[t("div",{staticClass:"step-head px-4"},[t("span",{staticClass:"text-h5 text-head font-weight-bold"},[e._v("Cart ")]),e._v(" "),t("span",{staticClass:"font-weight-medium text-body-1",staticStyle:{color:"rgb(99, 115, 129)"}},[e._v("(0 Items)")])]),e._v(" "),t("div",{staticClass:"with-items mt-sm-8"},[t("div",{staticClass:"preview hidden-xs-only pr-3"},[t(h.a,{staticClass:"primary darken-1 white--text text-caption font-w-600",attrs:{id:"preview-item"}},[t(n.a,{staticClass:"text-left d-flex align-center",attrs:{cols:"4",lg:"5"}},[t("span",{staticClass:"pl-3"},[e._v(" Product ")])]),e._v(" "),t(n.a,{staticClass:"d-flex align-center",attrs:{cols:"2"}},[t("span",[e._v("Price")])]),e._v(" "),t(n.a,{staticClass:"d-flex align-center",attrs:{cols:"2"}},[t("span",[e._v("Quantity")])]),e._v(" "),t(n.a,{staticClass:"d-flex align-center",attrs:{cols:"2"}},[t("span",[e._v(" Total Price")])]),e._v(" "),t(n.a,{staticClass:"d-flex align-center",attrs:{cols:"2",lg:"1"}})],1)],1),e._v(" "),t("div",{staticClass:"items pr-3 mt-3"},[e._l(e.items.slice(0,3),(function(v,x){return[t(o.a,{key:"divider-".concat(x),staticClass:"my-4"}),e._v(" "),t(h.a,{key:x},[t(n.a,[t(h.a,[t(n.a,{attrs:{cols:"12",sm:"4",lg:"5"}},[t("div",{staticClass:"pl-3 d-flex align-center"},[t(d.a,{staticClass:"border-color pl-2 rounded-lg",attrs:{src:r(667)("./".concat(v.img,".png")),"aspect-ratio":"1",width:"64","max-width":"64","max-height":"64"}}),e._v(" "),t(m.a,{staticClass:"ml-3"},[t(m.c,{staticClass:"text-body-2 font-w-600 text-head"},[e._v(e._s(v.title))]),e._v(" "),t("div",{staticClass:"size-color text-caption hidden-xs-only"},[t("span",{staticClass:"size text-subhead"},[e._v("size: "),t("span",{staticClass:"black--text"},[e._v("XS")])]),e._v(" "),t("span",{staticClass:"text-subhead d-none d-lg-inline-block"},[e._v("|")]),e._v(" "),t("span",{staticClass:"color d-sm-block d-md-inline-block text-subhead"},[e._v("color: "),t("span",{staticClass:"black--text"},[e._v("aqua")])])])],1)],1)]),e._v(" "),e.$vuetify.breakpoint.smAndUp?t(n.a,{staticClass:"d-flex align-center",attrs:{cols:"2"}},[t("span",{staticClass:"text-caption"},[e._v("US$ 22")])]):e._e(),e._v(" "),e.$vuetify.breakpoint.smAndUp?t(n.a,{staticClass:"d-flex align-center",attrs:{cols:"2"}},[t("div",{staticClass:"quantity",staticStyle:{"max-width":"96px",width:"96px"}},[t("div",{staticClass:"quantity-controller d-flex align-center justify-space-between border-color rounded-lg px-3 py-1"},[t(l.a,{attrs:{icon:"",height:"26",width:"26"}},[t(c.a,{attrs:{small:""}},[e._v("mdi-minus")])],1),e._v(" "),t("span",{staticClass:"text-caption"},[e._v("1")]),e._v(" "),t(l.a,{attrs:{icon:"",height:"26",width:"26"}},[t(c.a,{attrs:{small:""}},[e._v("mdi-plus")])],1)],1)])]):e._e(),e._v(" "),e.$vuetify.breakpoint.smAndUp?t(n.a,{staticClass:"d-flex align-center",attrs:{cols:"2"}},[t("span",{staticClass:"text-caption"},[e._v("US$ 22")])]):e._e(),e._v(" "),e.$vuetify.breakpoint.smAndUp?t(n.a,{staticClass:"d-flex align-center justify-center justify-lg-start",attrs:{cols:"2",lg:"1"}},[t(l.a,{attrs:{icon:"",color:"primary darken-2"}},[t(c.a,[e._v("mdi-delete-outline")])],1)],1):e._e(),e._v(" "),t(n.a,[t("div",{staticClass:"px-4 d-flex d-sm-none align-center justify-space-between"},[t("div",{staticClass:"content text-caption"},[t("div",[t("b",[e._v("size")]),e._v(": XS")]),e._v(" "),t("div",[t("b",[e._v("color")]),e._v(": aqua")]),e._v(" "),t("div",[t("b",[e._v("Price")]),e._v(": US$ 22")]),e._v(" "),t("div",[t("b",[e._v("Total")]),e._v(": US$ 22")])]),e._v(" "),t("div",{staticClass:"controller"},[t("div",{staticClass:"quantity ml-auto d-block",staticStyle:{"max-width":"96px",width:"96px"}},[t("div",{staticClass:"quantity-controller d-flex align-center justify-space-between border-color rounded-lg px-3 py-1"},[t(l.a,{attrs:{icon:"",height:"26",width:"26"}},[t(c.a,{attrs:{small:""}},[e._v("mdi-minus")])],1),e._v(" "),t("span",{staticClass:"text-caption"},[e._v("1")]),e._v(" "),t(l.a,{attrs:{icon:"",height:"26",width:"26"}},[t(c.a,{attrs:{small:""}},[e._v("mdi-plus")])],1)],1)]),e._v(" "),t(l.a,{staticClass:"ml-auto d-block mt-2",attrs:{icon:"",color:"primary darken-2"}},[t(c.a,[e._v("mdi-delete-outline")])],1)],1)])])],1)],1)],1)]}))],2)]),e._v(" "),e._e()])}),[],!1,null,null,null);t.default=component.exports}}]);