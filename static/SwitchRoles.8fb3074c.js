import{a,x as e,i as s,j as l,g as o,o as t,b as d,z as n,t as i,u,e as c,w as r,D as m,G as b,_ as p}from"./index.ad0137bc.js";const v={class:"switch-roles"},_=(a=>(m("data-v-572bc9d0"),a=a(),b(),a))((()=>n("span",null,"切换权限：",-1))),g=p(a({__name:"SwitchRoles",emits:["change"],setup(a,{emit:m}){const b=e(),p=s(b.roles[0]);return l(p,(async a=>{await b.changeRoles(a),m("change")})),(a,e)=>{const s=o("el-radio-button"),l=o("el-radio-group");return t(),d("div",null,[n("div",null,"你的权限："+i(u(b).roles),1),n("div",v,[_,c(l,{modelValue:p.value,"onUpdate:modelValue":e[0]||(e[0]=a=>p.value=a)},{default:r((()=>[c(s,{label:"editor"}),c(s,{label:"admin"})])),_:1},8,["modelValue"])])])}}}),[["__scopeId","data-v-572bc9d0"]]);export{g as S};
