import{D as ve,L as j,z as _,h as Ve,P as je,G as De,g as X,Z as V,W as sa,ae as be,H as $,y as Fe,o as S,m as Ue,w as Ge,a as pe,n as x,u as v,s as F,c as k,X as U,I as G,af as M,p as se,F as ua,d as Me,t as Ne,i as Y,a0 as Re,K as ia,C as ca,U as da}from"./index-HMzYWzR0.js";import{af as K,M as O,ag as fa,ab as J,ah as ue,ai as va,aj as ba,a9 as N,ak as ie,al as R,am as ze,an as B,aa as ge,ao as pa,a3 as Ke,i as me,U as Q,n as ee,ap as ae,k as ce,_ as de,h as ga,v as ma,w as ha,o as He}from"./base-C0_RkL3B.js";import{j as qe,k as ya,h as _a,b as We,g as Ca,d as fe,e as he,l as Ze,m as q,p as Ta}from"./button-nyzc5k6O.js";import{U as H,d as Xe}from"./event-BE20p1dL.js";var te=K(O,"WeakMap");function xa(e){return e!=null&&qe(e.length)&&!fa(e)}var Aa=Object.prototype;function Sa(e){var a=e&&e.constructor,t=typeof a=="function"&&a.prototype||Aa;return e===t}function wa(e,a){for(var t=-1,n=Array(e);++t<e;)n[t]=a(t);return n}function La(){return!1}var Ye=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ye=Ye&&typeof module=="object"&&module&&!module.nodeType&&module,ka=ye&&ye.exports===Ye,_e=ka?O.Buffer:void 0,Ea=_e?_e.isBuffer:void 0,ne=Ea||La,$a="[object Arguments]",Oa="[object Array]",Ba="[object Boolean]",Pa="[object Date]",Ia="[object Error]",Va="[object Function]",ja="[object Map]",Da="[object Number]",Fa="[object Object]",Ua="[object RegExp]",Ga="[object Set]",Ma="[object String]",Na="[object WeakMap]",Ra="[object ArrayBuffer]",za="[object DataView]",Ka="[object Float32Array]",Ha="[object Float64Array]",qa="[object Int8Array]",Wa="[object Int16Array]",Za="[object Int32Array]",Xa="[object Uint8Array]",Ya="[object Uint8ClampedArray]",Ja="[object Uint16Array]",Qa="[object Uint32Array]",h={};h[Ka]=h[Ha]=h[qa]=h[Wa]=h[Za]=h[Xa]=h[Ya]=h[Ja]=h[Qa]=!0;h[$a]=h[Oa]=h[Ra]=h[Ba]=h[za]=h[Pa]=h[Ia]=h[Va]=h[ja]=h[Da]=h[Fa]=h[Ua]=h[Ga]=h[Ma]=h[Na]=!1;function et(e){return J(e)&&qe(e.length)&&!!h[ue(e)]}function at(e){return function(a){return e(a)}}var Je=typeof exports=="object"&&exports&&!exports.nodeType&&exports,I=Je&&typeof module=="object"&&module&&!module.nodeType&&module,tt=I&&I.exports===Je,W=tt&&va.process,Ce=function(){try{var e=I&&I.require&&I.require("util").types;return e||W&&W.binding&&W.binding("util")}catch{}}(),Te=Ce&&Ce.isTypedArray,Qe=Te?at(Te):et,nt=Object.prototype,rt=nt.hasOwnProperty;function lt(e,a){var t=N(e),n=!t&&ya(e),c=!t&&!n&&ne(e),r=!t&&!n&&!c&&Qe(e),i=t||n||c||r,o=i?wa(e.length,String):[],d=o.length;for(var s in e)(a||rt.call(e,s))&&!(i&&(s=="length"||c&&(s=="offset"||s=="parent")||r&&(s=="buffer"||s=="byteLength"||s=="byteOffset")||ba(s,d)))&&o.push(s);return o}function ot(e,a){return function(t){return e(a(t))}}var st=ot(Object.keys,Object),ut=Object.prototype,it=ut.hasOwnProperty;function ct(e){if(!Sa(e))return st(e);var a=[];for(var t in Object(e))it.call(e,t)&&t!="constructor"&&a.push(t);return a}function dt(e){return xa(e)?lt(e):ct(e)}function ft(){this.__data__=new ie,this.size=0}function vt(e){var a=this.__data__,t=a.delete(e);return this.size=a.size,t}function bt(e){return this.__data__.get(e)}function pt(e){return this.__data__.has(e)}var gt=200;function mt(e,a){var t=this.__data__;if(t instanceof ie){var n=t.__data__;if(!R||n.length<gt-1)return n.push([e,a]),this.size=++t.size,this;t=this.__data__=new ze(n)}return t.set(e,a),this.size=t.size,this}function E(e){var a=this.__data__=new ie(e);this.size=a.size}E.prototype.clear=ft;E.prototype.delete=vt;E.prototype.get=bt;E.prototype.has=pt;E.prototype.set=mt;function ht(e,a){for(var t=-1,n=e==null?0:e.length,c=0,r=[];++t<n;){var i=e[t];a(i,t,e)&&(r[c++]=i)}return r}function yt(){return[]}var _t=Object.prototype,Ct=_t.propertyIsEnumerable,xe=Object.getOwnPropertySymbols,Tt=xe?function(e){return e==null?[]:(e=Object(e),ht(xe(e),function(a){return Ct.call(e,a)}))}:yt;function xt(e,a,t){var n=a(e);return N(e)?n:_a(n,t(e))}function Ae(e){return xt(e,dt,Tt)}var re=K(O,"DataView"),le=K(O,"Promise"),oe=K(O,"Set"),Se="[object Map]",At="[object Object]",we="[object Promise]",Le="[object Set]",ke="[object WeakMap]",Ee="[object DataView]",St=B(re),wt=B(R),Lt=B(le),kt=B(oe),Et=B(te),L=ue;(re&&L(new re(new ArrayBuffer(1)))!=Ee||R&&L(new R)!=Se||le&&L(le.resolve())!=we||oe&&L(new oe)!=Le||te&&L(new te)!=ke)&&(L=function(e){var a=ue(e),t=a==At?e.constructor:void 0,n=t?B(t):"";if(n)switch(n){case St:return Ee;case wt:return Se;case Lt:return we;case kt:return Le;case Et:return ke}return a});var $e=O.Uint8Array,$t="__lodash_hash_undefined__";function Ot(e){return this.__data__.set(e,$t),this}function Bt(e){return this.__data__.has(e)}function z(e){var a=-1,t=e==null?0:e.length;for(this.__data__=new ze;++a<t;)this.add(e[a])}z.prototype.add=z.prototype.push=Ot;z.prototype.has=Bt;function Pt(e,a){for(var t=-1,n=e==null?0:e.length;++t<n;)if(a(e[t],t,e))return!0;return!1}function It(e,a){return e.has(a)}var Vt=1,jt=2;function ea(e,a,t,n,c,r){var i=t&Vt,o=e.length,d=a.length;if(o!=d&&!(i&&d>o))return!1;var s=r.get(e),u=r.get(a);if(s&&u)return s==a&&u==e;var b=-1,p=!0,C=t&jt?new z:void 0;for(r.set(e,a),r.set(a,e);++b<o;){var l=e[b],g=a[b];if(n)var y=i?n(g,l,b,a,e,r):n(l,g,b,e,a,r);if(y!==void 0){if(y)continue;p=!1;break}if(C){if(!Pt(a,function(f,m){if(!It(C,m)&&(l===f||c(l,f,t,n,r)))return C.push(m)})){p=!1;break}}else if(!(l===g||c(l,g,t,n,r))){p=!1;break}}return r.delete(e),r.delete(a),p}function Dt(e){var a=-1,t=Array(e.size);return e.forEach(function(n,c){t[++a]=[c,n]}),t}function Ft(e){var a=-1,t=Array(e.size);return e.forEach(function(n){t[++a]=n}),t}var Ut=1,Gt=2,Mt="[object Boolean]",Nt="[object Date]",Rt="[object Error]",zt="[object Map]",Kt="[object Number]",Ht="[object RegExp]",qt="[object Set]",Wt="[object String]",Zt="[object Symbol]",Xt="[object ArrayBuffer]",Yt="[object DataView]",Oe=ge?ge.prototype:void 0,Z=Oe?Oe.valueOf:void 0;function Jt(e,a,t,n,c,r,i){switch(t){case Yt:if(e.byteLength!=a.byteLength||e.byteOffset!=a.byteOffset)return!1;e=e.buffer,a=a.buffer;case Xt:return!(e.byteLength!=a.byteLength||!r(new $e(e),new $e(a)));case Mt:case Nt:case Kt:return pa(+e,+a);case Rt:return e.name==a.name&&e.message==a.message;case Ht:case Wt:return e==a+"";case zt:var o=Dt;case qt:var d=n&Ut;if(o||(o=Ft),e.size!=a.size&&!d)return!1;var s=i.get(e);if(s)return s==a;n|=Gt,i.set(e,a);var u=ea(o(e),o(a),n,c,r,i);return i.delete(e),u;case Zt:if(Z)return Z.call(e)==Z.call(a)}return!1}var Qt=1,en=Object.prototype,an=en.hasOwnProperty;function tn(e,a,t,n,c,r){var i=t&Qt,o=Ae(e),d=o.length,s=Ae(a),u=s.length;if(d!=u&&!i)return!1;for(var b=d;b--;){var p=o[b];if(!(i?p in a:an.call(a,p)))return!1}var C=r.get(e),l=r.get(a);if(C&&l)return C==a&&l==e;var g=!0;r.set(e,a),r.set(a,e);for(var y=i;++b<d;){p=o[b];var f=e[p],m=a[p];if(n)var w=i?n(m,f,p,a,e,r):n(f,m,p,e,a,r);if(!(w===void 0?f===m||c(f,m,t,n,r):w)){g=!1;break}y||(y=p=="constructor")}if(g&&!y){var A=e.constructor,T=a.constructor;A!=T&&"constructor"in e&&"constructor"in a&&!(typeof A=="function"&&A instanceof A&&typeof T=="function"&&T instanceof T)&&(g=!1)}return r.delete(e),r.delete(a),g}var nn=1,Be="[object Arguments]",Pe="[object Array]",D="[object Object]",rn=Object.prototype,Ie=rn.hasOwnProperty;function ln(e,a,t,n,c,r){var i=N(e),o=N(a),d=i?Pe:L(e),s=o?Pe:L(a);d=d==Be?D:d,s=s==Be?D:s;var u=d==D,b=s==D,p=d==s;if(p&&ne(e)){if(!ne(a))return!1;i=!0,u=!1}if(p&&!u)return r||(r=new E),i||Qe(e)?ea(e,a,t,n,c,r):Jt(e,a,d,t,n,c,r);if(!(t&nn)){var C=u&&Ie.call(e,"__wrapped__"),l=b&&Ie.call(a,"__wrapped__");if(C||l){var g=C?e.value():e,y=l?a.value():a;return r||(r=new E),c(g,y,t,n,r)}}return p?(r||(r=new E),tn(e,a,t,n,c,r)):!1}function aa(e,a,t,n,c){return e===a?!0:e==null||a==null||!J(e)&&!J(a)?e!==e&&a!==a:ln(e,a,t,n,aa,c)}function on(e,a){return aa(e,a)}const ta={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object],default:void 0},value:{type:[String,Boolean,Number,Object],default:void 0},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueValue:{type:[String,Number],default:void 0},falseValue:{type:[String,Number],default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},border:Boolean,size:Ke,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0},...We(["ariaControls"])},na={[H]:e=>ve(e)||me(e)||Q(e),change:e=>ve(e)||me(e)||Q(e)},P=Symbol("checkboxGroupContextKey"),sn=({model:e,isChecked:a})=>{const t=j(P,void 0),n=_(()=>{var r,i;const o=(r=t==null?void 0:t.max)==null?void 0:r.value,d=(i=t==null?void 0:t.min)==null?void 0:i.value;return!ee(o)&&e.value.length>=o&&!a.value||!ee(d)&&e.value.length<=d&&a.value});return{isDisabled:Ca(_(()=>(t==null?void 0:t.disabled.value)||n.value)),isLimitDisabled:n}},un=(e,{model:a,isLimitExceeded:t,hasOwnLabel:n,isDisabled:c,isLabeledByFormItem:r})=>{const i=j(P,void 0),{formItem:o}=fe(),{emit:d}=De();function s(l){var g,y,f,m;return[!0,e.trueValue,e.trueLabel].includes(l)?(y=(g=e.trueValue)!=null?g:e.trueLabel)!=null?y:!0:(m=(f=e.falseValue)!=null?f:e.falseLabel)!=null?m:!1}function u(l,g){d("change",s(l),g)}function b(l){if(t.value)return;const g=l.target;d("change",s(g.checked),l)}async function p(l){t.value||!n.value&&!c.value&&r.value&&(l.composedPath().some(f=>f.tagName==="LABEL")||(a.value=s([!1,e.falseValue,e.falseLabel].includes(a.value)),await je(),u(a.value,l)))}const C=_(()=>(i==null?void 0:i.validateEvent)||e.validateEvent);return Ve(()=>e.modelValue,()=>{C.value&&(o==null||o.validate("change").catch(l=>Xe()))}),{handleChange:b,onClickRoot:p}},cn=e=>{const a=X(!1),{emit:t}=De(),n=j(P,void 0),c=_(()=>ee(n)===!1),r=X(!1),i=_({get(){var o,d;return c.value?(o=n==null?void 0:n.modelValue)==null?void 0:o.value:(d=e.modelValue)!=null?d:a.value},set(o){var d,s;c.value&&V(o)?(r.value=((d=n==null?void 0:n.max)==null?void 0:d.value)!==void 0&&o.length>(n==null?void 0:n.max.value)&&o.length>i.value.length,r.value===!1&&((s=n==null?void 0:n.changeEvent)==null||s.call(n,o))):(t(H,o),a.value=o)}});return{model:i,isGroup:c,isLimitExceeded:r}},dn=(e,a,{model:t})=>{const n=j(P,void 0),c=X(!1),r=_(()=>ae(e.value)?e.label:e.value),i=_(()=>{const u=t.value;return Q(u)?u:V(u)?sa(r.value)?u.map(be).some(b=>on(b,r.value)):u.map(be).includes(r.value):u!=null?u===e.trueValue||u===e.trueLabel:!!u}),o=he(_(()=>{var u;return(u=n==null?void 0:n.size)==null?void 0:u.value}),{prop:!0}),d=he(_(()=>{var u;return(u=n==null?void 0:n.size)==null?void 0:u.value})),s=_(()=>!!a.default||!ae(r.value));return{checkboxButtonSize:o,isChecked:i,isFocused:c,checkboxSize:d,hasOwnLabel:s,actualValue:r}},ra=(e,a)=>{const{formItem:t}=fe(),{model:n,isGroup:c,isLimitExceeded:r}=cn(e),{isFocused:i,isChecked:o,checkboxButtonSize:d,checkboxSize:s,hasOwnLabel:u,actualValue:b}=dn(e,a,{model:n}),{isDisabled:p}=sn({model:n,isChecked:o}),{inputId:C,isLabeledByFormItem:l}=Ze(e,{formItemContext:t,disableIdGeneration:u,disableIdManagement:c}),{handleChange:g,onClickRoot:y}=un(e,{model:n,isLimitExceeded:r,hasOwnLabel:u,isDisabled:p,isLabeledByFormItem:l});return(()=>{function m(){var w,A;V(n.value)&&!n.value.includes(b.value)?n.value.push(b.value):n.value=(A=(w=e.trueValue)!=null?w:e.trueLabel)!=null?A:!0}e.checked&&m()})(),q({from:"label act as value",replacement:"value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},_(()=>c.value&&ae(e.value))),q({from:"true-label",replacement:"true-value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},_(()=>!!e.trueLabel)),q({from:"false-label",replacement:"false-value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},_(()=>!!e.falseLabel)),{inputId:C,isLabeledByFormItem:l,isChecked:o,isDisabled:p,isFocused:i,checkboxButtonSize:d,checkboxSize:s,hasOwnLabel:u,model:n,actualValue:b,handleChange:g,onClickRoot:y}},fn=$({name:"ElCheckbox"}),vn=$({...fn,props:ta,emits:na,setup(e){const a=e,t=Fe(),{inputId:n,isLabeledByFormItem:c,isChecked:r,isDisabled:i,isFocused:o,checkboxSize:d,hasOwnLabel:s,model:u,actualValue:b,handleChange:p,onClickRoot:C}=ra(a,t),l=ce("checkbox"),g=_(()=>[l.b(),l.m(d.value),l.is("disabled",i.value),l.is("bordered",a.border),l.is("checked",r.value)]),y=_(()=>[l.e("input"),l.is("disabled",i.value),l.is("checked",r.value),l.is("indeterminate",a.indeterminate),l.is("focus",o.value)]);return(f,m)=>(S(),Ue(Re(!v(s)&&v(c)?"span":"label"),{class:x(v(g)),"aria-controls":f.indeterminate?f.ariaControls:null,onClick:v(C)},{default:Ge(()=>{var w,A;return[pe("span",{class:x(v(y))},[f.trueValue||f.falseValue||f.trueLabel||f.falseLabel?F((S(),k("input",{key:0,id:v(n),"onUpdate:modelValue":T=>U(u)?u.value=T:null,class:x(v(l).e("original")),type:"checkbox",indeterminate:f.indeterminate,name:f.name,tabindex:f.tabindex,disabled:v(i),"true-value":(w=f.trueValue)!=null?w:f.trueLabel,"false-value":(A=f.falseValue)!=null?A:f.falseLabel,onChange:v(p),onFocus:T=>o.value=!0,onBlur:T=>o.value=!1,onClick:G(()=>{},["stop"])},null,42,["id","onUpdate:modelValue","indeterminate","name","tabindex","disabled","true-value","false-value","onChange","onFocus","onBlur","onClick"])),[[M,v(u)]]):F((S(),k("input",{key:1,id:v(n),"onUpdate:modelValue":T=>U(u)?u.value=T:null,class:x(v(l).e("original")),type:"checkbox",indeterminate:f.indeterminate,disabled:v(i),value:v(b),name:f.name,tabindex:f.tabindex,onChange:v(p),onFocus:T=>o.value=!0,onBlur:T=>o.value=!1,onClick:G(()=>{},["stop"])},null,42,["id","onUpdate:modelValue","indeterminate","disabled","value","name","tabindex","onChange","onFocus","onBlur","onClick"])),[[M,v(u)]]),pe("span",{class:x(v(l).e("inner"))},null,2)],2),v(s)?(S(),k("span",{key:0,class:x(v(l).e("label"))},[se(f.$slots,"default"),f.$slots.default?Y("v-if",!0):(S(),k(ua,{key:0},[Me(Ne(f.label),1)],64))],2)):Y("v-if",!0)]}),_:3},8,["class","aria-controls","onClick"]))}});var bn=de(vn,[["__file","checkbox.vue"]]);const pn=$({name:"ElCheckboxButton"}),gn=$({...pn,props:ta,emits:na,setup(e){const a=e,t=Fe(),{isFocused:n,isChecked:c,isDisabled:r,checkboxButtonSize:i,model:o,actualValue:d,handleChange:s}=ra(a,t),u=j(P,void 0),b=ce("checkbox"),p=_(()=>{var l,g,y,f;const m=(g=(l=u==null?void 0:u.fill)==null?void 0:l.value)!=null?g:"";return{backgroundColor:m,borderColor:m,color:(f=(y=u==null?void 0:u.textColor)==null?void 0:y.value)!=null?f:"",boxShadow:m?`-1px 0 0 0 ${m}`:void 0}}),C=_(()=>[b.b("button"),b.bm("button",i.value),b.is("disabled",r.value),b.is("checked",c.value),b.is("focus",n.value)]);return(l,g)=>{var y,f;return S(),k("label",{class:x(v(C))},[l.trueValue||l.falseValue||l.trueLabel||l.falseLabel?F((S(),k("input",{key:0,"onUpdate:modelValue":m=>U(o)?o.value=m:null,class:x(v(b).be("button","original")),type:"checkbox",name:l.name,tabindex:l.tabindex,disabled:v(r),"true-value":(y=l.trueValue)!=null?y:l.trueLabel,"false-value":(f=l.falseValue)!=null?f:l.falseLabel,onChange:v(s),onFocus:m=>n.value=!0,onBlur:m=>n.value=!1,onClick:G(()=>{},["stop"])},null,42,["onUpdate:modelValue","name","tabindex","disabled","true-value","false-value","onChange","onFocus","onBlur","onClick"])),[[M,v(o)]]):F((S(),k("input",{key:1,"onUpdate:modelValue":m=>U(o)?o.value=m:null,class:x(v(b).be("button","original")),type:"checkbox",name:l.name,tabindex:l.tabindex,disabled:v(r),value:v(d),onChange:v(s),onFocus:m=>n.value=!0,onBlur:m=>n.value=!1,onClick:G(()=>{},["stop"])},null,42,["onUpdate:modelValue","name","tabindex","disabled","value","onChange","onFocus","onBlur","onClick"])),[[M,v(o)]]),l.$slots.default||l.label?(S(),k("span",{key:2,class:x(v(b).be("button","inner")),style:ia(v(c)?v(p):void 0)},[se(l.$slots,"default",{},()=>[Me(Ne(l.label),1)])],6)):Y("v-if",!0)],2)}}});var la=de(gn,[["__file","checkbox-button.vue"]]);const mn=ga({modelValue:{type:ma(Array),default:()=>[]},disabled:Boolean,min:Number,max:Number,size:Ke,fill:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0},...We(["ariaLabel"])}),hn={[H]:e=>V(e),change:e=>V(e)},yn=$({name:"ElCheckboxGroup"}),_n=$({...yn,props:mn,emits:hn,setup(e,{emit:a}){const t=e,n=ce("checkbox"),{formItem:c}=fe(),{inputId:r,isLabeledByFormItem:i}=Ze(t,{formItemContext:c}),o=async s=>{a(H,s),await je(),a("change",s)},d=_({get(){return t.modelValue},set(s){o(s)}});return ca(P,{...Ta(da(t),["size","min","max","disabled","validateEvent","fill","textColor"]),modelValue:d,changeEvent:o}),Ve(()=>t.modelValue,()=>{t.validateEvent&&(c==null||c.validate("change").catch(s=>Xe()))}),(s,u)=>{var b;return S(),Ue(Re(s.tag),{id:v(r),class:x(v(n).b("group")),role:"group","aria-label":v(i)?void 0:s.ariaLabel||"checkbox-group","aria-labelledby":v(i)?(b=v(c))==null?void 0:b.labelId:void 0},{default:Ge(()=>[se(s.$slots,"default")]),_:3},8,["id","class","aria-label","aria-labelledby"])}}});var oa=de(_n,[["__file","checkbox-group.vue"]]);const Sn=ha(bn,{CheckboxButton:la,CheckboxGroup:oa});He(la);He(oa);export{Sn as E,E as S,$e as U,xa as a,lt as b,xt as c,L as d,at as e,ne as f,Tt as g,Ae as h,Sa as i,dt as k,Ce as n,ot as o,yt as s};
