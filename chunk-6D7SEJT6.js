import{a as ke,b as st,c as ye,d as we}from"./chunk-M67Z5D4V.js";import{A as xe,b as Ut,d as f,e as Vt,f as qt,g as Ht,h as $t,i as Qt,j as Wt,k as Gt,l as Kt,m as Xt,n as le,o as me,p as de,s as he,t as pe,u as _e,v as ge,w as ue,x as fe,y as be,z as ve}from"./chunk-MIMUILMG.js";import{B as ie,C as H,D as ne,E as oe,G as ae,I as $,J as re,K as se,L as ce,f as Nt,i as jt,k as rt,o as Bt,q as V,r as Zt,s as Yt,u as Jt,v as q,w as te,x as ee}from"./chunk-NFBY5RRH.js";import{$ as P,$a as W,$b as Pt,A as yt,Ab as k,B as wt,Bb as dt,C as Ct,Cb as Ot,D as It,Db as C,Eb as I,H as St,Ja as j,Kb as S,La as l,Lb as Tt,M as Mt,Mb as m,N as Y,Nb as M,Ob as Dt,Pb as ht,Qb as At,R as J,Rb as Rt,S as A,Tb as ot,U as R,Ub as at,V as E,W as d,Xa as L,Ya as B,Za as y,aa as z,da as mt,e as Z,ea as tt,fa as et,g as ft,gb as U,gc as zt,hb as _,ia as Et,ib as g,ja as it,jb as Lt,kb as Ft,l as T,la as b,lb as u,m as bt,mb as c,nb as s,ob as v,p as D,qa as Q,sa as N,tb as nt,v as vt,w as xt,xb as x,y as kt,yb as p,zb as G}from"./chunk-KLEYLI6E.js";function Ce(i){i||(i=d(et));let a=new ft(t=>{if(i.destroyed){t.next();return}return i.onDestroy(t.next.bind(t))});return t=>t.pipe(Mt(a))}function Ie(i){return Error(`Unable to find icon with the name "${i}"`)}function Be(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function Se(i){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${i}".`)}function Me(i){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${i}".`)}var w=class{url;svgText;options;svgElement=null;constructor(a,t,e){this.url=a,this.svgText=t,this.options=e}},Le=(()=>{class i{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(t,e,n,o){this._httpClient=t,this._sanitizer=e,this._errorHandler=o,this._document=n}addSvgIcon(t,e,n){return this.addSvgIconInNamespace("",t,e,n)}addSvgIconLiteral(t,e,n){return this.addSvgIconLiteralInNamespace("",t,e,n)}addSvgIconInNamespace(t,e,n,o){return this._addSvgIconConfig(t,e,new w(n,null,o))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,e,n,o){let r=this._sanitizer.sanitize(j.HTML,n);if(!r)throw Me(n);let h=q(r);return this._addSvgIconConfig(t,e,new w("",h,o))}addSvgIconSet(t,e){return this.addSvgIconSetInNamespace("",t,e)}addSvgIconSetLiteral(t,e){return this.addSvgIconSetLiteralInNamespace("",t,e)}addSvgIconSetInNamespace(t,e,n){return this._addSvgIconSetConfig(t,new w(e,null,n))}addSvgIconSetLiteralInNamespace(t,e,n){let o=this._sanitizer.sanitize(j.HTML,e);if(!o)throw Me(e);let r=q(o);return this._addSvgIconSetConfig(t,new w("",r,n))}registerFontClassAlias(t,e=t){return this._fontCssClassesByAlias.set(t,e),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(...t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(t){let e=this._sanitizer.sanitize(j.RESOURCE_URL,t);if(!e)throw Se(t);let n=this._cachedIconsByUrl.get(e);return n?T(ct(n)):this._loadSvgIconFromConfig(new w(t,null)).pipe(Y(o=>this._cachedIconsByUrl.set(e,o)),D(o=>ct(o)))}getNamedSvgIcon(t,e=""){let n=Ee(e,t),o=this._svgIconConfigs.get(n);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(e,t),o)return this._svgIconConfigs.set(n,o),this._getSvgFromConfig(o);let r=this._iconSetConfigs.get(e);return r?this._getSvgFromIconSetConfigs(t,r):bt(Ie(n))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?T(ct(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe(D(e=>ct(e)))}_getSvgFromIconSetConfigs(t,e){let n=this._extractIconWithNameFromAnySet(t,e);if(n)return T(n);let o=e.filter(r=>!r.svgText).map(r=>this._loadSvgIconSetFromConfig(r).pipe(kt(h=>{let O=`Loading icon set URL: ${this._sanitizer.sanitize(j.RESOURCE_URL,r.url)} failed: ${h.message}`;return this._errorHandler.handleError(new Error(O)),T(null)})));return vt(o).pipe(D(()=>{let r=this._extractIconWithNameFromAnySet(t,e);if(!r)throw Ie(t);return r}))}_extractIconWithNameFromAnySet(t,e){for(let n=e.length-1;n>=0;n--){let o=e[n];if(o.svgText&&o.svgText.toString().indexOf(t)>-1){let r=this._svgElementFromConfig(o),h=this._extractSvgIconFromSet(r,t,o.options);if(h)return h}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe(Y(e=>t.svgText=e),D(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?T(null):this._fetchIcon(t).pipe(Y(e=>t.svgText=e))}_extractSvgIconFromSet(t,e,n){let o=t.querySelector(`[id="${e}"]`);if(!o)return null;let r=o.cloneNode(!0);if(r.removeAttribute("id"),r.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(r,n);if(r.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(r),n);let h=this._svgElementFromString(q("<svg></svg>"));return h.appendChild(r),this._setSvgAttributes(h,n)}_svgElementFromString(t){let e=this._document.createElement("DIV");e.innerHTML=t;let n=e.querySelector("svg");if(!n)throw Error("<svg> tag not found");return n}_toSvgElement(t){let e=this._svgElementFromString(q("<svg></svg>")),n=t.attributes;for(let o=0;o<n.length;o++){let{name:r,value:h}=n[o];r!=="id"&&e.setAttribute(r,h)}for(let o=0;o<t.childNodes.length;o++)t.childNodes[o].nodeType===this._document.ELEMENT_NODE&&e.appendChild(t.childNodes[o].cloneNode(!0));return e}_setSvgAttributes(t,e){return t.setAttribute("fit",""),t.setAttribute("height","100%"),t.setAttribute("width","100%"),t.setAttribute("preserveAspectRatio","xMidYMid meet"),t.setAttribute("focusable","false"),e&&e.viewBox&&t.setAttribute("viewBox",e.viewBox),t}_fetchIcon(t){let{url:e,options:n}=t,o=n?.withCredentials??!1;if(!this._httpClient)throw Be();if(e==null)throw Error(`Cannot fetch icon from URL "${e}".`);let r=this._sanitizer.sanitize(j.RESOURCE_URL,e);if(!r)throw Se(e);let h=this._inProgressUrlFetches.get(r);if(h)return h;let F=this._httpClient.get(r,{responseType:"text",withCredentials:o}).pipe(D(O=>q(O)),It(()=>this._inProgressUrlFetches.delete(r)),St());return this._inProgressUrlFetches.set(r,F),F}_addSvgIconConfig(t,e,n){return this._svgIconConfigs.set(Ee(t,e),n),this}_addSvgIconSetConfig(t,e){let n=this._iconSetConfigs.get(t);return n?n.push(e):this._iconSetConfigs.set(t,[e]),this}_svgElementFromConfig(t){if(!t.svgElement){let e=this._svgElementFromString(t.svgText);this._setSvgAttributes(e,t.options),t.svgElement=e}return t.svgElement}_getIconConfigFromResolvers(t,e){for(let n=0;n<this._resolvers.length;n++){let o=this._resolvers[n](e,t);if(o)return Ue(o)?new w(o.url,null,o.options):new w(o,null)}}static \u0275fac=function(e){return new(e||i)(E(rt,8),E(Bt),E(tt,8),E(it))};static \u0275prov=J({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function ct(i){return i.cloneNode(!0)}function Ee(i,a){return i+":"+a}function Ue(i){return!!(i.url&&i.options)}var Ve=["*"],qe=new R("MAT_ICON_DEFAULT_OPTIONS"),He=new R("mat-icon-location",{providedIn:"root",factory:()=>{let i=d(tt),a=i?i.location:null;return{getPathname:()=>a?a.pathname+a.search:""}}}),Fe=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],$e=Fe.map(i=>`[${i}]`).join(", "),Qe=/^url\(['"]?#(.*?)['"]?\)$/,Oe=(()=>{class i{_elementRef=d(N);_iconRegistry=d(Le);_location=d(He);_errorHandler=d(it);_defaultColor;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(t){let e=this._cleanupFontValue(t);e!==this._fontSet&&(this._fontSet=e,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(t){let e=this._cleanupFontValue(t);e!==this._fontIcon&&(this._fontIcon=e,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=Z.EMPTY;constructor(){let t=d(new Pt("aria-hidden"),{optional:!0}),e=d(qe,{optional:!0});e&&(e.color&&(this.color=this._defaultColor=e.color),e.fontSet&&(this.fontSet=e.fontSet)),t||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(t){if(!t)return["",""];let e=t.split(":");switch(e.length){case 1:return["",e[0]];case 2:return e;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let t=this._elementsWithExternalReferences;if(t&&t.size){let e=this._location.getPathname();e!==this._previousPath&&(this._previousPath=e,this._prependPathToReferences(e))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();let e=this._location.getPathname();this._previousPath=e,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(e),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){let t=this._elementRef.nativeElement,e=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();e--;){let n=t.childNodes[e];(n.nodeType!==1||n.nodeName.toLowerCase()==="svg")&&n.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let t=this._elementRef.nativeElement,e=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(n=>n.length>0);this._previousFontSetClass.forEach(n=>t.classList.remove(n)),e.forEach(n=>t.classList.add(n)),this._previousFontSetClass=e,this.fontIcon!==this._previousFontIconClass&&!e.includes("mat-ligature-font")&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return typeof t=="string"?t.trim().split(" ")[0]:t}_prependPathToReferences(t){let e=this._elementsWithExternalReferences;e&&e.forEach((n,o)=>{n.forEach(r=>{o.setAttribute(r.name,`url('${t}#${r.value}')`)})})}_cacheChildrenWithExternalReferences(t){let e=t.querySelectorAll($e),n=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<e.length;o++)Fe.forEach(r=>{let h=e[o],F=h.getAttribute(r),O=F?F.match(Qe):null;if(O){let X=n.get(h);X||(X=[],n.set(h,X)),X.push({name:r,value:O[1]})}})}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){let[e,n]=this._splitIconName(t);e&&(this._svgNamespace=e),n&&(this._svgName=n),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(n,e).pipe(wt(1)).subscribe(o=>this._setSvgElement(o),o=>{let r=`Error retrieving icon ${e}:${n}! ${o.message}`;this._errorHandler.handleError(new Error(r))})}}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=L({type:i,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(e,n){e&2&&(U("data-mat-icon-type",n._usingFontIcon()?"font":"svg")("data-mat-icon-name",n._svgName||n.fontIcon)("data-mat-icon-namespace",n._svgNamespace||n.fontSet)("fontIcon",n._usingFontIcon()?n.fontIcon:null),Tt(n.color?"mat-"+n.color:""),S("mat-icon-inline",n.inline)("mat-icon-no-color",n.color!=="primary"&&n.color!=="accent"&&n.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",zt],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:Ve,decls:1,vars:0,template:function(e,n){e&1&&(G(),k(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0})}return i})(),Te=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=B({type:i});static \u0275inj=A({imports:[$]})}return i})();var De=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=B({type:i});static \u0275inj=A({imports:[$]})}return i})();var Ge=["*"],Ke=`.mdc-list {
  margin: 0;
  padding: 8px 0;
  list-style-type: none;
}
.mdc-list:focus {
  outline: none;
}

.mdc-list-item {
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  align-items: stretch;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--mat-list-list-item-container-color, transparent);
  border-radius: var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--mat-list-list-item-one-line-container-height, 48px);
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-two-lines {
  height: var(--mat-list-list-item-two-line-container-height, 64px);
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-three-lines {
  height: var(--mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--selected::before, .mdc-list-item.mdc-list-item--selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  pointer-events: none;
}

a.mdc-list-item {
  color: inherit;
  text-decoration: none;
}

.mdc-list-item__start {
  fill: currentColor;
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-leading-icon-size, 24px);
  height: var(--mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--with-leading-icon:hover .mdc-list-item__start {
  color: var(--mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--mat-list-list-item-leading-avatar-size, 40px);
  height: var(--mat-list-list-item-leading-avatar-size, 40px);
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}

.mdc-list-item__end {
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  font-family: var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));
  line-height: var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));
  font-size: var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));
  font-weight: var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));
  letter-spacing: var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-trailing-icon-size, 24px);
  height: var(--mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end {
  color: var(--mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary));
}

