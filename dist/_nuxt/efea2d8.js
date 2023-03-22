(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{709:function(t,r,e){"use strict";var n=e(1),o=(e(43),e(62),e(249),e(10),e(4),e(11),e(52),e(96),e(13),e(12),e(14),e(15),e(3)),c=e(97),l=e(114);function d(object,t){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),r.push.apply(r,e)}return r}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(r){Object(n.a)(t,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(source,r))}))}return t}r.a=Object(o.a)(c.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var r=Object.values(t).includes(!0);this.$emit("input",!r)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,r=function(input){return input.$watch("hasError",(function(r){t.$set(t.errorBag,input._uid,r)}),{immediate:!0})},e={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?e.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(e.valid=r(input)))})):e.valid=r(input),e},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var r=this.watchers.find((function(i){return i._uid===t._uid}));r&&(r.valid(),r.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var r=this;return t("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(t){return r.$emit("submit",t)}}},this.$slots.default)}})},714:function(t,r,e){var content=e(772);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(9).default)("09437360",content,!0,{sourceMap:!1})},771:function(t,r,e){"use strict";e(714)},772:function(t,r,e){var n=e(8)(!1);n.push([t.i,".sub-title-color[data-v-62040230]{color:#637381}.border-color[data-v-62040230]{border-color:#f6f8fc!important}",""]),t.exports=n},795:function(t,r,e){"use strict";e.r(r);var n=e(584),o=e(231),c=e(709),l=e(586),d={},f=(e(771),e(23)),component=Object(f.a)(d,(function(){var t=this,r=t._self._c;return r(o.a,{staticClass:"pa-4 px-3 pa-sm-8 border-color",attrs:{outlined:"",flat:""}},[r("div",{staticClass:"card-heading mb-5"},[r("div",{staticClass:"sub-title-color text-caption font-weight-bold text-uppercase"},[t._v("\n      CHANGE PASSWORD\n    ")])]),t._v(" "),r(c.a,[r(l.a,{staticClass:"rounded-lg",attrs:{outlined:"",label:"Old Password",color:"primary darken-3"}}),t._v(" "),r(l.a,{staticClass:"rounded-lg",attrs:{outlined:"",color:"primary darken-3",label:"New Password",hint:"Password must be minimum 6+"}}),t._v(" "),r(l.a,{staticClass:"rounded-lg",attrs:{color:"primary darken-3",outlined:"",label:"Confirm New Password"}}),t._v(" "),r(n.a,{staticClass:"rounded-lg d-block ml-auto",attrs:{color:"primary darken-2",width:"135",depressed:"",large:"",height:"40"}},[r("span",{staticClass:"text-capitalize font-weight-bold"},[t._v("save changes")])])],1)],1)}),[],!1,null,"62040230",null);r.default=component.exports}}]);