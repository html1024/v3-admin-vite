import{a1 as e,a as i,v as s,g as a,a2 as n,o,b as l,e as d,A as r,N as t,w as m,f as c,u as p,B as u,D as f,_ as v}from"./index.bb9b4f5e.js";import{S as _}from"./SwitchRoles.9966c092.js";const y=i=>{if(i&&i instanceof Array&&i.length>0){const s=e().roles,a=i;return s.some((e=>a.includes(e)))}return console.error("need roles! Like v-permission=\"['admin','editor']\""),!1},b={class:"app-container"},g={class:"permission-alert"},k=f(" 只有 "),h=f("admin"),P=f("可以看见这个 "),z=f(" v-permission=\"['admin']\" "),j={class:"permission-alert"},w=f(" 只有 "),x=f("editor"),A=f("可以看见这个 "),D=f(" v-permission=\"['editor']\" "),S={class:"permission-alert"},B=f(" 两者 "),C=f("admin"),E=f("和 "),I=f("editor"),L=f("都可以看见这个 "),N=f(" v-permission=\"['admin', 'editor']\" "),R=f(" 在某些情况下，不适合使用 v-permission。例如: Element-Plus 的 el-tab-pane 或 el-table-column 以及其它动态渲染 Dom 的场景。你只能通过手动设置 v-if 来实现。 "),q=f(" admin 可以看见这个 "),F=f(" v-if=\"checkPermission(['admin'])\" "),G=f(" editor 可以看见这个 "),H=f(" v-if=\"checkPermission(['editor'])\" "),J=f(" 两者 admin 和 editor 都可以看见这个 "),K=f(" v-if=\"checkPermission(['admin', 'editor'])\" "),M=v(i({__name:"directive",setup(e){const i=s(1),f=()=>{i.value++};return(e,s)=>{const v=a("el-tag"),M=a("el-tab-pane"),O=a("el-tabs"),Q=n("permission");return o(),l("div",b,[d(_,{onChange:f}),(o(),l("div",{key:i.value,class:"margin-top"},[r("div",null,[t((o(),l("span",g,[k,d(v,null,{default:m((()=>[h])),_:1}),P])),[[Q,["admin"]]]),t((o(),c(v,{class:"permission-code",type:"info",size:"large"},{default:m((()=>[z])),_:1})),[[Q,["admin"]]])]),r("div",null,[t((o(),l("span",j,[w,d(v,null,{default:m((()=>[x])),_:1}),A])),[[Q,["editor"]]]),t((o(),c(v,{class:"permission-code",type:"info",size:"large"},{default:m((()=>[D])),_:1})),[[Q,["editor"]]])]),r("div",null,[t((o(),l("span",S,[B,d(v,null,{default:m((()=>[C])),_:1}),E,d(v,null,{default:m((()=>[I])),_:1}),L])),[[Q,["admin","editor"]]]),t((o(),c(v,{class:"permission-code",type:"info",size:"large"},{default:m((()=>[N])),_:1})),[[Q,["admin","editor"]]])])])),(o(),l("div",{key:"checkPermission"+i.value,class:"margin-top"},[d(v,{type:"info",size:"large"},{default:m((()=>[R])),_:1}),d(O,{type:"border-card",class:"margin-top"},{default:m((()=>[p(y)(["admin"])?(o(),c(M,{key:0,label:"admin"},{default:m((()=>[q,d(v,{class:"permission-code",type:"info"},{default:m((()=>[F])),_:1})])),_:1})):u("",!0),p(y)(["editor"])?(o(),c(M,{key:1,label:"editor"},{default:m((()=>[G,d(v,{class:"permission-code",type:"info"},{default:m((()=>[H])),_:1})])),_:1})):u("",!0),p(y)(["admin","editor"])?(o(),c(M,{key:2,label:"admin 和 editor"},{default:m((()=>[J,d(v,{class:"permission-code",type:"info"},{default:m((()=>[K])),_:1})])),_:1})):u("",!0)])),_:1})]))])}}}),[["__scopeId","data-v-588db394"]]);export{M as default};
