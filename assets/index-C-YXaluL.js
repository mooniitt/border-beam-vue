(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function qr(e){const t=Object.create(null);for(const r of e.split(","))t[r]=1;return r=>r in t}const G={},dt=[],Pe=()=>{},oo=()=>!1,fr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),ur=e=>e.startsWith("onUpdate:"),ae=Object.assign,Jr=(e,t)=>{const r=e.indexOf(t);r>-1&&e.splice(r,1)},bn=Object.prototype.hasOwnProperty,L=(e,t)=>bn.call(e,t),A=Array.isArray,gt=e=>Yt(e)==="[object Map]",no=e=>Yt(e)==="[object Set]",_s=e=>Yt(e)==="[object Date]",R=e=>typeof e=="function",re=e=>typeof e=="string",Se=e=>typeof e=="symbol",V=e=>e!==null&&typeof e=="object",io=e=>(V(e)||R(e))&&R(e.then)&&R(e.catch),ao=Object.prototype.toString,Yt=e=>ao.call(e),hn=e=>Yt(e).slice(8,-1),lo=e=>Yt(e)==="[object Object]",Zr=e=>re(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Ct=qr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),pr=e=>{const t=Object.create(null);return r=>t[r]||(t[r]=e(r))},mn=/-\w/g,he=pr(e=>e.replace(mn,t=>t.slice(1).toUpperCase())),xn=/\B([A-Z])/g,lt=pr(e=>e.replace(xn,"-$1").toLowerCase()),dr=pr(e=>e.charAt(0).toUpperCase()+e.slice(1)),wr=pr(e=>e?`on${dr(e)}`:""),Ie=(e,t)=>!Object.is(e,t),qt=(e,...t)=>{for(let r=0;r<e.length;r++)e[r](...t)},co=(e,t,r,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:r})},Qr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let zs;const gr=()=>zs||(zs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Xt(e){if(A(e)){const t={};for(let r=0;r<e.length;r++){const s=e[r],o=re(s)?_n(s):Xt(s);if(o)for(const n in o)t[n]=o[n]}return t}else if(re(e)||V(e))return e}const vn=/;(?![^(]*\))/g,$n=/:([^]+)/,yn=/\/\*[^]*?\*\//g;function _n(e){const t={};return e.replace(yn,"").split(vn).forEach(r=>{if(r){const s=r.split($n);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function br(e){let t="";if(re(e))t=e;else if(A(e))for(let r=0;r<e.length;r++){const s=br(e[r]);s&&(t+=s+" ")}else if(V(e))for(const r in e)e[r]&&(t+=r+" ");return t.trim()}const zn="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",wn=qr(zn);function fo(e){return!!e||e===""}function Sn(e,t){if(e.length!==t.length)return!1;let r=!0;for(let s=0;r&&s<e.length;s++)r=es(e[s],t[s]);return r}function es(e,t){if(e===t)return!0;let r=_s(e),s=_s(t);if(r||s)return r&&s?e.getTime()===t.getTime():!1;if(r=Se(e),s=Se(t),r||s)return e===t;if(r=A(e),s=A(t),r||s)return r&&s?Sn(e,t):!1;if(r=V(e),s=V(t),r||s){if(!r||!s)return!1;const o=Object.keys(e).length,n=Object.keys(t).length;if(o!==n)return!1;for(const i in e){const a=e.hasOwnProperty(i),l=t.hasOwnProperty(i);if(a&&!l||!a&&l||!es(e[i],t[i]))return!1}}return String(e)===String(t)}const uo=e=>!!(e&&e.__v_isRef===!0),De=e=>re(e)?e:e==null?"":A(e)||V(e)&&(e.toString===ao||!R(e.toString))?uo(e)?De(e.value):JSON.stringify(e,po,2):String(e),po=(e,t)=>uo(t)?po(e,t.value):gt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((r,[s,o],n)=>(r[Sr(s,n)+" =>"]=o,r),{})}:no(t)?{[`Set(${t.size})`]:[...t.values()].map(r=>Sr(r))}:Se(t)?Sr(t):V(t)&&!A(t)&&!lo(t)?String(t):t,Sr=(e,t="")=>{var r;return Se(e)?`Symbol(${(r=e.description)!=null?r:t})`:e};/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xe;class kn{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=xe,!t&&xe&&(this.index=(xe.scopes||(xe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,r;if(this.scopes)for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].pause();for(t=0,r=this.effects.length;t<r;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,r;if(this.scopes)for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].resume();for(t=0,r=this.effects.length;t<r;t++)this.effects[t].resume()}}run(t){if(this._active){const r=xe;try{return xe=this,t()}finally{xe=r}}}on(){++this._on===1&&(this.prevScope=xe,xe=this)}off(){this._on>0&&--this._on===0&&(xe=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let r,s;for(r=0,s=this.effects.length;r<s;r++)this.effects[r].stop();for(this.effects.length=0,r=0,s=this.cleanups.length;r<s;r++)this.cleanups[r]();if(this.cleanups.length=0,this.scopes){for(r=0,s=this.scopes.length;r<s;r++)this.scopes[r].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function Cn(){return xe}let Z;const kr=new WeakSet;class go{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,xe&&xe.active&&xe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,kr.has(this)&&(kr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ho(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ws(this),mo(this);const t=Z,r=we;Z=this,we=!0;try{return this.fn()}finally{xo(this),Z=t,we=r,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)ss(t);this.deps=this.depsTail=void 0,ws(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?kr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ir(this)&&this.run()}get dirty(){return Ir(this)}}let bo=0,Ht,Ot;function ho(e,t=!1){if(e.flags|=8,t){e.next=Ot,Ot=e;return}e.next=Ht,Ht=e}function ts(){bo++}function rs(){if(--bo>0)return;if(Ot){let t=Ot;for(Ot=void 0;t;){const r=t.next;t.next=void 0,t.flags&=-9,t=r}}let e;for(;Ht;){let t=Ht;for(Ht=void 0;t;){const r=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=r}}if(e)throw e}function mo(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function xo(e){let t,r=e.depsTail,s=r;for(;s;){const o=s.prevDep;s.version===-1?(s===r&&(r=o),ss(s),Hn(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=o}e.deps=t,e.depsTail=r}function Ir(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(vo(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function vo(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===At)||(e.globalVersion=At,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Ir(e))))return;e.flags|=2;const t=e.dep,r=Z,s=we;Z=e,we=!0;try{mo(e);const o=e.fn(e._value);(t.version===0||Ie(o,e._value))&&(e.flags|=128,e._value=o,t.version++)}catch(o){throw t.version++,o}finally{Z=r,we=s,xo(e),e.flags&=-3}}function ss(e,t=!1){const{dep:r,prevSub:s,nextSub:o}=e;if(s&&(s.nextSub=o,e.prevSub=void 0),o&&(o.prevSub=s,e.nextSub=void 0),r.subs===e&&(r.subs=s,!s&&r.computed)){r.computed.flags&=-5;for(let n=r.computed.deps;n;n=n.nextDep)ss(n,!0)}!t&&!--r.sc&&r.map&&r.map.delete(r.key)}function Hn(e){const{prevDep:t,nextDep:r}=e;t&&(t.nextDep=r,e.prevDep=void 0),r&&(r.prevDep=t,e.nextDep=void 0)}let we=!0;const $o=[];function Ve(){$o.push(we),we=!1}function Ue(){const e=$o.pop();we=e===void 0?!0:e}function ws(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const r=Z;Z=void 0;try{t()}finally{Z=r}}}let At=0;class On{constructor(t,r){this.sub=t,this.dep=r,this.version=r.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class os{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Z||!we||Z===this.computed)return;let r=this.activeLink;if(r===void 0||r.sub!==Z)r=this.activeLink=new On(Z,this),Z.deps?(r.prevDep=Z.depsTail,Z.depsTail.nextDep=r,Z.depsTail=r):Z.deps=Z.depsTail=r,yo(r);else if(r.version===-1&&(r.version=this.version,r.nextDep)){const s=r.nextDep;s.prevDep=r.prevDep,r.prevDep&&(r.prevDep.nextDep=s),r.prevDep=Z.depsTail,r.nextDep=void 0,Z.depsTail.nextDep=r,Z.depsTail=r,Z.deps===r&&(Z.deps=s)}return r}trigger(t){this.version++,At++,this.notify(t)}notify(t){ts();try{for(let r=this.subs;r;r=r.prevSub)r.sub.notify()&&r.sub.dep.notify()}finally{rs()}}}function yo(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)yo(s)}const r=e.dep.subs;r!==e&&(e.prevSub=r,r&&(r.nextSub=e)),e.dep.subs=e}}const Pr=new WeakMap,it=Symbol(""),Yr=Symbol(""),Ft=Symbol("");function le(e,t,r){if(we&&Z){let s=Pr.get(e);s||Pr.set(e,s=new Map);let o=s.get(r);o||(s.set(r,o=new os),o.map=s,o.key=r),o.track()}}function Ne(e,t,r,s,o,n){const i=Pr.get(e);if(!i){At++;return}const a=l=>{l&&l.trigger()};if(ts(),t==="clear")i.forEach(a);else{const l=A(e),p=l&&Zr(r);if(l&&r==="length"){const u=Number(s);i.forEach((d,v)=>{(v==="length"||v===Ft||!Se(v)&&v>=u)&&a(d)})}else switch((r!==void 0||i.has(void 0))&&a(i.get(r)),p&&a(i.get(Ft)),t){case"add":l?p&&a(i.get("length")):(a(i.get(it)),gt(e)&&a(i.get(Yr)));break;case"delete":l||(a(i.get(it)),gt(e)&&a(i.get(Yr)));break;case"set":gt(e)&&a(i.get(it));break}}rs()}function ct(e){const t=j(e);return t===e?t:(le(t,"iterate",Ft),_e(e)?t:t.map(ke))}function hr(e){return le(e=j(e),"iterate",Ft),e}function Fe(e,t){return Ke(e)?xt(at(e)?ke(t):t):ke(t)}const Wn={__proto__:null,[Symbol.iterator](){return Cr(this,Symbol.iterator,e=>Fe(this,e))},concat(...e){return ct(this).concat(...e.map(t=>A(t)?ct(t):t))},entries(){return Cr(this,"entries",e=>(e[1]=Fe(this,e[1]),e))},every(e,t){return Xe(this,"every",e,t,void 0,arguments)},filter(e,t){return Xe(this,"filter",e,t,r=>r.map(s=>Fe(this,s)),arguments)},find(e,t){return Xe(this,"find",e,t,r=>Fe(this,r),arguments)},findIndex(e,t){return Xe(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Xe(this,"findLast",e,t,r=>Fe(this,r),arguments)},findLastIndex(e,t){return Xe(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Xe(this,"forEach",e,t,void 0,arguments)},includes(...e){return Hr(this,"includes",e)},indexOf(...e){return Hr(this,"indexOf",e)},join(e){return ct(this).join(e)},lastIndexOf(...e){return Hr(this,"lastIndexOf",e)},map(e,t){return Xe(this,"map",e,t,void 0,arguments)},pop(){return zt(this,"pop")},push(...e){return zt(this,"push",e)},reduce(e,...t){return Ss(this,"reduce",e,t)},reduceRight(e,...t){return Ss(this,"reduceRight",e,t)},shift(){return zt(this,"shift")},some(e,t){return Xe(this,"some",e,t,void 0,arguments)},splice(...e){return zt(this,"splice",e)},toReversed(){return ct(this).toReversed()},toSorted(e){return ct(this).toSorted(e)},toSpliced(...e){return ct(this).toSpliced(...e)},unshift(...e){return zt(this,"unshift",e)},values(){return Cr(this,"values",e=>Fe(this,e))}};function Cr(e,t,r){const s=hr(e),o=s[t]();return s!==e&&!_e(e)&&(o._next=o.next,o.next=()=>{const n=o._next();return n.done||(n.value=r(n.value)),n}),o}const Tn=Array.prototype;function Xe(e,t,r,s,o,n){const i=hr(e),a=i!==e&&!_e(e),l=i[t];if(l!==Tn[t]){const d=l.apply(e,n);return a?ke(d):d}let p=r;i!==e&&(a?p=function(d,v){return r.call(this,Fe(e,d),v,e)}:r.length>2&&(p=function(d,v){return r.call(this,d,v,e)}));const u=l.call(i,p,s);return a&&o?o(u):u}function Ss(e,t,r,s){const o=hr(e),n=o!==e&&!_e(e);let i=r,a=!1;o!==e&&(n?(a=s.length===0,i=function(p,u,d){return a&&(a=!1,p=Fe(e,p)),r.call(this,p,Fe(e,u),d,e)}):r.length>3&&(i=function(p,u,d){return r.call(this,p,u,d,e)}));const l=o[t](i,...s);return a?Fe(e,l):l}function Hr(e,t,r){const s=j(e);le(s,"iterate",Ft);const o=s[t](...r);return(o===-1||o===!1)&&ls(r[0])?(r[0]=j(r[0]),s[t](...r)):o}function zt(e,t,r=[]){Ve(),ts();const s=j(e)[t].apply(e,r);return rs(),Ue(),s}const En=qr("__proto__,__v_isRef,__isVue"),_o=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Se));function An(e){Se(e)||(e=String(e));const t=j(this);return le(t,"has",e),t.hasOwnProperty(e)}class zo{constructor(t=!1,r=!1){this._isReadonly=t,this._isShallow=r}get(t,r,s){if(r==="__v_skip")return t.__v_skip;const o=this._isReadonly,n=this._isShallow;if(r==="__v_isReactive")return!o;if(r==="__v_isReadonly")return o;if(r==="__v_isShallow")return n;if(r==="__v_raw")return s===(o?n?Ln:Co:n?ko:So).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const i=A(t);if(!o){let l;if(i&&(l=Wn[r]))return l;if(r==="hasOwnProperty")return An}const a=Reflect.get(t,r,ue(t)?t:s);if((Se(r)?_o.has(r):En(r))||(o||le(t,"get",r),n))return a;if(ue(a)){const l=i&&Zr(r)?a:a.value;return o&&V(l)?Dr(l):l}return V(a)?o?Dr(a):is(a):a}}class wo extends zo{constructor(t=!1){super(!1,t)}set(t,r,s,o){let n=t[r];const i=A(t)&&Zr(r);if(!this._isShallow){const p=Ke(n);if(!_e(s)&&!Ke(s)&&(n=j(n),s=j(s)),!i&&ue(n)&&!ue(s))return p||(n.value=s),!0}const a=i?Number(r)<t.length:L(t,r),l=Reflect.set(t,r,s,ue(t)?t:o);return t===j(o)&&(a?Ie(s,n)&&Ne(t,"set",r,s):Ne(t,"add",r,s)),l}deleteProperty(t,r){const s=L(t,r);t[r];const o=Reflect.deleteProperty(t,r);return o&&s&&Ne(t,"delete",r,void 0),o}has(t,r){const s=Reflect.has(t,r);return(!Se(r)||!_o.has(r))&&le(t,"has",r),s}ownKeys(t){return le(t,"iterate",A(t)?"length":it),Reflect.ownKeys(t)}}class Fn extends zo{constructor(t=!1){super(!0,t)}set(t,r){return!0}deleteProperty(t,r){return!0}}const Mn=new wo,Rn=new Fn,In=new wo(!0);const Xr=e=>e,Bt=e=>Reflect.getPrototypeOf(e);function Pn(e,t,r){return function(...s){const o=this.__v_raw,n=j(o),i=gt(n),a=e==="entries"||e===Symbol.iterator&&i,l=e==="keys"&&i,p=o[e](...s),u=r?Xr:t?xt:ke;return!t&&le(n,"iterate",l?Yr:it),ae(Object.create(p),{next(){const{value:d,done:v}=p.next();return v?{value:d,done:v}:{value:a?[u(d[0]),u(d[1])]:u(d),done:v}}})}}function Vt(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Yn(e,t){const r={get(o){const n=this.__v_raw,i=j(n),a=j(o);e||(Ie(o,a)&&le(i,"get",o),le(i,"get",a));const{has:l}=Bt(i),p=t?Xr:e?xt:ke;if(l.call(i,o))return p(n.get(o));if(l.call(i,a))return p(n.get(a));n!==i&&n.get(o)},get size(){const o=this.__v_raw;return!e&&le(j(o),"iterate",it),o.size},has(o){const n=this.__v_raw,i=j(n),a=j(o);return e||(Ie(o,a)&&le(i,"has",o),le(i,"has",a)),o===a?n.has(o):n.has(o)||n.has(a)},forEach(o,n){const i=this,a=i.__v_raw,l=j(a),p=t?Xr:e?xt:ke;return!e&&le(l,"iterate",it),a.forEach((u,d)=>o.call(n,p(u),p(d),i))}};return ae(r,e?{add:Vt("add"),set:Vt("set"),delete:Vt("delete"),clear:Vt("clear")}:{add(o){const n=j(this),i=Bt(n),a=j(o),l=!t&&!_e(o)&&!Ke(o)?a:o;return i.has.call(n,l)||Ie(o,l)&&i.has.call(n,o)||Ie(a,l)&&i.has.call(n,a)||(n.add(l),Ne(n,"add",l,l)),this},set(o,n){!t&&!_e(n)&&!Ke(n)&&(n=j(n));const i=j(this),{has:a,get:l}=Bt(i);let p=a.call(i,o);p||(o=j(o),p=a.call(i,o));const u=l.call(i,o);return i.set(o,n),p?Ie(n,u)&&Ne(i,"set",o,n):Ne(i,"add",o,n),this},delete(o){const n=j(this),{has:i,get:a}=Bt(n);let l=i.call(n,o);l||(o=j(o),l=i.call(n,o)),a&&a.call(n,o);const p=n.delete(o);return l&&Ne(n,"delete",o,void 0),p},clear(){const o=j(this),n=o.size!==0,i=o.clear();return n&&Ne(o,"clear",void 0,void 0),i}}),["keys","values","entries",Symbol.iterator].forEach(o=>{r[o]=Pn(o,e,t)}),r}function ns(e,t){const r=Yn(e,t);return(s,o,n)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?s:Reflect.get(L(r,o)&&o in s?r:s,o,n)}const Xn={get:ns(!1,!1)},Dn={get:ns(!1,!0)},jn={get:ns(!0,!1)};const So=new WeakMap,ko=new WeakMap,Co=new WeakMap,Ln=new WeakMap;function Nn(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Bn(e){return e.__v_skip||!Object.isExtensible(e)?0:Nn(hn(e))}function is(e){return Ke(e)?e:as(e,!1,Mn,Xn,So)}function Vn(e){return as(e,!1,In,Dn,ko)}function Dr(e){return as(e,!0,Rn,jn,Co)}function as(e,t,r,s,o){if(!V(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const n=Bn(e);if(n===0)return e;const i=o.get(e);if(i)return i;const a=new Proxy(e,n===2?s:r);return o.set(e,a),a}function at(e){return Ke(e)?at(e.__v_raw):!!(e&&e.__v_isReactive)}function Ke(e){return!!(e&&e.__v_isReadonly)}function _e(e){return!!(e&&e.__v_isShallow)}function ls(e){return e?!!e.__v_raw:!1}function j(e){const t=e&&e.__v_raw;return t?j(t):e}function Un(e){return!L(e,"__v_skip")&&Object.isExtensible(e)&&co(e,"__v_skip",!0),e}const ke=e=>V(e)?is(e):e,xt=e=>V(e)?Dr(e):e;function ue(e){return e?e.__v_isRef===!0:!1}function ze(e){return Kn(e,!1)}function Kn(e,t){return ue(e)?e:new Gn(e,t)}class Gn{constructor(t,r){this.dep=new os,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=r?t:j(t),this._value=r?t:ke(t),this.__v_isShallow=r}get value(){return this.dep.track(),this._value}set value(t){const r=this._rawValue,s=this.__v_isShallow||_e(t)||Ke(t);t=s?t:j(t),Ie(t,r)&&(this._rawValue=t,this._value=s?t:ke(t),this.dep.trigger())}}function Ze(e){return ue(e)?e.value:e}const qn={get:(e,t,r)=>t==="__v_raw"?e:Ze(Reflect.get(e,t,r)),set:(e,t,r,s)=>{const o=e[t];return ue(o)&&!ue(r)?(o.value=r,!0):Reflect.set(e,t,r,s)}};function Ho(e){return at(e)?e:new Proxy(e,qn)}class Jn{constructor(t,r,s){this.fn=t,this.setter=r,this._value=void 0,this.dep=new os(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=At-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!r,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&Z!==this)return ho(this,!0),!0}get value(){const t=this.dep.track();return vo(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Zn(e,t,r=!1){let s,o;return R(e)?s=e:(s=e.get,o=e.set),new Jn(s,o,r)}const Ut={},er=new WeakMap;let nt;function Qn(e,t=!1,r=nt){if(r){let s=er.get(r);s||er.set(r,s=[]),s.push(e)}}function ei(e,t,r=G){const{immediate:s,deep:o,once:n,scheduler:i,augmentJob:a,call:l}=r,p=H=>o?H:_e(H)||o===!1||o===0?Be(H,1):Be(H);let u,d,v,$,I=!1,C=!1;if(ue(e)?(d=()=>e.value,I=_e(e)):at(e)?(d=()=>p(e),I=!0):A(e)?(C=!0,I=e.some(H=>at(H)||_e(H)),d=()=>e.map(H=>{if(ue(H))return H.value;if(at(H))return p(H);if(R(H))return l?l(H,2):H()})):R(e)?t?d=l?()=>l(e,2):e:d=()=>{if(v){Ve();try{v()}finally{Ue()}}const H=nt;nt=u;try{return l?l(e,3,[$]):e($)}finally{nt=H}}:d=Pe,t&&o){const H=d,D=o===!0?1/0:o;d=()=>Be(H(),D)}const F=Cn(),M=()=>{u.stop(),F&&F.active&&Jr(F.effects,u)};if(n&&t){const H=t;t=(...D)=>{H(...D),M()}}let T=C?new Array(e.length).fill(Ut):Ut;const P=H=>{if(!(!(u.flags&1)||!u.dirty&&!H))if(t){const D=u.run();if(o||I||(C?D.some((U,k)=>Ie(U,T[k])):Ie(D,T))){v&&v();const U=nt;nt=u;try{const k=[D,T===Ut?void 0:C&&T[0]===Ut?[]:T,$];T=D,l?l(t,3,k):t(...k)}finally{nt=U}}}else u.run()};return a&&a(P),u=new go(d),u.scheduler=i?()=>i(P,!1):P,$=H=>Qn(H,!1,u),v=u.onStop=()=>{const H=er.get(u);if(H){if(l)l(H,4);else for(const D of H)D();er.delete(u)}},t?s?P(!0):T=u.run():i?i(P.bind(null,!0),!0):u.run(),M.pause=u.pause.bind(u),M.resume=u.resume.bind(u),M.stop=M,M}function Be(e,t=1/0,r){if(t<=0||!V(e)||e.__v_skip||(r=r||new Map,(r.get(e)||0)>=t))return e;if(r.set(e,t),t--,ue(e))Be(e.value,t,r);else if(A(e))for(let s=0;s<e.length;s++)Be(e[s],t,r);else if(no(e)||gt(e))e.forEach(s=>{Be(s,t,r)});else if(lo(e)){for(const s in e)Be(e[s],t,r);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&Be(e[s],t,r)}return e}/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Dt(e,t,r,s){try{return s?e(...s):e()}catch(o){mr(o,t,r)}}function Ye(e,t,r,s){if(R(e)){const o=Dt(e,t,r,s);return o&&io(o)&&o.catch(n=>{mr(n,t,r)}),o}if(A(e)){const o=[];for(let n=0;n<e.length;n++)o.push(Ye(e[n],t,r,s));return o}}function mr(e,t,r,s=!0){const o=t?t.vnode:null,{errorHandler:n,throwUnhandledErrorInProduction:i}=t&&t.appContext.config||G;if(t){let a=t.parent;const l=t.proxy,p=`https://vuejs.org/error-reference/#runtime-${r}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,l,p)===!1)return}a=a.parent}if(n){Ve(),Dt(n,null,10,[e,l,p]),Ue();return}}ti(e,r,o,s,i)}function ti(e,t,r,s=!0,o=!1){if(o)throw e;console.error(e)}const be=[];let Ae=-1;const bt=[];let Qe=null,ft=0;const Oo=Promise.resolve();let tr=null;function ri(e){const t=tr||Oo;return e?t.then(this?e.bind(this):e):t}function si(e){let t=Ae+1,r=be.length;for(;t<r;){const s=t+r>>>1,o=be[s],n=Mt(o);n<e||n===e&&o.flags&2?t=s+1:r=s}return t}function cs(e){if(!(e.flags&1)){const t=Mt(e),r=be[be.length-1];!r||!(e.flags&2)&&t>=Mt(r)?be.push(e):be.splice(si(t),0,e),e.flags|=1,Wo()}}function Wo(){tr||(tr=Oo.then(Eo))}function oi(e){A(e)?bt.push(...e):Qe&&e.id===-1?Qe.splice(ft+1,0,e):e.flags&1||(bt.push(e),e.flags|=1),Wo()}function ks(e,t,r=Ae+1){for(;r<be.length;r++){const s=be[r];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;be.splice(r,1),r--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function To(e){if(bt.length){const t=[...new Set(bt)].sort((r,s)=>Mt(r)-Mt(s));if(bt.length=0,Qe){Qe.push(...t);return}for(Qe=t,ft=0;ft<Qe.length;ft++){const r=Qe[ft];r.flags&4&&(r.flags&=-2),r.flags&8||r(),r.flags&=-2}Qe=null,ft=0}}const Mt=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Eo(e){try{for(Ae=0;Ae<be.length;Ae++){const t=be[Ae];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Dt(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Ae<be.length;Ae++){const t=be[Ae];t&&(t.flags&=-2)}Ae=-1,be.length=0,To(),tr=null,(be.length||bt.length)&&Eo()}}let ie=null,Ao=null;function rr(e){const t=ie;return ie=e,Ao=e&&e.type.__scopeId||null,t}function pt(e,t=ie,r){if(!t||e._n)return e;const s=(...o)=>{s._d&&ar(-1);const n=rr(t);let i;try{i=e(...o)}finally{rr(n),s._d&&ar(1)}return i};return s._n=!0,s._c=!0,s._d=!0,s}function Cs(e,t){if(ie===null)return e;const r=yr(ie),s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[n,i,a,l=G]=t[o];n&&(R(n)&&(n={mounted:n,updated:n}),n.deep&&Be(i),s.push({dir:n,instance:r,value:i,oldValue:void 0,arg:a,modifiers:l}))}return e}function rt(e,t,r,s){const o=e.dirs,n=t&&t.dirs;for(let i=0;i<o.length;i++){const a=o[i];n&&(a.oldValue=n[i].value);let l=a.dir[s];l&&(Ve(),Ye(l,r,8,[e.el,a,e,t]),Ue())}}function ni(e,t){if(fe){let r=fe.provides;const s=fe.parent&&fe.parent.provides;s===r&&(r=fe.provides=Object.create(s)),r[e]=t}}function Jt(e,t,r=!1){const s=ln();if(s||mt){let o=mt?mt._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(o&&e in o)return o[e];if(arguments.length>1)return r&&R(t)?t.call(s&&s.proxy):t}}const ii=Symbol.for("v-scx"),ai=()=>Jt(ii);function li(e,t){return fs(e,null,t)}function Or(e,t,r){return fs(e,t,r)}function fs(e,t,r=G){const{immediate:s,deep:o,flush:n,once:i}=r,a=ae({},r),l=t&&s||!t&&n!=="post";let p;if(Pt){if(n==="sync"){const $=ai();p=$.__watcherHandles||($.__watcherHandles=[])}else if(!l){const $=()=>{};return $.stop=Pe,$.resume=Pe,$.pause=Pe,$}}const u=fe;a.call=($,I,C)=>Ye($,u,I,C);let d=!1;n==="post"?a.scheduler=$=>{me($,u&&u.suspense)}:n!=="sync"&&(d=!0,a.scheduler=($,I)=>{I?$():cs($)}),a.augmentJob=$=>{t&&($.flags|=4),d&&($.flags|=2,u&&($.id=u.uid,$.i=u))};const v=ei(e,t,a);return Pt&&(p?p.push(v):l&&v()),v}function ci(e,t,r){const s=this.proxy,o=re(e)?e.includes(".")?Fo(s,e):()=>s[e]:e.bind(s,s);let n;R(t)?n=t:(n=t.handler,r=t);const i=jt(this),a=fs(o,n.bind(s),r);return i(),a}function Fo(e,t){const r=t.split(".");return()=>{let s=e;for(let o=0;o<r.length&&s;o++)s=s[r[o]];return s}}const fi=Symbol("_vte"),ui=e=>e.__isTeleport,pi=Symbol("_leaveCb");function us(e,t){e.shapeFlag&6&&e.component?(e.transition=t,us(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Mo(e,t){return R(e)?ae({name:e.name},t,{setup:e}):e}function sr(){const e=ln();return e?(e.appContext.config.idPrefix||"v")+"-"+e.ids[0]+e.ids[1]++:""}function Ro(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Hs(e,t){let r;return!!((r=Object.getOwnPropertyDescriptor(e,t))&&!r.configurable)}const or=new WeakMap;function Wt(e,t,r,s,o=!1){if(A(e)){e.forEach((C,F)=>Wt(C,t&&(A(t)?t[F]:t),r,s,o));return}if(ht(s)&&!o){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Wt(e,t,r,s.component.subTree);return}const n=s.shapeFlag&4?yr(s.component):s.el,i=o?null:n,{i:a,r:l}=e,p=t&&t.r,u=a.refs===G?a.refs={}:a.refs,d=a.setupState,v=j(d),$=d===G?oo:C=>Hs(u,C)?!1:L(v,C),I=(C,F)=>!(F&&Hs(u,F));if(p!=null&&p!==l){if(Os(t),re(p))u[p]=null,$(p)&&(d[p]=null);else if(ue(p)){const C=t;I(p,C.k)&&(p.value=null),C.k&&(u[C.k]=null)}}if(R(l))Dt(l,a,12,[i,u]);else{const C=re(l),F=ue(l);if(C||F){const M=()=>{if(e.f){const T=C?$(l)?d[l]:u[l]:I()||!e.k?l.value:u[e.k];if(o)A(T)&&Jr(T,n);else if(A(T))T.includes(n)||T.push(n);else if(C)u[l]=[n],$(l)&&(d[l]=u[l]);else{const P=[n];I(l,e.k)&&(l.value=P),e.k&&(u[e.k]=P)}}else C?(u[l]=i,$(l)&&(d[l]=i)):F&&(I(l,e.k)&&(l.value=i),e.k&&(u[e.k]=i))};if(i){const T=()=>{M(),or.delete(e)};T.id=-1,or.set(e,T),me(T,r)}else Os(e),M()}}}function Os(e){const t=or.get(e);t&&(t.flags|=8,or.delete(e))}gr().requestIdleCallback;gr().cancelIdleCallback;const ht=e=>!!e.type.__asyncLoader,Io=e=>e.type.__isKeepAlive;function di(e,t){Po(e,"a",t)}function gi(e,t){Po(e,"da",t)}function Po(e,t,r=fe){const s=e.__wdc||(e.__wdc=()=>{let o=r;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(xr(t,s,r),r){let o=r.parent;for(;o&&o.parent;)Io(o.parent.vnode)&&bi(s,t,r,o),o=o.parent}}function bi(e,t,r,s){const o=xr(t,e,s,!0);nr(()=>{Jr(s[t],o)},r)}function xr(e,t,r=fe,s=!1){if(r){const o=r[e]||(r[e]=[]),n=t.__weh||(t.__weh=(...i)=>{Ve();const a=jt(r),l=Ye(t,r,e,i);return a(),Ue(),l});return s?o.unshift(n):o.push(n),n}}const qe=e=>(t,r=fe)=>{(!Pt||e==="sp")&&xr(e,(...s)=>t(...s),r)},hi=qe("bm"),jr=qe("m"),mi=qe("bu"),xi=qe("u"),vi=qe("bum"),nr=qe("um"),$i=qe("sp"),yi=qe("rtg"),_i=qe("rtc");function zi(e,t=fe){xr("ec",e,t)}const wi="components",Yo=Symbol.for("v-ndc");function Si(e){return re(e)?ki(wi,e,!1)||e:e||Yo}function ki(e,t,r=!0,s=!1){const o=ie||fe;if(o){const n=o.type;{const a=ua(n,!1);if(a&&(a===t||a===he(t)||a===dr(he(t))))return n}const i=Ws(o[e]||n[e],t)||Ws(o.appContext[e],t);return!i&&s?n:i}}function Ws(e,t){return e&&(e[t]||e[he(t)]||e[dr(he(t))])}function Ts(e,t,r,s){let o;const n=r,i=A(e);if(i||re(e)){const a=i&&at(e);let l=!1,p=!1;a&&(l=!_e(e),p=Ke(e),e=hr(e)),o=new Array(e.length);for(let u=0,d=e.length;u<d;u++)o[u]=t(l?p?xt(ke(e[u])):ke(e[u]):e[u],u,void 0,n)}else if(typeof e=="number"){o=new Array(e);for(let a=0;a<e;a++)o[a]=t(a+1,a,void 0,n)}else if(V(e))if(e[Symbol.iterator])o=Array.from(e,(a,l)=>t(a,l,void 0,n));else{const a=Object.keys(e);o=new Array(a.length);for(let l=0,p=a.length;l<p;l++){const u=a[l];o[l]=t(e[u],u,l,n)}}else o=[];return o}function Ci(e,t,r={},s,o){if(ie.ce||ie.parent&&ht(ie.parent)&&ie.parent.ce){const p=Object.keys(r).length>0;return ge(),Me(ce,null,[Q("slot",r,s)],p?-2:64)}let n=e[t];n&&n._c&&(n._d=!1),ge();const i=n&&Xo(n(r)),a=r.key||i&&i.key,l=Me(ce,{key:(a&&!Se(a)?a:`_${t}`)+(!i&&s?"_fb":"")},i||[],i&&e._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),n&&n._c&&(n._d=!0),l}function Xo(e){return e.some(t=>It(t)?!(t.type===Ge||t.type===ce&&!Xo(t.children)):!0)?e:null}const Lr=e=>e?cn(e)?yr(e):Lr(e.parent):null,Tt=ae(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Lr(e.parent),$root:e=>Lr(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>jo(e),$forceUpdate:e=>e.f||(e.f=()=>{cs(e.update)}),$nextTick:e=>e.n||(e.n=ri.bind(e.proxy)),$watch:e=>ci.bind(e)}),Wr=(e,t)=>e!==G&&!e.__isScriptSetup&&L(e,t),Hi={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:r,setupState:s,data:o,props:n,accessCache:i,type:a,appContext:l}=e;if(t[0]!=="$"){const v=i[t];if(v!==void 0)switch(v){case 1:return s[t];case 2:return o[t];case 4:return r[t];case 3:return n[t]}else{if(Wr(s,t))return i[t]=1,s[t];if(o!==G&&L(o,t))return i[t]=2,o[t];if(L(n,t))return i[t]=3,n[t];if(r!==G&&L(r,t))return i[t]=4,r[t];Nr&&(i[t]=0)}}const p=Tt[t];let u,d;if(p)return t==="$attrs"&&le(e.attrs,"get",""),p(e);if((u=a.__cssModules)&&(u=u[t]))return u;if(r!==G&&L(r,t))return i[t]=4,r[t];if(d=l.config.globalProperties,L(d,t))return d[t]},set({_:e},t,r){const{data:s,setupState:o,ctx:n}=e;return Wr(o,t)?(o[t]=r,!0):s!==G&&L(s,t)?(s[t]=r,!0):L(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(n[t]=r,!0)},has({_:{data:e,setupState:t,accessCache:r,ctx:s,appContext:o,props:n,type:i}},a){let l;return!!(r[a]||e!==G&&a[0]!=="$"&&L(e,a)||Wr(t,a)||L(n,a)||L(s,a)||L(Tt,a)||L(o.config.globalProperties,a)||(l=i.__cssModules)&&l[a])},defineProperty(e,t,r){return r.get!=null?e._.accessCache[t]=0:L(r,"value")&&this.set(e,t,r.value,null),Reflect.defineProperty(e,t,r)}};function Es(e){return A(e)?e.reduce((t,r)=>(t[r]=null,t),{}):e}let Nr=!0;function Oi(e){const t=jo(e),r=e.proxy,s=e.ctx;Nr=!1,t.beforeCreate&&As(t.beforeCreate,e,"bc");const{data:o,computed:n,methods:i,watch:a,provide:l,inject:p,created:u,beforeMount:d,mounted:v,beforeUpdate:$,updated:I,activated:C,deactivated:F,beforeDestroy:M,beforeUnmount:T,destroyed:P,unmounted:H,render:D,renderTracked:U,renderTriggered:k,errorCaptured:Y,serverPrefetch:N,expose:B,inheritAttrs:te,components:Ce,directives:Je,filters:_r}=t;if(p&&Wi(p,s,null),i)for(const ee in i){const q=i[ee];R(q)&&(s[ee]=q.bind(r))}if(o){const ee=o.call(r,r);V(ee)&&(e.data=is(ee))}if(Nr=!0,n)for(const ee in n){const q=n[ee],et=R(q)?q.bind(r,r):R(q.get)?q.get.bind(r,r):Pe,Lt=!R(q)&&R(q.set)?q.set.bind(r):Pe,tt=$e({get:et,set:Lt});Object.defineProperty(s,ee,{enumerable:!0,configurable:!0,get:()=>tt.value,set:He=>tt.value=He})}if(a)for(const ee in a)Do(a[ee],s,r,ee);if(l){const ee=R(l)?l.call(r):l;Reflect.ownKeys(ee).forEach(q=>{ni(q,ee[q])})}u&&As(u,e,"c");function pe(ee,q){A(q)?q.forEach(et=>ee(et.bind(r))):q&&ee(q.bind(r))}if(pe(hi,d),pe(jr,v),pe(mi,$),pe(xi,I),pe(di,C),pe(gi,F),pe(zi,Y),pe(_i,U),pe(yi,k),pe(vi,T),pe(nr,H),pe($i,N),A(B))if(B.length){const ee=e.exposed||(e.exposed={});B.forEach(q=>{Object.defineProperty(ee,q,{get:()=>r[q],set:et=>r[q]=et,enumerable:!0})})}else e.exposed||(e.exposed={});D&&e.render===Pe&&(e.render=D),te!=null&&(e.inheritAttrs=te),Ce&&(e.components=Ce),Je&&(e.directives=Je),N&&Ro(e)}function Wi(e,t,r=Pe){A(e)&&(e=Br(e));for(const s in e){const o=e[s];let n;V(o)?"default"in o?n=Jt(o.from||s,o.default,!0):n=Jt(o.from||s):n=Jt(o),ue(n)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>n.value,set:i=>n.value=i}):t[s]=n}}function As(e,t,r){Ye(A(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,r)}function Do(e,t,r,s){let o=s.includes(".")?Fo(r,s):()=>r[s];if(re(e)){const n=t[e];R(n)&&Or(o,n)}else if(R(e))Or(o,e.bind(r));else if(V(e))if(A(e))e.forEach(n=>Do(n,t,r,s));else{const n=R(e.handler)?e.handler.bind(r):t[e.handler];R(n)&&Or(o,n,e)}}function jo(e){const t=e.type,{mixins:r,extends:s}=t,{mixins:o,optionsCache:n,config:{optionMergeStrategies:i}}=e.appContext,a=n.get(t);let l;return a?l=a:!o.length&&!r&&!s?l=t:(l={},o.length&&o.forEach(p=>ir(l,p,i,!0)),ir(l,t,i)),V(t)&&n.set(t,l),l}function ir(e,t,r,s=!1){const{mixins:o,extends:n}=t;n&&ir(e,n,r,!0),o&&o.forEach(i=>ir(e,i,r,!0));for(const i in t)if(!(s&&i==="expose")){const a=Ti[i]||r&&r[i];e[i]=a?a(e[i],t[i]):t[i]}return e}const Ti={data:Fs,props:Ms,emits:Ms,methods:St,computed:St,beforeCreate:de,created:de,beforeMount:de,mounted:de,beforeUpdate:de,updated:de,beforeDestroy:de,beforeUnmount:de,destroyed:de,unmounted:de,activated:de,deactivated:de,errorCaptured:de,serverPrefetch:de,components:St,directives:St,watch:Ai,provide:Fs,inject:Ei};function Fs(e,t){return t?e?function(){return ae(R(e)?e.call(this,this):e,R(t)?t.call(this,this):t)}:t:e}function Ei(e,t){return St(Br(e),Br(t))}function Br(e){if(A(e)){const t={};for(let r=0;r<e.length;r++)t[e[r]]=e[r];return t}return e}function de(e,t){return e?[...new Set([].concat(e,t))]:t}function St(e,t){return e?ae(Object.create(null),e,t):t}function Ms(e,t){return e?A(e)&&A(t)?[...new Set([...e,...t])]:ae(Object.create(null),Es(e),Es(t??{})):t}function Ai(e,t){if(!e)return t;if(!t)return e;const r=ae(Object.create(null),e);for(const s in t)r[s]=de(e[s],t[s]);return r}function Lo(){return{app:null,config:{isNativeTag:oo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Fi=0;function Mi(e,t){return function(s,o=null){R(s)||(s=ae({},s)),o!=null&&!V(o)&&(o=null);const n=Lo(),i=new WeakSet,a=[];let l=!1;const p=n.app={_uid:Fi++,_component:s,_props:o,_container:null,_context:n,_instance:null,version:da,get config(){return n.config},set config(u){},use(u,...d){return i.has(u)||(u&&R(u.install)?(i.add(u),u.install(p,...d)):R(u)&&(i.add(u),u(p,...d))),p},mixin(u){return n.mixins.includes(u)||n.mixins.push(u),p},component(u,d){return d?(n.components[u]=d,p):n.components[u]},directive(u,d){return d?(n.directives[u]=d,p):n.directives[u]},mount(u,d,v){if(!l){const $=p._ceVNode||Q(s,o);return $.appContext=n,v===!0?v="svg":v===!1&&(v=void 0),e($,u,v),l=!0,p._container=u,u.__vue_app__=p,yr($.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Ye(a,p._instance,16),e(null,p._container),delete p._container.__vue_app__)},provide(u,d){return n.provides[u]=d,p},runWithContext(u){const d=mt;mt=p;try{return u()}finally{mt=d}}};return p}}let mt=null;const Ri=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${he(t)}Modifiers`]||e[`${lt(t)}Modifiers`];function Ii(e,t,...r){if(e.isUnmounted)return;const s=e.vnode.props||G;let o=r;const n=t.startsWith("update:"),i=n&&Ri(s,t.slice(7));i&&(i.trim&&(o=r.map(u=>re(u)?u.trim():u)),i.number&&(o=r.map(Qr)));let a,l=s[a=wr(t)]||s[a=wr(he(t))];!l&&n&&(l=s[a=wr(lt(t))]),l&&Ye(l,e,6,o);const p=s[a+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Ye(p,e,6,o)}}const Pi=new WeakMap;function No(e,t,r=!1){const s=r?Pi:t.emitsCache,o=s.get(e);if(o!==void 0)return o;const n=e.emits;let i={},a=!1;if(!R(e)){const l=p=>{const u=No(p,t,!0);u&&(a=!0,ae(i,u))};!r&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!n&&!a?(V(e)&&s.set(e,null),null):(A(n)?n.forEach(l=>i[l]=null):ae(i,n),V(e)&&s.set(e,i),i)}function vr(e,t){return!e||!fr(t)?!1:(t=t.slice(2).replace(/Once$/,""),L(e,t[0].toLowerCase()+t.slice(1))||L(e,lt(t))||L(e,t))}function Rs(e){const{type:t,vnode:r,proxy:s,withProxy:o,propsOptions:[n],slots:i,attrs:a,emit:l,render:p,renderCache:u,props:d,data:v,setupState:$,ctx:I,inheritAttrs:C}=e,F=rr(e);let M,T;try{if(r.shapeFlag&4){const H=o||s,D=H;M=Re(p.call(D,H,u,d,$,v,I)),T=a}else{const H=t;M=Re(H.length>1?H(d,{attrs:a,slots:i,emit:l}):H(d,null)),T=t.props?a:Yi(a)}}catch(H){Et.length=0,mr(H,e,1),M=Q(Ge)}let P=M;if(T&&C!==!1){const H=Object.keys(T),{shapeFlag:D}=P;H.length&&D&7&&(n&&H.some(ur)&&(T=Xi(T,n)),P=vt(P,T,!1,!0))}return r.dirs&&(P=vt(P,null,!1,!0),P.dirs=P.dirs?P.dirs.concat(r.dirs):r.dirs),r.transition&&us(P,r.transition),M=P,rr(F),M}const Yi=e=>{let t;for(const r in e)(r==="class"||r==="style"||fr(r))&&((t||(t={}))[r]=e[r]);return t},Xi=(e,t)=>{const r={};for(const s in e)(!ur(s)||!(s.slice(9)in t))&&(r[s]=e[s]);return r};function Di(e,t,r){const{props:s,children:o,component:n}=e,{props:i,children:a,patchFlag:l}=t,p=n.emitsOptions;if(t.dirs||t.transition)return!0;if(r&&l>=0){if(l&1024)return!0;if(l&16)return s?Is(s,i,p):!!i;if(l&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const v=u[d];if(Bo(i,s,v)&&!vr(p,v))return!0}}}else return(o||a)&&(!a||!a.$stable)?!0:s===i?!1:s?i?Is(s,i,p):!0:!!i;return!1}function Is(e,t,r){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let o=0;o<s.length;o++){const n=s[o];if(Bo(t,e,n)&&!vr(r,n))return!0}return!1}function Bo(e,t,r){const s=e[r],o=t[r];return r==="style"&&V(s)&&V(o)?!es(s,o):s!==o}function ji({vnode:e,parent:t,suspense:r},s){for(;t;){const o=t.subTree;if(o.suspense&&o.suspense.activeBranch===e&&(o.suspense.vnode.el=o.el=s,e=o),o===e)(e=t.vnode).el=s,t=t.parent;else break}r&&r.activeBranch===e&&(r.vnode.el=s)}const Vo={},Uo=()=>Object.create(Vo),Ko=e=>Object.getPrototypeOf(e)===Vo;function Li(e,t,r,s=!1){const o={},n=Uo();e.propsDefaults=Object.create(null),Go(e,t,o,n);for(const i in e.propsOptions[0])i in o||(o[i]=void 0);r?e.props=s?o:Vn(o):e.type.props?e.props=o:e.props=n,e.attrs=n}function Ni(e,t,r,s){const{props:o,attrs:n,vnode:{patchFlag:i}}=e,a=j(o),[l]=e.propsOptions;let p=!1;if((s||i>0)&&!(i&16)){if(i&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let v=u[d];if(vr(e.emitsOptions,v))continue;const $=t[v];if(l)if(L(n,v))$!==n[v]&&(n[v]=$,p=!0);else{const I=he(v);o[I]=Vr(l,a,I,$,e,!1)}else $!==n[v]&&(n[v]=$,p=!0)}}}else{Go(e,t,o,n)&&(p=!0);let u;for(const d in a)(!t||!L(t,d)&&((u=lt(d))===d||!L(t,u)))&&(l?r&&(r[d]!==void 0||r[u]!==void 0)&&(o[d]=Vr(l,a,d,void 0,e,!0)):delete o[d]);if(n!==a)for(const d in n)(!t||!L(t,d))&&(delete n[d],p=!0)}p&&Ne(e.attrs,"set","")}function Go(e,t,r,s){const[o,n]=e.propsOptions;let i=!1,a;if(t)for(let l in t){if(Ct(l))continue;const p=t[l];let u;o&&L(o,u=he(l))?!n||!n.includes(u)?r[u]=p:(a||(a={}))[u]=p:vr(e.emitsOptions,l)||(!(l in s)||p!==s[l])&&(s[l]=p,i=!0)}if(n){const l=j(r),p=a||G;for(let u=0;u<n.length;u++){const d=n[u];r[d]=Vr(o,l,d,p[d],e,!L(p,d))}}return i}function Vr(e,t,r,s,o,n){const i=e[r];if(i!=null){const a=L(i,"default");if(a&&s===void 0){const l=i.default;if(i.type!==Function&&!i.skipFactory&&R(l)){const{propsDefaults:p}=o;if(r in p)s=p[r];else{const u=jt(o);s=p[r]=l.call(null,t),u()}}else s=l;o.ce&&o.ce._setProp(r,s)}i[0]&&(n&&!a?s=!1:i[1]&&(s===""||s===lt(r))&&(s=!0))}return s}const Bi=new WeakMap;function qo(e,t,r=!1){const s=r?Bi:t.propsCache,o=s.get(e);if(o)return o;const n=e.props,i={},a=[];let l=!1;if(!R(e)){const u=d=>{l=!0;const[v,$]=qo(d,t,!0);ae(i,v),$&&a.push(...$)};!r&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!n&&!l)return V(e)&&s.set(e,dt),dt;if(A(n))for(let u=0;u<n.length;u++){const d=he(n[u]);Ps(d)&&(i[d]=G)}else if(n)for(const u in n){const d=he(u);if(Ps(d)){const v=n[u],$=i[d]=A(v)||R(v)?{type:v}:ae({},v),I=$.type;let C=!1,F=!0;if(A(I))for(let M=0;M<I.length;++M){const T=I[M],P=R(T)&&T.name;if(P==="Boolean"){C=!0;break}else P==="String"&&(F=!1)}else C=R(I)&&I.name==="Boolean";$[0]=C,$[1]=F,(C||L($,"default"))&&a.push(d)}}const p=[i,a];return V(e)&&s.set(e,p),p}function Ps(e){return e[0]!=="$"&&!Ct(e)}const ps=e=>e==="_"||e==="_ctx"||e==="$stable",ds=e=>A(e)?e.map(Re):[Re(e)],Vi=(e,t,r)=>{if(t._n)return t;const s=pt((...o)=>ds(t(...o)),r);return s._c=!1,s},Jo=(e,t,r)=>{const s=e._ctx;for(const o in e){if(ps(o))continue;const n=e[o];if(R(n))t[o]=Vi(o,n,s);else if(n!=null){const i=ds(n);t[o]=()=>i}}},Zo=(e,t)=>{const r=ds(t);e.slots.default=()=>r},Qo=(e,t,r)=>{for(const s in t)(r||!ps(s))&&(e[s]=t[s])},Ui=(e,t,r)=>{const s=e.slots=Uo();if(e.vnode.shapeFlag&32){const o=t._;o?(Qo(s,t,r),r&&co(s,"_",o,!0)):Jo(t,s)}else t&&Zo(e,t)},Ki=(e,t,r)=>{const{vnode:s,slots:o}=e;let n=!0,i=G;if(s.shapeFlag&32){const a=t._;a?r&&a===1?n=!1:Qo(o,t,r):(n=!t.$stable,Jo(t,o)),i=t}else t&&(Zo(e,t),i={default:1});if(n)for(const a in o)!ps(a)&&i[a]==null&&delete o[a]},me=Qi;function Gi(e){return qi(e)}function qi(e,t){const r=gr();r.__VUE__=!0;const{insert:s,remove:o,patchProp:n,createElement:i,createText:a,createComment:l,setText:p,setElementText:u,parentNode:d,nextSibling:v,setScopeId:$=Pe,insertStaticContent:I}=e,C=(c,f,g,x=null,b=null,h=null,z=void 0,_=null,y=!!f.dynamicChildren)=>{if(c===f)return;c&&!wt(c,f)&&(x=Nt(c),He(c,b,h,!0),c=null),f.patchFlag===-2&&(y=!1,f.dynamicChildren=null);const{type:m,ref:W,shapeFlag:w}=f;switch(m){case $r:F(c,f,g,x);break;case Ge:M(c,f,g,x);break;case Er:c==null&&T(f,g,x,z);break;case ce:Ce(c,f,g,x,b,h,z,_,y);break;default:w&1?D(c,f,g,x,b,h,z,_,y):w&6?Je(c,f,g,x,b,h,z,_,y):(w&64||w&128)&&m.process(c,f,g,x,b,h,z,_,y,yt)}W!=null&&b?Wt(W,c&&c.ref,h,f||c,!f):W==null&&c&&c.ref!=null&&Wt(c.ref,null,h,c,!0)},F=(c,f,g,x)=>{if(c==null)s(f.el=a(f.children),g,x);else{const b=f.el=c.el;f.children!==c.children&&p(b,f.children)}},M=(c,f,g,x)=>{c==null?s(f.el=l(f.children||""),g,x):f.el=c.el},T=(c,f,g,x)=>{[c.el,c.anchor]=I(c.children,f,g,x,c.el,c.anchor)},P=({el:c,anchor:f},g,x)=>{let b;for(;c&&c!==f;)b=v(c),s(c,g,x),c=b;s(f,g,x)},H=({el:c,anchor:f})=>{let g;for(;c&&c!==f;)g=v(c),o(c),c=g;o(f)},D=(c,f,g,x,b,h,z,_,y)=>{if(f.type==="svg"?z="svg":f.type==="math"&&(z="mathml"),c==null)U(f,g,x,b,h,z,_,y);else{const m=c.el&&c.el._isVueCE?c.el:null;try{m&&m._beginPatch(),N(c,f,b,h,z,_,y)}finally{m&&m._endPatch()}}},U=(c,f,g,x,b,h,z,_)=>{let y,m;const{props:W,shapeFlag:w,transition:O,dirs:E}=c;if(y=c.el=i(c.type,h,W&&W.is,W),w&8?u(y,c.children):w&16&&Y(c.children,y,null,x,b,Tr(c,h),z,_),E&&rt(c,null,x,"created"),k(y,c,c.scopeId,z,x),W){for(const K in W)K!=="value"&&!Ct(K)&&n(y,K,null,W[K],h,x);"value"in W&&n(y,"value",null,W.value,h),(m=W.onVnodeBeforeMount)&&Ee(m,x,c)}E&&rt(c,null,x,"beforeMount");const X=Ji(b,O);X&&O.beforeEnter(y),s(y,f,g),((m=W&&W.onVnodeMounted)||X||E)&&me(()=>{try{m&&Ee(m,x,c),X&&O.enter(y),E&&rt(c,null,x,"mounted")}finally{}},b)},k=(c,f,g,x,b)=>{if(g&&$(c,g),x)for(let h=0;h<x.length;h++)$(c,x[h]);if(b){let h=b.subTree;if(f===h||sn(h.type)&&(h.ssContent===f||h.ssFallback===f)){const z=b.vnode;k(c,z,z.scopeId,z.slotScopeIds,b.parent)}}},Y=(c,f,g,x,b,h,z,_,y=0)=>{for(let m=y;m<c.length;m++){const W=c[m]=_?Le(c[m]):Re(c[m]);C(null,W,f,g,x,b,h,z,_)}},N=(c,f,g,x,b,h,z)=>{const _=f.el=c.el;let{patchFlag:y,dynamicChildren:m,dirs:W}=f;y|=c.patchFlag&16;const w=c.props||G,O=f.props||G;let E;if(g&&st(g,!1),(E=O.onVnodeBeforeUpdate)&&Ee(E,g,f,c),W&&rt(f,c,g,"beforeUpdate"),g&&st(g,!0),(w.innerHTML&&O.innerHTML==null||w.textContent&&O.textContent==null)&&u(_,""),m?B(c.dynamicChildren,m,_,g,x,Tr(f,b),h):z||q(c,f,_,null,g,x,Tr(f,b),h,!1),y>0){if(y&16)te(_,w,O,g,b);else if(y&2&&w.class!==O.class&&n(_,"class",null,O.class,b),y&4&&n(_,"style",w.style,O.style,b),y&8){const X=f.dynamicProps;for(let K=0;K<X.length;K++){const J=X[K],se=w[J],ne=O[J];(ne!==se||J==="value")&&n(_,J,se,ne,b,g)}}y&1&&c.children!==f.children&&u(_,f.children)}else!z&&m==null&&te(_,w,O,g,b);((E=O.onVnodeUpdated)||W)&&me(()=>{E&&Ee(E,g,f,c),W&&rt(f,c,g,"updated")},x)},B=(c,f,g,x,b,h,z)=>{for(let _=0;_<f.length;_++){const y=c[_],m=f[_],W=y.el&&(y.type===ce||!wt(y,m)||y.shapeFlag&198)?d(y.el):g;C(y,m,W,null,x,b,h,z,!0)}},te=(c,f,g,x,b)=>{if(f!==g){if(f!==G)for(const h in f)!Ct(h)&&!(h in g)&&n(c,h,f[h],null,b,x);for(const h in g){if(Ct(h))continue;const z=g[h],_=f[h];z!==_&&h!=="value"&&n(c,h,_,z,b,x)}"value"in g&&n(c,"value",f.value,g.value,b)}},Ce=(c,f,g,x,b,h,z,_,y)=>{const m=f.el=c?c.el:a(""),W=f.anchor=c?c.anchor:a("");let{patchFlag:w,dynamicChildren:O,slotScopeIds:E}=f;E&&(_=_?_.concat(E):E),c==null?(s(m,g,x),s(W,g,x),Y(f.children||[],g,W,b,h,z,_,y)):w>0&&w&64&&O&&c.dynamicChildren&&c.dynamicChildren.length===O.length?(B(c.dynamicChildren,O,g,b,h,z,_),(f.key!=null||b&&f===b.subTree)&&en(c,f,!0)):q(c,f,g,W,b,h,z,_,y)},Je=(c,f,g,x,b,h,z,_,y)=>{f.slotScopeIds=_,c==null?f.shapeFlag&512?b.ctx.activate(f,g,x,z,y):_r(f,g,x,b,h,z,y):hs(c,f,y)},_r=(c,f,g,x,b,h,z)=>{const _=c.component=ia(c,x,b);if(Io(c)&&(_.ctx.renderer=yt),aa(_,!1,z),_.asyncDep){if(b&&b.registerDep(_,pe,z),!c.el){const y=_.subTree=Q(Ge);M(null,y,f,g),c.placeholder=y.el}}else pe(_,c,f,g,b,h,z)},hs=(c,f,g)=>{const x=f.component=c.component;if(Di(c,f,g))if(x.asyncDep&&!x.asyncResolved){ee(x,f,g);return}else x.next=f,x.update();else f.el=c.el,x.vnode=f},pe=(c,f,g,x,b,h,z)=>{const _=()=>{if(c.isMounted){let{next:w,bu:O,u:E,parent:X,vnode:K}=c;{const We=tn(c);if(We){w&&(w.el=K.el,ee(c,w,z)),We.asyncDep.then(()=>{me(()=>{c.isUnmounted||m()},b)});return}}let J=w,se;st(c,!1),w?(w.el=K.el,ee(c,w,z)):w=K,O&&qt(O),(se=w.props&&w.props.onVnodeBeforeUpdate)&&Ee(se,X,w,K),st(c,!0);const ne=Rs(c),Oe=c.subTree;c.subTree=ne,C(Oe,ne,d(Oe.el),Nt(Oe),c,b,h),w.el=ne.el,J===null&&ji(c,ne.el),E&&me(E,b),(se=w.props&&w.props.onVnodeUpdated)&&me(()=>Ee(se,X,w,K),b)}else{let w;const{el:O,props:E}=f,{bm:X,m:K,parent:J,root:se,type:ne}=c,Oe=ht(f);st(c,!1),X&&qt(X),!Oe&&(w=E&&E.onVnodeBeforeMount)&&Ee(w,J,f),st(c,!0);{se.ce&&se.ce._hasShadowRoot()&&se.ce._injectChildStyle(ne,c.parent?c.parent.type:void 0);const We=c.subTree=Rs(c);C(null,We,g,x,c,b,h),f.el=We.el}if(K&&me(K,b),!Oe&&(w=E&&E.onVnodeMounted)){const We=f;me(()=>Ee(w,J,We),b)}(f.shapeFlag&256||J&&ht(J.vnode)&&J.vnode.shapeFlag&256)&&c.a&&me(c.a,b),c.isMounted=!0,f=g=x=null}};c.scope.on();const y=c.effect=new go(_);c.scope.off();const m=c.update=y.run.bind(y),W=c.job=y.runIfDirty.bind(y);W.i=c,W.id=c.uid,y.scheduler=()=>cs(W),st(c,!0),m()},ee=(c,f,g)=>{f.component=c;const x=c.vnode.props;c.vnode=f,c.next=null,Ni(c,f.props,x,g),Ki(c,f.children,g),Ve(),ks(c),Ue()},q=(c,f,g,x,b,h,z,_,y=!1)=>{const m=c&&c.children,W=c?c.shapeFlag:0,w=f.children,{patchFlag:O,shapeFlag:E}=f;if(O>0){if(O&128){Lt(m,w,g,x,b,h,z,_,y);return}else if(O&256){et(m,w,g,x,b,h,z,_,y);return}}E&8?(W&16&&$t(m,b,h),w!==m&&u(g,w)):W&16?E&16?Lt(m,w,g,x,b,h,z,_,y):$t(m,b,h,!0):(W&8&&u(g,""),E&16&&Y(w,g,x,b,h,z,_,y))},et=(c,f,g,x,b,h,z,_,y)=>{c=c||dt,f=f||dt;const m=c.length,W=f.length,w=Math.min(m,W);let O;for(O=0;O<w;O++){const E=f[O]=y?Le(f[O]):Re(f[O]);C(c[O],E,g,null,b,h,z,_,y)}m>W?$t(c,b,h,!0,!1,w):Y(f,g,x,b,h,z,_,y,w)},Lt=(c,f,g,x,b,h,z,_,y)=>{let m=0;const W=f.length;let w=c.length-1,O=W-1;for(;m<=w&&m<=O;){const E=c[m],X=f[m]=y?Le(f[m]):Re(f[m]);if(wt(E,X))C(E,X,g,null,b,h,z,_,y);else break;m++}for(;m<=w&&m<=O;){const E=c[w],X=f[O]=y?Le(f[O]):Re(f[O]);if(wt(E,X))C(E,X,g,null,b,h,z,_,y);else break;w--,O--}if(m>w){if(m<=O){const E=O+1,X=E<W?f[E].el:x;for(;m<=O;)C(null,f[m]=y?Le(f[m]):Re(f[m]),g,X,b,h,z,_,y),m++}}else if(m>O)for(;m<=w;)He(c[m],b,h,!0),m++;else{const E=m,X=m,K=new Map;for(m=X;m<=O;m++){const ve=f[m]=y?Le(f[m]):Re(f[m]);ve.key!=null&&K.set(ve.key,m)}let J,se=0;const ne=O-X+1;let Oe=!1,We=0;const _t=new Array(ne);for(m=0;m<ne;m++)_t[m]=0;for(m=E;m<=w;m++){const ve=c[m];if(se>=ne){He(ve,b,h,!0);continue}let Te;if(ve.key!=null)Te=K.get(ve.key);else for(J=X;J<=O;J++)if(_t[J-X]===0&&wt(ve,f[J])){Te=J;break}Te===void 0?He(ve,b,h,!0):(_t[Te-X]=m+1,Te>=We?We=Te:Oe=!0,C(ve,f[Te],g,null,b,h,z,_,y),se++)}const vs=Oe?Zi(_t):dt;for(J=vs.length-1,m=ne-1;m>=0;m--){const ve=X+m,Te=f[ve],$s=f[ve+1],ys=ve+1<W?$s.el||rn($s):x;_t[m]===0?C(null,Te,g,ys,b,h,z,_,y):Oe&&(J<0||m!==vs[J]?tt(Te,g,ys,2):J--)}}},tt=(c,f,g,x,b=null)=>{const{el:h,type:z,transition:_,children:y,shapeFlag:m}=c;if(m&6){tt(c.component.subTree,f,g,x);return}if(m&128){c.suspense.move(f,g,x);return}if(m&64){z.move(c,f,g,yt);return}if(z===ce){s(h,f,g);for(let w=0;w<y.length;w++)tt(y[w],f,g,x);s(c.anchor,f,g);return}if(z===Er){P(c,f,g);return}if(x!==2&&m&1&&_)if(x===0)_.beforeEnter(h),s(h,f,g),me(()=>_.enter(h),b);else{const{leave:w,delayLeave:O,afterLeave:E}=_,X=()=>{c.ctx.isUnmounted?o(h):s(h,f,g)},K=()=>{h._isLeaving&&h[pi](!0),w(h,()=>{X(),E&&E()})};O?O(h,X,K):K()}else s(h,f,g)},He=(c,f,g,x=!1,b=!1)=>{const{type:h,props:z,ref:_,children:y,dynamicChildren:m,shapeFlag:W,patchFlag:w,dirs:O,cacheIndex:E,memo:X}=c;if(w===-2&&(b=!1),_!=null&&(Ve(),Wt(_,null,g,c,!0),Ue()),E!=null&&(f.renderCache[E]=void 0),W&256){f.ctx.deactivate(c);return}const K=W&1&&O,J=!ht(c);let se;if(J&&(se=z&&z.onVnodeBeforeUnmount)&&Ee(se,f,c),W&6)gn(c.component,g,x);else{if(W&128){c.suspense.unmount(g,x);return}K&&rt(c,null,f,"beforeUnmount"),W&64?c.type.remove(c,f,g,yt,x):m&&!m.hasOnce&&(h!==ce||w>0&&w&64)?$t(m,f,g,!1,!0):(h===ce&&w&384||!b&&W&16)&&$t(y,f,g),x&&ms(c)}const ne=X!=null&&E==null;(J&&(se=z&&z.onVnodeUnmounted)||K||ne)&&me(()=>{se&&Ee(se,f,c),K&&rt(c,null,f,"unmounted"),ne&&(c.el=null)},g)},ms=c=>{const{type:f,el:g,anchor:x,transition:b}=c;if(f===ce){dn(g,x);return}if(f===Er){H(c);return}const h=()=>{o(g),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(c.shapeFlag&1&&b&&!b.persisted){const{leave:z,delayLeave:_}=b,y=()=>z(g,h);_?_(c.el,h,y):y()}else h()},dn=(c,f)=>{let g;for(;c!==f;)g=v(c),o(c),c=g;o(f)},gn=(c,f,g)=>{const{bum:x,scope:b,job:h,subTree:z,um:_,m:y,a:m}=c;Ys(y),Ys(m),x&&qt(x),b.stop(),h&&(h.flags|=8,He(z,c,f,g)),_&&me(_,f),me(()=>{c.isUnmounted=!0},f)},$t=(c,f,g,x=!1,b=!1,h=0)=>{for(let z=h;z<c.length;z++)He(c[z],f,g,x,b)},Nt=c=>{if(c.shapeFlag&6)return Nt(c.component.subTree);if(c.shapeFlag&128)return c.suspense.next();const f=v(c.anchor||c.el),g=f&&f[fi];return g?v(g):f};let zr=!1;const xs=(c,f,g)=>{let x;c==null?f._vnode&&(He(f._vnode,null,null,!0),x=f._vnode.component):C(f._vnode||null,c,f,null,null,null,g),f._vnode=c,zr||(zr=!0,ks(x),To(),zr=!1)},yt={p:C,um:He,m:tt,r:ms,mt:_r,mc:Y,pc:q,pbc:B,n:Nt,o:e};return{render:xs,hydrate:void 0,createApp:Mi(xs)}}function Tr({type:e,props:t},r){return r==="svg"&&e==="foreignObject"||r==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:r}function st({effect:e,job:t},r){r?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Ji(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function en(e,t,r=!1){const s=e.children,o=t.children;if(A(s)&&A(o))for(let n=0;n<s.length;n++){const i=s[n];let a=o[n];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=o[n]=Le(o[n]),a.el=i.el),!r&&a.patchFlag!==-2&&en(i,a)),a.type===$r&&(a.patchFlag===-1&&(a=o[n]=Le(a)),a.el=i.el),a.type===Ge&&!a.el&&(a.el=i.el)}}function Zi(e){const t=e.slice(),r=[0];let s,o,n,i,a;const l=e.length;for(s=0;s<l;s++){const p=e[s];if(p!==0){if(o=r[r.length-1],e[o]<p){t[s]=o,r.push(s);continue}for(n=0,i=r.length-1;n<i;)a=n+i>>1,e[r[a]]<p?n=a+1:i=a;p<e[r[n]]&&(n>0&&(t[s]=r[n-1]),r[n]=s)}}for(n=r.length,i=r[n-1];n-- >0;)r[n]=i,i=t[i];return r}function tn(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:tn(t)}function Ys(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function rn(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?rn(t.subTree):null}const sn=e=>e.__isSuspense;function Qi(e,t){t&&t.pendingBranch?A(e)?t.effects.push(...e):t.effects.push(e):oi(e)}const ce=Symbol.for("v-fgt"),$r=Symbol.for("v-txt"),Ge=Symbol.for("v-cmt"),Er=Symbol.for("v-stc"),Et=[];let ye=null;function ge(e=!1){Et.push(ye=e?null:[])}function ea(){Et.pop(),ye=Et[Et.length-1]||null}let Rt=1;function ar(e,t=!1){Rt+=e,e<0&&ye&&t&&(ye.hasOnce=!0)}function on(e){return e.dynamicChildren=Rt>0?ye||dt:null,ea(),Rt>0&&ye&&ye.push(e),e}function kt(e,t,r,s,o,n){return on(S(e,t,r,s,o,n,!0))}function Me(e,t,r,s,o){return on(Q(e,t,r,s,o,!0))}function It(e){return e?e.__v_isVNode===!0:!1}function wt(e,t){return e.type===t.type&&e.key===t.key}const nn=({key:e})=>e??null,Zt=({ref:e,ref_key:t,ref_for:r})=>(typeof e=="number"&&(e=""+e),e!=null?re(e)||ue(e)||R(e)?{i:ie,r:e,k:t,f:!!r}:e:null);function S(e,t=null,r=null,s=0,o=null,n=e===ce?0:1,i=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&nn(t),ref:t&&Zt(t),scopeId:Ao,slotScopeIds:null,children:r,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:n,patchFlag:s,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:ie};return a?(gs(l,r),n&128&&e.normalize(l)):r&&(l.shapeFlag|=re(r)?8:16),Rt>0&&!i&&ye&&(l.patchFlag>0||n&6)&&l.patchFlag!==32&&ye.push(l),l}const Q=ta;function ta(e,t=null,r=null,s=0,o=null,n=!1){if((!e||e===Yo)&&(e=Ge),It(e)){const a=vt(e,t,!0);return r&&gs(a,r),Rt>0&&!n&&ye&&(a.shapeFlag&6?ye[ye.indexOf(e)]=a:ye.push(a)),a.patchFlag=-2,a}if(pa(e)&&(e=e.__vccOpts),t){t=ra(t);let{class:a,style:l}=t;a&&!re(a)&&(t.class=br(a)),V(l)&&(ls(l)&&!A(l)&&(l=ae({},l)),t.style=Xt(l))}const i=re(e)?1:sn(e)?128:ui(e)?64:V(e)?4:R(e)?2:0;return S(e,t,r,s,o,i,n,!0)}function ra(e){return e?ls(e)||Ko(e)?ae({},e):e:null}function vt(e,t,r=!1,s=!1){const{props:o,ref:n,patchFlag:i,children:a,transition:l}=e,p=t?sa(o||{},t):o,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:p,key:p&&nn(p),ref:t&&t.ref?r&&n?A(n)?n.concat(Zt(t)):[n,Zt(t)]:Zt(t):n,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ce?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&vt(e.ssContent),ssFallback:e.ssFallback&&vt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&s&&us(u,l.clone(u)),u}function lr(e=" ",t=0){return Q($r,null,e,t)}function an(e="",t=!1){return t?(ge(),Me(Ge,null,e)):Q(Ge,null,e)}function Re(e){return e==null||typeof e=="boolean"?Q(Ge):A(e)?Q(ce,null,e.slice()):It(e)?Le(e):Q($r,null,String(e))}function Le(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:vt(e)}function gs(e,t){let r=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(A(t))r=16;else if(typeof t=="object")if(s&65){const o=t.default;o&&(o._c&&(o._d=!1),gs(e,o()),o._c&&(o._d=!0));return}else{r=32;const o=t._;!o&&!Ko(t)?t._ctx=ie:o===3&&ie&&(ie.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else R(t)?(t={default:t,_ctx:ie},r=32):(t=String(t),s&64?(r=16,t=[lr(t)]):r=8);e.children=t,e.shapeFlag|=r}function sa(...e){const t={};for(let r=0;r<e.length;r++){const s=e[r];for(const o in s)if(o==="class")t.class!==s.class&&(t.class=br([t.class,s.class]));else if(o==="style")t.style=Xt([t.style,s.style]);else if(fr(o)){const n=t[o],i=s[o];i&&n!==i&&!(A(n)&&n.includes(i))?t[o]=n?[].concat(n,i):i:i==null&&n==null&&!ur(o)&&(t[o]=i)}else o!==""&&(t[o]=s[o])}return t}function Ee(e,t,r,s=null){Ye(e,t,7,[r,s])}const oa=Lo();let na=0;function ia(e,t,r){const s=e.type,o=(t?t.appContext:e.appContext)||oa,n={uid:na++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new kn(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:qo(s,o),emitsOptions:No(s,o),emit:null,emitted:null,propsDefaults:G,inheritAttrs:s.inheritAttrs,ctx:G,data:G,props:G,attrs:G,slots:G,refs:G,setupState:G,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return n.ctx={_:n},n.root=t?t.root:n,n.emit=Ii.bind(null,n),e.ce&&e.ce(n),n}let fe=null;const ln=()=>fe||ie;let cr,Ur;{const e=gr(),t=(r,s)=>{let o;return(o=e[r])||(o=e[r]=[]),o.push(s),n=>{o.length>1?o.forEach(i=>i(n)):o[0](n)}};cr=t("__VUE_INSTANCE_SETTERS__",r=>fe=r),Ur=t("__VUE_SSR_SETTERS__",r=>Pt=r)}const jt=e=>{const t=fe;return cr(e),e.scope.on(),()=>{e.scope.off(),cr(t)}},Xs=()=>{fe&&fe.scope.off(),cr(null)};function cn(e){return e.vnode.shapeFlag&4}let Pt=!1;function aa(e,t=!1,r=!1){t&&Ur(t);const{props:s,children:o}=e.vnode,n=cn(e);Li(e,s,n,t),Ui(e,o,r||t);const i=n?la(e,t):void 0;return t&&Ur(!1),i}function la(e,t){const r=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Hi);const{setup:s}=r;if(s){Ve();const o=e.setupContext=s.length>1?fa(e):null,n=jt(e),i=Dt(s,e,0,[e.props,o]),a=io(i);if(Ue(),n(),(a||e.sp)&&!ht(e)&&Ro(e),a){if(i.then(Xs,Xs),t)return i.then(l=>{Ds(e,l)}).catch(l=>{mr(l,e,0)});e.asyncDep=i}else Ds(e,i)}else fn(e)}function Ds(e,t,r){R(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:V(t)&&(e.setupState=Ho(t)),fn(e)}function fn(e,t,r){const s=e.type;e.render||(e.render=s.render||Pe);{const o=jt(e);Ve();try{Oi(e)}finally{Ue(),o()}}}const ca={get(e,t){return le(e,"get",""),e[t]}};function fa(e){const t=r=>{e.exposed=r||{}};return{attrs:new Proxy(e.attrs,ca),slots:e.slots,emit:e.emit,expose:t}}function yr(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Ho(Un(e.exposed)),{get(t,r){if(r in t)return t[r];if(r in Tt)return Tt[r](e)},has(t,r){return r in t||r in Tt}})):e.proxy}function ua(e,t=!0){return R(e)?e.displayName||e.name:e.name||t&&e.__name}function pa(e){return R(e)&&"__vccOpts"in e}const $e=(e,t)=>Zn(e,t,Pt);function oe(e,t,r){try{ar(-1);const s=arguments.length;return s===2?V(t)&&!A(t)?It(t)?Q(e,null,[t]):Q(e,t):Q(e,null,t):(s>3?r=Array.prototype.slice.call(arguments,2):s===3&&It(r)&&(r=[r]),Q(e,t,r))}finally{ar(1)}}const da="3.5.32";/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Kr;const js=typeof window<"u"&&window.trustedTypes;if(js)try{Kr=js.createPolicy("vue",{createHTML:e=>e})}catch{}const un=Kr?e=>Kr.createHTML(e):e=>e,ga="http://www.w3.org/2000/svg",ba="http://www.w3.org/1998/Math/MathML",je=typeof document<"u"?document:null,Ls=je&&je.createElement("template"),ha={insert:(e,t,r)=>{t.insertBefore(e,r||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,r,s)=>{const o=t==="svg"?je.createElementNS(ga,e):t==="mathml"?je.createElementNS(ba,e):r?je.createElement(e,{is:r}):je.createElement(e);return e==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:e=>je.createTextNode(e),createComment:e=>je.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>je.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,r,s,o,n){const i=r?r.previousSibling:t.lastChild;if(o&&(o===n||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),r),!(o===n||!(o=o.nextSibling)););else{Ls.innerHTML=un(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const a=Ls.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,r)}return[i?i.nextSibling:t.firstChild,r?r.previousSibling:t.lastChild]}},ma=Symbol("_vtc");function xa(e,t,r){const s=e[ma];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):r?e.setAttribute("class",t):e.className=t}const Ns=Symbol("_vod"),va=Symbol("_vsh"),$a=Symbol(""),ya=/(?:^|;)\s*display\s*:/;function _a(e,t,r){const s=e.style,o=re(r);let n=!1;if(r&&!o){if(t)if(re(t))for(const i of t.split(";")){const a=i.slice(0,i.indexOf(":")).trim();r[a]==null&&Qt(s,a,"")}else for(const i in t)r[i]==null&&Qt(s,i,"");for(const i in r)i==="display"&&(n=!0),Qt(s,i,r[i])}else if(o){if(t!==r){const i=s[$a];i&&(r+=";"+i),s.cssText=r,n=ya.test(r)}}else t&&e.removeAttribute("style");Ns in e&&(e[Ns]=n?s.display:"",e[va]&&(s.display="none"))}const Bs=/\s*!important$/;function Qt(e,t,r){if(A(r))r.forEach(s=>Qt(e,t,s));else if(r==null&&(r=""),t.startsWith("--"))e.setProperty(t,r);else{const s=za(e,t);Bs.test(r)?e.setProperty(lt(s),r.replace(Bs,""),"important"):e[s]=r}}const Vs=["Webkit","Moz","ms"],Ar={};function za(e,t){const r=Ar[t];if(r)return r;let s=he(t);if(s!=="filter"&&s in e)return Ar[t]=s;s=dr(s);for(let o=0;o<Vs.length;o++){const n=Vs[o]+s;if(n in e)return Ar[t]=n}return t}const Us="http://www.w3.org/1999/xlink";function Ks(e,t,r,s,o,n=wn(t)){s&&t.startsWith("xlink:")?r==null?e.removeAttributeNS(Us,t.slice(6,t.length)):e.setAttributeNS(Us,t,r):r==null||n&&!fo(r)?e.removeAttribute(t):e.setAttribute(t,n?"":Se(r)?String(r):r)}function Gs(e,t,r,s,o){if(t==="innerHTML"||t==="textContent"){r!=null&&(e[t]=t==="innerHTML"?un(r):r);return}const n=e.tagName;if(t==="value"&&n!=="PROGRESS"&&!n.includes("-")){const a=n==="OPTION"?e.getAttribute("value")||"":e.value,l=r==null?e.type==="checkbox"?"on":"":String(r);(a!==l||!("_value"in e))&&(e.value=l),r==null&&e.removeAttribute(t),e._value=r;return}let i=!1;if(r===""||r==null){const a=typeof e[t];a==="boolean"?r=fo(r):r==null&&a==="string"?(r="",i=!0):a==="number"&&(r=0,i=!0)}try{e[t]=r}catch{}i&&e.removeAttribute(o||t)}function ut(e,t,r,s){e.addEventListener(t,r,s)}function wa(e,t,r,s){e.removeEventListener(t,r,s)}const qs=Symbol("_vei");function Sa(e,t,r,s,o=null){const n=e[qs]||(e[qs]={}),i=n[t];if(s&&i)i.value=s;else{const[a,l]=ka(t);if(s){const p=n[t]=Oa(s,o);ut(e,a,p,l)}else i&&(wa(e,a,i,l),n[t]=void 0)}}const Js=/(?:Once|Passive|Capture)$/;function ka(e){let t;if(Js.test(e)){t={};let s;for(;s=e.match(Js);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):lt(e.slice(2)),t]}let Fr=0;const Ca=Promise.resolve(),Ha=()=>Fr||(Ca.then(()=>Fr=0),Fr=Date.now());function Oa(e,t){const r=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=r.attached)return;Ye(Wa(s,r.value),t,5,[s])};return r.value=e,r.attached=Ha(),r}function Wa(e,t){if(A(t)){const r=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{r.call(e),e._stopped=!0},t.map(s=>o=>!o._stopped&&s&&s(o))}else return t}const Zs=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Ta=(e,t,r,s,o,n)=>{const i=o==="svg";t==="class"?xa(e,s,i):t==="style"?_a(e,r,s):fr(t)?ur(t)||Sa(e,t,r,s,n):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Ea(e,t,s,i))?(Gs(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Ks(e,t,s,i,n,t!=="value")):e._isVueCE&&(Aa(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!re(s)))?Gs(e,he(t),s,n,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Ks(e,t,s,i))};function Ea(e,t,r,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&Zs(t)&&R(r));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return Zs(t)&&re(r)?!1:t in e}function Aa(e,t){const r=e._def.props;if(!r)return!1;const s=he(t);return Array.isArray(r)?r.some(o=>he(o)===s):Object.keys(r).some(o=>he(o)===s)}const Qs=e=>{const t=e.props["onUpdate:modelValue"]||!1;return A(t)?r=>qt(t,r):t};function Fa(e){e.target.composing=!0}function eo(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Mr=Symbol("_assign");function to(e,t,r){return t&&(e=e.trim()),r&&(e=Qr(e)),e}const ro={created(e,{modifiers:{lazy:t,trim:r,number:s}},o){e[Mr]=Qs(o);const n=s||o.props&&o.props.type==="number";ut(e,t?"change":"input",i=>{i.target.composing||e[Mr](to(e.value,r,n))}),(r||n)&&ut(e,"change",()=>{e.value=to(e.value,r,n)}),t||(ut(e,"compositionstart",Fa),ut(e,"compositionend",eo),ut(e,"change",eo))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:r,modifiers:{lazy:s,trim:o,number:n}},i){if(e[Mr]=Qs(i),e.composing)return;const a=(n||e.type==="number")&&!/^0\d/.test(e.value)?Qr(e.value):e.value,l=t??"";if(a===l)return;const p=e.getRootNode();(p instanceof Document||p instanceof ShadowRoot)&&p.activeElement===e&&e.type!=="range"&&(s&&t===r||o&&e.value.trim()===l)||(e.value=l)}},Ma=ae({patchProp:Ta},ha);let so;function Ra(){return so||(so=Gi(Ma))}const Ia=(...e)=>{const t=Ra().createApp(...e),{mount:r}=t;return t.mount=s=>{const o=Ya(s);if(!o)return;const n=t._component;!R(n)&&!n.render&&!n.template&&(n.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const i=r(o,!1,Pa(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),i},t};function Pa(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Ya(e){return re(e)?document.querySelector(e):e}const Xa=""+new URL("../icon-web.png",import.meta.url).href,Da={sm:{borderRadius:18,borderWidth:1,width:70,height:36},md:{borderRadius:16,borderWidth:1},line:{borderRadius:16,borderWidth:1}},Gr={sm:{dark:{strokeOpacity:.48,innerOpacity:.7,bloomOpacity:.8,innerShadow:"rgba(255, 255, 255, 0.3)",saturation:1.2},light:{strokeOpacity:.33,innerOpacity:.46,bloomOpacity:.54,innerShadow:"rgba(0, 0, 0, 0.14)",saturation:.96}},md:{dark:{strokeOpacity:.48,innerOpacity:.7,bloomOpacity:.8,innerShadow:"rgba(255, 255, 255, 0.27)",saturation:1.2},light:{strokeOpacity:.33,innerOpacity:.46,bloomOpacity:.54,innerShadow:"rgba(0, 0, 0, 0.14)",saturation:.96}},line:{dark:{strokeOpacity:.72,innerOpacity:.7,bloomOpacity:.8,innerShadow:"rgba(255, 255, 255, 0.1)",saturation:1.2},light:{strokeOpacity:.72,innerOpacity:.7,bloomOpacity:.8,innerShadow:"rgba(0, 0, 0, 0.14)",saturation:1.2}}};({...Gr.md.dark},{...Gr.md.light});const bs={colorful:{border:[{color:"rgb(255, 50, 100)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(40, 140, 255)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(50, 200, 80)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(30, 185, 170)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(100, 70, 255)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(40, 140, 255)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(255, 120, 40)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(240, 50, 180)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(180, 40, 240)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(255, 60, 80)",secondary:"rgba(40, 190, 180, 0.98)"},spikeLt:{primary:"rgb(200, 30, 60)",secondary:"rgb(20, 150, 140)"}},mono:{border:[{color:"rgb(180, 180, 180)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(140, 140, 140)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(160, 160, 160)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(130, 130, 130)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(170, 170, 170)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(150, 150, 150)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(190, 190, 190)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(145, 145, 145)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(165, 165, 165)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(200, 200, 200)",secondary:"rgb(170, 170, 170)"},spikeLt:{primary:"rgb(80, 80, 80)",secondary:"rgb(120, 120, 120)"}},ocean:{border:[{color:"rgb(100, 80, 220)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(60, 120, 255)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(80, 100, 200)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(50, 140, 220)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(120, 80, 255)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(70, 130, 255)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(140, 100, 240)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(90, 110, 230)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(130, 70, 255)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(100, 120, 255)",secondary:"rgba(130, 100, 220, 0.98)"},spikeLt:{primary:"rgb(60, 60, 180)",secondary:"rgb(80, 100, 200)"}},sunset:{border:[{color:"rgb(255, 80, 50)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(255, 160, 40)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(255, 120, 60)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(255, 200, 50)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(255, 100, 80)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(255, 180, 60)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(255, 60, 60)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(255, 140, 50)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(255, 90, 70)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(255, 140, 80)",secondary:"rgba(255, 100, 60, 0.98)"},spikeLt:{primary:"rgb(200, 80, 40)",secondary:"rgb(220, 120, 30)"}}},pn={colorful:{border:[{color:"rgb(50, 200, 80)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(30, 185, 170)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(255, 120, 40)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(100, 70, 255)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(240, 50, 180)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(180, 40, 240)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(40, 140, 255)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(255, 50, 100)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(50, 200, 80, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(30, 185, 170, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(255, 120, 40, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(100, 70, 255, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(240, 50, 180, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(180, 40, 240, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(40, 140, 255, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(255, 50, 100, 0.3)",pos:"100% 27%",size:"11px 12px"}]},mono:{border:[{color:"rgb(160, 160, 160)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(140, 140, 140)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(180, 180, 180)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(150, 150, 150)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(170, 170, 170)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(155, 155, 155)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(145, 145, 145)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(165, 165, 165)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(160, 160, 160, 0.25)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(140, 140, 140, 0.22)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(180, 180, 180, 0.17)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(150, 150, 150, 0.17)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(170, 170, 170, 0.15)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(155, 155, 155, 0.20)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(145, 145, 145, 0.15)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(165, 165, 165, 0.15)",pos:"100% 27%",size:"11px 12px"}]},ocean:{border:[{color:"rgb(60, 140, 200)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(50, 120, 180)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(100, 80, 220)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(80, 100, 255)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(120, 70, 240)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(90, 80, 220)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(70, 110, 255)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(110, 90, 230)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(60, 140, 200, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(50, 120, 180, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(100, 80, 220, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(80, 100, 255, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(120, 70, 240, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(90, 80, 220, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(70, 110, 255, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(110, 90, 230, 0.3)",pos:"100% 27%",size:"11px 12px"}]},sunset:{border:[{color:"rgb(255, 180, 50)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(255, 150, 40)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(255, 80, 60)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(255, 100, 80)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(255, 60, 80)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(255, 120, 60)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(255, 200, 50)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(255, 90, 70)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(255, 180, 50, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(255, 150, 40, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(255, 80, 60, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(255, 100, 80, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(255, 60, 80, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(255, 120, 60, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(255, 200, 50, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(255, 90, 70, 0.3)",pos:"100% 27%",size:"11px 12px"}]}};function ja(e){return pn[e].border.map(r=>`radial-gradient(ellipse ${r.size} at ${r.pos}, ${r.color}, transparent)`).join(`,
    `)}function La(e){return pn[e].inner.map(r=>`radial-gradient(ellipse ${r.size} at ${r.pos}, ${r.color}, transparent)`).join(`,
    `)}function Na(e){return bs[e].border.map(r=>`radial-gradient(ellipse ${r.size} at ${r.pos}, ${r.color}, transparent)`).join(`,
    `)}function Ba(e){const t=bs[e],r=e==="mono"?.225:.45;return t.border.map(s=>{const o=s.color.replace("rgb(","rgba(").replace(")",`, ${r})`);return`radial-gradient(ellipse ${s.size.split(" ").map(i=>{const a=parseInt(i);return`${Math.round(a*.9)}px`}).join(" ")} at ${s.pos}, ${o}, transparent)`}).join(`,
    `)}function Va(e,t){const r=bs[e];return t?r.spike:r.spikeLt}const Ua={colorful:{dark:[{color:"rgb(255, 50, 100)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(40, 180, 220)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(50, 200, 80)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(180, 40, 240)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(255, 160, 30)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(100, 70, 255)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(40, 140, 255)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(240, 50, 180)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(30, 185, 170)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(255, 50, 100)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(40, 140, 255)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(50, 200, 80)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(180, 40, 240)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(30, 185, 170)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(100, 70, 255)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(40, 140, 255)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(255, 120, 40)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(240, 50, 180)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},mono:{dark:[{color:"rgb(200, 200, 200)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(170, 170, 170)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(155, 155, 155)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(185, 185, 185)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(165, 165, 165)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(180, 180, 180)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(160, 160, 160)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(175, 175, 175)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(190, 190, 190)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(100, 100, 100)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(80, 80, 80)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(90, 90, 90)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(70, 70, 70)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(85, 85, 85)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(95, 95, 95)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(75, 75, 75)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(105, 105, 105)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(65, 65, 65)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},ocean:{dark:[{color:"rgb(100, 80, 220)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(60, 120, 255)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(80, 100, 200)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(130, 70, 255)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(70, 130, 255)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(120, 80, 255)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(90, 110, 230)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(110, 90, 240)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(140, 100, 255)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(80, 60, 200)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(50, 100, 220)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(70, 90, 190)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(110, 60, 220)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(60, 110, 230)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(100, 70, 240)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(80, 100, 210)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(90, 80, 225)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(120, 90, 245)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},sunset:{dark:[{color:"rgb(255, 100, 60)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(255, 180, 50)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(255, 140, 70)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(255, 80, 80)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(255, 200, 60)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(255, 120, 50)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(255, 160, 80)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(255, 90, 60)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(255, 70, 70)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(220, 80, 40)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(230, 150, 30)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(210, 110, 50)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(200, 60, 60)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(220, 170, 40)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(210, 100, 30)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(230, 130, 60)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(190, 70, 50)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(180, 50, 50)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]}};function Ka(e,t,r){return Ua[e][t?"dark":"light"].map(o=>{const n=o.offsetX===0?"":o.offsetX>0?` + ${o.offsetX}px`:` - ${Math.abs(o.offsetX)}px`,i=o.offsetY===0?"":o.offsetY>0?` + ${o.offsetY}px`:` - ${Math.abs(o.offsetY)}px`;return`radial-gradient(ellipse calc(${o.sizeW}px * var(--beam-w-${r})) calc(${o.sizeH}px * var(--beam-h-${r})) at calc(var(--beam-x-${r}) * 100%${n}) calc(100%${i}), ${o.color}, transparent)`}).join(`,
       `)}const Ga={colorful:[{color:"rgba(255, 50, 100, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(40, 180, 220, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(50, 200, 80, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(180, 40, 240, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(255, 160, 30, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(100, 70, 255, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(40, 140, 255, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(240, 50, 180, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(30, 185, 170, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],mono:[{color:"rgba(200, 200, 200, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(170, 170, 170, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(155, 155, 155, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(185, 185, 185, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(165, 165, 165, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(180, 180, 180, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(160, 160, 160, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(175, 175, 175, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(190, 190, 190, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],ocean:[{color:"rgba(100, 80, 220, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(60, 120, 255, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(80, 100, 200, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(130, 70, 255, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(70, 130, 255, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(120, 80, 255, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(90, 110, 230, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(110, 90, 240, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(140, 100, 255, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],sunset:[{color:"rgba(255, 100, 60, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(255, 180, 50, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(255, 140, 70, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(255, 80, 80, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(255, 200, 60, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(255, 120, 50, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(255, 160, 80, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(255, 90, 60, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(255, 70, 70, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}]};function qa(e,t){return Ga[e].map(s=>{const o=s.offsetX===0?"":s.offsetX>0?` + ${s.offsetX}px`:` - ${Math.abs(s.offsetX)}px`,n=s.offsetY===0?"":` - ${Math.abs(s.offsetY)}px`;return`radial-gradient(ellipse calc(${s.sizeW}px * var(--beam-w-${t})) calc(${s.sizeH}px * var(--beam-h-${t})) at calc(var(--beam-x-${t}) * 100%${o}) calc(100%${n}), ${s.color}, transparent)`}).join(`,
    `)}const Ja={colorful:{dark:{spikes:[{color1:"rgb(100, 70, 255)",color2:"rgba(100, 70, 255, 1)"},{color1:"rgba(255, 170, 40, 0.59)",color2:"rgba(255, 170, 40, 0.29)"},{color1:"rgb(50, 200, 100)",color2:"rgba(50, 200, 100, 1)"},{color1:"rgba(200, 50, 240, 0.91)",color2:"rgba(200, 50, 240, 0.45)"},{color1:"rgb(40, 140, 255)",color2:"rgba(40, 140, 255, 1)"}]},light:{spikes:[{color1:"rgb(80, 50, 200)",color2:"rgba(80, 50, 200, 0.8)"},{color1:"rgba(210, 130, 0, 0.7)",color2:"rgba(210, 130, 0, 0.46)"},{color1:"rgb(30, 160, 70)",color2:"rgba(30, 160, 70, 0.82)"},{color1:"rgb(160, 30, 190)",color2:"rgba(160, 30, 190, 0.7)"},{color1:"rgb(30, 100, 200)",color2:"rgba(30, 100, 200, 0.78)"}]}},mono:{dark:{spikes:[{color1:"rgb(200, 200, 200)",color2:"rgba(200, 200, 200, 1)"},{color1:"rgba(180, 180, 180, 0.59)",color2:"rgba(180, 180, 180, 0.29)"},{color1:"rgb(190, 190, 190)",color2:"rgba(190, 190, 190, 1)"},{color1:"rgba(170, 170, 170, 0.91)",color2:"rgba(170, 170, 170, 0.45)"},{color1:"rgb(185, 185, 185)",color2:"rgba(185, 185, 185, 1)"}]},light:{spikes:[{color1:"rgb(80, 80, 80)",color2:"rgba(80, 80, 80, 0.8)"},{color1:"rgba(100, 100, 100, 0.7)",color2:"rgba(100, 100, 100, 0.46)"},{color1:"rgb(70, 70, 70)",color2:"rgba(70, 70, 70, 0.82)"},{color1:"rgb(90, 90, 90)",color2:"rgba(90, 90, 90, 0.7)"},{color1:"rgb(85, 85, 85)",color2:"rgba(85, 85, 85, 0.78)"}]}},ocean:{dark:{spikes:[{color1:"rgb(100, 80, 255)",color2:"rgb(100, 80, 255)"},{color1:"rgba(80, 130, 220, 0.59)",color2:"rgba(80, 130, 220, 0.29)"},{color1:"rgb(60, 100, 255)",color2:"rgb(60, 100, 255)"},{color1:"rgba(90, 120, 200, 0.91)",color2:"rgba(90, 120, 200, 0.45)"},{color1:"rgb(120, 90, 255)",color2:"rgb(120, 90, 255)"}]},light:{spikes:[{color1:"rgb(50, 40, 180)",color2:"rgba(50, 40, 180, 0.8)"},{color1:"rgba(40, 80, 200, 0.7)",color2:"rgba(40, 80, 200, 0.46)"},{color1:"rgb(30, 50, 190)",color2:"rgba(30, 50, 190, 0.82)"},{color1:"rgb(60, 90, 180)",color2:"rgba(60, 90, 180, 0.7)"},{color1:"rgb(70, 60, 200)",color2:"rgba(70, 60, 200, 0.78)"}]}},sunset:{dark:{spikes:[{color1:"rgb(255, 100, 80)",color2:"rgb(255, 100, 80)"},{color1:"rgba(255, 150, 80, 0.59)",color2:"rgba(255, 150, 80, 0.29)"},{color1:"rgb(255, 80, 60)",color2:"rgb(255, 80, 60)"},{color1:"rgba(255, 120, 50, 0.91)",color2:"rgba(255, 120, 50, 0.45)"},{color1:"rgb(255, 140, 70)",color2:"rgb(255, 140, 70)"}]},light:{spikes:[{color1:"rgb(200, 60, 30)",color2:"rgba(200, 60, 30, 0.8)"},{color1:"rgba(220, 100, 20, 0.7)",color2:"rgba(220, 100, 20, 0.46)"},{color1:"rgb(180, 40, 20)",color2:"rgba(180, 40, 20, 0.82)"},{color1:"rgb(210, 80, 10)",color2:"rgba(210, 80, 10, 0.7)"},{color1:"rgb(190, 70, 30)",color2:"rgba(190, 70, 30, 0.78)"}]}}};function Kt(e,t){const r=e.match(/^rgba\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*[\d.]+\s*\)$/);if(r)return`rgba(${r[1]}, ${r[2]}, ${r[3]}, ${t})`;const s=e.match(/^rgb\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)$/);return s?`rgba(${s[1]}, ${s[2]}, ${s[3]}, ${t})`:e}function ot(e,t){const r=e.match(/^rgba\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)$/);if(r)return`rgba(${r[1]}, ${r[2]}, ${r[3]}, ${(parseFloat(r[4])*t).toFixed(2)})`;const s=e.match(/^rgb\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)$/);return s?`rgba(${s[1]}, ${s[2]}, ${s[3]}, ${t.toFixed(2)})`:e}function Za(e,t,r){const s=Va(e,t),o=Ja[e][t?"dark":"light"],n=e==="mono",i=n?.14:1,a=n?ot(s.primary,.14):s.primary,l=n?ot(s.primary,.09):s.primary,p=n?ot(s.secondary,.12):s.secondary,u=n?Kt(s.secondary,.06):Kt(s.secondary,.49),d=o.spikes.map(te=>n?{color1:ot(te.color1,i),color2:ot(te.color2,i*.7)}:te),v=n?"12px":"0.8px",$=n?"14px":"2px",I=n?"12px":"1.2px",C=n?"10px":"0.6px",F=n?"42px":"92px",M=n?"38px":"72px",T=n?"40px":"85px",P=n?"32px":"60px",H=n?"12px":"1px",D=n?"rgba(255, 255, 255, 0.5)":"rgba(255, 255, 255, 1)",U=n?"rgba(255, 255, 255, 0.45)":"rgba(255, 255, 255, 0.9)",k=n?"rgba(255, 255, 255, 0.25)":"rgba(255, 255, 255, 0.5)",Y=n?"rgba(255, 255, 255, 0.15)":"rgba(255, 255, 255, 0.3)",N=n?"rgba(255, 255, 255, 0.06)":"rgba(255, 255, 255, 0.12)",B=n?"rgba(255, 255, 255, 0.015)":"rgba(255, 255, 255, 0.03)";if(t)return`radial-gradient(ellipse calc(${v} * var(--beam-spike-${r})) calc(${F} * var(--beam-h-${r})) at 8% calc(100% - 2px), ${a}, ${l} 30%, transparent 88%),
       radial-gradient(ellipse calc(10px * var(--beam-spike2-${r})) calc(35px * var(--beam-h-${r})) at 22% calc(100% - 4px), ${p}, ${u} 50%, transparent 95%),
       radial-gradient(ellipse calc(${$} * (2 - var(--beam-spike-${r}))) calc(${M} * var(--beam-h-${r})) at 36% calc(100% - 3px), ${d[0].color1}, ${d[0].color2} 40%, transparent 90%),
       radial-gradient(ellipse calc(14px * var(--beam-spike2-${r})) calc(28px * var(--beam-h-${r})) at 50% calc(100% - 2px), ${d[1].color1}, ${d[1].color2} 55%, transparent 96%),
       radial-gradient(ellipse calc(${I} * (2 - var(--beam-spike2-${r}))) calc(${T} * var(--beam-h-${r})) at 64% calc(100% - 4px), ${d[2].color1}, ${d[2].color2} 35%, transparent 89%),
       radial-gradient(ellipse calc(7px * var(--beam-spike-${r})) calc(45px * var(--beam-h-${r})) at 78% calc(100% - 2px), ${d[3].color1}, ${d[3].color2} 48%, transparent 94%),
       radial-gradient(ellipse calc(${C} * (2 - var(--beam-spike-${r}))) calc(${P} * var(--beam-h-${r})) at 92% calc(100% - 3px), ${d[4].color1}, ${d[4].color2} 42%, transparent 91%),
       radial-gradient(ellipse calc(21px * var(--beam-spike-${r})) calc(15px * var(--beam-spike2-${r})) at calc(var(--beam-x-${r}) * 100%) calc(100% + 1px), ${D} 0%, ${U} 20%, ${k} 50%, transparent 100%),
       radial-gradient(ellipse calc(42px * var(--beam-w-${r})) calc(40px * var(--beam-h-${r})) at calc(var(--beam-x-${r}) * 100%) 100%, ${Y} 0%, ${N} 25%, ${B} 55%, transparent 80%)`;{const te=n?ot(s.primary,.11):Kt(s.primary,.85),Ce=n?ot(s.secondary,.09):Kt(s.secondary,.7);return`radial-gradient(ellipse calc(${v} * var(--beam-spike-${r})) calc(${F} * var(--beam-h-${r})) at 8% calc(100% - 2px), ${a}, ${te} 30%, transparent 88%),
       radial-gradient(ellipse calc(10px * var(--beam-spike2-${r})) calc(35px * var(--beam-h-${r})) at 22% calc(100% - 4px), ${p}, ${Ce} 50%, transparent 95%),
       radial-gradient(ellipse calc(${$} * (2 - var(--beam-spike-${r}))) calc(${M} * var(--beam-h-${r})) at 36% calc(100% - 3px), ${d[0].color1}, ${d[0].color2} 40%, transparent 90%),
       radial-gradient(ellipse calc(14px * var(--beam-spike2-${r})) calc(28px * var(--beam-h-${r})) at 50% calc(100% - 2px), ${d[1].color1}, ${d[1].color2} 55%, transparent 96%),
       radial-gradient(ellipse calc(${I} * (2 - var(--beam-spike2-${r}))) calc(${T} * var(--beam-h-${r})) at 64% calc(100% - 4px), ${d[2].color1}, ${d[2].color2} 35%, transparent 89%),
       radial-gradient(ellipse calc(7px * var(--beam-spike-${r})) calc(45px * var(--beam-h-${r})) at 78% calc(100% - 2px), ${d[3].color1}, ${d[3].color2} 48%, transparent 94%),
       radial-gradient(ellipse calc(${H} * (2 - var(--beam-spike-${r}))) calc(${P} * var(--beam-h-${r})) at 92% calc(100% - 3px), ${d[4].color1}, ${d[4].color2} 42%, transparent 91%),
       radial-gradient(ellipse calc(50px * var(--beam-w-${r})) calc(32px * var(--beam-h-${r})) at calc(var(--beam-x-${r}) * 100%) calc(100%), rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.18) 30%, rgba(0, 0, 0, 0.03) 60%, transparent 85%)`}}function Qa(e){const{size:t}=e;return t==="line"?rl(e):t==="sm"?el(e):tl(e)}function el(e){const{id:t,borderRadius:r,borderWidth:s,duration:o,strokeOpacity:n,innerOpacity:i,bloomOpacity:a,innerShadow:l,colorVariant:p,staticColors:u,brightness:d,saturation:v,hueRange:$,theme:I}=e,C=Math.max(0,r-s),F=p==="mono"?.5:1,M=n*F,T=i*F,P=a*F,H=u?"":`animation: beam-hue-shift-${t} 12s ease-in-out infinite;`,D=u?"":`
