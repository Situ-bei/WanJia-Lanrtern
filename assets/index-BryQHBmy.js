import{u as j,a as $,b as S}from"./base-BHVpw0Ph.js";import{_ as C,r as y,o as i,c as r,a as t,b as o,w as v,d as u,F as m,e as x,t as f,u as _,f as L,g as w,h as b,i as R,j as N,k as F,n as P}from"./index-FnO2ZjAG.js";import{E}from"./popover-BBPeFoV-.js";import{E as V}from"./button-aYL3H4Xg.js";const B={class:"app-header"},q={class:"container"},z={class:"logo"},A={class:"app-header-nav"},D={class:"home"},T={__name:"LayoutHeader",setup(g){const e=j();return console.log(e,"categoryStore"),(n,s)=>{const c=y("RouterLink");return i(),r("header",B,[t("div",q,[t("h1",z,[o(c,{to:"/"},{default:v(()=>s[0]||(s[0]=[u("万家灯火")])),_:1})]),t("ul",A,[t("li",D,[o(c,{"exact-active-class":"active",to:"/"},{default:v(()=>s[1]||(s[1]=[u(" 首页 ")])),_:1})]),(i(!0),r(m,null,x(_(e).headerList,(l,a)=>(i(),r("li",{key:l.id},[o(c,{"active-class":"active",to:`/category/${l.id}`},{default:v(()=>[u(f(l.name),1)]),_:2},1032,["to"])]))),128))]),s[2]||(s[2]=t("div",{class:"search"},[t("i",{class:"iconfont icon-search"}),t("input",{type:"text",placeholder:"搜一搜"})],-1))])])}}},H=C(T,[["__scopeId","data-v-bf6320be"]]),K={class:"cart"},M={class:"curr",href:"javascript:;"},U={class:"layer"},Z={class:"list"},G={class:"item_link"},J=["src"],O={class:"center"},Q={class:"name ellipsis-2"},W={class:"attr ellipsis"},X={class:"right"},Y={class:"price"},tt={class:"count"},at=["onClick"],ot={class:"foot"},st={class:"total"},et={__name:"index",setup(g){const e=L(),n=$(),s=w(0);b(()=>{var d;return(d=n.shoppingCart)==null?void 0:d.map(p=>p.count)},d=>{console.log(d,"购物车数量变化"),s.value=d.reduce((p,k)=>p+k,0)},{immediate:!0}),console.log(n.shoppingCart);const c=d=>{console.log(d,"删除函数的skuID"),n.deleteCart(d),console.log(n.shoppingCart,"执行删除之后的")},l=()=>{const d=n.shoppingCart.map(p=>p.id);console.log(d,"要全部清空的id"),n.clearCart(d),console.log(n.shoppingCart,"执行清空")},a=()=>{console.log("去结算"),e.push("/payment")};return(d,p)=>{const k=y("RouterLink"),I=V;return i(),r("div",K,[t("a",M,[p[0]||(p[0]=t("i",{class:"iconfont icon-gouwucheman"},null,-1)),t("em",null,f(_(s)),1)]),t("div",U,[t("div",Z,[(i(!0),r(m,null,x(_(n).shoppingCart,h=>(i(),r("div",{class:"item",key:h},[t("div",G,[o(k,{to:""},{default:v(()=>[t("img",{src:h.picture,alt:""},null,8,J),t("div",O,[t("p",Q,f(h.name),1),t("p",W,f(h.attrsText),1)]),t("div",X,[t("p",Y,"¥"+f(h.price),1),t("p",tt,"x"+f(h.count),1)])]),_:2},1024),t("i",{class:"iconfont icon-a-icon_close_bottomcard1",onClick:xt=>c(h.skuId)},null,8,at)])]))),128))]),t("div",ot,[t("div",st,[t("p",null,"共 "+f(_(s))+" 件商品",1),t("p",null,"¥ "+f(_(n).getTotalPrice.toFixed(2)),1)]),_(s)>4?(i(),r("span",{key:0,class:"clearCart",onClick:l}," 一键清空 ")):R("",!0),o(I,{size:"large",onClick:a},{default:v(()=>p[1]||(p[1]=[u(" 去购物车结算 ")])),_:1})])])])}}},nt=C(et,[["__scopeId","data-v-2da8b247"]]),ct={class:"app-topnav"},it={class:"container"},rt={href:"javascript:;"},dt={__name:"LayoutNav",setup(g){const e=S(),n=$(),s=L();console.log(e.loginInfo,"首页需要的用户信息");const c=()=>{e.loginInfo={},n.shoppingCart=[],s.replace("/login")};return(l,a)=>{const d=E;return i(),r("nav",ct,[t("div",it,[t("ul",null,[_(e).loginInfo.token?(i(),r(m,{key:0},[t("li",null,[t("a",rt,[a[0]||(a[0]=t("i",{class:"iconfont icon-user"},null,-1)),u(f(_(e).loginInfo.account),1)])]),t("li",null,[o(d,{onConfirm:c,title:"确认退出吗?","confirm-button-text":"确认","cancel-button-text":"取消"},{reference:v(()=>a[1]||(a[1]=[t("a",{href:"javascript:;"},"退出登录",-1)])),_:1})]),a[2]||(a[2]=t("li",null,[t("a",{href:"javascript:;"},"我的订单")],-1)),a[3]||(a[3]=t("li",null,[t("a",{href:"javascript:;"},"会员中心")],-1))],64)):(i(),r(m,{key:1},[t("li",null,[t("a",{href:"javascript:;",onClick:c},"请先登录")]),a[4]||(a[4]=t("li",null,[t("a",{href:"javascript:;"},"帮助中心")],-1)),a[5]||(a[5]=t("li",null,[t("a",{href:"javascript:;"},"关于我们")],-1))],64)),o(nt)])])])}}},lt=C(dt,[["__scopeId","data-v-95a59623"]]),pt=""+new URL("qrcode-orqZiaKR.jpg",import.meta.url).href,ft={},_t={class:"app_footer"};function vt(g,e){return i(),r("footer",_t,e[0]||(e[0]=[N('<div class="contact" data-v-c71f1042><div class="container" data-v-c71f1042><dl data-v-c71f1042><dt data-v-c71f1042>客户服务</dt><dd data-v-c71f1042><i class="iconfont icon-kefu" data-v-c71f1042></i> 在线客服</dd><dd data-v-c71f1042><i class="iconfont icon-bangzhufankui" data-v-c71f1042></i> 问题反馈</dd></dl><dl data-v-c71f1042><dt data-v-c71f1042>关注我们</dt><dd data-v-c71f1042><i class="iconfont icon-weixin" data-v-c71f1042></i> 公众号</dd><dd data-v-c71f1042><i class="iconfont icon-weibo" data-v-c71f1042></i> 微博</dd></dl><dl data-v-c71f1042><dt data-v-c71f1042>下载APP</dt><dd class="qrcode" data-v-c71f1042><img src="'+pt+'" data-v-c71f1042></dd><dd class="download" data-v-c71f1042><span data-v-c71f1042>扫描二维码</span><span data-v-c71f1042>立马下载APP</span><a href="javascript:;" data-v-c71f1042>下载页面</a></dd></dl><dl data-v-c71f1042><dt data-v-c71f1042>服务热线</dt><dd class="hotline" data-v-c71f1042>400-0000-000 <small data-v-c71f1042>周一至周日 8:00-18:00</small></dd></dl></div></div><div class="extra" data-v-c71f1042><div class="container" data-v-c71f1042><div class="slogan" data-v-c71f1042><a href="javascript:;" data-v-c71f1042><i class="iconfont icon-footer01" data-v-c71f1042></i><span data-v-c71f1042>价格亲民</span></a><a href="javascript:;" data-v-c71f1042><i class="iconfont icon-footer02" data-v-c71f1042></i><span data-v-c71f1042>物流快捷</span></a><a href="javascript:;" data-v-c71f1042><i class="iconfont icon-footer03" data-v-c71f1042></i><span data-v-c71f1042>品质新鲜</span></a></div><div class="copyright" data-v-c71f1042><p data-v-c71f1042><a href="javascript:;" data-v-c71f1042>关于我们</a><a href="javascript:;" data-v-c71f1042>帮助中心</a><a href="javascript:;" data-v-c71f1042>售后服务</a><a href="javascript:;" data-v-c71f1042>配送与验收</a><a href="javascript:;" data-v-c71f1042>商务合作</a><a href="javascript:;" data-v-c71f1042>搜索推荐</a><a href="javascript:;" data-v-c71f1042>友情链接</a></p><p data-v-c71f1042>CopyRight © 旺旺商城</p></div></div></div>',2)]))}const ut=C(ft,[["render",vt],["__scopeId","data-v-c71f1042"]]),ht={class:"container"},mt={class:"app-header-nav"},gt={class:"home"},Ct={class:"right"},yt={__name:"LayoutFixed",setup(g){const{y:e}=F(window),n=j();return(s,c)=>{const l=y("RouterLink");return i(),r("div",{class:P(["app-header-sticky",{show:_(e)>78}])},[t("div",ht,[o(l,{class:"logo",to:"/"}),t("ul",mt,[t("li",gt,[o(l,{to:"/"},{default:v(()=>c[0]||(c[0]=[u("首页")])),_:1})]),(i(!0),r(m,null,x(_(n).headerList,a=>(i(),r("li",{key:a.id},[o(l,{to:`/category/${a.id}`,"active-class":"active"},{default:v(()=>[u(f(a.name),1)]),_:2},1032,["to"])]))),128))]),t("div",Ct,[o(l,{to:"/"},{default:v(()=>c[1]||(c[1]=[u("品牌")])),_:1}),o(l,{to:"/"},{default:v(()=>c[2]||(c[2]=[u("专题")])),_:1})])])],2)}}},kt=C(yt,[["__scopeId","data-v-5a1be111"]]),St={__name:"index",setup(g){return(e,n)=>{const s=y("router-view");return i(),r(m,null,[o(kt),o(lt),o(H),o(s),o(ut)],64)}}};export{St as default};
