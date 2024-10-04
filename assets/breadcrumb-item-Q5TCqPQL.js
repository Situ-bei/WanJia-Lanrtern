import{h as _,Q as L,l as R,k,_ as v,v as V,E as j,w as E,o as w,R as z}from"./base-BHVpw0Ph.js";import{g,l as C,h as A,H as i,C as D,o as n,c,p as d,n as u,u as t,L as F,a as H,m as f,w as K,a0 as q,t as G,G as M,i as P,a1 as O,F as h,e as B,a2 as S,a3 as Q,b as J}from"./index-FnO2ZjAG.js";const U=(l,s=0)=>{if(s===0)return l;const o=g(!1);let a=null;const r=()=>{a&&clearTimeout(a),a=setTimeout(()=>{o.value=l.value},s)};return C(r),A(()=>l.value,e=>{e?r():o.value=e}),o},N=Symbol("breadcrumbKey"),W=_({separator:{type:String,default:"/"},separatorIcon:{type:L}}),X=i({name:"ElBreadcrumb"}),Y=i({...X,props:W,setup(l){const s=l,{t:o}=R(),a=k("breadcrumb"),r=g();return D(N,s),C(()=>{const e=r.value.querySelectorAll(`.${a.e("item")}`);e.length&&e[e.length-1].setAttribute("aria-current","page")}),(e,y)=>(n(),c("div",{ref_key:"breadcrumb",ref:r,class:u(t(a).b()),"aria-label":t(o)("el.breadcrumb.label"),role:"navigation"},[d(e.$slots,"default")],10,["aria-label"]))}});var Z=v(Y,[["__file","breadcrumb.vue"]]);const x=_({to:{type:V([String,Object]),default:""},replace:Boolean}),ee=i({name:"ElBreadcrumbItem"}),te=i({...ee,props:x,setup(l){const s=l,o=M(),a=F(N,void 0),r=k("breadcrumb"),e=o.appContext.config.globalProperties.$router,y=g(),m=()=>{!s.to||!e||(s.replace?e.replace(s.to):e.push(s.to))};return(p,ue)=>{var I,$;return n(),c("span",{class:u(t(r).e("item"))},[H("span",{ref_key:"link",ref:y,class:u([t(r).e("inner"),t(r).is("link",!!p.to)]),role:"link",onClick:m},[d(p.$slots,"default")],2),(I=t(a))!=null&&I.separatorIcon?(n(),f(t(j),{key:0,class:u(t(r).e("separator"))},{default:K(()=>[(n(),f(q(t(a).separatorIcon)))]),_:1},8,["class"])):(n(),c("span",{key:1,class:u(t(r).e("separator")),role:"presentation"},G(($=t(a))==null?void 0:$.separator),3))],2)}}});var T=v(te,[["__file","breadcrumb-item.vue"]]);const me=E(Z,{BreadcrumbItem:T}),de=w(T),ae=_({animated:{type:Boolean,default:!1},count:{type:Number,default:1},rows:{type:Number,default:3},loading:{type:Boolean,default:!0},throttle:{type:Number}}),se=_({variant:{type:String,values:["circle","rect","h1","h3","text","caption","p","image","button"],default:"text"}}),re=i({name:"ElSkeletonItem"}),oe=i({...re,props:se,setup(l){const s=k("skeleton");return(o,a)=>(n(),c("div",{class:u([t(s).e("item"),t(s).e(o.variant)])},[o.variant==="image"?(n(),f(t(z),{key:0})):P("v-if",!0)],2))}});var b=v(oe,[["__file","skeleton-item.vue"]]);const ne=i({name:"ElSkeleton"}),le=i({...ne,props:ae,setup(l,{expose:s}){const o=l,a=k("skeleton"),r=U(O(o,"loading"),o.throttle);return s({uiLoading:r}),(e,y)=>t(r)?(n(),c("div",S({key:0,class:[t(a).b(),t(a).is("animated",e.animated)]},e.$attrs),[(n(!0),c(h,null,B(e.count,m=>(n(),c(h,{key:m},[e.loading?d(e.$slots,"template",{key:m},()=>[J(b,{class:u(t(a).is("first")),variant:"p"},null,8,["class"]),(n(!0),c(h,null,B(e.rows,p=>(n(),f(b,{key:p,class:u([t(a).e("paragraph"),t(a).is("last",p===e.rows&&e.rows>1)]),variant:"p"},null,8,["class"]))),128))]):P("v-if",!0)],64))),128))],16)):d(e.$slots,"default",Q(S({key:1},e.$attrs)))}});var ce=v(le,[["__file","skeleton.vue"]]);const fe=E(ce,{SkeletonItem:b}),be=w(b);export{me as E,fe as a,de as b,be as c};
