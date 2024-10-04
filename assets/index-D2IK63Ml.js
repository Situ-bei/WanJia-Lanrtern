import{N as X,O as P,a as F,P as V}from"./base-C0_RkL3B.js";import{E as J}from"./button-nyzc5k6O.js";import"./input-C9gCMp7E.js";import{E as K}from"./input-number-DaA0dy_V.js";import{c as Y,a as G,E as T,b as Q}from"./breadcrumb-item-BPBGVFVO.js";import{_ as D,x as U,g as x,l as N,r as W,q as z,o as i,c as d,a as e,n as w,d as k,t as p,b as m,w as I,F as C,e as E,m as Z,s as L,$ as ee,h as te,J as R,u as j,K as q,M as se,v as ne,i as H,X as oe}from"./index-HMzYWzR0.js";import"./event-BE20p1dL.js";const ae={class:"goods-hot"},le={class:"goods_skeleton"},ie={alt:""},ce={class:"name ellipsis"},re={class:"desc ellipsis"},de={class:"price"},ue={__name:"index",props:{id:{type:Number,required:!0}},setup(c){const h=U(),s=x([]),f=x(!0),r=c,l={id:h.params.id,type:r.id},u={1:"icon-rebang",2:"icon-rebang1",3:"icon-a-dianjizhuangtairebang"};console.log(u[r.id],"iconClass");const y={1:"小时热榜",2:"周日榜单",3:"月度榜单"};return N(()=>{X(l).then(({result:b})=>{s.value=b,f.value=!1})}),(b,o)=>{const t=Y,a=W("RouterLink"),n=G,_=z("useLazyImg");return i(),d("div",ae,[e("h3",null,[e("i",{class:w(`iconfont ${u[r.id]}`)},null,2),k(" "+p(y[r.id]),1)]),m(n,{animated:"",loading:f.value},{template:I(()=>[(i(),d(C,null,E(3,g=>e("li",le,[m(t,{variant:"image",style:{height:"160px",width:"160px","border-radius":"10px"}}),m(t,{variant:"text",style:{width:"160px","margin-top":"8px"}}),m(t,{variant:"text",style:{width:"160px","margin-top":"2px"}}),m(t,{variant:"text",style:{width:"160px","margin-top":"2px"}})])),64))]),default:I(()=>[(i(!0),d(C,null,E(s.value,g=>(i(),Z(a,{to:{name:"detail",params:{id:g.id}},class:"goods-item",key:g.id},{default:I(()=>[L(e("img",ie,null,512),[[_,g.picture]]),e("p",ce,p(g.name),1),e("p",re,p(g.desc),1),e("p",de,"¥"+p(g.price),1)]),_:2},1032,["to"]))),128))]),_:1},8,["loading"])])}}},M=D(ue,[["__scopeId","data-v-a284b077"]]),pe={class:"goods-image"},me=["src"],ge={class:"small"},_e=["onMouseenter"],fe={alt:"商品详图"},ve={__name:"index",props:{imageList:{type:Array,required:!0,default:()=>[]}},setup(c){console.log(c.imageList.data,"imageLists");const h=x(0),s=a=>{h.value=a},f=x(null),{elementX:r,elementY:l,isOutside:u}=ee(f),y=x(0),b=x(0),o=x(0),t=x(0);return te([r,l,u],()=>{u.value||(r.value>=100&&r.value<=300&&(y.value=r.value-100),l.value>=100&&l.value<=300&&(b.value=l.value-100),r.value>=300?y.value=200:r.value<=100&&(y.value=0),l.value>=300?b.value=200:l.value<=100&&(b.value=0),t.value=-b.value*2,o.value=-y.value*2)}),(a,n)=>{const _=z("useLazyImg");return i(),d("div",pe,[e("div",{class:"middle",ref_key:"target",ref:f},[e("img",{src:c.imageList[h.value],alt:"商品详图"},null,8,me),L(e("div",{class:"layer",style:q({left:`${y.value}px`,top:`${b.value}px`})},null,4),[[R,!j(u)]])],512),e("ul",ge,[(i(!0),d(C,null,E(c.imageList,(g,v)=>(i(),d("li",{key:v,onMouseenter:$=>s(v),class:w({active:v===h.value})},[L(e("img",fe,null,512),[[_,g]])],42,_e))),128))]),L(e("div",{class:"large",style:q([{backgroundImage:`url(${c.imageList[h.value]})`,backgroundPosition:`${o.value}px ${t.value}px`}])},null,4),[[R,!j(u)]])])}}},he=D(ve,[["__scopeId","data-v-d982fd02"]]);function ye(c){const h=[],s=2**c.length;for(let f=0;f<s;f+=1){const r=[];for(let l=0;l<c.length;l+=1)f&1<<l&&r.push(c[l]);h.push(r)}return h}const be={class:"goods-sku"},ke=["onClick","src"],xe=["onClick"],Ie={__name:"index",props:{data:{type:[Object,Array],required:!0,default:()=>[]}},emits:["getSukID"],setup(c,{emit:h}){let s={};console.log(c.data,"详情组件给SKU组件传的数据"),N(async()=>{try{s=l(c.data.skus),u(c.data.specs,s)}catch(o){console.error("Error in onMounted:",o)}});const f=(o,t)=>{if(t.disabled)return;if(t.selected?(t.selected=!1,r("getSukID",{})):(o.values.forEach(n=>{n.selected=!1}),t.selected=!0),s=l(c.data.skus),s.lenght!==0)b(c.data.specs,s),console.log(s,"pathMap");else return;const a=y(c.data.specs);if(console.log(a,"选中的项目"),!a.includes(void 0)){const n=a.join("-"),_=s[n],g=c.data.skus.find(v=>v.id==_);r("getSukID",g)}},r=h,l=o=>{const t=[],a=o==null?void 0:o.filter(n=>n.inventory>0);return a==null||a.forEach(n=>{const _=n.specs.map(v=>v.valueName);ye(_).forEach(v=>{const $=v.join("-");t[$]?t[$].push(n.id):t[$]=[n.id]})}),t},u=(o,t)=>{o==null||o.forEach(a=>{a.values.forEach(n=>{n.disabled=!t[n.name]})})},y=o=>{const t=[];return o.forEach(a=>{const n=a.values.find(_=>_.selected);t.push(n?n.name:void 0)}),console.log(t,"arr"),t},b=(o,t)=>{o.forEach((a,n)=>{const _=y(o);a.values.forEach(g=>{_[n]=g.name;const v=_.filter($=>$).join("-");console.log(v,"这是选中数组改造的key"),g.disabled=!t[v]})})};return(o,t)=>(i(),d("div",be,[(i(!0),d(C,null,E(c.data.specs,a=>(i(),d("dl",{key:a.id},[e("dt",null,p(a.name),1),e("dd",null,[(i(!0),d(C,null,E(a.values,n=>(i(),d(C,{key:n.name},[n.picture?(i(),d("img",{key:0,class:w({selected:n.selected,disabled:n.disabled}),onClick:_=>f(a,n),src:n.picture},null,10,ke)):(i(),d("span",{key:1,class:w({selected:n.selected,disabled:n.disabled}),onClick:_=>f(a,n)},p(n.name),11,xe))],64))),128))])]))),128))]))}},$e=D(Ie,[["__scopeId","data-v-c68113ee"]]),Se={class:"xtx-goods-page"},Ce={class:"container"},Ee={key:0},Le={key:1,class:"bread-container"},we={class:"info-container"},De={class:"goods-info"},Me={class:"media"},je={class:"goods-sales"},Ne={class:"spec"},ze={class:"g-name"},Ae={class:"g-desc"},Be={class:"g-price"},Oe={class:"goods-footer"},Pe={class:"goods-article"},Ve={class:"goods-tabs"},Re={class:"goods-detail"},qe={class:"attrs"},He={class:"dt"},Ge={class:"dd"},Ue={class:"goods-aside"},Xe={__name:"index",setup(c){const h=U(),s=se({});N(()=>{f()});const f=async()=>{await P(h.params).then(({result:o})=>{Object.assign(s,o),console.log(s,"商品详情全部数据")})};ne(async(o,t)=>{try{o.params.id!==t.params.id&&await P(o.params).then(({result:a})=>{Object.assign(s,a)})}catch(a){console.log(a,"error")}});const r=F(),l=x(1);let u={};const y=o=>{u=o,console.log(u,"子组件传递的skuID对象")},b=()=>{try{if(u.id){let o={id:u.id,productAttri:u.specs[0].valueName,picture:u.picture,price:u.price,count:l.value,skuCode:u.skuCode,inventory:u.inventory,productName:s.name,selected:!0};r.addCart(o),console.log(r.shoppingCart,"pinia")}else V.warning("请选择商品规格")}catch(o){return V.error("处理过程中发生错误"),Promise.reject(o)}};return(o,t)=>{var A,B,O;const a=G,n=Q,_=T,g=K,v=J,$=z("useLazyImg");return i(),d("div",Se,[e("div",Ce,[s.categories?H("",!0):(i(),d("div",Ee,[m(a,{rows:0,animated:"",class:"skeleton"})])),s.categories?(i(),d("div",Le,[m(_,{separator:">"},{default:I(()=>[m(n,{to:{path:"/"}},{default:I(()=>t[1]||(t[1]=[k(" 首页 ")])),_:1}),m(n,{to:`/category/sub/${s.categories[1].id}`},{default:I(()=>[k(p(s.categories[0].parent.name),1)]),_:1},8,["to"]),m(n,{to:`/category/sub/${s.categories[0].id}`},{default:I(()=>[k(p(s.categories[0].name),1)]),_:1},8,["to"]),m(n,null,{default:I(()=>[k(p(s.name),1)]),_:1})]),_:1})])):H("",!0),e("div",we,[e("div",null,[e("div",De,[e("div",Me,[m(he,{imageList:s.mainPictures},null,8,["imageList"]),e("ul",je,[e("li",null,[t[2]||(t[2]=e("p",null,"销量人气",-1)),e("p",null,p(s.salesCount),1),t[3]||(t[3]=e("p",null,[e("i",{class:"iconfont icon-task-filling"}),k("销量人气")],-1))]),e("li",null,[t[4]||(t[4]=e("p",null,"商品评价",-1)),e("p",null,p(s.commentCount),1),t[5]||(t[5]=e("p",null,[e("i",{class:"iconfont icon-comment-filling"}),k("查看评价")],-1))]),e("li",null,[t[6]||(t[6]=e("p",null,"收藏人气",-1)),e("p",null,p(s.collectCount),1),t[7]||(t[7]=e("p",null,[e("i",{class:"iconfont icon-favorite-filling"}),k("收藏商品")],-1))]),e("li",null,[t[8]||(t[8]=e("p",null,"品牌信息",-1)),e("p",null,p((A=s.brand)==null?void 0:A.name),1),t[9]||(t[9]=e("p",null,[e("i",{class:"iconfont icon-dynamic-filling"}),k("品牌主页")],-1))])])]),e("div",Ne,[e("p",ze,p(s.name),1),e("p",Ae,p(s.desc),1),e("p",Be,[e("span",null,p(s.price),1),e("span",null,p(s.oldPrice),1)]),t[11]||(t[11]=e("div",{class:"g-service"},[e("dl",null,[e("dt",null,"促销"),e("dd",null,"12月好物放送，App领券购买直降120元")]),e("dl",null,[e("dt",null,"服务"),e("dd",null,[e("span",null,"无忧退货"),e("span",null,"快速退款"),e("span",null,"免费包邮"),e("a",{href:"javascript:;"},"了解详情")])])],-1)),m($e,{data:s,onGetSukID:y},null,8,["data"]),m(g,{modelValue:j(l),"onUpdate:modelValue":t[0]||(t[0]=S=>oe(l)?l.value=S:null),modelModifiers:{number:!0},min:1},null,8,["modelValue"]),e("div",null,[m(v,{size:"large",class:"btn",onClick:b},{default:I(()=>t[10]||(t[10]=[k(" 加入购物车 ")])),_:1})])])]),e("div",Oe,[e("div",Pe,[e("div",Ve,[t[12]||(t[12]=e("nav",null,[e("a",null,"商品详情")],-1)),e("div",Re,[e("ul",qe,[(i(!0),d(C,null,E((B=s.details)==null?void 0:B.properties,S=>(i(),d("li",{key:S.value},[e("span",He,p(S.name),1),e("span",Ge,p(S.value),1)]))),128))]),(i(!0),d(C,null,E((O=s.details)==null?void 0:O.pictures,S=>L((i(),d("img",{key:S,alt:""})),[[$,S]])),128))])])]),e("div",Ue,[m(M,{id:1}),m(M,{id:2}),m(M,{id:3})])])])])])])}}},Ze=D(Xe,[["__scopeId","data-v-e7e08f17"]]);export{Ze as default};
