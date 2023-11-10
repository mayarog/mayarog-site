import{c as s,r as y,w as D,o as X,h as f,T as Ue,i as Re,e as G,a as Ge,t as $e,d as Xe,s as _e,f as Je,g as Ye,j as N,k as Ze,l as ve,n as pe,p as Le,m as et,q as xe,u as tt,v as ee,x as at,_ as nt,y as lt,z as ot,A as it,B as rt,C as U,D as Q,E as ut,F as fe,G as st}from"./index.5ea04eb4.js";import{c as W,h as ne,Q as ct,R as dt,a as te,b as Pe,u as vt,d as ft,v as Be,e as ht}from"./Ripple.1c75ba6a.js";import{u as gt,a as mt,b as bt,Q as ae,g as ue,c as yt,d as wt}from"./QScrollObserver.6807b6d9.js";const Tt={ratio:[String,Number]};function St(e,v){return s(()=>{const c=Number(e.ratio||(v!==void 0?v.value:void 0));return isNaN(c)!==!0&&c>0?{paddingBottom:`${100/c}%`}:null})}const qt=16/9;var _t=W({name:"QImg",props:{...Tt,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:qt},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:v,emit:c}){const o=y(e.initialRatio),a=St(e,o);let h=null,w=!1;const _=[y(null),y(A())],T=y(0),C=y(!1),L=y(!1),H=s(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),M=s(()=>({width:e.width,height:e.height})),S=s(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),$=s(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));D(()=>P(),B);function P(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function A(){return e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null}function B(u){h!==null&&(clearTimeout(h),h=null),L.value=!1,u===null?(C.value=!1,_[T.value^1].value=A()):C.value=!0,_[T.value].value=u}function r({target:u}){w!==!0&&(h!==null&&(clearTimeout(h),h=null),o.value=u.naturalHeight===0?.5:u.naturalWidth/u.naturalHeight,l(u,1))}function l(u,z){w===!0||z===1e3||(u.complete===!0?i(u):h=setTimeout(()=>{h=null,l(u,z+1)},50))}function i(u){w!==!0&&(T.value=T.value^1,_[T.value].value=null,C.value=!1,L.value=!1,c("load",u.currentSrc||u.src))}function m(u){h!==null&&(clearTimeout(h),h=null),C.value=!1,L.value=!0,_[T.value].value=null,_[T.value^1].value=A(),c("error",u)}function q(u){const z=_[u].value,j={key:"img_"+u,class:S.value,style:$.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...z};return T.value===u?(j.class+=" q-img__image--waiting",Object.assign(j,{onLoad:r,onError:m})):j.class+=" q-img__image--loaded",f("div",{class:"q-img__container absolute-full",key:"img"+u},f("img",j))}function x(){return C.value!==!0?f("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},ne(v[L.value===!0?"error":"default"])):f("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},v.loading!==void 0?v.loading():e.noSpinner===!0?void 0:[f(ct,{color:e.spinnerColor,size:e.spinnerSize})])}return B(P()),X(()=>{w=!0,h!==null&&(clearTimeout(h),h=null)}),()=>{const u=[];return a.value!==null&&u.push(f("div",{key:"filler",style:a.value})),L.value!==!0&&(_[0].value!==null&&u.push(q(0)),_[1].value!==null&&u.push(q(1))),u.push(f(Ue,{name:"q-transition--fade"},x)),f("div",{class:H.value,style:M.value,role:"img","aria-label":e.alt},u)}}}),Ct=W({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:v}){const c=s(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>f("div",{class:c.value},ne(v.default))}});let kt=0;const Rt=["click","keydown"],$t={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${kt++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function Lt(e,v,c,o){const a=Re($e,G);if(a===G)return console.error("QTab/QRouteTab component needs to be child of QTabs"),G;const{proxy:h}=N(),w=y(null),_=y(null),T=y(null),C=s(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),L=s(()=>a.currentModel.value===e.name),H=s(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(L.value===!0?" q-tab--active"+(a.tabProps.value.activeClass?" "+a.tabProps.value.activeClass:"")+(a.tabProps.value.activeColor?` text-${a.tabProps.value.activeColor}`:"")+(a.tabProps.value.activeBgColor?` bg-${a.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&a.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||a.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(o!==void 0?o.linkClass.value:"")),M=s(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(a.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),S=s(()=>e.disable===!0||a.hasFocus.value===!0||L.value===!1&&a.hasActiveTab.value===!0?-1:e.tabindex||0);function $(l,i){if(i!==!0&&w.value!==null&&w.value.focus(),e.disable===!0){o!==void 0&&o.hasRouterLink.value===!0&&_e(l);return}if(o===void 0){a.updateModel({name:e.name}),c("click",l);return}if(o.hasRouterLink.value===!0){const m=(q={})=>{let x;const u=q.to===void 0||Ze(q.to,e.to)===!0?a.avoidRouteWatcher=gt():null;return o.navigateToRouterLink(l,{...q,returnRouterError:!0}).catch(z=>{x=z}).then(z=>{if(u===a.avoidRouteWatcher&&(a.avoidRouteWatcher=!1,x===void 0&&(z===void 0||z.message.startsWith("Avoided redundant navigation")===!0)&&a.updateModel({name:e.name})),q.returnRouterError===!0)return x!==void 0?Promise.reject(x):z})};c("click",l,m),l.defaultPrevented!==!0&&m();return}c("click",l)}function P(l){Je(l,[13,32])?$(l,!0):Ye(l)!==!0&&l.keyCode>=35&&l.keyCode<=40&&l.altKey!==!0&&l.metaKey!==!0&&a.onKbdNavigate(l.keyCode,h.$el)===!0&&_e(l),c("keydown",l)}function A(){const l=a.tabProps.value.narrowIndicator,i=[],m=f("div",{ref:T,class:["q-tab__indicator",a.tabProps.value.indicatorClass]});e.icon!==void 0&&i.push(f(te,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&i.push(f("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&i.push(e.alertIcon!==void 0?f(te,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):f("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),l===!0&&i.push(m);const q=[f("div",{class:"q-focus-helper",tabindex:-1,ref:w}),f("div",{class:M.value},Pe(v.default,i))];return l===!1&&q.push(m),q}const B={name:s(()=>e.name),rootRef:_,tabIndicatorRef:T,routeData:o};X(()=>{a.unregisterTab(B)}),Ge(()=>{a.registerTab(B)});function r(l,i){const m={ref:_,class:H.value,tabindex:S.value,role:"tab","aria-selected":L.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:$,onKeydown:P,...i};return Xe(f(l,m,A()),[[dt,C.value]])}return{renderTab:r,$tabs:a}}var se=W({name:"QRouteTab",props:{...vt,...$t},emits:Rt,setup(e,{slots:v,emit:c}){const o=ft({useDisableForRouterLinkProps:!1}),{renderTab:a,$tabs:h}=Lt(e,v,c,{exact:s(()=>e.exact),...o});return D(()=>`${e.name} | ${e.exact} | ${(o.resolvedLink.value||{}).href}`,()=>{h.verifyRouteModel()}),()=>a(o.linkTag.value,o.linkAttrs.value)}});const xt={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},ce={xs:2,sm:4,md:8,lg:16,xl:24};var Ce=W({name:"QSeparator",props:{...mt,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const v=N(),c=bt(e,v.proxy.$q),o=s(()=>e.vertical===!0?"vertical":"horizontal"),a=s(()=>` q-separator--${o.value}`),h=s(()=>e.inset!==!1?`${a.value}-${xt[e.inset]}`:""),w=s(()=>`q-separator${a.value}${h.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(c.value===!0?" q-separator--dark":"")),_=s(()=>{const T={};if(e.size!==void 0&&(T[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const C=e.spaced===!0?`${ce.md}px`:e.spaced in ce?`${ce[e.spaced]}px`:e.spaced,L=e.vertical===!0?["Left","Right"]:["Top","Bottom"];T[`margin${L[0]}`]=T[`margin${L[1]}`]=C}return T});return()=>f("hr",{class:w.value,style:_.value,"aria-orientation":o.value})}});function de(){let e;const v=N();function c(){e=void 0}return ve(c),X(c),{removeTick:c,registerTick(o){e=o,pe(()=>{e===o&&(Be(v)===!1&&e(),e=void 0)})}}}function ke(){let e=null;const v=N();function c(){e!==null&&(clearTimeout(e),e=null)}return ve(c),X(c),{removeTimeout:c,registerTimeout(o,a){c(),Be(v)===!1&&(e=setTimeout(o,a))}}}let ze=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const v=document.createElement("div");Object.assign(v.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(v),e.scrollLeft=-1e3,ze=e.scrollLeft>=0,e.remove()}function Pt(e,v,c){const o=c===!0?["left","right"]:["top","bottom"];return`absolute-${v===!0?o[0]:o[1]}${e?` text-${e}`:""}`}const Bt=["left","center","right","justify"];var zt=W({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>Bt.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:v,emit:c}){const{proxy:o}=N(),{$q:a}=o,{registerTick:h}=de(),{registerTick:w}=de(),{registerTick:_}=de(),{registerTimeout:T,removeTimeout:C}=ke(),{registerTimeout:L,removeTimeout:H}=ke(),M=y(null),S=y(null),$=y(e.modelValue),P=y(!1),A=y(!0),B=y(!1),r=y(!1),l=[],i=y(0),m=y(!1);let q=null,x=null,u;const z=s(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:Pt(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),j=s(()=>{const t=i.value,n=$.value;for(let d=0;d<t;d++)if(l[d].name.value===n)return!0;return!1}),Ie=s(()=>`q-tabs__content--align-${P.value===!0?"left":r.value===!0?"justify":e.align}`),Me=s(()=>`q-tabs row no-wrap items-center q-tabs--${P.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),Ae=s(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+Ie.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),J=s(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),Y=s(()=>e.vertical!==!0&&a.lang.rtl===!0),le=s(()=>ze===!1&&Y.value===!0);D(Y,K),D(()=>e.modelValue,t=>{oe({name:t,setCurrent:!0,skipEmit:!0})}),D(()=>e.outsideArrows,Z);function oe({name:t,setCurrent:n,skipEmit:d}){$.value!==t&&(d!==!0&&e["onUpdate:modelValue"]!==void 0&&c("update:modelValue",t),(n===!0||e["onUpdate:modelValue"]===void 0)&&(Qe($.value,t),$.value=t))}function Z(){h(()=>{he({width:M.value.offsetWidth,height:M.value.offsetHeight})})}function he(t){if(J.value===void 0||S.value===null)return;const n=t[J.value.container],d=Math.min(S.value[J.value.scroll],Array.prototype.reduce.call(S.value.children,(R,b)=>R+(b[J.value.content]||0),0)),k=n>0&&d>n;P.value=k,k===!0&&w(K),r.value=n<parseInt(e.breakpoint,10)}function Qe(t,n){const d=t!=null&&t!==""?l.find(R=>R.name.value===t):null,k=n!=null&&n!==""?l.find(R=>R.name.value===n):null;if(d&&k){const R=d.tabIndicatorRef.value,b=k.tabIndicatorRef.value;q!==null&&(clearTimeout(q),q=null),R.style.transition="none",R.style.transform="none",b.style.transition="none",b.style.transform="none";const g=R.getBoundingClientRect(),I=b.getBoundingClientRect();b.style.transform=e.vertical===!0?`translate3d(0,${g.top-I.top}px,0) scale3d(1,${I.height?g.height/I.height:1},1)`:`translate3d(${g.left-I.left}px,0,0) scale3d(${I.width?g.width/I.width:1},1,1)`,_(()=>{q=setTimeout(()=>{q=null,b.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",b.style.transform="none"},70)})}k&&P.value===!0&&O(k.rootRef.value)}function O(t){const{left:n,width:d,top:k,height:R}=S.value.getBoundingClientRect(),b=t.getBoundingClientRect();let g=e.vertical===!0?b.top-k:b.left-n;if(g<0){S.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(g),K();return}g+=e.vertical===!0?b.height-R:b.width-d,g>0&&(S.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(g),K())}function K(){const t=S.value;if(t===null)return;const n=t.getBoundingClientRect(),d=e.vertical===!0?t.scrollTop:Math.abs(t.scrollLeft);Y.value===!0?(A.value=Math.ceil(d+n.width)<t.scrollWidth-1,B.value=d>0):(A.value=d>0,B.value=e.vertical===!0?Math.ceil(d+n.height)<t.scrollHeight:Math.ceil(d+n.width)<t.scrollWidth)}function ge(t){x!==null&&clearInterval(x),x=setInterval(()=>{Ve(t)===!0&&F()},5)}function me(){ge(le.value===!0?Number.MAX_SAFE_INTEGER:0)}function be(){ge(le.value===!0?0:Number.MAX_SAFE_INTEGER)}function F(){x!==null&&(clearInterval(x),x=null)}function De(t,n){const d=Array.prototype.filter.call(S.value.children,I=>I===n||I.matches&&I.matches(".q-tab.q-focusable")===!0),k=d.length;if(k===0)return;if(t===36)return O(d[0]),d[0].focus(),!0;if(t===35)return O(d[k-1]),d[k-1].focus(),!0;const R=t===(e.vertical===!0?38:37),b=t===(e.vertical===!0?40:39),g=R===!0?-1:b===!0?1:void 0;if(g!==void 0){const I=Y.value===!0?-1:1,V=d.indexOf(n)+g*I;return V>=0&&V<k&&(O(d[V]),d[V].focus({preventScroll:!0})),!0}}const He=s(()=>le.value===!0?{get:t=>Math.abs(t.scrollLeft),set:(t,n)=>{t.scrollLeft=-n}}:e.vertical===!0?{get:t=>t.scrollTop,set:(t,n)=>{t.scrollTop=n}}:{get:t=>t.scrollLeft,set:(t,n)=>{t.scrollLeft=n}});function Ve(t){const n=S.value,{get:d,set:k}=He.value;let R=!1,b=d(n);const g=t<b?-1:1;return b+=g*5,b<0?(R=!0,b=0):(g===-1&&b<=t||g===1&&b>=t)&&(R=!0,b=t),k(n,b),K(),R}function ye(t,n){for(const d in t)if(t[d]!==n[d])return!1;return!0}function Fe(){let t=null,n={matchedLen:0,queryDiff:9999,hrefLen:0};const d=l.filter(g=>g.routeData!==void 0&&g.routeData.hasRouterLink.value===!0),{hash:k,query:R}=o.$route,b=Object.keys(R).length;for(const g of d){const I=g.routeData.exact.value===!0;if(g.routeData[I===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:V,query:ie,matched:Oe,href:Ke}=g.routeData.resolvedLink.value,re=Object.keys(ie).length;if(I===!0){if(V!==k||re!==b||ye(R,ie)===!1)continue;t=g.name.value;break}if(V!==""&&V!==k||re!==0&&ye(ie,R)===!1)continue;const E={matchedLen:Oe.length,queryDiff:b-re,hrefLen:Ke.length-V.length};if(E.matchedLen>n.matchedLen){t=g.name.value,n=E;continue}else if(E.matchedLen!==n.matchedLen)continue;if(E.queryDiff<n.queryDiff)t=g.name.value,n=E;else if(E.queryDiff!==n.queryDiff)continue;E.hrefLen>n.hrefLen&&(t=g.name.value,n=E)}t===null&&l.some(g=>g.routeData===void 0&&g.name.value===$.value)===!0||oe({name:t,setCurrent:!0})}function Ee(t){if(C(),m.value!==!0&&M.value!==null&&t.target&&typeof t.target.closest=="function"){const n=t.target.closest(".q-tab");n&&M.value.contains(n)===!0&&(m.value=!0,P.value===!0&&O(n))}}function We(){T(()=>{m.value=!1},30)}function p(){Te.avoidRouteWatcher===!1?L(Fe):H()}function we(){if(u===void 0){const t=D(()=>o.$route.fullPath,p);u=()=>{t(),u=void 0}}}function Ne(t){l.push(t),i.value++,Z(),t.routeData===void 0||o.$route===void 0?L(()=>{if(P.value===!0){const n=$.value,d=n!=null&&n!==""?l.find(k=>k.name.value===n):null;d&&O(d.rootRef.value)}}):(we(),t.routeData.hasRouterLink.value===!0&&p())}function je(t){l.splice(l.indexOf(t),1),i.value--,Z(),u!==void 0&&t.routeData!==void 0&&(l.every(n=>n.routeData===void 0)===!0&&u(),p())}const Te={currentModel:$,tabProps:z,hasFocus:m,hasActiveTab:j,registerTab:Ne,unregisterTab:je,verifyRouteModel:p,updateModel:oe,onKbdNavigate:De,avoidRouteWatcher:!1};Le($e,Te);function Se(){q!==null&&clearTimeout(q),F(),u!==void 0&&u()}let qe;return X(Se),ve(()=>{qe=u!==void 0,Se()}),et(()=>{qe===!0&&we(),Z()}),()=>f("div",{ref:M,class:Me.value,role:"tablist",onFocusin:Ee,onFocusout:We},[f(ae,{onResize:he}),f("div",{ref:S,class:Ae.value,onScroll:K},ne(v.default)),f(te,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(A.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||a.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:me,onTouchstartPassive:me,onMouseupPassive:F,onMouseleavePassive:F,onTouchendPassive:F}),f(te,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(B.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||a.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:be,onTouchstartPassive:be,onMouseupPassive:F,onMouseleavePassive:F,onTouchendPassive:F})])}}),It=W({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:v}){const c=s(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>f("div",{class:c.value,role:"toolbar"},ne(v.default))}}),Mt=W({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:v,emit:c}){const{proxy:{$q:o}}=N(),a=Re(xe,G);if(a===G)return console.error("QHeader needs to be child of QLayout"),G;const h=y(parseInt(e.heightHint,10)),w=y(!0),_=s(()=>e.reveal===!0||a.view.value.indexOf("H")>-1||o.platform.is.ios&&a.isContainer.value===!0),T=s(()=>{if(e.modelValue!==!0)return 0;if(_.value===!0)return w.value===!0?h.value:0;const r=h.value-a.scroll.value.position;return r>0?r:0}),C=s(()=>e.modelValue!==!0||_.value===!0&&w.value!==!0),L=s(()=>e.modelValue===!0&&C.value===!0&&e.reveal===!0),H=s(()=>"q-header q-layout__section--marginal "+(_.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(C.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),M=s(()=>{const r=a.rows.value.top,l={};return r[0]==="l"&&a.left.space===!0&&(l[o.lang.rtl===!0?"right":"left"]=`${a.left.size}px`),r[2]==="r"&&a.right.space===!0&&(l[o.lang.rtl===!0?"left":"right"]=`${a.right.size}px`),l});function S(r,l){a.update("header",r,l)}function $(r,l){r.value!==l&&(r.value=l)}function P({height:r}){$(h,r),S("size",r)}function A(r){L.value===!0&&$(w,!0),c("focusin",r)}D(()=>e.modelValue,r=>{S("space",r),$(w,!0),a.animate()}),D(T,r=>{S("offset",r)}),D(()=>e.reveal,r=>{r===!1&&$(w,e.modelValue)}),D(w,r=>{a.animate(),c("reveal",r)}),D(a.scroll,r=>{e.reveal===!0&&$(w,r.direction==="up"||r.position<=e.revealOffset||r.position-r.inflectionPoint<100)});const B={};return a.instances.header=B,e.modelValue===!0&&S("size",h.value),S("space",e.modelValue),S("offset",T.value),X(()=>{a.instances.header===B&&(a.instances.header=void 0,S("size",0),S("offset",0),S("space",!1))}),()=>{const r=ht(v.default,[]);return e.elevated===!0&&r.push(f("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),r.push(f(ae,{debounce:0,onResize:P})),f("header",{class:H.value,style:M.value,onFocusin:A},r)}}}),At=W({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:v,emit:c}){const{proxy:{$q:o}}=N(),a=y(null),h=y(o.screen.height),w=y(e.container===!0?0:o.screen.width),_=y({position:0,direction:"down",inflectionPoint:0}),T=y(0),C=y(tt.value===!0?0:ue()),L=s(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),H=s(()=>e.container===!1?{minHeight:o.screen.height+"px"}:null),M=s(()=>C.value!==0?{[o.lang.rtl===!0?"left":"right"]:`${C.value}px`}:null),S=s(()=>C.value!==0?{[o.lang.rtl===!0?"right":"left"]:0,[o.lang.rtl===!0?"left":"right"]:`-${C.value}px`,width:`calc(100% + ${C.value}px)`}:null);function $(i){if(e.container===!0||document.qScrollPrevented!==!0){const m={position:i.position.top,direction:i.direction,directionChanged:i.directionChanged,inflectionPoint:i.inflectionPoint.top,delta:i.delta.top};_.value=m,e.onScroll!==void 0&&c("scroll",m)}}function P(i){const{height:m,width:q}=i;let x=!1;h.value!==m&&(x=!0,h.value=m,e.onScrollHeight!==void 0&&c("scrollHeight",m),B()),w.value!==q&&(x=!0,w.value=q),x===!0&&e.onResize!==void 0&&c("resize",i)}function A({height:i}){T.value!==i&&(T.value=i,B())}function B(){if(e.container===!0){const i=h.value>T.value?ue():0;C.value!==i&&(C.value=i)}}let r=null;const l={instances:{},view:s(()=>e.view),isContainer:s(()=>e.container),rootRef:a,height:h,containerHeight:T,scrollbarWidth:C,totalWidth:s(()=>w.value+C.value),rows:s(()=>{const i=e.view.toLowerCase().split(" ");return{top:i[0].split(""),middle:i[1].split(""),bottom:i[2].split("")}}),header:ee({size:0,offset:0,space:!1}),right:ee({size:300,offset:0,space:!1}),footer:ee({size:0,offset:0,space:!1}),left:ee({size:300,offset:0,space:!1}),scroll:_,animate(){r!==null?clearTimeout(r):document.body.classList.add("q-body--layout-animate"),r=setTimeout(()=>{r=null,document.body.classList.remove("q-body--layout-animate")},155)},update(i,m,q){l[i][m]=q}};if(Le(xe,l),ue()>0){let q=function(){i=null,m.classList.remove("hide-scrollbar")},x=function(){if(i===null){if(m.scrollHeight>o.screen.height)return;m.classList.add("hide-scrollbar")}else clearTimeout(i);i=setTimeout(q,300)},u=function(z){i!==null&&z==="remove"&&(clearTimeout(i),q()),window[`${z}EventListener`]("resize",x)},i=null;const m=document.body;D(()=>e.container!==!0?"add":"remove",u),e.container!==!0&&u("add"),at(()=>{u("remove")})}return()=>{const i=Pe(v.default,[f(yt,{onScroll:$}),f(ae,{onResize:P})]),m=f("div",{class:L.value,style:H.value,ref:e.container===!0?void 0:a,tabindex:-1},i);return e.container===!0?f("div",{class:"q-layout-container overflow-hidden",ref:a},[f(ae,{onResize:A}),f("div",{class:"absolute-full",style:M.value},[f("div",{class:"scroll",style:S.value},[m])])]):m}}}),Qt="/mayarog-site/assets/mayarog-logo.e06dbd4c.png";const Dt=lt({name:"MainLayout",setup(){const e=y(!1);return{leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}}}),Ht=fe("br",null,null,-1),Vt=fe("small",null,"Sistemas web & consultoria em T.I",-1),Ft={class:"q-gutter-y-md"};function Et(e,v,c,o,a,h){const w=ot("router-view");return it(),rt(At,{view:"lHh Lpr lFf",class:"shadow-2 rounded-borders"},{default:U(()=>[Q(Mt,{elevated:"",class:"bg-black"},{default:U(()=>[Q(It,null,{default:U(()=>[Q(_t,{alt:"Mayarog Web",src:Qt,style:{width:"50px",height:"50px"}}),Q(Ct,null,{default:U(()=>[ut(" Mayarog "),Ht,Vt]),_:1}),fe("div",Ft,[Q(zt,{modelValue:e.tab,"onUpdate:modelValue":v[0]||(v[0]=_=>e.tab=_),class:"text-primary",style:st(e.$q.screen.sm||e.$q.screen.xs?{maxWidth:"300px"}:{}),"inline-label":"","outside-arrows":"","mobile-arrows":""},{default:U(()=>[Q(se,{to:"/",exact:"",label:"In\xEDcio",icon:"home"}),Q(Ce,{dark:"",vertical:"",inset:""}),Q(se,{to:"/desenvolvimento-sistemas",exact:"",label:"Desenvolvimento de Sistemas",icon:"code"}),Q(Ce,{dark:"",vertical:"",inset:""}),Q(se,{to:"/consultoria",exact:"",label:"Consultoria em Projetos/T.I",icon:"mail"})]),_:1},8,["modelValue","style"])])]),_:1})]),_:1}),Q(wt,null,{default:U(()=>[Q(w)]),_:1})]),_:1})}var Ot=nt(Dt,[["render",Et]]);export{Ot as default};