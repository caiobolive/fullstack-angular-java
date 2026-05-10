import{a as G,b as ye,c as _e,i as we,j as Ee,k as xe,l as Me,o as Te,s as Dt}from"./chunk-VSS7XWMK.js";import{Ab as be,Ba as H,C as te,Ca as ce,Da as de,Fa as N,Ga as le,I as ee,L as ne,M as _t,Ma as A,N as B,Na as x,Nb as fe,Oa as k,Q as d,Qa as xt,R as E,T as v,U as p,V as s,Vb as he,Wa as me,Wb as $,X as oe,Xa as Mt,Xb as ve,Y as ae,Zb as ge,a as b,ca as S,d as Xt,da as h,eb as ue,fb as pe,ga as wt,gb as it,h as yt,ha as g,i as qt,ia as Et,ka as at,l as Jt,m as Qt,ob as Tt,pb as V,ra as R,sa as re,ta as z,ua as ie,va as O,wa as se,xa as U,ya as rt,zb as L}from"./chunk-R5P5E7S3.js";var Z=class{_doc;constructor(o){this._doc=o}manager},st=(()=>{class n extends Z{constructor(t){super(t)}supports(t){return!0}addEventListener(t,e,a,r){return t.addEventListener(e,a,r),()=>this.removeEventListener(t,e,a,r)}removeEventListener(t,e,a,r){return t.removeEventListener(e,a,r)}static \u0275fac=function(e){return new(e||n)(p(h))};static \u0275prov=d({token:n,factory:n.\u0275fac})}return n})(),lt=new v(""),At=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,e){this._zone=e,t.forEach(i=>{i.manager=this});let a=t.filter(i=>!(i instanceof st));this._plugins=a.slice().reverse();let r=t.find(i=>i instanceof st);r&&this._plugins.push(r)}addEventListener(t,e,a,r){return this._findPluginFor(e).addEventListener(t,e,a,r)}getZone(){return this._zone}_findPluginFor(t){let e=this._eventNameToPlugin.get(t);if(e)return e;if(e=this._plugins.find(r=>r.supports(t)),!e)throw new B(5101,!1);return this._eventNameToPlugin.set(t,e),e}static \u0275fac=function(e){return new(e||n)(p(lt),p(g))};static \u0275prov=d({token:n,factory:n.\u0275fac})}return n})(),It="ng-app-id";function De(n){for(let o of n)o.remove()}function Ie(n,o){let t=o.createElement("style");return t.textContent=n,t}function nn(n,o,t,e){let a=n.head?.querySelectorAll(`style[${It}="${o}"],link[${It}="${o}"]`);if(a)for(let r of a)r.removeAttribute(It),r instanceof HTMLLinkElement?e.set(r.href.slice(r.href.lastIndexOf("/")+1),{usage:0,elements:[r]}):r.textContent&&t.set(r.textContent,{usage:0,elements:[r]})}function Rt(n,o){let t=o.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",n),t}var kt=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(t,e,a,r={}){this.doc=t,this.appId=e,this.nonce=a,nn(t,e,this.inline,this.external),this.hosts.add(t.head)}addStyles(t,e){for(let a of t)this.addUsage(a,this.inline,Ie);e?.forEach(a=>this.addUsage(a,this.external,Rt))}removeStyles(t,e){for(let a of t)this.removeUsage(a,this.inline);e?.forEach(a=>this.removeUsage(a,this.external))}addUsage(t,e,a){let r=e.get(t);r?r.usage++:e.set(t,{usage:1,elements:[...this.hosts].map(i=>this.addElement(i,a(t,this.doc)))})}removeUsage(t,e){let a=e.get(t);a&&(a.usage--,a.usage<=0&&(De(a.elements),e.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])De(t);this.hosts.clear()}addHost(t){this.hosts.add(t);for(let[e,{elements:a}]of this.inline)a.push(this.addElement(t,Ie(e,this.doc)));for(let[e,{elements:a}]of this.external)a.push(this.addElement(t,Rt(e,this.doc)))}removeHost(t){this.hosts.delete(t)}addElement(t,e){return this.nonce&&e.setAttribute("nonce",this.nonce),t.appendChild(e)}static \u0275fac=function(e){return new(e||n)(p(h),p(z),p(U,8),p(O))};static \u0275prov=d({token:n,factory:n.\u0275fac})}return n})(),St={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Ct=/%COMP%/g;var Re="%COMP%",on=`_nghost-${Re}`,an=`_ngcontent-${Re}`,rn=!0,sn=new v("",{factory:()=>rn});function cn(n){return an.replace(Ct,n)}function dn(n){return on.replace(Ct,n)}function Ae(n,o){return o.map(t=>t.replace(Ct,n))}var Ot=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(t,e,a,r,i,c,m=null,l=null){this.eventManager=t,this.sharedStylesHost=e,this.appId=a,this.removeStylesOnCompDestroy=r,this.doc=i,this.ngZone=c,this.nonce=m,this.tracingService=l,this.defaultRenderer=new K(t,i,c,this.tracingService)}createRenderer(t,e){if(!t||!e)return this.defaultRenderer;let a=this.getOrCreateRenderer(t,e);return a instanceof dt?a.applyToHost(t):a instanceof Y&&a.applyStyles(),a}getOrCreateRenderer(t,e){let a=this.rendererByCompId,r=a.get(e.id);if(!r){let i=this.doc,c=this.ngZone,m=this.eventManager,l=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,y=this.tracingService;switch(e.encapsulation){case rt.Emulated:r=new dt(m,l,e,this.appId,u,i,c,y);break;case rt.ShadowDom:return new ct(m,t,e,i,c,this.nonce,y,l);case rt.ExperimentalIsolatedShadowDom:return new ct(m,t,e,i,c,this.nonce,y);default:r=new Y(m,l,e,u,i,c,y);break}a.set(e.id,r)}return r}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(t){this.rendererByCompId.delete(t)}static \u0275fac=function(e){return new(e||n)(p(At),p(kt),p(z),p(sn),p(h),p(g),p(U),p(de,8))};static \u0275prov=d({token:n,factory:n.\u0275fac})}return n})(),K=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(o,t,e,a){this.eventManager=o,this.doc=t,this.ngZone=e,this.tracingService=a}destroy(){}destroyNode=null;createElement(o,t){return t?this.doc.createElementNS(St[t]||t,o):this.doc.createElement(o)}createComment(o){return this.doc.createComment(o)}createText(o){return this.doc.createTextNode(o)}appendChild(o,t){(Se(o)?o.content:o).appendChild(t)}insertBefore(o,t,e){o&&(Se(o)?o.content:o).insertBefore(t,e)}removeChild(o,t){t.remove()}selectRootElement(o,t){let e=typeof o=="string"?this.doc.querySelector(o):o;if(!e)throw new B(-5104,!1);return t||(e.textContent=""),e}parentNode(o){return o.parentNode}nextSibling(o){return o.nextSibling}setAttribute(o,t,e,a){if(a){t=a+":"+t;let r=St[a];r?o.setAttributeNS(r,t,e):o.setAttribute(t,e)}else o.setAttribute(t,e)}removeAttribute(o,t,e){if(e){let a=St[e];a?o.removeAttributeNS(a,t):o.removeAttribute(`${e}:${t}`)}else o.removeAttribute(t)}addClass(o,t){o.classList.add(t)}removeClass(o,t){o.classList.remove(t)}setStyle(o,t,e,a){a&(H.DashCase|H.Important)?o.style.setProperty(t,e,a&H.Important?"important":""):o.style[t]=e}removeStyle(o,t,e){e&H.DashCase?o.style.removeProperty(t):o.style[t]=""}setProperty(o,t,e){o!=null&&(o[t]=e)}setValue(o,t){o.nodeValue=t}listen(o,t,e,a){if(typeof o=="string"&&(o=G().getGlobalEventTarget(this.doc,o),!o))throw new B(5102,!1);let r=this.decoratePreventDefault(e);return this.tracingService?.wrapEventListener&&(r=this.tracingService.wrapEventListener(o,t,r)),this.eventManager.addEventListener(o,t,r,a)}decoratePreventDefault(o){return t=>{if(t==="__ngUnwrap__")return o;o(t)===!1&&t.preventDefault()}}};function Se(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var ct=class extends K{hostEl;sharedStylesHost;shadowRoot;constructor(o,t,e,a,r,i,c,m){super(o,a,r,c),this.hostEl=t,this.sharedStylesHost=m,this.shadowRoot=t.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let l=e.styles;l=Ae(e.id,l);for(let y of l){let T=document.createElement("style");i&&T.setAttribute("nonce",i),T.textContent=y,this.shadowRoot.appendChild(T)}let u=e.getExternalStyles?.();if(u)for(let y of u){let T=Rt(y,a);i&&T.setAttribute("nonce",i),this.shadowRoot.appendChild(T)}}nodeOrShadowRoot(o){return o===this.hostEl?this.shadowRoot:o}appendChild(o,t){return super.appendChild(this.nodeOrShadowRoot(o),t)}insertBefore(o,t,e){return super.insertBefore(this.nodeOrShadowRoot(o),t,e)}removeChild(o,t){return super.removeChild(null,t)}parentNode(o){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(o)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Y=class extends K{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(o,t,e,a,r,i,c,m){super(o,r,i,c),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=a;let l=e.styles;this.styles=m?Ae(m,l):l,this.styleUrls=e.getExternalStyles?.(m)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&ce.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},dt=class extends Y{contentAttr;hostAttr;constructor(o,t,e,a,r,i,c,m){let l=a+"-"+e.id;super(o,t,e,r,i,c,m,l),this.contentAttr=cn(l),this.hostAttr=dn(l)}applyToHost(o){this.applyStyles(),this.setAttribute(o,this.hostAttr,"")}createElement(o,t){let e=super.createElement(o,t);return super.setAttribute(e,this.contentAttr,""),e}};var mt=class n extends _e{supportsDOMEvents=!0;static makeCurrent(){ye(new n)}onAndCancel(o,t,e,a){return o.addEventListener(t,e,a),()=>{o.removeEventListener(t,e,a)}}dispatchEvent(o,t){o.dispatchEvent(t)}remove(o){o.remove()}createElement(o,t){return t=t||this.getDefaultDocument(),t.createElement(o)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(o){return o.nodeType===Node.ELEMENT_NODE}isShadowRoot(o){return o instanceof DocumentFragment}getGlobalEventTarget(o,t){return t==="window"?window:t==="document"?o:t==="body"?o.body:null}getBaseHref(o){let t=ln();return t==null?null:mn(t)}resetBaseElement(){W=null}getUserAgent(){return window.navigator.userAgent}getCookie(o){return we(document.cookie,o)}},W=null;function ln(){return W=W||document.head.querySelector("base"),W?W.getAttribute("href"):null}function mn(n){return new URL(n,document.baseURI).pathname}var un=(()=>{class n{build(){return new XMLHttpRequest}static \u0275fac=function(e){return new(e||n)};static \u0275prov=d({token:n,factory:n.\u0275fac})}return n})(),ke=["alt","control","meta","shift"],pn={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},bn={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},Ce=(()=>{class n extends Z{constructor(t){super(t)}supports(t){return n.parseEventName(t)!=null}addEventListener(t,e,a,r){let i=n.parseEventName(e),c=n.eventCallback(i.fullKey,a,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>G().onAndCancel(t,i.domEventName,c,r))}static parseEventName(t){let e=t.toLowerCase().split("."),a=e.shift();if(e.length===0||!(a==="keydown"||a==="keyup"))return null;let r=n._normalizeKey(e.pop()),i="",c=e.indexOf("code");if(c>-1&&(e.splice(c,1),i="code."),ke.forEach(l=>{let u=e.indexOf(l);u>-1&&(e.splice(u,1),i+=l+".")}),i+=r,e.length!=0||r.length===0)return null;let m={};return m.domEventName=a,m.fullKey=i,m}static matchEventFullKeyCode(t,e){let a=pn[t.key]||t.key,r="";return e.indexOf("code.")>-1&&(a=t.code,r="code."),a==null||!a?!1:(a=a.toLowerCase(),a===" "?a="space":a==="."&&(a="dot"),ke.forEach(i=>{if(i!==a){let c=bn[i];c(t)&&(r+=i+".")}}),r+=a,r===e)}static eventCallback(t,e,a){return r=>{n.matchEventFullKeyCode(r,t)&&a.runGuarded(()=>e(r))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(e){return new(e||n)(p(h))};static \u0275prov=d({token:n,factory:n.\u0275fac})}return n})();function fn(n,o,t){return Xt(this,null,function*(){let e=b({rootComponent:n},hn(o,t));return he(e)})}function hn(n,o){return{platformRef:o?.platformRef,appProviders:[...wn,...n?.providers??[]],platformProviders:_n}}function vn(){mt.makeCurrent()}function gn(){return new Et}function yn(){return re(document),document}var _n=[{provide:O,useValue:xe},{provide:ie,useValue:vn,multi:!0},{provide:h,useFactory:yn}];var wn=[{provide:oe,useValue:"root"},{provide:Et,useFactory:gn},{provide:lt,useClass:st,multi:!0},{provide:lt,useClass:Ce,multi:!0},Ot,kt,At,{provide:N,useExisting:Ot},{provide:Ee,useClass:un},[]];var _o=(()=>{class n{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static \u0275fac=function(e){return new(e||n)(p(h))};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var ut=class n{accessTokenKey="access_token";refreshTokenKey="refresh_token";getAccessToken(){return localStorage.getItem(this.accessTokenKey)}getRefreshToken(){return localStorage.getItem(this.refreshTokenKey)}setTokens(o,t){localStorage.setItem(this.accessTokenKey,o),localStorage.setItem(this.refreshTokenKey,t)}clear(){localStorage.removeItem(this.accessTokenKey),localStorage.removeItem(this.refreshTokenKey)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})};var Oe=class n{constructor(o,t){this.http=o;this.tokenStorage=t;this.accessTokenSig.set(this.tokenStorage.getAccessToken())}accessTokenSig=at(null);isAuthenticated=fe(()=>!!this.accessTokenSig());getAccessToken(){return this.accessTokenSig()}login(o){return this.http.post(`${Dt.apiBaseUrl}/api/v1/auth/login`,o).pipe(_t(t=>this.setTokens(t.accessToken,t.refreshToken)))}refresh(){let o=this.tokenStorage.getRefreshToken();return o?this.http.post(`${Dt.apiBaseUrl}/api/v1/auth/refresh`,{refreshToken:o}).pipe(_t(t=>this.setTokens(t.accessToken,t.refreshToken))):Qt(()=>new Error("No refresh token available"))}logout(){this.tokenStorage.clear(),this.accessTokenSig.set(null)}setTokens(o,t){this.tokenStorage.setTokens(o,t),this.accessTokenSig.set(o)}getUserId(){let t=this.decodeJwtPayload()?.sub;return typeof t=="string"?t:null}getRoles(){let t=this.decodeJwtPayload()?.roles;return Array.isArray(t)?t.filter(e=>typeof e=="string"):[]}decodeJwtPayload(){let o=this.getAccessToken();if(!o)return null;let t=o.split(".");if(t.length!==3)return null;try{let e=t[1].replace(/-/g,"+").replace(/_/g,"/"),a=e.length%4;a&&(e+="=".repeat(4-a));let r=atob(e);return JSON.parse(r)}catch(e){return null}}static \u0275fac=function(t){return new(t||n)(p(Te),p(ut))};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})};function X(n){return n.buttons===0||n.detail===0}function q(n){let o=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!o&&o.identifier===-1&&(o.radiusX==null||o.radiusX===1)&&(o.radiusY==null||o.radiusY===1)}var Nt;function Ne(){if(Nt==null){let n=typeof document<"u"?document.head:null;Nt=!!(n&&(n.createShadowRoot||n.attachShadow))}return Nt}function Lt(n){if(Ne()){let o=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&o instanceof ShadowRoot)return o}return null}function w(n){return n.composedPath?n.composedPath()[0]:n.target}var Ft;try{Ft=typeof Intl<"u"&&Intl.v8BreakIterator}catch(n){Ft=!1}var M=(()=>{class n{_platformId=s(O);isBrowser=this._platformId?Me(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Ft)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(e){return new(e||n)};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var J;function Le(){if(J==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>J=!0}))}finally{J=J||!1}return J}function F(n){return Le()?n:!!n.capture}function D(n){return n instanceof R?n.nativeElement:n}var Fe=new v("cdk-input-modality-detector-options"),Pe={ignoreKeys:[18,17,224,91,16]},je=650,Pt={passive:!0,capture:!0},Be=(()=>{class n{_platform=s(M);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new qt(null);_options;_lastTouchMs=0;_onKeydown=t=>{this._options?.ignoreKeys?.some(e=>e===t.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=w(t))};_onMousedown=t=>{Date.now()-this._lastTouchMs<je||(this._modality.next(X(t)?"keyboard":"mouse"),this._mostRecentTarget=w(t))};_onTouchstart=t=>{if(q(t)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=w(t)};constructor(){let t=s(g),e=s(h),a=s(Fe,{optional:!0});if(this._options=b(b({},Pe),a),this.modalityDetected=this._modality.pipe(ee(1)),this.modalityChanged=this.modalityDetected.pipe(te()),this._platform.isBrowser){let r=s(N).createRenderer(null,null);this._listenerCleanups=t.runOutsideAngular(()=>[r.listen(e,"keydown",this._onKeydown,Pt),r.listen(e,"mousedown",this._onMousedown,Pt),r.listen(e,"touchstart",this._onTouchstart,Pt)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(t=>t())}static \u0275fac=function(e){return new(e||n)};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Q=(function(n){return n[n.IMMEDIATE=0]="IMMEDIATE",n[n.EVENTUAL=1]="EVENTUAL",n})(Q||{}),ze=new v("cdk-focus-monitor-default-options"),pt=F({passive:!0,capture:!0}),jt=(()=>{class n{_ngZone=s(g);_platform=s(M);_inputModalityDetector=s(Be);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=s(h);_stopInputModalityDetector=new yt;constructor(){let t=s(ze,{optional:!0});this._detectionMode=t?.detectionMode||Q.IMMEDIATE}_rootNodeFocusAndBlurListener=t=>{let e=w(t);for(let a=e;a;a=a.parentElement)t.type==="focus"?this._onFocus(t,a):this._onBlur(t,a)};monitor(t,e=!1){let a=D(t);if(!this._platform.isBrowser||a.nodeType!==1)return Jt();let r=Lt(a)||this._document,i=this._elementInfo.get(a);if(i)return e&&(i.checkChildren=!0),i.subject;let c={checkChildren:e,subject:new yt,rootNode:r};return this._elementInfo.set(a,c),this._registerGlobalListeners(c),c.subject}stopMonitoring(t){let e=D(t),a=this._elementInfo.get(e);a&&(a.subject.complete(),this._setClasses(e),this._elementInfo.delete(e),this._removeGlobalListeners(a))}focusVia(t,e,a){let r=D(t),i=this._document.activeElement;r===i?this._getClosestElementsInfo(r).forEach(([c,m])=>this._originChanged(c,e,m)):(this._setOrigin(e),typeof r.focus=="function"&&r.focus(a))}ngOnDestroy(){this._elementInfo.forEach((t,e)=>this.stopMonitoring(e))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?"mouse":"program"}_shouldBeAttributedToTouch(t){return this._detectionMode===Q.EVENTUAL||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,e){t.classList.toggle("cdk-focused",!!e),t.classList.toggle("cdk-touch-focused",e==="touch"),t.classList.toggle("cdk-keyboard-focused",e==="keyboard"),t.classList.toggle("cdk-mouse-focused",e==="mouse"),t.classList.toggle("cdk-program-focused",e==="program")}_setOrigin(t,e=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t==="touch"&&e,this._detectionMode===Q.IMMEDIATE){clearTimeout(this._originTimeoutId);let a=this._originFromTouchInteraction?je:1;this._originTimeoutId=setTimeout(()=>this._origin=null,a)}})}_onFocus(t,e){let a=this._elementInfo.get(e),r=w(t);!a||!a.checkChildren&&e!==r||this._originChanged(e,this._getFocusOrigin(r),a)}_onBlur(t,e){let a=this._elementInfo.get(e);!a||a.checkChildren&&t.relatedTarget instanceof Node&&e.contains(t.relatedTarget)||(this._setClasses(e),this._emitOrigin(a,null))}_emitOrigin(t,e){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(e))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let e=t.rootNode,a=this._rootNodeFocusListenerCount.get(e)||0;a||this._ngZone.runOutsideAngular(()=>{e.addEventListener("focus",this._rootNodeFocusAndBlurListener,pt),e.addEventListener("blur",this._rootNodeFocusAndBlurListener,pt)}),this._rootNodeFocusListenerCount.set(e,a+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(ne(this._stopInputModalityDetector)).subscribe(r=>{this._setOrigin(r,!0)}))}_removeGlobalListeners(t){let e=t.rootNode;if(this._rootNodeFocusListenerCount.has(e)){let a=this._rootNodeFocusListenerCount.get(e);a>1?this._rootNodeFocusListenerCount.set(e,a-1):(e.removeEventListener("focus",this._rootNodeFocusAndBlurListener,pt),e.removeEventListener("blur",this._rootNodeFocusAndBlurListener,pt),this._rootNodeFocusListenerCount.delete(e))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,e,a){this._setClasses(t,e),this._emitOrigin(a,e),this._lastFocusOrigin=e}_getClosestElementsInfo(t){let e=[];return this._elementInfo.forEach((a,r)=>{(r===t||a.checkChildren&&r.contains(t))&&e.push([r,a])}),e}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:e,mostRecentModality:a}=this._inputModalityDetector;if(a!=="mouse"||!e||e===t||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA"||t.disabled)return!1;let r=t.labels;if(r){for(let i=0;i<r.length;i++)if(r[i].contains(e))return!0}return!1}static \u0275fac=function(e){return new(e||n)};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var bt=new WeakMap,tt=(()=>{class n{_appRef;_injector=s(S);_environmentInjector=s(ae);load(t){let e=this._appRef=this._appRef||this._injector.get(me),a=bt.get(e);a||(a={loaders:new Set,refs:[]},bt.set(e,a),e.onDestroy(()=>{bt.get(e)?.refs.forEach(r=>r.destroy()),bt.delete(e)})),a.loaders.has(t)||(a.loaders.add(t),a.refs.push(ge(t,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(e){return new(e||n)};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Ue=new Set,C,Bt=(()=>{class n{_platform=s(M);_nonce=s(U,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Mn}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&xn(t,this._nonce),this._matchMedia(t)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function xn(n,o){if(!Ue.has(n))try{C||(C=document.createElement("style"),o&&C.setAttribute("nonce",o),C.setAttribute("type","text/css"),document.head.appendChild(C)),C.sheet&&(C.sheet.insertRule(`@media ${n} {body{ }}`,0),Ue.add(n))}catch(t){console.error(t)}}function Mn(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}var Tn=(()=>{class n{create(t){return typeof MutationObserver>"u"?null:new MutationObserver(t)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var ma=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=x({type:n});static \u0275inj=E({providers:[Tn]})}return n})();var zt={},Ut=class n{_appId=s(z);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(o,t=!1){return this._appId!=="ng"&&(o+=this._appId),zt.hasOwnProperty(o)||(zt[o]=0),`${o}${t?n._infix+"-":""}${zt[o]++}`}static \u0275fac=function(t){return new(t||n)};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})};var P,He=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function Ea(){if(P)return P;if(typeof document!="object"||!document)return P=new Set(He),P;let n=document.createElement("input");return P=new Set(He.filter(o=>(n.setAttribute("type",o),n.type===o))),P}var Dn=new v("MATERIAL_ANIMATIONS"),Ve=null;function In(){return s(Dn,{optional:!0})?.animationsDisabled||s(se,{optional:!0})==="NoopAnimations"?"di-disabled":(Ve??=s(Bt).matchMedia("(prefers-reduced-motion)").matches,Ve?"reduced-motion":"enabled")}function j(){return In()!=="enabled"}function La(n){return n!=null&&`${n}`!="false"}var _=(function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n})(_||{}),Ht=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=_.HIDDEN;constructor(o,t,e,a=!1){this._renderer=o,this.element=t,this.config=e,this._animationForciblyDisabledThroughCss=a}fadeOut(){this._renderer.fadeOutRipple(this)}},$e=F({passive:!0,capture:!0}),Vt=class{_events=new Map;addHandler(o,t,e,a){let r=this._events.get(t);if(r){let i=r.get(e);i?i.add(a):r.set(e,new Set([a]))}else this._events.set(t,new Map([[e,new Set([a])]])),o.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,$e)})}removeHandler(o,t,e){let a=this._events.get(o);if(!a)return;let r=a.get(t);r&&(r.delete(e),r.size===0&&a.delete(t),a.size===0&&(this._events.delete(o),document.removeEventListener(o,this._delegateEventHandler,$e)))}_delegateEventHandler=o=>{let t=w(o);t&&this._events.get(o.type)?.forEach((e,a)=>{(a===t||a.contains(t))&&e.forEach(r=>r.handleEvent(o))})}},et={enterDuration:225,exitDuration:150},Sn=800,Ge=F({passive:!0,capture:!0}),Ze=["mousedown","touchstart"],Ke=["mouseup","mouseleave","touchend","touchcancel"],Rn=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=A({type:n,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(e,a){},styles:[`.mat-ripple {
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
`],encapsulation:2,changeDetection:0})}return n})(),nt=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Vt;constructor(o,t,e,a,r){this._target=o,this._ngZone=t,this._platform=a,a.isBrowser&&(this._containerElement=D(e)),r&&r.get(tt).load(Rn)}fadeInRipple(o,t,e={}){let a=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),r=b(b({},et),e.animation);e.centered&&(o=a.left+a.width/2,t=a.top+a.height/2);let i=e.radius||An(o,t,a),c=o-a.left,m=t-a.top,l=r.enterDuration,u=document.createElement("div");u.classList.add("mat-ripple-element"),u.style.left=`${c-i}px`,u.style.top=`${m-i}px`,u.style.height=`${i*2}px`,u.style.width=`${i*2}px`,e.color!=null&&(u.style.backgroundColor=e.color),u.style.transitionDuration=`${l}ms`,this._containerElement.appendChild(u);let y=window.getComputedStyle(u),T=y.transitionProperty,Kt=y.transitionDuration,vt=T==="none"||Kt==="0s"||Kt==="0s, 0s"||a.width===0&&a.height===0,I=new Ht(this,u,e,vt);u.style.transform="scale3d(1, 1, 1)",I.state=_.FADING_IN,e.persistent||(this._mostRecentTransientRipple=I);let ot=null;return!vt&&(l||r.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let Yt=()=>{ot&&(ot.fallbackTimer=null),clearTimeout(Wt),this._finishRippleTransition(I)},gt=()=>this._destroyRipple(I),Wt=setTimeout(gt,l+100);u.addEventListener("transitionend",Yt),u.addEventListener("transitioncancel",gt),ot={onTransitionEnd:Yt,onTransitionCancel:gt,fallbackTimer:Wt}}),this._activeRipples.set(I,ot),(vt||!l)&&this._finishRippleTransition(I),I}fadeOutRipple(o){if(o.state===_.FADING_OUT||o.state===_.HIDDEN)return;let t=o.element,e=b(b({},et),o.config.animation);t.style.transitionDuration=`${e.exitDuration}ms`,t.style.opacity="0",o.state=_.FADING_OUT,(o._animationForciblyDisabledThroughCss||!e.exitDuration)&&this._finishRippleTransition(o)}fadeOutAll(){this._getActiveRipples().forEach(o=>o.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(o=>{o.config.persistent||o.fadeOut()})}setupTriggerEvents(o){let t=D(o);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,Ze.forEach(e=>{n._eventManager.addHandler(this._ngZone,e,t,this)}))}handleEvent(o){o.type==="mousedown"?this._onMousedown(o):o.type==="touchstart"?this._onTouchStart(o):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Ke.forEach(t=>{this._triggerElement.addEventListener(t,this,Ge)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(o){o.state===_.FADING_IN?this._startFadeOutTransition(o):o.state===_.FADING_OUT&&this._destroyRipple(o)}_startFadeOutTransition(o){let t=o===this._mostRecentTransientRipple,{persistent:e}=o.config;o.state=_.VISIBLE,!e&&(!t||!this._isPointerDown)&&o.fadeOut()}_destroyRipple(o){let t=this._activeRipples.get(o)??null;this._activeRipples.delete(o),this._activeRipples.size||(this._containerRect=null),o===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),o.state=_.HIDDEN,t!==null&&(o.element.removeEventListener("transitionend",t.onTransitionEnd),o.element.removeEventListener("transitioncancel",t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),o.element.remove()}_onMousedown(o){let t=X(o),e=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Sn;!this._target.rippleDisabled&&!t&&!e&&(this._isPointerDown=!0,this.fadeInRipple(o.clientX,o.clientY,this._target.rippleConfig))}_onTouchStart(o){if(!this._target.rippleDisabled&&!q(o)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=o.changedTouches;if(t)for(let e=0;e<t.length;e++)this.fadeInRipple(t[e].clientX,t[e].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(o=>{let t=o.state===_.VISIBLE||o.config.terminateOnPointerUp&&o.state===_.FADING_IN;!o.config.persistent&&t&&o.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let o=this._triggerElement;o&&(Ze.forEach(t=>n._eventManager.removeHandler(t,o,this)),this._pointerUpEventsRegistered&&(Ke.forEach(t=>o.removeEventListener(t,this,Ge)),this._pointerUpEventsRegistered=!1))}};function An(n,o,t){let e=Math.max(Math.abs(n-t.left),Math.abs(n-t.right)),a=Math.max(Math.abs(o-t.top),Math.abs(o-t.bottom));return Math.sqrt(e*e+a*a)}var $t=new v("mat-ripple-global-options"),Wa=(()=>{class n{_elementRef=s(R);_animationsDisabled=j();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(t){t&&this.fadeOutAllNonPersistent(),this._disabled=t,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(t){this._trigger=t,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let t=s(g),e=s(M),a=s($t,{optional:!0}),r=s(S);this._globalOptions=a||{},this._rippleRenderer=new nt(this,t,this._elementRef,e,r)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:b(b(b({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(t,e=0,a){return typeof t=="number"?this._rippleRenderer.fadeInRipple(t,e,b(b({},this.rippleConfig),a)):this._rippleRenderer.fadeInRipple(0,0,b(b({},this.rippleConfig),t))}static \u0275fac=function(e){return new(e||n)};static \u0275dir=k({type:n,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(e,a){e&2&&L("mat-ripple-unbounded",a.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return n})();var kn={capture:!0},Cn=["focus","mousedown","mouseenter","touchstart"],Gt="mat-ripple-loader-uninitialized",Zt="mat-ripple-loader-class-name",Ye="mat-ripple-loader-centered",ft="mat-ripple-loader-disabled",We=(()=>{class n{_document=s(h);_animationsDisabled=j();_globalRippleOptions=s($t,{optional:!0});_platform=s(M);_ngZone=s(g);_injector=s(S);_eventCleanups;_hosts=new Map;constructor(){let t=s(N).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>Cn.map(e=>t.listen(this._document,e,this._onInteraction,kn)))}ngOnDestroy(){let t=this._hosts.keys();for(let e of t)this.destroyRipple(e);this._eventCleanups.forEach(e=>e())}configureRipple(t,e){t.setAttribute(Gt,this._globalRippleOptions?.namespace??""),(e.className||!t.hasAttribute(Zt))&&t.setAttribute(Zt,e.className||""),e.centered&&t.setAttribute(Ye,""),e.disabled&&t.setAttribute(ft,"")}setDisabled(t,e){let a=this._hosts.get(t);a?(a.target.rippleDisabled=e,!e&&!a.hasSetUpEvents&&(a.hasSetUpEvents=!0,a.renderer.setupTriggerEvents(t))):e?t.setAttribute(ft,""):t.removeAttribute(ft)}_onInteraction=t=>{let e=w(t);if(e instanceof HTMLElement){let a=e.closest(`[${Gt}="${this._globalRippleOptions?.namespace??""}"]`);a&&this._createRipple(a)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(".mat-ripple")?.remove();let e=this._document.createElement("span");e.classList.add("mat-ripple",t.getAttribute(Zt)),t.append(e);let a=this._globalRippleOptions,r=this._animationsDisabled?0:a?.animation?.enterDuration??et.enterDuration,i=this._animationsDisabled?0:a?.animation?.exitDuration??et.exitDuration,c={rippleDisabled:this._animationsDisabled||a?.disabled||t.hasAttribute(ft),rippleConfig:{centered:t.hasAttribute(Ye),terminateOnPointerUp:a?.terminateOnPointerUp,animation:{enterDuration:r,exitDuration:i}}},m=new nt(c,this._ngZone,e,this._platform,this._injector),l=!c.rippleDisabled;l&&m.setupTriggerEvents(t),this._hosts.set(t,{target:c,renderer:m,hasSetUpEvents:l}),t.removeAttribute(Gt)}destroyRipple(t){let e=this._hosts.get(t);e&&(e.renderer._removeTriggerEvents(),this._hosts.delete(t))}static \u0275fac=function(e){return new(e||n)};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Xe=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=A({type:n,selectors:[["structural-styles"]],decls:0,vars:0,template:function(e,a){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2,changeDetection:0})}return n})();var On=new v("MAT_BUTTON_CONFIG");function qe(n){return n==null?void 0:ve(n)}var Je=(()=>{class n{_elementRef=s(R);_ngZone=s(g);_animationsDisabled=j();_config=s(On,{optional:!0});_focusMonitor=s(jt);_cleanupClick;_renderer=s(le);_rippleLoader=s(We);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}constructor(){s(tt).load(Xe);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t="program",e){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,e):this._elementRef.nativeElement.focus(e)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static \u0275fac=function(e){return new(e||n)};static \u0275dir=k({type:n,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(e,a){e&2&&(Mt("disabled",a._getDisabledAttribute())("aria-disabled",a._getAriaDisabled())("tabindex",a._getTabIndex()),be(a.color?"mat-"+a.color:""),L("mat-mdc-button-disabled",a.disabled)("mat-mdc-button-disabled-interactive",a.disabledInteractive)("mat-unthemed",!a.color)("_mat-animation-noopable",a._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",$],disabled:[2,"disabled","disabled",$],ariaDisabled:[2,"aria-disabled","ariaDisabled",$],disabledInteractive:[2,"disabledInteractive","disabledInteractive",$],tabIndex:[2,"tabIndex","tabIndex",qe],_tabindex:[2,"tabindex","_tabindex",qe]}})}return n})();var Nn=new v("cdk-dir-doc",{providedIn:"root",factory:()=>s(h)}),Ln=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function Qe(n){let o=n?.toLowerCase()||"";return o==="auto"&&typeof navigator<"u"&&navigator?.language?Ln.test(navigator.language)?"rtl":"ltr":o==="rtl"?"rtl":"ltr"}var Fn=(()=>{class n{get value(){return this.valueSignal()}valueSignal=at("ltr");change=new wt;constructor(){let t=s(Nn,{optional:!0});if(t){let e=t.body?t.body.dir:null,a=t.documentElement?t.documentElement.dir:null;this.valueSignal.set(Qe(e||a||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(e){return new(e||n)};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var ht=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=x({type:n});static \u0275inj=E({})}return n})();var tn=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=x({type:n});static \u0275inj=E({imports:[ht]})}return n})();var Pn=["matButton",""],jn=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],Bn=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var en=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Rr=(()=>{class n extends Je{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let t=zn(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let e=this._elementRef.nativeElement.classList,a=this._appearance?en.get(this._appearance):null,r=en.get(t);a&&e.remove(...a),e.add(...r),this._appearance=t}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=A({type:n,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[xt],attrs:Pn,ngContentSelectors:Bn,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(e,a){e&1&&(Tt(jn),it(0,"span",0),V(1),ue(2,"span",1),V(3,1),pe(),V(4,2),it(5,"span",2)(6,"span",3)),e&2&&L("mdc-button__ripple",!a._isFab)("mdc-fab__ripple",a._isFab)},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2,changeDetection:0})}return n})();function zn(n){return n.hasAttribute("mat-raised-button")?"elevated":n.hasAttribute("mat-stroked-button")?"outlined":n.hasAttribute("mat-flat-button")?"filled":n.hasAttribute("mat-button")?"text":null}var Ar=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=x({type:n});static \u0275inj=E({imports:[tn,ht]})}return n})();export{Ot as a,fn as b,_o as c,ut as d,Oe as e,M as f,D as g,tt as h,ma as i,Ut as j,Ea as k,In as l,j as m,La as n,Wa as o,Xe as p,Fn as q,ht as r,Rr as s,Ar as t};
