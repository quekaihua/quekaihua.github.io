import{_ as p,o,c as r,w as s,i as g,B as n,a,b as t,P as l,A as d,O as k,N as b,J as _,a7 as y,aK as C,g as I}from"./index-d4259e6b.js";const B={},E=["src"],N={class:"flex-1"},v={class:"flex items-center"},w={class:"font-medium text-lg ml-3"},V={class:"flex my-8"},A=n("span",null,"歌手：",-1),T={key:0},D=n("span",null,"发行时间：",-1);function S(e,x){const u=y,c=C,f=I,m=g;return o(),r(m,null,{default:s(()=>[e.cdInfo?(o(),r(f,{key:0,class:"flex mt-5 h-56"},{default:s(()=>[n("img",{class:"w-56 h-56 mr-3",src:e.cdInfo.picUrl,alt:""},null,8,E),n("div",N,[n("div",v,[a(u,{class:"bg-white",type:"danger"},{default:s(()=>[t(" 精品歌单 ")]),_:1}),n("h1",w,l(e.cdInfo.name),1)]),n("div",V,[a(c,{icon:e.CaretRight,onClick:e.playAll},{default:s(()=>[t(" 播放全部 ")]),_:1},8,["icon","onClick"]),a(c,{icon:e.DocumentAdd},{default:s(()=>[t(" 收藏("+l(e.cdInfo.subscribedCount)+") ",1)]),_:1},8,["icon"]),a(c,{icon:e.Share},{default:s(()=>[t(" 分享 ")]),_:1},8,["icon"])]),n("div",null,[n("p",null,[A,(o(!0),d(b,null,k(e.cdInfo.artists,(i,h)=>(o(),d("span",{key:i.id,class:"text-blue-500"},[t(l(i.name)+" ",1),h!==e.cdInfo.length-1?(o(),d("span",T,"/")):_("",!0)]))),128))]),n("p",null,[D,t(l(e.cdInfo.publishTime),1)])])])]),_:1})):_("",!0)]),_:1})}const H=p(B,[["render",S]]);export{H as default};
