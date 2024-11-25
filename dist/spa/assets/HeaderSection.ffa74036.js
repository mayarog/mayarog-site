import{x as q,r as k,E as te,F as U,d as c,j as R,B as le,w as C,a as ae,G as oe,i as f,c as E,A as Y,C as I,H as ne,I as re,Q as $,J as se,K as Z,L as ee,y as ie,z as K,M as ue,N as de,_ as ce,p as z,q as T,s as t,O as V,P as G,v as e,R as fe,t as P,S as n,T as D,U as ve}from"./index.3a455fa8.js";import{Q as _e,a as J}from"./selection.58fe06c9.js";import{M as he,Q as r,a,b as Q}from"./MayarogLogo.7a04a0d3.js";var Ce=q({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:l=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(l.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(l,{slots:v,emit:d}){const{proxy:{$q:u}}=E(),s=k(null),m=k(u.screen.height),b=k(l.container===!0?0:u.screen.width),x=k({position:0,direction:"down",inflectionPoint:0}),S=k(0),h=k(te.value===!0?0:U()),W=c(()=>"q-layout q-layout--"+(l.container===!0?"containerized":"standard")),A=c(()=>l.container===!1?{minHeight:u.screen.height+"px"}:null),F=c(()=>h.value!==0?{[u.lang.rtl===!0?"left":"right"]:`${h.value}px`}:null),g=c(()=>h.value!==0?{[u.lang.rtl===!0?"right":"left"]:0,[u.lang.rtl===!0?"left":"right"]:`-${h.value}px`,width:`calc(100% + ${h.value}px)`}:null);function w(i){if(l.container===!0||document.qScrollPrevented!==!0){const _={position:i.position.top,direction:i.direction,directionChanged:i.directionChanged,inflectionPoint:i.inflectionPoint.top,delta:i.delta.top};x.value=_,l.onScroll!==void 0&&d("scroll",_)}}function O(i){const{height:_,width:p}=i;let H=!1;m.value!==_&&(H=!0,m.value=_,l.onScrollHeight!==void 0&&d("scrollHeight",_),L()),b.value!==p&&(H=!0,b.value=p),H===!0&&l.onResize!==void 0&&d("resize",i)}function N({height:i}){S.value!==i&&(S.value=i,L())}function L(){if(l.container===!0){const i=m.value>S.value?U():0;h.value!==i&&(h.value=i)}}let o=null;const y={instances:{},view:c(()=>l.view),isContainer:c(()=>l.container),rootRef:s,height:m,containerHeight:S,scrollbarWidth:h,totalWidth:c(()=>b.value+h.value),rows:c(()=>{const i=l.view.toLowerCase().split(" ");return{top:i[0].split(""),middle:i[1].split(""),bottom:i[2].split("")}}),header:R({size:0,offset:0,space:!1}),right:R({size:300,offset:0,space:!1}),footer:R({size:0,offset:0,space:!1}),left:R({size:300,offset:0,space:!1}),scroll:x,animate(){o!==null?clearTimeout(o):document.body.classList.add("q-body--layout-animate"),o=setTimeout(()=>{o=null,document.body.classList.remove("q-body--layout-animate")},155)},update(i,_,p){y[i][_]=p}};if(le(Y,y),U()>0){let p=function(){i=null,_.classList.remove("hide-scrollbar")},H=function(){if(i===null){if(_.scrollHeight>u.screen.height)return;_.classList.add("hide-scrollbar")}else clearTimeout(i);i=setTimeout(p,300)},j=function(X){i!==null&&X==="remove"&&(clearTimeout(i),p()),window[`${X}EventListener`]("resize",H)},i=null;const _=document.body;C(()=>l.container!==!0?"add":"remove",j),l.container!==!0&&j("add"),ae(()=>{j("remove")})}return()=>{const i=oe(v.default,[f(_e,{onScroll:w}),f(J,{onResize:O})]),_=f("div",{class:W.value,style:A.value,ref:l.container===!0?void 0:s,tabindex:-1},i);return l.container===!0?f("div",{class:"q-layout-container overflow-hidden",ref:s},[f(J,{onResize:N}),f("div",{class:"absolute-full",style:F.value},[f("div",{class:"scroll",style:g.value},[_])])]):_}}}),me=q({name:"QToolbarTitle",props:{shrink:Boolean},setup(l,{slots:v}){const d=c(()=>"q-toolbar__title ellipsis"+(l.shrink===!0?" col-shrink":""));return()=>f("div",{class:d.value},I(v.default))}}),M=q({name:"QAvatar",props:{...ne,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(l,{slots:v}){const d=re(l),u=c(()=>"q-avatar"+(l.color?` bg-${l.color}`:"")+(l.textColor?` text-${l.textColor} q-chip--colored`:"")+(l.square===!0?" q-avatar--square":l.rounded===!0?" rounded-borders":"")),s=c(()=>l.fontSize?{fontSize:l.fontSize}:null);return()=>{const m=l.icon!==void 0?[f($,{name:l.icon})]:void 0;return f("div",{class:u.value,style:d.value},[f("div",{class:"q-avatar__content row flex-center overflow-hidden",style:s.value},se(v.default,m))])}}}),B=q({name:"QList",props:{...Z,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(l,{slots:v}){const d=E(),u=ee(l,d.proxy.$q),s=c(()=>"q-list"+(l.bordered===!0?" q-list--bordered":"")+(l.dense===!0?" q-list--dense":"")+(l.separator===!0?" q-list--separator":"")+(u.value===!0?" q-list--dark":"")+(l.padding===!0?" q-list--padding":""));return()=>f(l.tag,{class:s.value},I(v.default))}}),be=q({name:"QBar",props:{...Z,dense:Boolean},setup(l,{slots:v}){const{proxy:{$q:d}}=E(),u=ee(l,d),s=c(()=>`q-bar row no-wrap items-center q-bar--${l.dense===!0?"dense":"standard"}  q-bar--${u.value===!0?"dark":"light"}`);return()=>f("div",{class:s.value,role:"toolbar"},I(v.default))}}),ge=q({name:"QToolbar",props:{inset:Boolean},setup(l,{slots:v}){const d=c(()=>"q-toolbar row no-wrap items-center"+(l.inset===!0?" q-toolbar--inset":""));return()=>f("div",{class:d.value,role:"toolbar"},I(v.default))}}),ye=q({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(l,{slots:v,emit:d}){const{proxy:{$q:u}}=E(),s=ie(Y,K);if(s===K)return console.error("QHeader needs to be child of QLayout"),K;const m=k(parseInt(l.heightHint,10)),b=k(!0),x=c(()=>l.reveal===!0||s.view.value.indexOf("H")!==-1||u.platform.is.ios&&s.isContainer.value===!0),S=c(()=>{if(l.modelValue!==!0)return 0;if(x.value===!0)return b.value===!0?m.value:0;const o=m.value-s.scroll.value.position;return o>0?o:0}),h=c(()=>l.modelValue!==!0||x.value===!0&&b.value!==!0),W=c(()=>l.modelValue===!0&&h.value===!0&&l.reveal===!0),A=c(()=>"q-header q-layout__section--marginal "+(x.value===!0?"fixed":"absolute")+"-top"+(l.bordered===!0?" q-header--bordered":"")+(h.value===!0?" q-header--hidden":"")+(l.modelValue!==!0?" q-layout--prevent-focus":"")),F=c(()=>{const o=s.rows.value.top,y={};return o[0]==="l"&&s.left.space===!0&&(y[u.lang.rtl===!0?"right":"left"]=`${s.left.size}px`),o[2]==="r"&&s.right.space===!0&&(y[u.lang.rtl===!0?"left":"right"]=`${s.right.size}px`),y});function g(o,y){s.update("header",o,y)}function w(o,y){o.value!==y&&(o.value=y)}function O({height:o}){w(m,o),g("size",o)}function N(o){W.value===!0&&w(b,!0),d("focusin",o)}C(()=>l.modelValue,o=>{g("space",o),w(b,!0),s.animate()}),C(S,o=>{g("offset",o)}),C(()=>l.reveal,o=>{o===!1&&w(b,l.modelValue)}),C(b,o=>{s.animate(),d("reveal",o)}),C(s.scroll,o=>{l.reveal===!0&&w(b,o.direction==="up"||o.position<=l.revealOffset||o.position-o.inflectionPoint<100)});const L={};return s.instances.header=L,l.modelValue===!0&&g("size",m.value),g("space",l.modelValue),g("offset",S.value),ue(()=>{s.instances.header===L&&(s.instances.header=void 0,g("size",0),g("offset",0),g("space",!1))}),()=>{const o=de(v.default,[]);return l.elevated===!0&&o.push(f("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),o.push(f(J,{debounce:0,onResize:O})),f("header",{class:A.value,style:F.value,onFocusin:N},o)}}});const ke={class:"row"},Se={key:0,class:"flex justify-end q-gutter-y-md desktop-only"},we={class:"cursor-pointer non-selectable"},pe={class:"cursor-pointer non-selectable"},qe={class:"cursor-pointer non-selectable"},xe={__name:"HeaderSection",props:{hideButtons:Boolean},setup(l){const v=l;return(d,u)=>(z(),T(ye,{class:"bg-dark"},{default:t(()=>[V("div",ke,[G(d.$slots,"headerToolbar"),e(ge,{class:"q-my-md"},{default:t(()=>[e(me,null,{default:t(()=>[e(he)]),_:1}),v.hideButtons?ve("",!0):(z(),fe("div",Se,[e(be,{style:{"min-width":"500px"},class:"text-white rounded-borders bg-dark"},{default:t(()=>[V("div",we,[P((z(),T(r,{class:"rounded",clickable:"",onClick:u[0]||(u[0]=s=>d.animateScroll(0)),href:"/#home"},{default:t(()=>[e(a,{avatar:""},{default:t(()=>[e(M,{color:"primary","text-color":"white",icon:"home"})]),_:1}),e(a,null,{default:t(()=>[n("Inicio")]),_:1})]),_:1})),[[D]])]),V("div",pe,[P((z(),T(r,{class:"rounded",clickable:"",onClick:u[1]||(u[1]=s=>d.animateScroll(0)),href:"/#aboutus"},{default:t(()=>[e(a,{avatar:""},{default:t(()=>[e(M,{color:"primary","text-color":"white",icon:"mdi-account-group"})]),_:1}),e(a,null,{default:t(()=>[n("Quem Somos")]),_:1})]),_:1})),[[D]])]),V("div",qe,[P((z(),T(r,{class:"rounded",clickable:""},{default:t(()=>[e(a,{avatar:""},{default:t(()=>[e(M,{color:"primary","text-color":"white",icon:"mdi-application"})]),_:1}),e(a,null,{default:t(()=>[n("Servi\xE7os")]),_:1})]),_:1})),[[D]]),e(Q,null,{default:t(()=>[e(B,{style:{"min-width":"100px"},class:"bg-black text-white"},{default:t(()=>[e(r,{clickable:""},{default:t(()=>[e(a,null,{default:t(()=>[n("Desenvolvimento de Sistemas")]),_:1}),e(a,{side:""},{default:t(()=>[e($,{name:"keyboard_arrow_right"})]),_:1}),e(Q,{anchor:"top end",self:"top start"},{default:t(()=>[e(B,{class:"bg-black text-white"},{default:t(()=>[e(r,{clickable:""},{default:t(()=>[e(a,null,{default:t(()=>[n("Sistemas Web")]),_:1}),e(a,{side:""},{default:t(()=>[e($,{name:"keyboard_arrow_right"})]),_:1}),e(Q,{anchor:"top end",self:"top start"},{default:t(()=>[e(B,{class:"bg-black text-white"},{default:t(()=>[e(r,{clickable:""},{default:t(()=>[e(a,null,{default:t(()=>[n("Sites")]),_:1})]),_:1}),e(r,{clickable:""},{default:t(()=>[e(a,null,{default:t(()=>[n("Landing Pages")]),_:1})]),_:1}),e(r,{clickable:""},{default:t(()=>[e(a,null,{default:t(()=>[n("Sistemas ERP")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(r,{clickable:""},{default:t(()=>[e(a,null,{default:t(()=>[n("Lojas Virtuais")]),_:1}),e(a,{side:""},{default:t(()=>[e($,{name:"keyboard_arrow_right"})]),_:1}),e(Q,{anchor:"top end",self:"top start"},{default:t(()=>[e(B,{class:"bg-black text-white"},{default:t(()=>[e(r,{clickable:""},{default:t(()=>[e(a,null,{default:t(()=>[n("Sistemas E-commerce")]),_:1})]),_:1}),e(r,{clickable:""},{default:t(()=>[e(a,null,{default:t(()=>[n("Lojas Wordpress")]),_:1})]),_:1}),e(r,{clickable:""},{default:t(()=>[e(a,null,{default:t(()=>[n("Facebook Marketplace")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(r,{clickable:""},{default:t(()=>[e(a,null,{default:t(()=>[n("Aplicativos Mobile")]),_:1})]),_:1}),e(r,{clickable:""},{default:t(()=>[e(a,null,{default:t(()=>[n("Sistemas Desktop")]),_:1})]),_:1}),e(r,{clickable:""},{default:t(()=>[e(a,null,{default:t(()=>[n("Microsservi\xE7os")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(r,{clickable:""},{default:t(()=>[e(a,null,{default:t(()=>[n("Consultoria Web/T.I")]),_:1}),e(a,{side:""},{default:t(()=>[e($,{name:"keyboard_arrow_right"})]),_:1}),e(Q,{anchor:"top end",self:"top start"},{default:t(()=>[e(B,{class:"bg-black text-white"},{default:t(()=>[e(r,{clickable:""},{default:t(()=>[e(a,null,{default:t(()=>[n("Suporte Wordpress")]),_:1})]),_:1}),e(r,{clickable:""},{default:t(()=>[e(a,null,{default:t(()=>[n("Adm. de Redes Sociais")]),_:1})]),_:1}),e(r,{clickable:""},{default:t(()=>[e(a,null,{default:t(()=>[n("Marketing Digital")]),_:1})]),_:1}),e(r,{clickable:""},{default:t(()=>[e(a,null,{default:t(()=>[n("Email Marketing")]),_:1})]),_:1}),e(r,{clickable:""},{default:t(()=>[e(a,null,{default:t(()=>[n("Registro de Dom\xEDnios")]),_:1})]),_:1}),e(r,{clickable:""},{default:t(()=>[e(a,null,{default:t(()=>[n("Produ\xE7\xE3o de Conte\xFAdo")]),_:1})]),_:1}),e(r,{clickable:""},{default:t(()=>[e(a,null,{default:t(()=>[n("SEO")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(r,{clickable:""},{default:t(()=>[e(a,null,{default:t(()=>[n("Artes Digitais/Web Design")]),_:1}),e(a,{side:""},{default:t(()=>[e($,{name:"keyboard_arrow_right"})]),_:1}),e(Q,{anchor:"top end",self:"top start"},{default:t(()=>[e(B,{class:"bg-black text-white"},{default:t(()=>[e(r,{clickable:""},{default:t(()=>[e(a,null,{default:t(()=>[n(" Cria\xE7\xE3o de Artes Digitais ")]),_:1})]),_:1}),e(r,{clickable:""},{default:t(()=>[e(a,null,{default:t(()=>[n(" Identidade Visual ")]),_:1})]),_:1}),e(r,{clickable:""},{default:t(()=>[e(a,null,{default:t(()=>[n("Cria\xE7\xE3o de Logomarcas")]),_:1})]),_:1}),e(r,{clickable:""},{default:t(()=>[e(a,null,{default:t(()=>[n(" Artes para Midias Sociais ")]),_:1})]),_:1}),e(r,{clickable:""},{default:t(()=>[e(a,null,{default:t(()=>[n("Edi\xE7\xE3o de Imagens")]),_:1})]),_:1}),e(r,{clickable:""},{default:t(()=>[e(a,null,{default:t(()=>[n("Edi\xE7\xE3o de V\xEDdeos")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),P((z(),T(r,{class:"rounded",clickable:"",onClick:u[2]||(u[2]=s=>d.animateScroll(1920)),href:"/#contact"},{default:t(()=>[e(a,{avatar:""},{default:t(()=>[e(M,{color:"primary","text-color":"white",icon:"mdi-cellphone"})]),_:1}),e(a,null,{default:t(()=>[n("Contato")]),_:1})]),_:1})),[[D]])]),_:1})])),G(d.$slots,"toolbar-customactions")]),_:3}),G(d.$slots,"footerToolbar")])]),_:3}))}};var $e=ce(xe,[["__file","/home/osyris/workspace/mayarog/mayarog_hotsite/mayarog_site/src/components/HeaderSection.vue"]]);export{$e as H,Ce as Q,B as a,ge as b,me as c,M as d,ye as e};