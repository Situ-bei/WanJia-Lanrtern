import{R as H,H as ee,g as ce,M as de,z as h,h as me,l as pe,Q as fe,o as v,c as L,s as W,u as t,n as z,ac as A,p as Q,i as j,b as K,I as O,D as be,w as q,m as P}from"./index-FnO2ZjAG.js";import{E as ve}from"./input-OKpSzkhW.js";import{h as Ne,a3 as Ve,i as b,$ as E,l as he,k as Ie,n as F,a4 as Ee,a5 as ye,E as J,a6 as ge,C as we,_ as _e,w as Se}from"./base-BHVpw0Ph.js";import{b as Ae,d as Pe,e as Fe,g as Te}from"./button-aYL3H4Xg.js";import{C as ne,I as T,U as I,t as Ce,d as X}from"./event-BE20p1dL.js";const ke=100,De=600,Z={beforeMount(l,N){const i=N.value,{interval:r=ke,delay:y=De}=H(i)?{}:i;let c,m;const u=()=>H(i)?i():i.handler(),p=()=>{m&&(clearTimeout(m),m=void 0),c&&(clearInterval(c),c=void 0)};l.addEventListener("mousedown",g=>{g.button===0&&(p(),u(),document.addEventListener("mouseup",()=>p(),{once:!0}),m=setTimeout(()=>{c=setInterval(()=>{u()},r)},y))})}},Be=Ne({id:{type:String,default:void 0},step:{type:Number,default:1},stepStrictly:Boolean,max:{type:Number,default:Number.POSITIVE_INFINITY},min:{type:Number,default:Number.NEGATIVE_INFINITY},modelValue:Number,readonly:Boolean,disabled:Boolean,size:Ve,controls:{type:Boolean,default:!0},controlsPosition:{type:String,default:"",values:["","right"]},valueOnClear:{type:[String,Number,null],validator:l=>l===null||b(l)||["min","max"].includes(l),default:null},name:String,placeholder:String,precision:{type:Number,validator:l=>l>=0&&l===Number.parseInt(`${l}`,10)},validateEvent:{type:Boolean,default:!0},...Ae(["ariaLabel"])}),Me={[ne]:(l,N)=>N!==l,blur:l=>l instanceof FocusEvent,focus:l=>l instanceof FocusEvent,[T]:l=>b(l)||E(l),[I]:l=>b(l)||E(l)},xe=ee({name:"ElInputNumber"}),Le=ee({...xe,props:Be,emits:Me,setup(l,{expose:N,emit:i}){const r=l,{t:y}=he(),c=Ie("input-number"),m=ce(),u=de({currentValue:r.modelValue,userInput:null}),{formItem:p}=Pe(),g=h(()=>b(r.modelValue)&&r.modelValue<=r.min),R=h(()=>b(r.modelValue)&&r.modelValue>=r.max),te=h(()=>{const e=U(r.step);return F(r.precision)?Math.max(U(r.modelValue),e):(e>r.precision,r.precision)}),C=h(()=>r.controls&&r.controlsPosition==="right"),$=Fe(),V=Te(),k=h(()=>{if(u.userInput!==null)return u.userInput;let e=u.currentValue;if(E(e))return"";if(b(e)){if(Number.isNaN(e))return"";F(r.precision)||(e=e.toFixed(r.precision))}return e}),D=(e,n)=>{if(F(n)&&(n=te.value),n===0)return Math.round(e);let a=String(e);const o=a.indexOf(".");if(o===-1||!a.replace(".","").split("")[o+n])return e;const _=a.length;return a.charAt(_-1)==="5"&&(a=`${a.slice(0,Math.max(0,_-1))}6`),Number.parseFloat(Number(a).toFixed(n))},U=e=>{if(E(e))return 0;const n=e.toString(),a=n.indexOf(".");let o=0;return a!==-1&&(o=n.length-a-1),o},Y=(e,n=1)=>b(e)?D(e+r.step*n):u.currentValue,B=()=>{if(r.readonly||V.value||R.value)return;const e=Number(k.value)||0,n=Y(e);w(n),i(T,u.currentValue),x()},M=()=>{if(r.readonly||V.value||g.value)return;const e=Number(k.value)||0,n=Y(e,-1);w(n),i(T,u.currentValue),x()},G=(e,n)=>{const{max:a,min:o,step:s,precision:f,stepStrictly:_,valueOnClear:S}=r;a<o&&Ce("InputNumber","min should not be greater than max.");let d=Number(e);if(E(e)||Number.isNaN(d))return null;if(e===""){if(S===null)return null;d=be(S)?{min:o,max:a}[S]:S}return _&&(d=D(Math.round(d/s)*s,f)),F(f)||(d=D(d,f)),(d>a||d<o)&&(d=d>a?a:o,n&&i(I,d)),d},w=(e,n=!0)=>{var a;const o=u.currentValue,s=G(e);if(!n){i(I,s);return}o===s&&e||(u.userInput=null,i(I,s),o!==s&&i(ne,s,o),r.validateEvent&&((a=p==null?void 0:p.validate)==null||a.call(p,"change").catch(f=>X())),u.currentValue=s)},ae=e=>{u.userInput=e;const n=e===""?null:Number(e);i(T,n),w(n,!1)},re=e=>{const n=e!==""?Number(e):"";(b(n)&&!Number.isNaN(n)||e==="")&&w(n),x(),u.userInput=null},le=()=>{var e,n;(n=(e=m.value)==null?void 0:e.focus)==null||n.call(e)},ue=()=>{var e,n;(n=(e=m.value)==null?void 0:e.blur)==null||n.call(e)},se=e=>{i("focus",e)},oe=e=>{var n;u.userInput=null,i("blur",e),r.validateEvent&&((n=p==null?void 0:p.validate)==null||n.call(p,"blur").catch(a=>X()))},x=()=>{u.currentValue!==r.modelValue&&(u.currentValue=r.modelValue)},ie=e=>{document.activeElement===e.target&&e.preventDefault()};return me(()=>r.modelValue,(e,n)=>{const a=G(e,!0);u.userInput===null&&a!==n&&(u.currentValue=a)},{immediate:!0}),pe(()=>{var e;const{min:n,max:a,modelValue:o}=r,s=(e=m.value)==null?void 0:e.input;if(s.setAttribute("role","spinbutton"),Number.isFinite(a)?s.setAttribute("aria-valuemax",String(a)):s.removeAttribute("aria-valuemax"),Number.isFinite(n)?s.setAttribute("aria-valuemin",String(n)):s.removeAttribute("aria-valuemin"),s.setAttribute("aria-valuenow",u.currentValue||u.currentValue===0?String(u.currentValue):""),s.setAttribute("aria-disabled",String(V.value)),!b(o)&&o!=null){let f=Number(o);Number.isNaN(f)&&(f=null),i(I,f)}s.addEventListener("wheel",ie,{passive:!1})}),fe(()=>{var e,n;const a=(e=m.value)==null?void 0:e.input;a==null||a.setAttribute("aria-valuenow",`${(n=u.currentValue)!=null?n:""}`)}),N({focus:le,blur:ue}),(e,n)=>(v(),L("div",{class:z([t(c).b(),t(c).m(t($)),t(c).is("disabled",t(V)),t(c).is("without-controls",!e.controls),t(c).is("controls-right",t(C))]),onDragstart:O(()=>{},["prevent"])},[e.controls?W((v(),L("span",{key:0,role:"button","aria-label":t(y)("el.inputNumber.decrease"),class:z([t(c).e("decrease"),t(c).is("disabled",t(g))]),onKeydown:A(M,["enter"])},[Q(e.$slots,"decrease-icon",{},()=>[K(t(J),null,{default:q(()=>[t(C)?(v(),P(t(Ee),{key:0})):(v(),P(t(ye),{key:1}))]),_:1})])],42,["aria-label","onKeydown"])),[[t(Z),M]]):j("v-if",!0),e.controls?W((v(),L("span",{key:1,role:"button","aria-label":t(y)("el.inputNumber.increase"),class:z([t(c).e("increase"),t(c).is("disabled",t(R))]),onKeydown:A(B,["enter"])},[Q(e.$slots,"increase-icon",{},()=>[K(t(J),null,{default:q(()=>[t(C)?(v(),P(t(ge),{key:0})):(v(),P(t(we),{key:1}))]),_:1})])],42,["aria-label","onKeydown"])),[[t(Z),B]]):j("v-if",!0),K(t(ve),{id:e.id,ref_key:"input",ref:m,type:"number",step:e.step,"model-value":t(k),placeholder:e.placeholder,readonly:e.readonly,disabled:t(V),size:t($),max:e.max,min:e.min,name:e.name,"aria-label":e.ariaLabel,"validate-event":!1,onKeydown:[A(O(B,["prevent"]),["up"]),A(O(M,["prevent"]),["down"])],onBlur:oe,onFocus:se,onInput:ae,onChange:re},null,8,["id","step","model-value","placeholder","readonly","disabled","size","max","min","name","aria-label","onKeydown"])],42,["onDragstart"]))}});var ze=_e(Le,[["__file","input-number.vue"]]);const Ye=Se(ze);export{Ye as E};
