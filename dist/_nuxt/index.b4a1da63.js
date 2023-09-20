import{H as ce,T as de}from"./components.ebdd3503.js";import ue from"./IntroCard.d84f2249.js";import pe from"./ContentDoc.bb7e5553.js";import{_ as J}from"./nuxt-link.3b4c2494.js";import{_ as Q}from"./IconCustom.vue.c9badffd.js";import{f as X,o as e,c as s,m as Z,i as y,b as d,w as g,t as u,F as k,s as C,l as P,d as D,a as t,p as U,e as R,n as B,r as I,x as _e,k as he,q as A,v as j,h as r,C as re,g as fe,H as me,u as ve,_ as ge,J as xe}from"./entry.e1201b13.js";import{_ as G}from"./_plugin-vue_export-helper.c27b6911.js";import be from"./ContentQuery.faca7d9e.js";import{l as ne,c as ye,d as we}from"./states.ec00dd6f.js";import{u as ke}from"./index.fe0b2f26.js";import{u as $e}from"./query.40749ae7.js";import{f as Ce}from"./navigation.4e1d9028.js";import{p as Y}from"./package.7a1f2725.js";import"./ContentRenderer.520966fc.js";import"./ContentRendererMarkdown.vue.b812758d.js";import"./index.a6ef77ff.js";import"./preview.68f60945.js";import"./iconify.b5131d16.js";import"./state.b43434ad.js";const Te=h=>(U("data-v-6b71ce55"),h=h(),R(),h),Ne={class:"pb-4 relative z-10 space-y-2 rounded-xl"},Pe=Te(()=>t("div",{class:"absolute inset-0",style:{background:"linear-gradient(135deg, rgba(249,250,251,1) 40%, rgba(249,250,251,0.6) 80%, rgba(249,250,251,0.9) 100%)"}},null,-1)),Ie=[Pe],Se={key:0,class:"font-bold text-2xl text-gray-600 group-hover:text-blue-400 transition-colors duration-500"},Fe={key:1,class:"font-bold text-2xl text-gray-600 group-hover:text-blue-400 transition-colors duration-500"},Le={key:2,class:"text-gray-600 short-description"},Ae={key:1,class:"grow flex flex-wrap gap-2"},je={class:"text-xs"},We=X({__name:"PostListItem",props:{article:{}},setup(h){const o=h,v=n=>{if(n.startsWith("./")){const T=o.article._path.split("/").slice(0,-1),p=n.split("/").slice(1);return[...T,...p].join("/")}else return n};return(n,T)=>{const p=J,f=Q;return e(),s("div",Ne,[o.article.cover?(e(),s("div",{key:0,style:Z(`background-image: url('${v(o.article.cover)}')`),class:"w-1/5 h-[90%] absolute bottom-0 right-0 -z-10 bg-contain bg-right-top bg-no-repeat"},Ie,4)):y("",!0),d(p,{to:o.article._path,"aria-label":"props.article._path",class:"group block py-4 transition-colors duration-300 space-y-2"},{default:g(()=>[o.article.title.includes("bibelen")?(e(),s("h2",Fe,u(o.article.title||"Dette er tittelen i h2-tag"),1)):(e(),s("h2",Se,u(o.article.title||"Denne md-fila mangler h1-tittel"),1)),o.article.description?(e(),s("p",Le,u(o.article.description),1)):y("",!0)]),_:1},8,["to"]),o.article.tags?(e(),s("div",Ae,[(e(!0),s(k,null,C(o.article.tags,m=>(e(),P(p,{key:m,to:{path:"/list",query:{tags:[m]}},"aria-label":"tags in props.article._path",class:"px-2 py-1 text-xs text-blue-600 hover:text-blue-900 bg-blue-50 transition-colors duration-300 rounded"},{default:g(()=>[D(" #"+u(m),1)]),_:2},1032,["to"]))),128)),o.article.series?(e(),P(p,{key:0,to:{path:"/list",query:{series:o.article.series}},"aria-label":"props.article.series",class:"w-fit px-2 py-1 flex justify-center items-center space-x-1 text-green-600 hover:text-green-900 bg-green-50 transition-colors duration-300 rounded"},{default:g(()=>[d(f,{name:"bi:collection",class:"w-4 h-4"}),t("p",je,u(o.article.series),1)]),_:1},8,["to"])):y("",!0)])):y("",!0)])}}});const He=G(We,[["__scopeId","data-v-6b71ce55"]]),Me=h=>(U("data-v-d36c6901"),h=h(),R(),h),qe=Me(()=>t("div",{class:"absolute inset-0",style:{background:"linear-gradient(135deg, rgba(249,250,251,1) 60%, rgba(249,250,251,0.8) 80%, rgba(249,250,251,0.6) 100%)"}},null,-1)),ze=[qe],Be={class:"font-bold"},De={key:0,class:"text-gray-600 text-sm"},Ee={class:"shrink-0 px-6 pb-6 flex justify-between items-start gap-2"},Ve={key:0,class:"scroll-container grow flex sm:flex-wrap gap-1 overflow-x-auto"},Oe=X({__name:"PostCardItem",props:{article:{},listLen:{}},setup(h){const o=h,v=n=>{if(n.startsWith("./")){const T=o.article._path.split("/").slice(0,-1),p=n.split("/").slice(1);return[...T,...p].join("/")}else return n};return(n,T)=>{const p=J,f=Q;return e(),s("div",{class:B(["shrink-0 relative z-10 border border-purple-100 rounded-lg overflow-hidden",o.listLen>=2?"w-5/6":"w-full"])},[o.article.cover?(e(),s("div",{key:0,style:Z(`background-image: url('${v(o.article.cover)}')`),class:"w-2/3 h-2/3 absolute bottom-0 right-0 -z-10 bg-contain bg-right-bottom bg-no-repeat"},ze,4)):y("",!0),d(p,{to:o.article._path,"aria-label":"props.article.path",class:"grow text-xl p-6 text-gray-600 hover:text-blue-400 transition-colors duration-300 space-y-4"},{default:g(()=>[t("h2",Be,u(o.article.title||"Tittel mangler"),1),o.article.description?(e(),s("p",De,u(o.article.description),1)):y("",!0)]),_:1},8,["to"]),t("div",Ee,[o.article.tags?(e(),s("div",Ve,[(e(!0),s(k,null,C(o.article.tags,m=>(e(),P(p,{key:m,to:{path:"/list",query:{tags:[m]}},"aria-label":"tag in props.article.tags",class:"shrink-0 px-2 py-1 text-xs text-blue-600 hover:text-blue-900 bg-blue-50 transition-colors duration-300 rounded"},{default:g(()=>[D(" #"+u(m),1)]),_:2},1032,["to"]))),128))])):y("",!0),o.article.series?(e(),P(p,{key:1,to:{path:"/list",query:{series:o.article.series}},"aria-label":"props.article.series",class:"shrink-0 px-2 py-1 flex justify-center items-center text-green-600 hover:text-green-900 bg-green-50 transition-colors duration-300 rounded"},{default:g(()=>[d(f,{name:"bi:collection",class:"w-4 h-4"})]),_:1},8,["to"])):y("",!0)])],2)}}});const Je=G(Oe,[["__scopeId","data-v-d36c6901"]]),Qe=["title"],Xe={class:"line-camp-2 break-all"},Ge={class:"w-full flex flex-col"},Ke={class:"w-full flex justify-between items-center"},Ye=["onClick"],Ze={class:"shrink-0 pl-2 flex items-center gap-0.5"},Ue=["disabled"],Re=["disabled"],et={class:"tree-container grow p-2 flex flex-wrap items-start gap-2 border rounded-b-lg rounded-tr-lg bg-white overflow-y-auto"},tt={class:"text-sm break-all"},ot=["onClick"],st={class:"text-sm break-all"},lt=X({__name:"FolderTree",props:{rootName:{},rootTree:{},rootIndex:{}},emits:["set-tree"],setup(h,{emit:o}){const v=h,n=I(!0),T=ne(),p=b=>{const c=T.value[b];return c?c.iconName:T.value.default.iconName},f=I([{title:v.rootName,path:[]}]);let m=[];const S=I([]);S.value=v.rootTree;const K=b=>{m=b;let c=v.rootTree;const a=[{title:v.rootName,path:[]}];let w=[];b.length>0&&b.forEach(l=>{w=w.concat(l),a.unshift({title:c[l].title,path:w}),c=c[l].children}),S.value=c,f.value=a,re(()=>{F()})},E=(b,c)=>{m=m.concat(c),f.value.unshift({title:b,path:m}),S.value=S.value[c].children,re(()=>{F()})},V=()=>{const b=[v.rootIndex,...m];o("set-tree",b,"drill-down")},q=I(!0),x=I("start"),_=I(null),F=()=>{_.value&&(_.value.scrollWidth<=_.value.clientWidth?q.value=!1:q.value=!0,Math.ceil(_.value.scrollLeft+_.value.clientWidth)>=_.value.scrollWidth?x.value="end":_.value.scrollLeft===0?x.value="start":x.value="middle")},W=ye();_e(()=>{F(),he(()=>W.value.width,()=>{F()})});const H=b=>{if(!_.value)return;const c=_.value.clientWidth;b==="left"?_.value.scrollLeft-=c:b==="right"&&(_.value.scrollLeft+=c)},O=()=>{_.value&&(Math.ceil(_.value.scrollLeft+_.value.clientWidth)>=_.value.scrollWidth?x.value="end":_.value.scrollLeft===0?x.value="start":x.value="middle")};return(b,c)=>{const a=Q,w=J;return e(),s("div",{class:B(["self-stretch max-h-full flex",r(n)?v.rootTree.length<=2?"col-span-1 sm:col-span-2 row-span-2":v.rootTree.length<=4?"col-span-1 sm:col-span-2 row-span-3":v.rootTree.length<=6?"col-span-1 sm:col-span-2 row-span-4":"col-span-1 sm:col-span-2 row-span-5":"col-span-1"])},[A(t("button",{title:v.rootName,class:"group w-full px-4 py-2 flex items-start gap-1 hover:text-yellow-500 hover:bg-yellow-50 rounded-lg transition-colors duration-300",onClick:c[0]||(c[0]=l=>n.value=!0)},[d(a,{name:"ph:folder-fill",class:"shrink-0 w-6 h-6 text-yellow-400"}),t("span",Xe,u(v.rootName),1)],8,Qe),[[j,!r(n)]]),A(t("div",Ge,[t("div",Ke,[t("button",{class:"shrink-0 group w-fit p-2 flex items-center gap-1 relative z-10 text-xs hover:text-yellow-500 active:text-white bg-white hover:bg-yellow-50 active:bg-yellow-500 border-t border-x rounded-t transition-colors duration-300 translate-y-px",onClick:V},[d(a,{name:"ph:folder-open-fill",class:"w-4 h-4 text-yellow-400 group-active:text-white"}),D(" "+u(r(f)[0].title),1)]),A(t("div",{ref_key:"folderNavContainer",ref:_,class:"folder-nav-container grow flex justify-start items-center overflow-x-auto -translate-x-1 translate-y-px scroll-smooth",onScrollPassive:O},[(e(!0),s(k,null,C(r(f).slice(1),(l,L)=>(e(),s("button",{key:l.path.length>0?l.path.join():"root",class:"shrink-0 p-2 relative border-t border-r text-xs text-gray-400 hover:text-yellow-400 rounded-tr transition-colors duration-300",style:Z(`transform: translateX(-${L*2}px)`),onClick:M=>K(l.path)},u(l.title),13,Ye))),128))],544),[[j,r(f).length>1]]),t("div",Ze,[A(t("button",{disabled:r(x)==="start",class:B(["p-1 hidden sm:flex items-center text-green-400 hover:text-green-500 bg-green-100 hover:bg-green-200 rounded-full transition-colors duration-300",r(x)==="start"?"opacity-30":""]),onClick:c[1]||(c[1]=l=>H("left"))},[d(a,{name:"ic:round-keyboard-arrow-left",class:"w-3.5 h-3.5"})],10,Ue),[[j,r(q)]]),A(t("button",{disabled:r(x)==="end",class:B(["p-1 hidden sm:flex items-center text-green-400 hover:text-green-500 bg-green-100 hover:bg-green-200 rounded-full transition-colors duration-300",r(x)==="end"?"opacity-30":""]),onClick:c[2]||(c[2]=l=>H("right"))},[d(a,{name:"ic:round-keyboard-arrow-right",class:"w-3.5 h-3.5"})],10,Re),[[j,r(q)]]),t("button",{class:"p-1 flex items-center text-red-300 hover:text-red-400 bg-red-50 hover:bg-red-100 rounded-full transition-colors duration-300",onClick:c[3]||(c[3]=l=>n.value=!1)},[d(a,{name:"ion:close",class:"w-3.5 h-3.5"})])])]),t("div",et,[(e(!0),s(k,null,C(r(S),(l,L)=>(e(),s(k,null,[l._type?(e(),P(w,{key:l._path,to:l._path,target:"_blank","aria-label":"item/index in currentTree",class:"p-2 flex items-start gap-1 rounded hover:text-blue-500 active:text-white hover:bg-blue-100 active:bg-blue-500 transition-colors duration-300"},{default:g(()=>[d(a,{name:p(l._type),class:"shrink-0 w-5 h-5"},null,8,["name"]),t("span",tt,u(l.title),1)]),_:2},1032,["to"])):y("",!0),l.children?(e(),s("button",{key:l._path,class:"group p-2 flex items-start gap-1 rounded hover:text-yellow-500 active:text-white hover:bg-yellow-50 active:bg-yellow-500 transition-colors duration-300",onClick:M=>E(l.title,L)},[d(a,{name:"ph:folder-fill",class:"shrink-0 w-5 h-5 text-yellow-400 group-active:text-white"}),t("span",st,u(l.title),1)],8,ot)):y("",!0)],64))),256))])],512),[[j,r(n)]])],2)}}});const rt=G(lt,[["__scopeId","data-v-538426f3"]]),nt=h=>(U("data-v-530bdb14"),h=h(),R(),h),at={id:"index_page"},it={class:"container px-8 mx-auto"},ct={class:"py-16"},dt={class:"py-4 text-3xl sm:text-5xl font-bold text-center text-purple-500"},ut={key:0,class:"py-8"},pt={class:"space-y-8"},_t={class:"w-full sm:w-4/5 mx-auto space-y-4"},ht={class:"scroll-container sm:px-4 flex flex-row sm:flex-col gap-2 overflow-x-auto sm:divide-y sm:divide-gray-200"},ft={class:"flex justify-between items-start"},mt={class:"border-l-8 border-purple-500 rounded-l-sm"},vt=["onClick"],gt={class:"scroll-container sm:px-4 flex flex-row sm:flex-col gap-2 overflow-x-auto sm:divide-y sm:divide-gray-200"},xt={key:0,class:"container px-8 mx-auto"},bt={class:"flex py-8 justify-between"},yt={class:"folder-nav-container flex sm:flex-wrap items-center gap-1 overflow-x-auto"},wt=["onClick"],kt={key:0,class:"text-gray-400"},$t=nt(()=>t("hr",{class:"p-4"},null,-1)),Ct={class:"folders-container w-full my-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-col-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 grid-flow-row-dense"},Tt={class:"line-camp-2 break-all"},Nt=X({__name:"index",async setup(h){let o,v;const n=fe();ke({titleTemplate:n.title.home,description:n.description.home,ogDescription:n.description.home,ogUrl:Y.homepage});const T=we(),{data:p}=([o,v]=me(()=>$e("rootFolder",()=>Ce())),o=await o,v(),o);let f;const m=[];let S=!0;S=n.homePage.showBlogPosts;const K={_type:"markdown"},E=n.homePage.postItemLimit||2,V=["title","description","_type","_path","cover","series","seriesOrder","tags"];S&&Array.isArray(p.value)&&(f=p.value.find(a=>a._path===n.article.link),f!=null&&f.children&&f.children.length>0&&f.children.forEach(a=>{a._type==="markdown"&&m.length<E&&m.push(a)}));const q=(a="")=>{let w="";const l=a.split("/");return l.length===3&&l[1]===n.article.folder&&(w=l[2]),w},x=I(new Set),_=a=>{x.value.has(a)?x.value.delete(a):x.value.add(a)},F=I([]);F.value=p.value;let W=[];const H=I([{title:n.article.parent,path:[]}]),O=(a,w="drill-down")=>{w==="drill-down"?W=W.concat(a):w==="reset"&&(W=a);let l=p.value;const L=[{title:n.article.parent,path:[]}];let M=[];W.length>0&&W.forEach(z=>{M=M.concat(z),L.push({title:l[z].title,path:M}),l=l[z].children}),F.value=l,H.value=L},b=ne(),c=a=>{const w=b.value[a];return w?w.iconName:b.value.default.iconName};return ve({link:[{rel:"canonical",href:`${Y.homepage}/`}]}),(a,w)=>{const l=de,L=ce,M=ue,z=pe,ee=He,te=Je,oe=be,se=J,le=Q,ae=rt,ie=ge;return e(),s("div",at,[d(L,null,{default:g(()=>[d(l,null,{default:g(()=>[D(u(r(n).title.home)+" - "+u(r(Y).version),1)]),_:1})]),_:1}),d(ie,{name:"base","footer-flexi-mode":!0,"header-flexi-mode":!0},{default:g(()=>[A(t("div",it,[t("div",ct,[d(z,null,{empty:g(()=>[d(M,{avatar:r(xe).avatar},null,8,["avatar"])]),"not-found":g(()=>[t("h1",dt,u(r(n).title.home),1)]),_:1})]),r(f)?(e(),s("div",ut,[t("div",pt,[t("section",_t,[t("div",ht,[(e(),s(k,null,C(m,i=>d(oe,{key:i._path,path:i._path,only:V,limit:1},{default:g(({data:N})=>[(e(!0),s(k,null,C(N,$=>(e(),P(ee,{key:$._path,article:$,class:"hidden sm:block"},null,8,["article"]))),128)),(e(!0),s(k,null,C(N,$=>(e(),P(te,{key:$._path,article:$,"list-len":m.length,class:"flex flex-col sm:hidden"},null,8,["article","list-len"]))),128))]),_:2},1032,["path"])),64))])]),(e(!0),s(k,null,C(r(f).children,i=>(e(),s(k,null,["children"in i?(e(),s("section",{key:i._path,class:"w-full sm:w-4/5 mx-auto space-y-4"},[t("div",ft,[t("h2",mt,[t("button",{class:B(["p-1 font-bold text-lg text-purple-600 hover:bg-purple-100 border rounded-r-sm transition-colors duration-300",r(x).has(i._path)?"border-purple-500":"border-transparent"]),onClick:N=>_(i._path)},u(i.title),11,vt)]),d(se,{to:{path:"/list",query:{category:q(i._path)}},"aria-label":"Read More",class:"p-2 text-xs font-bold transition-colors duration-300 rounded-lg text-purple-700 bg-purple-200 hover:bg-purple-100"},{default:g(()=>[D(u(r(n).nav.home.more),1)]),_:2},1032,["to"])]),A(t("div",gt,[d(oe,{path:i._path,where:K,limit:r(E),only:V},{default:g(({data:N})=>[(e(!0),s(k,null,C(N,$=>(e(),P(ee,{key:$._path,article:$,class:"hidden sm:block"},null,8,["article"]))),128)),(e(!0),s(k,null,C(N,$=>(e(),P(te,{key:$._path,article:$,"list-len":N.length,class:"flex flex-col sm:hidden"},null,8,["article","list-len"]))),128))]),"not-found":g(()=>[t("p",null,u(r(n).nav.home.not_found),1)]),_:2},1032,["path","limit"])],512),[[j,!r(x).has(i._path)]])])):y("",!0)],64))),256))])])):y("",!0)],512),[[j,r(T)==="blog"]]),r(p)&&r(p).length>0?A((e(),s("div",xt,[t("div",bt,[t("div",yt,[d(le,{name:"ph:folder-open-fill",class:"shrink-0 w-6 h-6 text-yellow-400"}),(e(!0),s(k,null,C(r(H),(i,N)=>(e(),s("div",{key:r(H).length>1?i.path.join():"root",class:"shrink-0 flex items-center gap-1"},[t("button",{class:"p-2 hover:text-green-500 active:text-white hover:bg-green-100 active:bg-green-500 rounded-md transition-colors duration-300",onClick:$=>O(i.path,"reset")},u(i.title),9,wt),N+1<r(H).length?(e(),s("span",kt,">")):y("",!0)]))),128))])]),$t,t("div",Ct,[(e(!0),s(k,null,C(r(F),(i,N)=>(e(),s(k,null,[i._type?(e(),P(se,{key:i._path,to:i._path,title:i.title,target:"_blank","aria-label":"item._type and _path and title",class:"self-start px-4 py-2 flex items-start gap-1 hover:text-blue-500 hover:bg-blue-100 transition-colors duration-300 rounded-lg"},{default:g(()=>[d(le,{name:c(i._type),class:"shrink-0 w-6 h-6"},null,8,["name"]),t("span",Tt,u(i.title),1)]),_:2},1032,["to","title"])):y("",!0),i.children?(e(),P(ae,{key:i._path,"root-name":i.title,"root-tree":i.children,"root-index":N,onSetTree:O},null,8,["root-name","root-tree","root-index"])):y("",!0)],64))),256))])],512)),[[j,r(T)==="note"]]):y("",!0)]),_:1})])}}});const Xt=G(Nt,[["__scopeId","data-v-530bdb14"]]);export{Xt as default};