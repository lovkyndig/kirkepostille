import{_ as S}from"./IconCustom.vue.c9badffd.js";import{f as _,r as o,o as n,c as f,h as l,l as y,i as m,t as V,a as w,P as k,n as B,m as T}from"./entry.e1201b13.js";import"./iconify.b5131d16.js";const $={key:0,class:"font-bold flex items-center gap-2"},q={key:1},N=_({__name:"TipBox",props:{type:{},icon:{},name:{},bgColorClass:{},bgColorStyle:{},textColorClass:{},textColorStyle:{},borderColorClass:{},borderColorStyle:{}},setup(x){const e=x,h={tip:{icon:"bi:lightbulb-fill",name:"Tip",bgColorClass:"bg-yellow-100",textColorClass:"text-yellow-500",borderColorClass:"border-yellow-400"},announce:{icon:"bi:megaphone",name:"Announce",bgColorClass:"bg-purple-100",textColorClass:"text-purple-500",borderColorClass:"border-purple-400"},warning:{icon:"bi:exclamation-triangle-fill",name:"Warning",bgColorClass:"bg-red-100",textColorClass:"text-red-500",borderColorClass:"border-red-400"},fun:{icon:"bi:balloon-fill",name:"Fun",bgColorClass:"bg-cyan-100",textColorClass:"text-cyan-500",borderColorClass:"border-cyan-300"},achieve:{icon:"bi:award-fill",name:"Achieve",bgColorClass:"bg-orange-100",textColorClass:"text-orange-500",borderColorClass:"border-orange-200"},question:{icon:"bi:question-circle-fill",name:"Question",bgColorClass:"bg-fuchsia-100",textColorClass:"text-fuchsia-500",borderColorClass:"border-fuchsia-300"},good:{icon:"bi:hand-thumbs-up-fill",name:"Good",bgColorClass:"bg-green-100",textColorClass:"text-green-500",borderColorClass:"border-green-300"},bad:{icon:"bi:hand-thumbs-down-fill",name:"Bad",bgColorClass:"bg-red-100",textColorClass:"text-red-500",borderColorClass:"border-red-300"},tldr:{icon:"bi:chat-left-text-fill",name:"TL;DR",bgColorClass:"bg-gray-100",textColorClass:"text-gray-700",borderColorClass:"border-gray-300"}},s=o(""),r=o(""),C=o(""),c=o(""),i=o(""),d=o(""),u=o(""),g=o(""),p=e.type?e.type.toLowerCase():"";if(p){const a=h[p];a&&(s.value=a.icon,r.value=a.name,C.value=a.bgColorClass,i.value=a.textColorClass,u.value=a.borderColorClass)}e.icon&&(s.value=e.icon),e.name&&(r.value=e.name),e.bgColorClass&&(C.value=e.bgColorClass),e.textColorClass&&(i.value=e.textColorClass),e.bgColorStyle&&(c.value=e.bgColorStyle),e.textColorStyle&&(d.value=e.textColorStyle),e.borderColorClass&&(u.value=e.borderColorClass),e.borderColorStyle&&(g.value=e.borderColorStyle);const t=o(""),b=o("");return r.value||(t.value+=" flex items-center gap-4"),c.value?b.value+=` background-color: ${c.value};`:C.value&&(t.value+=" "+C.value),d.value?b.value+=` color: ${d.value};`:i.value&&(t.value+=" "+i.value),g.value?b.value+=` border-color: ${g.value};`:u.value&&(t.value+=" "+u.value),(a,z)=>{const v=S;return n(),f("div",{class:B(["my-4 px-4 lg:px-6 py-2 border rounded-md",l(t)]),style:T(l(b))},[l(r)?(n(),f("p",$,[l(s)?(n(),y(v,{key:0,name:l(s),class:"w-4 h-4"},null,8,["name"])):m("",!0),l(r)?(n(),f("span",q,V(l(r)),1)):m("",!0)])):l(s)&&!l(r)?(n(),y(v,{key:1,name:l(s),class:"w-4 h-4"},null,8,["name"])):m("",!0),w("div",null,[k(a.$slots,"default")])],6)}}});export{N as default};