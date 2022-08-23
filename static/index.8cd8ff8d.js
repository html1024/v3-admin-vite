import{d as e,a as t,c as a,o as n,b as i,e as r,w as l,T as s,f as o,u as c,r as d,g as u,h,_ as f,i as p,j as m,k as g,F as w,l as v,m as A,t as b,n as y,p as C,q as k,s as x,E,v as S,x as V,y as T,z as B,A as D,B as F,C as _,D as L,G as I,H as M,I as R,J as O,K as N,L as P,M as Y,N as j,O as Q,P as H,Q as z,R as q,S as U,U as J,V as X,W as G}from"./index.a37fc666.js";import{_ as K}from"./index.vue_vue_type_script_setup_true_lang.bd0e5122.js";const W=!0,Z=!0,$=!0,ee=!0,te=!0,ae=!0,ne=e({id:"settings",state:()=>({fixedHeader:$,showSettings:W,showTagsView:Z,showSidebarLogo:ee,showThemeSwitch:te,showScreenfull:ae}),actions:{changeSetting(e){const{key:t,value:a}=e;switch(t){case"fixedHeader":this.fixedHeader=a;break;case"showSettings":this.showSettings=a;break;case"showSidebarLogo":this.showSidebarLogo=a;break;case"showTagsView":this.showTagsView=a;break;case"showThemeSwitch":this.showThemeSwitch=a;break;case"showScreenfull":this.showScreenfull=a}}}}),ie={class:"app-main"},re=f(t({__name:"AppMain",setup(e){const t=h(),f=a((()=>t.path));return(e,t)=>{const a=u("router-view");return n(),i("section",ie,[r(a,null,{default:l((({Component:e})=>[r(s,{name:"fade-transform",mode:"out-in"},{default:l((()=>[(n(),o(d(e),{key:c(f)}))])),_:2},1024)])),_:1})])}}}),[["__scopeId","data-v-0058dddf"]]);function le(e,t){void 0===t&&(t={});for(var a=function(e){for(var t=[],a=0;a<e.length;){var n=e[a];if("*"!==n&&"+"!==n&&"?"!==n)if("\\"!==n)if("{"!==n)if("}"!==n)if(":"!==n)if("("!==n)t.push({type:"CHAR",index:a,value:e[a++]});else{var i=1,r="";if("?"===e[s=a+1])throw new TypeError('Pattern cannot start with "?" at '.concat(s));for(;s<e.length;)if("\\"!==e[s]){if(")"===e[s]){if(0==--i){s++;break}}else if("("===e[s]&&(i++,"?"!==e[s+1]))throw new TypeError("Capturing groups are not allowed at ".concat(s));r+=e[s++]}else r+=e[s++]+e[s++];if(i)throw new TypeError("Unbalanced pattern at ".concat(a));if(!r)throw new TypeError("Missing pattern at ".concat(a));t.push({type:"PATTERN",index:a,value:r}),a=s}else{for(var l="",s=a+1;s<e.length;){var o=e.charCodeAt(s);if(!(o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122||95===o))break;l+=e[s++]}if(!l)throw new TypeError("Missing parameter name at ".concat(a));t.push({type:"NAME",index:a,value:l}),a=s}else t.push({type:"CLOSE",index:a,value:e[a++]});else t.push({type:"OPEN",index:a,value:e[a++]});else t.push({type:"ESCAPED_CHAR",index:a++,value:e[a++]});else t.push({type:"MODIFIER",index:a,value:e[a++]})}return t.push({type:"END",index:a,value:""}),t}(e),n=t.prefixes,i=void 0===n?"./":n,r="[^".concat(function(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}(t.delimiter||"/#?"),"]+?"),l=[],s=0,o=0,c="",d=function(e){if(o<a.length&&a[o].type===e)return a[o++].value},u=function(e){var t=d(e);if(void 0!==t)return t;var n=a[o],i=n.type,r=n.index;throw new TypeError("Unexpected ".concat(i," at ").concat(r,", expected ").concat(e))},h=function(){for(var e,t="";e=d("CHAR")||d("ESCAPED_CHAR");)t+=e;return t};o<a.length;){var f=d("CHAR"),p=d("NAME"),m=d("PATTERN");if(p||m){var g=f||"";-1===i.indexOf(g)&&(c+=g,g=""),c&&(l.push(c),c=""),l.push({name:p||s++,prefix:g,suffix:"",pattern:m||r,modifier:d("MODIFIER")||""})}else{var w=f||d("ESCAPED_CHAR");if(w)c+=w;else if(c&&(l.push(c),c=""),d("OPEN")){g=h();var v=d("NAME")||"",A=d("PATTERN")||"",b=h();u("CLOSE"),l.push({name:v||(A?s++:""),pattern:v&&!A?r:A,prefix:g,suffix:b,modifier:d("MODIFIER")||""})}else u("END")}}return l}function se(e,t){return function(e,t){void 0===t&&(t={});var a=function(e){return e&&e.sensitive?"":"i"}(t),n=t.encode,i=void 0===n?function(e){return e}:n,r=t.validate,l=void 0===r||r,s=e.map((function(e){if("object"==typeof e)return new RegExp("^(?:".concat(e.pattern,")$"),a)}));return function(t){for(var a="",n=0;n<e.length;n++){var r=e[n];if("string"!=typeof r){var o=t?t[r.name]:void 0,c="?"===r.modifier||"*"===r.modifier,d="*"===r.modifier||"+"===r.modifier;if(Array.isArray(o)){if(!d)throw new TypeError('Expected "'.concat(r.name,'" to not repeat, but got an array'));if(0===o.length){if(c)continue;throw new TypeError('Expected "'.concat(r.name,'" to not be empty'))}for(var u=0;u<o.length;u++){var h=i(o[u],r);if(l&&!s[n].test(h))throw new TypeError('Expected all "'.concat(r.name,'" to match "').concat(r.pattern,'", but got "').concat(h,'"'));a+=r.prefix+h+r.suffix}}else if("string"!=typeof o&&"number"!=typeof o){if(!c){var f=d?"an array":"a string";throw new TypeError('Expected "'.concat(r.name,'" to be ').concat(f))}}else{h=i(String(o),r);if(l&&!s[n].test(h))throw new TypeError('Expected "'.concat(r.name,'" to match "').concat(r.pattern,'", but got "').concat(h,'"'));a+=r.prefix+h+r.suffix}}else a+=r}return a}}(le(e,t),t)}const oe={key:0,class:"no-redirect"},ce=["onClick"],de=f(t({__name:"index",setup(e){const t=h(),a=A(),s=p([]),c=()=>{s.value=t.matched.filter((e=>e.meta&&e.meta.title&&!1!==e.meta.breadcrumb))},d=e=>{const{redirect:n,path:i}=e;n?a.push(n).catch((e=>{console.warn(e)})):a.push((e=>{const{params:a}=t;return se(e)(a)})(i)).catch((e=>{console.warn(e)}))};return m((()=>t.path),(e=>{e.startsWith("/redirect/")||c()})),c(),(e,t)=>{const a=u("el-breadcrumb-item"),c=u("el-breadcrumb");return n(),o(c,{class:"app-breadcrumb"},{default:l((()=>[r(v,{name:"breadcrumb"},{default:l((()=>[(n(!0),i(w,null,g(s.value,((e,t)=>(n(),o(a,{key:e.path},{default:l((()=>["noRedirect"===e.redirect||t===s.value.length-1?(n(),i("span",oe,b(e.meta.title),1)):(n(),i("a",{key:1,onClick:y((t=>d(e)),["prevent"])},b(e.meta.title),9,ce))])),_:2},1024)))),128))])),_:1})])),_:1})}}}),[["__scopeId","data-v-4fcbe3f2"]]),ue=f(t({__name:"index",props:{isActive:{type:Boolean,default:!1}},emits:["toggle-click"],setup(e,{emit:t}){const a=()=>{t("toggle-click")};return(t,s)=>{const d=u("el-icon");return n(),i("div",{onClick:a},[r(d,{size:20,class:"icon"},{default:l((()=>[e.isActive?(n(),o(c(C),{key:0})):(n(),o(c(k),{key:1}))])),_:1})])}}}),[["__scopeId","data-v-b4196d52"]]),he=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],fe=(()=>{if("undefined"==typeof document)return!1;const e=he[0],t={};for(const a of he){if((null==a?void 0:a[1])in document){for(const[n,i]of a.entries())t[e[n]]=i;return t}}return!1})(),pe={change:fe.fullscreenchange,error:fe.fullscreenerror};let me={request:(e=document.documentElement,t)=>new Promise(((a,n)=>{const i=()=>{me.off("change",i),a()};me.on("change",i);const r=e[fe.requestFullscreen](t);r instanceof Promise&&r.then(i).catch(n)})),exit:()=>new Promise(((e,t)=>{if(!me.isFullscreen)return void e();const a=()=>{me.off("change",a),e()};me.on("change",a);const n=document[fe.exitFullscreen]();n instanceof Promise&&n.then(a).catch(t)})),toggle:(e,t)=>me.isFullscreen?me.exit():me.request(e,t),onchange(e){me.on("change",e)},onerror(e){me.on("error",e)},on(e,t){const a=pe[e];a&&document.addEventListener(a,t,!1)},off(e,t){const a=pe[e];a&&document.removeEventListener(a,t,!1)},raw:fe};Object.defineProperties(me,{isFullscreen:{get:()=>Boolean(document[fe.fullscreenElement])},element:{enumerable:!0,get:()=>{var e;return null!=(e=document[fe.fullscreenElement])?e:void 0}},isEnabled:{enumerable:!0,get:()=>Boolean(document[fe.fullscreenEnabled])}}),fe||(me={isEnabled:!1});const ge=me,we=f(t({__name:"index",setup(e){const t=p("全屏"),a=p(!1),s=()=>{ge.isEnabled?ge.toggle():E.warning("您的浏览器无法工作")},o=()=>{a.value=ge.isFullscreen,t.value=ge.isFullscreen?"退出全屏":"全屏"};return ge.on("change",o),x((()=>{ge.isEnabled&&ge.off("change",o)})),(e,o)=>{const c=u("svg-icon"),d=u("el-tooltip");return n(),i("div",{onClick:s},[r(d,{effect:"dark",content:t.value,placement:"bottom"},{default:l((()=>[r(c,{name:a.value?"fullscreen-exit":"fullscreen"},null,8,["name"])])),_:1},8,["content"])])}}}),[["__scopeId","data-v-ecf0ac31"]]),ve=e=>(_("data-v-9fa1296c"),e=e(),L(),e),Ae={class:"navigation-bar"},be={class:"right-menu"},ye={target:"_blank",href:"https://juejin.cn/post/7089377403717287972"},Ce=F("V3-Admin-Vite 中文文档"),ke={target:"_blank",href:"https://github.com/un-pany/v3-admin-vite"},xe=F("V3-Admin-Vite GitHub"),Ee={target:"_blank",href:"https://gitee.com/un-pany/v3-admin-vite"},Se=F("V3-Admin-Vite Gitee"),Ve={target:"_blank",href:"https://juejin.cn/post/6963876125428678693"},Te=F("V3-Admin 中文文档"),Be={target:"_blank",href:"https://github.com/un-pany/v3-admin/blob/master/README.en.md"},De=F("V3-Admin English Docs"),Fe={target:"_blank",href:"https://github.com/un-pany/v3-admin"},_e=F("V3-Admin GitHub"),Le={target:"_blank",href:"https://gitee.com/un-pany/v3-admin"},Ie=F("V3-Admin Gitee"),Me=ve((()=>T("span",{style:{display:"block"}},"退出登录",-1))),Re=f(t({__name:"index",setup(e){const t=A(),s=S(),d=ne(),h=V(),f=a((()=>s.sidebar)),p=a((()=>d.showThemeSwitch)),m=a((()=>d.showScreenfull)),g=()=>{s.toggleSidebar(!1)},w=()=>{h.logout(),t.push("/login")};return(e,t)=>{const a=u("el-avatar"),s=u("el-dropdown-item"),d=u("el-dropdown-menu"),h=u("el-dropdown");return n(),i("div",Ae,[r(ue,{"is-active":c(f).opened,class:"hamburger",onToggleClick:g},null,8,["is-active"]),r(de,{class:"breadcrumb"}),T("div",be,[c(m)?(n(),o(we,{key:0,class:"right-menu-item"})):B("",!0),c(p)?(n(),o(K,{key:1,class:"right-menu-item"})):B("",!0),r(h,{class:"right-menu-item"},{dropdown:l((()=>[r(d,null,{default:l((()=>[T("a",ye,[r(s,null,{default:l((()=>[Ce])),_:1})]),T("a",ke,[r(s,null,{default:l((()=>[xe])),_:1})]),T("a",Ee,[r(s,null,{default:l((()=>[Se])),_:1})]),T("a",Ve,[r(s,{divided:""},{default:l((()=>[Te])),_:1})]),T("a",Be,[r(s,null,{default:l((()=>[De])),_:1})]),T("a",Fe,[r(s,null,{default:l((()=>[_e])),_:1})]),T("a",Le,[r(s,null,{default:l((()=>[Ie])),_:1})]),r(s,{divided:"",onClick:w},{default:l((()=>[Me])),_:1})])),_:1})])),default:l((()=>[r(a,{icon:c(D),size:34},null,8,["icon"])])),_:1})])])}}}),[["__scopeId","data-v-9fa1296c"]]),Oe=e=>(_("data-v-df8029fa"),e=e(),L(),e),Ne={class:"drawer-container"},Pe=Oe((()=>T("h3",{class:"drawer-title"},"系统布局配置",-1))),Ye={class:"drawer-item"},je=Oe((()=>T("span",null,"显示标签栏",-1))),Qe={class:"drawer-item"},He=Oe((()=>T("span",null,"显示侧边栏 Logo",-1))),ze={class:"drawer-item"},qe=Oe((()=>T("span",null,"固定 Header",-1))),Ue={class:"drawer-item"},Je=Oe((()=>T("span",null,"显示切换主题按钮",-1))),Xe={class:"drawer-item"},Ge=Oe((()=>T("span",null,"显示全屏按钮",-1))),Ke=f(t({__name:"index",setup(e){const t=ne(),a=I({fixedHeader:t.fixedHeader,showTagsView:t.showTagsView,showSidebarLogo:t.showSidebarLogo,showThemeSwitch:t.showThemeSwitch,showScreenfull:t.showScreenfull});return m((()=>a.fixedHeader),(e=>{t.changeSetting({key:"fixedHeader",value:e})})),m((()=>a.showTagsView),(e=>{t.changeSetting({key:"showTagsView",value:e})})),m((()=>a.showSidebarLogo),(e=>{t.changeSetting({key:"showSidebarLogo",value:e})})),m((()=>a.showThemeSwitch),(e=>{t.changeSetting({key:"showThemeSwitch",value:e})})),m((()=>a.showScreenfull),(e=>{t.changeSetting({key:"showScreenfull",value:e})})),(e,t)=>{const l=u("el-switch");return n(),i("div",Ne,[T("div",null,[Pe,T("div",Ye,[je,r(l,{modelValue:a.showTagsView,"onUpdate:modelValue":t[0]||(t[0]=e=>a.showTagsView=e),class:"drawer-switch"},null,8,["modelValue"])]),T("div",Qe,[He,r(l,{modelValue:a.showSidebarLogo,"onUpdate:modelValue":t[1]||(t[1]=e=>a.showSidebarLogo=e),class:"drawer-switch"},null,8,["modelValue"])]),T("div",ze,[qe,r(l,{modelValue:a.fixedHeader,"onUpdate:modelValue":t[2]||(t[2]=e=>a.fixedHeader=e),class:"drawer-switch"},null,8,["modelValue"])]),T("div",Ue,[Je,r(l,{modelValue:a.showThemeSwitch,"onUpdate:modelValue":t[3]||(t[3]=e=>a.showThemeSwitch=e),class:"drawer-switch"},null,8,["modelValue"])]),T("div",Xe,[Ge,r(l,{modelValue:a.showScreenfull,"onUpdate:modelValue":t[4]||(t[4]=e=>a.showScreenfull=e),class:"drawer-switch"},null,8,["modelValue"])])])])}}}),[["__scopeId","data-v-df8029fa"]]),We=e=>/^(https?:|mailto:|tel:)/.test(e);function Ze(e){if("string"!=typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function $e(e,t){for(var a,n="",i=0,r=-1,l=0,s=0;s<=e.length;++s){if(s<e.length)a=e.charCodeAt(s);else{if(47===a)break;a=47}if(47===a){if(r===s-1||1===l);else if(r!==s-1&&2===l){if(n.length<2||2!==i||46!==n.charCodeAt(n.length-1)||46!==n.charCodeAt(n.length-2))if(n.length>2){var o=n.lastIndexOf("/");if(o!==n.length-1){-1===o?(n="",i=0):i=(n=n.slice(0,o)).length-1-n.lastIndexOf("/"),r=s,l=0;continue}}else if(2===n.length||1===n.length){n="",i=0,r=s,l=0;continue}t&&(n.length>0?n+="/..":n="..",i=2)}else n.length>0?n+="/"+e.slice(r+1,s):n=e.slice(r+1,s),i=s-r-1;r=s,l=0}else 46===a&&-1!==l?++l:l=-1}return n}var et={resolve:function(){for(var e,t="",a=!1,n=arguments.length-1;n>=-1&&!a;n--){var i;n>=0?i=arguments[n]:(void 0===e&&(e=process.cwd()),i=e),Ze(i),0!==i.length&&(t=i+"/"+t,a=47===i.charCodeAt(0))}return t=$e(t,!a),a?t.length>0?"/"+t:"/":t.length>0?t:"."},normalize:function(e){if(Ze(e),0===e.length)return".";var t=47===e.charCodeAt(0),a=47===e.charCodeAt(e.length-1);return 0!==(e=$e(e,!t)).length||t||(e="."),e.length>0&&a&&(e+="/"),t?"/"+e:e},isAbsolute:function(e){return Ze(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,t=0;t<arguments.length;++t){var a=arguments[t];Ze(a),a.length>0&&(void 0===e?e=a:e+="/"+a)}return void 0===e?".":et.normalize(e)},relative:function(e,t){if(Ze(e),Ze(t),e===t)return"";if((e=et.resolve(e))===(t=et.resolve(t)))return"";for(var a=1;a<e.length&&47===e.charCodeAt(a);++a);for(var n=e.length,i=n-a,r=1;r<t.length&&47===t.charCodeAt(r);++r);for(var l=t.length-r,s=i<l?i:l,o=-1,c=0;c<=s;++c){if(c===s){if(l>s){if(47===t.charCodeAt(r+c))return t.slice(r+c+1);if(0===c)return t.slice(r+c)}else i>s&&(47===e.charCodeAt(a+c)?o=c:0===c&&(o=0));break}var d=e.charCodeAt(a+c);if(d!==t.charCodeAt(r+c))break;47===d&&(o=c)}var u="";for(c=a+o+1;c<=n;++c)c!==n&&47!==e.charCodeAt(c)||(0===u.length?u+="..":u+="/..");return u.length>0?u+t.slice(r+o):(r+=o,47===t.charCodeAt(r)&&++r,t.slice(r))},_makeLong:function(e){return e},dirname:function(e){if(Ze(e),0===e.length)return".";for(var t=e.charCodeAt(0),a=47===t,n=-1,i=!0,r=e.length-1;r>=1;--r)if(47===(t=e.charCodeAt(r))){if(!i){n=r;break}}else i=!1;return-1===n?a?"/":".":a&&1===n?"//":e.slice(0,n)},basename:function(e,t){if(void 0!==t&&"string"!=typeof t)throw new TypeError('"ext" argument must be a string');Ze(e);var a,n=0,i=-1,r=!0;if(void 0!==t&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";var l=t.length-1,s=-1;for(a=e.length-1;a>=0;--a){var o=e.charCodeAt(a);if(47===o){if(!r){n=a+1;break}}else-1===s&&(r=!1,s=a+1),l>=0&&(o===t.charCodeAt(l)?-1==--l&&(i=a):(l=-1,i=s))}return n===i?i=s:-1===i&&(i=e.length),e.slice(n,i)}for(a=e.length-1;a>=0;--a)if(47===e.charCodeAt(a)){if(!r){n=a+1;break}}else-1===i&&(r=!1,i=a+1);return-1===i?"":e.slice(n,i)},extname:function(e){Ze(e);for(var t=-1,a=0,n=-1,i=!0,r=0,l=e.length-1;l>=0;--l){var s=e.charCodeAt(l);if(47!==s)-1===n&&(i=!1,n=l+1),46===s?-1===t?t=l:1!==r&&(r=1):-1!==t&&(r=-1);else if(!i){a=l+1;break}}return-1===t||-1===n||0===r||1===r&&t===n-1&&t===a+1?"":e.slice(t,n)},format:function(e){if(null===e||"object"!=typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,t){var a=t.dir||t.root,n=t.base||(t.name||"")+(t.ext||"");return a?a===t.root?a+n:a+e+n:n}("/",e)},parse:function(e){Ze(e);var t={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return t;var a,n=e.charCodeAt(0),i=47===n;i?(t.root="/",a=1):a=0;for(var r=-1,l=0,s=-1,o=!0,c=e.length-1,d=0;c>=a;--c)if(47!==(n=e.charCodeAt(c)))-1===s&&(o=!1,s=c+1),46===n?-1===r?r=c:1!==d&&(d=1):-1!==r&&(d=-1);else if(!o){l=c+1;break}return-1===r||-1===s||0===d||1===d&&r===s-1&&r===l+1?-1!==s&&(t.base=t.name=0===l&&i?e.slice(1,s):e.slice(l,s)):(0===l&&i?(t.name=e.slice(1,r),t.base=e.slice(1,s)):(t.name=e.slice(l,r),t.base=e.slice(l,s)),t.ext=e.slice(r,s)),l>0?t.dir=e.slice(0,l-1):i&&(t.dir="/"),t},sep:"/",delimiter:":",win32:null,posix:null};et.posix=et;var tt=et;const at=["href"],nt=t({__name:"SidebarItemLink",props:{to:{type:String,required:!0}},setup(e){const t=e,a=A(),r=()=>{a.push(t.to).catch((e=>{console.warn(e)}))};return(t,a)=>c(We)(e.to)?(n(),i("a",{key:0,href:e.to,target:"_blank",rel:"noopener"},[M(t.$slots,"default")],8,at)):(n(),i("div",{key:1,onClick:r},[M(t.$slots,"default")]))}}),it={key:1},rt=f(t({__name:"SidebarItem",props:{item:{type:Object,required:!0},isCollapse:{type:Boolean,required:!1},isFirstLevel:{type:Boolean,default:!0},basePath:{type:String,required:!0}},setup(e){const t=e,s=a((()=>!(!t.item.meta||!t.item.meta.alwaysShow))),d=a((()=>{if(t.item.children){return t.item.children.filter((e=>!(e.meta&&e.meta.hidden))).length}return 0})),h=a((()=>{if(d.value>1)return null;if(t.item.children)for(const e of t.item.children)if(!e.meta||!e.meta.hidden)return e;return{...t.item,path:""}})),f=e=>We(e)?e:We(t.basePath)?t.basePath:tt.resolve(t.basePath,e);return(t,a)=>{const d=u("svg-icon"),p=u("el-menu-item"),m=u("sidebar-item",!0),v=u("el-sub-menu");return e.item.meta&&e.item.meta.hidden?B("",!0):(n(),i("div",{key:0,class:O({"simple-mode":e.isCollapse,"first-level":e.isFirstLevel})},[c(s)||!c(h)||c(h).children?(n(),o(v,{key:1,index:f(e.item.path),"popper-append-to-body":""},{title:l((()=>[e.item.meta&&e.item.meta.icon?(n(),o(d,{key:0,name:e.item.meta.icon},null,8,["name"])):B("",!0),e.item.meta&&e.item.meta.title?(n(),i("span",it,b(e.item.meta.title),1)):B("",!0)])),default:l((()=>[e.item.children?(n(!0),i(w,{key:0},g(e.item.children,(t=>(n(),o(m,{key:t.path,item:t,"is-collapse":e.isCollapse,"is-first-level":!1,"base-path":f(t.path)},null,8,["item","is-collapse","base-path"])))),128)):B("",!0)])),_:1},8,["index"])):(n(),i(w,{key:0},[c(h).meta?(n(),o(nt,{key:0,to:f(c(h).path)},{default:l((()=>[r(p,{index:f(c(h).path)},R({default:l((()=>[c(h).meta.icon?(n(),o(d,{key:0,name:c(h).meta.icon},null,8,["name"])):B("",!0)])),_:2},[c(h).meta.title?{name:"title",fn:l((()=>[F(b(c(h).meta.title),1)]))}:void 0]),1032,["index"])])),_:1},8,["to"])):B("",!0)],64))],2))}}}),[["__scopeId","data-v-5ec0161c"]]),lt=e=>(_("data-v-3a14b2a4"),e=e(),L(),e),st=lt((()=>T("img",{src:"data:image/png;base64,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",class:"sidebar-logo"},null,-1))),ot=lt((()=>T("img",{src:"/v3-admin-vite/static/logo-text-1.0f451132.png",class:"sidebar-logo-text"},null,-1))),ct=f(t({__name:"SidebarLogo",props:{collapse:{type:Boolean,default:!0}},setup:e=>(t,a)=>{const c=u("router-link");return n(),i("div",{class:O(["sidebar-logo-container",{collapse:e.collapse}])},[r(s,{name:"sidebarLogoFade"},{default:l((()=>[e.collapse?(n(),o(c,{key:"collapse",class:"sidebar-logo-link",to:"/"},{default:l((()=>[st])),_:1})):(n(),o(c,{key:"expand",class:"sidebar-logo-link",to:"/"},{default:l((()=>[ot])),_:1}))])),_:1})],2)}}),[["__scopeId","data-v-3a14b2a4"]]),dt=e=>{let t="";try{t=getComputedStyle(document.documentElement).getPropertyValue(e)}catch(a){console.error(a)}return t},ut=f(t({__name:"index",setup(e){const t=dt("--v3-sidebar-menu-bg-color"),s=dt("--v3-sidebar-menu-text-color"),d=dt("--v3-sidebar-menu-active-text-color"),f=h(),p=a((()=>S().sidebar)),m=a((()=>N().routes)),v=a((()=>ne().showSidebarLogo)),A=a((()=>{const{meta:e,path:t}=f;return null===e&&void 0===e||!e.activeMenu?t:e.activeMenu})),b=a((()=>!p.value.opened));return(e,a)=>{const h=u("el-menu"),f=u("el-scrollbar");return n(),i("div",{class:O({"has-logo":c(v)})},[c(v)?(n(),o(ct,{key:0,collapse:c(b)},null,8,["collapse"])):B("",!0),r(f,{"wrap-class":"scrollbar-wrapper"},{default:l((()=>[r(h,{collapse:c(b),"unique-opened":!0,"default-active":c(A),"background-color":c(t),"text-color":c(s),"active-text-color":c(d),mode:"vertical"},{default:l((()=>[(n(!0),i(w,null,g(c(m),(e=>(n(),o(rt,{key:e.path,item:e,"base-path":e.path,"is-collapse":c(b)},null,8,["item","base-path","is-collapse"])))),128))])),_:1},8,["collapse","default-active","background-color","text-color","active-text-color"])])),_:1})],2)}}}),[["__scopeId","data-v-69e8dfff"]]),ht=e({id:"tags-view",state:()=>({visitedViews:[]}),actions:{addVisitedView(e){var t;this.visitedViews.some((t=>t.path===e.path))||this.visitedViews.push(Object.assign({},e,{title:(null==(t=e.meta)?void 0:t.title)||"no-name"}))},delVisitedView(e){for(const[t,a]of this.visitedViews.entries())if(a.path===e.path){this.visitedViews.splice(t,1);break}},delOthersVisitedViews(e){this.visitedViews=this.visitedViews.filter((t=>{var a;return(null==(a=t.meta)?void 0:a.affix)||t.path===e.path}))},delAllVisitedViews(){const e=this.visitedViews.filter((e=>{var t;return null==(t=e.meta)?void 0:t.affix}));this.visitedViews=e},updateVisitedView(e){for(let t of this.visitedViews)if(t.path===e.path){t=Object.assign(t,e);break}}}});const ft=f({},[["render",function(e,t){const a=u("el-scrollbar");return n(),o(a,{vertical:!1,class:"scroll-container"},{default:l((()=>[M(e.$slots,"default",{},void 0,!0)])),_:3})}],["__scopeId","data-v-1320289d"]]),pt={class:"tags-view-container"},mt=f(t({__name:"index",setup(e){const t=z(),s=A(),d=h(),f=ht(),p=N(),v=(e,t)=>{const a=e.slice(-1)[0];void 0!==a&&void 0!==a.fullPath?s.push(a.fullPath).catch((e=>{console.warn(e)})):"Dashboard"===t.name?s.push({path:"/redirect"+t.fullPath}).catch((e=>{console.warn(e)})):s.push("/").catch((e=>{console.warn(e)}))},C=I({visible:!1,top:0,left:0,selectedTag:{},affixTags:[],isActive:e=>e.path===d.path,isAffix:e=>e.meta&&e.meta.affix,refreshSelectedTag:e=>{const{fullPath:t}=e;P((()=>{s.replace({path:"/redirect"+t}).catch((e=>{console.warn(e)}))}))},closeSelectedTag:e=>{f.delVisitedView(e),C.isActive(e)&&v(f.visitedViews,e)},closeOthersTags:()=>{C.selectedTag.fullPath!==d.path&&void 0!==C.selectedTag.fullPath&&s.push(C.selectedTag.fullPath).catch((e=>{console.warn(e)})),f.delOthersVisitedViews(C.selectedTag)},closeAllTags:e=>{f.delAllVisitedViews(),C.affixTags.some((e=>e.path===d.path))||v(f.visitedViews,e)},openMenu:(e,a)=>{const n=t.proxy.$el.getBoundingClientRect().left,i=t.proxy.$el.offsetWidth-105,r=a.clientX-n+15;C.left=r>i?i:r,C.top=a.clientY,C.visible=!0,C.selectedTag=e},closeMenu:()=>{C.visible=!1}}),k=a((()=>f.visitedViews)),x=a((()=>p.routes)),E=(e,t="/")=>{let a=[];return e.forEach((e=>{if(e.meta&&e.meta.affix){const n=tt.resolve(t,e.path);a.push({fullPath:n,path:n,name:e.name,meta:{...e.meta}})}if(e.children){const t=E(e.children,e.path);t.length>=1&&(a=a.concat(t))}})),a},S=()=>(d.name&&f.addVisitedView(d),!1);return m((()=>d.name),(()=>{S(),(()=>{const e=null==t?void 0:t.refs.tag;if(null!=e&&Array.isArray(e))for(const t of e)t.to.path===d.path&&t.to.fullPath!==d.fullPath&&f.updateVisitedView(d)})()})),m((()=>C.visible),(e=>{e?document.body.addEventListener("click",C.closeMenu):document.body.removeEventListener("click",C.closeMenu)})),Y((()=>{(()=>{C.affixTags=E(x.value);for(const e of C.affixTags)e.name&&f.addVisitedView(e)})(),S()})),(e,t)=>{const a=u("el-icon"),s=u("router-link");return n(),i("div",pt,[r(ft,{class:"tags-view-wrapper"},{default:l((()=>[(n(!0),i(w,null,g(c(k),(e=>(n(),o(s,{ref_for:!0,ref:"tag",key:e.path,class:O([C.isActive(e)?"active":"","tags-view-item"]),to:{path:e.path,query:e.query},onMouseup:y((t=>C.isAffix(e)?"":C.closeSelectedTag(e)),["middle"]),onContextmenu:y((t=>C.openMenu(e,t)),["prevent"])},{default:l((()=>{var t;return[F(b(null==(t=e.meta)?void 0:t.title)+" ",1),C.isAffix(e)?B("",!0):(n(),o(a,{key:0,size:12,onClick:y((t=>C.closeSelectedTag(e)),["prevent","stop"])},{default:l((()=>[r(c(q))])),_:2},1032,["onClick"]))]})),_:2},1032,["class","to","onMouseup","onContextmenu"])))),128))])),_:1}),j(T("ul",{style:H({left:C.left+"px",top:C.top+"px"}),class:"contextmenu"},[T("li",{onClick:t[0]||(t[0]=e=>C.refreshSelectedTag(C.selectedTag))},"刷新"),C.isAffix(C.selectedTag)?B("",!0):(n(),i("li",{key:0,onClick:t[1]||(t[1]=e=>C.closeSelectedTag(C.selectedTag))},"关闭")),T("li",{onClick:t[2]||(t[2]=(...e)=>C.closeOthersTags&&C.closeOthersTags(...e))},"关闭其它"),T("li",{onClick:t[3]||(t[3]=e=>C.closeAllTags(C.selectedTag))},"关闭所有")],4),[[Q,C.visible]])])}}}),[["__scopeId","data-v-d6dd5844"]]),gt=f(t({__name:"index",props:{buttonTop:{type:Number,default:250}},setup(e){const t=p(!1);return(a,s)=>{const o=u("el-icon"),d=u("el-drawer");return n(),i(w,null,[T("div",{class:"handle-button",style:H({top:e.buttonTop+"px"}),onClick:s[0]||(s[0]=e=>t.value=!0)},[r(o,{size:24},{default:l((()=>[r(c(U))])),_:1})],4),r(d,{modelValue:t.value,"onUpdate:modelValue":s[1]||(s[1]=e=>t.value=e),size:"300px","with-header":!1},{default:l((()=>[M(a.$slots,"default",{},void 0,!0)])),_:3},8,["modelValue"])],64)}}}),[["__scopeId","data-v-ffc2745c"]]),wt=f(t({__name:"index",setup(e){const t=S(),s=ne();(()=>{const e=h(),t=S(),a=()=>document.body.getBoundingClientRect().width-1<992,n=()=>{if(!document.hidden){const e=a();t.toggleDevice(e?X.Mobile:X.Desktop),e&&t.closeSidebar(!0)}};m((()=>e.name),(()=>{t.device===X.Mobile&&t.sidebar.opened&&t.closeSidebar(!1)})),Y((()=>{window.addEventListener("resize",n)})),J((()=>{a()&&(t.toggleDevice(X.Mobile),t.closeSidebar(!0))})),G((()=>{window.removeEventListener("resize",n)}))})();const d=a((()=>({hideSidebar:!t.sidebar.opened,openSidebar:t.sidebar.opened,withoutAnimation:t.sidebar.withoutAnimation,mobile:t.device===X.Mobile}))),u=a((()=>s.showSettings)),f=a((()=>s.showTagsView)),p=a((()=>s.fixedHeader)),g=()=>{t.closeSidebar(!1)};return(e,t)=>(n(),i("div",{class:O([c(d),"app-wrapper"])},[c(d).mobile&&c(d).openSidebar?(n(),i("div",{key:0,class:"drawer-bg",onClick:g})):B("",!0),r(c(ut),{class:"sidebar-container"}),T("div",{class:O([{hasTagsView:c(f)},"main-container"])},[T("div",{class:O({"fixed-header":c(p)})},[r(c(Re)),c(f)?(n(),o(c(mt),{key:0})):B("",!0)],2),r(c(re)),c(u)?(n(),o(c(gt),{key:0},{default:l((()=>[r(c(Ke))])),_:1})):B("",!0)],2)],2))}}),[["__scopeId","data-v-16dff13d"]]);export{wt as default};