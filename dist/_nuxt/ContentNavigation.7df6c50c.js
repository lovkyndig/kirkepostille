import{f,S as d,U as l,Q as m,O as i}from"./entry.5d653b89.js";import{a as p,u as v,h as g}from"./query.e942ff80.js";import{u as h}from"./state.7dbd7c25.js";import{_}from"./nuxt-link.c4d9062b.js";import{f as y}from"./navigation.bd49909e.js";import"./preview.bedb080b.js";const C=f({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(s){const{query:t}=d(s),n=l(()=>{var a;return typeof((a=t.value)==null?void 0:a.params)=="function"?t.value.params():t.value});if(!n.value&&h("dd-navigation").value){const{navigation:a}=p();return{navigation:a}}const{data:o}=await v(`content-navigation-${g(n.value)}`,()=>y(n.value));return{navigation:o}},render(s){const t=m(),{navigation:n}=s,o=e=>i(_,{to:e._path},()=>e.title),a=(e,u)=>i("ul",u?{"data-level":u}:null,e.map(r=>r.children?i("li",null,[o(r),a(r.children,u+1)]):i("li",null,o(r)))),c=e=>a(e,0);return t!=null&&t.default?t.default({navigation:n,...this.$attrs}):c(n)}}),L=C;export{L as default};