@keyframes beam-hue-shift-${t} {
  0% { filter: hue-rotate(-${$}deg) brightness(${d.toFixed(2)}) saturate(${v.toFixed(2)}); }
  50% { filter: hue-rotate(${$}deg) brightness(${d.toFixed(2)}) saturate(${v.toFixed(2)}); }
  100% { filter: hue-rotate(-${$}deg) brightness(${d.toFixed(2)}) saturate(${v.toFixed(2)}); }
}`,U=I==="dark",k=U?`conic-gradient(
        from var(--beam-angle-${t}),
        transparent 0%, transparent 54%,
        rgba(255, 255, 255, 0.1) 57%,
        rgba(255, 255, 255, 0.3) 60%,
        rgba(255, 255, 255, 0.6) 63%,
        rgba(255, 255, 255, 0.75) 66%,
        rgba(255, 255, 255, 0.6) 69%,
        rgba(255, 255, 255, 0.3) 72%,
        rgba(255, 255, 255, 0.1) 75%,
        transparent 78%, transparent 100%
      )`:`conic-gradient(
        from var(--beam-angle-${t}),
        transparent 0%, transparent 54%,
        rgba(0, 0, 0, 0.08) 57%,
        rgba(0, 0, 0, 0.2) 60%,
        rgba(0, 0, 0, 0.4) 63%,
        rgba(0, 0, 0, 0.55) 66%,
        rgba(0, 0, 0, 0.4) 69%,
        rgba(0, 0, 0, 0.2) 72%,
        rgba(0, 0, 0, 0.08) 75%,
        transparent 78%, transparent 100%
      )`,Y=ja(p),N=La(p),B=U?`conic-gradient(
        from var(--beam-angle-${t}),
        transparent 0%, transparent 58%,
        rgba(255, 255, 255, 0.03) 62%,
        rgba(255, 255, 255, 0.08) 65%,
        rgba(255, 255, 255, 0.2) 67%,
        rgba(255, 255, 255, 0.45) 69%,
        rgba(255, 255, 255, 0.85) 70%,
        rgba(255, 255, 255, 0.85) 70.5%,
        rgba(255, 255, 255, 0.45) 71.5%,
        rgba(255, 255, 255, 0.2) 73%,
        rgba(255, 255, 255, 0.08) 75%,
        rgba(255, 255, 255, 0.03) 78%,
        transparent 82%
      )`:`conic-gradient(
        from var(--beam-angle-${t}),
        transparent 0%, transparent 58%,
        rgba(0, 0, 0, 0.02) 62%,
        rgba(0, 0, 0, 0.08) 65%,
        rgba(0, 0, 0, 0.2) 67%,
        rgba(0, 0, 0, 0.4) 69%,
        rgba(0, 0, 0, 0.6) 70%,
        rgba(0, 0, 0, 0.6) 70.5%,
        rgba(0, 0, 0, 0.4) 71.5%,
        rgba(0, 0, 0, 0.2) 73%,
        rgba(0, 0, 0, 0.08) 75%,
        rgba(0, 0, 0, 0.02) 78%,
        transparent 82%
      )`,te=`conic-gradient(
    from var(--beam-angle-${t}),
    transparent 0%, transparent 22%,
    rgba(255, 255, 255, 0.12) 28%, rgba(255, 255, 255, 0.4) 36%,
    white 46%, white 82%,
    rgba(255, 255, 255, 0.4) 88%, rgba(255, 255, 255, 0.12) 94%,
    transparent 97%, transparent 100%
  )`;return`
