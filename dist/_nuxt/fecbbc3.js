(window.webpackJsonp=window.webpackJsonp||[]).push([[46,39,40,41],{632:function(t,e,r){var content=r(633);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(9).default)("b1bed018",content,!0,{sourceMap:!1})},633:function(t,e,r){var n=r(8)(!1);n.push([t.i,".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex-wrap:wrap;flex:0 1 auto;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs__item{align-items:center;display:inline-flex;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}",""]),t.exports=n},634:function(t,e,r){"use strict";r(13),r(12),r(10),r(4),r(14),r(11),r(15);var n=r(1),c=r(58),o=r(3);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(c.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(n.a)({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return t("li",[t(r,l(l({},data),{},{attrs:l(l({},data.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}})},650:function(t,e,r){var content=r(684);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(9).default)("2193c838",content,!0,{sourceMap:!1})},664:function(t,e,r){"use strict";r.r(e);var n=r(231),c=r(78),o=r(590),d=r(779),l=r(780),m=r(796),v=r(754),f=(r(12),r(70),{data:function(){return{activeTab:0}},props:{C_item:{required:!0}}}),h=r(23),component=Object(h.a)(f,(function(){var t=this,e=t._self._c;return e(n.a,{staticClass:"border-color rounded-lg",attrs:{outlined:"",flat:""}},[e(c.c,{staticClass:"pb-0"},[e(m.a,{attrs:{color:"primary darken-2"},model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},[e(d.a,[e("span",{staticClass:"text-capitalize text-body-2 font-weight-medium"},[t._v("Product description")])])],1)],1),t._v(" "),e(o.a),t._v(" "),e(c.c,[e(v.a,{model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},[e(l.a,[t._v(t._s(t.C_item.description||"Maybelline is finally here with its first high coverage BB cream, which is known as the Maybelline Super Cover BB Cream."))])],1)],1)],1)}),[],!1,null,"c31cbea0",null);e.default=component.exports},665:function(t,e,r){"use strict";r.r(e);var n=r(234),c=r(231),o=r(78),d=r(607),l=r(155),m=r(606),v={data:function(){return{items:[{icon:"mdi-check-decagram",title:"100% Original"},{icon:"mdi-clock-outline",title:"10 Day Replacement"},{icon:"mdi-shield-check-outline",title:"1 Year Warranty"}]}}},f=r(23),component=Object(f.a)(v,(function(){var t=this,e=t._self._c;return e(m.a,t._l(t.items,(function(r,m){return e(d.a,{key:m,attrs:{cols:"12",md:"4"}},[e(c.a,{staticClass:"mx-auto text-center rounded-lg py-5 border-color",attrs:{outlined:"",flat:""}},[e(o.c,[e("div",{staticClass:"card-icon"},[e(n.a,{attrs:{color:"rgba(13, 68, 251, 0.08)",size:"64"}},[e(l.a,{attrs:{color:"primary darken-2",large:""}},[t._v(t._s(r.icon))])],1)],1),t._v(" "),e("div",{staticClass:"title my-5 text-head text-body-1 font-weight-bold"},[t._v("\n          "+t._s(r.title)+"\n        ")])])],1)],1)})),1)}),[],!1,null,"5bd34e4c",null);e.default=component.exports},683:function(t,e,r){"use strict";r(650)},684:function(t,e,r){var n=r(8)(!1);n.push([t.i,".card-image[data-v-6d3a087c]{border:1px solid #c4cdd5;border-radius:16px}.the_btn[data-v-6d3a087c]{width:38px;height:38px}.color_box[data-v-6d3a087c]{height:16px;width:16px;border-radius:5px}.active-color[data-v-6d3a087c]{width:22px!important;height:22px!important}.mini-images .box-image[data-v-6d3a087c]{border:3px solid #0d44fb;background:rgba(22,28,36,.48);border-radius:8px}.quantity-controller[data-v-6d3a087c]{border-radius:8px;min-width:105px;border:1px solid #c4cdd5}.custom-border[data-v-6d3a087c]{border:2px solid #c4cdd5!important;box-shadow:0 11px 15px -7px rgba(145,158,171,.2),0 24px 38px 3px rgba(145,158,171,.14),0 9px 46px 8px rgba(145,158,171,.12)!important}",""]),t.exports=n},704:function(t,e,r){"use strict";r(13),r(12),r(10),r(4),r(14),r(11),r(15);var n=r(1),c=(r(107),r(632),r(634)),o=r(0),d=Object(o.i)("v-breadcrumbs__divider","li"),l=r(17),m=r(3);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}e.a=Object(m.a)(l.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(d,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var t=[],e=!!this.$scopedSlots.item,r=[],i=0;i<this.items.length;i++){var n=this.items[i];r.push(n.text),e?t.push(this.$scopedSlots.item({item:n})):t.push(this.$createElement(c.a,{key:r.join("."),props:n},[n.text])),i<this.items.length-1&&t.push(this.genDivider())}return t}},render:function(t){var e=this.$slots.default||this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}})},722:function(t,e,r){"use strict";r.r(e);var n=r(601),c=r(704),o=r(634),d=r(615),l=r(155),m=r(31),v=r(602),f=(r(96),r(4),r(243)),h={data:function(){return{products:f,C_item:{}}},mounted:function(){this.getTheProduct()},methods:{getTheProduct:function(){var t=this;this.C_item=this.products.find((function(e){return e.id==t.$route.params.id}))}},computed:{C_path:function(){return[{text:"Home",route:"/"},{text:this.C_item.title?this.C_item.title:"title",disabled:!0}]}}},x=(r(683),r(23)),component=Object(x.a)(h,(function(){var t=this,e=t._self._c;return e(n.a,{staticStyle:{"background-color":"#f3f4f8"}},[e(v.a,{staticClass:"pt-10 pb-0"},[e("section",{attrs:{id:"product-detail"}},[e(d.a,{attrs:{fluid:t.$vuetify.breakpoint.mdAndDown}},[e("div",{staticClass:"product_detail-header"},[e(m.c,{staticClass:"text-h6 text-sm-h5 text-md-h4 text-head font-weight-bold"},[t._v("\n            "+t._s(t.C_item.title)+"\n          ")]),t._v(" "),e(c.a,{attrs:{items:t.C_path},scopedSlots:t._u([{key:"divider",fn:function(){return[e(l.a,{staticClass:"px-0",attrs:{small:""}},[t._v("mdi-chevron-right")])]},proxy:!0},{key:"item",fn:function(r){var n=r.item;return[e(o.a,{staticClass:"custom_breadcrumbs_width pa-1",attrs:{disabled:n.disabled,nuxt:"",to:n.route,link:""}},[e(m.c,{staticClass:"text-caption"},[t._v("\n                  "+t._s(n.text)+"\n                ")])],1)]}}])})],1),t._v(" "),e("AppsTheCardItemContent",{attrs:{C_item:t.C_item}}),t._v(" "),e("TheProductTabs",{staticClass:"mt-4",attrs:{C_item:t.C_item}}),t._v(" "),e("div",{staticClass:"product_services mt-8"},[e("TheProductServices")],1)],1)],1)])],1)}),[],!1,null,"6d3a087c",null);e.default=component.exports;installComponents(component,{AppsTheCardItemContent:r(357).default,TheProductTabs:r(664).default,TheProductServices:r(665).default})},787:function(t,e,r){"use strict";r.r(e);var n={},c=r(23),component=Object(c.a)(n,(function(){return(0,this._self._c)("TheProduct")}),[],!1,null,"492ce5cd",null);e.default=component.exports;installComponents(component,{TheProduct:r(722).default})}}]);