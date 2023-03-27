import{d as k,aN as L,o as w,A as R,B as t,l as h,a8 as U,n as A,p as z,c as B,w as s,a,u as b,P as d,b9 as F,O as H,N as S,a5 as G,e as O,ba as q,bb as P,G as Z,Z as J,$ as K,bc as Q,bd as W,be as X,bf as Y,bg as j,bh as ee,ac as te}from"./index-d4259e6b.js";const ae=k({name:"ArrowLeftBold"}),se={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},le=t("path",{fill:"currentColor",d:"M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0z"},null,-1),oe=[le];function ne(c,_,i,p,o,v){return w(),R("svg",se,oe)}var ce=L(ae,[["render",ne]]);function re(){const c=h(null);return{divRef:c,isInViewPort:()=>{if(!c.value)return;const i=c.value.offsetTop+c.value.clientHeight,p=document.documentElement.scrollTop;return i-p>0}}}const ie={class:"text-blue-400"},ue={class:"ml-auto"},de={class:"lg:w-[668px] lg:h-[376px] xl:w-[1128px] xl:h-[635px] flex-shrink-0 bg-red-400"},_e=["src"],pe=t("h1",{class:"text-lg font-medium"}," MV介绍 ",-1),ve={class:"h-40 overflow-hidden"},me=t("h1",{class:"text-lg font-medium"}," 相关MV ",-1),fe=["src","onClick"],he={class:"flex flex-col justify-center"},we=["onClick"],ge={class:"text-slate-500 text-xs"},xe=k({__name:"AsyncVideoPlay",async setup(c){let _,i;const p=G(),o=O(),v=o.query.type,M=e=>({title:e.name,description:e.desc,playTime:e.playCount,creator:[{nickname:e.artistName}]}),N=e=>({coverUrl:e.cover,vid:e.id,title:e.name,creator:[{userName:e.artisName}]});console.log(v);const n=h(null),x=h(null),m=h(null),y=h(null),$=async e=>{if(v==="mv"){const u=await Q(e);n.value=M(u.data);const f=await W(e);x.value=f.data.url;const l=await X(e);y.value=l.mvs.map(g=>N(g)),m.value=await q(e,0)}else{const u=await Y(e);n.value=u.data;const f=await j(e);x.value=f.urls[0].url;const l=await ee(e);y.value=l.data,m.value=await P(e,0)}};[_,i]=U(()=>$(o.params.id)),await _,i();const T=async e=>{v==="mv"?m.value=await q(o.params.id,e):m.value=await P(o.params.id,e)},V=e=>{p.push({path:`/video/play/${e}`,query:{type:v}})};A(()=>o.params.id,async()=>{await $(o.params.id)});const{divRef:C,isInViewPort:D}=re();z(()=>{window.addEventListener("scroll",()=>{D()})});const E=()=>{C.value.requestPictureInPicture()};return(e,u)=>{const f=Z,l=J,g=K;return w(),B(l,{gutter:10},{default:s(()=>[a(g,{class:"ml-10 p-10 overflow-hidden",span:16},{default:s(()=>[a(l,{align:"middle"},{default:s(()=>[a(f,{class:"cursor-pointer",size:26,color:"#a8abb2",onClick:u[0]||(u[0]=r=>b(p).push("/video"))},{default:s(()=>[a(b(ce))]),_:1}),t("h1",{class:"text-lg font-medium",onClick:E},d(n.value.title),1),t("span",ie,d(n.value.creator.nickname),1),t("span",ue,"播放次数："+d(n.value.playTime>1e4?`${(n.value.playTime/1e4).toFixed(0)}万`:n.value.playTime)+"次",1)]),_:1}),a(l,{class:"px-20 py-10"},{default:s(()=>[t("div",de,[t("video",{id:"divRef",ref_key:"divRef",ref:C,class:"w-full h-full object-fill",autoplay:"",src:x.value,controls:"controls",style:{"background-color":"black"}}," 很抱歉,您的浏览器当前不支持最新播放标签! ",8,_e)])]),_:1}),a(l,null,{default:s(()=>[a(F,{"comment-info":m.value,limit:10,onHandlePagination:T},null,8,["comment-info"])]),_:1})]),_:1}),a(g,{class:"ml-10 p-10 overflow-hidden",span:6},{default:s(()=>[a(l,null,{default:s(()=>[t("div",null,[pe,t("div",ve,d(n.value.description),1)])]),_:1}),a(l,{class:"mt-10"},{default:s(()=>[t("div",null,[me,(w(!0),R(S,null,H(y.value,r=>(w(),R("div",{key:r.vid,class:"flex mt-5 hover:bg-gray-200"},[t("img",{class:"w-32 h-20 mr-5 cursor-pointer",src:r.coverUrl,alt:"",onClick:I=>V(r.vid)},null,8,fe),t("div",he,[t("p",{class:"text-sm cursor-pointer",onClick:I=>V(r.vid)},d(r.title),9,we),t("p",ge,d(r.creator[0].userName),1)])]))),128))])]),_:1})]),_:1})]),_:1})}}}),ye=t("div",null," loading... ",-1),ke=k({__name:"play",setup(c){return(_,i)=>(w(),B(te,null,{fallback:s(()=>[ye]),default:s(()=>[a(xe)]),_:1}))}});export{ke as default};
