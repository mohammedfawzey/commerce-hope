(window.webpackJsonp=window.webpackJsonp||[]).push([[42,14,15],{619:function(t,e,n){var content=n(620);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(9).default)("2e2bc7da",content,!0,{sourceMap:!1})},620:function(t,e,n){var o=n(8)(!1);o.push([t.i,'.v-input--selection-controls{margin-top:16px;padding-top:4px}.v-input--selection-controls>.v-input__append-outer,.v-input--selection-controls>.v-input__prepend-outer{margin-top:0;margin-bottom:0}.v-input--selection-controls:not(.v-input--hide-details)>.v-input__slot{margin-bottom:12px}.v-input--selection-controls .v-input__slot,.v-input--selection-controls .v-radio{cursor:pointer}.v-input--selection-controls .v-input__slot>.v-label,.v-input--selection-controls .v-radio>.v-label{align-items:center;display:inline-flex;flex:1 1 auto;height:auto}.v-input--selection-controls__input{color:inherit;display:inline-flex;flex:0 0 auto;height:24px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);transition-property:transform;width:24px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-input--selection-controls__input .v-icon{width:100%}.v-application--is-ltr .v-input--selection-controls__input{margin-right:8px}.v-application--is-rtl .v-input--selection-controls__input{margin-left:8px}.v-input--selection-controls__input input[role=checkbox],.v-input--selection-controls__input input[role=radio],.v-input--selection-controls__input input[role=switch]{position:absolute;opacity:0;width:100%;height:100%;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-input--selection-controls__input+.v-label{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-input--selection-controls__ripple{border-radius:50%;cursor:pointer;height:34px;position:absolute;transition:inherit;width:34px;left:-12px;top:calc(50% - 24px);margin:7px}.v-input--selection-controls__ripple:before{border-radius:inherit;bottom:0;content:"";position:absolute;opacity:.2;left:0;right:0;top:0;transform-origin:center center;transform:scale(.2);transition:inherit}.v-input--selection-controls__ripple>.v-ripple__container{transform:scale(1.2)}.v-input--selection-controls.v-input--dense .v-input--selection-controls__ripple{width:28px;height:28px;left:-9px}.v-input--selection-controls.v-input--dense:not(.v-input--switch) .v-input--selection-controls__ripple{top:calc(50% - 21px)}.v-input--selection-controls.v-input{flex:0 1 auto}.v-input--selection-controls.v-input--is-focused .v-input--selection-controls__ripple:before,.v-input--selection-controls .v-radio--is-focused .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2)}.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:inherit}.v-input--selection-controls.v-input--is-disabled:not(.v-input--is-readonly){pointer-events:none}.v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2);transition:none}',""]),t.exports=o},621:function(t,e,n){"use strict";n.d(e,"b",(function(){return d}));n(4),n(85),n(10);var o=n(86),r=n(244),l=n(245),c=n(3);function d(t){t.preventDefault()}e.a=Object(c.a)(o.a,r.a,l.a).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,input=this.internalValue;return this.isMultiple?!!Array.isArray(input)&&input.some((function(n){return t.valueComparator(n,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,input):Boolean(input):this.valueComparator(input,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var label=o.a.options.methods.genLabel.call(this);return label?(label.data.on={click:d},label):label},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:d},ref:"input"})},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,input=this.internalValue;if(this.isMultiple){Array.isArray(input)||(input=[]);var n=input.length;(input=input.filter((function(n){return!t.valueComparator(n,e)}))).length===n&&input.push(e)}else input=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(input,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(input,e)?null:e:!input;this.validate(!0,input),this.internalValue=input,this.hasColor=input}},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onKeydown:function(t){}}})},622:function(t,e,n){var content=n(623);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(9).default)("12a190a6",content,!0,{sourceMap:!1})},623:function(t,e,n){var o=n(8)(!1);o.push([t.i,".v-input--checkbox.v-input--indeterminate.v-input--is-disabled{opacity:.6}.v-input--checkbox.v-input--dense{margin-top:4px}",""]),t.exports=o},626:function(t,e,n){var content=n(636);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(9).default)("4eac11b0",content,!0,{sourceMap:!1})},635:function(t,e,n){"use strict";n(626)},636:function(t,e,n){var o=n(8)(!1);o.push([t.i,".welcome-bg[data-v-e49a5444]{background-image:linear-gradient(to right bottom,#007dfc,#01478c 120%);border-radius:0 0 40px 40px}.welcome-bg div[data-v-e49a5444]:first-child{line-height:.7}.welcome-bg div[data-v-e49a5444]:nth-child(3){line-height:.9}.v-btn-box-shadow[data-v-e49a5444]{box-shadow:0 8px 16px 0 rgba(0,125,252,.24)!important}.custom-underline[data-v-e49a5444]{text-decoration:underline;-webkit-text-decoration-color:#637381!important;text-decoration-color:#637381!important}.custom-underline[data-v-e49a5444]:hover{-webkit-text-decoration-color:#000!important;text-decoration-color:#000!important}",""]),t.exports=o},638:function(t,e,n){"use strict";n.r(e);var o=n(584),r=n(231),l=n(78),c=n(643),d=n(607),h=n(604),v=n(606),f=n(792),m=n(68),_=n(586),x=n(29),y=(n(74),n(4),n(11),n(107),n(30),n(69),n(52),{data:function(){return{inputs:[{title:"first name",icon:"mdi-account",state:""},{title:"last name",icon:"mdi-account",state:""},{title:"gender",isSelect:!0,enum:["Male","Female"],icon:"mdi-gender-male",state:"Male"},{title:"phone no.",icon:"mdi-phone",state:"",type:"number"},{title:"email address",icon:"mdi-email",state:"test@gmail.com",loginOnly:!0,type:"email"},{title:"password",icon:"mdi-lock",state:"user-1",loginOnly:!0,isPassword:!0,isTypePassword:!0}],rules:{required:function(t){return!!t||"field required"}},isSubmitBtnClicked:!1,delay:750}},props:{register:{type:Boolean,default:!1}},computed:{C_userInfo:function(){var t=this;return function(e){var n=e.login,o={};return t.inputs.forEach((function(input){if(!n||input.loginOnly){var t=input.title.split(" ");t.length>1&&(t=t[0]+t[1][0].toUpperCase()+t[1].substr(1)),Array.isArray(t)&&(t=t.join("")),t=(t=t.replace(".","")).replace("emailAddress","email"),o[t]=input.state}})),o}},C_userLoginInfo:function(){return this.C_userInfo({login:!0})},C_userRegisterInfo:function(){return this.C_userInfo({login:!1})}},methods:{submit:function(){var t=this;this.isSubmitBtnClicked=!0,this.register?this.M_register():setTimeout((function(){t.login()}),this.delay)},login:function(){var t=this;return Object(x.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$router.push({path:"/"});case 1:case"end":return e.stop()}}),e)})))()},M_register:function(){this.$router.push({path:"/"})}}}),C=(n(635),n(23)),component=Object(C.a)(y,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"pb-16",attrs:{id:"auth-login"}},[e(m.a,{staticClass:"welcome-bg d-flex align-center justify-center text-center",attrs:{dark:"",height:"270"}},[e("div",{staticClass:"mb-10"},[e("div",{staticClass:"font-s-30 font-w-300"},[t._v("Welcome to the")]),t._v(" "),e("div",{staticClass:"font-s-44 font-weight-bold",staticStyle:{"line-height":"1.33333"}},[t._v("\n        COMMERCEHOPE\n      ")]),t._v(" "),e("div",{staticClass:"text-body-1"},[t._v("Reactjs Ecommerce script you need.")])])]),t._v(" "),e(r.a,{staticClass:"mx-auto v-box-shadow mt-n16 pa-6 text-center",attrs:{outlined:"","max-width":"560"}},[e(l.d,{staticClass:"pt-0 text-center justify-center font-weight-bold text-h5"},[t._v(t._s(t.register?"Get Started":"Login"))]),t._v(" "),e(l.b,{staticClass:"mt-0 mb-4 text-color"},[t._v(t._s(t.register?"Create an account for free.":"Login to your account to continue"))]),t._v(" "),e(v.a,{staticClass:"mt-2"},[t._l(t.inputs,(function(n,o){return[t.register||n.loginOnly?e(d.a,{key:o,staticClass:"py-0",attrs:{cols:n.loginOnly?12:6}},[n.isSelect&&t.register?e(f.a,{attrs:{outlined:"",eager:"","full-width":"","menu-props":"offset-y dense","hide-details":"","prepend-inner-icon":n.icon,items:n.enum},scopedSlots:t._u([{key:"label",fn:function(){return[e("span",{staticClass:"text-capitalize text-color",domProps:{textContent:t._s(n.title)}})]},proxy:!0}],null,!0),model:{value:n.state,callback:function(e){t.$set(n,"state",e)},expression:"item.state"}}):e(_.a,{attrs:{"prepend-inner-icon":n.icon,rules:[t.rules.required],outlined:"","append-icon":n.isPassword&&n.isTypePassword?"mdi-eye-off":n.isPassword&&!n.isTypePassword?"mdi-eye":"",type:n.type?n.type:n.isTypePassword?"password":"text"},on:{"click:append":function(t){n.isTypePassword=!n.isTypePassword}},scopedSlots:t._u([{key:"label",fn:function(){return[e("span",{staticClass:"text-capitalize",domProps:{textContent:t._s(n.title)}})]},proxy:!0}],null,!0),model:{value:n.state,callback:function(e){t.$set(n,"state",e)},expression:"item.state"}})],1):t._e()]}))],2),t._v(" "),t.register?t._e():e("div",{staticClass:"forgot-password mt-3"},[e("div",{staticClass:"wrapper d-flex align-center justify-space-between"},[e("div",{staticClass:"remember-me"},[e(c.a,{attrs:{label:"Remember me",color:"primary"},scopedSlots:t._u([{key:"label",fn:function(){return[e("span",{staticClass:"text-caption"},[t._v("Remember me")])]},proxy:!0}],null,!1,1181292311)})],1),t._v(" "),e("div",{staticClass:"forgot-password"},[e(h.a,{scopedSlots:t._u([{key:"default",fn:function(n){var o=n.hover;return[e("span",{staticClass:"primary--text text-body-2 font-w-600 pointer",class:{"text-decoration-underline":o}},[t._v("Forgot password?")])]}}],null,!1,3676381212)})],1)])]),t._v(" "),e(o.a,{staticClass:"v-btn-box-shadow",class:[t.register?"mt-8":"mt-4"],attrs:{block:"",color:"primary",depressed:"",loading:t.isSubmitBtnClicked,disabled:t.isSubmitBtnClicked,height:"48"},on:{click:t.submit}},[e("span",{staticClass:"text-capitalize"},[t._v(t._s(t.register?"register":"login"))])]),t._v(" "),e("div",{staticClass:"text-center mt-6"},[e("span",{staticClass:"text-caption"},[t._v(t._s(t.register?"Already have an account?":"Don't have an account?"))]),t._v(" "),e(h.a,{scopedSlots:t._u([{key:"default",fn:function(n){var o=n.hover;return[e("nuxt-link",{attrs:{to:t.register?"/auth/login":"/auth/register"}},[e("span",{staticClass:"primary--text text-body-2 font-w-600 pointer",class:{"text-decoration-underline":o}},[t._v("\n            "+t._s(t.register?"Login":"Get Started")+"\n          ")])])]}}])}),t._v(" "),t.register?e("div",{staticClass:"text-caption mt-3"},[t._v("\n        By registering, I agree to Commercehope\n        "),e("span",{staticClass:"custom-underline pointer"},[t._v(" Terms")]),t._v("\n        and\n        "),e("span",{staticClass:"custom-underline pointer"},[t._v(" Privacy Policy.")])]):t._e()],1)],1)],1)}),[],!1,null,"e49a5444",null);e.default=component.exports},643:function(t,e,n){"use strict";n(13),n(12),n(10),n(14),n(11),n(15);var o=n(87),r=n(1),l=(n(4),n(85),n(622),n(619),n(37)),c=n(86),d=n(621),h=["title"];function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=d.a.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return f(f({},c.a.options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){var t=this.attrs$,e=(t.title,Object(o.a)(t,h));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(l.a,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",f(f({},e),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})},730:function(t,e,n){"use strict";n.r(e);var o=n(23),component=Object(o.a)({},(function(){return(0,this._self._c)("Auth")}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Auth:n(638).default})},785:function(t,e,n){"use strict";n.r(e);var o={},r=n(23),component=Object(r.a)(o,(function(){return(0,this._self._c)("AuthLogin")}),[],!1,null,"0919816f",null);e.default=component.exports;installComponents(component,{AuthLogin:n(730).default})}}]);