(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8af5ee5e"],{"7a74":function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-footer",{attrs:{height:"auto",absolute:"",color:"transparent",app:"",flat:""}},[e("v-spacer"),e("div",[t._v("Created and Designed Mara Hernandez Villanueva © "+t._s((new Date).getFullYear()))]),e("v-spacer")],1)},a=[],o=e("0c7c"),s=e("6544"),r=e.n(s),p=(e("e93b"),e("c6f7")),c=e("b64a"),u=e("6a18"),d=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var e=arguments[i];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t},h={name:"v-footer",mixins:[Object(p["a"])(null,["height","inset"]),c["a"],u["a"]],props:{height:{default:32,type:[Number,String]},inset:Boolean},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},computedMarginBottom:function(){if(this.app)return this.$vuetify.application.bottom},computedPaddingLeft:function(){return this.app&&this.inset?this.$vuetify.application.left:0},computedPaddingRight:function(){return this.app&&this.inset?this.$vuetify.application.right:0},styles:function(){var t={height:isNaN(this.height)?this.height:this.height+"px"};return this.computedPaddingLeft&&(t.paddingLeft=this.computedPaddingLeft+"px"),this.computedPaddingRight&&(t.paddingRight=this.computedPaddingRight+"px"),this.computedMarginBottom&&(t.marginBottom=this.computedMarginBottom+"px"),t}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){var i=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:d({"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--inset":this.inset},this.themeClasses),style:this.styles,ref:"content"});return t("footer",i,this.$slots.default)}},l=e("9910"),f={},v=Object(o["a"])(f,n,a,!1,null,null,null);i["default"]=v.exports;r()(v,{VFooter:h,VSpacer:l["a"]})},9910:function(t,i,e){"use strict";var n=e("80d2"),a=e("a523"),o=(e("f134"),e("b57a")),s={name:"v-content",mixins:[o["a"]],props:{tag:{type:String,default:"main"}},computed:{styles:function(){var t=this.$vuetify.application,i=t.bar,e=t.top,n=t.right,a=t.footer,o=t.insetFooter,s=t.bottom,r=t.left;return{paddingTop:e+i+"px",paddingRight:n+"px",paddingBottom:a+o+s+"px",paddingLeft:r+"px"}}},render:function(t){var i={staticClass:"v-content",style:this.styles,ref:"content"};return t(this.tag,i,[t("div",{staticClass:"v-content__wrap"},this.$slots.default)])}},r=e("0e8f"),p=e("a722");e.d(i,"a",function(){return c});var c=Object(n["c"])("spacer","div","v-spacer");a["a"],r["a"],p["a"]},b57a:function(t,i,e){"use strict";var n=e("2b0e");i["a"]=n["a"].extend({name:"ssr-bootable",data:function(){return{isBooted:!1}},mounted:function(){var t=this;window.requestAnimationFrame(function(){t.$el.setAttribute("data-booted","true"),t.isBooted=!0})}})},c6f7:function(t,i,e){"use strict";e.d(i,"a",function(){return o});var n=e("c22b"),a=e("58df");function o(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(a["a"])(Object(n["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,i){i?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,i){this.$vuetify.application.unbind(this._uid,i)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,e=i.length;t<e;t++)this.$watch(i[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.bind(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unbind(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}},e93b:function(t,i,e){},f134:function(t,i,e){}}]);
//# sourceMappingURL=chunk-8af5ee5e.7ee37b87.js.map