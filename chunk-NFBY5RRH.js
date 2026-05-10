import{$a as Mt,A as fn,Aa as me,Ab as Re,Ba as fe,C as pn,Ca as Mn,D as hn,Da as In,Ea as Sn,Fa as Fn,Ga as Rn,Ha as xn,Ia as On,J as gn,Ja as oe,Kb as ge,L as bn,Lb as jn,M as yn,Ma as pe,Na as Pn,O as D,Oa as et,Qa as he,R as l,Ra as At,S as P,Sa as Fe,U as h,Ua as Nn,V as f,W as c,X as Ct,Xa as ie,Xb as Un,Y as vn,Ya as N,Z as Me,Za as G,_ as Dn,_a as Ln,a as E,d as Xe,da as V,ea as _,fb as It,fc as zn,g as Je,gb as St,gc as ae,h as ne,ha as Ie,hc as $n,i as ln,ia as I,ja as Tt,jc as Vn,l as Ae,la as _n,na as En,p as re,pa as wn,pb as kn,qb as Bn,rb as tt,sa as H,ta as Cn,ua as Se,va as Tn,vb as L,wa as de,wb as A,x as qe,xa as An,ya as le,z as mn,za as Qe,zb as Ft}from"./chunk-KLEYLI6E.js";var Hn=null;function K(){return Hn}function Rt(t){Hn??=t}var xe=class{},Q=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=l({token:t,factory:()=>c(Gn),providedIn:"platform"})}return t})();var Gn=(()=>{class t extends Q{_location;_history;_doc=c(_);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return K().getBaseHref(this._doc)}onPopState(e){let n=K().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=K().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,o){this._history.pushState(e,n,o)}replaceState(e,n,o){this._history.replaceState(e,n,o)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(n){return new(n||t)};static \u0275prov=l({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function nt(t,r){return t?r?t.endsWith("/")?r.startsWith("/")?t+r.slice(1):t+r:r.startsWith("/")?t+r:`${t}/${r}`:t:r}function Wn(t){let r=t.search(/#|\?|$/);return t[r-1]==="/"?t.slice(0,r-1)+t.slice(r):t}function U(t){return t&&t[0]!=="?"?`?${t}`:t}var be=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=l({token:t,factory:()=>c(to),providedIn:"root"})}return t})(),xt=new h(""),to=(()=>{class t extends be{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??c(_).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return nt(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+U(this._platformLocation.search),o=this._platformLocation.hash;return o&&e?`${n}${o}`:n}pushState(e,n,o,i){let a=this.prepareExternalUrl(o+U(i));this._platformLocation.pushState(e,n,a)}replaceState(e,n,o,i){let a=this.prepareExternalUrl(o+U(i));this._platformLocation.replaceState(e,n,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(f(Q),f(xt,8))};static \u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Zn=(()=>{class t{_subject=new ne;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=oo(Wn(Yn(n))),this._locationStrategy.onPopState(o=>{this._subject.next({url:this.path(!0),pop:!0,state:o.state,type:o.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+U(n))}normalize(e){return t.stripTrailingSlash(ro(this._basePath,Yn(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",o=null){this._locationStrategy.pushState(o,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+U(n)),o)}replaceState(e,n="",o=null){this._locationStrategy.replaceState(o,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+U(n)),o)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(o=>o(e,n))}subscribe(e,n,o){return this._subject.subscribe({next:e,error:n??void 0,complete:o??void 0})}static normalizeQueryParams=U;static joinWithSlash=nt;static stripTrailingSlash=Wn;static \u0275fac=function(n){return new(n||t)(f(be))};static \u0275prov=l({token:t,factory:()=>no(),providedIn:"root"})}return t})();function no(){return new Zn(f(be))}function ro(t,r){if(!t||!r.startsWith(t))return r;let e=r.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:r}function Yn(t){return t.replace(/\/index.html$/,"")}function oo(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var io=(()=>{class t extends be{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,n!=null&&(this._baseHref=n)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let n=this._platformLocation.hash??"#";return n.length>0?n.substring(1):n}prepareExternalUrl(e){let n=nt(this._baseHref,e);return n.length>0?"#"+n:n}pushState(e,n,o,i){let a=this.prepareExternalUrl(o+U(i))||this._platformLocation.pathname;this._platformLocation.pushState(e,n,a)}replaceState(e,n,o,i){let a=this.prepareExternalUrl(o+U(i))||this._platformLocation.pathname;this._platformLocation.replaceState(e,n,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(f(Q),f(xt,8))};static \u0275prov=l({token:t,factory:t.\u0275fac})}return t})();var S=(function(t){return t[t.Format=0]="Format",t[t.Standalone=1]="Standalone",t})(S||{}),b=(function(t){return t[t.Narrow=0]="Narrow",t[t.Abbreviated=1]="Abbreviated",t[t.Wide=2]="Wide",t[t.Short=3]="Short",t})(b||{}),x=(function(t){return t[t.Short=0]="Short",t[t.Medium=1]="Medium",t[t.Long=2]="Long",t[t.Full=3]="Full",t})(x||{}),J={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function Jn(t){return L(t)[A.LocaleId]}function qn(t,r,e){let n=L(t),o=[n[A.DayPeriodsFormat],n[A.DayPeriodsStandalone]],i=k(o,r);return k(i,e)}function Qn(t,r,e){let n=L(t),o=[n[A.DaysFormat],n[A.DaysStandalone]],i=k(o,r);return k(i,e)}function er(t,r,e){let n=L(t),o=[n[A.MonthsFormat],n[A.MonthsStandalone]],i=k(o,r);return k(i,e)}function tr(t,r){let n=L(t)[A.Eras];return k(n,r)}function Oe(t,r){let e=L(t);return k(e[A.DateFormat],r)}function Pe(t,r){let e=L(t);return k(e[A.TimeFormat],r)}function Ne(t,r){let n=L(t)[A.DateTimeFormat];return k(n,r)}function Le(t,r){let e=L(t),n=e[A.NumberSymbols][r];if(typeof n>"u"){if(r===J.CurrencyDecimal)return e[A.NumberSymbols][J.Decimal];if(r===J.CurrencyGroup)return e[A.NumberSymbols][J.Group]}return n}function nr(t){if(!t[A.ExtraData])throw new D(2303,!1)}function rr(t){let r=L(t);return nr(r),(r[A.ExtraData][2]||[]).map(n=>typeof n=="string"?Ot(n):[Ot(n[0]),Ot(n[1])])}function or(t,r,e){let n=L(t);nr(n);let o=[n[A.ExtraData][0],n[A.ExtraData][1]],i=k(o,r)||[];return k(i,e)||[]}function k(t,r){for(let e=r;e>-1;e--)if(typeof t[e]<"u")return t[e];throw new D(2304,!1)}function Ot(t){let[r,e]=t.split(":");return{hours:+r,minutes:+e}}var ao=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,rt={},so=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;function ir(t,r,e,n){let o=bo(t);r=X(e,r)||r;let a=[],s;for(;r;)if(s=so.exec(r),s){a=a.concat(s.slice(1));let m=a.pop();if(!m)break;r=m}else{a.push(r);break}let u=o.getTimezoneOffset();n&&(u=sr(n,u),o=go(o,n));let d="";return a.forEach(m=>{let g=po(m);d+=g?g(o,e,u):m==="''"?"'":m.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),d}function ct(t,r,e){let n=new Date(0);return n.setFullYear(t,r,e),n.setHours(0,0,0),n}function X(t,r){let e=Jn(t);if(rt[e]??={},rt[e][r])return rt[e][r];let n="";switch(r){case"shortDate":n=Oe(t,x.Short);break;case"mediumDate":n=Oe(t,x.Medium);break;case"longDate":n=Oe(t,x.Long);break;case"fullDate":n=Oe(t,x.Full);break;case"shortTime":n=Pe(t,x.Short);break;case"mediumTime":n=Pe(t,x.Medium);break;case"longTime":n=Pe(t,x.Long);break;case"fullTime":n=Pe(t,x.Full);break;case"short":let o=X(t,"shortTime"),i=X(t,"shortDate");n=ot(Ne(t,x.Short),[o,i]);break;case"medium":let a=X(t,"mediumTime"),s=X(t,"mediumDate");n=ot(Ne(t,x.Medium),[a,s]);break;case"long":let u=X(t,"longTime"),d=X(t,"longDate");n=ot(Ne(t,x.Long),[u,d]);break;case"full":let m=X(t,"fullTime"),g=X(t,"fullDate");n=ot(Ne(t,x.Full),[m,g]);break}return n&&(rt[e][r]=n),n}function ot(t,r){return r&&(t=t.replace(/\{([^}]+)}/g,function(e,n){return r!=null&&n in r?r[n]:e})),t}function z(t,r,e="-",n,o){let i="";(t<0||o&&t<=0)&&(o?t=-t+1:(t=-t,i=e));let a=String(t);for(;a.length<r;)a="0"+a;return n&&(a=a.slice(a.length-r)),i+a}function co(t,r){return z(t,3).substring(0,r)}function C(t,r,e=0,n=!1,o=!1){return function(i,a){let s=uo(t,i);if((e>0||s>-e)&&(s+=e),t===3)s===0&&e===-12&&(s=12);else if(t===6)return co(s,r);let u=Le(a,J.MinusSign);return z(s,r,u,n,o)}}function uo(t,r){switch(t){case 0:return r.getFullYear();case 1:return r.getMonth();case 2:return r.getDate();case 3:return r.getHours();case 4:return r.getMinutes();case 5:return r.getSeconds();case 6:return r.getMilliseconds();case 7:return r.getDay();default:throw new D(2301,!1)}}function v(t,r,e=S.Format,n=!1){return function(o,i){return lo(o,i,t,r,e,n)}}function lo(t,r,e,n,o,i){switch(e){case 2:return er(r,o,n)[t.getMonth()];case 1:return Qn(r,o,n)[t.getDay()];case 0:let a=t.getHours(),s=t.getMinutes();if(i){let d=rr(r),m=or(r,o,n),g=d.findIndex(T=>{if(Array.isArray(T)){let[j,O]=T,F=a>=j.hours&&s>=j.minutes,p=a<O.hours||a===O.hours&&s<O.minutes;if(j.hours<O.hours){if(F&&p)return!0}else if(F||p)return!0}else if(T.hours===a&&T.minutes===s)return!0;return!1});if(g!==-1)return m[g]}return qn(r,o,n)[a<12?0:1];case 3:return tr(r,n)[t.getFullYear()<=0?0:1];default:let u=e;throw new D(2302,!1)}}function it(t){return function(r,e,n){let o=-1*n,i=Le(e,J.MinusSign),a=o>0?Math.floor(o/60):Math.ceil(o/60);switch(t){case 0:return(o>=0?"+":"")+z(a,2,i)+z(Math.abs(o%60),2,i);case 1:return"GMT"+(o>=0?"+":"")+z(a,1,i);case 2:return"GMT"+(o>=0?"+":"")+z(a,2,i)+":"+z(Math.abs(o%60),2,i);case 3:return n===0?"Z":(o>=0?"+":"")+z(a,2,i)+":"+z(Math.abs(o%60),2,i);default:throw new D(2310,!1)}}}var mo=0,st=4;function fo(t){let r=ct(t,mo,1).getDay();return ct(t,0,1+(r<=st?st:st+7)-r)}function ar(t){let r=t.getDay(),e=r===0?-3:st-r;return ct(t.getFullYear(),t.getMonth(),t.getDate()+e)}function Pt(t,r=!1){return function(e,n){let o;if(r){let i=new Date(e.getFullYear(),e.getMonth(),1).getDay()-1,a=e.getDate();o=1+Math.floor((a+i)/7)}else{let i=ar(e),a=fo(i.getFullYear()),s=i.getTime()-a.getTime();o=1+Math.round(s/6048e5)}return z(o,t,Le(n,J.MinusSign))}}function at(t,r=!1){return function(e,n){let i=ar(e).getFullYear();return z(i,t,Le(n,J.MinusSign),r)}}var Nt={};function po(t){if(Nt[t])return Nt[t];let r;switch(t){case"G":case"GG":case"GGG":r=v(3,b.Abbreviated);break;case"GGGG":r=v(3,b.Wide);break;case"GGGGG":r=v(3,b.Narrow);break;case"y":r=C(0,1,0,!1,!0);break;case"yy":r=C(0,2,0,!0,!0);break;case"yyy":r=C(0,3,0,!1,!0);break;case"yyyy":r=C(0,4,0,!1,!0);break;case"Y":r=at(1);break;case"YY":r=at(2,!0);break;case"YYY":r=at(3);break;case"YYYY":r=at(4);break;case"M":case"L":r=C(1,1,1);break;case"MM":case"LL":r=C(1,2,1);break;case"MMM":r=v(2,b.Abbreviated);break;case"MMMM":r=v(2,b.Wide);break;case"MMMMM":r=v(2,b.Narrow);break;case"LLL":r=v(2,b.Abbreviated,S.Standalone);break;case"LLLL":r=v(2,b.Wide,S.Standalone);break;case"LLLLL":r=v(2,b.Narrow,S.Standalone);break;case"w":r=Pt(1);break;case"ww":r=Pt(2);break;case"W":r=Pt(1,!0);break;case"d":r=C(2,1);break;case"dd":r=C(2,2);break;case"c":case"cc":r=C(7,1);break;case"ccc":r=v(1,b.Abbreviated,S.Standalone);break;case"cccc":r=v(1,b.Wide,S.Standalone);break;case"ccccc":r=v(1,b.Narrow,S.Standalone);break;case"cccccc":r=v(1,b.Short,S.Standalone);break;case"E":case"EE":case"EEE":r=v(1,b.Abbreviated);break;case"EEEE":r=v(1,b.Wide);break;case"EEEEE":r=v(1,b.Narrow);break;case"EEEEEE":r=v(1,b.Short);break;case"a":case"aa":case"aaa":r=v(0,b.Abbreviated);break;case"aaaa":r=v(0,b.Wide);break;case"aaaaa":r=v(0,b.Narrow);break;case"b":case"bb":case"bbb":r=v(0,b.Abbreviated,S.Standalone,!0);break;case"bbbb":r=v(0,b.Wide,S.Standalone,!0);break;case"bbbbb":r=v(0,b.Narrow,S.Standalone,!0);break;case"B":case"BB":case"BBB":r=v(0,b.Abbreviated,S.Format,!0);break;case"BBBB":r=v(0,b.Wide,S.Format,!0);break;case"BBBBB":r=v(0,b.Narrow,S.Format,!0);break;case"h":r=C(3,1,-12);break;case"hh":r=C(3,2,-12);break;case"H":r=C(3,1);break;case"HH":r=C(3,2);break;case"m":r=C(4,1);break;case"mm":r=C(4,2);break;case"s":r=C(5,1);break;case"ss":r=C(5,2);break;case"S":r=C(6,1);break;case"SS":r=C(6,2);break;case"SSS":r=C(6,3);break;case"Z":case"ZZ":case"ZZZ":r=it(0);break;case"ZZZZZ":r=it(3);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":r=it(1);break;case"OOOO":case"ZZZZ":case"zzzz":r=it(2);break;default:return null}return Nt[t]=r,r}function sr(t,r){t=t.replace(/:/g,"");let e=Date.parse("Jan 01, 1970 00:00:00 "+t)/6e4;return isNaN(e)?r:e}function ho(t,r){return t=new Date(t.getTime()),t.setMinutes(t.getMinutes()+r),t}function go(t,r,e){let o=t.getTimezoneOffset(),i=sr(r,o);return ho(t,-1*(i-o))}function bo(t){if(Kn(t))return t;if(typeof t=="number"&&!isNaN(t))return new Date(t);if(typeof t=="string"){if(t=t.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(t)){let[o,i=1,a=1]=t.split("-").map(s=>+s);return ct(o,i-1,a)}let e=parseFloat(t);if(!isNaN(t-e))return new Date(e);let n;if(n=t.match(ao))return yo(n)}let r=new Date(t);if(!Kn(r))throw new D(2311,!1);return r}function yo(t){let r=new Date(0),e=0,n=0,o=t[8]?r.setUTCFullYear:r.setFullYear,i=t[8]?r.setUTCHours:r.setHours;t[9]&&(e=Number(t[9]+t[10]),n=Number(t[9]+t[11])),o.call(r,Number(t[1]),Number(t[2])-1,Number(t[3]));let a=Number(t[4]||0)-e,s=Number(t[5]||0)-n,u=Number(t[6]||0),d=Math.floor(parseFloat("0."+(t[7]||0))*1e3);return i.call(r,a,s,u,d),r}function Kn(t){return t instanceof Date&&!isNaN(t.valueOf())}var vo=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=c(V);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let o=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,o,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,n,o)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,o):!1,get:(e,n,o)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,o)}})}static \u0275fac=function(n){return new(n||t)(Fe(Nn))};static \u0275dir=G({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[wn]})}return t})();function Do(t,r){return new D(2100,!1)}var _o="mediumDate",cr=new h(""),ur=new h(""),Eo=(()=>{class t{locale;defaultTimezone;defaultOptions;constructor(e,n,o){this.locale=e,this.defaultTimezone=n,this.defaultOptions=o}transform(e,n,o,i){if(e==null||e===""||e!==e)return null;try{let a=n??this.defaultOptions?.dateFormat??_o,s=o??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return ir(e,a,i||this.locale,s)}catch(a){throw Do(t,a.message)}}static \u0275fac=function(n){return new(n||t)(Fe(Un,16),Fe(cr,24),Fe(ur,24))};static \u0275pipe=Ln({name:"date",type:t,pure:!0})}return t})();function ke(t,r){r=encodeURIComponent(r);for(let e of t.split(";")){let n=e.indexOf("="),[o,i]=n==-1?[e,""]:[e.slice(0,n),e.slice(n+1)];if(o.trim()===r)return decodeURIComponent(i)}return null}var se=class{};var Lt="browser";function dr(t){return t===Lt}var Be=class{_doc;constructor(r){this._doc=r}manager},ut=(()=>{class t extends Be{constructor(e){super(e)}supports(e){return!0}addEventListener(e,n,o,i){return e.addEventListener(n,o,i),()=>this.removeEventListener(e,n,o,i)}removeEventListener(e,n,o,i){return e.removeEventListener(n,o,i)}static \u0275fac=function(n){return new(n||t)(f(_))};static \u0275prov=l({token:t,factory:t.\u0275fac})}return t})(),mt=new h(""),Ut=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,n){this._zone=n,e.forEach(a=>{a.manager=this});let o=e.filter(a=>!(a instanceof ut));this._plugins=o.slice().reverse();let i=e.find(a=>a instanceof ut);i&&this._plugins.push(i)}addEventListener(e,n,o,i){return this._findPluginFor(n).addEventListener(e,n,o,i)}getZone(){return this._zone}_findPluginFor(e){let n=this._eventNameToPlugin.get(e);if(n)return n;if(n=this._plugins.find(i=>i.supports(e)),!n)throw new D(5101,!1);return this._eventNameToPlugin.set(e,n),n}static \u0275fac=function(n){return new(n||t)(f(mt),f(I))};static \u0275prov=l({token:t,factory:t.\u0275fac})}return t})(),kt="ng-app-id";function lr(t){for(let r of t)r.remove()}function mr(t,r){let e=r.createElement("style");return e.textContent=t,e}function Ao(t,r,e,n){let o=t.head?.querySelectorAll(`style[${kt}="${r}"],link[${kt}="${r}"]`);if(o)for(let i of o)i.removeAttribute(kt),i instanceof HTMLLinkElement?n.set(i.href.slice(i.href.lastIndexOf("/")+1),{usage:0,elements:[i]}):i.textContent&&e.set(i.textContent,{usage:0,elements:[i]})}function jt(t,r){let e=r.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var zt=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,n,o,i={}){this.doc=e,this.appId=n,this.nonce=o,Ao(e,n,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,n){for(let o of e)this.addUsage(o,this.inline,mr);n?.forEach(o=>this.addUsage(o,this.external,jt))}removeStyles(e,n){for(let o of e)this.removeUsage(o,this.inline);n?.forEach(o=>this.removeUsage(o,this.external))}addUsage(e,n,o){let i=n.get(e);i?i.usage++:n.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,o(e,this.doc)))})}removeUsage(e,n){let o=n.get(e);o&&(o.usage--,o.usage<=0&&(lr(o.elements),n.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])lr(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[n,{elements:o}]of this.inline)o.push(this.addElement(e,mr(n,this.doc)));for(let[n,{elements:o}]of this.external)o.push(this.addElement(e,jt(n,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,n){return this.nonce&&n.setAttribute("nonce",this.nonce),e.appendChild(n)}static \u0275fac=function(n){return new(n||t)(f(_),f(Se),f(le,8),f(de))};static \u0275prov=l({token:t,factory:t.\u0275fac})}return t})(),Bt={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},$t=/%COMP%/g;var pr="%COMP%",Mo=`_nghost-${pr}`,Io=`_ngcontent-${pr}`,So=!0,Fo=new h("",{factory:()=>So});function Ro(t){return Io.replace($t,t)}function xo(t){return Mo.replace($t,t)}function hr(t,r){return r.map(e=>e.replace($t,t))}var Vt=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,n,o,i,a,s,u=null,d=null){this.eventManager=e,this.sharedStylesHost=n,this.appId=o,this.removeStylesOnCompDestroy=i,this.doc=a,this.ngZone=s,this.nonce=u,this.tracingService=d,this.defaultRenderer=new je(e,a,s,this.tracingService)}createRenderer(e,n){if(!e||!n)return this.defaultRenderer;let o=this.getOrCreateRenderer(e,n);return o instanceof lt?o.applyToHost(e):o instanceof Ue&&o.applyStyles(),o}getOrCreateRenderer(e,n){let o=this.rendererByCompId,i=o.get(n.id);if(!i){let a=this.doc,s=this.ngZone,u=this.eventManager,d=this.sharedStylesHost,m=this.removeStylesOnCompDestroy,g=this.tracingService;switch(n.encapsulation){case Qe.Emulated:i=new lt(u,d,n,this.appId,m,a,s,g);break;case Qe.ShadowDom:return new dt(u,e,n,a,s,this.nonce,g,d);case Qe.ExperimentalIsolatedShadowDom:return new dt(u,e,n,a,s,this.nonce,g);default:i=new Ue(u,d,n,m,a,s,g);break}o.set(n.id,i)}return i}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(n){return new(n||t)(f(Ut),f(zt),f(Se),f(Fo),f(_),f(I),f(le),f(et,8))};static \u0275prov=l({token:t,factory:t.\u0275fac})}return t})(),je=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(r,e,n,o){this.eventManager=r,this.doc=e,this.ngZone=n,this.tracingService=o}destroy(){}destroyNode=null;createElement(r,e){return e?this.doc.createElementNS(Bt[e]||e,r):this.doc.createElement(r)}createComment(r){return this.doc.createComment(r)}createText(r){return this.doc.createTextNode(r)}appendChild(r,e){(fr(r)?r.content:r).appendChild(e)}insertBefore(r,e,n){r&&(fr(r)?r.content:r).insertBefore(e,n)}removeChild(r,e){e.remove()}selectRootElement(r,e){let n=typeof r=="string"?this.doc.querySelector(r):r;if(!n)throw new D(-5104,!1);return e||(n.textContent=""),n}parentNode(r){return r.parentNode}nextSibling(r){return r.nextSibling}setAttribute(r,e,n,o){if(o){e=o+":"+e;let i=Bt[o];i?r.setAttributeNS(i,e,n):r.setAttribute(e,n)}else r.setAttribute(e,n)}removeAttribute(r,e,n){if(n){let o=Bt[n];o?r.removeAttributeNS(o,e):r.removeAttribute(`${n}:${e}`)}else r.removeAttribute(e)}addClass(r,e){r.classList.add(e)}removeClass(r,e){r.classList.remove(e)}setStyle(r,e,n,o){o&(pe.DashCase|pe.Important)?r.style.setProperty(e,n,o&pe.Important?"important":""):r.style[e]=n}removeStyle(r,e,n){n&pe.DashCase?r.style.removeProperty(e):r.style[e]=""}setProperty(r,e,n){r!=null&&(r[e]=n)}setValue(r,e){r.nodeValue=e}listen(r,e,n,o){if(typeof r=="string"&&(r=K().getGlobalEventTarget(this.doc,r),!r))throw new D(5102,!1);let i=this.decoratePreventDefault(n);return this.tracingService?.wrapEventListener&&(i=this.tracingService.wrapEventListener(r,e,i)),this.eventManager.addEventListener(r,e,i,o)}decoratePreventDefault(r){return e=>{if(e==="__ngUnwrap__")return r;r(e)===!1&&e.preventDefault()}}};function fr(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var dt=class extends je{hostEl;sharedStylesHost;shadowRoot;constructor(r,e,n,o,i,a,s,u){super(r,o,i,s),this.hostEl=e,this.sharedStylesHost=u,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let d=n.styles;d=hr(n.id,d);for(let g of d){let T=document.createElement("style");a&&T.setAttribute("nonce",a),T.textContent=g,this.shadowRoot.appendChild(T)}let m=n.getExternalStyles?.();if(m)for(let g of m){let T=jt(g,o);a&&T.setAttribute("nonce",a),this.shadowRoot.appendChild(T)}}nodeOrShadowRoot(r){return r===this.hostEl?this.shadowRoot:r}appendChild(r,e){return super.appendChild(this.nodeOrShadowRoot(r),e)}insertBefore(r,e,n){return super.insertBefore(this.nodeOrShadowRoot(r),e,n)}removeChild(r,e){return super.removeChild(null,e)}parentNode(r){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(r)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Ue=class extends je{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(r,e,n,o,i,a,s,u){super(r,i,a,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=o;let d=n.styles;this.styles=u?hr(u,d):d,this.styleUrls=n.getExternalStyles?.(u)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Pn.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},lt=class extends Ue{contentAttr;hostAttr;constructor(r,e,n,o,i,a,s,u){let d=o+"-"+n.id;super(r,e,n,i,a,s,u,d),this.contentAttr=Ro(d),this.hostAttr=xo(d)}applyToHost(r){this.applyStyles(),this.setAttribute(r,this.hostAttr,"")}createElement(r,e){let n=super.createElement(r,e);return super.setAttribute(n,this.contentAttr,""),n}};var ft=class t extends xe{supportsDOMEvents=!0;static makeCurrent(){Rt(new t)}onAndCancel(r,e,n,o){return r.addEventListener(e,n,o),()=>{r.removeEventListener(e,n,o)}}dispatchEvent(r,e){r.dispatchEvent(e)}remove(r){r.remove()}createElement(r,e){return e=e||this.getDefaultDocument(),e.createElement(r)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(r){return r.nodeType===Node.ELEMENT_NODE}isShadowRoot(r){return r instanceof DocumentFragment}getGlobalEventTarget(r,e){return e==="window"?window:e==="document"?r:e==="body"?r.body:null}getBaseHref(r){let e=Po();return e==null?null:No(e)}resetBaseElement(){ze=null}getUserAgent(){return window.navigator.userAgent}getCookie(r){return ke(document.cookie,r)}},ze=null;function Po(){return ze=ze||document.head.querySelector("base"),ze?ze.getAttribute("href"):null}function No(t){return new URL(t,document.baseURI).pathname}var Lo=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(n){return new(n||t)};static \u0275prov=l({token:t,factory:t.\u0275fac})}return t})(),gr=["alt","control","meta","shift"],ko={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Bo={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},br=(()=>{class t extends Be{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,n,o,i){let a=t.parseEventName(n),s=t.eventCallback(a.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>K().onAndCancel(e,a.domEventName,s,i))}static parseEventName(e){let n=e.toLowerCase().split("."),o=n.shift();if(n.length===0||!(o==="keydown"||o==="keyup"))return null;let i=t._normalizeKey(n.pop()),a="",s=n.indexOf("code");if(s>-1&&(n.splice(s,1),a="code."),gr.forEach(d=>{let m=n.indexOf(d);m>-1&&(n.splice(m,1),a+=d+".")}),a+=i,n.length!=0||i.length===0)return null;let u={};return u.domEventName=o,u.fullKey=a,u}static matchEventFullKeyCode(e,n){let o=ko[e.key]||e.key,i="";return n.indexOf("code.")>-1&&(o=e.code,i="code."),o==null||!o?!1:(o=o.toLowerCase(),o===" "?o="space":o==="."&&(o="dot"),gr.forEach(a=>{if(a!==o){let s=Bo[a];s(e)&&(i+=a+".")}}),i+=o,i===n)}static eventCallback(e,n,o){return i=>{t.matchEventFullKeyCode(i,e)&&o.runGuarded(()=>n(i))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(n){return new(n||t)(f(_))};static \u0275prov=l({token:t,factory:t.\u0275fac})}return t})();function jo(t,r,e){return Xe(this,null,function*(){let n=E({rootComponent:t},Uo(r,e));return zn(n)})}function Uo(t,r){return{platformRef:r?.platformRef,appProviders:[...Go,...t?.providers??[]],platformProviders:Ho}}function zo(){ft.makeCurrent()}function $o(){return new Tt}function Vo(){return Cn(document),document}var Ho=[{provide:de,useValue:Lt},{provide:Tn,useValue:zo,multi:!0},{provide:_,useFactory:Vo}];var Go=[{provide:vn,useValue:"root"},{provide:Tt,useFactory:$o},{provide:mt,useClass:ut,multi:!0},{provide:mt,useClass:br,multi:!0},Vt,zt,Ut,{provide:he,useExisting:Vt},{provide:se,useClass:Lo},[]];var ee=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(r){r?typeof r=="string"?this.lazyInit=()=>{this.headers=new Map,r.split(`
`).forEach(e=>{let n=e.indexOf(":");if(n>0){let o=e.slice(0,n),i=e.slice(n+1).trim();this.addHeaderEntry(o,i)}})}:typeof Headers<"u"&&r instanceof Headers?(this.headers=new Map,r.forEach((e,n)=>{this.addHeaderEntry(n,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(r).forEach(([e,n])=>{this.setHeaderEntries(e,n)})}:this.headers=new Map}has(r){return this.init(),this.headers.has(r.toLowerCase())}get(r){this.init();let e=this.headers.get(r.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(r){return this.init(),this.headers.get(r.toLowerCase())||null}append(r,e){return this.clone({name:r,value:e,op:"a"})}set(r,e){return this.clone({name:r,value:e,op:"s"})}delete(r,e){return this.clone({name:r,value:e,op:"d"})}maybeSetNormalizedName(r,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,r)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(r=>this.applyUpdate(r)),this.lazyUpdate=null))}copyFrom(r){r.init(),Array.from(r.headers.keys()).forEach(e=>{this.headers.set(e,r.headers.get(e)),this.normalizedNames.set(e,r.normalizedNames.get(e))})}clone(r){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([r]),e}applyUpdate(r){let e=r.name.toLowerCase();switch(r.op){case"a":case"s":let n=r.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(r.name,e);let o=(r.op==="a"?this.headers.get(e):void 0)||[];o.push(...n),this.headers.set(e,o);break;case"d":let i=r.value;if(!i)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=this.headers.get(e);if(!a)return;a=a.filter(s=>i.indexOf(s)===-1),a.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}break}}addHeaderEntry(r,e){let n=r.toLowerCase();this.maybeSetNormalizedName(r,n),this.headers.has(n)?this.headers.get(n).push(e):this.headers.set(n,[e])}setHeaderEntries(r,e){let n=(Array.isArray(e)?e:[e]).map(i=>i.toString()),o=r.toLowerCase();this.headers.set(o,n),this.maybeSetNormalizedName(r,o)}forEach(r){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>r(this.normalizedNames.get(e),this.headers.get(e)))}};var ht=class{map=new Map;set(r,e){return this.map.set(r,e),this}get(r){return this.map.has(r)||this.map.set(r,r.defaultValue()),this.map.get(r)}delete(r){return this.map.delete(r),this}has(r){return this.map.has(r)}keys(){return this.map.keys()}},gt=class{encodeKey(r){return yr(r)}encodeValue(r){return yr(r)}decodeKey(r){return decodeURIComponent(r)}decodeValue(r){return decodeURIComponent(r)}};function Wo(t,r){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(o=>{let i=o.indexOf("="),[a,s]=i==-1?[r.decodeKey(o),""]:[r.decodeKey(o.slice(0,i)),r.decodeValue(o.slice(i+1))],u=e.get(a)||[];u.push(s),e.set(a,u)}),e}var Yo=/%(\d[a-f0-9])/gi,Zo={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function yr(t){return encodeURIComponent(t).replace(Yo,(r,e)=>Zo[e]??r)}function pt(t){return`${t}`}var q=class t{map;encoder;updates=null;cloneFrom=null;constructor(r={}){if(this.encoder=r.encoder||new gt,r.fromString){if(r.fromObject)throw new D(2805,!1);this.map=Wo(r.fromString,this.encoder)}else r.fromObject?(this.map=new Map,Object.keys(r.fromObject).forEach(e=>{let n=r.fromObject[e],o=Array.isArray(n)?n.map(pt):[pt(n)];this.map.set(e,o)})):this.map=null}has(r){return this.init(),this.map.has(r)}get(r){this.init();let e=this.map.get(r);return e?e[0]:null}getAll(r){return this.init(),this.map.get(r)||null}keys(){return this.init(),Array.from(this.map.keys())}append(r,e){return this.clone({param:r,value:e,op:"a"})}appendAll(r){let e=[];return Object.keys(r).forEach(n=>{let o=r[n];Array.isArray(o)?o.forEach(i=>{e.push({param:n,value:i,op:"a"})}):e.push({param:n,value:o,op:"a"})}),this.clone(e)}set(r,e){return this.clone({param:r,value:e,op:"s"})}delete(r,e){return this.clone({param:r,value:e,op:"d"})}toString(){return this.init(),this.keys().map(r=>{let e=this.encoder.encodeKey(r);return this.map.get(r).map(n=>e+"="+this.encoder.encodeValue(n)).join("&")}).filter(r=>r!=="").join("&")}clone(r){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(r),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(r=>this.map.set(r,this.cloneFrom.map.get(r))),this.updates.forEach(r=>{switch(r.op){case"a":case"s":let e=(r.op==="a"?this.map.get(r.param):void 0)||[];e.push(pt(r.value)),this.map.set(r.param,e);break;case"d":if(r.value!==void 0){let n=this.map.get(r.param)||[],o=n.indexOf(pt(r.value));o!==-1&&n.splice(o,1),n.length>0?this.map.set(r.param,n):this.map.delete(r.param)}else{this.map.delete(r.param);break}}}),this.cloneFrom=this.updates=null)}};function Ko(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function vr(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function Dr(t){return typeof Blob<"u"&&t instanceof Blob}function _r(t){return typeof FormData<"u"&&t instanceof FormData}function Xo(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var Er="Content-Type",wr="Accept",Cr="text/plain",Tr="application/json",Jo=`${Tr}, ${Cr}, */*`,ye=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(r,e,n,o){this.url=e,this.method=r.toUpperCase();let i;if(Ko(this.method)||o?(this.body=n!==void 0?n:null,i=o):i=n,i){if(this.reportProgress=!!i.reportProgress,this.withCredentials=!!i.withCredentials,this.keepalive=!!i.keepalive,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params),i.priority&&(this.priority=i.priority),i.cache&&(this.cache=i.cache),i.credentials&&(this.credentials=i.credentials),typeof i.timeout=="number"){if(i.timeout<1||!Number.isInteger(i.timeout))throw new D(2822,"");this.timeout=i.timeout}i.mode&&(this.mode=i.mode),i.redirect&&(this.redirect=i.redirect),i.integrity&&(this.integrity=i.integrity),i.referrer&&(this.referrer=i.referrer),i.referrerPolicy&&(this.referrerPolicy=i.referrerPolicy),this.transferCache=i.transferCache}if(this.headers??=new ee,this.context??=new ht,!this.params)this.params=new q,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let s=e.indexOf("?"),u=s===-1?"?":s<e.length-1?"&":"";this.urlWithParams=e+u+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||vr(this.body)||Dr(this.body)||_r(this.body)||Xo(this.body)?this.body:this.body instanceof q?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||_r(this.body)?null:Dr(this.body)?this.body.type||null:vr(this.body)?null:typeof this.body=="string"?Cr:this.body instanceof q?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?Tr:null}clone(r={}){let e=r.method||this.method,n=r.url||this.url,o=r.responseType||this.responseType,i=r.keepalive??this.keepalive,a=r.priority||this.priority,s=r.cache||this.cache,u=r.mode||this.mode,d=r.redirect||this.redirect,m=r.credentials||this.credentials,g=r.referrer||this.referrer,T=r.integrity||this.integrity,j=r.referrerPolicy||this.referrerPolicy,O=r.transferCache??this.transferCache,F=r.timeout??this.timeout,p=r.body!==void 0?r.body:this.body,y=r.withCredentials??this.withCredentials,R=r.reportProgress??this.reportProgress,Z=r.headers||this.headers,M=r.params||this.params,Ce=r.context??this.context;return r.setHeaders!==void 0&&(Z=Object.keys(r.setHeaders).reduce((Te,te)=>Te.set(te,r.setHeaders[te]),Z)),r.setParams&&(M=Object.keys(r.setParams).reduce((Te,te)=>Te.set(te,r.setParams[te]),M)),new t(e,n,p,{params:M,headers:Z,context:Ce,reportProgress:R,responseType:o,withCredentials:y,transferCache:O,keepalive:i,cache:s,priority:a,timeout:F,mode:u,redirect:d,credentials:m,referrer:g,integrity:T,referrerPolicy:j})}},ce=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(ce||{}),De=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(r,e=200,n="OK"){this.headers=r.headers||new ee,this.status=r.status!==void 0?r.status:e,this.statusText=r.statusText||n,this.url=r.url||null,this.redirected=r.redirected,this.responseType=r.responseType,this.ok=this.status>=200&&this.status<300}},bt=class t extends De{constructor(r={}){super(r)}type=ce.ResponseHeader;clone(r={}){return new t({headers:r.headers||this.headers,status:r.status!==void 0?r.status:this.status,statusText:r.statusText||this.statusText,url:r.url||this.url||void 0})}},$e=class t extends De{body;constructor(r={}){super(r),this.body=r.body!==void 0?r.body:null}type=ce.Response;clone(r={}){return new t({body:r.body!==void 0?r.body:this.body,headers:r.headers||this.headers,status:r.status!==void 0?r.status:this.status,statusText:r.statusText||this.statusText,url:r.url||this.url||void 0,redirected:r.redirected??this.redirected,responseType:r.responseType??this.responseType})}},ve=class extends De{name="HttpErrorResponse";message;error;ok=!1;constructor(r){super(r,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${r.url||"(unknown url)"}`:this.message=`Http failure response for ${r.url||"(unknown url)"}: ${r.status} ${r.statusText}`,this.error=r.error||null}},qo=200,Qo=204;var ei=new h("");var ti=/^\)\]\}',?\n/;var Gt=(()=>{class t{xhrFactory;tracingService=c(et,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new D(-2800,!1);let n=this.xhrFactory;return Ae(null).pipe(bn(()=>new Je(i=>{let a=n.build();if(a.open(e.method,e.urlWithParams),e.withCredentials&&(a.withCredentials=!0),e.headers.forEach((p,y)=>a.setRequestHeader(p,y.join(","))),e.headers.has(wr)||a.setRequestHeader(wr,Jo),!e.headers.has(Er)){let p=e.detectContentTypeHeader();p!==null&&a.setRequestHeader(Er,p)}if(e.timeout&&(a.timeout=e.timeout),e.responseType){let p=e.responseType.toLowerCase();a.responseType=p!=="json"?p:"text"}let s=e.serializeBody(),u=null,d=()=>{if(u!==null)return u;let p=a.statusText||"OK",y=new ee(a.getAllResponseHeaders()),R=a.responseURL||e.url;return u=new bt({headers:y,status:a.status,statusText:p,url:R}),u},m=this.maybePropagateTrace(()=>{let{headers:p,status:y,statusText:R,url:Z}=d(),M=null;y!==Qo&&(M=typeof a.response>"u"?a.responseText:a.response),y===0&&(y=M?qo:0);let Ce=y>=200&&y<300;if(e.responseType==="json"&&typeof M=="string"){let Te=M;M=M.replace(ti,"");try{M=M!==""?JSON.parse(M):null}catch(te){M=Te,Ce&&(Ce=!1,M={error:te,text:M})}}Ce?(i.next(new $e({body:M,headers:p,status:y,statusText:R,url:Z||void 0})),i.complete()):i.error(new ve({error:M,headers:p,status:y,statusText:R,url:Z||void 0}))}),g=this.maybePropagateTrace(p=>{let{url:y}=d(),R=new ve({error:p,status:a.status||0,statusText:a.statusText||"Unknown Error",url:y||void 0});i.error(R)}),T=g;e.timeout&&(T=this.maybePropagateTrace(p=>{let{url:y}=d(),R=new ve({error:new DOMException("Request timed out","TimeoutError"),status:a.status||0,statusText:a.statusText||"Request timeout",url:y||void 0});i.error(R)}));let j=!1,O=this.maybePropagateTrace(p=>{j||(i.next(d()),j=!0);let y={type:ce.DownloadProgress,loaded:p.loaded};p.lengthComputable&&(y.total=p.total),e.responseType==="text"&&a.responseText&&(y.partialText=a.responseText),i.next(y)}),F=this.maybePropagateTrace(p=>{let y={type:ce.UploadProgress,loaded:p.loaded};p.lengthComputable&&(y.total=p.total),i.next(y)});return a.addEventListener("load",m),a.addEventListener("error",g),a.addEventListener("timeout",T),a.addEventListener("abort",g),e.reportProgress&&(a.addEventListener("progress",O),s!==null&&a.upload&&a.upload.addEventListener("progress",F)),a.send(s),i.next({type:ce.Sent}),()=>{a.removeEventListener("error",g),a.removeEventListener("abort",g),a.removeEventListener("load",m),a.removeEventListener("timeout",T),e.reportProgress&&(a.removeEventListener("progress",O),s!==null&&a.upload&&a.upload.removeEventListener("progress",F)),a.readyState!==a.DONE&&a.abort()}})))}static \u0275fac=function(n){return new(n||t)(f(se))};static \u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function ni(t,r){return r(t)}function ri(t,r,e){return(n,o)=>Dn(e,()=>r(n,i=>t(i,o)))}var Wt=new h("",{factory:()=>[]}),Ar=new h(""),Mr=new h("",{factory:()=>!0});var Yt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=l({token:t,factory:function(n){let o=null;return n?o=new(n||t):o=f(Gt),o},providedIn:"root"})}return t})();var yt=(()=>{class t{backend;injector;chain=null;pendingTasks=c(En);contributeToStability=c(Mr);constructor(e,n){this.backend=e,this.injector=n}handle(e){if(this.chain===null){let n=Array.from(new Set([...this.injector.get(Wt),...this.injector.get(Ar,[])]));this.chain=n.reduceRight((o,i)=>ri(o,i,this.injector),ni)}if(this.contributeToStability){let n=this.pendingTasks.add();return this.chain(e,o=>this.backend.handle(o)).pipe(hn(n))}else return this.chain(e,n=>this.backend.handle(n))}static \u0275fac=function(n){return new(n||t)(f(Yt),f(Me))};static \u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Zt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=l({token:t,factory:function(n){let o=null;return n?o=new(n||t):o=f(yt),o},providedIn:"root"})}return t})();function Ht(t,r){return{body:r,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,credentials:t.credentials,transferCache:t.transferCache,timeout:t.timeout,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect,integrity:t.integrity,referrer:t.referrer,referrerPolicy:t.referrerPolicy}}var Ir=(()=>{class t{handler;constructor(e){this.handler=e}request(e,n,o={}){let i;if(e instanceof ye)i=e;else{let u;o.headers instanceof ee?u=o.headers:u=new ee(o.headers);let d;o.params&&(o.params instanceof q?d=o.params:d=new q({fromObject:o.params})),i=new ye(e,n,o.body!==void 0?o.body:null,{headers:u,context:o.context,params:d,reportProgress:o.reportProgress,responseType:o.responseType||"json",withCredentials:o.withCredentials,transferCache:o.transferCache,keepalive:o.keepalive,priority:o.priority,cache:o.cache,mode:o.mode,redirect:o.redirect,credentials:o.credentials,referrer:o.referrer,referrerPolicy:o.referrerPolicy,integrity:o.integrity,timeout:o.timeout})}let a=Ae(i).pipe(mn(u=>this.handler.handle(u)));if(e instanceof ye||o.observe==="events")return a;let s=a.pipe(qe(u=>u instanceof $e));switch(o.observe||"body"){case"body":switch(i.responseType){case"arraybuffer":return s.pipe(re(u=>{if(u.body!==null&&!(u.body instanceof ArrayBuffer))throw new D(2806,!1);return u.body}));case"blob":return s.pipe(re(u=>{if(u.body!==null&&!(u.body instanceof Blob))throw new D(2807,!1);return u.body}));case"text":return s.pipe(re(u=>{if(u.body!==null&&typeof u.body!="string")throw new D(2808,!1);return u.body}));default:return s.pipe(re(u=>u.body))}case"response":return s;default:throw new D(2809,!1)}}delete(e,n={}){return this.request("DELETE",e,n)}get(e,n={}){return this.request("GET",e,n)}head(e,n={}){return this.request("HEAD",e,n)}jsonp(e,n){return this.request("JSONP",e,{params:new q().append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,n={}){return this.request("OPTIONS",e,n)}patch(e,n,o={}){return this.request("PATCH",e,Ht(o,n))}post(e,n,o={}){return this.request("POST",e,Ht(o,n))}put(e,n,o={}){return this.request("PUT",e,Ht(o,n))}static \u0275fac=function(n){return new(n||t)(f(Zt))};static \u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var oi=new h("",{factory:()=>!0}),ii="XSRF-TOKEN",ai=new h("",{factory:()=>ii}),si="X-XSRF-TOKEN",ci=new h("",{factory:()=>si}),ui=(()=>{class t{cookieName=c(ai);doc=c(_);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=ke(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(n){return new(n||t)};static \u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Sr=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=l({token:t,factory:function(n){let o=null;return n?o=new(n||t):o=f(ui),o},providedIn:"root"})}return t})();function di(t,r){if(!c(oi)||t.method==="GET"||t.method==="HEAD")return r(t);try{let o=c(Q).href,{origin:i}=new URL(o),{origin:a}=new URL(t.url,i);if(i!==a)return r(t)}catch(o){return r(t)}let e=c(Sr).getToken(),n=c(ci);return e!=null&&!t.headers.has(n)&&(t=t.clone({headers:t.headers.set(n,e)})),r(t)}var Kt=(function(t){return t[t.Interceptors=0]="Interceptors",t[t.LegacyInterceptors=1]="LegacyInterceptors",t[t.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",t[t.NoXsrfProtection=3]="NoXsrfProtection",t[t.JsonpSupport=4]="JsonpSupport",t[t.RequestsMadeViaParent=5]="RequestsMadeViaParent",t[t.Fetch=6]="Fetch",t})(Kt||{});function li(t,r){return{\u0275kind:t,\u0275providers:r}}function mi(...t){let r=[Ir,yt,{provide:Zt,useExisting:yt},{provide:Yt,useFactory:()=>c(ei,{optional:!0})??c(Gt)},{provide:Wt,useValue:di,multi:!0}];for(let e of t)r.push(...e.\u0275providers);return Ct(r)}function fi(t){return li(Kt.Interceptors,t.map(r=>({provide:Wt,useValue:r,multi:!0})))}var Vc=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(n){return new(n||t)(f(_))};static \u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var pi=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=l({token:t,factory:function(n){let o=null;return n?o=new(n||t):o=f(hi),o},providedIn:"root"})}return t})(),hi=(()=>{class t extends pi{_doc;constructor(e){super(),this._doc=e}sanitize(e,n){if(n==null)return null;switch(e){case oe.NONE:return n;case oe.HTML:return fe(n,"HTML")?me(n):On(this._doc,String(n)).toString();case oe.STYLE:return fe(n,"Style")?me(n):n;case oe.SCRIPT:if(fe(n,"Script"))return me(n);throw new D(5200,!1);case oe.URL:return fe(n,"URL")?me(n):xn(String(n));case oe.RESOURCE_URL:if(fe(n,"ResourceURL"))return me(n);throw new D(5201,!1);default:throw new D(5202,!1)}}bypassSecurityTrustHtml(e){return Mn(e)}bypassSecurityTrustStyle(e){return In(e)}bypassSecurityTrustScript(e){return Sn(e)}bypassSecurityTrustUrl(e){return Fn(e)}bypassSecurityTrustResourceUrl(e){return Rn(e)}static \u0275fac=function(n){return new(n||t)(f(_))};static \u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Ve(t){return t.buttons===0||t.detail===0}function He(t){let r=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!r&&r.identifier===-1&&(r.radiusX==null||r.radiusX===1)&&(r.radiusY==null||r.radiusY===1)}var Xt;function Fr(){if(Xt==null){let t=typeof document<"u"?document.head:null;Xt=!!(t&&(t.createShadowRoot||t.attachShadow))}return Xt}function Jt(t){if(Fr()){let r=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&r instanceof ShadowRoot)return r}return null}function $(t){return t.composedPath?t.composedPath()[0]:t.target}var qt;try{qt=typeof Intl<"u"&&Intl.v8BreakIterator}catch(t){qt=!1}var W=(()=>{class t{_platformId=c(de);isBrowser=this._platformId?dr(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||qt)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ge;function Rr(){if(Ge==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Ge=!0}))}finally{Ge=Ge||!1}return Ge}function _e(t){return Rr()?t:!!t.capture}function Qt(t,r=0){return xr(t)?Number(t):arguments.length===2?r:0}function xr(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function Y(t){return t instanceof H?t.nativeElement:t}var Or=new h("cdk-input-modality-detector-options"),Pr={ignoreKeys:[18,17,224,91,16]},Nr=650,en={passive:!0,capture:!0},Lr=(()=>{class t{_platform=c(W);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new ln(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(n=>n===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=$(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<Nr||(this._modality.next(Ve(e)?"keyboard":"mouse"),this._mostRecentTarget=$(e))};_onTouchstart=e=>{if(He(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=$(e)};constructor(){let e=c(I),n=c(_),o=c(Or,{optional:!0});if(this._options=E(E({},Pr),o),this.modalityDetected=this._modality.pipe(gn(1)),this.modalityChanged=this.modalityDetected.pipe(pn()),this._platform.isBrowser){let i=c(he).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[i.listen(n,"keydown",this._onKeydown,en),i.listen(n,"mousedown",this._onMousedown,en),i.listen(n,"touchstart",this._onTouchstart,en)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(n){return new(n||t)};static \u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),We=(function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t})(We||{}),kr=new h("cdk-focus-monitor-default-options"),vt=_e({passive:!0,capture:!0}),tn=(()=>{class t{_ngZone=c(I);_platform=c(W);_inputModalityDetector=c(Lr);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=c(_);_stopInputModalityDetector=new ne;constructor(){let e=c(kr,{optional:!0});this._detectionMode=e?.detectionMode||We.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let n=$(e);for(let o=n;o;o=o.parentElement)e.type==="focus"?this._onFocus(e,o):this._onBlur(e,o)};monitor(e,n=!1){let o=Y(e);if(!this._platform.isBrowser||o.nodeType!==1)return Ae();let i=Jt(o)||this._document,a=this._elementInfo.get(o);if(a)return n&&(a.checkChildren=!0),a.subject;let s={checkChildren:n,subject:new ne,rootNode:i};return this._elementInfo.set(o,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let n=Y(e),o=this._elementInfo.get(n);o&&(o.subject.complete(),this._setClasses(n),this._elementInfo.delete(n),this._removeGlobalListeners(o))}focusVia(e,n,o){let i=Y(e),a=this._document.activeElement;i===a?this._getClosestElementsInfo(i).forEach(([s,u])=>this._originChanged(s,n,u)):(this._setOrigin(n),typeof i.focus=="function"&&i.focus(o))}ngOnDestroy(){this._elementInfo.forEach((e,n)=>this.stopMonitoring(n))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===We.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,n){e.classList.toggle("cdk-focused",!!n),e.classList.toggle("cdk-touch-focused",n==="touch"),e.classList.toggle("cdk-keyboard-focused",n==="keyboard"),e.classList.toggle("cdk-mouse-focused",n==="mouse"),e.classList.toggle("cdk-program-focused",n==="program")}_setOrigin(e,n=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&n,this._detectionMode===We.IMMEDIATE){clearTimeout(this._originTimeoutId);let o=this._originFromTouchInteraction?Nr:1;this._originTimeoutId=setTimeout(()=>this._origin=null,o)}})}_onFocus(e,n){let o=this._elementInfo.get(n),i=$(e);!o||!o.checkChildren&&n!==i||this._originChanged(n,this._getFocusOrigin(i),o)}_onBlur(e,n){let o=this._elementInfo.get(n);!o||o.checkChildren&&e.relatedTarget instanceof Node&&n.contains(e.relatedTarget)||(this._setClasses(n),this._emitOrigin(o,null))}_emitOrigin(e,n){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(n))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let n=e.rootNode,o=this._rootNodeFocusListenerCount.get(n)||0;o||this._ngZone.runOutsideAngular(()=>{n.addEventListener("focus",this._rootNodeFocusAndBlurListener,vt),n.addEventListener("blur",this._rootNodeFocusAndBlurListener,vt)}),this._rootNodeFocusListenerCount.set(n,o+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(yn(this._stopInputModalityDetector)).subscribe(i=>{this._setOrigin(i,!0)}))}_removeGlobalListeners(e){let n=e.rootNode;if(this._rootNodeFocusListenerCount.has(n)){let o=this._rootNodeFocusListenerCount.get(n);o>1?this._rootNodeFocusListenerCount.set(n,o-1):(n.removeEventListener("focus",this._rootNodeFocusAndBlurListener,vt),n.removeEventListener("blur",this._rootNodeFocusAndBlurListener,vt),this._rootNodeFocusListenerCount.delete(n))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,n,o){this._setClasses(e,n),this._emitOrigin(o,n),this._lastFocusOrigin=n}_getClosestElementsInfo(e){let n=[];return this._elementInfo.forEach((o,i)=>{(i===e||o.checkChildren&&i.contains(e))&&n.push([i,o])}),n}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:n,mostRecentModality:o}=this._inputModalityDetector;if(o!=="mouse"||!n||n===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let i=e.labels;if(i){for(let a=0;a<i.length;a++)if(i[a].contains(n))return!0}return!1}static \u0275fac=function(n){return new(n||t)};static \u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Dt=new WeakMap,Ye=(()=>{class t{_appRef;_injector=c(V);_environmentInjector=c(Me);load(e){let n=this._appRef=this._appRef||this._injector.get(It),o=Dt.get(n);o||(o={loaders:new Set,refs:[]},Dt.set(n,o),n.onDestroy(()=>{Dt.get(n)?.refs.forEach(i=>i.destroy()),Dt.delete(n)})),o.loaders.has(e)||(o.loaders.add(e),o.refs.push(Vn(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var _t;function gi(){if(_t===void 0&&(_t=null,typeof window<"u")){let t=window;t.trustedTypes!==void 0&&(_t=t.trustedTypes.createPolicy("angular#components",{createHTML:r=>r}))}return _t}function Eu(t){return gi()?.createHTML(t)||t}var Br=new Set,ue,nn=(()=>{class t{_platform=c(W);_nonce=c(le,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):yi}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&bi(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function bi(t,r){if(!Br.has(t))try{ue||(ue=document.createElement("style"),r&&ue.setAttribute("nonce",r),ue.setAttribute("type","text/css"),document.head.appendChild(ue)),ue.sheet&&(ue.sheet.insertRule(`@media ${t} {body{ }}`,0),Br.add(t))}catch(e){console.error(e)}}function yi(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}function vi(t){if(t.type==="characterData"&&t.target instanceof Comment)return!0;if(t.type==="childList"){for(let r=0;r<t.addedNodes.length;r++)if(!(t.addedNodes[r]instanceof Comment))return!1;for(let r=0;r<t.removedNodes.length;r++)if(!(t.removedNodes[r]instanceof Comment))return!1;return!0}return!1}var jr=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Di=(()=>{class t{_mutationObserverFactory=c(jr);_observedElements=new Map;_ngZone=c(I);constructor(){}ngOnDestroy(){this._observedElements.forEach((e,n)=>this._cleanupObserver(n))}observe(e){let n=Y(e);return new Je(o=>{let a=this._observeElement(n).pipe(re(s=>s.filter(u=>!vi(u))),qe(s=>!!s.length)).subscribe(s=>{this._ngZone.run(()=>{o.next(s)})});return()=>{a.unsubscribe(),this._unobserveElement(n)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let n=new ne,o=this._mutationObserverFactory.create(i=>n.next(i));o&&o.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:o,stream:n,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:n,stream:o}=this._observedElements.get(e);n&&n.disconnect(),o.complete(),this._observedElements.delete(e)}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Bu=(()=>{class t{_contentObserver=c(Di);_elementRef=c(H);event=new Ie;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=Qt(e),this._subscribe()}_debounce;_currentSubscription=null;constructor(){}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(fn(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=G({type:t,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",ae],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return t})(),ju=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=N({type:t});static \u0275inj=P({providers:[jr]})}return t})();var rn={},on=class t{_appId=c(Se);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(r,e=!1){return this._appId!=="ng"&&(r+=this._appId),rn.hasOwnProperty(r)||(rn[r]=0),`${r}${e?t._infix+"-":""}${rn[r]++}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})};var Ee,Ur=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function Xu(){if(Ee)return Ee;if(typeof document!="object"||!document)return Ee=new Set(Ur),Ee;let t=document.createElement("input");return Ee=new Set(Ur.filter(r=>(t.setAttribute("type",r),t.type===r))),Ee}var _i=new h("MATERIAL_ANIMATIONS"),zr=null;function Ei(){return c(_i,{optional:!0})?.animationsDisabled||c(An,{optional:!0})==="NoopAnimations"?"di-disabled":(zr??=c(nn).matchMedia("(prefers-reduced-motion)").matches,zr?"reduced-motion":"enabled")}function we(){return Ei()!=="enabled"}function sd(t){return t!=null&&`${t}`!="false"}var B=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})(B||{}),an=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=B.HIDDEN;constructor(r,e,n,o=!1){this._renderer=r,this.element=e,this.config=n,this._animationForciblyDisabledThroughCss=o}fadeOut(){this._renderer.fadeOutRipple(this)}},$r=_e({passive:!0,capture:!0}),sn=class{_events=new Map;addHandler(r,e,n,o){let i=this._events.get(e);if(i){let a=i.get(n);a?a.add(o):i.set(n,new Set([o]))}else this._events.set(e,new Map([[n,new Set([o])]])),r.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,$r)})}removeHandler(r,e,n){let o=this._events.get(r);if(!o)return;let i=o.get(e);i&&(i.delete(n),i.size===0&&o.delete(e),o.size===0&&(this._events.delete(r),document.removeEventListener(r,this._delegateEventHandler,$r)))}_delegateEventHandler=r=>{let e=$(r);e&&this._events.get(r.type)?.forEach((n,o)=>{(o===e||o.contains(e))&&n.forEach(i=>i.handleEvent(r))})}},Ze={enterDuration:225,exitDuration:150},wi=800,Vr=_e({passive:!0,capture:!0}),Hr=["mousedown","touchstart"],Gr=["mouseup","mouseleave","touchend","touchcancel"],Ci=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=ie({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(n,o){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return t})(),Ke=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new sn;constructor(r,e,n,o,i){this._target=r,this._ngZone=e,this._platform=o,o.isBrowser&&(this._containerElement=Y(n)),i&&i.get(Ye).load(Ci)}fadeInRipple(r,e,n={}){let o=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),i=E(E({},Ze),n.animation);n.centered&&(r=o.left+o.width/2,e=o.top+o.height/2);let a=n.radius||Ti(r,e,o),s=r-o.left,u=e-o.top,d=i.enterDuration,m=document.createElement("div");m.classList.add("mat-ripple-element"),m.style.left=`${s-a}px`,m.style.top=`${u-a}px`,m.style.height=`${a*2}px`,m.style.width=`${a*2}px`,n.color!=null&&(m.style.backgroundColor=n.color),m.style.transitionDuration=`${d}ms`,this._containerElement.appendChild(m);let g=window.getComputedStyle(m),T=g.transitionProperty,j=g.transitionDuration,O=T==="none"||j==="0s"||j==="0s, 0s"||o.width===0&&o.height===0,F=new an(this,m,n,O);m.style.transform="scale3d(1, 1, 1)",F.state=B.FADING_IN,n.persistent||(this._mostRecentTransientRipple=F);let p=null;return!O&&(d||i.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let y=()=>{p&&(p.fallbackTimer=null),clearTimeout(Z),this._finishRippleTransition(F)},R=()=>this._destroyRipple(F),Z=setTimeout(R,d+100);m.addEventListener("transitionend",y),m.addEventListener("transitioncancel",R),p={onTransitionEnd:y,onTransitionCancel:R,fallbackTimer:Z}}),this._activeRipples.set(F,p),(O||!d)&&this._finishRippleTransition(F),F}fadeOutRipple(r){if(r.state===B.FADING_OUT||r.state===B.HIDDEN)return;let e=r.element,n=E(E({},Ze),r.config.animation);e.style.transitionDuration=`${n.exitDuration}ms`,e.style.opacity="0",r.state=B.FADING_OUT,(r._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(r)}fadeOutAll(){this._getActiveRipples().forEach(r=>r.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(r=>{r.config.persistent||r.fadeOut()})}setupTriggerEvents(r){let e=Y(r);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,Hr.forEach(n=>{t._eventManager.addHandler(this._ngZone,n,e,this)}))}handleEvent(r){r.type==="mousedown"?this._onMousedown(r):r.type==="touchstart"?this._onTouchStart(r):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Gr.forEach(e=>{this._triggerElement.addEventListener(e,this,Vr)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(r){r.state===B.FADING_IN?this._startFadeOutTransition(r):r.state===B.FADING_OUT&&this._destroyRipple(r)}_startFadeOutTransition(r){let e=r===this._mostRecentTransientRipple,{persistent:n}=r.config;r.state=B.VISIBLE,!n&&(!e||!this._isPointerDown)&&r.fadeOut()}_destroyRipple(r){let e=this._activeRipples.get(r)??null;this._activeRipples.delete(r),this._activeRipples.size||(this._containerRect=null),r===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),r.state=B.HIDDEN,e!==null&&(r.element.removeEventListener("transitionend",e.onTransitionEnd),r.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),r.element.remove()}_onMousedown(r){let e=Ve(r),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+wi;!this._target.rippleDisabled&&!e&&!n&&(this._isPointerDown=!0,this.fadeInRipple(r.clientX,r.clientY,this._target.rippleConfig))}_onTouchStart(r){if(!this._target.rippleDisabled&&!He(r)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=r.changedTouches;if(e)for(let n=0;n<e.length;n++)this.fadeInRipple(e[n].clientX,e[n].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(r=>{let e=r.state===B.VISIBLE||r.config.terminateOnPointerUp&&r.state===B.FADING_IN;!r.config.persistent&&e&&r.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let r=this._triggerElement;r&&(Hr.forEach(e=>t._eventManager.removeHandler(e,r,this)),this._pointerUpEventsRegistered&&(Gr.forEach(e=>r.removeEventListener(e,this,Vr)),this._pointerUpEventsRegistered=!1))}};function Ti(t,r,e){let n=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),o=Math.max(Math.abs(r-e.top),Math.abs(r-e.bottom));return Math.sqrt(n*n+o*o)}var cn=new h("mat-ripple-global-options"),_d=(()=>{class t{_elementRef=c(H);_animationsDisabled=we();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=c(I),n=c(W),o=c(cn,{optional:!0}),i=c(V);this._globalOptions=o||{},this._rippleRenderer=new Ke(this,e,this._elementRef,n,i)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:E(E(E({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,n=0,o){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,n,E(E({},this.rippleConfig),o)):this._rippleRenderer.fadeInRipple(0,0,E(E({},this.rippleConfig),e))}static \u0275fac=function(n){return new(n||t)};static \u0275dir=G({type:t,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(n,o){n&2&&ge("mat-ripple-unbounded",o.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return t})();var Ai={capture:!0},Mi=["focus","mousedown","mouseenter","touchstart"],un="mat-ripple-loader-uninitialized",dn="mat-ripple-loader-class-name",Wr="mat-ripple-loader-centered",Et="mat-ripple-loader-disabled",Yr=(()=>{class t{_document=c(_);_animationsDisabled=we();_globalRippleOptions=c(cn,{optional:!0});_platform=c(W);_ngZone=c(I);_injector=c(V);_eventCleanups;_hosts=new Map;constructor(){let e=c(he).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>Mi.map(n=>e.listen(this._document,n,this._onInteraction,Ai)))}ngOnDestroy(){let e=this._hosts.keys();for(let n of e)this.destroyRipple(n);this._eventCleanups.forEach(n=>n())}configureRipple(e,n){e.setAttribute(un,this._globalRippleOptions?.namespace??""),(n.className||!e.hasAttribute(dn))&&e.setAttribute(dn,n.className||""),n.centered&&e.setAttribute(Wr,""),n.disabled&&e.setAttribute(Et,"")}setDisabled(e,n){let o=this._hosts.get(e);o?(o.target.rippleDisabled=n,!n&&!o.hasSetUpEvents&&(o.hasSetUpEvents=!0,o.renderer.setupTriggerEvents(e))):n?e.setAttribute(Et,""):e.removeAttribute(Et)}_onInteraction=e=>{let n=$(e);if(n instanceof HTMLElement){let o=n.closest(`[${un}="${this._globalRippleOptions?.namespace??""}"]`);o&&this._createRipple(o)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let n=this._document.createElement("span");n.classList.add("mat-ripple",e.getAttribute(dn)),e.append(n);let o=this._globalRippleOptions,i=this._animationsDisabled?0:o?.animation?.enterDuration??Ze.enterDuration,a=this._animationsDisabled?0:o?.animation?.exitDuration??Ze.exitDuration,s={rippleDisabled:this._animationsDisabled||o?.disabled||e.hasAttribute(Et),rippleConfig:{centered:e.hasAttribute(Wr),terminateOnPointerUp:o?.terminateOnPointerUp,animation:{enterDuration:i,exitDuration:a}}},u=new Ke(s,this._ngZone,n,this._platform,this._injector),d=!s.rippleDisabled;d&&u.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:u,hasSetUpEvents:d}),e.removeAttribute(un)}destroyRipple(e){let n=this._hosts.get(e);n&&(n.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Zr=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=ie({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(n,o){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var Ii=new h("MAT_BUTTON_CONFIG");function Kr(t){return t==null?void 0:$n(t)}var Xr=(()=>{class t{_elementRef=c(H);_ngZone=c(I);_animationsDisabled=we();_config=c(Ii,{optional:!0});_focusMonitor=c(tn);_cleanupClick;_renderer=c(At);_rippleLoader=c(Yr);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){c(Ye).load(Zr);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",n){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,n):this._elementRef.nativeElement.focus(n)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(n){return new(n||t)};static \u0275dir=G({type:t,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(n,o){n&2&&(St("disabled",o._getDisabledAttribute())("aria-disabled",o._getAriaDisabled())("tabindex",o._getTabIndex()),jn(o.color?"mat-"+o.color:""),ge("mat-mdc-button-disabled",o.disabled)("mat-mdc-button-disabled-interactive",o.disabledInteractive)("mat-unthemed",!o.color)("_mat-animation-noopable",o._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",ae],disabled:[2,"disabled","disabled",ae],ariaDisabled:[2,"aria-disabled","ariaDisabled",ae],disabledInteractive:[2,"disabledInteractive","disabledInteractive",ae],tabIndex:[2,"tabIndex","tabIndex",Kr],_tabindex:[2,"tabindex","_tabindex",Kr]}})}return t})();var Si=new h("cdk-dir-doc",{providedIn:"root",factory:()=>c(_)}),Fi=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function Jr(t){let r=t?.toLowerCase()||"";return r==="auto"&&typeof navigator<"u"&&navigator?.language?Fi.test(navigator.language)?"rtl":"ltr":r==="rtl"?"rtl":"ltr"}var Ri=(()=>{class t{get value(){return this.valueSignal()}valueSignal=_n("ltr");change=new Ie;constructor(){let e=c(Si,{optional:!0});if(e){let n=e.body?e.body.dir:null,o=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(Jr(n||o||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(n){return new(n||t)};static \u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var wt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=N({type:t});static \u0275inj=P({})}return t})();var qr=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=N({type:t});static \u0275inj=P({imports:[wt]})}return t})();var xi=["matButton",""],Oi=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],Pi=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var Qr=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),tl=(()=>{class t extends Xr{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=Ni(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let n=this._elementRef.nativeElement.classList,o=this._appearance?Qr.get(this._appearance):null,i=Qr.get(e);o&&n.remove(...o),n.add(...i),this._appearance=e}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=ie({type:t,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[Mt],attrs:xi,ngContentSelectors:Pi,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(n,o){n&1&&(Ft(Oi),tt(0,"span",0),Re(1),kn(2,"span",1),Re(3,1),Bn(),Re(4,2),tt(5,"span",2)(6,"span",3)),n&2&&ge("mdc-button__ripple",!o._isFab)("mdc-fab__ripple",o._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();function Ni(t){return t.hasAttribute("mat-raised-button")?"elevated":t.hasAttribute("mat-stroked-button")?"outlined":t.hasAttribute("mat-flat-button")?"filled":t.hasAttribute("mat-button")?"text":null}var nl=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=N({type:t});static \u0275inj=P({imports:[qr,wt]})}return t})();var eo={production:!0,apiBaseUrl:"https://fullstack-angular-java.onrender.com"};var al={apiBaseUrl:eo.apiBaseUrl};export{K as a,be as b,Zn as c,io as d,vo as e,Eo as f,Vt as g,jo as h,q as i,ve as j,Ir as k,mi as l,fi as m,Vc as n,pi as o,eo as p,al as q,W as r,Qt as s,Y as t,Ye as u,Eu as v,Bu as w,ju as x,on as y,Xu as z,Ei as A,we as B,sd as C,Ke as D,cn as E,_d as F,Zr as G,Ri as H,wt as I,qr as J,tl as K,nl as L};
