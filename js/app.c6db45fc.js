(function(e){function n(n){for(var a,o,p=n[0],m=n[1],s=n[2],c=0,u=[];c<p.length;c++)o=p[c],r[o]&&u.push(r[o][0]),r[o]=0;for(a in m)Object.prototype.hasOwnProperty.call(m,a)&&(e[a]=m[a]);g&&g(n);while(u.length)u.shift()();return i.push.apply(i,s||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],a=!0,o=1;o<t.length;o++){var p=t[o];0!==r[p]&&(a=!1)}a&&(i.splice(n--,1),e=m(m.s=t[0]))}return e}var a={},o={app:0},r={app:0},i=[];function p(e){return m.p+"js/"+({"component-Gallery-vue":"component-Gallery-vue","component-ProjectsSingle-vue":"component-ProjectsSingle-vue","component-About-vue~component-Contact-vue":"component-About-vue~component-Contact-vue","component-About-vue":"component-About-vue","component-Contact-vue":"component-Contact-vue","component-Projects-vue":"component-Projects-vue","component-Welcome-vue":"component-Welcome-vue"}[e]||e)+"."+{"chunk-39948270":"9d02e39d","component-Gallery-vue":"8c3003c4","component-ProjectsSingle-vue":"420b3fa4","chunk-8af5ee5e":"7ee37b87","chunk-9b837cec":"47a91975","component-About-vue~component-Contact-vue":"b0adfcac","component-About-vue":"2a030c49","component-Contact-vue":"5851013a","component-Projects-vue":"439eee90","component-Welcome-vue":"bcd71e72","chunk-2d0c22aa":"47f42be6","chunk-2d22d207":"24f905f1","chunk-796c7757":"9e225a71"}[e]+".js"}function m(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,m),t.l=!0,t.exports}m.e=function(e){var n=[],t={"chunk-39948270":1,"component-Gallery-vue":1,"component-ProjectsSingle-vue":1,"chunk-8af5ee5e":1,"chunk-9b837cec":1,"component-About-vue~component-Contact-vue":1,"component-About-vue":1,"component-Contact-vue":1,"component-Projects-vue":1,"component-Welcome-vue":1,"chunk-796c7757":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise(function(n,t){for(var a="css/"+({"component-Gallery-vue":"component-Gallery-vue","component-ProjectsSingle-vue":"component-ProjectsSingle-vue","component-About-vue~component-Contact-vue":"component-About-vue~component-Contact-vue","component-About-vue":"component-About-vue","component-Contact-vue":"component-Contact-vue","component-Projects-vue":"component-Projects-vue","component-Welcome-vue":"component-Welcome-vue"}[e]||e)+"."+{"chunk-39948270":"29193a94","component-Gallery-vue":"aed949f4","component-ProjectsSingle-vue":"22f8ca7f","chunk-8af5ee5e":"b198c2f1","chunk-9b837cec":"0319d82e","component-About-vue~component-Contact-vue":"78a941ff","component-About-vue":"6106e092","component-Contact-vue":"94712656","component-Projects-vue":"a81bf465","component-Welcome-vue":"677b07eb","chunk-2d0c22aa":"31d6cfe0","chunk-2d22d207":"31d6cfe0","chunk-796c7757":"402e115d"}[e]+".css",r=m.p+a,i=document.getElementsByTagName("link"),p=0;p<i.length;p++){var s=i[p],c=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(c===a||c===r))return n()}var u=document.getElementsByTagName("style");for(p=0;p<u.length;p++){s=u[p],c=s.getAttribute("data-href");if(c===a||c===r)return n()}var g=document.createElement("link");g.rel="stylesheet",g.type="text/css",g.onload=n,g.onerror=function(n){var a=n&&n.target&&n.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.request=a,delete o[e],g.parentNode.removeChild(g),t(i)},g.href=r;var l=document.getElementsByTagName("head")[0];l.appendChild(g)}).then(function(){o[e]=0}));var a=r[e];if(0!==a)if(a)n.push(a[2]);else{var i=new Promise(function(n,t){a=r[e]=[n,t]});n.push(a[2]=i);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,m.nc&&c.setAttribute("nonce",m.nc),c.src=p(e),s=function(n){c.onerror=c.onload=null,clearTimeout(u);var t=r[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src,i=new Error("Loading chunk "+e+" failed.\n("+a+": "+o+")");i.type=a,i.request=o,t[1](i)}r[e]=void 0}};var u=setTimeout(function(){s({type:"timeout",target:c})},12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(n)},m.m=e,m.c=a,m.d=function(e,n,t){m.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},m.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},m.t=function(e,n){if(1&n&&(e=m(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(m.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)m.d(t,a,function(n){return e[n]}.bind(null,a));return t},m.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return m.d(n,"a",n),n},m.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},m.p="/",m.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=n,s=s.slice();for(var u=0;u<s.length;u++)n(s[u]);var g=c;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var a=t("4b43"),o=t.n(a);o.a},"1a5d":function(e,n,t){var a={"./About.vue":["f820","component-About-vue~component-Contact-vue","component-About-vue"],"./Contact.vue":["b8fa","component-About-vue~component-Contact-vue","component-Contact-vue"],"./Gallery.vue":["0d77","chunk-39948270","component-Gallery-vue"],"./Projects.vue":["acca","component-Projects-vue"],"./ProjectsSingle.vue":["44c6","chunk-39948270","component-ProjectsSingle-vue"],"./Welcome.vue":["eec5","component-Welcome-vue"]};function o(e){var n=a[e];return n?Promise.all(n.slice(1).map(t.e)).then(function(){var e=n[0];return t(e)}):Promise.resolve().then(function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n})}o.keys=function(){return Object.keys(a)},o.id="1a5d",e.exports=o},3605:function(e,n,t){},"4b43":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("097d");var a=t("2b0e"),o=t("bb71");t("b56c");a["a"].use(o["a"],{theme:{primary:"#B8CD7B",secondary:"#A2CED6",accent:"#73AB84",info:"#454851"},iconfont:"mdi",options:{customProperties:!0}});var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-btn",{attrs:{color:"secondary",rounded:""}},[e._t("default")],2)},i=[],p=t("0c7c"),m=t("6544"),s=t.n(m),c=t("8336"),u={},g=Object(p["a"])(u,r,i,!1,null,null,null),l=g.exports;s()(g,{VBtn:c["a"]});var d=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t(e.tag,{tag:"component",staticClass:"v-heading mb-3 font-weight-light"},[e._t("default")],2)},h=[],_={props:{tag:{type:String,default:"h1"}}},f=_,v=(t("9997"),Object(p["a"])(f,d,h,!1,null,null,null)),y=v.exports,j=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-layout",[t("v-flex",{attrs:{sm10:"","offset-sm1":""}},[t("v-responsive",{staticClass:"mt-5 dark"},[t("v-container",{attrs:{"fill-height":""}},[t("v-layout",{attrs:{"align-center":""}},[t("v-flex",{staticClass:"animated slideInDown"},[t("h3",{staticClass:"display-3"},[e._t("default")],2),t("span",{staticClass:"subheading"},[e._t("sub")],2),t("base-divider")],1)],1)],1)],1)],1)],1)},b=[],k=(t("edd3"),t("a523")),x=t("0e8f"),w=t("a722"),C=t("6b53"),P={},S=Object(p["a"])(P,j,b,!1,null,"5e3452be",null),A=S.exports;s()(S,{VContainer:k["a"],VFlex:x["a"],VLayout:w["a"],VResponsive:C["a"]});var z=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t(e.tag,{tag:"component",staticClass:"v-heading mb-3 font-weight-light"},[e._t("default")],2)},M=[],E={props:{tag:{type:String,default:"h1"}}},O=E,T=Object(p["a"])(O,z,M,!1,null,null,null),B=T.exports,D=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",{staticClass:"font-weight-light",staticStyle:{"line-height":"1.7 !important"}},[e._t("default")],2)},G=[],R={},H=Object(p["a"])(R,D,G,!1,null,null,null),W=H.exports,I=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-card",e._g(e._b({attrs:{tile:"",flat:""}},"v-card",e.$attrs,!1),e.$listeners),[e._t("default")],2)},$=[],J={name:"BaseCard",inheritAttrs:!1},N=J,V=t("b0af"),F=Object(p["a"])(N,I,$,!1,null,null,null),L=F.exports;s()(F,{VCard:V["a"]});var U=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("hr",{staticClass:"mhv-divider"})},K=[],Z=(t("cbc8"),{}),q=Object(p["a"])(Z,U,K,!1,null,"f5ece2c4",null),Y=q.exports;a["a"].component("BaseBtn",l),a["a"].component("BaseHeading",y),a["a"].component("BasePageHeading",A),a["a"].component("BaseSubheading",B),a["a"].component("BaseText",W),a["a"].component("BaseCard",L),a["a"].component("BaseDivider",Y);var Q=t("9917");a["a"].component("lightbox",Q["a"]);var X=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-app",[t("core-toolbar"),t("router-view"),t("core-footer")],1)},ee=[],ne={components:{CoreToolbar:function(){return t.e("chunk-9b837cec").then(t.bind(null,"d23b"))},CoreFooter:function(){return t.e("chunk-8af5ee5e").then(t.bind(null,"7a74"))}}},te=ne,ae=(t("034f"),t("7496")),oe=Object(p["a"])(te,X,ee,!1,null,null,null),re=oe.exports;s()(oe,{VApp:ae["a"]});var ie=t("2f62");a["a"].use(ie["a"]);var pe=new ie["a"].Store({state:{experience:{},projects:t("aad6")},getters:{getExperience:function(e){return e.experience},getExperienceBySlug:function(e){return function(n){return e.experience[n]}},getProjects:function(e){return e.projects},getProjectsBySlug:function(e,n){return function(n){return e.projects[n]}}}}),me=t("8c4f");function se(e){return function(){return t("1a5d")("./".concat(e,".vue"))}}a["a"].use(me["a"]);var ce=new me["a"]({mode:"hash",base:"/",routes:[{path:"/",name:"Welcome",component:se("Welcome")},{path:"/about",name:"About",component:se("About")},{path:"/projects",name:"Projects",component:se("Projects")},{path:"/projects/:slug",name:"ProjectsSingle",component:se("ProjectsSingle")},{path:"/gallery",name:"Gallery",component:se("Gallery")},{path:"/contact",name:"Contact",component:se("Contact")}],scrollBehavior:function(e,n,t){return{x:0,y:0}}});t("41e6"),t("4b3c");a["a"].config.productionTip=!1,new a["a"]({router:ce,store:pe,render:function(e){return e(re)}}).$mount("#app")},"5d40":function(e,n,t){},9997:function(e,n,t){"use strict";var a=t("5d40"),o=t.n(a);o.a},aad6:function(e){e.exports={"modern-consumption-in-luxury":{category:"Reports",hero:"modern_consumption_in_luxury/1.png",title:"How Does Modern Consumption Influence Counterfeits in the Luxury Market?",text:"This report examines how modern consumption, especially within Generation Z, influence counterfeits in the luxury market. The luxury market has had a steady growth and is still predicted to grow, but with popularity within the luxury market, comes growth in the counterfeit market as well.",images:[{name:"modern_consumption_in_luxury/1.png"},{name:"modern_consumption_in_luxury/2.png"},{name:"modern_consumption_in_luxury/3.png"},{name:"modern_consumption_in_luxury/4.png"},{name:"modern_consumption_in_luxury/5.png"},{name:"modern_consumption_in_luxury/6.png"},{name:"modern_consumption_in_luxury/7.png"},{name:"modern_consumption_in_luxury/8.png"},{name:"modern_consumption_in_luxury/9.png"},{name:"modern_consumption_in_luxury/10.png"},{name:"modern_consumption_in_luxury/11.png"},{name:"modern_consumption_in_luxury/12.png"}],date:"January 2019"},"generation-z-luxury-photoshoot":{category:"Styling",hero:"generation_z/1.jpg",title:"Generation Z and Luxury Photoshoot",text:"Photoshoot inspired by the importance of counterfeits in the luxury market, especially within Generation Z.",images:[{name:"generation_z/1.jpg"},{name:"generation_z/2.jpg"},{name:"generation_z/3.jpg"},{name:"generation_z/4.jpg"},{name:"generation_z/5.jpg"},{name:"generation_z/6.jpg"},{name:"generation_z/7.jpg"},{name:"generation_z/8.jpg"},{name:"generation_z/9.jpg"},{name:"generation_z/10.jpg"},{name:"generation_z/11.jpg"},{name:"generation_z/12.jpg"},{name:"generation_z/13.jpg"},{name:"generation_z/14.jpg"},{name:"generation_z/15.jpg"},{name:"generation_z/16.jpg"},{name:"generation_z/17.jpg"},{name:"generation_z/18.jpg"},{name:"generation_z/19.jpg"},{name:"generation_z/20.jpg"},{name:"generation_z/21.jpg"},{name:"generation_z/22.jpg"},{name:"generation_z/23.jpg"},{name:"generation_z/24.jpg"},{name:"generation_z/25.jpg"},{name:"generation_z/26.jpg"},{name:"generation_z/27.jpg"},{name:"generation_z/28.jpg"},{name:"generation_z/29.jpg"},{name:"generation_z/30.jpg"},{name:"generation_z/31.jpg"},{name:"generation_z/32.jpg"},{name:"generation_z/33.jpg"},{name:"generation_z/34.jpg"},{name:"generation_z/35.jpg"}],date:"January 2019"},"overconsumption-video":{category:"Video",hero:"counterfeits_video/1.png",title:"Reflection of Overconsumption Nowadays",text:"Video reflecting nowadays consumption and how luxury's market growth has impulsed counterfeits.",video:"https://player.vimeo.com/video/321051180",date:"November 2018"},"modern-consumption-analysis":{category:"Reports",hero:"counterfeit_presentation/1.png",title:"Modern Consumption Analysis",text:"Initial Analysis of Modern Consumption and it's Effect on Counterfeit Products in the Luxury Market",images:[{name:"counterfeit_presentation/1.png"},{name:"counterfeit_presentation/2.png"},{name:"counterfeit_presentation/3.png"},{name:"counterfeit_presentation/4.png"},{name:"counterfeit_presentation/5.png"},{name:"counterfeit_presentation/6.png"},{name:"counterfeit_presentation/7.png"},{name:"counterfeit_presentation/8.png"},{name:"counterfeit_presentation/9.png"}],date:"December 2018"},"sora-brand":{category:"Reports",hero:"sora_report/1.png",title:"Sora",text:"Sora is a sustainable denim brand created based on current consumer behaviour trends. Selfriedges was the proposed retailer and was analysed in order to predict sales success. ",images:[{name:"sora_report/1.png"},{name:"sora_report/2.png"},{name:"sora_report/3.png"},{name:"sora_report/4.png"},{name:"sora_report/5.png"},{name:"sora_report/6.png"},{name:"sora_report/7.png"},{name:"sora_report/8.png"},{name:"sora_report/9.png"},{name:"sora_report/10.png"},{name:"sora_report/11.png"},{name:"sora_report/12.png"},{name:"sora_report/13.png"},{name:"sora_report/14.png"},{name:"sora_report/15.png"},{name:"sora_report/16.png"},{name:"sora_report/17.png"}],date:"January 2018"},"sora-moodboards":{category:"Moodboards",hero:"sora_moodboards/1.png",title:"Sora Moodboards",text:"Inspiration of the Sora brand, its products, shapes and the innovative technologies in denim.  ",images:[{name:"sora_moodboards/1.png"},{name:"sora_moodboards/2.png"},{name:"sora_moodboards/3.png"}],date:"January 2018"},"kurv-store":{category:"Reports",hero:"kurv/13.png",title:"Kurv",text:"Exploratory research in retail logistics, distribution strategy and supply chain. Developed an innovative international strategy focusing on luxurious homewear and retail diaplay.",images:[{name:"kurv/1.png"},{name:"kurv/2.png"},{name:"kurv/3.png"},{name:"kurv/4.png"},{name:"kurv/5.png"},{name:"kurv/6.png"},{name:"kurv/7.png"},{name:"kurv/8.png"},{name:"kurv/9.png"},{name:"kurv/10.png"},{name:"kurv/11.png"},{name:"kurv/12.png"}],date:"May 2018"},"kalmar-photoshoot":{category:"Styling",hero:"kalmar_shoot/1.jpg",title:"Kalmar Photoshoot",text:"Photoshoot with Kalmar Products",images:[{name:"kalmar_shoot/2.jpg"},{name:"kalmar_shoot/3.jpg"},{name:"kalmar_shoot/4.jpg"},{name:"kalmar_shoot/5.jpg"},{name:"kalmar_shoot/6.jpg"},{name:"kalmar_shoot/7.jpg"}],date:"February 2019"},"kalmar-pop-up":{category:"Events",hero:"kalmar_pop_up/1.jpg",title:"Kalmar Pop-up Store",text:"Christmas Pop-Up Store in Eccleston Yard",images:[{name:"kalmar_pop_up/2.jpg"},{name:"kalmar_pop_up/3.jpg"},{name:"kalmar_pop_up/4.jpg"},{name:"kalmar_pop_up/5.jpg"},{name:"kalmar_pop_up/6.jpg"},{name:"kalmar_pop_up/7.jpg"}],date:"December 2018"},"paul-smith-digital-campaign":{category:"Reports",hero:"paul_smith/1.png",title:"Paul Smith Digital Strategy Campaign",text:"This report analysed the weakness of Paul Smith's digital strategy and proposed a new plan focused on consumer's facilitation when purchasing online.",images:[{name:"paul_smith/1.png"},{name:"paul_smith/2.png"},{name:"paul_smith/3.png"},{name:"paul_smith/4.png"},{name:"paul_smith/5.png"},{name:"paul_smith/6.png"},{name:"paul_smith/7.png"},{name:"paul_smith/8.png"},{name:"paul_smith/9.png"},{name:"paul_smith/10.png"},{name:"paul_smith/11.png"}],date:"March 2018"},"denim-market-analysis":{category:"Reports",hero:"denim/1.png",title:"Denim Market Analysis",text:"Analysis of the factors affecting the growth of the denim market.",images:[{name:"denim/1.png"},{name:"denim/2.png"},{name:"denim/3.png"},{name:"denim/4.png"},{name:"denim/5.png"},{name:"denim/6.png"},{name:"denim/7.png"},{name:"denim/8.png"},{name:"denim/9.png"}],date:"November 2017"},"90s-glitter-party":{category:"Events",hero:"glitter_party/1.jpg",title:"90's Glitter Party",text:"University Christmas Party, 90's Glitter Theme.",images:[{name:"glitter_party/1.jpg"},{name:"glitter_party/3.jpg"},{name:"glitter_party/4.jpg"}],date:"December 2018"},"india-as-an-emerging-market":{category:"Reports",hero:"india_emerging_market/1.png",title:"India: Emerging Market",text:"Analysis on India as an Emerging Market and How to Explore Business Opportunities.",images:[{name:"india_emerging_market/1.png"},{name:"india_emerging_market/2.png"},{name:"india_emerging_market/3.png"},{name:"india_emerging_market/4.png"},{name:"india_emerging_market/5.png"},{name:"india_emerging_market/6.png"},{name:"india_emerging_market/7.png"},{name:"india_emerging_market/8.png"},{name:"india_emerging_market/9.png"}],date:"April 2018"},"trumpesters-analysis":{category:"Reports",hero:"consuming_behaviour/1.png",title:"Consumer Behaviour Analysis",text:"An exploratory report of the sub-culture based on Donald Trump protesters and University students. ",images:[{name:"consuming_behaviour/1.png"},{name:"consuming_behaviour/2.png"},{name:"consuming_behaviour/3.png"},{name:"consuming_behaviour/4.png"},{name:"consuming_behaviour/5.png"}],date:"May 2017"},"21st-century-challenges":{category:"Reports",hero:"migration/1.png",title:"Challenges in the 21st Century and How Art, Fashion and Design can Influence Change",text:"The challenges we Face in The 21st Century and How Can Art, Design and Fashion Influence Change For a More Sustainable and Ethical Existance",images:[{name:"migration/1.png"},{name:"migration/2.png"},{name:"migration/3.png"},{name:"migration/4.png"},{name:"migration/5.png"},{name:"migration/6.png"},{name:"migration/7.png"},{name:"migration/8.png"},{name:"migration/9.png"},{name:"migration/10.png"}],date:"January 2019"},"the-state-of-water":{category:"Reports",hero:"water/1.png",title:"The State of Water in The 21st Century",text:"This essay will focus on water and how this is a social problem we face in the 21st century, all over the world; this subject is very complex and has different areas to talk about.",images:[{name:"water/1.png"},{name:"water/2.png"},{name:"water/3.png"},{name:"water/4.png"},{name:"water/5.png"},{name:"water/6.png"},{name:"water/7.png"},{name:"water/8.png"},{name:"water/9.png"}],date:"January 2018"},"hm-inspired-styling-anna":{category:"Styling",hero:"anna/1.jpg",title:"H&M Inspired Styling",text:"H&M inspired styling with Anna",images:[{name:"anna/1.jpg"},{name:"anna/3.jpg"},{name:"anna/4.jpg"},{name:"anna/6.jpg"},{name:"anna/8.jpg"},{name:"anna/9.jpg"},{name:"anna/10.jpg"},{name:"anna/11.jpg"},{name:"anna/12.jpg"}],date:"March 2017"},"hm-creative-catalogue":{category:"Reports",hero:"hm_catalogue/1.png",title:"H&M Creative Products",text:"H&M Proposed Products",images:[{name:"hm_catalogue/1.png"},{name:"hm_catalogue/2.png"},{name:"hm_catalogue/3.png"},{name:"hm_catalogue/4.png"},{name:"hm_catalogue/5.png"},{name:"hm_catalogue/6.png"},{name:"hm_catalogue/7.png"},{name:"hm_catalogue/8.png"}],date:"May 2017"},"hm-inspired-styling-rosie":{category:"Styling",hero:"rosie/1.jpg",title:"H&M inspired Styling",text:"H&M inspired styling with Rosie",images:[{name:"rosie/1.jpg"},{name:"rosie/2.jpg"},{name:"rosie/3.jpg"},{name:"rosie/4.jpg"},{name:"rosie/5.jpg"},{name:"rosie/6.jpg"},{name:"rosie/7.jpg"},{name:"rosie/10.jpg"},{name:"rosie/9.jpg"}],date:"March 2017"},"hm-conscious-campaign":{category:"Reports",hero:"hm_campaign/1.png",title:"H&M Creative Campaign",text:"This report proposes H&M Conscious collaboration with local artists to create patches and stickers with a month-long workshop in stores.",images:[{name:"hm_campaign/1.png"},{name:"hm_campaign/2.png"},{name:"hm_campaign/3.png"},{name:"hm_campaign/4.png"},{name:"hm_campaign/5.png"},{name:"hm_campaign/6.png"},{name:"hm_campaign/7.png"},{name:"hm_campaign/8.png"},{name:"hm_campaign/9.png"}],date:"May 2017"},"pearl-earring-photoshoot":{category:"Styling",hero:"centro_pearl/1.jpg",title:"Girl with a Pearl Earring Inspired Phosothoot",text:"Photoshoot in Centro, School of Art and Design in Mexico City",images:[{name:"centro_pearl/1.jpg"},{name:"centro_pearl/2.jpg"},{name:"centro_pearl/3.jpg"}],date:"July 2014"},"80s-inspired-photoshoot":{category:"Styling",hero:"80s/1.jpg",title:"80's Inspired Photoshoot",images:[{name:"80s/2.jpg"},{name:"80s/1.jpg"},{name:"80s/3.jpg"}],date:"May 2011"}}},b56c:function(e,n,t){},b60f:function(e,n,t){},cbc8:function(e,n,t){"use strict";var a=t("3605"),o=t.n(a);o.a},edd3:function(e,n,t){"use strict";var a=t("b60f"),o=t.n(a);o.a}});
//# sourceMappingURL=app.c6db45fc.js.map