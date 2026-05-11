import{$ as Rt,$a as Te,A as Ce,Aa as Pt,Ab as Tt,Ba as q,Bb as Ne,Ca as K,Cb as Ve,D as Se,Fa as J,G as Oe,Ga as Qt,Gb as Be,Hb as ne,Ib as oe,Ja as x,Jb as se,Jc as Ft,K as Re,Ka as g,Kc as z,La as v,Lc as at,Mc as Ze,Na as Z,Nc as $e,O as H,Oc as ut,P as Ee,Q as Ot,Qb as At,Qc as lt,Rc as re,Sb as je,Sc as Qe,Tb as W,Tc as qe,U as D,Ua as qt,Uc as Ke,V as f,Wa as j,X as b,Xa as Kt,Xb as He,Y as ht,Ya as Jt,Yb as Lt,Yc as Je,Z as a,Za as Pe,Zb as F,Zc as zt,_ as De,_a as Ie,_b as We,a as w,ac as Ye,ad as ti,b as be,bb as te,cb as Ae,cc as Xe,db as Le,dd as ei,e as I,eb as rt,ed as ct,fa as R,fb as pt,fd as Nt,g as ye,ga as y,gd as dt,h as u,hd as ae,ja as B,ka as C,kb as It,kc as Ue,kd as tt,la as Et,lb as Fe,ld as p,m as X,mb as ee,md as T,n as xe,na as Dt,nb as $,nd as ii,ob as M,oc as Ge,od as ni,pa as Mt,pb as ie,q as ot,qa as U,qb as _t,qd as oi,rb as A,sa as _,sb as L,sd as et,td as S,ua as Me,ud as si,va as st,w as ke,x as we,xa as G,y as St,yb as k,z as $t,za as Q,zb as ze}from"./chunk-LJQY5XNO.js";var Vi=["*"];function Bi(o,i){o&1&&M(0)}function ji(o,i){if(o&1&&(rt(0,"div",1),Kt(1,Bi,1,0),pt()),o&2){let t=ee(),e=oe(0),n=oe(1);ze(t.styles()),k("custom-content",e==="custom-content")("circle",e==="circle")("square",e==="square")("progress",n==="progress")("progress-dark",n==="progress-dark")("pulse",n==="pulse")("pulse-dark",n==="pulse-dark"),j("aria-label",t.ariaLabel())("aria-valuetext",t.loadingText()),G(),Jt(e==="custom-content"?1:-1)}}var ri=new b("ngx-skeleton-loader.config"),An=(()=>{class o{constructor(){this.#t=a(ri,{optional:!0}),this.count=W(this.#t?.count||1,{transform:We}),this.loadingText=W(this.#t?.loadingText||"Loading...",{}),this.appearance=W(this.#t?.appearance||"line",{}),this.animation=W(this.#t?.animation||"progress",{}),this.ariaLabel=W(this.#t?.ariaLabel||"loading",{}),this.theme=W(this.#t?.theme||null,{}),this.size=W(this.#t?.size||null,{}),this.measureUnit=W(this.#t?.measureUnit||"px",{}),this.items=At(()=>{let t=this.count()||1;return this.appearance()==="custom-content"&&He()&&t!==1&&(console.error('`NgxSkeletonLoaderComponent` enforces elements with "custom-content" appearance as DOM nodes. Forcing "count" to "1".'),t=1),[...Array(t)].map((e,n)=>n)},{}),this.squareSize=At(()=>{let t=this.size();if(this.appearance()!=="square"||typeof t!="number"&&typeof t!="string")return null;let e=Number(t.toString().trim().replace(/\D/g,""));return Number.isInteger(e)?`${e}${this.measureUnit()}`:null},{}),this.styles=At(()=>{let t=this.theme(),e=this.squareSize();return this.#t?.theme?.extendsFromRoot?w(w(w({},this.#t?.theme),t),e&&{width:e,height:e}):w(w({},t),e&&{width:e,height:e})},{})}#t;static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275cmp=x({type:o,selectors:[["ngx-skeleton-loader"]],inputs:{count:[1,"count"],loadingText:[1,"loadingText"],appearance:[1,"appearance"],animation:[1,"animation"],ariaLabel:[1,"ariaLabel"],theme:[1,"theme"],size:[1,"size"],measureUnit:[1,"measureUnit"]},ngContentSelectors:Vi,decls:4,vars:2,consts:[["aria-busy","true","aria-valuemin","0","aria-valuemax","100","role","progressbar","tabindex","-1",1,"skeleton-loader",3,"custom-content","circle","square","progress","progress-dark","pulse","pulse-dark","style"],["aria-busy","true","aria-valuemin","0","aria-valuemax","100","role","progressbar","tabindex","-1",1,"skeleton-loader"]],template:function(e,n){e&1&&($(),Be(0)(1),Ie(2,ji,2,19,"div",0,Pe)),e&2&&(ne(n.appearance()),G(),ne(n.animation()),G(),Te(n.items()))},styles:['.skeleton-loader[_ngcontent-%COMP%]{--ngx-skeleton-loader-base-color: rgb(239, 241, 246);--ngx-skeleton-loader-light-mode-color: rgba(255, 255, 255, .6);--ngx-skeleton-loader-light-mode-color-to: rgba(255, 255, 255, 0);--ngx-skeleton-loader-dark-mode-color: rgba(0, 0, 0, .2);--ngx-skeleton-loader-dark-mode-color-to: transparent;--ngx-skeleton-loader-animation-duration: 2s;--ngx-skeleton-loader-background-image-light-mode: linear-gradient( 90deg, var(--ngx-skeleton-loader-light-mode-color-to), var(--ngx-skeleton-loader-light-mode-color), var(--ngx-skeleton-loader-light-mode-color-to) );--ngx-skeleton-loader-background-image-dark-mode: linear-gradient( 90deg, var(--ngx-skeleton-loader-dark-mode-color-to), var(--ngx-skeleton-loader-dark-mode-color), var(--ngx-skeleton-loader-dark-mode-color-to) );box-sizing:border-box;overflow:hidden;position:relative;background:var(--ngx-skeleton-loader-base-color) no-repeat;border-radius:4px;width:100%;height:20px;display:inline-block;margin-bottom:10px;will-change:transform}.skeleton-loader[_ngcontent-%COMP%]:after, .skeleton-loader[_ngcontent-%COMP%]:before{box-sizing:border-box}.skeleton-loader.circle[_ngcontent-%COMP%]{width:40px;height:40px;margin:5px;border-radius:50%}.skeleton-loader.square[_ngcontent-%COMP%]{width:40px;height:40px;margin:5px}.skeleton-loader.progress[_ngcontent-%COMP%]:after, .skeleton-loader.progress[_ngcontent-%COMP%]:before, .skeleton-loader.progress-dark[_ngcontent-%COMP%]:after, .skeleton-loader.progress-dark[_ngcontent-%COMP%]:before{box-sizing:border-box}.skeleton-loader.progress[_ngcontent-%COMP%], .skeleton-loader.progress-dark[_ngcontent-%COMP%]{transform:translateZ(0)}.skeleton-loader.progress[_ngcontent-%COMP%]:before, .skeleton-loader.progress-dark[_ngcontent-%COMP%]:before{animation:_ngcontent-%COMP%_progress var(--ngx-skeleton-loader-animation-duration) ease-in-out infinite;background-size:200px 100%;position:absolute;z-index:1;top:0;left:0;width:200px;height:100%;content:""}.skeleton-loader.progress[_ngcontent-%COMP%]:before{background-image:var(--ngx-skeleton-loader-background-image-light-mode)}.skeleton-loader.progress-dark[_ngcontent-%COMP%]:before{background-image:var(--ngx-skeleton-loader-background-image-dark-mode)}.skeleton-loader.pulse[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_pulse var(--ngx-skeleton-loader-animation-duration) cubic-bezier(.4,0,.2,1) infinite;animation-delay:.5s}.skeleton-loader.pulse-dark[_ngcontent-%COMP%]{background:var(--ngx-skeleton-loader-dark-mode-color);animation:_ngcontent-%COMP%_pulse var(--ngx-skeleton-loader-animation-duration) cubic-bezier(.4,0,.2,1) infinite;animation-delay:.5s}.skeleton-loader.custom-content[_ngcontent-%COMP%]{height:100%;background:none}@media(prefers-reduced-motion:reduce){.skeleton-loader.pulse[_ngcontent-%COMP%], .skeleton-loader.progress-dark[_ngcontent-%COMP%], .skeleton-loader.pulse-dark[_ngcontent-%COMP%], .skeleton-loader.custom-content[_ngcontent-%COMP%], .skeleton-loader.progress[_ngcontent-%COMP%]:before{animation:none}.skeleton-loader.progress[_ngcontent-%COMP%]:before, .skeleton-loader.progress-dark[_ngcontent-%COMP%], .skeleton-loader.pulse-dark[_ngcontent-%COMP%], .skeleton-loader.custom-content[_ngcontent-%COMP%]{background-image:none}}@media screen and (min-device-width:1200px){.skeleton-loader[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none;cursor:wait}}@keyframes _ngcontent-%COMP%_progress{0%{transform:translate3d(-200px,0,0)}to{transform:translate3d(calc(200px + 100vw),0,0)}}@keyframes _ngcontent-%COMP%_pulse{0%{opacity:1}50%{opacity:.4}to{opacity:1}}'],changeDetection:0})}}return o})();function Ln(o){return De([{provide:ri,useValue:o}])}function ai(o){return Error(`Unable to find icon with the name "${o}"`)}function Hi(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function li(o){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${o}".`)}function ci(o){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${o}".`)}var Y=class{url;svgText;options;svgElement=null;constructor(i,t,e){this.url=i,this.svgText=t,this.options=e}},mi=(()=>{class o{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(t,e,n,s){this._httpClient=t,this._sanitizer=e,this._errorHandler=s,this._document=n}addSvgIcon(t,e,n){return this.addSvgIconInNamespace("",t,e,n)}addSvgIconLiteral(t,e,n){return this.addSvgIconLiteralInNamespace("",t,e,n)}addSvgIconInNamespace(t,e,n,s){return this._addSvgIconConfig(t,e,new Y(n,null,s))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,e,n,s){let r=this._sanitizer.sanitize(st.HTML,n);if(!r)throw ci(n);let l=lt(r);return this._addSvgIconConfig(t,e,new Y("",l,s))}addSvgIconSet(t,e){return this.addSvgIconSetInNamespace("",t,e)}addSvgIconSetLiteral(t,e){return this.addSvgIconSetLiteralInNamespace("",t,e)}addSvgIconSetInNamespace(t,e,n){return this._addSvgIconSetConfig(t,new Y(e,null,n))}addSvgIconSetLiteralInNamespace(t,e,n){let s=this._sanitizer.sanitize(st.HTML,e);if(!s)throw ci(e);let r=lt(s);return this._addSvgIconSetConfig(t,new Y("",r,n))}registerFontClassAlias(t,e=t){return this._fontCssClassesByAlias.set(t,e),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(...t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(t){let e=this._sanitizer.sanitize(st.RESOURCE_URL,t);if(!e)throw li(t);let n=this._cachedIconsByUrl.get(e);return n?X(Vt(n)):this._loadSvgIconFromConfig(new Y(t,null)).pipe(Ot(s=>this._cachedIconsByUrl.set(e,s)),ot(s=>Vt(s)))}getNamedSvgIcon(t,e=""){let n=di(e,t),s=this._svgIconConfigs.get(n);if(s)return this._getSvgFromConfig(s);if(s=this._getIconConfigFromResolvers(e,t),s)return this._svgIconConfigs.set(n,s),this._getSvgFromConfig(s);let r=this._iconSetConfigs.get(e);return r?this._getSvgFromIconSetConfigs(t,r):xe(ai(n))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?X(Vt(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe(ot(e=>Vt(e)))}_getSvgFromIconSetConfigs(t,e){let n=this._extractIconWithNameFromAnySet(t,e);if(n)return X(n);let s=e.filter(r=>!r.svgText).map(r=>this._loadSvgIconSetFromConfig(r).pipe(Ce(l=>{let m=`Loading icon set URL: ${this._sanitizer.sanitize(st.RESOURCE_URL,r.url)} failed: ${l.message}`;return this._errorHandler.handleError(new Error(m)),X(null)})));return ke(s).pipe(ot(()=>{let r=this._extractIconWithNameFromAnySet(t,e);if(!r)throw ai(t);return r}))}_extractIconWithNameFromAnySet(t,e){for(let n=e.length-1;n>=0;n--){let s=e[n];if(s.svgText&&s.svgText.toString().indexOf(t)>-1){let r=this._svgElementFromConfig(s),l=this._extractSvgIconFromSet(r,t,s.options);if(l)return l}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe(Ot(e=>t.svgText=e),ot(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?X(null):this._fetchIcon(t).pipe(Ot(e=>t.svgText=e))}_extractSvgIconFromSet(t,e,n){let s=t.querySelector(`[id="${e}"]`);if(!s)return null;let r=s.cloneNode(!0);if(r.removeAttribute("id"),r.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(r,n);if(r.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(r),n);let l=this._svgElementFromString(lt("<svg></svg>"));return l.appendChild(r),this._setSvgAttributes(l,n)}_svgElementFromString(t){let e=this._document.createElement("DIV");e.innerHTML=t;let n=e.querySelector("svg");if(!n)throw Error("<svg> tag not found");return n}_toSvgElement(t){let e=this._svgElementFromString(lt("<svg></svg>")),n=t.attributes;for(let s=0;s<n.length;s++){let{name:r,value:l}=n[s];r!=="id"&&e.setAttribute(r,l)}for(let s=0;s<t.childNodes.length;s++)t.childNodes[s].nodeType===this._document.ELEMENT_NODE&&e.appendChild(t.childNodes[s].cloneNode(!0));return e}_setSvgAttributes(t,e){return t.setAttribute("fit",""),t.setAttribute("height","100%"),t.setAttribute("width","100%"),t.setAttribute("preserveAspectRatio","xMidYMid meet"),t.setAttribute("focusable","false"),e&&e.viewBox&&t.setAttribute("viewBox",e.viewBox),t}_fetchIcon(t){let{url:e,options:n}=t,s=n?.withCredentials??!1;if(!this._httpClient)throw Hi();if(e==null)throw Error(`Cannot fetch icon from URL "${e}".`);let r=this._sanitizer.sanitize(st.RESOURCE_URL,e);if(!r)throw li(e);let l=this._inProgressUrlFetches.get(r);if(l)return l;let c=this._httpClient.get(r,{responseType:"text",withCredentials:s}).pipe(ot(m=>lt(m)),Oe(()=>this._inProgressUrlFetches.delete(r)),Re());return this._inProgressUrlFetches.set(r,c),c}_addSvgIconConfig(t,e,n){return this._svgIconConfigs.set(di(t,e),n),this}_addSvgIconSetConfig(t,e){let n=this._iconSetConfigs.get(t);return n?n.push(e):this._iconSetConfigs.set(t,[e]),this}_svgElementFromConfig(t){if(!t.svgElement){let e=this._svgElementFromString(t.svgText);this._setSvgAttributes(e,t.options),t.svgElement=e}return t.svgElement}_getIconConfigFromResolvers(t,e){for(let n=0;n<this._resolvers.length;n++){let s=this._resolvers[n](e,t);if(s)return Wi(s)?new Y(s.url,null,s.options):new Y(s,null)}}static \u0275fac=function(e){return new(e||o)(ht(Ue,8),ht(Ge),ht(y,8),ht(Et))};static \u0275prov=D({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();function Vt(o){return o.cloneNode(!0)}function di(o,i){return o+":"+i}function Wi(o){return!!(o.url&&o.options)}var Yi=["*"],Xi=new b("MAT_ICON_DEFAULT_OPTIONS"),Ui=new b("mat-icon-location",{providedIn:"root",factory:()=>{let o=a(y),i=o?o.location:null;return{getPathname:()=>i?i.pathname+i.search:""}}}),hi=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],Gi=hi.map(o=>`[${o}]`).join(", "),Zi=/^url\(['"]?#(.*?)['"]?\)$/,oo=(()=>{class o{_elementRef=a(_);_iconRegistry=a(mi);_location=a(Ui);_errorHandler=a(Et);_defaultColor;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(t){let e=this._cleanupFontValue(t);e!==this._fontSet&&(this._fontSet=e,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(t){let e=this._cleanupFontValue(t);e!==this._fontIcon&&(this._fontIcon=e,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=I.EMPTY;constructor(){let t=a(new je("aria-hidden"),{optional:!0}),e=a(Xi,{optional:!0});e&&(e.color&&(this.color=this._defaultColor=e.color),e.fontSet&&(this.fontSet=e.fontSet)),t||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(t){if(!t)return["",""];let e=t.split(":");switch(e.length){case 1:return["",e[0]];case 2:return e;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let t=this._elementsWithExternalReferences;if(t&&t.size){let e=this._location.getPathname();e!==this._previousPath&&(this._previousPath=e,this._prependPathToReferences(e))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();let e=this._location.getPathname();this._previousPath=e,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(e),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){let t=this._elementRef.nativeElement,e=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();e--;){let n=t.childNodes[e];(n.nodeType!==1||n.nodeName.toLowerCase()==="svg")&&n.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let t=this._elementRef.nativeElement,e=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(n=>n.length>0);this._previousFontSetClass.forEach(n=>t.classList.remove(n)),e.forEach(n=>t.classList.add(n)),this._previousFontSetClass=e,this.fontIcon!==this._previousFontIconClass&&!e.includes("mat-ligature-font")&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return typeof t=="string"?t.trim().split(" ")[0]:t}_prependPathToReferences(t){let e=this._elementsWithExternalReferences;e&&e.forEach((n,s)=>{n.forEach(r=>{s.setAttribute(r.name,`url('${t}#${r.value}')`)})})}_cacheChildrenWithExternalReferences(t){let e=t.querySelectorAll(Gi),n=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let s=0;s<e.length;s++)hi.forEach(r=>{let l=e[s],c=l.getAttribute(r),m=c?c.match(Zi):null;if(m){let d=n.get(l);d||(d=[],n.set(l,d)),d.push({name:r,value:m[1]})}})}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){let[e,n]=this._splitIconName(t);e&&(this._svgNamespace=e),n&&(this._svgName=n),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(n,e).pipe(Se(1)).subscribe(s=>this._setSvgElement(s),s=>{let r=`Error retrieving icon ${e}:${n}! ${s.message}`;this._errorHandler.handleError(new Error(r))})}}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=x({type:o,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(e,n){e&2&&(j("data-mat-icon-type",n._usingFontIcon()?"font":"svg")("data-mat-icon-name",n._svgName||n.fontIcon)("data-mat-icon-namespace",n._svgNamespace||n.fontSet)("fontIcon",n._usingFontIcon()?n.fontIcon:null),Tt(n.color?"mat-"+n.color:""),k("mat-icon-inline",n.inline)("mat-icon-no-color",n.color!=="primary"&&n.color!=="accent"&&n.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",F],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:Yi,decls:1,vars:0,template:function(e,n){e&1&&($(),M(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
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
`],encapsulation:2,changeDetection:0})}return o})(),so=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=g({type:o});static \u0275inj=f({imports:[S]})}return o})();var le=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new u;constructor(i=!1,t,e=!0,n){this._multiple=i,this._emitChanges=e,this.compareWith=n,t&&t.length&&(i?t.forEach(s=>this._markSelected(s)):this._markSelected(t[0]),this._selectedToEmit.length=0)}select(...i){this._verifyValueAssignment(i),i.forEach(e=>this._markSelected(e));let t=this._hasQueuedChanges();return this._emitChangeEvent(),t}deselect(...i){this._verifyValueAssignment(i),i.forEach(e=>this._unmarkSelected(e));let t=this._hasQueuedChanges();return this._emitChangeEvent(),t}setSelection(...i){this._verifyValueAssignment(i);let t=this.selected,e=new Set(i.map(s=>this._getConcreteValue(s)));i.forEach(s=>this._markSelected(s)),t.filter(s=>!e.has(this._getConcreteValue(s,e))).forEach(s=>this._unmarkSelected(s));let n=this._hasQueuedChanges();return this._emitChangeEvent(),n}toggle(i){return this.isSelected(i)?this.deselect(i):this.select(i)}clear(i=!0){this._unmarkAll();let t=this._hasQueuedChanges();return i&&this._emitChangeEvent(),t}isSelected(i){return this._selection.has(this._getConcreteValue(i))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(i){this._multiple&&this.selected&&this._selected.sort(i)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(i){i=this._getConcreteValue(i),this.isSelected(i)||(this._multiple||this._unmarkAll(),this.isSelected(i)||this._selection.add(i),this._emitChanges&&this._selectedToEmit.push(i))}_unmarkSelected(i){i=this._getConcreteValue(i),this.isSelected(i)&&(this._selection.delete(i),this._emitChanges&&this._deselectedToEmit.push(i))}_unmarkAll(){this.isEmpty()||this._selection.forEach(i=>this._unmarkSelected(i))}_verifyValueAssignment(i){i.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(i,t){if(this.compareWith){t=t??this._selection;for(let e of t)if(this.compareWith(i,e))return e;return i}else return i}};var $i=(()=>{class o{get vertical(){return this._vertical}set vertical(t){this._vertical=T(t)}_vertical=!1;get inset(){return this._inset}set inset(t){this._inset=T(t)}_inset=!1;static \u0275fac=function(e){return new(e||o)};static \u0275cmp=x({type:o,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(e,n){e&2&&(j("aria-orientation",n.vertical?"vertical":"horizontal"),k("mat-divider-vertical",n.vertical)("mat-divider-horizontal",!n.vertical)("mat-divider-inset",n.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(e,n){},styles:[`.mat-divider {
  display: block;
  margin: 0;
  border-top-style: solid;
  border-top-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-top-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-vertical {
  border-top: 0;
  border-right-style: solid;
  border-right-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-right-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-inset {
  margin-left: 80px;
}
[dir=rtl] .mat-divider.mat-divider-inset {
  margin-left: auto;
  margin-right: 80px;
}
`],encapsulation:2,changeDetection:0})}return o})(),pi=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=g({type:o});static \u0275inj=f({imports:[S]})}return o})();var go=(()=>{class o{_animationsDisabled=tt();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=x({type:o,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(e,n){e&2&&k("mat-pseudo-checkbox-indeterminate",n.state==="indeterminate")("mat-pseudo-checkbox-checked",n.state==="checked")("mat-pseudo-checkbox-disabled",n.disabled)("mat-pseudo-checkbox-minimal",n.appearance==="minimal")("mat-pseudo-checkbox-full",n.appearance==="full")("_mat-animation-noopable",n._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(e,n){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2,changeDetection:0})}return o})();var _i=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=g({type:o});static \u0275inj=f({imports:[S]})}return o})();var qi=["*"],Ki=`.mdc-list {
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
`,Ji=["unscopedContent"],tn=["text"],en=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],nn=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var on=new b("ListOption"),sn=(()=>{class o{_elementRef=a(_);constructor(){}static \u0275fac=function(e){return new(e||o)};static \u0275dir=v({type:o,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return o})(),rn=(()=>{class o{_elementRef=a(_);constructor(){}static \u0275fac=function(e){return new(e||o)};static \u0275dir=v({type:o,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return o})(),an=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275dir=v({type:o,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return o})(),ui=(()=>{class o{_listOption=a(on,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(e){return new(e||o)};static \u0275dir=v({type:o,hostVars:4,hostBindings:function(e,n){e&2&&k("mdc-list-item__start",n._isAlignedAtStart())("mdc-list-item__end",!n._isAlignedAtStart())}})}return o})(),ln=(()=>{class o extends ui{static \u0275fac=(()=>{let t;return function(n){return(t||(t=U(o)))(n||o)}})();static \u0275dir=v({type:o,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[Z]})}return o})(),cn=(()=>{class o extends ui{static \u0275fac=(()=>{let t;return function(n){return(t||(t=U(o)))(n||o)}})();static \u0275dir=v({type:o,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[Z]})}return o})(),dn=new b("MAT_LIST_CONFIG"),ce=(()=>{class o{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=T(t)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(t){this._disabled.set(T(t))}_disabled=Dt(!1);_defaultOptions=a(dn,{optional:!0});static \u0275fac=function(e){return new(e||o)};static \u0275dir=v({type:o,hostVars:1,hostBindings:function(e,n){e&2&&j("aria-disabled",n.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return o})(),mn=(()=>{class o{_elementRef=a(_);_ngZone=a(C);_listBase=a(ce,{optional:!0});_platform=a(z);_hostElement;_isButtonElement;_noopAnimations=tt();_avatars;_icons;set lines(t){this._explicitLines=at(t,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(t){this._disableRipple=T(t)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(t){this._disabled.set(T(t))}_disabled=Dt(!1);_subscriptions=new I;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){a(ut).load(oi);let t=a(ni,{optional:!0});this.rippleConfig=t||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new ii(this,this._ngZone,this._hostElement,this._platform,a(R)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(we(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(t){if(!this._lines||!this._titles||!this._unscopedContent)return;t&&this._checkDomForUnscopedTextContent();let e=this._explicitLines??this._inferLinesFromContent(),n=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",e===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",e===3),this._hasUnscopedTextContent){let s=this._titles.length===0&&e===1;n.classList.toggle("mdc-list-item__primary-text",s),n.classList.toggle("mdc-list-item__secondary-text",!s)}else n.classList.remove("mdc-list-item__primary-text"),n.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let t=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(t+=1),t}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(t=>t.nodeType!==t.COMMENT_NODE).some(t=>!!(t.textContent&&t.textContent.trim()))}static \u0275fac=function(e){return new(e||o)};static \u0275dir=v({type:o,contentQueries:function(e,n,s){if(e&1&&ie(s,ln,4)(s,cn,4),e&2){let r;A(r=L())&&(n._avatars=r),A(r=L())&&(n._icons=r)}},hostVars:4,hostBindings:function(e,n){e&2&&(j("aria-disabled",n.disabled)("disabled",n._isButtonElement&&n.disabled||null),k("mdc-list-item--disabled",n.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return o})();var Qo=(()=>{class o extends ce{static \u0275fac=(()=>{let t;return function(n){return(t||(t=U(o)))(n||o)}})();static \u0275cmp=x({type:o,selectors:[["mat-list"]],hostAttrs:[1,"mat-mdc-list","mat-mdc-list-base","mdc-list"],exportAs:["matList"],features:[se([{provide:ce,useExisting:o}]),Z],ngContentSelectors:qi,decls:1,vars:0,template:function(e,n){e&1&&($(),M(0))},styles:[Ki],encapsulation:2,changeDetection:0})}return o})(),qo=(()=>{class o extends mn{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(t){this._activated=T(t)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let t;return function(n){return(t||(t=U(o)))(n||o)}})();static \u0275cmp=x({type:o,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(e,n,s){if(e&1&&ie(s,rn,5)(s,sn,5)(s,an,5),e&2){let r;A(r=L())&&(n._lines=r),A(r=L())&&(n._titles=r),A(r=L())&&(n._meta=r)}},viewQuery:function(e,n){if(e&1&&_t(Ji,5)(tn,5),e&2){let s;A(s=L())&&(n._unscopedContent=s.first),A(s=L())&&(n._itemText=s.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(e,n){e&2&&(j("aria-current",n._getAriaCurrent()),k("mdc-list-item--activated",n.activated)("mdc-list-item--with-leading-avatar",n._avatars.length!==0)("mdc-list-item--with-leading-icon",n._icons.length!==0)("mdc-list-item--with-trailing-meta",n._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",n._hasBothLeadingAndTrailing())("_mat-animation-noopable",n._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[Z],ngContentSelectors:nn,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(e,n){e&1&&($(en),M(0),te(1,"span",1),M(2,1),M(3,2),te(4,"span",2,0),It("cdkObserveContent",function(){return n._updateItemLines(!0)}),M(6,3),Ae()(),M(7,4),M(8,5),Le(9,"div",3))},dependencies:[qe],encapsulation:2,changeDetection:0})}return o})();var Ko=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=g({type:o});static \u0275inj=f({imports:[Ke,si,_i,S,pi]})}return o})();var hn=20,it=(()=>{class o{_ngZone=a(C);_platform=a(z);_renderer=a(q).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new u;_scrolledCount=0;scrollContainers=new Map;register(t){this.scrollContainers.has(t)||this.scrollContainers.set(t,t.elementScrolled().subscribe(()=>this._scrolled.next(t)))}deregister(t){let e=this.scrollContainers.get(t);e&&(e.unsubscribe(),this.scrollContainers.delete(t))}scrolled(t=hn){return this._platform.isBrowser?new ye(e=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let n=t>0?this._scrolled.pipe($t(t)).subscribe(e):this._scrolled.subscribe(e);return this._scrolledCount++,()=>{n.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):X()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((t,e)=>this.deregister(e)),this._scrolled.complete()}ancestorScrolled(t,e){let n=this.getAncestorScrollContainers(t);return this.scrolled(e).pipe(St(s=>!s||n.indexOf(s)>-1))}getAncestorScrollContainers(t){let e=[];return this.scrollContainers.forEach((n,s)=>{this._scrollableContainsElement(s,t)&&e.push(s)}),e}_scrollableContainsElement(t,e){let n=Ze(e),s=t.getElementRef().nativeElement;do if(n==s)return!0;while(n=n.parentElement);return!1}static \u0275fac=function(e){return new(e||o)};static \u0275prov=D({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),pn=(()=>{class o{elementRef=a(_);scrollDispatcher=a(it);ngZone=a(C);dir=a(et,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new u;_renderer=a(K);_cleanupScroll;_elementScrolled=new u;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",t=>this._elementScrolled.next(t))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(t){let e=this.elementRef.nativeElement,n=this.dir&&this.dir.value=="rtl";t.left==null&&(t.left=n?t.end:t.start),t.right==null&&(t.right=n?t.start:t.end),t.bottom!=null&&(t.top=e.scrollHeight-e.clientHeight-t.bottom),n&&dt()!=ct.NORMAL?(t.left!=null&&(t.right=e.scrollWidth-e.clientWidth-t.left),dt()==ct.INVERTED?t.left=t.right:dt()==ct.NEGATED&&(t.left=t.right?-t.right:t.right)):t.right!=null&&(t.left=e.scrollWidth-e.clientWidth-t.right),this._applyScrollToOptions(t)}_applyScrollToOptions(t){let e=this.elementRef.nativeElement;Nt()?e.scrollTo(t):(t.top!=null&&(e.scrollTop=t.top),t.left!=null&&(e.scrollLeft=t.left))}measureScrollOffset(t){let e="left",n="right",s=this.elementRef.nativeElement;if(t=="top")return s.scrollTop;if(t=="bottom")return s.scrollHeight-s.clientHeight-s.scrollTop;let r=this.dir&&this.dir.value=="rtl";return t=="start"?t=r?n:e:t=="end"&&(t=r?e:n),r&&dt()==ct.INVERTED?t==e?s.scrollWidth-s.clientWidth-s.scrollLeft:s.scrollLeft:r&&dt()==ct.NEGATED?t==e?s.scrollLeft+s.scrollWidth-s.clientWidth:-s.scrollLeft:t==e?s.scrollLeft:s.scrollWidth-s.clientWidth-s.scrollLeft}static \u0275fac=function(e){return new(e||o)};static \u0275dir=v({type:o,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return o})(),_n=20,mt=(()=>{class o{_platform=a(z);_listeners;_viewportSize=null;_change=new u;_document=a(y);constructor(){let t=a(C),e=a(q).createRenderer(null,null);t.runOutsideAngular(()=>{if(this._platform.isBrowser){let n=s=>this._change.next(s);this._listeners=[e.listen("window","resize",n),e.listen("window","orientationchange",n)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(t=>t()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let t={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),t}getViewportRect(){let t=this.getViewportScrollPosition(),{width:e,height:n}=this.getViewportSize();return{top:t.top,left:t.left,bottom:t.top+n,right:t.left+e,height:n,width:e}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let t=this._document,e=this._getWindow(),n=t.documentElement,s=n.getBoundingClientRect(),r=-s.top||t.body?.scrollTop||e.scrollY||n.scrollTop||0,l=-s.left||t.body?.scrollLeft||e.scrollX||n.scrollLeft||0;return{top:r,left:l}}change(t=_n){return t>0?this._change.pipe($t(t)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let t=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:t.innerWidth,height:t.innerHeight}:{width:0,height:0}}static \u0275fac=function(e){return new(e||o)};static \u0275prov=D({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var ft=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=g({type:o});static \u0275inj=f({})}return o})(),de=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=g({type:o});static \u0275inj=f({imports:[S,ft,S,ft]})}return o})();var gt=class{_attachedHost=null;attach(i){return this._attachedHost=i,i.attach(this)}detach(){let i=this._attachedHost;i!=null&&(this._attachedHost=null,i.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(i){this._attachedHost=i}},vt=class extends gt{component;viewContainerRef;injector;projectableNodes;bindings;constructor(i,t,e,n,s){super(),this.component=i,this.viewContainerRef=t,this.injector=e,this.projectableNodes=n,this.bindings=s||null}},bt=class extends gt{templateRef;viewContainerRef;context;injector;constructor(i,t,e,n){super(),this.templateRef=i,this.viewContainerRef=t,this.context=e,this.injector=n}get origin(){return this.templateRef.elementRef}attach(i,t=this.context){return this.context=t,super.attach(i)}detach(){return this.context=void 0,super.detach()}},me=class extends gt{element;constructor(i){super(),this.element=i instanceof _?i.nativeElement:i}},Bt=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(i){if(i instanceof vt)return this._attachedPortal=i,this.attachComponentPortal(i);if(i instanceof bt)return this._attachedPortal=i,this.attachTemplatePortal(i);if(this.attachDomPortal&&i instanceof me)return this._attachedPortal=i,this.attachDomPortal(i)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(i){this._disposeFn=i}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},jt=class extends Bt{outletElement;_appRef;_defaultInjector;constructor(i,t,e){super(),this.outletElement=i,this._appRef=t,this._defaultInjector=e}attachComponentPortal(i){let t;if(i.viewContainerRef){let e=i.injector||i.viewContainerRef.injector,n=e.get(Qt,null,{optional:!0})||void 0;t=i.viewContainerRef.createComponent(i.component,{index:i.viewContainerRef.length,injector:e,ngModuleRef:n,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0}),this.setDisposeFn(()=>t.destroy())}else{let e=this._appRef,n=i.injector||this._defaultInjector||R.NULL,s=n.get(Rt,e.injector);t=Ye(i.component,{elementInjector:n,environmentInjector:s,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0}),e.attachView(t.hostView),this.setDisposeFn(()=>{e.viewCount>0&&e.detachView(t.hostView),t.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(t)),this._attachedPortal=i,t}attachTemplatePortal(i){let t=i.viewContainerRef,e=t.createEmbeddedView(i.templateRef,i.context,{injector:i.injector});return e.rootNodes.forEach(n=>this.outletElement.appendChild(n)),e.detectChanges(),this.setDisposeFn(()=>{let n=t.indexOf(e);n!==-1&&t.remove(n)}),this._attachedPortal=i,e}attachDomPortal=i=>{let t=i.element;t.parentNode;let e=this.outletElement.ownerDocument.createComment("dom-portal");t.parentNode.insertBefore(e,t),this.outletElement.appendChild(t),this._attachedPortal=i,super.setDisposeFn(()=>{e.parentNode&&e.parentNode.replaceChild(t,e)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(i){return i.hostView.rootNodes[0]}};var Ns=(()=>{class o extends Bt{_moduleRef=a(Qt,{optional:!0});_document=a(y);_viewContainerRef=a(J);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(t){this.hasAttached()&&!t&&!this._isInitialized||(this.hasAttached()&&super.detach(),t&&super.attach(t),this._attachedPortal=t||null)}attached=new B;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(t){t.setAttachedHost(this);let e=t.viewContainerRef!=null?t.viewContainerRef:this._viewContainerRef,n=e.createComponent(t.component,{index:e.length,injector:t.injector||e.injector,projectableNodes:t.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:t.bindings||void 0});return e!==this._viewContainerRef&&this._getRootNode().appendChild(n.hostView.rootNodes[0]),super.setDisposeFn(()=>n.destroy()),this._attachedPortal=t,this._attachedRef=n,this.attached.emit(n),n}attachTemplatePortal(t){t.setAttachedHost(this);let e=this._viewContainerRef.createEmbeddedView(t.templateRef,t.context,{injector:t.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=t,this._attachedRef=e,this.attached.emit(e),e}attachDomPortal=t=>{let e=t.element;e.parentNode;let n=this._document.createComment("dom-portal");t.setAttachedHost(this),e.parentNode.insertBefore(n,e),this._getRootNode().appendChild(e),this._attachedPortal=t,super.setDisposeFn(()=>{n.parentNode&&n.parentNode.replaceChild(e,n)})};_getRootNode(){let t=this._viewContainerRef.element.nativeElement;return t.nodeType===t.ELEMENT_NODE?t:t.parentNode}static \u0275fac=function(e){return new(e||o)};static \u0275dir=v({type:o,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[Z]})}return o})(),fi=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=g({type:o});static \u0275inj=f({})}return o})();var gi=Nt();function Si(o){return new Ht(o.get(mt),o.get(y))}var Ht=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(i,t){this._viewportRuler=i,this._document=t}attach(){}enable(){if(this._canBeEnabled()){let i=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=i.style.left||"",this._previousHTMLStyles.top=i.style.top||"",i.style.left=p(-this._previousScrollPosition.left),i.style.top=p(-this._previousScrollPosition.top),i.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let i=this._document.documentElement,t=this._document.body,e=i.style,n=t.style,s=e.scrollBehavior||"",r=n.scrollBehavior||"";this._isEnabled=!1,e.left=this._previousHTMLStyles.left,e.top=this._previousHTMLStyles.top,i.classList.remove("cdk-global-scrollblock"),gi&&(e.scrollBehavior=n.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),gi&&(e.scrollBehavior=s,n.scrollBehavior=r)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let t=this._document.documentElement,e=this._viewportRuler.getViewportSize();return t.scrollHeight>e.height||t.scrollWidth>e.width}};function Oi(o,i){return new Wt(o.get(it),o.get(C),o.get(mt),i)}var Wt=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(i,t,e,n){this._scrollDispatcher=i,this._ngZone=t,this._viewportRuler=e,this._config=n}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(this._scrollSubscription)return;let i=this._scrollDispatcher.scrolled(0).pipe(St(t=>!t||!this._overlayRef.overlayElement.contains(t.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=i.subscribe(()=>{let t=this._viewportRuler.getViewportScrollPosition().top;Math.abs(t-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=i.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var yt=class{enable(){}disable(){}attach(){}};function he(o,i){return i.some(t=>{let e=o.bottom<t.top,n=o.top>t.bottom,s=o.right<t.left,r=o.left>t.right;return e||n||s||r})}function vi(o,i){return i.some(t=>{let e=o.top<t.top,n=o.bottom>t.bottom,s=o.left<t.left,r=o.right>t.right;return e||n||s||r})}function kt(o,i){return new Yt(o.get(it),o.get(mt),o.get(C),i)}var Yt=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(i,t,e,n){this._scrollDispatcher=i,this._viewportRuler=t,this._ngZone=e,this._config=n}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(!this._scrollSubscription){let i=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(i).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let t=this._overlayRef.overlayElement.getBoundingClientRect(),{width:e,height:n}=this._viewportRuler.getViewportSize();he(t,[{width:e,height:n,bottom:n,right:e,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},Ri=(()=>{class o{_injector=a(R);constructor(){}noop=()=>new yt;close=t=>Oi(this._injector,t);block=()=>Si(this._injector);reposition=t=>kt(this._injector,t);static \u0275fac=function(e){return new(e||o)};static \u0275prov=D({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),xt=class{positionStrategy;scrollStrategy=new yt;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(i){if(i){let t=Object.keys(i);for(let e of t)i[e]!==void 0&&(this[e]=i[e])}}};var Xt=class{connectionPair;scrollableViewProperties;constructor(i,t){this.connectionPair=i,this.scrollableViewProperties=t}};var Ei=(()=>{class o{_attachedOverlays=[];_document=a(y);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(t){this.remove(t),this._attachedOverlays.push(t)}remove(t){let e=this._attachedOverlays.indexOf(t);e>-1&&this._attachedOverlays.splice(e,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(t,e,n){return n.observers.length<1?!1:t.eventPredicate?t.eventPredicate(e):!0}static \u0275fac=function(e){return new(e||o)};static \u0275prov=D({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),Di=(()=>{class o extends Ei{_ngZone=a(C);_renderer=a(q).createRenderer(null,null);_cleanupKeydown;add(t){super.add(t),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=t=>{let e=this._attachedOverlays;for(let n=e.length-1;n>-1;n--){let s=e[n];if(this.canReceiveEvent(s,t,s._keydownEvents)){this._ngZone.run(()=>s._keydownEvents.next(t));break}}};static \u0275fac=(()=>{let t;return function(n){return(t||(t=U(o)))(n||o)}})();static \u0275prov=D({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),Mi=(()=>{class o extends Ei{_platform=a(z);_ngZone=a(C);_renderer=a(q).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(t){if(super.add(t),!this._isAttached){let e=this._document.body,n={capture:!0},s=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[s.listen(e,"pointerdown",this._pointerDownListener,n),s.listen(e,"click",this._clickListener,n),s.listen(e,"auxclick",this._clickListener,n),s.listen(e,"contextmenu",this._clickListener,n)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=e.style.cursor,e.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(t=>t()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=t=>{this._pointerDownEventTarget=Ft(t)};_clickListener=t=>{let e=Ft(t),n=t.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:e;this._pointerDownEventTarget=null;let s=this._attachedOverlays.slice();for(let r=s.length-1;r>-1;r--){let l=s[r],c=l._outsidePointerEvents;if(!(!l.hasAttached()||!this.canReceiveEvent(l,t,c))){if(bi(l.overlayElement,e)||bi(l.overlayElement,n))break;this._ngZone?this._ngZone.run(()=>c.next(t)):c.next(t)}}};static \u0275fac=(()=>{let t;return function(n){return(t||(t=U(o)))(n||o)}})();static \u0275prov=D({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();function bi(o,i){let t=typeof ShadowRoot<"u"&&ShadowRoot,e=i;for(;e;){if(e===o)return!0;e=t&&e instanceof ShadowRoot?e.host:e.parentNode}return!1}var Pi=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275cmp=x({type:o,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(e,n){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2,changeDetection:0})}return o})(),Ii=(()=>{class o{_platform=a(z);_containerElement;_document=a(y);_styleLoader=a(ut);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let t="cdk-overlay-container";if(this._platform.isBrowser||ae()){let n=this._document.querySelectorAll(`.${t}[platform="server"], .${t}[platform="test"]`);for(let s=0;s<n.length;s++)n[s].remove()}let e=this._document.createElement("div");e.classList.add(t),ae()?e.setAttribute("platform","test"):this._platform.isBrowser||e.setAttribute("platform","server"),this._document.body.appendChild(e),this._containerElement=e}_loadStyles(){this._styleLoader.load(Pi)}static \u0275fac=function(e){return new(e||o)};static \u0275prov=D({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),pe=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(i,t,e,n){this._renderer=t,this._ngZone=e,this.element=i.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=t.listen(this.element,"click",n)}detach(){this._ngZone.runOutsideAngular(()=>{let i=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(i,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),i.style.pointerEvents="none",i.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function ue(o){return o&&o.nodeType===1}var Ut=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new u;_attachments=new u;_detachments=new u;_positionStrategy;_scrollStrategy;_locationChanges=I.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new u;_outsidePointerEvents=new u;_afterNextRenderRef;constructor(i,t,e,n,s,r,l,c,m,d=!1,h,O){this._portalOutlet=i,this._host=t,this._pane=e,this._config=n,this._ngZone=s,this._keyboardDispatcher=r,this._document=l,this._location=c,this._outsideClickDispatcher=m,this._animationsDisabled=d,this._injector=h,this._renderer=O,n.scrollStrategy&&(this._scrollStrategy=n.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=n.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(i){if(this._disposed)return null;this._attachHost();let t=this._portalOutlet.attach(i);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Q(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof t?.onDestroy=="function"&&t.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),t}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let i=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),i}dispose(){if(this._disposed)return;let i=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,i&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(i){i!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=i,this.hasAttached()&&(i.attach(this),this.updatePosition()))}updateSize(i){this._config=w(w({},this._config),i),this._updateElementSize()}setDirection(i){this._config=be(w({},this._config),{direction:i}),this._updateElementDirection()}addPanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!0)}removePanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!1)}getDirection(){let i=this._config.direction;return i?typeof i=="string"?i:i.value:"ltr"}updateScrollStrategy(i){i!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=i,this.hasAttached()&&(i.attach(this),i.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let i=this._pane.style;i.width=p(this._config.width),i.height=p(this._config.height),i.minWidth=p(this._config.minWidth),i.minHeight=p(this._config.minHeight),i.maxWidth=p(this._config.maxWidth),i.maxHeight=p(this._config.maxHeight)}_togglePointerEvents(i){this._pane.style.pointerEvents=i?"":"none"}_attachHost(){if(!this._host.parentElement){let i=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;ue(i)?i.after(this._host):i?.type==="parent"?i.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch(i){}}_attachBackdrop(){let i="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new pe(this._document,this._renderer,this._ngZone,t=>{this._backdropClick.next(t)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(i))}):this._backdropRef.element.classList.add(i)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(i,t,e){let n=re(t||[]).filter(s=>!!s);n.length&&(e?i.classList.add(...n):i.classList.remove(...n))}_detachContentWhenEmpty(){let i=!1;try{this._detachContentAfterRenderRef=Q(()=>{i=!0,this._detachContent()},{injector:this._injector})}catch(t){if(i)throw t;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let i=this._scrollStrategy;i?.disable(),i?.detach?.()}},yi="cdk-overlay-connected-position-bounding-box",un=/([A-Za-z%]+)$/;function wt(o,i){return new Gt(i,o.get(mt),o.get(y),o.get(z),o.get(Ii))}var Gt=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new u;_resizeSubscription=I.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(i,t,e,n,s){this._viewportRuler=t,this._document=e,this._platform=n,this._overlayContainer=s,this.setOrigin(i)}attach(i){this._overlayRef&&this._overlayRef,this._validatePositions(),i.hostElement.classList.add(yi),this._overlayRef=i,this._boundingBox=i.hostElement,this._pane=i.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let i=this._originRect,t=this._overlayRect,e=this._viewportRect,n=this._containerRect,s=[],r;for(let l of this._preferredPositions){let c=this._getOriginPoint(i,n,l),m=this._getOverlayPoint(c,t,l),d=this._getOverlayFit(m,t,e,l);if(d.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(l,c);return}if(this._canFitWithFlexibleDimensions(d,m,e)){s.push({position:l,origin:c,overlayRect:t,boundingBoxRect:this._calculateBoundingBoxRect(c,l)});continue}(!r||r.overlayFit.visibleArea<d.visibleArea)&&(r={overlayFit:d,overlayPoint:m,originPoint:c,position:l,overlayRect:t})}if(s.length){let l=null,c=-1;for(let m of s){let d=m.boundingBoxRect.width*m.boundingBoxRect.height*(m.position.weight||1);d>c&&(c=d,l=m)}this._isPushed=!1,this._applyPosition(l.position,l.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(r.position,r.originPoint);return}this._applyPosition(r.position,r.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&nt(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(yi),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let i=this._lastPosition;i?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(i,this._getOriginPoint(this._originRect,this._containerRect,i))):this.apply()}withScrollableContainers(i){return this._scrollables=i,this}withPositions(i){return this._preferredPositions=i,i.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(i){return this._viewportMargin=i,this}withFlexibleDimensions(i=!0){return this._hasFlexibleDimensions=i,this}withGrowAfterOpen(i=!0){return this._growAfterOpen=i,this}withPush(i=!0){return this._canPush=i,this}withLockedPosition(i=!0){return this._positionLocked=i,this}setOrigin(i){return this._origin=i,this}withDefaultOffsetX(i){return this._offsetX=i,this}withDefaultOffsetY(i){return this._offsetY=i,this}withTransformOriginOn(i){return this._transformOriginSelector=i,this}withPopoverLocation(i){return this._popoverLocation=i,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof _?this._origin.nativeElement:ue(this._origin)?this._origin:null}_getOriginPoint(i,t,e){let n;if(e.originX=="center")n=i.left+i.width/2;else{let r=this._isRtl()?i.right:i.left,l=this._isRtl()?i.left:i.right;n=e.originX=="start"?r:l}t.left<0&&(n-=t.left);let s;return e.originY=="center"?s=i.top+i.height/2:s=e.originY=="top"?i.top:i.bottom,t.top<0&&(s-=t.top),{x:n,y:s}}_getOverlayPoint(i,t,e){let n;e.overlayX=="center"?n=-t.width/2:e.overlayX==="start"?n=this._isRtl()?-t.width:0:n=this._isRtl()?0:-t.width;let s;return e.overlayY=="center"?s=-t.height/2:s=e.overlayY=="top"?0:-t.height,{x:i.x+n,y:i.y+s}}_getOverlayFit(i,t,e,n){let s=ki(t),{x:r,y:l}=i,c=this._getOffset(n,"x"),m=this._getOffset(n,"y");c&&(r+=c),m&&(l+=m);let d=0-r,h=r+s.width-e.width,O=0-l,P=l+s.height-e.height,E=this._subtractOverflows(s.width,d,h),V=this._subtractOverflows(s.height,O,P),ve=E*V;return{visibleArea:ve,isCompletelyWithinViewport:s.width*s.height===ve,fitsInViewportVertically:V===s.height,fitsInViewportHorizontally:E==s.width}}_canFitWithFlexibleDimensions(i,t,e){if(this._hasFlexibleDimensions){let n=e.bottom-t.y,s=e.right-t.x,r=xi(this._overlayRef.getConfig().minHeight),l=xi(this._overlayRef.getConfig().minWidth),c=i.fitsInViewportVertically||r!=null&&r<=n,m=i.fitsInViewportHorizontally||l!=null&&l<=s;return c&&m}return!1}_pushOverlayOnScreen(i,t,e){if(this._previousPushAmount&&this._positionLocked)return{x:i.x+this._previousPushAmount.x,y:i.y+this._previousPushAmount.y};let n=ki(t),s=this._viewportRect,r=Math.max(i.x+n.width-s.width,0),l=Math.max(i.y+n.height-s.height,0),c=Math.max(s.top-e.top-i.y,0),m=Math.max(s.left-e.left-i.x,0),d=0,h=0;return n.width<=s.width?d=m||-r:d=i.x<this._getViewportMarginStart()?s.left-e.left-i.x:0,n.height<=s.height?h=c||-l:h=i.y<this._getViewportMarginTop()?s.top-e.top-i.y:0,this._previousPushAmount={x:d,y:h},{x:i.x+d,y:i.y+h}}_applyPosition(i,t){if(this._setTransformOrigin(i),this._setOverlayElementStyles(t,i),this._setBoundingBoxStyles(t,i),i.panelClass&&this._addPanelClasses(i.panelClass),this._positionChanges.observers.length){let e=this._getScrollVisibility();if(i!==this._lastPosition||!this._lastScrollVisibility||!fn(this._lastScrollVisibility,e)){let n=new Xt(i,e);this._positionChanges.next(n)}this._lastScrollVisibility=e}this._lastPosition=i,this._isInitialRender=!1}_setTransformOrigin(i){if(!this._transformOriginSelector)return;let t=this._boundingBox.querySelectorAll(this._transformOriginSelector),e,n=i.overlayY;i.overlayX==="center"?e="center":this._isRtl()?e=i.overlayX==="start"?"right":"left":e=i.overlayX==="start"?"left":"right";for(let s=0;s<t.length;s++)t[s].style.transformOrigin=`${e} ${n}`}_calculateBoundingBoxRect(i,t){let e=this._viewportRect,n=this._isRtl(),s,r,l;if(t.overlayY==="top")r=i.y,s=e.height-r+this._getViewportMarginBottom();else if(t.overlayY==="bottom")l=e.height-i.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),s=e.height-l+this._getViewportMarginTop();else{let P=Math.min(e.bottom-i.y+e.top,i.y),E=this._lastBoundingBoxSize.height;s=P*2,r=i.y-P,s>E&&!this._isInitialRender&&!this._growAfterOpen&&(r=i.y-E/2)}let c=t.overlayX==="start"&&!n||t.overlayX==="end"&&n,m=t.overlayX==="end"&&!n||t.overlayX==="start"&&n,d,h,O;if(m)O=e.width-i.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),d=i.x-this._getViewportMarginStart();else if(c)h=i.x,d=e.right-i.x-this._getViewportMarginEnd();else{let P=Math.min(e.right-i.x+e.left,i.x),E=this._lastBoundingBoxSize.width;d=P*2,h=i.x-P,d>E&&!this._isInitialRender&&!this._growAfterOpen&&(h=i.x-E/2)}return{top:r,left:h,bottom:l,right:O,width:d,height:s}}_setBoundingBoxStyles(i,t){let e=this._calculateBoundingBoxRect(i,t);!this._isInitialRender&&!this._growAfterOpen&&(e.height=Math.min(e.height,this._lastBoundingBoxSize.height),e.width=Math.min(e.width,this._lastBoundingBoxSize.width));let n={};if(this._hasExactPosition())n.top=n.left="0",n.bottom=n.right="auto",n.maxHeight=n.maxWidth="",n.width=n.height="100%";else{let s=this._overlayRef.getConfig().maxHeight,r=this._overlayRef.getConfig().maxWidth;n.width=p(e.width),n.height=p(e.height),n.top=p(e.top)||"auto",n.bottom=p(e.bottom)||"auto",n.left=p(e.left)||"auto",n.right=p(e.right)||"auto",t.overlayX==="center"?n.alignItems="center":n.alignItems=t.overlayX==="end"?"flex-end":"flex-start",t.overlayY==="center"?n.justifyContent="center":n.justifyContent=t.overlayY==="bottom"?"flex-end":"flex-start",s&&(n.maxHeight=p(s)),r&&(n.maxWidth=p(r))}this._lastBoundingBoxSize=e,nt(this._boundingBox.style,n)}_resetBoundingBoxStyles(){nt(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){nt(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(i,t){let e={},n=this._hasExactPosition(),s=this._hasFlexibleDimensions,r=this._overlayRef.getConfig();if(n){let d=this._viewportRuler.getViewportScrollPosition();nt(e,this._getExactOverlayY(t,i,d)),nt(e,this._getExactOverlayX(t,i,d))}else e.position="static";let l="",c=this._getOffset(t,"x"),m=this._getOffset(t,"y");c&&(l+=`translateX(${c}px) `),m&&(l+=`translateY(${m}px)`),e.transform=l.trim(),r.maxHeight&&(n?e.maxHeight=p(r.maxHeight):s&&(e.maxHeight="")),r.maxWidth&&(n?e.maxWidth=p(r.maxWidth):s&&(e.maxWidth="")),nt(this._pane.style,e)}_getExactOverlayY(i,t,e){let n={top:"",bottom:""},s=this._getOverlayPoint(t,this._overlayRect,i);if(this._isPushed&&(s=this._pushOverlayOnScreen(s,this._overlayRect,e)),i.overlayY==="bottom"){let r=this._document.documentElement.clientHeight;n.bottom=`${r-(s.y+this._overlayRect.height)}px`}else n.top=p(s.y);return n}_getExactOverlayX(i,t,e){let n={left:"",right:""},s=this._getOverlayPoint(t,this._overlayRect,i);this._isPushed&&(s=this._pushOverlayOnScreen(s,this._overlayRect,e));let r;if(this._isRtl()?r=i.overlayX==="end"?"left":"right":r=i.overlayX==="end"?"right":"left",r==="right"){let l=this._document.documentElement.clientWidth;n.right=`${l-(s.x+this._overlayRect.width)}px`}else n.left=p(s.x);return n}_getScrollVisibility(){let i=this._getOriginRect(),t=this._pane.getBoundingClientRect(),e=this._scrollables.map(n=>n.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:vi(i,e),isOriginOutsideView:he(i,e),isOverlayClipped:vi(t,e),isOverlayOutsideView:he(t,e)}}_subtractOverflows(i,...t){return t.reduce((e,n)=>e-Math.max(n,0),i)}_getNarrowedViewportRect(){let i=this._document.documentElement.clientWidth,t=this._document.documentElement.clientHeight,e=this._viewportRuler.getViewportScrollPosition();return{top:e.top+this._getViewportMarginTop(),left:e.left+this._getViewportMarginStart(),right:e.left+i-this._getViewportMarginEnd(),bottom:e.top+t-this._getViewportMarginBottom(),width:i-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:t-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(i,t){return t==="x"?i.offsetX==null?this._offsetX:i.offsetX:i.offsetY==null?this._offsetY:i.offsetY}_validatePositions(){}_addPanelClasses(i){this._pane&&re(i).forEach(t=>{t!==""&&this._appliedPanelClasses.indexOf(t)===-1&&(this._appliedPanelClasses.push(t),this._pane.classList.add(t))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(i=>{this._pane.classList.remove(i)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let i=this._origin;if(i instanceof _)return i.nativeElement.getBoundingClientRect();if(i instanceof Element)return i.getBoundingClientRect();let t=i.width||0,e=i.height||0;return{top:i.y,bottom:i.y+e,left:i.x,right:i.x+t,height:e,width:t}}_getContainerRect(){let i=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",t=this._overlayContainer.getContainerElement();i&&(t.style.display="block");let e=t.getBoundingClientRect();return i&&(t.style.display=""),e}};function nt(o,i){for(let t in i)i.hasOwnProperty(t)&&(o[t]=i[t]);return o}function xi(o){if(typeof o!="number"&&o!=null){let[i,t]=o.split(un);return!t||t==="px"?parseFloat(i):null}return o||null}function ki(o){return{top:Math.floor(o.top),right:Math.floor(o.right),bottom:Math.floor(o.bottom),left:Math.floor(o.left),width:Math.floor(o.width),height:Math.floor(o.height)}}function fn(o,i){return o===i?!0:o.isOriginClipped===i.isOriginClipped&&o.isOriginOutsideView===i.isOriginOutsideView&&o.isOverlayClipped===i.isOverlayClipped&&o.isOverlayOutsideView===i.isOverlayOutsideView}var wi="cdk-global-overlay-wrapper";function Ti(o){return new Zt}var Zt=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(i){let t=i.getConfig();this._overlayRef=i,this._width&&!t.width&&i.updateSize({width:this._width}),this._height&&!t.height&&i.updateSize({height:this._height}),i.hostElement.classList.add(wi),this._isDisposed=!1}top(i=""){return this._bottomOffset="",this._topOffset=i,this._alignItems="flex-start",this}left(i=""){return this._xOffset=i,this._xPosition="left",this}bottom(i=""){return this._topOffset="",this._bottomOffset=i,this._alignItems="flex-end",this}right(i=""){return this._xOffset=i,this._xPosition="right",this}start(i=""){return this._xOffset=i,this._xPosition="start",this}end(i=""){return this._xOffset=i,this._xPosition="end",this}width(i=""){return this._overlayRef?this._overlayRef.updateSize({width:i}):this._width=i,this}height(i=""){return this._overlayRef?this._overlayRef.updateSize({height:i}):this._height=i,this}centerHorizontally(i=""){return this.left(i),this._xPosition="center",this}centerVertically(i=""){return this.top(i),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let i=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement.style,e=this._overlayRef.getConfig(),{width:n,height:s,maxWidth:r,maxHeight:l}=e,c=(n==="100%"||n==="100vw")&&(!r||r==="100%"||r==="100vw"),m=(s==="100%"||s==="100vh")&&(!l||l==="100%"||l==="100vh"),d=this._xPosition,h=this._xOffset,O=this._overlayRef.getConfig().direction==="rtl",P="",E="",V="";c?V="flex-start":d==="center"?(V="center",O?E=h:P=h):O?d==="left"||d==="end"?(V="flex-end",P=h):(d==="right"||d==="start")&&(V="flex-start",E=h):d==="left"||d==="start"?(V="flex-start",P=h):(d==="right"||d==="end")&&(V="flex-end",E=h),i.position=this._cssPosition,i.marginLeft=c?"0":P,i.marginTop=m?"0":this._topOffset,i.marginBottom=this._bottomOffset,i.marginRight=c?"0":E,t.justifyContent=V,t.alignItems=m?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let i=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement,e=t.style;t.classList.remove(wi),e.justifyContent=e.alignItems=i.marginTop=i.marginBottom=i.marginLeft=i.marginRight=i.position="",this._overlayRef=null,this._isDisposed=!0}},Ai=(()=>{class o{_injector=a(R);constructor(){}global(){return Ti()}flexibleConnectedTo(t){return wt(this._injector,t)}static \u0275fac=function(e){return new(e||o)};static \u0275prov=D({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),fe=new b("OVERLAY_DEFAULT_CONFIG");function Ct(o,i){o.get(ut).load(Pi);let t=o.get(Ii),e=o.get(y),n=o.get(ti),s=o.get(qt),r=o.get(et),l=o.get(K,null,{optional:!0})||o.get(q).createRenderer(null,null),c=new xt(i),m=o.get(fe,null,{optional:!0})?.usePopover??!0;c.direction=c.direction||r.value,"showPopover"in e.body?c.usePopover=i?.usePopover??m:c.usePopover=!1;let d=e.createElement("div"),h=e.createElement("div");d.id=n.getId("cdk-overlay-"),d.classList.add("cdk-overlay-pane"),h.appendChild(d),c.usePopover&&(h.setAttribute("popover","manual"),h.classList.add("cdk-overlay-popover"));let O=c.usePopover?c.positionStrategy?.getPopoverInsertionPoint?.():null;return ue(O)?O.after(h):O?.type==="parent"?O.element.appendChild(h):t.getContainerElement().appendChild(h),new Ut(new jt(d,s,o),h,d,c,o.get(C),o.get(Di),e,o.get(Xe),o.get(Mi),i?.disableAnimations??o.get(Me,null,{optional:!0})==="NoopAnimations",o.get(Rt),l)}var Li=(()=>{class o{scrollStrategies=a(Ri);_positionBuilder=a(Ai);_injector=a(R);constructor(){}create(t){return Ct(this._injector,t)}position(){return this._positionBuilder}static \u0275fac=function(e){return new(e||o)};static \u0275prov=D({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),gn=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],vn=new b("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let o=a(R);return()=>kt(o)}}),_e=(()=>{class o{elementRef=a(_);constructor(){}static \u0275fac=function(e){return new(e||o)};static \u0275dir=v({type:o,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return o})(),Fi=new b("cdk-connected-overlay-default-config"),bn=(()=>{class o{_dir=a(et,{optional:!0});_injector=a(R);_overlayRef;_templatePortal;_backdropSubscription=I.EMPTY;_attachSubscription=I.EMPTY;_detachSubscription=I.EMPTY;_positionSubscription=I.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=a(vn);_ngZone=a(C);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(t){this._offsetX=t,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(t){this._offsetY=t,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(t){typeof t!="string"&&this._assignConfig(t)}backdropClick=new B;positionChange=new B;attach=new B;detach=new B;overlayKeydown=new B;overlayOutsideClick=new B;constructor(){let t=a(Pt),e=a(J),n=a(Fi,{optional:!0}),s=a(fe,{optional:!0});this.usePopover=s?.usePopover===!1?null:"global",this._templatePortal=new bt(t,e),this.scrollStrategy=this._scrollStrategyFactory(),n&&this._assignConfig(n)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(t){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),t.origin&&this.open&&this._position.apply()),t.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=gn);let t=this._overlayRef=Ct(this._injector,this._buildConfig());this._attachSubscription=t.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=t.detachments().subscribe(()=>this.detach.emit()),t.keydownEvents().subscribe(e=>{this.overlayKeydown.next(e),e.keyCode===27&&!this.disableClose&&!zt(e)&&(e.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(e=>{let n=this._getOriginElement(),s=Ft(e);(!n||n!==s&&!n.contains(s))&&this.overlayOutsideClick.next(e)})}_buildConfig(){let t=this._position=this.positionStrategy||this._createPositionStrategy(),e=new xt({direction:this._dir||"ltr",positionStrategy:t,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(e.height=this.height),(this.minWidth||this.minWidth===0)&&(e.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(e.minHeight=this.minHeight),this.backdropClass&&(e.backdropClass=this.backdropClass),this.panelClass&&(e.panelClass=this.panelClass),e}_updatePositionStrategy(t){let e=this.positions.map(n=>({originX:n.originX,originY:n.originY,overlayX:n.overlayX,overlayY:n.overlayY,offsetX:n.offsetX||this.offsetX,offsetY:n.offsetY||this.offsetY,panelClass:n.panelClass||void 0}));return t.setOrigin(this._getOrigin()).withPositions(e).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let t=wt(this._injector,this._getOrigin());return this._updatePositionStrategy(t),t}_getOrigin(){return this.origin instanceof _e?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof _e?this.origin.elementRef.nativeElement:this.origin instanceof _?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let t=this._overlayRef;t.getConfig().hasBackdrop=this.hasBackdrop,t.updateSize({width:this._getWidth()}),t.hasAttached()||t.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=t.backdropClick().subscribe(e=>this.backdropClick.emit(e)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(Ee(()=>this.positionChange.observers.length>0)).subscribe(e=>{this._ngZone.run(()=>this.positionChange.emit(e)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(t){this.origin=t.origin??this.origin,this.positions=t.positions??this.positions,this.positionStrategy=t.positionStrategy??this.positionStrategy,this.offsetX=t.offsetX??this.offsetX,this.offsetY=t.offsetY??this.offsetY,this.width=t.width??this.width,this.height=t.height??this.height,this.minWidth=t.minWidth??this.minWidth,this.minHeight=t.minHeight??this.minHeight,this.backdropClass=t.backdropClass??this.backdropClass,this.panelClass=t.panelClass??this.panelClass,this.viewportMargin=t.viewportMargin??this.viewportMargin,this.scrollStrategy=t.scrollStrategy??this.scrollStrategy,this.disableClose=t.disableClose??this.disableClose,this.transformOriginSelector=t.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=t.hasBackdrop??this.hasBackdrop,this.lockPosition=t.lockPosition??this.lockPosition,this.flexibleDimensions=t.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=t.growAfterOpen??this.growAfterOpen,this.push=t.push??this.push,this.disposeOnNavigation=t.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=t.usePopover??this.usePopover,this.matchWidth=t.matchWidth??this.matchWidth}static \u0275fac=function(e){return new(e||o)};static \u0275dir=v({type:o,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",F],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",F],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",F],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",F],push:[2,"cdkConnectedOverlayPush","push",F],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",F],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",F],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[Mt]})}return o})(),ge=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=g({type:o});static \u0275inj=f({providers:[Li],imports:[S,fi,de,de]})}return o})();var yn=["tooltip"],xn=20;var kn=new b("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let o=a(R);return()=>kt(o,{scrollThrottle:xn})}}),wn=new b("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var zi="tooltip-panel",Cn={passive:!0},Sn=8,On=8,Rn=24,En=200,Dn=(()=>{class o{_elementRef=a(_);_ngZone=a(C);_platform=a(z);_ariaDescriber=a(ei);_focusMonitor=a($e);_dir=a(et);_injector=a(R);_viewContainerRef=a(J);_mediaMatcher=a(Qe);_document=a(y);_renderer=a(K);_animationsDisabled=tt();_defaultOptions=a(wn,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=Ni;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(t){t!==this._position&&(this._position=t,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(t){this._positionAtOrigin=T(t),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(t){let e=T(t);this._disabled!==e&&(this._disabled=e,e?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(t){this._showDelay=at(t)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(t){this._hideDelay=at(t),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(t){let e=this._message;this._message=t!=null?String(t).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(e)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(t){this._tooltipClass=t,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new u;_isDestroyed=!1;constructor(){let t=this._defaultOptions;t&&(this._showDelay=t.showDelay,this._hideDelay=t.hideDelay,t.position&&(this.position=t.position),t.positionAtOrigin&&(this.positionAtOrigin=t.positionAtOrigin),t.touchGestures&&(this.touchGestures=t.touchGestures),t.tooltipClass&&(this.tooltipClass=t.tooltipClass)),this._viewportMargin=Sn}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(H(this._destroyed)).subscribe(t=>{t?t==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let t=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(e=>e()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(t,this.message,"tooltip"),this._focusMonitor.stopMonitoring(t)}show(t=this.showDelay,e){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let n=this._createOverlay(e);this._detach(),this._portal=this._portal||new vt(this._tooltipComponent,this._viewContainerRef);let s=this._tooltipInstance=n.attach(this._portal).instance;s._triggerElement=this._elementRef.nativeElement,s._mouseLeaveHideDelay=this._hideDelay,s.afterHidden().pipe(H(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),s.show(t)}hide(t=this.hideDelay){let e=this._tooltipInstance;e&&(e.isVisible()?e.hide(t):(e._cancelPendingAnimations(),this._detach()))}toggle(t){this._isTooltipVisible()?this.hide():this.show(void 0,t)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(t){if(this._overlayRef){let r=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!t)&&r._origin instanceof _)return this._overlayRef;this._detach()}let e=this._injector.get(it).getAncestorScrollContainers(this._elementRef),n=`${this._cssClassPrefix}-${zi}`,s=wt(this._injector,this.positionAtOrigin?t||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(e).withPopoverLocation("global");return s.positionChanges.pipe(H(this._destroyed)).subscribe(r=>{this._updateCurrentPositionClass(r.connectionPair),this._tooltipInstance&&r.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=Ct(this._injector,{direction:this._dir,positionStrategy:s,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,n]:n,scrollStrategy:this._injector.get(kn)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(H(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(H(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(H(this._destroyed)).subscribe(r=>{r.preventDefault(),r.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(H(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(t){let e=t.getConfig().positionStrategy,n=this._getOrigin(),s=this._getOverlayPosition();e.withPositions([this._addOffset(w(w({},n.main),s.main)),this._addOffset(w(w({},n.fallback),s.fallback))])}_addOffset(t){let e=On,n=!this._dir||this._dir.value=="ltr";return t.originY==="top"?t.offsetY=-e:t.originY==="bottom"?t.offsetY=e:t.originX==="start"?t.offsetX=n?-e:e:t.originX==="end"&&(t.offsetX=n?e:-e),t}_getOrigin(){let t=!this._dir||this._dir.value=="ltr",e=this.position,n;e=="above"||e=="below"?n={originX:"center",originY:e=="above"?"top":"bottom"}:e=="before"||e=="left"&&t||e=="right"&&!t?n={originX:"start",originY:"center"}:(e=="after"||e=="right"&&t||e=="left"&&!t)&&(n={originX:"end",originY:"center"});let{x:s,y:r}=this._invertPosition(n.originX,n.originY);return{main:n,fallback:{originX:s,originY:r}}}_getOverlayPosition(){let t=!this._dir||this._dir.value=="ltr",e=this.position,n;e=="above"?n={overlayX:"center",overlayY:"bottom"}:e=="below"?n={overlayX:"center",overlayY:"top"}:e=="before"||e=="left"&&t||e=="right"&&!t?n={overlayX:"end",overlayY:"center"}:(e=="after"||e=="right"&&t||e=="left"&&!t)&&(n={overlayX:"start",overlayY:"center"});let{x:s,y:r}=this._invertPosition(n.overlayX,n.overlayY);return{main:n,fallback:{overlayX:s,overlayY:r}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),Q(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(t){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=t instanceof Set?Array.from(t):t,this._tooltipInstance._markForCheck())}_invertPosition(t,e){return this.position==="above"||this.position==="below"?e==="top"?e="bottom":e==="bottom"&&(e="top"):t==="end"?t="start":t==="start"&&(t="end"),{x:t,y:e}}_updateCurrentPositionClass(t){let{overlayY:e,originX:n,originY:s}=t,r;if(e==="center"?this._dir&&this._dir.value==="rtl"?r=n==="end"?"left":"right":r=n==="start"?"left":"right":r=e==="bottom"&&s==="top"?"above":"below",r!==this._currentPosition){let l=this._overlayRef;if(l){let c=`${this._cssClassPrefix}-${zi}-`;l.removePanelClass(c+this._currentPosition),l.addPanelClass(c+r)}this._currentPosition=r}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",t=>{let e=t.targetTouches?.[0],n=e?{x:e.clientX,y:e.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let s=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,n)},this._defaultOptions?.touchLongPressShowDelay??s)})):this._addListener("mouseenter",t=>{this._setupPointerExitEventsIfNeeded();let e;t.x!==void 0&&t.y!==void 0&&(e=t),this.show(void 0,e)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",t=>{let e=t.relatedTarget;(!e||!this._overlayRef?.overlayElement.contains(e))&&this.hide()}),this._addListener("wheel",t=>{if(this._isTooltipVisible()){let e=this._document.elementFromPoint(t.clientX,t.clientY),n=this._elementRef.nativeElement;e!==n&&!n.contains(e)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let t=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",t),this._addListener("touchcancel",t)}}}_addListener(t,e){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,t,e,Cn))}_isTouchPlatform(){let t=this._defaultOptions?.detectHoverCapability;return typeof t=="function"?!t():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!t&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let t=this.touchGestures;if(t!=="off"){let e=this._elementRef.nativeElement,n=e.style;(t==="on"||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA")&&(n.userSelect=n.msUserSelect=n.webkitUserSelect=n.MozUserSelect="none"),(t==="on"||!e.draggable)&&(n.webkitUserDrag="none"),n.touchAction="none",n.webkitTapHighlightColor="transparent"}}_syncAriaDescription(t){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,t,"tooltip"),this._isDestroyed||Q({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=t=>t.type==="keydown"?this._isTooltipVisible()&&t.keyCode===27&&!zt(t):!0;static \u0275fac=function(e){return new(e||o)};static \u0275dir=v({type:o,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(e,n){e&2&&k("mat-mdc-tooltip-disabled",n.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return o})(),Ni=(()=>{class o{_changeDetectorRef=a(Lt);_elementRef=a(_);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=tt();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new u;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";constructor(){}show(t){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},t)}hide(t){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},t)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:t}){(!t||!this._triggerElement.contains(t))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let t=this._elementRef.nativeElement.getBoundingClientRect();return t.height>Rn&&t.width>=En}_handleAnimationEnd({animationName:t}){(t===this._showAnimation||t===this._hideAnimation)&&this._finalizeAnimation(t===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(t){t?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(t){let e=this._tooltip.nativeElement,n=this._showAnimation,s=this._hideAnimation;if(e.classList.remove(t?s:n),e.classList.add(t?n:s),this._isVisible!==t&&(this._isVisible=t,this._changeDetectorRef.markForCheck()),t&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let r=getComputedStyle(e);(r.getPropertyValue("animation-duration")==="0s"||r.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}t&&this._onShow(),this._animationsDisabled&&(e.classList.add("_mat-animation-noopable"),this._finalizeAnimation(t))}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=x({type:o,selectors:[["mat-tooltip-component"]],viewQuery:function(e,n){if(e&1&&_t(yn,7),e&2){let s;A(s=L())&&(n._tooltip=s.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(e,n){e&1&&It("mouseleave",function(r){return n._handleMouseLeave(r)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(e,n){e&1&&(rt(0,"div",1,0),Fe("animationend",function(r){return n._handleAnimationEnd(r)}),rt(2,"div",2),Ne(3),pt()()),e&2&&(Tt(n.tooltipClass),k("mdc-tooltip--multiline",n._isMultiline),G(3),Ve(n.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));
  color: var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));
  font-family: var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));
  font-size: var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));
  line-height: var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));
  letter-spacing: var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2,changeDetection:0})}return o})();var Jr=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=g({type:o});static \u0275inj=f({imports:[Je,ge,S,ft]})}return o})();export{An as a,Ln as b,oo as c,so as d,le as e,$i as f,pi as g,go as h,_i as i,sn as j,an as k,Qo as l,qo as m,Ko as n,it as o,pn as p,mt as q,ft as r,vt as s,bt as t,Bt as u,Ns as v,fi as w,Si as x,kt as y,xt as z,Ii as A,Ut as B,wt as C,Ti as D,fe as E,Ct as F,_e as G,bn as H,ge as I,Dn as J,Jr as K};