@property --beam-angle-${t} {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: true;
}

@property --beam-opacity-${t} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

[data-beam="${t}"] {
  position: relative;
  border-radius: ${r}px;
  overflow: hidden;
}

[data-beam="${t}"][data-active] {
  animation:
    beam-spin-${t} ${o}s linear infinite,
    beam-fade-in-${t} 0.6s ease forwards;
}

[data-beam="${t}"][data-fading] {
  animation:
    beam-spin-${t} ${o}s linear infinite,
    beam-fade-out-${t} 0.5s ease forwards;
}

[data-beam="${t}"][data-active]::after,
[data-beam="${t}"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${C}px;
  padding: ${s}px;
  clip-path: inset(0 round ${r}px);
  background: ${k},${Y};
  -webkit-mask:
    conic-gradient(
      from var(--beam-angle-${t}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: source-in, xor;
  mask:
    conic-gradient(
      from var(--beam-angle-${t}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: intersect, exclude;
  pointer-events: none;
  z-index: 2;
  opacity: calc(var(--beam-opacity-${t}) * ${M.toFixed(2)} * var(--beam-strength, 1));
  ${H}
}

[data-beam="${t}"][data-active]::before,
[data-beam="${t}"][data-fading]::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${r}px;
  clip-path: inset(0 round ${r}px);
  background: ${N};
  box-shadow: inset 0 0 5px 1px ${l};
  -webkit-mask-image: ${te};
  -webkit-mask-composite: source-over;
  mask-image: ${te};
  mask-composite: add;
  pointer-events: none;
  z-index: 1;
  opacity: calc(var(--beam-opacity-${t}) * ${T.toFixed(2)} * var(--beam-strength, 1));
  ${H}
}

[data-beam="${t}"] [data-beam-bloom] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: ${C}px;
  clip-path: inset(0 round ${r}px);
  background: ${B};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  padding: ${s}px;
  filter: blur(8px) brightness(${d.toFixed(2)}) saturate(${v.toFixed(2)});
  pointer-events: none;
  z-index: 3;
  opacity: 0;
}

[data-beam="${t}"][data-active] [data-beam-bloom],
[data-beam="${t}"][data-fading] [data-beam-bloom] {
  display: block;
  opacity: calc(var(--beam-opacity-${t}) * ${P.toFixed(2)} * var(--beam-strength, 1));
}

@keyframes beam-spin-${t} {
  from { --beam-angle-${t}: 0deg; }
  to { --beam-angle-${t}: 360deg; }
}

@keyframes beam-fade-in-${t} {
  from { --beam-opacity-${t}: 0; }
  to { --beam-opacity-${t}: 1; }
}

@keyframes beam-fade-out-${t} {
  from { --beam-opacity-${t}: 1; }
  to { --beam-opacity-${t}: 0; }
}
${D}
`}function tl(e){const{id:t,borderRadius:r,borderWidth:s,duration:o,strokeOpacity:n,innerOpacity:i,bloomOpacity:a,innerShadow:l,colorVariant:p,staticColors:u,brightness:d,saturation:v,hueRange:$,theme:I}=e,C=Math.max(0,r-s),F=p==="mono"?.5:1,M=n*F,T=i*F,P=a*F,H=u?"":`animation: beam-hue-shift-${t} 12s ease-in-out infinite;`,D=u?"":`
@keyframes beam-hue-shift-${t} {
  0% { filter: hue-rotate(-${$}deg) brightness(${d.toFixed(2)}) saturate(${v.toFixed(2)}); }
  50% { filter: hue-rotate(${$}deg) brightness(${d.toFixed(2)}) saturate(${v.toFixed(2)}); }
  100% { filter: hue-rotate(-${$}deg) brightness(${d.toFixed(2)}) saturate(${v.toFixed(2)}); }
}`,U=I==="dark",k=U?`conic-gradient(
        from var(--beam-angle-${t}),
        transparent 0%, transparent 54%,
        rgba(255, 255, 255, 0.1) 57%,
        rgba(255, 255, 255, 0.3) 60%,
        rgba(255, 255, 255, 0.6) 63%,
        rgba(255, 255, 255, 0.75) 66%,
        rgba(255, 255, 255, 0.6) 69%,
        rgba(255, 255, 255, 0.3) 72%,
        rgba(255, 255, 255, 0.1) 75%,
        transparent 78%, transparent 100%
      )`:`conic-gradient(
        from var(--beam-angle-${t}),
        transparent 0%, transparent 54%,
        rgba(0, 0, 0, 0.08) 57%,
        rgba(0, 0, 0, 0.2) 60%,
        rgba(0, 0, 0, 0.4) 63%,
        rgba(0, 0, 0, 0.55) 66%,
        rgba(0, 0, 0, 0.4) 69%,
        rgba(0, 0, 0, 0.2) 72%,
        rgba(0, 0, 0, 0.08) 75%,
        transparent 78%, transparent 100%
      )`,Y=Na(p),N=Ba(p),B=U?`conic-gradient(
        from var(--beam-angle-${t}),
        transparent 0%, transparent 58%,
        rgba(255, 255, 255, 0.03) 62%,
        rgba(255, 255, 255, 0.08) 65%,
        rgba(255, 255, 255, 0.2) 67%,
        rgba(255, 255, 255, 0.45) 69%,
        rgba(255, 255, 255, 0.85) 70%,
        rgba(255, 255, 255, 0.85) 70.5%,
        rgba(255, 255, 255, 0.45) 71.5%,
        rgba(255, 255, 255, 0.2) 73%,
        rgba(255, 255, 255, 0.08) 75%,
        rgba(255, 255, 255, 0.03) 78%,
        transparent 82%
      )`:`conic-gradient(
        from var(--beam-angle-${t}),
        transparent 0%, transparent 58%,
        rgba(0, 0, 0, 0.02) 62%,
        rgba(0, 0, 0, 0.08) 65%,
        rgba(0, 0, 0, 0.2) 67%,
        rgba(0, 0, 0, 0.4) 69%,
        rgba(0, 0, 0, 0.6) 70%,
        rgba(0, 0, 0, 0.6) 70.5%,
        rgba(0, 0, 0, 0.4) 71.5%,
        rgba(0, 0, 0, 0.2) 73%,
        rgba(0, 0, 0, 0.08) 75%,
        rgba(0, 0, 0, 0.02) 78%,
        transparent 82%
      )`;return`
@property --beam-angle-${t} {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: true;
}

@property --beam-opacity-${t} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

[data-beam="${t}"] {
  position: relative;
  border-radius: ${r}px;
  overflow: hidden;
}

[data-beam="${t}"][data-active] {
  animation:
    beam-spin-${t} ${o}s linear infinite,
    beam-fade-in-${t} 0.6s ease forwards;
}

[data-beam="${t}"][data-fading] {
  animation:
    beam-spin-${t} ${o}s linear infinite,
    beam-fade-out-${t} 0.5s ease forwards;
}

[data-beam="${t}"][data-active]::after,
[data-beam="${t}"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${C}px;
  padding: ${s}px;
  clip-path: inset(0 round ${r}px);
  background: ${k},${Y};
  -webkit-mask:
    conic-gradient(
      from var(--beam-angle-${t}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: source-in, xor;
  mask:
    conic-gradient(
      from var(--beam-angle-${t}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: intersect, exclude;
  pointer-events: none;
  z-index: 2;
  opacity: calc(var(--beam-opacity-${t}) * ${M.toFixed(2)} * var(--beam-strength, 1));
  ${H}
}

[data-beam="${t}"][data-active]::before,
[data-beam="${t}"][data-fading]::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${r}px;
  background: ${N};
  box-shadow: inset 0 0 9px 1px ${l};
  -webkit-mask-image:
    conic-gradient(
      from var(--beam-angle-${t}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  -webkit-mask-composite: source-in, source-over;
  mask-image:
    conic-gradient(
      from var(--beam-angle-${t}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  mask-composite: intersect, add;
  pointer-events: none;
  z-index: 1;
  opacity: calc(var(--beam-opacity-${t}) * ${T.toFixed(2)} * var(--beam-strength, 1));
  clip-path: inset(0 round ${r}px);
  ${H}
}

[data-beam="${t}"] [data-beam-bloom] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: ${C}px;
  clip-path: inset(0 round ${r}px);
  background: ${B};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  padding: ${s}px;
  filter: blur(8px) brightness(${d.toFixed(2)}) saturate(${v.toFixed(2)});
  pointer-events: none;
  z-index: 3;
  opacity: 0;
}

[data-beam="${t}"][data-active] [data-beam-bloom],
[data-beam="${t}"][data-fading] [data-beam-bloom] {
  display: block;
  opacity: calc(var(--beam-opacity-${t}) * ${P.toFixed(2)} * var(--beam-strength, 1));
}

@keyframes beam-spin-${t} {
  from { --beam-angle-${t}: 0deg; }
  to { --beam-angle-${t}: 360deg; }
}

@keyframes beam-fade-in-${t} {
  from { --beam-opacity-${t}: 0; }
  to { --beam-opacity-${t}: 1; }
}

@keyframes beam-fade-out-${t} {
  from { --beam-opacity-${t}: 1; }
  to { --beam-opacity-${t}: 0; }
}
${D}
`}function rl(e){const{id:t,borderRadius:r,borderWidth:s,duration:o,strokeOpacity:n,innerOpacity:i,bloomOpacity:a,innerShadow:l,colorVariant:p,staticColors:u,brightness:d,saturation:v,hueRange:$,theme:I}=e,C=Math.max(0,r-s),F=I==="dark",M=n,T=i,P=a,H=u?"":`animation: beam-hue-shift-${t} 12s ease-in-out infinite;`,D=u?"":`animation: beam-hue-shift-bloom-${t} 8s ease-in-out infinite;`,U=u?"":`
@keyframes beam-hue-shift-${t} {
  0% { filter: hue-rotate(-${$}deg) brightness(${d.toFixed(2)}) saturate(${v.toFixed(2)}); }
  50% { filter: hue-rotate(${$}deg) brightness(${d.toFixed(2)}) saturate(${v.toFixed(2)}); }
  100% { filter: hue-rotate(-${$}deg) brightness(${d.toFixed(2)}) saturate(${v.toFixed(2)}); }
}

@keyframes beam-hue-shift-bloom-${t} {
  0% { filter: blur(8px) hue-rotate(-${$+10}deg) brightness(${d.toFixed(2)}) saturate(${v.toFixed(2)}); }
  50% { filter: blur(8px) hue-rotate(${$+10}deg) brightness(${d.toFixed(2)}) saturate(${v.toFixed(2)}); }
  100% { filter: blur(8px) hue-rotate(-${$+10}deg) brightness(${d.toFixed(2)}) saturate(${v.toFixed(2)}); }
}`,k=F?`radial-gradient(
        ellipse calc(24px * var(--beam-w-${t})) calc(28px * var(--beam-h-${t})) at calc(var(--beam-x-${t}) * 100%) calc(100% + 2px),
        rgba(255, 255, 255, 0.38) 0%,
        rgba(255, 255, 255, 0.12) 30%,
        transparent 65%
      )`:`radial-gradient(
        ellipse calc(35px * var(--beam-w-${t})) calc(28px * var(--beam-h-${t})) at calc(var(--beam-x-${t}) * 100%) calc(100% + 2px),
        rgba(0, 0, 0, 0.6) 0%,
        rgba(0, 0, 0, 0.25) 35%,
        transparent 70%
      )`,Y=Ka(p,F,t),N=qa(p,t),B=Za(p,F,t),te=p==="mono"?"filter: blur(6px);":"";return`
@property --beam-x-${t} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

@property --beam-w-${t} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-h-${t} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-spike-${t} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-spike2-${t} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-edge-${t} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-opacity-${t} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

[data-beam="${t}"] {
  position: relative;
  border-radius: ${r}px;
  overflow: hidden;
}

[data-beam="${t}"][data-active] {
  animation:
    beam-travel-${t} ${o}s linear infinite,
    beam-edge-fade-${t} ${o}s linear infinite,
    beam-breathe-${t} ${(o*1.3).toFixed(1)}s ease-in-out infinite,
    beam-spike-${t} ${(o*1.33).toFixed(1)}s ease-in-out infinite,
    beam-spike2-${t} ${(o*1.7).toFixed(1)}s ease-in-out infinite,
    beam-fade-in-${t} 0.6s ease forwards;
}

[data-beam="${t}"][data-fading] {
  animation:
    beam-travel-${t} ${o}s linear infinite,
    beam-edge-fade-${t} ${o}s linear infinite,
    beam-breathe-${t} ${(o*1.3).toFixed(1)}s ease-in-out infinite,
    beam-spike-${t} ${(o*1.33).toFixed(1)}s ease-in-out infinite,
    beam-spike2-${t} ${(o*1.7).toFixed(1)}s ease-in-out infinite,
    beam-fade-out-${t} 0.5s ease forwards;
}

[data-beam="${t}"][data-active]::after,
[data-beam="${t}"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${C}px;
  padding: ${s}px;
  clip-path: inset(0 round ${r}px);
  background: ${k}, ${Y};
  -webkit-mask:
    radial-gradient(
      ellipse calc(78px * var(--beam-w-${t})) calc(60px * var(--beam-h-${t})) at calc(var(--beam-x-${t}) * 100%) 100%,
      white 0%, rgba(255, 255, 255, 0.5) 45%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: source-in, xor;
  mask:
    radial-gradient(
      ellipse calc(78px * var(--beam-w-${t})) calc(60px * var(--beam-h-${t})) at calc(var(--beam-x-${t}) * 100%) 100%,
      white 0%, rgba(255, 255, 255, 0.5) 45%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: intersect, exclude;
  pointer-events: none;
  z-index: 2;
  opacity: calc(var(--beam-opacity-${t}) * var(--beam-edge-${t}) * ${M.toFixed(2)} * var(--beam-strength, 1));
  ${H}
}

[data-beam="${t}"][data-active]::before,
[data-beam="${t}"][data-fading]::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${r}px;
  background: ${N};
  box-shadow: inset 0 0 9px 1px ${l};
  -webkit-mask-image:
    radial-gradient(
      ellipse calc(78px * var(--beam-w-${t})) calc(60px * var(--beam-h-${t})) at calc(var(--beam-x-${t}) * 100%) 100%,
      white 0%, rgba(255, 255, 255, 0.5) 45%, transparent 100%
    ),
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  -webkit-mask-composite: source-in, source-over;
  mask-image:
    radial-gradient(
      ellipse calc(78px * var(--beam-w-${t})) calc(60px * var(--beam-h-${t})) at calc(var(--beam-x-${t}) * 100%) 100%,
      white 0%, rgba(255, 255, 255, 0.5) 45%, transparent 100%
    ),
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  mask-composite: intersect, add;
  pointer-events: none;
  z-index: 1;
  opacity: calc(var(--beam-opacity-${t}) * var(--beam-edge-${t}) * ${T.toFixed(2)} * var(--beam-strength, 1));
  clip-path: inset(0 round ${r}px);
  ${H}
}

[data-beam="${t}"] [data-beam-bloom] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: ${C}px;
  clip-path: inset(0 round ${r}px);
  padding: 0;
  -webkit-mask: radial-gradient(
    ellipse calc(84px * var(--beam-w-${t})) calc(110px * var(--beam-h-${t})) at calc(var(--beam-x-${t}) * 100%) 100%,
    white 0%, rgba(255, 255, 255, 0.5) 35%, transparent 100%
  );
  -webkit-mask-composite: source-over;
  mask: radial-gradient(
    ellipse calc(84px * var(--beam-w-${t})) calc(110px * var(--beam-h-${t})) at calc(var(--beam-x-${t}) * 100%) 100%,
    white 0%, rgba(255, 255, 255, 0.5) 35%, transparent 100%
  );
  mask-composite: add;
  background: ${B};
  ${te}
  pointer-events: none;
  z-index: 3;
  opacity: 0;
}

[data-beam="${t}"][data-active] [data-beam-bloom],
[data-beam="${t}"][data-fading] [data-beam-bloom] {
  display: block;
  opacity: calc(var(--beam-opacity-${t}) * var(--beam-edge-${t}) * ${P.toFixed(2)} * var(--beam-strength, 1));
  ${D}
}

@keyframes beam-travel-${t} {
  0%   { --beam-x-${t}: 0.06;  --beam-w-${t}: 0.5; }
  10%  { --beam-x-${t}: 0.15;  --beam-w-${t}: 0.8; }
  20%  { --beam-x-${t}: 0.25;  --beam-w-${t}: 1.1; }
  30%  { --beam-x-${t}: 0.35;  --beam-w-${t}: 1.3; }
  40%  { --beam-x-${t}: 0.44;  --beam-w-${t}: 1.45; }
  50%  { --beam-x-${t}: 0.5;   --beam-w-${t}: 1.5; }
  60%  { --beam-x-${t}: 0.56;  --beam-w-${t}: 1.45; }
  70%  { --beam-x-${t}: 0.65;  --beam-w-${t}: 1.3; }
  80%  { --beam-x-${t}: 0.75;  --beam-w-${t}: 1.1; }
  90%  { --beam-x-${t}: 0.85;  --beam-w-${t}: 0.8; }
  100% { --beam-x-${t}: 0.94;  --beam-w-${t}: 0.5; }
}

@keyframes beam-edge-fade-${t} {
  0%    { --beam-edge-${t}: 0; }
  12.5% { --beam-edge-${t}: 0; }
  32.5% { --beam-edge-${t}: 1; }
  67.5% { --beam-edge-${t}: 1; }
  87.5% { --beam-edge-${t}: 0; }
  100%  { --beam-edge-${t}: 0; }
}

@keyframes beam-breathe-${t} {
  0%, 100% { --beam-h-${t}: 0.8; }
  25%      { --beam-h-${t}: 1.25; }
  55%      { --beam-h-${t}: 0.85; }
  80%      { --beam-h-${t}: 1.3; }
}

@keyframes beam-spike-${t} {
  0%   { --beam-spike-${t}: 0.8; }
  25%  { --beam-spike-${t}: 1.3; }
  50%  { --beam-spike-${t}: 0.9; }
  75%  { --beam-spike-${t}: 1.4; }
  100% { --beam-spike-${t}: 0.8; }
}

@keyframes beam-spike2-${t} {
  0%   { --beam-spike2-${t}: 1.2; }
  25%  { --beam-spike2-${t}: 0.7; }
  50%  { --beam-spike2-${t}: 1.4; }
  75%  { --beam-spike2-${t}: 0.8; }
  100% { --beam-spike2-${t}: 1.2; }
}

@keyframes beam-fade-in-${t} {
  from { --beam-opacity-${t}: 0; }
  to { --beam-opacity-${t}: 1; }
}

@keyframes beam-fade-out-${t} {
  from { --beam-opacity-${t}: 1; }
  to { --beam-opacity-${t}: 0; }
}
${U}
`}const sl=["data-active","data-fading"],Gt=Mo({__name:"BorderBeam",props:{size:{default:"md"},colorVariant:{default:"colorful"},theme:{default:"dark"},staticColors:{type:Boolean,default:!1},duration:{},active:{type:Boolean,default:!0},borderRadius:{},brightness:{default:1.3},saturation:{},hueRange:{default:30},strength:{default:1},style:{}},emits:["activate","deactivate","animationEnd"],setup(e,{emit:t}){const r=e,s=t,n=`v-bb-${(typeof sr=="function"?sr():`bb-${Math.random().toString(36).substring(2,9)}`).replace(/:/g,"-")}`,i=ze(null),a=ze(r.active),l=ze(!1),p=ze(null);function u(){const N=ze(typeof window<"u"&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");return jr(()=>{if(typeof window>"u")return;const B=window.matchMedia("(prefers-color-scheme: dark)"),te=Ce=>{N.value=Ce.matches?"dark":"light"};B.addEventListener("change",te),nr(()=>B.removeEventListener("change",te))}),N}const d=u();function v(N,B){return N==="auto"?B:N}let $=null;jr(()=>{if(r.borderRadius!=null)return;const N=i.value;if(!N)return;const B=()=>{const te=N.firstElementChild;if(!te)return;const Ce=window.getComputedStyle(te),Je=parseFloat(Ce.borderTopLeftRadius);!isNaN(Je)&&Je>0&&(p.value=Je)};B(),$=new MutationObserver(B),$.observe(N,{childList:!0,subtree:!1})}),nr(()=>{$==null||$.disconnect()}),li(()=>{r.active&&!a.value&&!l.value?a.value=!0:!r.active&&a.value&&!l.value&&(l.value=!0)});const I=N=>{const B=N.animationName;B.includes("fade-out")?(a.value=!1,l.value=!1,s("deactivate")):B.includes("fade-in")&&s("activate"),s("animationEnd",N)},C=$e(()=>v(r.theme,d.value)),F=$e(()=>Gr[r.size][C.value]),M=$e(()=>Da[r.size]),T=$e(()=>r.borderRadius??p.value??M.value.borderRadius),P=$e(()=>r.duration??(r.size==="line"?2.4:1.96)),H=$e(()=>r.saturation??F.value.saturation),D=$e(()=>r.size==="line"?Math.min(r.hueRange,13):r.hueRange),U=$e(()=>r.colorVariant==="mono"?!0:r.staticColors),k=$e(()=>Qa({id:n,borderRadius:T.value,borderWidth:M.value.borderWidth,duration:P.value,strokeOpacity:F.value.strokeOpacity,innerOpacity:F.value.innerOpacity,bloomOpacity:F.value.bloomOpacity,innerShadow:F.value.innerShadow,size:r.size,colorVariant:r.colorVariant,staticColors:U.value,brightness:r.brightness,saturation:H.value,hueRange:D.value,theme:C.value})),Y=$e(()=>({...r.style??{},borderRadius:`${T.value}px`,"--beam-strength":Math.max(0,Math.min(1,r.strength))}));return(N,B)=>(ge(),kt(ce,null,[k.value?(ge(),Me(Si("style"),{key:0},{default:pt(()=>[lr(De(k.value),1)]),_:1})):an("",!0),S("div",{ref_key:"internalRef",ref:i,class:"border-beam-container",style:Xt(Y.value),"data-beam":n,"data-active":a.value&&!l.value?"":void 0,"data-fading":l.value?"":void 0,onAnimationend:I},[Ci(N.$slots,"default"),B[0]||(B[0]=S("div",{"data-beam-bloom":""},null,-1))],44,sl)],64))}}),ol={id:"main-content",class:"app"},nl={class:"header"},il={"aria-label":"External links",class:"top-bar-links"},al={class:"icon-btn",href:"https://github.com/mooniitt/border-beam-vue",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub repository"},ll={class:"examples-section","aria-label":"Effect demonstrations"},cl={class:"example-row-full"},fl={class:"mock-chat",role:"img","aria-label":"Chat input UI example"},ul={class:"mock-chat-inner"},pl={class:"pill"},dl={class:"bottom-row"},gl={class:"tag"},bl={class:"tag"},hl={class:"send-btn"},ml={class:"example-row-split"},xl={class:"example-cell"},vl={class:"example-cell"},$l={class:"mock-search"},yl={class:"mock-search-inner"},_l={class:"section","aria-label":"Installation"},zl={class:"code-block"},wl={class:"section","aria-label":"Usage"},Sl={class:"code-block code-block--multi"},kl={class:"playground-section","aria-label":"Interactive playground"},Cl={class:"playground-controls"},Hl={class:"control-group"},Ol={class:"control-options"},Wl=["data-active","onClick"],Tl={class:"control-group"},El={class:"control-options"},Al=["data-active","onClick"],Fl={class:"control-group"},Ml=["for"],Rl={class:"control-options"},Il=["id"],Pl={class:"control-group control-group--strength"},Yl={class:"strength-track"},Xl={class:"strength-value"},Dl=["id"],jl={class:"card-text"},Ll={class:"code-block code-block--multi"},Rr="npm install border-beam-vue3",Nl=Mo({__name:"App",setup(e){const t=()=>oe("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[oe("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),oe("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]),r=()=>oe("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[oe("polyline",{points:"20 6 9 17 4 12"})]),s=()=>oe("svg",{width:"16",height:"16",viewBox:"0 0 16 16"},[oe("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"})]),o=()=>oe("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",style:"opacity: 0.5"},[oe("circle",{cx:"12",cy:"12",r:"4"}),oe("path",{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"})]),n=()=>oe("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",style:"opacity: 0.5; transform: rotate(90deg)"},[oe("polyline",{points:"9 18 15 12 9 6"})]),i=()=>oe("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",style:"opacity: 0.5"},[oe("line",{x1:"12",y1:"19",x2:"12",y2:"5"}),oe("polyline",{points:"5 12 12 5 19 12"})]),a=()=>oe("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[oe("circle",{cx:"11",cy:"11",r:"8"}),oe("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]),l=ze(!0),p=ze("md"),u=ze("colorful"),d=ze(1.96),v=ze(70),$=sr(),I=sr(),C=$e(()=>`import { BorderBeam } from 'border-beam-vue3';

<BorderBeam>
  <YourCard>Content</YourCard>
</BorderBeam>`),F=$e(()=>`<BorderBeam size="${p.value}" colorVariant="${u.value}" :duration="${d.value}"${v.value<100?` :strength="${v.value/100}"`:""}>
  <Card>Content</Card>
</BorderBeam>`),M=ze(null),T=U=>{navigator.clipboard.writeText(U).then(()=>{M.value=U,setTimeout(()=>{M.value===U&&(M.value=null)},2e3)})},P=[{value:"md",label:"Large"},{value:"sm",label:"Small"},{value:"line",label:"Line"}],H=[{value:"colorful",label:"Colorful"},{value:"mono",label:"Mono"},{value:"ocean",label:"Ocean"},{value:"sunset",label:"Sunset"}],D=U=>{p.value=U,d.value=U==="line"?2.4:1.96};return(U,k)=>(ge(),kt(ce,null,[k[21]||(k[21]=S("a",{href:"#main-content",class:"skip-link"},"Skip to content",-1)),S("main",ol,[S("header",nl,[S("nav",il,[S("a",al,[Q(s)])]),k[6]||(k[6]=S("div",{class:"header-icon","aria-hidden":"true"},[S("img",{class:"header-icon-img",src:Xa,alt:"",width:"207",height:"138"})],-1)),k[7]||(k[7]=S("h1",{class:"title"},"Border beam",-1)),k[8]||(k[8]=S("p",{class:"subtitle-sm"},"Animated border beam component for Vue 3",-1))]),S("section",ll,[S("div",cl,[Q(Ze(Gt),{size:"md",colorVariant:"colorful",theme:"dark",active:""},{default:pt(()=>[S("div",fl,[S("div",ul,[S("div",pl,[Q(o)]),k[11]||(k[11]=S("div",{class:"placeholder"},"Build anything...",-1)),S("div",dl,[S("div",gl,[k[9]||(k[9]=lr("Agent ",-1)),Q(n)]),S("div",bl,[k[10]||(k[10]=lr("Auto ",-1)),Q(n)]),S("div",hl,[Q(i)])])])])]),_:1})]),S("div",ml,[S("div",xl,[Q(Ze(Gt),{size:"sm",colorVariant:"colorful",theme:"dark",active:""},{default:pt(()=>[...k[12]||(k[12]=[S("div",{class:"mock-icon-btn"},[S("div",{class:"mock-icon-btn-square"})],-1)])]),_:1})]),S("div",vl,[Q(Ze(Gt),{size:"line",colorVariant:"colorful",theme:"dark",active:"",duration:2.4,borderRadius:20},{default:pt(()=>[S("div",$l,[S("div",yl,[Q(a),k[13]||(k[13]=S("span",null,"Search",-1))])])]),_:1})])])]),S("section",_l,[k[14]||(k[14]=S("h2",{class:"section-title"},"Installation",-1)),S("div",zl,[S("code",null,De(Rr)),S("button",{class:"copy-btn",onClick:k[0]||(k[0]=Y=>T(Rr))},[M.value===Rr?(ge(),Me(r,{key:0})):(ge(),Me(t,{key:1}))])])]),S("section",wl,[k[15]||(k[15]=S("h2",{class:"section-title section-title--muted"},"Usage",-1)),S("div",Sl,[S("code",null,De(C.value),1),S("button",{class:"copy-btn",onClick:k[1]||(k[1]=Y=>T(C.value))},[M.value===C.value?(ge(),Me(r,{key:0})):(ge(),Me(t,{key:1}))])])]),S("section",kl,[k[19]||(k[19]=S("h2",{class:"section-title"},"Playground",-1)),S("div",Cl,[S("div",Hl,[k[16]||(k[16]=S("span",{class:"control-label"},"Type",-1)),S("div",Ol,[(ge(),kt(ce,null,Ts(P,Y=>S("button",{key:Y.value,class:"tab-btn","data-active":p.value===Y.value,onClick:N=>D(Y.value)},De(Y.label),9,Wl)),64))])]),S("div",Tl,[k[17]||(k[17]=S("span",{class:"control-label"},"Color",-1)),S("div",El,[(ge(),kt(ce,null,Ts(H,Y=>S("button",{key:Y.value,class:"tab-btn","data-active":u.value===Y.value,onClick:N=>u.value=Y.value},De(Y.label),9,Al)),64))])]),S("div",Fl,[S("label",{class:"control-label",for:Ze($)},"Duration",8,Ml),S("div",Rl,[Cs(S("input",{id:Ze($),type:"number",class:"duration-input","onUpdate:modelValue":k[2]||(k[2]=Y=>d.value=Y),min:.5,max:10,step:"0.1"},null,8,Il),[[ro,d.value,void 0,{number:!0}]])])]),S("div",Pl,[k[18]||(k[18]=S("span",{class:"control-label"},"Strength",-1)),S("div",Yl,[v.value>0?(ge(),kt("div",{key:0,class:"strength-fill",style:Xt({width:v.value+"%"})},null,4)):an("",!0),S("span",Xl,De(v.value)+"%",1),Cs(S("input",{id:Ze(I),type:"range",class:"strength-input","onUpdate:modelValue":k[3]||(k[3]=Y=>v.value=Y),min:"0",max:"100"},null,8,Dl),[[ro,v.value,void 0,{number:!0}]])])])]),S("div",{class:"playground-preview",onClick:k[4]||(k[4]=Y=>l.value=!l.value)},[Q(Ze(Gt),{size:p.value,colorVariant:u.value,theme:"dark",active:l.value,duration:d.value,strength:v.value/100},{default:pt(()=>[S("div",{class:br(["card",p.value==="sm"?"card-sm":"card-md"])},[S("p",jl,De(p.value==="sm"?"":"Build anything..."),1)],2)]),_:1},8,["size","colorVariant","active","duration","strength"])]),S("div",Ll,[S("code",null,De(F.value),1),S("button",{class:"copy-btn",onClick:k[5]||(k[5]=Y=>T(F.value))},[M.value===F.value?(ge(),Me(r,{key:0})):(ge(),Me(t,{key:1}))])])]),k[20]||(k[20]=S("footer",{class:"footer"},[S("span",{class:"footer-muted"},"Border Beam - Vue 3")],-1))])],64))}});Ia(Nl).mount("#app");
