import{g as tn,o as en,u as P,a as nn,c as te,d as R,r as j,w as A,e as rn,f as ee,h as ne,i as re,j as st,k as sn,n as on,b as an}from"./index.3a455fa8.js";function ct(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function bt(t,e,n=".",r){if(!ct(e))return bt(t,{},n,r);const s=Object.assign({},e);for(const o in t){if(o==="__proto__"||o==="constructor")continue;const i=t[o];i!=null&&(r&&r(s,o,i,n)||(Array.isArray(i)&&Array.isArray(s[o])?s[o]=[...i,...s[o]]:ct(i)&&ct(s[o])?s[o]=bt(i,s[o],(n?`${n}.`:"")+o.toString(),r):s[o]=i))}return s}function cn(t){return(...e)=>e.reduce((n,r)=>bt(n,r,"",t),{})}const se=cn();function ie(t){return tn()?(en(t),!0):!1}function jt(t){return typeof t=="function"?t():P(t)}const ln=typeof window!="undefined"&&typeof document!="undefined";typeof WorkerGlobalScope!="undefined"&&globalThis instanceof WorkerGlobalScope;const un=t=>t!=null,fn=Object.prototype.toString,tt=t=>fn.call(t)==="[object Object]",X=()=>{};function pn(t){return t||te()}function dn(t,e){pn(e)&&nn(t,e)}function B(t){var e;const n=jt(t);return(e=n==null?void 0:n.$el)!=null?e:n}const oe=ln?window:void 0;function E(...t){let e,n,r,s;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,r,s]=t,e=oe):[e,n,r,s]=t,!e)return X;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const o=[],i=()=>{o.forEach(u=>u()),o.length=0},a=(u,l,d,b)=>(u.addEventListener(l,d,b),()=>u.removeEventListener(l,d,b)),c=A(()=>[B(e),jt(s)],([u,l])=>{if(i(),!u)return;const d=tt(l)?{...l}:l;o.push(...n.flatMap(b=>r.map(m=>a(u,b,m,d))))},{immediate:!0,flush:"post"}),f=()=>{c(),i()};return ie(f),f}function mn(){const t=j(!1),e=te();return e&&rn(()=>{t.value=!0},e),t}function yn(t){const e=mn();return R(()=>(e.value,Boolean(t())))}function bn(t,e,n={}){const{root:r,rootMargin:s="0px",threshold:o=.1,window:i=oe,immediate:a=!0}=n,c=yn(()=>i&&"IntersectionObserver"in i),f=R(()=>{const m=jt(t);return(Array.isArray(m)?m:[m]).map(B).filter(un)});let u=X;const l=j(a),d=c.value?A(()=>[f.value,B(r),l.value],([m,T])=>{if(u(),!l.value||!m.length)return;const O=new IntersectionObserver(e,{root:B(T),rootMargin:s,threshold:o});m.forEach(g=>g&&O.observe(g)),u=()=>{O.disconnect(),u=X}},{immediate:a,flush:"post"}):X,b=()=>{u(),d(),l.value=!1};return ie(b),{isSupported:c,isActive:l,pause(){u(),l.value=!1},resume(){l.value=!0},stop:b}}const ae=1/60*1e3,hn=typeof performance!="undefined"?()=>performance.now():()=>Date.now(),ce=typeof window!="undefined"?t=>window.requestAnimationFrame(t):t=>setTimeout(()=>t(hn()),ae);function gn(t){let e=[],n=[],r=0,s=!1,o=!1;const i=new WeakSet,a={schedule:(c,f=!1,u=!1)=>{const l=u&&s,d=l?e:n;return f&&i.add(c),d.indexOf(c)===-1&&(d.push(c),l&&s&&(r=e.length)),c},cancel:c=>{const f=n.indexOf(c);f!==-1&&n.splice(f,1),i.delete(c)},process:c=>{if(s){o=!0;return}if(s=!0,[e,n]=[n,e],n.length=0,r=e.length,r)for(let f=0;f<r;f++){const u=e[f];u(c),i.has(u)&&(a.schedule(u),t())}s=!1,o&&(o=!1,a.process(c))}};return a}const vn=40;let ht=!0,z=!1,gt=!1;const I={delta:0,timestamp:0},q=["read","update","preRender","render","postRender"],it=q.reduce((t,e)=>(t[e]=gn(()=>z=!0),t),{}),vt=q.reduce((t,e)=>{const n=it[e];return t[e]=(r,s=!1,o=!1)=>(z||Tn(),n.schedule(r,s,o)),t},{}),On=q.reduce((t,e)=>(t[e]=it[e].cancel,t),{});q.reduce((t,e)=>(t[e]=()=>it[e].process(I),t),{});const xn=t=>it[t].process(I),le=t=>{z=!1,I.delta=ht?ae:Math.max(Math.min(t-I.timestamp,vn),1),I.timestamp=t,gt=!0,q.forEach(xn),gt=!1,z&&(ht=!1,ce(le))},Tn=()=>{z=!0,ht=!0,gt||ce(le)},ue=()=>I;function fe(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}var Sn=function(){},kt=function(){};const Ot=(t,e,n)=>Math.min(Math.max(n,t),e),lt=.001,Mn=.01,$t=10,An=.05,jn=1;function En({duration:t=800,bounce:e=.25,velocity:n=0,mass:r=1}){let s,o;Sn(t<=$t*1e3);let i=1-e;i=Ot(An,jn,i),t=Ot(Mn,$t,t/1e3),i<1?(s=f=>{const u=f*i,l=u*t,d=u-n,b=xt(f,i),m=Math.exp(-l);return lt-d/b*m},o=f=>{const l=f*i*t,d=l*n+n,b=Math.pow(i,2)*Math.pow(f,2)*t,m=Math.exp(-l),T=xt(Math.pow(f,2),i);return(-s(f)+lt>0?-1:1)*((d-b)*m)/T}):(s=f=>{const u=Math.exp(-f*t),l=(f-n)*t+1;return-lt+u*l},o=f=>{const u=Math.exp(-f*t),l=(n-f)*(t*t);return u*l});const a=5/t,c=Fn(s,o,a);if(t=t*1e3,isNaN(c))return{stiffness:100,damping:10,duration:t};{const f=Math.pow(c,2)*r;return{stiffness:f,damping:i*2*Math.sqrt(r*f),duration:t}}}const Vn=12;function Fn(t,e,n){let r=n;for(let s=1;s<Vn;s++)r=r-t(r)/e(r);return r}function xt(t,e){return t*Math.sqrt(1-e*e)}const wn=["duration","bounce"],Cn=["stiffness","damping","mass"];function zt(t,e){return e.some(n=>t[n]!==void 0)}function Rn(t){let e=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},t);if(!zt(t,Cn)&&zt(t,wn)){const n=En(t);e=Object.assign(Object.assign(Object.assign({},e),n),{velocity:0,mass:1}),e.isResolvedFromDuration=!0}return e}function Et(t){var{from:e=0,to:n=1,restSpeed:r=2,restDelta:s}=t,o=fe(t,["from","to","restSpeed","restDelta"]);const i={done:!1,value:e};let{stiffness:a,damping:c,mass:f,velocity:u,duration:l,isResolvedFromDuration:d}=Rn(o),b=Ut,m=Ut;function T(){const O=u?-(u/1e3):0,g=n-e,x=c/(2*Math.sqrt(a*f)),y=Math.sqrt(a/f)/1e3;if(s===void 0&&(s=Math.min(Math.abs(n-e)/100,.4)),x<1){const h=xt(y,x);b=v=>{const S=Math.exp(-x*y*v);return n-S*((O+x*y*g)/h*Math.sin(h*v)+g*Math.cos(h*v))},m=v=>{const S=Math.exp(-x*y*v);return x*y*S*(Math.sin(h*v)*(O+x*y*g)/h+g*Math.cos(h*v))-S*(Math.cos(h*v)*(O+x*y*g)-h*g*Math.sin(h*v))}}else if(x===1)b=h=>n-Math.exp(-y*h)*(g+(O+y*g)*h);else{const h=y*Math.sqrt(x*x-1);b=v=>{const S=Math.exp(-x*y*v),F=Math.min(h*v,300);return n-S*((O+x*y*g)*Math.sinh(F)+h*g*Math.cosh(F))/h}}}return T(),{next:O=>{const g=b(O);if(d)i.done=O>=l;else{const x=m(O)*1e3,y=Math.abs(x)<=r,h=Math.abs(n-g)<=s;i.done=y&&h}return i.value=i.done?n:g,i},flipTarget:()=>{u=-u,[e,n]=[n,e],T()}}}Et.needsInterpolation=(t,e)=>typeof t=="string"||typeof e=="string";const Ut=t=>0,pe=(t,e,n)=>{const r=e-t;return r===0?1:(n-t)/r},Vt=(t,e,n)=>-n*t+n*e+t,de=(t,e)=>n=>Math.max(Math.min(n,e),t),L=t=>t%1?Number(t.toFixed(5)):t,U=/(-)?([\d]*\.?[\d])+/g,Tt=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,_n=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function H(t){return typeof t=="string"}const W={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},k=Object.assign(Object.assign({},W),{transform:de(0,1)}),Y=Object.assign(Object.assign({},W),{default:1}),Ft=t=>({test:e=>H(e)&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),_=Ft("deg"),$=Ft("%"),p=Ft("px"),qt=Object.assign(Object.assign({},$),{parse:t=>$.parse(t)/100,transform:t=>$.transform(t*100)}),wt=(t,e)=>n=>Boolean(H(n)&&_n.test(n)&&n.startsWith(t)||e&&Object.prototype.hasOwnProperty.call(n,e)),me=(t,e,n)=>r=>{if(!H(r))return r;const[s,o,i,a]=r.match(U);return{[t]:parseFloat(s),[e]:parseFloat(o),[n]:parseFloat(i),alpha:a!==void 0?parseFloat(a):1}},N={test:wt("hsl","hue"),parse:me("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:r=1})=>"hsla("+Math.round(t)+", "+$.transform(L(e))+", "+$.transform(L(n))+", "+L(k.transform(r))+")"},Dn=de(0,255),ut=Object.assign(Object.assign({},W),{transform:t=>Math.round(Dn(t))}),C={test:wt("rgb","red"),parse:me("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:r=1})=>"rgba("+ut.transform(t)+", "+ut.transform(e)+", "+ut.transform(n)+", "+L(k.transform(r))+")"};function Nn(t){let e="",n="",r="",s="";return t.length>5?(e=t.substr(1,2),n=t.substr(3,2),r=t.substr(5,2),s=t.substr(7,2)):(e=t.substr(1,1),n=t.substr(2,1),r=t.substr(3,1),s=t.substr(4,1),e+=e,n+=n,r+=r,s+=s),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:s?parseInt(s,16)/255:1}}const St={test:wt("#"),parse:Nn,transform:C.transform},M={test:t=>C.test(t)||St.test(t)||N.test(t),parse:t=>C.test(t)?C.parse(t):N.test(t)?N.parse(t):St.parse(t),transform:t=>H(t)?t:t.hasOwnProperty("red")?C.transform(t):N.transform(t)},ye="${c}",be="${n}";function Pn(t){var e,n,r,s;return isNaN(t)&&H(t)&&((n=(e=t.match(U))===null||e===void 0?void 0:e.length)!==null&&n!==void 0?n:0)+((s=(r=t.match(Tt))===null||r===void 0?void 0:r.length)!==null&&s!==void 0?s:0)>0}function he(t){typeof t=="number"&&(t=`${t}`);const e=[];let n=0;const r=t.match(Tt);r&&(n=r.length,t=t.replace(Tt,ye),e.push(...r.map(M.parse)));const s=t.match(U);return s&&(t=t.replace(U,be),e.push(...s.map(W.parse))),{values:e,numColors:n,tokenised:t}}function ge(t){return he(t).values}function ve(t){const{values:e,numColors:n,tokenised:r}=he(t),s=e.length;return o=>{let i=r;for(let a=0;a<s;a++)i=i.replace(a<n?ye:be,a<n?M.transform(o[a]):L(o[a]));return i}}const In=t=>typeof t=="number"?0:t;function Bn(t){const e=ge(t);return ve(t)(e.map(In))}const K={test:Pn,parse:ge,createTransformer:ve,getAnimatableNone:Bn},Ln=new Set(["brightness","contrast","saturate","opacity"]);function kn(t){let[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[r]=n.match(U)||[];if(!r)return t;const s=n.replace(r,"");let o=Ln.has(e)?1:0;return r!==n&&(o*=100),e+"("+o+s+")"}const $n=/([a-z-]*)\(.*?\)/g,Mt=Object.assign(Object.assign({},K),{getAnimatableNone:t=>{const e=t.match($n);return e?e.map(kn).join(" "):t}});function ft(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function Ht({hue:t,saturation:e,lightness:n,alpha:r}){t/=360,e/=100,n/=100;let s=0,o=0,i=0;if(!e)s=o=i=n;else{const a=n<.5?n*(1+e):n+e-n*e,c=2*n-a;s=ft(c,a,t+1/3),o=ft(c,a,t),i=ft(c,a,t-1/3)}return{red:Math.round(s*255),green:Math.round(o*255),blue:Math.round(i*255),alpha:r}}const zn=(t,e,n)=>{const r=t*t,s=e*e;return Math.sqrt(Math.max(0,n*(s-r)+r))},Un=[St,C,N],Wt=t=>Un.find(e=>e.test(t)),Oe=(t,e)=>{let n=Wt(t),r=Wt(e),s=n.parse(t),o=r.parse(e);n===N&&(s=Ht(s),n=C),r===N&&(o=Ht(o),r=C);const i=Object.assign({},s);return a=>{for(const c in i)c!=="alpha"&&(i[c]=zn(s[c],o[c],a));return i.alpha=Vt(s.alpha,o.alpha,a),n.transform(i)}},qn=t=>typeof t=="number",Hn=(t,e)=>n=>e(t(n)),xe=(...t)=>t.reduce(Hn);function Te(t,e){return qn(t)?n=>Vt(t,e,n):M.test(t)?Oe(t,e):Me(t,e)}const Se=(t,e)=>{const n=[...t],r=n.length,s=t.map((o,i)=>Te(o,e[i]));return o=>{for(let i=0;i<r;i++)n[i]=s[i](o);return n}},Wn=(t,e)=>{const n=Object.assign(Object.assign({},t),e),r={};for(const s in n)t[s]!==void 0&&e[s]!==void 0&&(r[s]=Te(t[s],e[s]));return s=>{for(const o in r)n[o]=r[o](s);return n}};function Kt(t){const e=K.parse(t),n=e.length;let r=0,s=0,o=0;for(let i=0;i<n;i++)r||typeof e[i]=="number"?r++:e[i].hue!==void 0?o++:s++;return{parsed:e,numNumbers:r,numRGB:s,numHSL:o}}const Me=(t,e)=>{const n=K.createTransformer(e),r=Kt(t),s=Kt(e);return r.numHSL===s.numHSL&&r.numRGB===s.numRGB&&r.numNumbers>=s.numNumbers?xe(Se(r.parsed,s.parsed),n):i=>`${i>0?e:t}`},Kn=(t,e)=>n=>Vt(t,e,n);function Zn(t){if(typeof t=="number")return Kn;if(typeof t=="string")return M.test(t)?Oe:Me;if(Array.isArray(t))return Se;if(typeof t=="object")return Wn}function Yn(t,e,n){const r=[],s=n||Zn(t[0]),o=t.length-1;for(let i=0;i<o;i++){let a=s(t[i],t[i+1]);if(e){const c=Array.isArray(e)?e[i]:e;a=xe(c,a)}r.push(a)}return r}function Gn([t,e],[n]){return r=>n(pe(t,e,r))}function Xn(t,e){const n=t.length,r=n-1;return s=>{let o=0,i=!1;if(s<=t[0]?i=!0:s>=t[r]&&(o=r-1,i=!0),!i){let c=1;for(;c<n&&!(t[c]>s||c===r);c++);o=c-1}const a=pe(t[o],t[o+1],s);return e[o](a)}}function Ae(t,e,{clamp:n=!0,ease:r,mixer:s}={}){const o=t.length;kt(o===e.length),kt(!r||!Array.isArray(r)||r.length===o-1),t[0]>t[o-1]&&(t=[].concat(t),e=[].concat(e),t.reverse(),e.reverse());const i=Yn(e,r,s),a=o===2?Gn(t,i):Xn(t,i);return n?c=>a(Ot(t[0],t[o-1],c)):a}const ot=t=>e=>1-t(1-e),Ct=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,Jn=t=>e=>Math.pow(e,t),je=t=>e=>e*e*((t+1)*e-t),Qn=t=>{const e=je(t);return n=>(n*=2)<1?.5*e(n):.5*(2-Math.pow(2,-10*(n-1)))},Ee=1.525,tr=4/11,er=8/11,nr=9/10,Ve=t=>t,Rt=Jn(2),rr=ot(Rt),Fe=Ct(Rt),we=t=>1-Math.sin(Math.acos(t)),Ce=ot(we),sr=Ct(Ce),_t=je(Ee),ir=ot(_t),or=Ct(_t),ar=Qn(Ee),cr=4356/361,lr=35442/1805,ur=16061/1805,et=t=>{if(t===1||t===0)return t;const e=t*t;return t<tr?7.5625*e:t<er?9.075*e-9.9*t+3.4:t<nr?cr*e-lr*t+ur:10.8*t*t-20.52*t+10.72},fr=ot(et),pr=t=>t<.5?.5*(1-et(1-t*2)):.5*et(t*2-1)+.5;function dr(t,e){return t.map(()=>e||Fe).splice(0,t.length-1)}function mr(t){const e=t.length;return t.map((n,r)=>r!==0?r/(e-1):0)}function yr(t,e){return t.map(n=>n*e)}function J({from:t=0,to:e=1,ease:n,offset:r,duration:s=300}){const o={done:!1,value:t},i=Array.isArray(e)?e:[t,e],a=yr(r&&r.length===i.length?r:mr(i),s);function c(){return Ae(a,i,{ease:Array.isArray(n)?n:dr(i,n)})}let f=c();return{next:u=>(o.value=f(u),o.done=u>=s,o),flipTarget:()=>{i.reverse(),f=c()}}}function br({velocity:t=0,from:e=0,power:n=.8,timeConstant:r=350,restDelta:s=.5,modifyTarget:o}){const i={done:!1,value:e};let a=n*t;const c=e+a,f=o===void 0?c:o(c);return f!==c&&(a=f-e),{next:u=>{const l=-a*Math.exp(-u/r);return i.done=!(l>s||l<-s),i.value=i.done?f:f+l,i},flipTarget:()=>{}}}const Zt={keyframes:J,spring:Et,decay:br};function hr(t){if(Array.isArray(t.to))return J;if(Zt[t.type])return Zt[t.type];const e=new Set(Object.keys(t));return e.has("ease")||e.has("duration")&&!e.has("dampingRatio")?J:e.has("dampingRatio")||e.has("stiffness")||e.has("mass")||e.has("damping")||e.has("restSpeed")||e.has("restDelta")?Et:J}function Re(t,e,n=0){return t-e-n}function gr(t,e,n=0,r=!0){return r?Re(e+-t,e,n):e-(t-e)+n}function vr(t,e,n,r){return r?t>=e+n:t<=-n}const Or=t=>{const e=({delta:n})=>t(n);return{start:()=>vt.update(e,!0),stop:()=>On.update(e)}};function _e(t){var e,n,{from:r,autoplay:s=!0,driver:o=Or,elapsed:i=0,repeat:a=0,repeatType:c="loop",repeatDelay:f=0,onPlay:u,onStop:l,onComplete:d,onRepeat:b,onUpdate:m}=t,T=fe(t,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:O}=T,g,x=0,y=T.duration,h,v=!1,S=!0,F;const Z=hr(T);!((n=(e=Z).needsInterpolation)===null||n===void 0)&&n.call(e,r,O)&&(F=Ae([0,100],[r,O],{clamp:!1}),r=0,O=100);const w=Z(Object.assign(Object.assign({},T),{from:r,to:O}));function Ge(){x++,c==="reverse"?(S=x%2===0,i=gr(i,y,f,S)):(i=Re(i,y,f),c==="mirror"&&w.flipTarget()),v=!1,b&&b()}function Xe(){g.stop(),d&&d()}function Je(at){if(S||(at=-at),i+=at,!v){const Lt=w.next(Math.max(0,i));h=Lt.value,F&&(h=F(h)),v=S?Lt.done:i<=0}m==null||m(h),v&&(x===0&&(y!=null||(y=i)),x<a?vr(i,y,f,S)&&Ge():Xe())}function Qe(){u==null||u(),g=o(Je),g.start()}return s&&Qe(),{stop:()=>{l==null||l(),g.stop()}}}function De(t,e){return e?t*(1e3/e):0}function xr({from:t=0,velocity:e=0,min:n,max:r,power:s=.8,timeConstant:o=750,bounceStiffness:i=500,bounceDamping:a=10,restDelta:c=1,modifyTarget:f,driver:u,onUpdate:l,onComplete:d,onStop:b}){let m;function T(y){return n!==void 0&&y<n||r!==void 0&&y>r}function O(y){return n===void 0?r:r===void 0||Math.abs(n-y)<Math.abs(r-y)?n:r}function g(y){m==null||m.stop(),m=_e(Object.assign(Object.assign({},y),{driver:u,onUpdate:h=>{var v;l==null||l(h),(v=y.onUpdate)===null||v===void 0||v.call(y,h)},onComplete:d,onStop:b}))}function x(y){g(Object.assign({type:"spring",stiffness:i,damping:a,restDelta:c},y))}if(T(t))x({from:t,velocity:e,to:O(t)});else{let y=s*e+t;typeof f!="undefined"&&(y=f(y));const h=O(y),v=h===n?-1:1;let S,F;const Z=w=>{S=F,F=w,e=De(w-S,ue().delta),(v===1&&w>h||v===-1&&w<h)&&x({from:w,to:h,velocity:e})};g({type:"decay",from:t,velocity:e,timeConstant:o,power:s,restDelta:c,modifyTarget:f,onUpdate:T(y)?Z:void 0})}return{stop:()=>m==null?void 0:m.stop()}}const Ne=(t,e)=>1-3*e+3*t,Pe=(t,e)=>3*e-6*t,Ie=t=>3*t,nt=(t,e,n)=>((Ne(e,n)*t+Pe(e,n))*t+Ie(e))*t,Be=(t,e,n)=>3*Ne(e,n)*t*t+2*Pe(e,n)*t+Ie(e),Tr=1e-7,Sr=10;function Mr(t,e,n,r,s){let o,i,a=0;do i=e+(n-e)/2,o=nt(i,r,s)-t,o>0?n=i:e=i;while(Math.abs(o)>Tr&&++a<Sr);return i}const Ar=8,jr=.001;function Er(t,e,n,r){for(let s=0;s<Ar;++s){const o=Be(e,n,r);if(o===0)return e;e-=(nt(e,n,r)-t)/o}return e}const Q=11,G=1/(Q-1);function Vr(t,e,n,r){if(t===e&&n===r)return Ve;const s=new Float32Array(Q);for(let i=0;i<Q;++i)s[i]=nt(i*G,t,n);function o(i){let a=0,c=1;const f=Q-1;for(;c!==f&&s[c]<=i;++c)a+=G;--c;const u=(i-s[c])/(s[c+1]-s[c]),l=a+u*G,d=Be(l,t,n);return d>=jr?Er(i,l,t,n):d===0?l:Mr(i,a,a+G,t,n)}return i=>i===0||i===1?i:nt(o(i),e,r)}const pt={};var Fr=Object.defineProperty,wr=(t,e,n)=>e in t?Fr(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Cr=(t,e,n)=>(wr(t,typeof e!="symbol"?e+"":e,n),n);class Rr{constructor(){Cr(this,"subscriptions",new Set)}add(e){return this.subscriptions.add(e),()=>this.subscriptions.delete(e)}notify(e,n,r){if(!!this.subscriptions.size)for(const s of this.subscriptions)s(e,n,r)}clear(){this.subscriptions.clear()}}var _r=Object.defineProperty,Dr=(t,e,n)=>e in t?_r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,V=(t,e,n)=>(Dr(t,typeof e!="symbol"?e+"":e,n),n);function Yt(t){return!Number.isNaN(Number.parseFloat(t))}class Nr{constructor(e){V(this,"current"),V(this,"prev"),V(this,"timeDelta",0),V(this,"lastUpdated",0),V(this,"updateSubscribers",new Rr),V(this,"stopAnimation"),V(this,"canTrackVelocity",!1),V(this,"updateAndNotify",n=>{this.prev=this.current,this.current=n;const{delta:r,timestamp:s}=ue();this.lastUpdated!==s&&(this.timeDelta=r,this.lastUpdated=s),vt.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)}),V(this,"scheduleVelocityCheck",()=>vt.postRender(this.velocityCheck)),V(this,"velocityCheck",({timestamp:n})=>{this.canTrackVelocity||(this.canTrackVelocity=Yt(this.current)),n!==this.lastUpdated&&(this.prev=this.current)}),this.prev=this.current=e,this.canTrackVelocity=Yt(this.current)}onChange(e){return this.updateSubscribers.add(e)}clearListeners(){this.updateSubscribers.clear()}set(e){this.updateAndNotify(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?De(Number.parseFloat(this.current)-Number.parseFloat(this.prev),this.timeDelta):0}start(e){return this.stop(),new Promise(n=>{const{stop:r}=e(n);this.stopAnimation=r}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function Pr(t){return new Nr(t)}const{isArray:Ir}=Array;function Br(){const t=j({}),e=r=>{const s=o=>{!t.value[o]||(t.value[o].stop(),t.value[o].destroy(),delete t.value[o])};r?Ir(r)?r.forEach(s):s(r):Object.keys(t.value).forEach(s)},n=(r,s,o)=>{if(t.value[r])return t.value[r];const i=Pr(s);return i.onChange(a=>o[r]=a),t.value[r]=i,i};return dn(e),{motionValues:t,get:n,stop:e}}function Lr(t){return Array.isArray(t)}function D(){return{type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}}function dt(t){return{type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}}function kr(t){return{type:"spring",stiffness:550,damping:t===0?100:30,restDelta:.01,restSpeed:10}}function mt(){return{type:"keyframes",ease:"linear",duration:300}}function $r(t){return{type:"keyframes",duration:800,values:t}}const Gt={default:kr,x:D,y:D,z:D,rotate:D,rotateX:D,rotateY:D,rotateZ:D,scaleX:dt,scaleY:dt,scale:dt,backgroundColor:mt,color:mt,opacity:mt};function Le(t,e){let n;return Lr(e)?n=$r:n=Gt[t]||Gt.default,{to:e,...n(e)}}const Xt={...W,transform:Math.round},ke={color:M,backgroundColor:M,outlineColor:M,fill:M,stroke:M,borderColor:M,borderTopColor:M,borderRightColor:M,borderBottomColor:M,borderLeftColor:M,borderWidth:p,borderTopWidth:p,borderRightWidth:p,borderBottomWidth:p,borderLeftWidth:p,borderRadius:p,radius:p,borderTopLeftRadius:p,borderTopRightRadius:p,borderBottomRightRadius:p,borderBottomLeftRadius:p,width:p,maxWidth:p,height:p,maxHeight:p,size:p,top:p,right:p,bottom:p,left:p,padding:p,paddingTop:p,paddingRight:p,paddingBottom:p,paddingLeft:p,margin:p,marginTop:p,marginRight:p,marginBottom:p,marginLeft:p,rotate:_,rotateX:_,rotateY:_,rotateZ:_,scale:Y,scaleX:Y,scaleY:Y,scaleZ:Y,skew:_,skewX:_,skewY:_,distance:p,translateX:p,translateY:p,translateZ:p,x:p,y:p,z:p,perspective:p,transformPerspective:p,opacity:k,originX:qt,originY:qt,originZ:p,zIndex:Xt,filter:Mt,WebkitFilter:Mt,fillOpacity:k,strokeOpacity:k,numOctaves:Xt},Dt=t=>ke[t];function At(t,e){return e&&typeof t=="number"&&e.transform?e.transform(t):t}function zr(t,e){let n=Dt(t);return n!==Mt&&(n=K),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const Ur={linear:Ve,easeIn:Rt,easeInOut:Fe,easeOut:rr,circIn:we,circInOut:sr,circOut:Ce,backIn:_t,backInOut:or,backOut:ir,anticipate:ar,bounceIn:fr,bounceInOut:pr,bounceOut:et};function Jt(t){if(Array.isArray(t)){const[e,n,r,s]=t;return Vr(e,n,r,s)}else if(typeof t=="string")return Ur[t];return t}function qr(t){return Array.isArray(t)&&typeof t[0]!="number"}function Qt(t,e){return t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&K.test(e)&&!e.startsWith("url("))}function Hr(t){return Array.isArray(t.to)&&t.to[0]===null&&(t.to=[...t.to],t.to[0]=t.from),t}function Wr({ease:t,times:e,delay:n,...r}){const s={...r};return e&&(s.offset=e),t&&(s.ease=qr(t)?t.map(Jt):Jt(t)),n&&(s.elapsed=-n),s}function Kr(t,e,n){return Array.isArray(e.to)&&(t.duration||(t.duration=800)),Hr(e),Zr(t)||(t={...t,...Le(n,e.to)}),{...e,...Wr(t)}}function Zr({delay:t,repeat:e,repeatType:n,repeatDelay:r,from:s,...o}){return!!Object.keys(o).length}function Yr(t,e){return t[e]||t.default||t}function Gr(t,e,n,r,s){const o=Yr(r,t);let i=o.from===null||o.from===void 0?e.get():o.from;const a=Qt(t,n);i==="none"&&a&&typeof n=="string"&&(i=zr(t,n));const c=Qt(t,i);function f(l){const d={from:i,to:n,velocity:r.velocity?r.velocity:e.getVelocity(),onUpdate:b=>e.set(b)};return o.type==="inertia"||o.type==="decay"?xr({...d,...o}):_e({...Kr(o,d,t),onUpdate:b=>{d.onUpdate(b),o.onUpdate&&o.onUpdate(b)},onComplete:()=>{s&&s(),l&&l()}})}function u(l){return e.set(n),s&&s(),l&&l(),{stop:()=>{}}}return!c||!a||o.type===!1?u:f}function Xr(){const{motionValues:t,stop:e,get:n}=Br();return{motionValues:t,stop:e,push:(s,o,i,a={},c)=>{const f=i[s],u=n(s,f,i);if(a&&a.immediate){u.set(o);return}const l=Gr(s,u,o,a,c);u.start(l)}}}function Jr(t,e={},{motionValues:n,push:r,stop:s}=Xr()){const o=P(e),i=j(!1);A(n,l=>{i.value=Object.values(l).filter(d=>d.isAnimating()).length>0},{immediate:!0,deep:!0});const a=l=>{if(!o||!o[l])throw new Error(`The variant ${l} does not exist.`);return o[l]},c=l=>{typeof l=="string"&&(l=a(l));const d=Object.entries(l).map(([m,T])=>{if(m!=="transition")return new Promise(O=>r(m,T,t,l.transition||Le(m,l[m]),O))}).filter(Boolean);async function b(){var m,T;await Promise.all(d),(T=(m=l.transition)==null?void 0:m.onComplete)==null||T.call(m)}return Promise.all([b()])};return{isAnimating:i,apply:c,set:l=>{const d=tt(l)?l:a(l);Object.entries(d).forEach(([b,m])=>{b!=="transition"&&r(b,m,t,{immediate:!0})})},leave:async l=>{let d;if(o&&(o.leave&&(d=o.leave),!o.leave&&o.initial&&(d=o.initial)),!d){l();return}await c(d),l()},stop:s}}const Nt=typeof window!="undefined",Qr=()=>Nt&&(window.onpointerdown===null||{}.TEST),ts=()=>Nt&&(window.ontouchstart===null||{}.TEST),es=()=>Nt&&(window.onmousedown===null||{}.TEST);function ns({target:t,state:e,variants:n,apply:r}){const s=P(n),o=j(!1),i=j(!1),a=j(!1),c=R(()=>{let u=[...Object.keys(e.value||{})];return s&&(s.hovered&&(u=[...u,...Object.keys(s.hovered)]),s.tapped&&(u=[...u,...Object.keys(s.tapped)]),s.focused&&(u=[...u,...Object.keys(s.focused)])),u}),f=R(()=>{const u={};Object.assign(u,e.value),o.value&&s.hovered&&Object.assign(u,s.hovered),i.value&&s.tapped&&Object.assign(u,s.tapped),a.value&&s.focused&&Object.assign(u,s.focused);for(const l in u)c.value.includes(l)||delete u[l];return u});s.hovered&&(E(t,"mouseenter",()=>o.value=!0),E(t,"mouseleave",()=>{o.value=!1,i.value=!1})),s.tapped&&(es()&&(E(t,"mousedown",()=>i.value=!0),E(t,"mouseup",()=>i.value=!1)),Qr()&&(E(t,"pointerdown",()=>i.value=!0),E(t,"pointerup",()=>i.value=!1)),ts()&&(E(t,"touchstart",()=>i.value=!0),E(t,"touchend",()=>i.value=!1))),s.focused&&(E(t,"focus",()=>a.value=!0),E(t,"blur",()=>a.value=!1)),A([o,i,a],()=>{r(f.value)})}function rs({set:t,target:e,variants:n,variant:r}){const s=P(n);A(()=>e,()=>{!s||(s.initial&&(t("initial"),r.value="initial"),s.enter&&(r.value="enter"))},{immediate:!0,flush:"pre"})}function ss({state:t,apply:e}){A(t,n=>{n&&e(n)},{immediate:!0})}function $e({target:t,variants:e,variant:n}){const r=P(e);r&&(r.visible||r.visibleOnce)&&bn(t,([{isIntersecting:s}])=>{r.visible?s?n.value="visible":n.value="initial":r.visibleOnce&&(s&&n.value!=="visibleOnce"?n.value="visibleOnce":n.value||(n.value="initial"))})}function is(t,e={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){e.lifeCycleHooks&&rs(t),e.syncVariants&&ss(t),e.visibilityHooks&&$e(t),e.eventListeners&&ns(t)}function ze(t={}){const e=st({...t}),n=j({});return A(e,()=>{const r={};for(const[s,o]of Object.entries(e)){const i=Dt(s),a=At(o,i);r[s]=a}n.value=r},{immediate:!0,deep:!0}),{state:e,style:n}}function Pt(t,e){A(()=>B(t),n=>{!n||e(n)},{immediate:!0})}const os={x:"translateX",y:"translateY",z:"translateZ"};function Ue(t={},e=!0){const n=st({...t}),r=j("");return A(n,s=>{let o="",i=!1;e&&(s.x||s.y||s.z)&&(o+=`translate3d(${[s.x||0,s.y||0,s.z||0].map(c=>At(c,p)).join(",")}) `,i=!0);for(const[a,c]of Object.entries(s)){if(e&&(a==="x"||a==="y"||a==="z"))continue;const f=Dt(a),u=At(c,f);o+=`${os[a]||a}(${u}) `}e&&!i&&(o+="translateZ(0px) "),r.value=o.trim()},{immediate:!0,deep:!0}),{state:n,transform:r}}const as=["","X","Y","Z"],cs=["perspective","translate","scale","rotate","skew"],qe=["transformPerspective","x","y","z"];cs.forEach(t=>{as.forEach(e=>{const n=t+e;qe.push(n)})});const ls=new Set(qe);function It(t){return ls.has(t)}const us=new Set(["originX","originY","originZ"]);function He(t){return us.has(t)}function fs(t){const e={},n={};return Object.entries(t).forEach(([r,s])=>{It(r)||He(r)?e[r]=s:n[r]=s}),{transform:e,style:n}}function Bt(t){const{transform:e,style:n}=fs(t),{transform:r}=Ue(e),{style:s}=ze(n);return r.value&&(s.value.transform=r.value),s.value}function ps(t,e){let n,r;const{state:s,style:o}=ze();return Pt(t,i=>{r=i;for(const a of Object.keys(ke))i.style[a]===null||i.style[a]===""||It(a)||He(a)||(s[a]=i.style[a]);n&&Object.entries(n).forEach(([a,c])=>i.style[a]=c),e&&e(s)}),A(o,i=>{if(!r){n=i;return}for(const a in i)r.style[a]=i[a]},{immediate:!0}),{style:s}}function ds(t){const e=t.trim().split(/\) |\)/);if(e.length===1)return{};const n=r=>r.endsWith("px")||r.endsWith("deg")?Number.parseFloat(r):Number.isNaN(Number(r))?Number(r):r;return e.reduce((r,s)=>{if(!s)return r;const[o,i]=s.split("("),c=i.split(",").map(u=>n(u.endsWith(")")?u.replace(")",""):u.trim())),f=c.length===1?c[0]:c;return{...r,[o]:f}},{})}function ms(t,e){Object.entries(ds(e)).forEach(([n,r])=>{const s=["x","y","z"];if(n==="translate3d"){if(r===0){s.forEach(o=>t[o]=0);return}r.forEach((o,i)=>t[s[i]]=o);return}if(r=Number.parseFloat(`${r}`),n==="translateX"){t.x=r;return}if(n==="translateY"){t.y=r;return}if(n==="translateZ"){t.z=r;return}t[n]=r})}function ys(t,e){let n,r;const{state:s,transform:o}=Ue();return Pt(t,i=>{r=i,i.style.transform&&ms(s,i.style.transform),n&&(i.style.transform=n),e&&e(s)}),A(o,i=>{if(!r){n=i;return}r.style.transform=i},{immediate:!0}),{transform:s}}function bs(t,e){const n=st({}),r=i=>Object.entries(i).forEach(([a,c])=>n[a]=c),{style:s}=ps(t,r),{transform:o}=ys(t,r);return A(n,i=>{Object.entries(i).forEach(([a,c])=>{const f=It(a)?o:s;f[a]&&f[a]===c||(f[a]=c)})},{immediate:!0,deep:!0}),Pt(t,()=>e&&r(e)),{motionProperties:n,style:s,transform:o}}function hs(t={}){const e=P(t),n=j();return{state:R(()=>{if(!!n.value)return e[n.value]}),variant:n}}function We(t,e={},n){const{motionProperties:r}=bs(t),{variant:s,state:o}=hs(e),i=Jr(r,e),a={target:t,variant:s,variants:e,state:o,motionProperties:r,...i};return is(a,n),a}const Ke=["delay","duration"],gs=["initial","enter","leave","visible","visible-once","visibleOnce","hovered","tapped","focused",...Ke];function vs(t){return Ke.includes(t)}function Os(t,e){var r;const n=t.props?t.props:t.data&&t.data.attrs?t.data.attrs:{};if(n){n.variants&&tt(n.variants)&&(e.value={...e.value,...n.variants});for(let s of gs)if(!(!n||!n[s])){if(vs(s)&&typeof n[s]=="number"){for(const o of["enter","visible","visibleOnce"]){const i=e.value[o];i!=null&&((r=i.transition)!=null||(i.transition={}),i.transition[s]=n[s])}continue}if(tt(n[s])){const o=n[s];s==="visible-once"&&(s="visibleOnce"),e.value[s]=o}}}}function yt(t,e=!1){return{created:(s,o,i)=>{const a=o.value&&typeof o.value=="string"?o.value:i.key;a&&pt[a]&&pt[a].stop();const c=e?structuredClone(t||{}):t||{},f=j(c);typeof o.value=="object"&&(f.value=o.value),Os(i,f);const l=We(s,f,{eventListeners:!0,lifeCycleHooks:!0,syncVariants:!0,visibilityHooks:!1});s.motionInstance=l,a&&(pt[a]=l)},mounted:(s,o,i)=>{s.motionInstance&&$e(s.motionInstance)},getSSRProps(s,o){let{initial:i}=s.value||o&&(o==null?void 0:o.props)||{};i=P(i);const a=se({},(t==null?void 0:t.initial)||{},i||{});return!a||Object.keys(a).length===0?void 0:{style:Bt(a)}}}}const xs={initial:{opacity:0},enter:{opacity:1}},Ts={initial:{opacity:0},visible:{opacity:1}},Ss={initial:{opacity:0},visibleOnce:{opacity:1}},Ms={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},As={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},js={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},Es={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},Vs={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},Fs={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},ws={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},Cs={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},Rs={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},_s={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},Ds={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},Ns={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},Ps={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},Is={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},Bs={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},Ls={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},ks={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},$s={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},zs={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},Us={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},qs={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},Hs={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},Ws={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},Ks={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},Zs={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},Ys={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},Gs={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},rt={__proto__:null,fade:xs,fadeVisible:Ts,fadeVisibleOnce:Ss,pop:Ms,popVisible:As,popVisibleOnce:js,rollBottom:Ps,rollLeft:Es,rollRight:ws,rollTop:_s,rollVisibleBottom:Is,rollVisibleLeft:Vs,rollVisibleOnceBottom:Bs,rollVisibleOnceLeft:Fs,rollVisibleOnceRight:Rs,rollVisibleOnceTop:Ns,rollVisibleRight:Cs,rollVisibleTop:Ds,slideBottom:Zs,slideLeft:Ls,slideRight:zs,slideTop:Hs,slideVisibleBottom:Ys,slideVisibleLeft:ks,slideVisibleOnceBottom:Gs,slideVisibleOnceLeft:$s,slideVisibleOnceRight:qs,slideVisibleOnceTop:Ks,slideVisibleRight:Us,slideVisibleTop:Ws};function Xs(t){const e="\xE0\xE1\xE2\xE4\xE6\xE3\xE5\u0101\u0103\u0105\xE7\u0107\u010D\u0111\u010F\xE8\xE9\xEA\xEB\u0113\u0117\u0119\u011B\u011F\u01F5\u1E27\xEE\xEF\xED\u012B\u012F\xEC\u0142\u1E3F\xF1\u0144\u01F9\u0148\xF4\xF6\xF2\xF3\u0153\xF8\u014D\xF5\u0151\u1E55\u0155\u0159\xDF\u015B\u0161\u015F\u0219\u0165\u021B\xFB\xFC\xF9\xFA\u016B\u01D8\u016F\u0171\u0173\u1E83\u1E8D\xFF\xFD\u017E\u017A\u017C\xB7/_,:;",n="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",r=new RegExp(e.split("").join("|"),"g");return t.toString().replace(/[A-Z]/g,s=>`-${s}`).toLowerCase().replace(/\s+/g,"-").replace(r,s=>n.charAt(e.indexOf(s))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/-{2,}/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const Js=t=>t in rt,Ze={preset:{type:String,validator:t=>Js(t),required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1},duration:{type:[Number,String],required:!1}};function Ye(t){const e=st({}),n=R(()=>t.preset?structuredClone(rt[t.preset]):{}),r=R(()=>({initial:t.initial,enter:t.enter,leave:t.leave,visible:t.visible,visibleOnce:t.visibleOnce,hovered:t.hovered,tapped:t.tapped,focused:t.focused})),s=R(()=>{var a;const i=se({},r.value,n.value,t.variants||{});for(const c of["delay","duration"]){if(!t[c])continue;const f=Number.parseInt(t[c]);for(const u of["enter","visible","visibleOnce"]){const l=i[u];l!=null&&((a=l.transition)!=null||(l.transition={}),l.transition[c]=f)}}return i});{const i=a=>{var c;(c=a.variants)!=null&&c.initial&&a.set("initial"),on(()=>{var f,u,l;(f=a.variants)!=null&&f.enter&&a.apply("enter"),(u=a.variants)!=null&&u.visible&&a.apply("visible"),(l=a.variants)!=null&&l.visibleOnce&&a.apply("visibleOnce")})};sn(()=>{for(const a in e)i(e[a])})}function o(i,a,c){var u,l;var f;return(u=i.props)!=null||(i.props={}),(l=(f=i.props).style)!=null||(f.style={}),i.props.style={...i.props.style,...c},i.props.onVnodeMounted=({el:d})=>{e[a]=We(d,s.value)},i}return{motionConfig:s,setNodeInstance:o}}const Qs=ee({props:{...Ze,is:{type:[String,Object],default:"div"}},setup(t){const e=ne(),{motionConfig:n,setNodeInstance:r}=Ye(t);return()=>{const s=Bt(n.value.initial||{}),o=re(t.is,void 0,e);return r(o,0,s),o}}}),ti=ee({props:{...Ze,is:{type:[String,Object],required:!1}},setup(t){const e=ne(),{motionConfig:n,setNodeInstance:r}=Ye(t);return()=>{var i;const s=Bt(n.value.initial||{}),o=((i=e.default)==null?void 0:i.call(e))||[];for(let a=0;a<o.length;a++)r(o[a],a,s);return t.is?re(t.is,void 0,o):o}}}),ei={install(t,e){if(t.directive("motion",yt()),t.component("Motion",Qs),t.component("MotionGroup",ti),!e||e&&!e.excludePresets)for(const n in rt){const r=rt[n];t.directive(`motion-${Xs(n)}`,yt(r,!0))}if(e&&e.directives)for(const n in e.directives){const r=e.directives[n];!r.initial&&__DEV__&&console.warn(`Your directive v-motion-${n} is missing initial variant!`),t.directive(`motion-${n}`,yt(r,!0))}}};var ri=an(async({app:t})=>{t.use(ei)});export{ri as default};