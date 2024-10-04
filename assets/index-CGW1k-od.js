import{p as ge,q as K,r as Xe,s as Qe,k as G,E as Y,t as Ze,_ as _e,w as Re,h as ne,v as he,x as Ve,j as me,y as et,z as tt,m as at,f as st,A as nt,B as Q,C as ot,n as Ee,i as lt,D as Ne,o as rt,F as it,G as ee,H as ke,I as ct,J as de}from"./base-C0_RkL3B.js";import{E as ut,a as dt,b as vt,c as ft}from"./breadcrumb-item-BPBGVFVO.js";import{O as bt,A as $e,g as y,l as oe,H as V,z as j,o as M,m as mt,w as A,u as x,c as H,K as Fe,n as te,I as pt,p as ae,b as f,i as ye,T as ze,L as Ce,h as q,P as U,B as gt,G as Te,Q as _t,C as ht,D as xe,y as yt,M as Se,N as Ct,s as se,J as Me,R as Tt,S as xt,U as St,V as W,W as De,X as wt,Y as Et,_ as Nt,a as F,x as kt,d as ve,t as Pe,F as $t,e as Pt}from"./index-HMzYWzR0.js";import{u as Bt,t as Be,C as Lt}from"./index-D2VCI8E7.js";import{t as J,U as He}from"./event-BE20p1dL.js";const Le=e=>{let t=0,a=e;for(;a;)t+=a.offsetTop,a=a.offsetParent;return t},Ot=(e,t)=>Math.abs(Le(e)-Le(t)),z=e=>bt(e),At=(e,t)=>{if(!ge)return!1;const a={undefined:"overflow",true:"overflow-y",false:"overflow-x"}[String(t)],s=K(e,a);return["scroll","auto","overlay"].some(n=>s.includes(n))},It=(e,t)=>{if(!ge)return;let a=e;for(;a;){if([window,document,document.documentElement].includes(a))return window;if(At(a,t))return a;a=a.parentNode}return a},Rt={visibilityHeight:{type:Number,default:200},target:{type:String,default:""},right:{type:Number,default:40},bottom:{type:Number,default:40}},Vt={click:e=>e instanceof MouseEvent},Ft=(e,t,a)=>{const s=$e(),n=$e(),l=y(!1),c=()=>{s.value&&(l.value=s.value.scrollTop>=e.visibilityHeight)},u=v=>{var b;(b=s.value)==null||b.scrollTo({top:0,behavior:"smooth"}),t("click",v)},d=Qe(c,300,!0);return Xe(n,"scroll",d),oe(()=>{var v;n.value=document,s.value=document.documentElement,e.target&&(s.value=(v=document.querySelector(e.target))!=null?v:void 0,s.value||J(a,`target does not exist: ${e.target}`),n.value=s.value),c()}),{visible:l,handleClick:u}},Ue="ElBacktop",zt=V({name:Ue}),Mt=V({...zt,props:Rt,emits:Vt,setup(e,{emit:t}){const a=e,s=G("backtop"),{handleClick:n,visible:l}=Ft(a,t,Ue),c=j(()=>({right:`${a.right}px`,bottom:`${a.bottom}px`}));return(u,d)=>(M(),mt(ze,{name:`${x(s).namespace.value}-fade-in`},{default:A(()=>[x(l)?(M(),H("div",{key:0,style:Fe(x(c)),class:te(x(s).b()),onClick:pt(x(n),["stop"])},[ae(u.$slots,"default",{},()=>[f(x(Y),{class:te(x(s).e("icon"))},{default:A(()=>[f(x(Ze))]),_:1},8,["class"])])],14,["onClick"])):ye("v-if",!0)]),_:3},8,["name"]))}});var Dt=_e(Mt,[["__file","backtop.vue"]]);const Ht=Re(Dt),le=Symbol("tabsRootContextKey"),Ut=ne({tabs:{type:he(Array),default:()=>Ve([])}}),Ke="ElTabBar",Kt=V({name:Ke}),jt=V({...Kt,props:Ut,setup(e,{expose:t}){const a=e,s=Te(),n=Ce(le);n||J(Ke,"<el-tabs><el-tab-bar /></el-tabs>");const l=G("tabs"),c=y(),u=y(),d=()=>{let r=0,p=0;const _=["top","bottom"].includes(n.props.tabPosition)?"width":"height",S=_==="width"?"x":"y",m=S==="x"?"left":"top";return a.tabs.every(w=>{var k,L;const E=(L=(k=s.parent)==null?void 0:k.refs)==null?void 0:L[`tab-${w.uid}`];if(!E)return!1;if(!w.active)return!0;r=E[`offset${z(m)}`],p=E[`client${z(_)}`];const $=window.getComputedStyle(E);return _==="width"&&(p-=Number.parseFloat($.paddingLeft)+Number.parseFloat($.paddingRight),r+=Number.parseFloat($.paddingLeft)),!1}),{[_]:`${p}px`,transform:`translate${z(S)}(${r}px)`}},v=()=>u.value=d(),b=[],i=()=>{var r;b.forEach(_=>_.stop()),b.length=0;const p=(r=s.parent)==null?void 0:r.refs;if(p){for(const _ in p)if(_.startsWith("tab-")){const S=p[_];S&&b.push(me(S,v))}}};q(()=>a.tabs,async()=>{await U(),v(),i()},{immediate:!0});const o=me(c,()=>v());return gt(()=>{b.forEach(r=>r.stop()),b.length=0,o.stop()}),t({ref:c,update:v}),(r,p)=>(M(),H("div",{ref_key:"barRef",ref:c,class:te([x(l).e("active-bar"),x(l).is(x(n).props.tabPosition)]),style:Fe(u.value)},null,6))}});var qt=_e(jt,[["__file","tab-bar.vue"]]);const Wt=ne({panes:{type:he(Array),default:()=>Ve([])},currentName:{type:[String,Number],default:""},editable:Boolean,type:{type:String,values:["card","border-card",""],default:""},stretch:Boolean}),Yt={tabClick:(e,t,a)=>a instanceof Event,tabRemove:(e,t)=>t instanceof Event},Oe="ElTabNav",Gt=V({name:Oe,props:Wt,emits:Yt,setup(e,{expose:t,emit:a}){const s=Ce(le);s||J(Oe,"<el-tabs><tab-nav /></el-tabs>");const n=G("tabs"),l=et(),c=tt(),u=y(),d=y(),v=y(),b=y(),i=y(!1),o=y(0),r=y(!1),p=y(!0),_=j(()=>["top","bottom"].includes(s.props.tabPosition)?"width":"height"),S=j(()=>({transform:`translate${_.value==="width"?"X":"Y"}(-${o.value}px)`})),m=()=>{if(!u.value)return;const h=u.value[`offset${z(_.value)}`],C=o.value;if(!C)return;const g=C>h?C-h:0;o.value=g},w=()=>{if(!u.value||!d.value)return;const h=d.value[`offset${z(_.value)}`],C=u.value[`offset${z(_.value)}`],g=o.value;if(h-g<=C)return;const P=h-g>C*2?g+C:h-C;o.value=P},k=async()=>{const h=d.value;if(!i.value||!v.value||!u.value||!h)return;await U();const C=v.value.querySelector(".is-active");if(!C)return;const g=u.value,P=["top","bottom"].includes(s.props.tabPosition),B=C.getBoundingClientRect(),N=g.getBoundingClientRect(),R=P?h.offsetWidth-N.width:h.offsetHeight-N.height,O=o.value;let T=O;P?(B.left<N.left&&(T=O-(N.left-B.left)),B.right>N.right&&(T=O+B.right-N.right)):(B.top<N.top&&(T=O-(N.top-B.top)),B.bottom>N.bottom&&(T=O+(B.bottom-N.bottom))),T=Math.max(T,0),o.value=Math.min(T,R)},L=()=>{var h;if(!d.value||!u.value)return;e.stretch&&((h=b.value)==null||h.update());const C=d.value[`offset${z(_.value)}`],g=u.value[`offset${z(_.value)}`],P=o.value;g<C?(i.value=i.value||{},i.value.prev=P,i.value.next=P+g<C,C-P<g&&(o.value=C-g)):(i.value=!1,P>0&&(o.value=0))},E=h=>{const C=h.code,{up:g,down:P,left:B,right:N}=Q;if(![g,P,B,N].includes(C))return;const R=Array.from(h.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)")),O=R.indexOf(h.target);let T;C===B||C===g?O===0?T=R.length-1:T=O-1:O<R.length-1?T=O+1:T=0,R[T].focus({preventScroll:!0}),R[T].click(),$()},$=()=>{p.value&&(r.value=!0)},re=()=>r.value=!1;return q(l,h=>{h==="hidden"?p.value=!1:h==="visible"&&setTimeout(()=>p.value=!0,50)}),q(c,h=>{h?setTimeout(()=>p.value=!0,50):p.value=!1}),me(v,L),oe(()=>setTimeout(()=>k(),0)),_t(()=>L()),t({scrollToActiveTab:k,removeFocus:re}),()=>{const h=i.value?[f("span",{class:[n.e("nav-prev"),n.is("disabled",!i.value.prev)],onClick:m},[f(Y,null,{default:()=>[f(at,null,null)]})]),f("span",{class:[n.e("nav-next"),n.is("disabled",!i.value.next)],onClick:w},[f(Y,null,{default:()=>[f(st,null,null)]})])]:null,C=e.panes.map((g,P)=>{var B,N,R,O;const T=g.uid,ie=g.props.disabled,ce=(N=(B=g.props.name)!=null?B:g.index)!=null?N:`${P}`,ue=!ie&&(g.isClosable||e.editable);g.index=`${P}`;const Ye=ue?f(Y,{class:"is-icon-close",onClick:D=>a("tabRemove",g,D)},{default:()=>[f(nt,null,null)]}):null,Ge=((O=(R=g.slots).label)==null?void 0:O.call(R))||g.props.label,Je=!ie&&g.active?0:-1;return f("div",{ref:`tab-${T}`,class:[n.e("item"),n.is(s.props.tabPosition),n.is("active",g.active),n.is("disabled",ie),n.is("closable",ue),n.is("focus",r.value)],id:`tab-${ce}`,key:`tab-${T}`,"aria-controls":`pane-${ce}`,role:"tab","aria-selected":g.active,tabindex:Je,onFocus:()=>$(),onBlur:()=>re(),onClick:D=>{re(),a("tabClick",g,ce,D)},onKeydown:D=>{ue&&(D.code===Q.delete||D.code===Q.backspace)&&a("tabRemove",g,D)}},[Ge,Ye])});return f("div",{ref:v,class:[n.e("nav-wrap"),n.is("scrollable",!!i.value),n.is(s.props.tabPosition)]},[h,f("div",{class:n.e("nav-scroll"),ref:u},[f("div",{class:[n.e("nav"),n.is(s.props.tabPosition),n.is("stretch",e.stretch&&["top","bottom"].includes(s.props.tabPosition))],ref:d,style:S.value,role:"tablist",onKeydown:E},[e.type?null:f(qt,{ref:b,tabs:[...e.panes]},null),C])])])}}}),Jt=ne({type:{type:String,values:["card","border-card",""],default:""},closable:Boolean,addable:Boolean,modelValue:{type:[String,Number]},editable:Boolean,tabPosition:{type:String,values:["top","right","bottom","left"],default:"top"},beforeLeave:{type:he(Function),default:()=>!0},stretch:Boolean}),fe=e=>xe(e)||lt(e),Xt={[He]:e=>fe(e),tabClick:(e,t)=>t instanceof Event,tabChange:e=>fe(e),edit:(e,t)=>["remove","add"].includes(t),tabRemove:e=>fe(e),tabAdd:()=>!0},Qt=V({name:"ElTabs",props:Jt,emits:Xt,setup(e,{emit:t,slots:a,expose:s}){var n;const l=G("tabs"),c=j(()=>["left","right"].includes(e.tabPosition)),{children:u,addChild:d,removeChild:v}=Bt(Te(),"ElTabPane"),b=y(),i=y((n=e.modelValue)!=null?n:"0"),o=async(m,w=!1)=>{var k,L,E;if(!(i.value===m||Ee(m)))try{await((k=e.beforeLeave)==null?void 0:k.call(e,m,i.value))!==!1&&(i.value=m,w&&(t(He,m),t("tabChange",m)),(E=(L=b.value)==null?void 0:L.removeFocus)==null||E.call(L))}catch{}},r=(m,w,k)=>{m.props.disabled||(o(w,!0),t("tabClick",m,k))},p=(m,w)=>{m.props.disabled||Ee(m.props.name)||(w.stopPropagation(),t("edit",m.props.name,"remove"),t("tabRemove",m.props.name))},_=()=>{t("edit",void 0,"add"),t("tabAdd")};q(()=>e.modelValue,m=>o(m)),q(i,async()=>{var m;await U(),(m=b.value)==null||m.scrollToActiveTab()}),ht(le,{props:e,currentName:i,registerPane:m=>{u.value.push(m)},sortPane:d,unregisterPane:v}),s({currentName:i});const S=({render:m})=>m();return()=>{const m=a["add-icon"],w=e.editable||e.addable?f("div",{class:[l.e("new-tab"),c.value&&l.e("new-tab-vertical")],tabindex:"0",onClick:_,onKeydown:E=>{E.code===Q.enter&&_()}},[m?ae(a,"add-icon"):f(Y,{class:l.is("icon-plus")},{default:()=>[f(ot,null,null)]})]):null,k=f("div",{class:[l.e("header"),c.value&&l.e("header-vertical"),l.is(e.tabPosition)]},[f(S,{render:()=>{const E=u.value.some($=>$.slots.label);return f(Gt,{ref:b,currentName:i.value,editable:e.editable,type:e.type,panes:u.value,stretch:e.stretch,onTabClick:r,onTabRemove:p},{$stable:!E})}},null),w]),L=f("div",{class:l.e("content")},[ae(a,"default")]);return f("div",{class:[l.b(),l.m(e.tabPosition),{[l.m("card")]:e.type==="card",[l.m("border-card")]:e.type==="border-card"}]},[L,k])}}}),Zt=ne({label:{type:String,default:""},name:{type:[String,Number]},closable:Boolean,disabled:Boolean,lazy:Boolean}),je="ElTabPane",ea=V({name:je}),ta=V({...ea,props:Zt,setup(e){const t=e,a=Te(),s=yt(),n=Ce(le);n||J(je,"usage: <el-tabs><el-tab-pane /></el-tabs/>");const l=G("tab-pane"),c=y(),u=j(()=>t.closable||n.props.closable),d=Ne(()=>{var r;return n.currentName.value===((r=t.name)!=null?r:c.value)}),v=y(d.value),b=j(()=>{var r;return(r=t.name)!=null?r:c.value}),i=Ne(()=>!t.lazy||v.value||d.value);q(d,r=>{r&&(v.value=!0)});const o=Se({uid:a.uid,slots:s,props:t,paneName:b,active:d,index:c,isClosable:u});return n.registerPane(o),oe(()=>{n.sortPane(o)}),Ct(()=>{n.unregisterPane(o.uid)}),(r,p)=>x(i)?se((M(),H("div",{key:0,id:`pane-${x(b)}`,class:te(x(l).b()),role:"tabpanel","aria-hidden":!x(d),"aria-labelledby":`tab-${x(b)}`},[ae(r.$slots,"default")],10,["id","aria-hidden","aria-labelledby"])),[[Me,x(d)]]):ye("v-if",!0)}});var qe=_e(ta,[["__file","tab-pane.vue"]]);const aa=Re(Qt,{TabPane:qe}),sa=rt(qe),I="ElInfiniteScroll",na=50,oa=200,la=0,ra={delay:{type:Number,default:oa},distance:{type:Number,default:la},disabled:{type:Boolean,default:!1},immediate:{type:Boolean,default:!0}},we=(e,t)=>Object.entries(ra).reduce((a,[s,n])=>{var l,c;const{type:u,default:d}=n,v=e.getAttribute(`infinite-scroll-${s}`);let b=(c=(l=t[v])!=null?l:v)!=null?c:d;return b=b==="false"?!1:b,b=u(b),a[s]=Number.isNaN(b)?d:b,a},{}),We=e=>{const{observer:t}=e[I];t&&(t.disconnect(),delete e[I].observer)},ia=(e,t)=>{const{container:a,containerEl:s,instance:n,observer:l,lastScrollTop:c}=e[I],{disabled:u,distance:d}=we(e,n),{clientHeight:v,scrollHeight:b,scrollTop:i}=s,o=i-c;if(e[I].lastScrollTop=i,l||u||o<0)return;let r=!1;if(a===e)r=b-(v+i)<=d;else{const{clientTop:p,scrollHeight:_}=e,S=Ot(e,s);r=i+v>=S+p+_-d}r&&t.call(n)};function be(e,t){const{containerEl:a,instance:s}=e[I],{disabled:n}=we(e,s);n||a.clientHeight===0||(a.scrollHeight<=a.clientHeight?t.call(s):We(e))}const ca={async mounted(e,t){const{instance:a,value:s}=t;Tt(s)||J(I,"'v-infinite-scroll' binding value must be a function"),await U();const{delay:n,immediate:l}=we(e,a),c=It(e,!0),u=c===window?document.documentElement:c,d=Be(ia.bind(null,e,s),n);if(c){if(e[I]={instance:a,container:c,containerEl:u,delay:n,cb:s,onScroll:d,lastScrollTop:u.scrollTop},l){const v=new MutationObserver(Be(be.bind(null,e,s),na));e[I].observer=v,v.observe(e,{childList:!0,subtree:!0}),be(e,s)}c.addEventListener("scroll",d)}},unmounted(e){if(!e[I])return;const{container:t,onScroll:a}=e[I];t==null||t.removeEventListener("scroll",a),We(e)},async updated(e){if(!e[I])await U();else{const{containerEl:t,cb:a,observer:s}=e[I];t.clientHeight&&s&&be(e,a)}}},pe=ca;pe.install=e=>{e.directive("InfiniteScroll",pe)};const ua=pe;function da(e){let t;const a=y(!1),s=Se({...e,originalPosition:"",originalOverflow:"",visible:!1});function n(o){s.text=o}function l(){const o=s.parent,r=i.ns;if(!o.vLoadingAddClassList){let p=o.getAttribute("loading-number");p=Number.parseInt(p)-1,p?o.setAttribute("loading-number",p.toString()):(ee(o,r.bm("parent","relative")),o.removeAttribute("loading-number")),ee(o,r.bm("parent","hidden"))}c(),b.unmount()}function c(){var o,r;(r=(o=i.$el)==null?void 0:o.parentNode)==null||r.removeChild(i.$el)}function u(){var o;e.beforeClose&&!e.beforeClose()||(a.value=!0,clearTimeout(t),t=setTimeout(d,400),s.visible=!1,(o=e.closed)==null||o.call(e))}function d(){if(!a.value)return;const o=s.parent;a.value=!1,o.vLoadingAddClassList=void 0,l()}const v=V({name:"ElLoading",setup(o,{expose:r}){const{ns:p,zIndex:_}=it("loading");return r({ns:p,zIndex:_}),()=>{const S=s.spinner||s.svg,m=W("svg",{class:"circular",viewBox:s.svgViewBox?s.svgViewBox:"0 0 50 50",...S?{innerHTML:S}:{}},[W("circle",{class:"path",cx:"25",cy:"25",r:"20",fill:"none"})]),w=s.text?W("p",{class:p.b("text")},[s.text]):void 0;return W(ze,{name:p.b("fade"),onAfterLeave:d},{default:A(()=>[se(f("div",{style:{backgroundColor:s.background||""},class:[p.b("mask"),s.customClass,s.fullscreen?"is-fullscreen":""]},[W("div",{class:p.b("spinner")},[m,w])]),[[Me,s.visible]])])})}}}),b=xt(v),i=b.mount(document.createElement("div"));return{...St(s),setText:n,removeElLoadingChild:c,close:u,handleAfterLeave:d,vm:i,get $el(){return i.$el}}}let X;const va=function(e={}){if(!ge)return;const t=fa(e);if(t.fullscreen&&X)return X;const a=da({...t,closed:()=>{var n;(n=t.closed)==null||n.call(t),t.fullscreen&&(X=void 0)}});ba(t,t.parent,a),Ae(t,t.parent,a),t.parent.vLoadingAddClassList=()=>Ae(t,t.parent,a);let s=t.parent.getAttribute("loading-number");return s?s=`${Number.parseInt(s)+1}`:s="1",t.parent.setAttribute("loading-number",s),t.parent.appendChild(a.$el),U(()=>a.visible.value=t.visible),t.fullscreen&&(X=a),a},fa=e=>{var t,a,s,n;let l;return xe(e.target)?l=(t=document.querySelector(e.target))!=null?t:document.body:l=e.target||document.body,{parent:l===document.body||e.body?document.body:l,background:e.background||"",svg:e.svg||"",svgViewBox:e.svgViewBox||"",spinner:e.spinner||!1,text:e.text||"",fullscreen:l===document.body&&((a=e.fullscreen)!=null?a:!0),lock:(s=e.lock)!=null?s:!1,customClass:e.customClass||"",visible:(n=e.visible)!=null?n:!0,beforeClose:e.beforeClose,closed:e.closed,target:l}},ba=async(e,t,a)=>{const{nextZIndex:s}=a.vm.zIndex||a.vm._.exposed.zIndex,n={};if(e.fullscreen)a.originalPosition.value=K(document.body,"position"),a.originalOverflow.value=K(document.body,"overflow"),n.zIndex=s();else if(e.parent===document.body){a.originalPosition.value=K(document.body,"position"),await U();for(const l of["top","left"]){const c=l==="top"?"scrollTop":"scrollLeft";n[l]=`${e.target.getBoundingClientRect()[l]+document.body[c]+document.documentElement[c]-Number.parseInt(K(document.body,`margin-${l}`),10)}px`}for(const l of["height","width"])n[l]=`${e.target.getBoundingClientRect()[l]}px`}else a.originalPosition.value=K(t,"position");for(const[l,c]of Object.entries(n))a.$el.style[l]=c},Ae=(e,t,a)=>{const s=a.vm.ns||a.vm._.exposed.ns;["absolute","fixed","sticky"].includes(a.originalPosition.value)?ee(t,s.bm("parent","relative")):ke(t,s.bm("parent","relative")),e.fullscreen&&e.lock?ke(t,s.bm("parent","hidden")):ee(t,s.bm("parent","hidden"))},Z=Symbol("ElLoading"),Ie=(e,t)=>{var a,s,n,l;const c=t.instance,u=o=>De(t.value)?t.value[o]:void 0,d=o=>{const r=xe(o)&&(c==null?void 0:c[o])||o;return r&&y(r)},v=o=>d(u(o)||e.getAttribute(`element-loading-${Et(o)}`)),b=(a=u("fullscreen"))!=null?a:t.modifiers.fullscreen,i={text:v("text"),svg:v("svg"),svgViewBox:v("svgViewBox"),spinner:v("spinner"),background:v("background"),customClass:v("customClass"),fullscreen:b,target:(s=u("target"))!=null?s:b?void 0:e,body:(n=u("body"))!=null?n:t.modifiers.body,lock:(l=u("lock"))!=null?l:t.modifiers.lock};e[Z]={options:i,instance:va(i)}},ma=(e,t)=>{for(const a of Object.keys(t))wt(t[a])&&(t[a].value=e[a])},pa={mounted(e,t){t.value&&Ie(e,t)},updated(e,t){const a=e[Z];t.oldValue!==t.value&&(t.value&&!t.oldValue?Ie(e,t):t.value&&t.oldValue?De(t.value)&&ma(t.value,a.options):a==null||a.instance.close())},unmounted(e){var t;(t=e[Z])==null||t.instance.close(),e[Z]=null}},ga={class:"container"},_a={class:"bread-container"},ha={class:"sub-container"},ya=["infinite-scroll-disabled"],Ca={class:"subCategory_list"},Ta={class:"goods-list"},xa={class:"goods-item"},Sa={"element-loading-text":"加载中...",class:"loading"},wa={key:0,class:"noMore"},Ea={__name:"index",setup(e){const t=kt(),a=y({});console.log(t.params,"getSubCategory + route params");const s=y([]),n=Se({ategoryId:t.params.id,page:1,pageSize:20,sortField:"publishTime"}),l=y(!1),c=y(!0),u=y(!1),d=y(!1);oe(async()=>{await ct(t.params).then(({result:i})=>{a.value=i}),await de(n).then(({result:i})=>{s.value=i.items,c.value=!1})});const v=async i=>{d.value=!1,n.page=1,await de(n).then(({result:o})=>{s.value=o.items,console.log(s,"subCategoryList,onTabChange")})},b=async()=>{u.value=!0,n.page++,await de(n).then(({result:i})=>{s.value=[...s.value,...i.items],s.value.length>=160&&(l.value=!0,console.log(s.value.length,"load"),u.value=!1,d.value=!0)}),u.value=!1};return(i,o)=>{const r=vt,p=ut,_=sa,S=aa,m=ft,w=dt,k=Ht,L=pa,E=ua;return M(),H("div",ga,[F("div",_a,[f(p,{separator:">"},{default:A(()=>[f(r,{to:{path:"/"}},{default:A(()=>o[1]||(o[1]=[ve("首页")])),_:1}),f(r,{to:`/category/${a.value.parentId}`},{default:A(()=>[ve(Pe(a.value.parentName),1)]),_:1},8,["to"]),f(r,null,{default:A(()=>[ve(Pe(a.value.name),1)]),_:1})]),_:1})]),F("div",ha,[f(S,{modelValue:n.sortField,"onUpdate:modelValue":o[0]||(o[0]=$=>n.sortField=$),onTabChange:v},{undefined:A(()=>o[2]||(o[2]=[])),default:A(()=>[f(_,{label:"最新商品",name:"publishTime"}),f(_,{label:"最高人气",name:"orderNum"}),f(_,{label:"评论最多",name:"evaluateNum"})]),_:1},8,["modelValue"]),se((M(),H("div",{class:"body","infinite-scroll-disabled":l.value},[F("div",Ca,[f(w,{rows:1,animated:"",loading:c.value},{template:A(()=>[F("ul",Ta,[(M(),H($t,null,Pt(8,$=>F("li",{key:$},[F("div",xa,[f(m,{variant:"image",style:{height:"160px",width:"160px","border-radius":"10px"}}),f(m,{variant:"text",style:{"margin-top":"16px"}}),f(m,{variant:"text",style:{width:"30%"}})])])),64))])]),default:A(()=>[f(Lt,{data:s.value},null,8,["data"])]),_:1},8,["loading"])]),se(F("div",Sa,null,512),[[L,u.value]]),d.value?(M(),H("div",wa," 没有更多了... ")):ye("",!0)],8,ya)),[[E,b]])]),f(k,{right:50,bottom:100},{default:A(()=>o[3]||(o[3]=[F("i",{class:"backtop iconfont icon-huidaodingbu1"},null,-1)])),_:1})])}}},La=Nt(Ea,[["__scopeId","data-v-37e6b641"]]);export{La as default};
