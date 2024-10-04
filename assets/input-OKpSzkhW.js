import{z as f,G as Fe,A as Y,g as M,h as X,R as xe,P as k,D as J,H as ke,ag as Ue,y as _e,l as Ye,a1 as Xe,o as m,c as C,i as h,F as ee,n as y,u as t,p as W,a as T,m as I,w as A,a0 as U,a2 as te,b as qe,I as Ge,a5 as Qe,t as _,K as Ze,W as we}from"./index-FnO2ZjAG.js";import{p as Pe,V as Je,r as oe,i as Ce,h as et,a3 as tt,v as ae,Q as Se,x as ot,k as Ie,aq as at,ar as nt,as as st,$ as lt,j as it,E as L,at as rt,_ as ut,w as ct}from"./base-BHVpw0Ph.js";import{b as dt,d as pt,l as ft,e as vt,g as mt}from"./button-aYL3H4Xg.js";import{U as ne,d as Ee}from"./event-BE20p1dL.js";const ht=()=>Pe&&/firefox/i.test(window.navigator.userAgent),gt=a=>/([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(a),yt=["class","style"],bt=/^on[A-Z]/,xt=(a={})=>{const{excludeListeners:r=!1,excludeKeys:l}=a,o=f(()=>((l==null?void 0:l.value)||[]).concat(yt)),s=Fe();return s?f(()=>{var u;return Je(Object.entries((u=s.proxy)==null?void 0:u.$attrs).filter(([d])=>!o.value.includes(d)&&!(r&&bt.test(d))))}):f(()=>({}))};function wt(a){let r;function l(){if(a.value==null)return;const{selectionStart:s,selectionEnd:u,value:d}=a.value;if(s==null||u==null)return;const i=d.slice(0,Math.max(0,s)),c=d.slice(Math.max(0,u));r={selectionStart:s,selectionEnd:u,value:d,beforeTxt:i,afterTxt:c}}function o(){if(a.value==null||r==null)return;const{value:s}=a.value,{beforeTxt:u,afterTxt:d,selectionStart:i}=r;if(u==null||d==null||i==null)return;let c=s.length;if(s.endsWith(d))c=s.length-d.length;else if(s.startsWith(u))c=u.length;else{const b=u[i-1],x=s.indexOf(b,i-1);x!==-1&&(c=x+1)}a.value.setSelectionRange(c,c)}return[l,o]}function Ct(a,{beforeFocus:r,afterFocus:l,beforeBlur:o,afterBlur:s}={}){const u=Fe(),{emit:d}=u,i=Y(),c=M(!1),b=g=>{xe(r)&&r(g)||c.value||(c.value=!0,d("focus",g),l==null||l())},x=g=>{var E;xe(o)&&o(g)||g.relatedTarget&&((E=i.value)!=null&&E.contains(g.relatedTarget))||(c.value=!1,d("blur",g),s==null||s())},v=()=>{var g,E;(g=i.value)!=null&&g.contains(document.activeElement)&&i.value!==document.activeElement||(E=a.value)==null||E.focus()};return X(i,g=>{g&&g.setAttribute("tabindex","-1")}),oe(i,"focus",b,!0),oe(i,"blur",x,!0),oe(i,"click",v,!0),{isFocused:c,wrapperRef:i,handleFocus:b,handleBlur:x}}function St({afterComposition:a,emit:r}){const l=M(!1),o=i=>{r==null||r("compositionstart",i),l.value=!0},s=i=>{var c;r==null||r("compositionupdate",i);const b=(c=i.target)==null?void 0:c.value,x=b[b.length-1]||"";l.value=!gt(x)},u=i=>{r==null||r("compositionend",i),l.value&&(l.value=!1,k(()=>a(i)))};return{isComposing:l,handleComposition:i=>{i.type==="compositionend"?u(i):s(i)},handleCompositionStart:o,handleCompositionUpdate:s,handleCompositionEnd:u}}let w;const It=`
  height:0 !important;
  visibility:hidden !important;
  ${ht()?"":"overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,Et=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function zt(a){const r=window.getComputedStyle(a),l=r.getPropertyValue("box-sizing"),o=Number.parseFloat(r.getPropertyValue("padding-bottom"))+Number.parseFloat(r.getPropertyValue("padding-top")),s=Number.parseFloat(r.getPropertyValue("border-bottom-width"))+Number.parseFloat(r.getPropertyValue("border-top-width"));return{contextStyle:Et.map(d=>`${d}:${r.getPropertyValue(d)}`).join(";"),paddingSize:o,borderSize:s,boxSizing:l}}function ze(a,r=1,l){var o;w||(w=document.createElement("textarea"),document.body.appendChild(w));const{paddingSize:s,borderSize:u,boxSizing:d,contextStyle:i}=zt(a);w.setAttribute("style",`${i};${It}`),w.value=a.value||a.placeholder||"";let c=w.scrollHeight;const b={};d==="border-box"?c=c+u:d==="content-box"&&(c=c-s),w.value="";const x=w.scrollHeight-s;if(Ce(r)){let v=x*r;d==="border-box"&&(v=v+s+u),c=Math.max(v,c),b.minHeight=`${v}px`}if(Ce(l)){let v=x*l;d==="border-box"&&(v=v+s+u),c=Math.min(v,c)}return b.height=`${c}px`,(o=w.parentNode)==null||o.removeChild(w),w=void 0,b}const Ft=et({id:{type:String,default:void 0},size:tt,disabled:Boolean,modelValue:{type:ae([String,Number,Object]),default:""},maxlength:{type:[String,Number]},minlength:{type:[String,Number]},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:ae([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:Boolean,clearable:Boolean,showPassword:Boolean,showWordLimit:Boolean,suffixIcon:{type:Se},prefixIcon:{type:Se},containerRole:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:ae([Object,Array,String]),default:()=>ot({})},autofocus:Boolean,rows:{type:Number,default:2},...dt(["ariaLabel"])}),kt={[ne]:a=>J(a),input:a=>J(a),change:a=>J(a),focus:a=>a instanceof FocusEvent,blur:a=>a instanceof FocusEvent,clear:()=>!0,mouseleave:a=>a instanceof MouseEvent,mouseenter:a=>a instanceof MouseEvent,keydown:a=>a instanceof Event,compositionstart:a=>a instanceof CompositionEvent,compositionupdate:a=>a instanceof CompositionEvent,compositionend:a=>a instanceof CompositionEvent},Pt=ke({name:"ElInput",inheritAttrs:!1}),Nt=ke({...Pt,props:Ft,emits:kt,setup(a,{expose:r,emit:l}){const o=a,s=Ue(),u=_e(),d=f(()=>{const e={};return o.containerRole==="combobox"&&(e["aria-haspopup"]=s["aria-haspopup"],e["aria-owns"]=s["aria-owns"],e["aria-expanded"]=s["aria-expanded"]),e}),i=f(()=>[o.type==="textarea"?se.b():n.b(),n.m(E.value),n.is("disabled",z.value),n.is("exceed",Be.value),{[n.b("group")]:u.prepend||u.append,[n.m("prefix")]:u.prefix||o.prefixIcon,[n.m("suffix")]:u.suffix||o.suffixIcon||o.clearable||o.showPassword,[n.bm("suffix","password-clear")]:j.value&&G.value,[n.b("hidden")]:o.type==="hidden"},s.class]),c=f(()=>[n.e("wrapper"),n.is("focus",K.value)]),b=xt({excludeKeys:f(()=>Object.keys(d.value))}),{form:x,formItem:v}=pt(),{inputId:g}=ft(o,{formItemContext:v}),E=vt(),z=mt(),n=Ie("input"),se=Ie("textarea"),H=Y(),S=Y(),q=M(!1),O=M(!1),le=M(),D=Y(o.inputStyle),P=f(()=>H.value||S.value),{wrapperRef:Ne,isFocused:K,handleFocus:Ve,handleBlur:Te}=Ct(P,{beforeFocus(){return z.value},afterBlur(){var e;o.validateEvent&&((e=v==null?void 0:v.validate)==null||e.call(v,"blur").catch(p=>Ee()))}}),ie=f(()=>{var e;return(e=x==null?void 0:x.statusIcon)!=null?e:!1}),$=f(()=>(v==null?void 0:v.validateState)||""),re=f(()=>$.value&&at[$.value]),$e=f(()=>O.value?nt:st),Re=f(()=>[s.style]),ue=f(()=>[o.inputStyle,D.value,{resize:o.resize}]),F=f(()=>lt(o.modelValue)?"":String(o.modelValue)),j=f(()=>o.clearable&&!z.value&&!o.readonly&&!!F.value&&(K.value||q.value)),G=f(()=>o.showPassword&&!z.value&&!o.readonly&&!!F.value&&(!!F.value||K.value)),N=f(()=>o.showWordLimit&&!!o.maxlength&&(o.type==="text"||o.type==="textarea")&&!z.value&&!o.readonly&&!o.showPassword),Q=f(()=>F.value.length),Be=f(()=>!!N.value&&Q.value>Number(o.maxlength)),Ae=f(()=>!!u.suffix||!!o.suffixIcon||j.value||o.showPassword||N.value||!!$.value&&ie.value),[Le,Me]=wt(H);it(S,e=>{if(He(),!N.value||o.resize!=="both")return;const p=e[0],{width:V}=p.contentRect;le.value={right:`calc(100% - ${V+15+6}px)`}});const R=()=>{const{type:e,autosize:p}=o;if(!(!Pe||e!=="textarea"||!S.value))if(p){const V=we(p)?p.minRows:void 0,ye=we(p)?p.maxRows:void 0,be=ze(S.value,V,ye);D.value={overflowY:"hidden",...be},k(()=>{S.value.offsetHeight,D.value=be})}else D.value={minHeight:ze(S.value).minHeight}},He=(e=>{let p=!1;return()=>{var V;if(p||!o.autosize)return;((V=S.value)==null?void 0:V.offsetParent)===null||(e(),p=!0)}})(R),B=()=>{const e=P.value,p=o.formatter?o.formatter(F.value):F.value;!e||e.value===p||(e.value=p)},Z=async e=>{Le();let{value:p}=e.target;if(o.formatter&&(p=o.parser?o.parser(p):p),!de.value){if(p===F.value){B();return}l(ne,p),l("input",p),await k(),B(),Me()}},ce=e=>{l("change",e.target.value)},{isComposing:de,handleCompositionStart:pe,handleCompositionUpdate:fe,handleCompositionEnd:ve}=St({emit:l,afterComposition:Z}),Oe=()=>{O.value=!O.value,me()},me=async()=>{var e;await k(),(e=P.value)==null||e.focus()},De=()=>{var e;return(e=P.value)==null?void 0:e.blur()},Ke=e=>{q.value=!1,l("mouseleave",e)},je=e=>{q.value=!0,l("mouseenter",e)},he=e=>{l("keydown",e)},We=()=>{var e;(e=P.value)==null||e.select()},ge=()=>{l(ne,""),l("change",""),l("clear"),l("input","")};return X(()=>o.modelValue,()=>{var e;k(()=>R()),o.validateEvent&&((e=v==null?void 0:v.validate)==null||e.call(v,"change").catch(p=>Ee()))}),X(F,()=>B()),X(()=>o.type,async()=>{await k(),B(),R()}),Ye(()=>{!o.formatter&&o.parser,B(),k(R)}),r({input:H,textarea:S,ref:P,textareaStyle:ue,autosize:Xe(o,"autosize"),isComposing:de,focus:me,blur:De,select:We,clear:ge,resizeTextarea:R}),(e,p)=>(m(),C("div",te(t(d),{class:[t(i),{[t(n).bm("group","append")]:e.$slots.append,[t(n).bm("group","prepend")]:e.$slots.prepend}],style:t(Re),role:e.containerRole,onMouseenter:je,onMouseleave:Ke}),[h(" input "),e.type!=="textarea"?(m(),C(ee,{key:0},[h(" prepend slot "),e.$slots.prepend?(m(),C("div",{key:0,class:y(t(n).be("group","prepend"))},[W(e.$slots,"prepend")],2)):h("v-if",!0),T("div",{ref_key:"wrapperRef",ref:Ne,class:y(t(c))},[h(" prefix slot "),e.$slots.prefix||e.prefixIcon?(m(),C("span",{key:0,class:y(t(n).e("prefix"))},[T("span",{class:y(t(n).e("prefix-inner"))},[W(e.$slots,"prefix"),e.prefixIcon?(m(),I(t(L),{key:0,class:y(t(n).e("icon"))},{default:A(()=>[(m(),I(U(e.prefixIcon)))]),_:1},8,["class"])):h("v-if",!0)],2)],2)):h("v-if",!0),T("input",te({id:t(g),ref_key:"input",ref:H,class:t(n).e("inner")},t(b),{minlength:e.minlength,maxlength:e.maxlength,type:e.showPassword?O.value?"text":"password":e.type,disabled:t(z),readonly:e.readonly,autocomplete:e.autocomplete,tabindex:e.tabindex,"aria-label":e.ariaLabel,placeholder:e.placeholder,style:e.inputStyle,form:e.form,autofocus:e.autofocus,onCompositionstart:t(pe),onCompositionupdate:t(fe),onCompositionend:t(ve),onInput:Z,onChange:ce,onKeydown:he}),null,16,["id","minlength","maxlength","type","disabled","readonly","autocomplete","tabindex","aria-label","placeholder","form","autofocus","onCompositionstart","onCompositionupdate","onCompositionend"]),h(" suffix slot "),t(Ae)?(m(),C("span",{key:1,class:y(t(n).e("suffix"))},[T("span",{class:y(t(n).e("suffix-inner"))},[!t(j)||!t(G)||!t(N)?(m(),C(ee,{key:0},[W(e.$slots,"suffix"),e.suffixIcon?(m(),I(t(L),{key:0,class:y(t(n).e("icon"))},{default:A(()=>[(m(),I(U(e.suffixIcon)))]),_:1},8,["class"])):h("v-if",!0)],64)):h("v-if",!0),t(j)?(m(),I(t(L),{key:1,class:y([t(n).e("icon"),t(n).e("clear")]),onMousedown:Ge(t(Qe),["prevent"]),onClick:ge},{default:A(()=>[qe(t(rt))]),_:1},8,["class","onMousedown"])):h("v-if",!0),t(G)?(m(),I(t(L),{key:2,class:y([t(n).e("icon"),t(n).e("password")]),onClick:Oe},{default:A(()=>[(m(),I(U(t($e))))]),_:1},8,["class"])):h("v-if",!0),t(N)?(m(),C("span",{key:3,class:y(t(n).e("count"))},[T("span",{class:y(t(n).e("count-inner"))},_(t(Q))+" / "+_(e.maxlength),3)],2)):h("v-if",!0),t($)&&t(re)&&t(ie)?(m(),I(t(L),{key:4,class:y([t(n).e("icon"),t(n).e("validateIcon"),t(n).is("loading",t($)==="validating")])},{default:A(()=>[(m(),I(U(t(re))))]),_:1},8,["class"])):h("v-if",!0)],2)],2)):h("v-if",!0)],2),h(" append slot "),e.$slots.append?(m(),C("div",{key:1,class:y(t(n).be("group","append"))},[W(e.$slots,"append")],2)):h("v-if",!0)],64)):(m(),C(ee,{key:1},[h(" textarea "),T("textarea",te({id:t(g),ref_key:"textarea",ref:S,class:[t(se).e("inner"),t(n).is("focus",t(K))]},t(b),{minlength:e.minlength,maxlength:e.maxlength,tabindex:e.tabindex,disabled:t(z),readonly:e.readonly,autocomplete:e.autocomplete,style:t(ue),"aria-label":e.ariaLabel,placeholder:e.placeholder,form:e.form,autofocus:e.autofocus,rows:e.rows,onCompositionstart:t(pe),onCompositionupdate:t(fe),onCompositionend:t(ve),onInput:Z,onFocus:t(Ve),onBlur:t(Te),onChange:ce,onKeydown:he}),null,16,["id","minlength","maxlength","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form","autofocus","rows","onCompositionstart","onCompositionupdate","onCompositionend","onFocus","onBlur"]),t(N)?(m(),C("span",{key:0,style:Ze(le.value),class:y(t(n).e("count"))},_(t(Q))+" / "+_(e.maxlength),7)):h("v-if",!0)],64))],16,["role"]))}});var Vt=ut(Nt,[["__file","input.vue"]]);const Lt=ct(Vt);export{Lt as E};