.mdc-list-item__content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: center;
  flex: 1;
  pointer-events: none;
}
.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {
  align-self: stretch;
}

.mdc-list-item__primary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}

.mdc-list-item__secondary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-top: 0;
  color: var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));
  font-family: var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}
.mdc-list-item__secondary-text::before {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {
  white-space: normal;
  line-height: 20px;
}
.mdc-list-item--with-overline .mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: auto;
}

.mdc-list-item--with-leading-radio.mdc-list-item,
.mdc-list-item--with-leading-checkbox.mdc-list-item,
.mdc-list-item--with-leading-icon.mdc-list-item,
.mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  display: block;
  margin-top: 0;
  line-height: normal;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
}

.mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  -webkit-user-select: none;
  user-select: none;
  margin-left: 28px;
  margin-right: 16px;
}
[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 28px;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {
  display: block;
  line-height: normal;
  align-self: flex-start;
  margin-top: 0;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-leading-radio .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 8px;
  margin-right: 24px;
}
[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,
[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 24px;
  margin-right: 8px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-item--with-trailing-radio.mdc-list-item,
.mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-left: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-right: 0;
}
.mdc-list-item--with-trailing-radio .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 24px;
  margin-right: 8px;
}
[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,
[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 8px;
  margin-right: 24px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-group__subheader {
  margin: 0.75rem 16px;
}

.mdc-list-item--disabled .mdc-list-item__start,
.mdc-list-item--disabled .mdc-list-item__content,
.mdc-list-item--disabled .mdc-list-item__end {
  opacity: 1;
}
.mdc-list-item--disabled .mdc-list-item__primary-text,
.mdc-list-item--disabled .mdc-list-item__secondary-text {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--disabled::before {
  background-color: var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));
  background-color: var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--activated::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  a.mdc-list-item--activated [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-list-base {
  display: block;
}
.mat-mdc-list-base .mdc-list-item__start,
.mat-mdc-list-base .mdc-list-item__end,
.mat-mdc-list-base .mdc-list-item__content {
  pointer-events: auto;
}

.mat-mdc-list-item,
.mat-mdc-list-option {
  width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),
.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {
  cursor: default;
}
.mat-mdc-list-item .mat-divider-inset,
.mat-mdc-list-option .mat-divider-inset {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-left: 72px;
}
[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-right: 72px;
}

.mat-mdc-list-item-interactive::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  content: "";
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-list-item > .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: normal;
}
.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

mat-action-list button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: start;
}
mat-action-list button::-moz-focus-inner {
  border: 0;
}

.mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-inline-start: var(--mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
  --mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container));
}
`,Xe=["unscopedContent"],Ze=["text"],Ye=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],Je=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var ti=new R("ListOption"),_t=(()=>{class i{_elementRef=d(N);constructor(){}static \u0275fac=function(e){return new(e||i)};static \u0275dir=y({type:i,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return i})(),gt=(()=>{class i{_elementRef=d(N);constructor(){}static \u0275fac=function(e){return new(e||i)};static \u0275dir=y({type:i,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return i})(),ut=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275dir=y({type:i,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return i})(),Ae=(()=>{class i{_listOption=d(ti,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(e){return new(e||i)};static \u0275dir=y({type:i,hostVars:4,hostBindings:function(e,n){e&2&&S("mdc-list-item__start",n._isAlignedAtStart())("mdc-list-item__end",!n._isAlignedAtStart())}})}return i})(),ei=(()=>{class i extends Ae{static \u0275fac=(()=>{let t;return function(n){return(t||(t=Q(i)))(n||i)}})();static \u0275dir=y({type:i,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[W]})}return i})(),ii=(()=>{class i extends Ae{static \u0275fac=(()=>{let t;return function(n){return(t||(t=Q(i)))(n||i)}})();static \u0275dir=y({type:i,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[W]})}return i})(),ni=new R("MAT_LIST_CONFIG"),pt=(()=>{class i{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=H(t)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(t){this._disabled.set(H(t))}_disabled=b(!1);_defaultOptions=d(ni,{optional:!0});static \u0275fac=function(e){return new(e||i)};static \u0275dir=y({type:i,hostVars:1,hostBindings:function(e,n){e&2&&U("aria-disabled",n.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return i})(),oi=(()=>{class i{_elementRef=d(N);_ngZone=d(Et);_listBase=d(pt,{optional:!0});_platform=d(Zt);_hostElement;_isButtonElement;_noopAnimations=ie();_avatars;_icons;set lines(t){this._explicitLines=Yt(t,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(t){this._disableRipple=H(t)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(t){this._disabled.set(H(t))}_disabled=b(!1);_subscriptions=new Z;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){d(Jt).load(ae);let t=d(oe,{optional:!0});this.rippleConfig=t||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new ne(this,this._ngZone,this._hostElement,this._platform,d(mt)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(xt(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(t){if(!this._lines||!this._titles||!this._unscopedContent)return;t&&this._checkDomForUnscopedTextContent();let e=this._explicitLines??this._inferLinesFromContent(),n=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",e===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",e===3),this._hasUnscopedTextContent){let o=this._titles.length===0&&e===1;n.classList.toggle("mdc-list-item__primary-text",o),n.classList.toggle("mdc-list-item__secondary-text",!o)}else n.classList.remove("mdc-list-item__primary-text"),n.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let t=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(t+=1),t}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(t=>t.nodeType!==t.COMMENT_NODE).some(t=>!!(t.textContent&&t.textContent.trim()))}static \u0275fac=function(e){return new(e||i)};static \u0275dir=y({type:i,contentQueries:function(e,n,o){if(e&1&&dt(o,ei,4)(o,ii,4),e&2){let r;C(r=I())&&(n._avatars=r),C(r=I())&&(n._icons=r)}},hostVars:4,hostBindings:function(e,n){e&2&&(U("aria-disabled",n.disabled)("disabled",n._isButtonElement&&n.disabled||null),S("mdc-list-item--disabled",n.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return i})();var Re=(()=>{class i extends pt{static \u0275fac=(()=>{let t;return function(n){return(t||(t=Q(i)))(n||i)}})();static \u0275cmp=L({type:i,selectors:[["mat-list"]],hostAttrs:[1,"mat-mdc-list","mat-mdc-list-base","mdc-list"],exportAs:["matList"],features:[Rt([{provide:pt,useExisting:i}]),W],ngContentSelectors:Ge,decls:1,vars:0,template:function(e,n){e&1&&(G(),k(0))},styles:[Ke],encapsulation:2,changeDetection:0})}return i})(),Pe=(()=>{class i extends oi{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(t){this._activated=H(t)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let t;return function(n){return(t||(t=Q(i)))(n||i)}})();static \u0275cmp=L({type:i,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(e,n,o){if(e&1&&dt(o,gt,5)(o,_t,5)(o,ut,5),e&2){let r;C(r=I())&&(n._lines=r),C(r=I())&&(n._titles=r),C(r=I())&&(n._meta=r)}},viewQuery:function(e,n){if(e&1&&Ot(Xe,5)(Ze,5),e&2){let o;C(o=I())&&(n._unscopedContent=o.first),C(o=I())&&(n._itemText=o.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(e,n){e&2&&(U("aria-current",n._getAriaCurrent()),S("mdc-list-item--activated",n.activated)("mdc-list-item--with-leading-avatar",n._avatars.length!==0)("mdc-list-item--with-leading-icon",n._icons.length!==0)("mdc-list-item--with-trailing-meta",n._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",n._hasBothLeadingAndTrailing())("_mat-animation-noopable",n._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[W],ngContentSelectors:Je,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(e,n){e&1&&(G(Ye),k(0),c(1,"span",1),k(2,1),k(3,2),c(4,"span",2,0),x("cdkObserveContent",function(){return n._updateItemLines(!0)}),k(6,3),s()(),k(7,4),k(8,5),v(9,"div",3))},dependencies:[te],encapsulation:2,changeDetection:0})}return i})();var ze=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=B({type:i});static \u0275inj=A({imports:[ee,re,De,$,st]})}return i})();var lt=class i{constructor(a){this.http=a}list(a){let t=a?.trim()??"",e=new jt;return t.length>0&&(e=e.set("q",t)),this.http.get(`${V.apiBaseUrl}/api/v1/customers`,{params:e})}get(a){return this.http.get(`${V.apiBaseUrl}/api/v1/customers/${a}`)}create(a){return this.http.post(`${V.apiBaseUrl}/api/v1/customers`,a)}update(a,t){return this.http.put(`${V.apiBaseUrl}/api/v1/customers/${a}`,t)}delete(a){return this.http.delete(`${V.apiBaseUrl}/api/v1/customers/${a}`)}static \u0275fac=function(t){return new(t||i)(E(rt))};static \u0275prov=J({token:i,factory:i.\u0275fac,providedIn:"root"})};var ri=(i,a)=>a.id;function si(i,a){i&1&&v(0,"mat-progress-bar",5)}function ci(i,a){if(i&1&&(c(0,"p",14),m(1),s()),i&2){let t=p();l(),M(t.error())}}function li(i,a){if(i&1){let t=nt();c(0,"div",15)(1,"p",18),m(2,"Nenhum cliente cadastrado"),s(),c(3,"p",19),m(4," Que tal adicionar o primeiro? Use o bot\xE3o acima ou cadastre direto aqui. "),s(),c(5,"button",8),x("click",function(){P(t);let n=p();return z(n.openCreate())}),m(6," Cadastrar primeiro cliente "),s()()}if(i&2){let t=p();l(5),u("disabled",t.loading())}}function mi(i,a){i&1&&(c(0,"div",15)(1,"p",18),m(2,"Nenhum resultado encontrado"),s(),c(3,"p",19),m(4," Ajuste o termo de busca ou limpe o campo para ver todos os clientes. "),s()())}function di(i,a){i&1&&v(0,"mat-divider")}function hi(i,a){if(i&1){let t=nt();c(0,"mat-list-item",20)(1,"div",21),m(2),s(),c(3,"div",22),m(4),s(),c(5,"div",23),m(6),ot(7,"date"),ot(8,"date"),s(),c(9,"div",24)(10,"button",9),x("click",function(){let n=P(t).$implicit,o=p(2);return z(o.openEdit(n.id))}),m(11," Editar "),s(),c(12,"button",25),x("click",function(){let n=P(t).$implicit,o=p(2);return z(o.remove(n.id))}),m(13," Excluir "),s()()(),_(14,di,1,0,"mat-divider")}if(i&2){let t,e=a.$implicit,n=a.$index,o=a.$count,r=p(2);S("customer-item-selected",r.editorOpen()&&((t=r.selected())==null?null:t.id)===e.id),l(2),M(e.name),l(2),ht("",e.email," \xB7 ",e.phone),l(2),At(" Doc: ",e.document," \xB7 Criado ",at(7,12,e.createdAt,"short")," \xB7 Atualizado ",at(8,15,e.updatedAt,"short")," \xB7 Owner: ",e.ownerId," "),l(4),u("disabled",r.loading()),l(2),u("disabled",r.loading()),l(2),g(n!==o-1?14:-1)}}function pi(i,a){if(i&1&&(c(0,"mat-list",16),Lt(1,hi,15,18,null,null,ri),s()),i&2){let t=p();l(),Ft(t.customers())}}function _i(i,a){if(i&1&&(c(0,"p",28),m(1),ot(2,"date"),s()),i&2){let t=a;l(),ht(" ID: ",t.id," \xB7 Atualizado em ",at(2,2,t.updatedAt,"short")," ")}}function gi(i,a){if(i&1&&(c(0,"mat-error"),m(1),s()),i&2){let t=p(2);l(),M(t.errMsg(t.customerForm.controls.name,"Nome"))}}function ui(i,a){if(i&1&&(c(0,"mat-error"),m(1),s()),i&2){let t=p(2);l(),M(t.errMsg(t.customerForm.controls.email,"E-mail"))}}function fi(i,a){if(i&1&&(c(0,"mat-error"),m(1),s()),i&2){let t=p(2);l(),M(t.errMsg(t.customerForm.controls.phone,"Telefone"))}}function bi(i,a){if(i&1&&(c(0,"mat-error"),m(1),s()),i&2){let t=p(2);l(),M(t.errMsg(t.customerForm.controls.document,"Documento"))}}function vi(i,a){if(i&1){let t=nt();c(0,"mat-card",17)(1,"mat-card-content")(2,"div",26)(3,"h2",27),m(4),s(),c(5,"button",9),x("click",function(){P(t);let n=p();return z(n.clearSelection())}),m(6," Voltar \xE0 lista "),s()(),_(7,_i,3,5,"p",28),c(8,"form",29),x("ngSubmit",function(){P(t);let n=p();return z(n.submitCustomerForm())}),c(9,"mat-form-field",30)(10,"mat-label"),m(11,"Nome"),s(),v(12,"input",31),_(13,gi,2,1,"mat-error"),s(),c(14,"mat-form-field",30)(15,"mat-label"),m(16,"E-mail"),s(),v(17,"input",32),_(18,ui,2,1,"mat-error"),s(),c(19,"mat-form-field",30)(20,"mat-label"),m(21,"Telefone"),s(),v(22,"input",33),_(23,fi,2,1,"mat-error"),s(),c(24,"mat-form-field",30)(25,"mat-label"),m(26,"CPF ou CNPJ"),s(),v(27,"input",34),_(28,bi,2,1,"mat-error"),s(),c(29,"div",35)(30,"button",36),m(31),s()()()()()}if(i&2){let t,e=p();l(4),M(e.selected()?"Editar cliente":"Novo cliente"),l(),u("disabled",e.loading()),l(2),g((t=e.selected())?7:-1,t),l(),u("formGroup",e.customerForm),l(5),g(e.showErr(e.customerForm.controls.name)?13:-1),l(5),g(e.showErr(e.customerForm.controls.email)?18:-1),l(5),g(e.showErr(e.customerForm.controls.phone)?23:-1),l(5),g(e.showErr(e.customerForm.controls.document)?28:-1),l(2),u("disabled",e.customerForm.invalid||e.loading()),l(),Dt(" ",e.selected()?"Salvar":"Cadastrar"," ")}}var Ne=class i{loading=b(!1);error=b(null);customers=b([]);selected=b(null);editorOpen=b(!1);searchControl=new Ht("",{nonNullable:!0});api=d(lt);fb=d(Kt);destroyRef=d(et);customerForm=this.fb.nonNullable.group({name:["",[f.required,f.maxLength(200)]],email:["",[f.required,f.email,f.maxLength(320)]],phone:["",[f.required,f.maxLength(30)]],document:["",[f.required,f.minLength(11),f.maxLength(18)]]});constructor(){this.searchControl.valueChanges.pipe(yt(300),Ct(),Ce(this.destroyRef)).subscribe(()=>this.reload()),this.reload()}activeSearch(){return this.searchControl.value.trim().length>0}showErr(a){return a.invalid&&(a.touched||a.dirty)}errMsg(a,t){return a.hasError("required")?`${t} \xE9 obrigat\xF3rio.`:a.hasError("email")?"Informe um e-mail v\xE1lido.":a.hasError("maxlength")?`${t} excede o tamanho m\xE1ximo.`:a.hasError("minlength")?`${t} \xE9 curto demais (m\xEDn. 11 caracteres).`:`${t} inv\xE1lido.`}reload(){let a=this.searchControl.value.trim();this.loading.set(!0),this.error.set(null),this.api.list(a||void 0).subscribe({next:t=>{this.customers.set(t),this.loading.set(!1);let e=this.selected();e&&!t.some(n=>n.id===e.id)&&this.clearSelection()},error:()=>{this.loading.set(!1),this.error.set("Falha ao carregar clientes (verifique login/API).")}})}openCreate(){this.editorOpen.set(!0),this.selected.set(null),this.customerForm.reset({name:"",email:"",phone:"",document:""})}openEdit(a){this.loading.set(!0),this.error.set(null),this.api.get(a).subscribe({next:t=>{this.selected.set(t),this.editorOpen.set(!0),this.customerForm.reset({name:t.name,email:t.email,phone:t.phone,document:t.document}),this.loading.set(!1)},error:()=>{this.loading.set(!1),this.error.set("Falha ao carregar o cliente.")}})}clearSelection(){this.editorOpen.set(!1),this.selected.set(null),this.customerForm.reset({name:"",email:"",phone:"",document:""})}submitCustomerForm(){let a=this.selected();if(this.customerForm.invalid)return;let t=this.customerForm.getRawValue();a?(this.loading.set(!0),this.error.set(null),this.api.update(a.id,t).subscribe({next:()=>{this.clearSelection(),this.reload()},error:()=>{this.loading.set(!1),this.error.set("Falha ao atualizar cliente.")}})):(this.loading.set(!0),this.error.set(null),this.api.create(t).subscribe({next:()=>{this.clearSelection(),this.reload()},error:()=>{this.loading.set(!1),this.error.set("Falha ao cadastrar cliente.")}}))}remove(a){globalThis.confirm("Excluir este cliente? Esta a\xE7\xE3o n\xE3o pode ser desfeita.")&&(this.loading.set(!0),this.error.set(null),this.api.delete(a).subscribe({next:()=>{this.selected()?.id===a&&this.clearSelection(),this.reload()},error:()=>{this.loading.set(!1),this.error.set("Falha ao excluir cliente.")}}))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=L({type:i,selectors:[["app-customers-page"]],decls:28,vars:7,consts:[[1,"page"],[1,"page-header"],[1,"mat-headline-medium","page-title"],[1,"mat-body-medium","muted"],["appearance","outlined",1,"panel"],["mode","indeterminate","aria-label","Carregando lista"],[1,"panel-head"],[1,"toolbar"],["mat-flat-button","","color","primary","type","button",3,"click","disabled"],["mat-stroked-button","","type","button",3,"click","disabled"],[1,"panel-body"],["appearance","outline","subscriptSizing","dynamic",1,"search-field"],["matPrefix",""],["matInput","","type","search","placeholder","Nome, e-mail, telefone ou documento\u2026","autocomplete","off",3,"formControl"],["role","alert",1,"banner-error","mat-body-medium"],["role","status",1,"empty-state"],[1,"customer-list"],["appearance","outlined",1,"panel","editor"],[1,"empty-title","mat-body-large"],[1,"empty-hint","mat-body-medium"],["lines","3",1,"customer-item"],["matListItemTitle",""],["matListItemLine",""],["matListItemLine","",1,"dim-line"],["matListItemMeta","",1,"item-actions"],["mat-flat-button","","color","warn","type","button",3,"click","disabled"],[1,"editor-toolbar"],[1,"mat-headline-small","editor-title"],[1,"meta-sub","mat-body-small"],[1,"form-grid",3,"ngSubmit","formGroup"],["appearance","outline"],["matInput","","type","text","formControlName","name","autocomplete","name"],["matInput","","type","email","formControlName","email","autocomplete","email"],["matInput","","type","text","formControlName","phone","autocomplete","tel"],["matInput","","type","text","formControlName","document"],[1,"actions-row"],["mat-flat-button","","color","primary","type","submit",3,"disabled"]],template:function(t,e){t&1&&(c(0,"div",0)(1,"header",1)(2,"h1",2),m(3,"Clientes"),s(),c(4,"p",3),m(5,"Cadastro com formul\xE1rios reativos e valida\xE7\xF5es."),s()(),c(6,"mat-card",4),_(7,si,1,0,"mat-progress-bar",5),c(8,"mat-card-header",6)(9,"mat-card-title"),m(10,"Lista"),s(),c(11,"div",7)(12,"button",8),x("click",function(){return e.openCreate()}),m(13," Novo cliente "),s(),c(14,"button",9),x("click",function(){return e.reload()}),m(15,"Recarregar"),s()()(),c(16,"mat-card-content",10)(17,"mat-form-field",11)(18,"mat-label"),m(19,"Buscar"),s(),c(20,"mat-icon",12),m(21,"search"),s(),v(22,"input",13),s(),_(23,ci,2,1,"p",14),_(24,li,7,1,"div",15)(25,mi,5,0,"div",15)(26,pi,3,0,"mat-list",16),s()(),_(27,vi,32,10,"mat-card",17),s()),t&2&&(l(7),g(e.loading()?7:-1),l(5),u("disabled",e.loading()),l(2),u("disabled",e.loading()),l(8),u("formControl",e.searchControl),l(),g(e.error()?23:-1),l(),g(!e.loading()&&e.customers().length===0&&!e.activeSearch()?24:!e.loading()&&e.customers().length===0&&e.activeSearch()?25:26),l(3),g(e.editorOpen()?27:-1))},dependencies:[Xt,$t,Ut,Vt,qt,Qt,Gt,Wt,pe,le,de,he,me,ce,se,be,fe,_e,ge,ue,xe,ve,Te,Oe,st,ke,ze,Re,Pe,gt,_t,ut,we,ye,Nt],styles:[".page[_ngcontent-%COMP%]{width:100%;max-width:960px;margin-inline:auto;display:flex;flex-direction:column;gap:16px}.page-header[_ngcontent-%COMP%]   .muted[_ngcontent-%COMP%]{margin:4px 0 0;color:var(--mat-sys-on-surface-variant)}.panel[_ngcontent-%COMP%]{overflow:hidden}.panel[_ngcontent-%COMP%]   mat-progress-bar[_ngcontent-%COMP%]{border-radius:12px 12px 0 0}.panel-head[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px;padding-top:8px}.toolbar[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:8px;align-items:center}.panel-body[_ngcontent-%COMP%]{padding-top:8px!important}.search-field[_ngcontent-%COMP%]{width:100%;max-width:440px;margin-bottom:8px}.banner-error[_ngcontent-%COMP%]{margin:8px 0;color:var(--mat-sys-error)}.empty-state[_ngcontent-%COMP%]{margin-top:16px;padding:28px 20px;border:1px dashed var(--mat-sys-outline-variant);border-radius:12px;text-align:center;background-color:var(--mat-sys-surface-container-low)}.empty-title[_ngcontent-%COMP%]{margin:0;font-weight:600}.empty-hint[_ngcontent-%COMP%]{margin:8px auto 16px;max-width:360px;color:var(--mat-sys-on-surface-variant);line-height:1.45}.customer-list[_ngcontent-%COMP%]{padding:0;margin-top:8px}.customer-item[_ngcontent-%COMP%]{height:auto!important;min-height:72px;align-items:flex-start}.customer-item[_ngcontent-%COMP%]     .mat-mdc-list-item-meta{align-self:center}.dim-line[_ngcontent-%COMP%]{color:var(--mat-sys-on-surface-variant);font-size:.8rem}.item-actions[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:8px;justify-content:flex-end}.customer-item-selected[_ngcontent-%COMP%]{background-color:color-mix(in srgb,var(--mat-sys-primary) 12%,transparent)}.editor-toolbar[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:12px;margin-bottom:8px}.editor-title[_ngcontent-%COMP%]{margin:0}.meta-sub[_ngcontent-%COMP%]{margin:0 0 12px;color:var(--mat-sys-on-surface-variant)}.form-grid[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px}.form-grid[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}.actions-row[_ngcontent-%COMP%]{display:flex;gap:8px;align-items:center;margin-top:8px}"],changeDetection:0})};export{Ne as CustomersPage};
