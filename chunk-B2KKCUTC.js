import{A as nn,B as an,D as nt,E as on,F as rn,G as St,H as Ot,I as xe,J as at,K as ot,a as ri,c as ji,d as Gi,e as Wi,h as Hi,i as qi,j as Ui,k as Qi,l as $i,m as Ki,n as Zi,o as Yi,p as re,q as tt,r as Pe,s as Mt,t as Xi,u as Ji,v as Ae,w as Fe,x as it,y as en,z as tn}from"./chunk-XVHK6RLJ.js";import{a as Ii,c as Ei,f as Ti,g as Pi,h as Ai,i as Fi,j as Ri,k as Li,l as Je,m as et,n as Bi,o as zi,p as Vi,q as Ni}from"./chunk-FXFIXP4T.js";import{$a as Ie,Aa as Kt,Ab as Jt,Ac as ui,Bb as m,Bc as hi,C as ze,Ca as _e,Cb as F,Cc as gi,D as B,Db as X,Dc as Qe,E as wt,Eb as Dt,Ec as fi,F as qt,Fb as ei,Fc as _i,Ic as $e,Ja as v,Jb as J,Jc as bi,Ka as G,Kc as ye,La as de,Lb as qe,Lc as Ce,M as K,Ma as Zt,Mb as Ue,N as xt,Na as q,Nc as Ke,O as k,Oa as be,Oc as vi,Pc as yi,Qb as ti,Ra as Yt,Sb as ii,U as te,V as j,Va as Xt,Vc as Ze,Wa as y,Wc as Ye,X as w,Xa as f,Xc as Ci,Y as Ut,Ya as _,Yb as W,Yc as wi,Z as r,Za as Ge,Zb as R,Zc as H,_a as Oe,_b as ne,_c as xi,a as $,ab as h,ad as Q,b as Ct,ba as M,bb as s,bd as Di,ca as S,cb as l,cd as kt,da as le,db as D,ea as Qt,fa as A,fc as ni,g as Ht,ga as Ve,h as b,ha as Ne,ib as V,ic as ai,j as ue,ja as P,jb as Ee,ka as fe,kb as g,kc as oi,kd as ce,mb as p,md as me,na as x,nb as U,ob as T,pa as je,pb as Te,pd as ki,q as he,qa as ie,qb as Y,qc as ve,qd as Mi,rb as O,rd as Xe,sa as z,sb as I,sc as si,sd as pe,ta as $t,td as ae,uc as N,ud as Si,v as ge,vc as li,vd as we,wb as We,wc as di,wd as Oi,x as ee,xa as c,xb as He,xc as ci,xd as oe,y as L,yb as E,yc as mi,za as Se,zc as pi}from"./chunk-LJQY5XNO.js";function sn(n){n||(n=r(Ne));let a=new Ht(e=>{if(n.destroyed){e.next();return}return n.onDestroy(e.next.bind(e))});return e=>e.pipe(k(a))}var In=["text"],En=[[["mat-icon"]],"*"],Tn=["mat-icon","*"];function Pn(n,a){if(n&1&&D(0,"mat-pseudo-checkbox",1),n&2){let e=p();h("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function An(n,a){if(n&1&&D(0,"mat-pseudo-checkbox",3),n&2){let e=p();h("disabled",e.disabled)}}function Fn(n,a){if(n&1&&(s(0,"span",4),m(1),l()),n&2){let e=p();c(),X("(",e.group.label,")")}}var Et=new w("MAT_OPTION_PARENT_COMPONENT"),Tt=new w("MatOptgroup");var It=class{source;isUserInput;constructor(a,e=!1){this.source=a,this.isUserInput=e}},De=(()=>{class n{_element=r(z);_changeDetectorRef=r(W);_parent=r(Et,{optional:!0});group=r(Tt,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=r(Q).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=x(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new P;_text;_stateChanges=new b;constructor(){let e=r(vi);e.load(Mi),e.load(yi),this._signalDisableRipple=!!this._parent&&Yt(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let i=this._getHostElement();typeof i.focus=="function"&&i.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!H(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new It(this,e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["mat-option"]],viewQuery:function(t,i){if(t&1&&Y(In,7),t&2){let o;O(o=I())&&(i._text=o.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(t,i){t&1&&g("click",function(){return i._selectViaInteraction()})("keydown",function(d){return i._handleKeydown(d)}),t&2&&(Ee("id",i.id),y("aria-selected",i.selected)("aria-disabled",i.disabled.toString()),E("mdc-list-item--selected",i.selected)("mat-mdc-option-multiple",i.multiple)("mat-mdc-option-active",i.active)("mdc-list-item--disabled",i.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",R]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:Tn,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(t,i){t&1&&(U(En),f(0,Pn,1,2,"mat-pseudo-checkbox",1),T(1),s(2,"span",2,0),T(4,1),l(),f(5,An,1,1,"mat-pseudo-checkbox",3),f(6,Fn,2,1,"span",4),D(7,"div",5)),t&2&&(_(i.multiple?0:-1),c(5),_(!i.multiple&&i.selected&&!i.hideSingleSelectionIndicator?5:-1),c(),_(i.group&&i.group._inert?6:-1),c(),h("matRippleTrigger",i._getHostElement())("matRippleDisabled",i.disabled||i.disableRipple))},dependencies:[Hi,ki],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
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
  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return n})();function ln(n,a,e){if(e.length){let t=a.toArray(),i=e.toArray(),o=0;for(let d=0;d<n+1;d++)t[d].group&&t[d].group===i[o]&&o++;return o}return 0}function dn(n,a,e,t){return n<e?n:n+a>e+t?Math.max(0,n-t+a):e}var Pt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=G({type:n});static \u0275inj=j({imports:[Si,qi,De,ae]})}return n})();var zn=["trigger"],Vn=["panel"],Nn=[[["mat-select-trigger"]],"*"],jn=["mat-select-trigger","*"];function Gn(n,a){if(n&1&&(s(0,"span",4),m(1),l()),n&2){let e=p();c(),F(e.placeholder)}}function Wn(n,a){n&1&&T(0)}function Hn(n,a){if(n&1&&(s(0,"span",11),m(1),l()),n&2){let e=p(2);c(),F(e.triggerValue)}}function qn(n,a){if(n&1&&(s(0,"span",5),f(1,Wn,1,0)(2,Hn,2,1,"span",11),l()),n&2){let e=p();c(),_(e.customTrigger?1:2)}}function Un(n,a){if(n&1){let e=V();s(0,"div",12,1),g("keydown",function(i){M(e);let o=p();return S(o._handleKeydown(i))}),T(2,1),l()}if(n&2){let e=p();Jt(e.panelClass),E("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),y("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var Qn=new w("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let n=r(A);return()=>en(n)}}),$n=new w("MAT_SELECT_CONFIG"),Kn=new w("MatSelectTrigger"),At=class{source;value;constructor(a,e){this.source=a,this.value=e}},pn=(()=>{class n{_viewportRuler=r(tt);_changeDetectorRef=r(W);_elementRef=r(z);_dir=r(pe,{optional:!0});_idGenerator=r(Q);_renderer=r(_e);_parentFormField=r(Li,{optional:!0});ngControl=r(li,{self:!0,optional:!0});_liveAnnouncer=r(Ci);_defaultOptions=r($n,{optional:!0});_animationsDisabled=ce();_popoverLocation;_initialized=new b;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let i=this.panel.nativeElement,o=ln(e,this.options,this.optionGroups),d=t._getHostElement();e===0&&o===1?i.scrollTop=0:i.scrollTop=dn(d.offsetTop,d.offsetHeight,i.scrollTop,i.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new At(this,e)}_scrollStrategyFactory=r(Qn);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new b;_errorStateTracker;stateChanges=new b;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=x(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(N.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=ge(()=>{let e=this.options;return e?e.changes.pipe(K(e),xt(()=>ee(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(xt(()=>this.optionSelectionChanges))});openedChange=new P;_openedStream=this.openedChange.pipe(L(e=>e),he(()=>{}));_closedStream=this.openedChange.pipe(L(e=>!e),he(()=>{}));selectionChange=new P;valueChange=new P;constructor(){let e=r(Bi),t=r(mi,{optional:!0}),i=r(Qe,{optional:!0}),o=r(new ii("tabindex"),{optional:!0}),d=r(on,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new zi(e,this.ngControl,i,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=d?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new Wi(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(k(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(k(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(K(null),k(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let i=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?i.setAttribute("aria-labelledby",e):i.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(B(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=`${this.id}-panel`;this._trackedModal&&kt(this._trackedModal,"aria-owns",t),Di(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;kt(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(i),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",o=>{o.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),i=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,i=t===40||t===38||t===37||t===39,o=t===13||t===32,d=this._keyManager;if(!d.isTyping()&&o&&!H(e)||(this.multiple||e.altKey)&&i)e.preventDefault(),this.open();else if(!this.multiple){let u=this.selected;d.onKeydown(e);let C=this.selected;C&&u!==C&&this._liveAnnouncer.announce(C.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,i=e.keyCode,o=i===40||i===38,d=t.isTyping();if(o&&e.altKey)e.preventDefault(),this.close();else if(!d&&(i===13||i===32)&&t.activeItem&&!H(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!d&&this._multiple&&i===65&&e.ctrlKey){e.preventDefault();let u=this.options.some(C=>!C.disabled&&!C.selected);this.options.forEach(C=>{C.disabled||(u?C.select():C.deselect())})}else{let u=t.activeItemIndex;t.onKeydown(e),this._multiple&&o&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==u&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!H(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(i=>{if(this._selectionModel.isSelected(i))return!1;try{return(i.value!=null||this.canSelectNullableOptions)&&this._compareWith(i.value,e)}catch(o){return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof St?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new xi(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=ee(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(k(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),ee(...this.options.map(t=>t._stateChanges)).pipe(k(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let i=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(i!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),i!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,i)=>this.sortComparator?this.sortComparator(t,i,e):e.indexOf(t)-e.indexOf(i)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(i=>i.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(e){let t=bi(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["mat-select"]],contentQueries:function(t,i,o){if(t&1&&Te(o,Kn,5)(o,De,5)(o,Tt,5),t&2){let d;O(d=I())&&(i.customTrigger=d.first),O(d=I())&&(i.options=d),O(d=I())&&(i.optionGroups=d)}},viewQuery:function(t,i){if(t&1&&Y(zn,5)(Vn,5)(Ot,5),t&2){let o;O(o=I())&&(i.trigger=o.first),O(o=I())&&(i.panel=o.first),O(o=I())&&(i._overlayDir=o.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(t,i){t&1&&g("keydown",function(d){return i._handleKeydown(d)})("focus",function(){return i._onFocus()})("blur",function(){return i._onBlur()}),t&2&&(y("id",i.id)("tabindex",i.disabled?-1:i.tabIndex)("aria-controls",i.panelOpen?i.id+"-panel":null)("aria-expanded",i.panelOpen)("aria-label",i.ariaLabel||null)("aria-required",i.required.toString())("aria-disabled",i.disabled.toString())("aria-invalid",i.errorState)("aria-activedescendant",i._getAriaActiveDescendant()),E("mat-mdc-select-disabled",i.disabled)("mat-mdc-select-invalid",i.errorState)("mat-mdc-select-required",i.required)("mat-mdc-select-empty",i.empty)("mat-mdc-select-multiple",i.multiple)("mat-select-open",i.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",R],disableRipple:[2,"disableRipple","disableRipple",R],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:ne(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",R],placeholder:"placeholder",required:[2,"required","required",R],multiple:[2,"multiple","multiple",R],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",R],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",ne],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",R]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[J([{provide:Ri,useExisting:n},{provide:Et,useExisting:n}]),je],ngContentSelectors:jn,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(t,i){if(t&1&&(U(Nn),s(0,"div",2,0),g("click",function(){return i.open()}),s(3,"div",3),f(4,Gn,2,1,"span",4)(5,qn,3,1,"span",5),l(),s(6,"div",6)(7,"div",7),le(),s(8,"svg",8),D(9,"path",9),l()()()(),be(10,Un,3,16,"ng-template",10),g("detach",function(){return i.close()})("backdropClick",function(){return i.close()})("overlayKeydown",function(d){return i._handleOverlayKeydown(d)})),t&2){let o=We(1);c(3),y("id",i._valueId),c(),_(i.empty?4:5),c(6),h("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",i._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",i._scrollStrategy)("cdkConnectedOverlayOrigin",i._preferredOverlayOrigin||o)("cdkConnectedOverlayPositions",i._positions)("cdkConnectedOverlayWidth",i._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",i._popoverLocation)}},dependencies:[St,Ot],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--mat-select-invalid-arrow-color, var(--mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--mat-select-focused-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--mat-select-panel-background-color, var(--mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2,changeDetection:0})}return n})();var un=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=G({type:n});static \u0275inj=j({imports:[xe,Pt,ae,Pe,et,Pt]})}return n})();function Zn(n,a){if(n&1&&(s(0,"mat-option",17),m(1),l()),n&2){let e=a.$implicit;h("value",e),c(),X(" ",e," ")}}function Yn(n,a){if(n&1){let e=V();s(0,"mat-form-field",14)(1,"mat-select",16,0),g("selectionChange",function(i){M(e);let o=p(2);return S(o._changePageSize(i.value))}),Oe(3,Zn,2,2,"mat-option",17,Ge),l(),s(5,"div",18),g("click",function(){M(e);let i=We(2);return S(i.open())}),l()()}if(n&2){let e=p(2);h("appearance",e._formFieldAppearance)("color",e.color),c(),h("value",e.pageSize)("disabled",e.disabled),Xt("aria-labelledby",e._pageSizeLabelId),h("panelClass",e.selectConfig.panelClass||"")("disableOptionCentering",e.selectConfig.disableOptionCentering),c(2),Ie(e._displayedPageSizeOptions)}}function Xn(n,a){if(n&1&&(s(0,"div",15),m(1),l()),n&2){let e=p(2);c(),F(e.pageSize)}}function Jn(n,a){if(n&1&&(s(0,"div",3)(1,"div",13),m(2),l(),f(3,Yn,6,7,"mat-form-field",14),f(4,Xn,2,1,"div",15),l()),n&2){let e=p();c(),y("id",e._pageSizeLabelId),c(),X(" ",e._intl.itemsPerPageLabel," "),c(),_(e._displayedPageSizeOptions.length>1?3:-1),c(),_(e._displayedPageSizeOptions.length<=1?4:-1)}}function ea(n,a){if(n&1){let e=V();s(0,"button",19),g("click",function(){M(e);let i=p();return S(i._buttonClicked(0,i._previousButtonsDisabled()))}),le(),s(1,"svg",8),D(2,"path",20),l()()}if(n&2){let e=p();h("matTooltip",e._intl.firstPageLabel)("matTooltipDisabled",e._previousButtonsDisabled())("disabled",e._previousButtonsDisabled())("tabindex",e._previousButtonsDisabled()?-1:null),y("aria-label",e._intl.firstPageLabel)}}function ta(n,a){if(n&1){let e=V();s(0,"button",21),g("click",function(){M(e);let i=p();return S(i._buttonClicked(i.getNumberOfPages()-1,i._nextButtonsDisabled()))}),le(),s(1,"svg",8),D(2,"path",22),l()()}if(n&2){let e=p();h("matTooltip",e._intl.lastPageLabel)("matTooltipDisabled",e._nextButtonsDisabled())("disabled",e._nextButtonsDisabled())("tabindex",e._nextButtonsDisabled()?-1:null),y("aria-label",e._intl.lastPageLabel)}}var ia=(()=>{class n{changes=new b;itemsPerPageLabel="Items per page:";nextPageLabel="Next page";previousPageLabel="Previous page";firstPageLabel="First page";lastPageLabel="Last page";getRangeLabel=(e,t,i)=>{if(i==0||t==0)return`0 of ${i}`;i=Math.max(i,0);let o=e*t,d=o<i?Math.min(o+t,i):o+t;return`${o+1} \u2013 ${d} of ${i}`};static \u0275fac=function(t){return new(t||n)};static \u0275prov=te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),na=50;var aa=new w("MAT_PAGINATOR_DEFAULT_OPTIONS"),Ft=(()=>{class n{_intl=r(ia);_changeDetectorRef=r(W);_formFieldAppearance;_pageSizeLabelId=r(Q).getId("mat-paginator-page-size-label-");_intlChanges;_isInitialized=!1;_initializedStream=new ue(1);color;get pageIndex(){return this._pageIndex}set pageIndex(e){this._pageIndex=Math.max(e||0,0),this._changeDetectorRef.markForCheck()}_pageIndex=0;get length(){return this._length}set length(e){this._length=e||0,this._changeDetectorRef.markForCheck()}_length=0;get pageSize(){return this._pageSize}set pageSize(e){this._pageSize=Math.max(e||0,0),this._updateDisplayedPageSizeOptions()}_pageSize;get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(e){this._pageSizeOptions=(e||[]).map(t=>ne(t,0)),this._updateDisplayedPageSizeOptions()}_pageSizeOptions=[];hidePageSize=!1;showFirstLastButtons=!1;selectConfig={};disabled=!1;page=new P;_displayedPageSizeOptions;initialized=this._initializedStream;constructor(){let e=this._intl,t=r(aa,{optional:!0});if(this._intlChanges=e.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),t){let{pageSize:i,pageSizeOptions:o,hidePageSize:d,showFirstLastButtons:u}=t;i!=null&&(this._pageSize=i),o!=null&&(this._pageSizeOptions=o),d!=null&&(this.hidePageSize=d),u!=null&&(this.showFirstLastButtons=u)}this._formFieldAppearance=t?.formFieldAppearance||"outline"}ngOnInit(){this._isInitialized=!0,this._updateDisplayedPageSizeOptions(),this._initializedStream.next()}ngOnDestroy(){this._initializedStream.complete(),this._intlChanges.unsubscribe()}nextPage(){this.hasNextPage()&&this._navigate(this.pageIndex+1)}previousPage(){this.hasPreviousPage()&&this._navigate(this.pageIndex-1)}firstPage(){this.hasPreviousPage()&&this._navigate(0)}lastPage(){this.hasNextPage()&&this._navigate(this.getNumberOfPages()-1)}hasPreviousPage(){return this.pageIndex>=1&&this.pageSize!=0}hasNextPage(){let e=this.getNumberOfPages()-1;return this.pageIndex<e&&this.pageSize!=0}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(e){let t=this.pageIndex*this.pageSize,i=this.pageIndex;this.pageIndex=Math.floor(t/e)||0,this.pageSize=e,this._emitPageEvent(i)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){this._isInitialized&&(this.pageSize||(this._pageSize=this.pageSizeOptions.length!=0?this.pageSizeOptions[0]:na),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),this._displayedPageSizeOptions.indexOf(this.pageSize)===-1&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((e,t)=>e-t),this._changeDetectorRef.markForCheck())}_emitPageEvent(e){this.page.emit({previousPageIndex:e,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}_navigate(e){let t=this.pageIndex;e!==t&&(this.pageIndex=e,this._emitPageEvent(t))}_buttonClicked(e,t){t||this._navigate(e)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["mat-paginator"]],hostAttrs:["role","group",1,"mat-mdc-paginator"],inputs:{color:"color",pageIndex:[2,"pageIndex","pageIndex",ne],length:[2,"length","length",ne],pageSize:[2,"pageSize","pageSize",ne],pageSizeOptions:"pageSizeOptions",hidePageSize:[2,"hidePageSize","hidePageSize",R],showFirstLastButtons:[2,"showFirstLastButtons","showFirstLastButtons",R],selectConfig:"selectConfig",disabled:[2,"disabled","disabled",R]},outputs:{page:"page"},exportAs:["matPaginator"],decls:14,vars:14,consts:[["selectRef",""],[1,"mat-mdc-paginator-outer-container"],[1,"mat-mdc-paginator-container"],[1,"mat-mdc-paginator-page-size"],[1,"mat-mdc-paginator-range-actions"],["aria-atomic","true","aria-live","polite","role","status",1,"mat-mdc-paginator-range-label"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-first",3,"matTooltip","matTooltipDisabled","disabled","tabindex"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-previous",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true",1,"mat-mdc-paginator-icon"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-next",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-last",3,"matTooltip","matTooltipDisabled","disabled","tabindex"],["aria-hidden","true",1,"mat-mdc-paginator-page-size-label"],[1,"mat-mdc-paginator-page-size-select",3,"appearance","color"],[1,"mat-mdc-paginator-page-size-value"],["hideSingleSelectionIndicator","",3,"selectionChange","value","disabled","aria-labelledby","panelClass","disableOptionCentering"],[3,"value"],[1,"mat-mdc-paginator-touch-target",3,"click"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-first",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-last",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],template:function(t,i){t&1&&(s(0,"div",1)(1,"div",2),f(2,Jn,5,4,"div",3),s(3,"div",4)(4,"div",5),m(5),l(),f(6,ea,3,5,"button",6),s(7,"button",7),g("click",function(){return i._buttonClicked(i.pageIndex-1,i._previousButtonsDisabled())}),le(),s(8,"svg",8),D(9,"path",9),l()(),Qt(),s(10,"button",10),g("click",function(){return i._buttonClicked(i.pageIndex+1,i._nextButtonsDisabled())}),le(),s(11,"svg",8),D(12,"path",11),l()(),f(13,ta,3,5,"button",12),l()()()),t&2&&(c(2),_(i.hidePageSize?-1:2),c(3),X(" ",i._intl.getRangeLabel(i.pageIndex,i.pageSize,i.length)," "),c(),_(i.showFirstLastButtons?6:-1),c(),h("matTooltip",i._intl.previousPageLabel)("matTooltipDisabled",i._previousButtonsDisabled())("disabled",i._previousButtonsDisabled())("tabindex",i._previousButtonsDisabled()?-1:null),y("aria-label",i._intl.previousPageLabel),c(3),h("matTooltip",i._intl.nextPageLabel)("matTooltipDisabled",i._nextButtonsDisabled())("disabled",i._nextButtonsDisabled())("tabindex",i._nextButtonsDisabled()?-1:null),y("aria-label",i._intl.nextPageLabel),c(3),_(i.showFirstLastButtons?13:-1))},dependencies:[Je,pn,De,Xe,at],styles:[`.mat-mdc-paginator {
  display: block;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-paginator-container-text-color, var(--mat-sys-on-surface));
  background-color: var(--mat-paginator-container-background-color, var(--mat-sys-surface));
  font-family: var(--mat-paginator-container-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-paginator-container-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-paginator-container-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-paginator-container-text-weight, var(--mat-sys-body-small-weight));
  letter-spacing: var(--mat-paginator-container-text-tracking, var(--mat-sys-body-small-tracking));
  --mat-form-field-container-height: var(--mat-paginator-form-field-container-height, 40px);
  --mat-form-field-container-vertical-padding: var(--mat-paginator-form-field-container-vertical-padding, 8px);
}
.mat-mdc-paginator .mat-mdc-select-value {
  font-size: var(--mat-paginator-select-trigger-text-size, var(--mat-sys-body-small-size));
}
.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper {
  display: none;
}
.mat-mdc-paginator .mat-mdc-select {
  line-height: 1.5;
}

.mat-mdc-paginator-outer-container {
  display: flex;
}

.mat-mdc-paginator-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 8px;
  flex-wrap: wrap;
  width: 100%;
  min-height: var(--mat-paginator-container-size, 56px);
}

.mat-mdc-paginator-page-size {
  display: flex;
  align-items: baseline;
  margin-right: 8px;
}
[dir=rtl] .mat-mdc-paginator-page-size {
  margin-right: 0;
  margin-left: 8px;
}

.mat-mdc-paginator-page-size-label {
  margin: 0 4px;
}

.mat-mdc-paginator-page-size-select {
  margin: 0 4px;
  width: var(--mat-paginator-page-size-select-width, 84px);
}

.mat-mdc-paginator-range-label {
  margin: 0 32px 0 24px;
}

.mat-mdc-paginator-range-actions {
  display: flex;
  align-items: center;
}

.mat-mdc-paginator-icon {
  display: inline-block;
  width: 28px;
  fill: var(--mat-paginator-enabled-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon {
  fill: var(--mat-paginator-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
[dir=rtl] .mat-mdc-paginator-icon {
  transform: rotate(180deg);
}

@media (forced-colors: active) {
  .mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon,
  .mat-mdc-paginator-icon {
    fill: currentColor;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button {
    outline: solid 1px;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button[aria-disabled] {
    color: GrayText;
  }
}
.mat-mdc-paginator-touch-target {
  display: var(--mat-paginator-touch-target-display, block);
  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--mat-paginator-page-size-select-width, 84px);
  height: var(--mat-paginator-page-size-select-touch-target-height, 48px);
  background-color: transparent;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
`],encapsulation:2,changeDetection:0})}return n})(),hn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=G({type:n});static \u0275inj=j({imports:[oe,un,ot,Ft]})}return n})();var ct=["*"],ra=["content"],sa=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],la=["mat-drawer","mat-drawer-content","*"];function da(n,a){if(n&1){let e=V();s(0,"div",1),g("click",function(){M(e);let i=p();return S(i._onBackdropClicked())}),l()}if(n&2){let e=p();E("mat-drawer-shown",e._isShowingBackdrop())}}function ca(n,a){n&1&&(s(0,"mat-drawer-content"),T(1,2),l())}var ma=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],pa=["mat-sidenav","mat-sidenav-content","*"];function ua(n,a){if(n&1){let e=V();s(0,"div",1),g("click",function(){M(e);let i=p();return S(i._onBackdropClicked())}),l()}if(n&2){let e=p();E("mat-drawer-shown",e._isShowingBackdrop())}}function ha(n,a){n&1&&(s(0,"mat-sidenav-content"),T(1,2),l())}var ga=`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`;var fa=new w("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),Bt=new w("MAT_DRAWER_CONTAINER"),lt=(()=>{class n extends re{_platform=r(ye);_changeDetectorRef=r(W);_container=r(Lt);constructor(){let e=r(z),t=r(Yi),i=r(fe);super(e,t,i)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:t}=this._container;return e!=null&&e.mode!=="over"&&e.opened||t!=null&&t.mode!=="over"&&t.opened}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(t,i){t&2&&(He("margin-left",i._container._contentMargins.left,"px")("margin-right",i._container._contentMargins.right,"px"),E("mat-drawer-content-hidden",i._shouldBeHidden()))},features:[J([{provide:re,useExisting:n}]),q],ngContentSelectors:ct,decls:1,vars:0,template:function(t,i){t&1&&(U(),T(0))},encapsulation:2,changeDetection:0})}return n})(),Rt=(()=>{class n{_elementRef=r(z);_focusTrapFactory=r(Ye);_focusMonitor=r(Ke);_platform=r(ye);_ngZone=r(fe);_renderer=r(_e);_interactivityChecker=r(Ze);_doc=r(Ve);_container=r(Bt,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=me(e)}_disableClose=!1;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=me(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(me(e))}_opened=x(!1);_openedVia=null;_animationStarted=new b;_animationEnd=new b;openedChange=new P(!0);_openedStream=this.openedChange.pipe(L(e=>e),he(()=>{}));openedStart=this._animationStarted.pipe(L(()=>this.opened),wt(void 0));_closedStream=this.openedChange.pipe(L(e=>!e),he(()=>{}));closedStart=this._animationStarted.pipe(L(()=>!this.opened),wt(void 0));_destroyed=new b;onPositionChanged=new P;_content;_modeChanged=new b;_injector=r(A);_changeDetectorRef=r(W);constructor(){this.openedChange.pipe(k(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,t=this._elementRef.nativeElement;return[e.listen(t,"keydown",i=>{i.keyCode===27&&!this.disableClose&&!H(i)&&this._ngZone.run(()=>{this.close(),i.stopPropagation(),i.preventDefault()})}),e.listen(t,"transitionend",this._handleTransitionEvent),e.listen(t,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let i=()=>{o(),d(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",i),d=this._renderer.listen(e,"mousedown",i)})),e.focus(t)}_focusByCssSelector(e,t){let i=this._elementRef.nativeElement.querySelector(e);i&&this._forceFocus(i,t)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":Se(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,t){e&&t&&(this._openedVia=t);let i=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),i}_setOpen(e,t,i){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&t&&this._restoreFocus(i),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(o=>{this.openedChange.pipe(B(1)).subscribe(d=>o(d?"open":"close"))}))}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let t=this._elementRef.nativeElement,i=t.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),i.insertBefore(this._anchor,t)),i.appendChild(t)):this._anchor&&this._anchor.parentNode.insertBefore(t,this._anchor)}_handleTransitionEvent=e=>{let t=this._elementRef.nativeElement;e.target===t&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["mat-drawer"]],viewQuery:function(t,i){if(t&1&&Y(ra,5),t&2){let o;O(o=I())&&(i._content=o.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(t,i){t&2&&(y("align",null)("tabIndex",i.mode!=="side"?"-1":null),He("visibility",!i._container&&!i.opened?"hidden":null),E("mat-drawer-end",i.position==="end")("mat-drawer-over",i.mode==="over")("mat-drawer-push",i.mode==="push")("mat-drawer-side",i.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:ct,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,i){t&1&&(U(),s(0,"div",1,0),T(2),l())},dependencies:[re],encapsulation:2,changeDetection:0})}return n})(),Lt=(()=>{class n{_dir=r(pe,{optional:!0});_element=r(z);_ngZone=r(fe);_changeDetectorRef=r(W);_animationDisabled=ce();_transitionsEnabled=!1;_allDrawers;_drawers=new $t;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=me(e)}_autosize=r(fa);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:me(e)}_backdropOverride=null;backdropClick=new P;_start=null;_end=null;_left=null;_right=null;_destroyed=new b;_doCheckSubject=new b;_contentMargins={left:null,right:null};_contentMarginChanges=new b;get scrollable(){return this._userContent||this._content}_injector=r(A);constructor(){let e=r(ye),t=r(tt);this._dir?.change.pipe(k(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),t.change().pipe(k(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(K(this._allDrawers),k(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(t=>!t._container||t._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(K(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(ze(10),k(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,t=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let i=this._left._getWidth();e+=i,t-=i}}if(this._right&&this._right.opened){if(this._right.mode=="side")t+=this._right._getWidth();else if(this._right.mode=="push"){let i=this._right._getWidth();t+=i,e-=i}}e=e||null,t=t||null,(e!==this._contentMargins.left||t!==this._contentMargins.right)&&(this._contentMargins={left:e,right:t},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(k(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(k(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(k(this._drawers.changes)).subscribe(()=>{Se({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(k(ee(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let t=this._element.nativeElement.classList,i="mat-drawer-container-has-open";e?t.add(i):t.remove(i)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["mat-drawer-container"]],contentQueries:function(t,i,o){if(t&1&&Te(o,lt,5)(o,Rt,5),t&2){let d;O(d=I())&&(i._content=d.first),O(d=I())&&(i._allDrawers=d)}},viewQuery:function(t,i){if(t&1&&Y(lt,5),t&2){let o;O(o=I())&&(i._userContent=o.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(t,i){t&2&&E("mat-drawer-container-explicit-backdrop",i._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[J([{provide:Bt,useExisting:n}])],ngContentSelectors:la,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,i){t&1&&(U(sa),f(0,da,1,2,"div",0),T(1),T(2,1),f(3,ca,2,0,"mat-drawer-content")),t&2&&(_(i.hasBackdrop?0:-1),c(3),_(i._content?-1:3))},dependencies:[lt],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2,changeDetection:0})}return n})(),dt=(()=>{class n extends lt{static \u0275fac=(()=>{let e;return function(i){return(e||(e=ie(n)))(i||n)}})();static \u0275cmp=v({type:n,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[J([{provide:re,useExisting:n}]),q],ngContentSelectors:ct,decls:1,vars:0,template:function(t,i){t&1&&(U(),T(0))},encapsulation:2,changeDetection:0})}return n})(),zt=(()=>{class n extends Rt{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=me(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=Ce(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=Ce(e)}_fixedBottomGap=0;static \u0275fac=(()=>{let e;return function(i){return(e||(e=ie(n)))(i||n)}})();static \u0275cmp=v({type:n,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(t,i){t&2&&(y("tabIndex",i.mode!=="side"?"-1":null)("align",null),He("top",i.fixedInViewport?i.fixedTopGap:null,"px")("bottom",i.fixedInViewport?i.fixedBottomGap:null,"px"),E("mat-drawer-end",i.position==="end")("mat-drawer-over",i.mode==="over")("mat-drawer-push",i.mode==="push")("mat-drawer-side",i.mode==="side")("mat-sidenav-fixed",i.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[J([{provide:Rt,useExisting:n}]),q],ngContentSelectors:ct,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,i){t&1&&(U(),s(0,"div",1,0),T(2),l())},dependencies:[re],encapsulation:2,changeDetection:0})}return n})(),gn=(()=>{class n extends Lt{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let e;return function(i){return(e||(e=ie(n)))(i||n)}})();static \u0275cmp=v({type:n,selectors:[["mat-sidenav-container"]],contentQueries:function(t,i,o){if(t&1&&Te(o,dt,5)(o,zt,5),t&2){let d;O(d=I())&&(i._content=d.first),O(d=I())&&(i._allDrawers=d)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(t,i){t&2&&E("mat-drawer-container-explicit-backdrop",i._backdropOverride)},exportAs:["matSidenavContainer"],features:[J([{provide:Bt,useExisting:n},{provide:Lt,useExisting:n}]),q],ngContentSelectors:pa,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,i){t&1&&(U(ma),f(0,ua,1,2,"div",0),T(1),T(2,1),f(3,ha,2,0,"mat-sidenav-content")),t&2&&(_(i.hasBackdrop?0:-1),c(3),_(i._content?-1:3))},dependencies:[dt],styles:[ga],encapsulation:2,changeDetection:0})}return n})(),fn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=G({type:n});static \u0275inj=j({imports:[Pe,ae,Pe]})}return n})();function ba(n,a){}var se=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext};var Nt=(()=>{class n extends Ji{_elementRef=r(z);_focusTrapFactory=r(Ye);_config;_interactivityChecker=r(Ze);_ngZone=r(fe);_focusMonitor=r(Ke);_renderer=r(_e);_changeDetectorRef=r(W);_injector=r(A);_platform=r(ye);_document=r(Ve);_portalOutlet;_focusTrapped=new b;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=r(se,{optional:!0})||new se,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let t=this._ariaLabelledByQueue.indexOf(e);t>-1&&(this._ariaLabelledByQueue.splice(t,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}attachDomPortal=e=>{this._portalOutlet.hasAttached();let t=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),t};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let i=()=>{o(),d(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",i),d=this._renderer.listen(e,"mousedown",i)})),e.focus(t)}_focusByCssSelector(e,t){let i=this._elementRef.nativeElement.querySelector(e);i&&this._forceFocus(i,t)}_trapFocus(e){this._isDestroyed||Se(()=>{let t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||t.focus(e);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,t=null;if(typeof e=="string"?t=this._document.querySelector(e):typeof e=="boolean"?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&typeof t.focus=="function"){let i=$e(),o=this._elementRef.nativeElement;(!i||i===this._document.body||i===o||o.contains(i))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,t=$e();return e===t||e.contains(t)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=$e()))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["cdk-dialog-container"]],viewQuery:function(t,i){if(t&1&&Y(Ae,7),t&2){let o;O(o=I())&&(i._portalOutlet=o.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(t,i){t&2&&y("id",i._config.id||null)("role",i._config.role)("aria-modal",i._config.ariaModal)("aria-labelledby",i._config.ariaLabel?null:i._ariaLabelledByQueue[0])("aria-label",i._config.ariaLabel)("aria-describedby",i._config.ariaDescribedBy||null)},features:[q],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(t,i){t&1&&be(0,ba,0,0,"ng-template",0)},dependencies:[Ae],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2})}return n})(),Re=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new b;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(a,e){this.overlayRef=a,this.config=e,this.disableClose=e.disableClose,this.backdropClick=a.backdropClick(),this.keydownEvents=a.keydownEvents(),this.outsidePointerEvents=a.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(t=>{t.keyCode===27&&!this.disableClose&&!H(t)&&(t.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=a.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(a,e){if(this._canClose(a)){let t=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),t.next(a),t.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(a="",e=""){return this.overlayRef.updateSize({width:a,height:e}),this}addPanelClass(a){return this.overlayRef.addPanelClass(a),this}removePanelClass(a){return this.overlayRef.removePanelClass(a),this}_canClose(a){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(a,e,this.componentInstance))}},va=new w("DialogScrollStrategy",{providedIn:"root",factory:()=>{let n=r(A);return()=>it(n)}}),ya=new w("DialogData"),Ca=new w("DefaultDialogConfig");function wa(n){let a=x(n),e=new P;return{valueSignal:a,get value(){return a()},change:e,ngOnDestroy(){e.complete()}}}var jt=(()=>{class n{_injector=r(A);_defaultOptions=r(Ca,{optional:!0});_parentDialog=r(n,{optional:!0,skipSelf:!0});_overlayContainer=r(nn);_idGenerator=r(Q);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new b;_afterOpenedAtThisLevel=new b;_ariaHiddenElements=new Map;_scrollStrategy=r(va);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=ge(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(K(void 0)));constructor(){}open(e,t){let i=this._defaultOptions||new se;t=$($({},i),t),t.id=t.id||this._idGenerator.getId("cdk-dialog-"),t.id&&this.getDialogById(t.id);let o=this._getOverlayConfig(t),d=rn(this._injector,o),u=new Re(d,t),C=this._attachContainer(d,u,t);if(u.containerInstance=C,!this.openDialogs.length){let yt=this._overlayContainer.getContainerElement();C._focusTrapped?C._focusTrapped.pipe(B(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(yt)}):this._hideNonDialogContentFromAssistiveTechnology(yt)}return this._attachDialogContent(e,u,C,t),this.openDialogs.push(u),u.closed.subscribe(()=>this._removeOpenDialog(u,!0)),this.afterOpened.next(u),u}closeAll(){Vt(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){Vt(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),Vt(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let t=new tn({positionStrategy:e.positionStrategy||nt().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,i){let o=i.injector||i.viewContainerRef?.injector,d=[{provide:se,useValue:i},{provide:Re,useValue:t},{provide:an,useValue:e}],u;i.container?typeof i.container=="function"?u=i.container:(u=i.container.type,d.push(...i.container.providers(i))):u=Nt;let C=new Mt(u,i.viewContainerRef,A.create({parent:o||this._injector,providers:d}));return e.attach(C).instance}_attachDialogContent(e,t,i,o){if(e instanceof Kt){let d=this._createInjector(o,t,i,void 0),u={$implicit:o.data,dialogRef:t};o.templateContext&&(u=$($({},u),typeof o.templateContext=="function"?o.templateContext():o.templateContext)),i.attachTemplatePortal(new Xi(e,null,u,d))}else{let d=this._createInjector(o,t,i,this._injector),u=i.attachComponentPortal(new Mt(e,o.viewContainerRef,d));t.componentRef=u,t.componentInstance=u.instance}}_createInjector(e,t,i,o){let d=e.injector||e.viewContainerRef?.injector,u=[{provide:ya,useValue:e.data},{provide:Re,useValue:t}];return e.providers&&(typeof e.providers=="function"?u.push(...e.providers(t,e,i)):u.push(...e.providers)),e.direction&&(!d||!d.get(pe,null,{optional:!0}))&&u.push({provide:pe,useValue:wa(e.direction)}),A.create({parent:d||o,providers:u})}_removeOpenDialog(e,t){let i=this.openDialogs.indexOf(e);i>-1&&(this.openDialogs.splice(i,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((o,d)=>{o?d.setAttribute("aria-hidden",o):d.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let t=e.parentElement.children;for(let i=t.length-1;i>-1;i--){let o=t[i];o!==e&&o.nodeName!=="SCRIPT"&&o.nodeName!=="STYLE"&&!o.hasAttribute("aria-live")&&!o.hasAttribute("popover")&&(this._ariaHiddenElements.set(o,o.getAttribute("aria-hidden")),o.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(t){return new(t||n)};static \u0275prov=te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Vt(n,a){let e=n.length;for(;e--;)a(n[e])}var _n=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=G({type:n});static \u0275inj=j({providers:[jt],imports:[xe,Fe,wi,Fe]})}return n})();function xa(n,a){}var pt=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration},Gt="mdc-dialog--open",bn="mdc-dialog--opening",vn="mdc-dialog--closing",Da=150,ka=75,Ma=(()=>{class n extends Nt{_animationStateChanged=new P;_animationsEnabled=!ce();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?Cn(this._config.enterAnimationDuration)??Da:0;_exitAnimationDuration=this._animationsEnabled?Cn(this._config.exitAnimationDuration)??ka:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(yn,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(bn,Gt)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(Gt),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(Gt),this._animationsEnabled?(this._hostElement.style.setProperty(yn,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(vn)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(bn,vn)}_waitForAnimationToComplete(e,t){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(t,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let t=super.attachComponentPortal(e);return t.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),t}static \u0275fac=(()=>{let e;return function(i){return(e||(e=ie(n)))(i||n)}})();static \u0275cmp=v({type:n,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(t,i){t&2&&(Ee("id",i._config.id),y("aria-modal",i._config.ariaModal)("role",i._config.role)("aria-labelledby",i._config.ariaLabel?null:i._ariaLabelledByQueue[0])("aria-label",i._config.ariaLabel)("aria-describedby",i._config.ariaDescribedBy||null),E("_mat-animation-noopable",!i._animationsEnabled)("mat-mdc-dialog-container-with-actions",i._actionSectionCount>0))},features:[q],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(t,i){t&1&&(s(0,"div",0)(1,"div",1),be(2,xa,0,0,"ng-template",2),l()())},dependencies:[Ae],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--mat-dialog-container-max-width, 560px);
  min-width: var(--mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--mat-dialog-container-elevation-shadow, none);
  border-radius: var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));
  background-color: var(--mat-dialog-container-color, var(--mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));
  line-height: var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));
  font-weight: var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));
  letter-spacing: var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));
  line-height: var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));
  font-weight: var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));
  letter-spacing: var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2})}return n})(),yn="--mat-dialog-transition-duration";function Cn(n){return n==null?null:typeof n=="number"?n:n.endsWith("ms")?Ce(n.substring(0,n.length-2)):n.endsWith("s")?Ce(n.substring(0,n.length-1))*1e3:n==="0"?0:null}var mt=(function(n){return n[n.OPEN=0]="OPEN",n[n.CLOSING=1]="CLOSING",n[n.CLOSED=2]="CLOSED",n})(mt||{}),Le=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new ue(1);_beforeClosed=new ue(1);_result;_closeFallbackTimeout;_state=mt.OPEN;_closeInteractionType;constructor(a,e,t){this._ref=a,this._config=e,this._containerInstance=t,this.disableClose=e.disableClose,this.id=a.id,a.addPanelClass("mat-mdc-dialog-panel"),t._animationStateChanged.pipe(L(i=>i.state==="opened"),B(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe(L(i=>i.state==="closed"),B(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),a.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),ee(this.backdropClick(),this.keydownEvents().pipe(L(i=>i.keyCode===27&&!this.disableClose&&!H(i)))).subscribe(i=>{this.disableClose||(i.preventDefault(),wn(this,i.type==="keydown"?"keyboard":"mouse"))})}close(a){let e=this._config.closePredicate;e&&!e(a,this._config,this.componentInstance)||(this._result=a,this._containerInstance._animationStateChanged.pipe(L(t=>t.state==="closing"),B(1)).subscribe(t=>{this._beforeClosed.next(a),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=mt.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(a){let e=this._ref.config.positionStrategy;return a&&(a.left||a.right)?a.left?e.left(a.left):e.right(a.right):e.centerHorizontally(),a&&(a.top||a.bottom)?a.top?e.top(a.top):e.bottom(a.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(a="",e=""){return this._ref.updateSize(a,e),this}addPanelClass(a){return this._ref.addPanelClass(a),this}removePanelClass(a){return this._ref.removePanelClass(a),this}getState(){return this._state}_finishDialogClose(){this._state=mt.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function wn(n,a,e){return n._closeInteractionType=a,n.close(e)}var Wt=new w("MatMdcDialogData"),Sa=new w("mat-mdc-dialog-default-options"),Oa=new w("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let n=r(A);return()=>it(n)}}),Be=(()=>{class n{_defaultOptions=r(Sa,{optional:!0});_scrollStrategy=r(Oa);_parentDialog=r(n,{optional:!0,skipSelf:!0});_idGenerator=r(Q);_injector=r(A);_dialog=r(jt);_animationsDisabled=ce();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new b;_afterOpenedAtThisLevel=new b;dialogConfigClass=pt;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=ge(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(K(void 0)));constructor(){this._dialogRefConstructor=Le,this._dialogContainerType=Ma,this._dialogDataToken=Wt}open(e,t){let i;t=$($({},this._defaultOptions||new pt),t),t.id=t.id||this._idGenerator.getId("mat-mdc-dialog-"),t.scrollStrategy=t.scrollStrategy||this._scrollStrategy();let o=this._dialog.open(e,Ct($({},t),{positionStrategy:nt(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||t.enterAnimationDuration?.toLocaleString()==="0"||t.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:t},{provide:se,useValue:t}]},templateContext:()=>({dialogRef:i}),providers:(d,u,C)=>(i=new this._dialogRefConstructor(d,t,C),i.updatePosition(t?.position),[{provide:this._dialogContainerType,useValue:C},{provide:this._dialogDataToken,useValue:u.data},{provide:this._dialogRefConstructor,useValue:i}])}));return i.componentRef=o.componentRef,i.componentInstance=o.componentInstance,this.openDialogs.push(i),this.afterOpened.next(i),i.afterClosed().subscribe(()=>{let d=this.openDialogs.indexOf(i);d>-1&&(this.openDialogs.splice(d,1),this.openDialogs.length||this._getAfterAllClosed().next())}),i}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let t=e.length;for(;t--;)e[t].close()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ut=(()=>{class n{dialogRef=r(Le,{optional:!0});_elementRef=r(z);_dialog=r(Be);ariaLabel;type="button";dialogResult;_matDialogClose;constructor(){}ngOnInit(){this.dialogRef||(this.dialogRef=Dn(this._elementRef,this._dialog.openDialogs))}ngOnChanges(e){let t=e._matDialogClose||e._matDialogCloseResult;t&&(this.dialogResult=t.currentValue)}_onButtonClick(e){wn(this.dialogRef,e.screenX===0&&e.screenY===0?"keyboard":"mouse",this.dialogResult)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=de({type:n,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(t,i){t&1&&g("click",function(d){return i._onButtonClick(d)}),t&2&&y("aria-label",i.ariaLabel||null)("type",i.type)},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],type:"type",dialogResult:[0,"mat-dialog-close","dialogResult"],_matDialogClose:[0,"matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],features:[je]})}return n})(),xn=(()=>{class n{_dialogRef=r(Le,{optional:!0});_elementRef=r(z);_dialog=r(Be);constructor(){}ngOnInit(){this._dialogRef||(this._dialogRef=Dn(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static \u0275fac=function(t){return new(t||n)};static \u0275dir=de({type:n})}return n})(),ht=(()=>{class n extends xn{id=r(Q).getId("mat-mdc-dialog-title-");_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static \u0275fac=(()=>{let e;return function(i){return(e||(e=ie(n)))(i||n)}})();static \u0275dir=de({type:n,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(t,i){t&2&&Ee("id",i.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],features:[q]})}return n})(),gt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=de({type:n,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],features:[Zt([re])]})}return n})(),ft=(()=>{class n extends xn{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static \u0275fac=(()=>{let e;return function(i){return(e||(e=ie(n)))(i||n)}})();static \u0275dir=de({type:n,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(t,i){t&2&&E("mat-mdc-dialog-actions-align-start",i.align==="start")("mat-mdc-dialog-actions-align-center",i.align==="center")("mat-mdc-dialog-actions-align-end",i.align==="end")},inputs:{align:"align"},features:[q]})}return n})();function Dn(n,a){let e=n.nativeElement.parentElement;for(;e&&!e.classList.contains("mat-mdc-dialog-container");)e=e.parentElement;return e?a.find(t=>t.id===e.id):null}var Me=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=G({type:n});static \u0275inj=j({providers:[Be],imports:[_n,xe,Fe,ae]})}return n})();var _t=class n{constructor(a){this.http=a}list(a,e=0,t=10){let i=a?.trim()??"",o=new ai().set("page",String(e)).set("size",String(t));return i.length>0&&(o=o.set("q",i)),this.http.get(`${ve.apiBaseUrl}/api/v1/customers`,{params:o})}get(a){return this.http.get(`${ve.apiBaseUrl}/api/v1/customers/${a}`)}create(a){return this.http.post(`${ve.apiBaseUrl}/api/v1/customers`,a)}update(a,e){return this.http.put(`${ve.apiBaseUrl}/api/v1/customers/${a}`,e)}delete(a){return this.http.delete(`${ve.apiBaseUrl}/api/v1/customers/${a}`)}static \u0275fac=function(e){return new(e||n)(Ut(oi))};static \u0275prov=te({token:n,factory:n.\u0275fac,providedIn:"root"})};var bt=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["app-customers-close-unsaved-dialog"]],decls:10,vars:1,consts:[["mat-dialog-title",""],[1,"mat-body-medium","dialog-body"],["align","end"],["mat-button","","type","button","mat-dialog-close",""],["mat-flat-button","","type","button","color","warn",3,"mat-dialog-close"]],template:function(e,t){e&1&&(s(0,"h2",0),m(1,"Fechar sem salvar?"),l(),s(2,"mat-dialog-content")(3,"p",1),m(4," Existem altera\xE7\xF5es que ainda n\xE3o foram guardadas. Se fechar o painel agora, essas altera\xE7\xF5es ser\xE3o descartadas. "),l()(),s(5,"mat-dialog-actions",2)(6,"button",3),m(7,"Voltar"),l(),s(8,"button",4),m(9,"Fechar sem salvar"),l()()),e&2&&(c(8),h("mat-dialog-close",!0))},dependencies:[Me,ut,ht,ft,gt,oe,we],styles:[".dialog-body[_ngcontent-%COMP%]{margin:0;max-width:26rem;line-height:1.5;color:var(--mat-sys-on-surface-variant)}"],changeDetection:0})};var vt=class n{data=r(Wt);static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["app-customers-delete-confirm-dialog"]],decls:13,vars:2,consts:[["mat-dialog-title",""],[1,"mat-body-medium","dialog-body"],["align","end"],["mat-button","","type","button","mat-dialog-close",""],["mat-flat-button","","type","button","color","warn",3,"mat-dialog-close"]],template:function(e,t){e&1&&(s(0,"h2",0),m(1,"Excluir cliente?"),l(),s(2,"mat-dialog-content")(3,"p",1),m(4," Tem certeza de que deseja excluir "),s(5,"strong"),m(6),l(),m(7,"? Esta a\xE7\xE3o n\xE3o pode ser desfeita. "),l()(),s(8,"mat-dialog-actions",2)(9,"button",3),m(10,"Cancelar"),l(),s(11,"button",4),m(12,"Excluir"),l()()),e&2&&(c(6),F(t.data.name),c(5),h("mat-dialog-close",!0))},dependencies:[Me,ut,ht,ft,gt,oe,we],styles:[".dialog-body[_ngcontent-%COMP%]{margin:0;max-width:26rem;line-height:1.5;color:var(--mat-sys-on-surface-variant)}"],changeDetection:0})};var Ia=(n,a)=>a.id;function Ea(n,a){if(n&1&&(s(0,"p",13),m(1),l()),n&2){let e=p();c(),F(e.error())}}function Ta(n,a){if(n&1&&(s(0,"div",31)(1,"div",32),D(2,"div",33)(3,"div",34)(4,"div",35),l(),s(5,"div",36),D(6,"ngx-skeleton-loader",37)(7,"ngx-skeleton-loader",38),l()()),n&2){let e=p(2);c(6),h("count",1)("theme",e.skeletonThemeFab),c(),h("count",1)("theme",e.skeletonThemeFab)}}function Pa(n,a){if(n&1&&(s(0,"div",14),Oe(1,Ta,8,4,"div",31,Ge),l()),n&2){let e=p();c(),Ie(e.skeletonSlots)}}function Aa(n,a){if(n&1){let e=V();s(0,"div",15)(1,"p",39),m(2,"Nenhum cliente cadastrado"),l(),s(3,"p",40),m(4," Que tal adicionar o primeiro? Use o bot\xE3o acima ou cadastre direto aqui. "),l(),s(5,"button",8),g("click",function(){M(e);let i=p();return S(i.openCreate())}),m(6," Cadastrar primeiro cliente "),l()()}if(n&2){let e=p();c(5),h("disabled",e.busy())}}function Fa(n,a){n&1&&(s(0,"div",15)(1,"p",39),m(2,"Nenhum resultado encontrado"),l(),s(3,"p",40),m(4," Ajuste o termo de busca ou limpe o campo para ver todos os clientes. "),l()())}function Ra(n,a){if(n&1){let e=V();s(0,"mat-list-item",44),g("click",function(){let i=M(e).$implicit,o=p(2);return S(o.onCustomerRowActivate(i))})("keydown.enter",function(){let i=M(e).$implicit,o=p(2);return S(o.onCustomerRowActivate(i))})("keydown.space",function(i){let o=M(e).$implicit,d=p(2);return i.preventDefault(),S(d.onCustomerRowActivate(o))}),s(1,"div",45)(2,"div",46),m(3),l(),s(4,"div",47),m(5),l(),s(6,"div",48),m(7),qe(8,"date"),qe(9,"date"),l()(),s(10,"div",49)(11,"button",50),g("click",function(i){let o=M(e).$implicit;return p(2).openEdit(o.id),S(i.stopPropagation())}),s(12,"mat-icon"),m(13,"edit"),l()(),s(14,"button",51),g("click",function(i){let o=M(e).$implicit;return p(2).requestDelete(o),S(i.stopPropagation())}),s(15,"mat-icon"),m(16,"delete"),l()()()()}if(n&2){let e,t=a.$implicit,i=p(2);E("customer-item-selected",i.editorOpen()&&((e=i.selected())==null?null:e.id)===t.id),y("aria-label","Editar cliente "+t.name),c(3),F(t.name),c(2),Dt("",t.email," \xB7 ",t.phone),c(2),ei(" Doc: ",t.document," \xB7 Criado ",Ue(8,12,t.createdAt,"short")," \xB7 Atualizado ",Ue(9,15,t.updatedAt,"short")," \xB7 Owner: ",t.ownerId," "),c(4),h("disabled",i.busy()),c(3),h("disabled",i.busy())}}function La(n,a){if(n&1){let e=V();s(0,"mat-paginator",52),g("page",function(i){M(e);let o=p(2);return S(o.onListPageChange(i))}),l()}if(n&2){let e=p(2);h("length",e.totalElements())("pageIndex",e.pageIndex())("pageSize",e.pageSize())("pageSizeOptions",e.pageSizeOptions)("showFirstLastButtons",!0)}}function Ba(n,a){if(n&1&&(s(0,"mat-list",41),Oe(1,Ra,17,18,"mat-list-item",42,Ia),l(),f(3,La,1,5,"mat-paginator",43)),n&2){let e=p();c(),Ie(e.customers()),c(2),_(e.totalElements()>0?3:-1)}}function za(n,a){if(n&1&&(s(0,"p",21),m(1),qe(2,"date"),l()),n&2){let e=a;c(),Dt(" ID: ",e.id," \xB7 Atualizado em ",Ue(2,2,e.updatedAt,"short")," ")}}function Va(n,a){if(n&1&&(s(0,"mat-error"),m(1),l()),n&2){let e=p();c(),F(e.errMsg(e.customerForm.controls.name,"Nome"))}}function Na(n,a){if(n&1&&(s(0,"mat-error"),m(1),l()),n&2){let e=p();c(),F(e.errMsg(e.customerForm.controls.email,"E-mail"))}}function ja(n,a){if(n&1&&(s(0,"mat-error"),m(1),l()),n&2){let e=p();c(),F(e.errMsg(e.customerForm.controls.phone,"Telefone"))}}function Ga(n,a){if(n&1&&(s(0,"mat-error"),m(1),l()),n&2){let e=p();c(),F(e.errMsg(e.customerForm.controls.document,"Documento"))}}var On=class n{listLoading=x(!1);actionLoading=x(!1);busy=ti(()=>this.listLoading()||this.actionLoading());error=x(null);customers=x([]);selected=x(null);editorOpen=x(!1);pageIndex=x(0);pageSize=x(10);totalElements=x(0);pageSizeOptions=[5,10,25];skeletonSlots=[0,1,2,3,4,5];skeletonThemeFab={width:"40px",height:"40px",margin:"0","margin-bottom":"0","--ngx-skeleton-loader-base-color":"var(--customers-skeleton-fill)","--ngx-skeleton-loader-light-mode-color":"var(--customers-skeleton-shimmer-mid)","--ngx-skeleton-loader-light-mode-color-to":"rgba(255, 255, 255, 0)"};searchControl=new pi("",{nonNullable:!0});api=r(_t);fb=r(fi);destroyRef=r(Ne);dialog=r(Be);customerForm=this.fb.nonNullable.group({name:["",[N.required,N.maxLength(200)]],email:["",[N.required,N.email,N.maxLength(320)]],phone:["",[N.required,N.maxLength(30)]],document:["",[N.required,N.minLength(11),N.maxLength(18)]]});constructor(){this.searchControl.valueChanges.pipe(ze(300),qt(),sn(this.destroyRef)).subscribe(()=>{this.pageIndex.set(0),this.reload()}),this.reload()}onEditorDrawerOpenedChange(a){!a&&this.editorOpen()&&this.clearSelection()}requestCloseWithoutSave(){if(!this.actionLoading()){if(!this.customerForm.dirty){this.clearSelection();return}this.dialog.open(bt,{width:"min(calc(100vw - 48px), 26rem)",autoFocus:"first-tabbable"}).afterClosed().pipe(B(1)).subscribe(a=>{a===!0&&this.clearSelection()})}}activeSearch(){return this.searchControl.value.trim().length>0}showErr(a){return a.invalid&&(a.touched||a.dirty)}errMsg(a,e){return a.hasError("required")?`${e} \xE9 obrigat\xF3rio.`:a.hasError("email")?"Informe um e-mail v\xE1lido.":a.hasError("maxlength")?`${e} excede o tamanho m\xE1ximo.`:a.hasError("minlength")?`${e} \xE9 curto demais (m\xEDn. 11 caracteres).`:`${e} inv\xE1lido.`}reload(){let a=this.searchControl.value.trim();this.listLoading.set(!0),this.error.set(null),this.api.list(a||void 0,this.pageIndex(),this.pageSize()).subscribe({next:e=>{if(e.content.length===0&&e.totalElements>0&&e.totalPages>0&&e.page>=e.totalPages){this.pageIndex.set(Math.max(0,e.totalPages-1)),this.listLoading.set(!1),this.reload();return}this.customers.set(e.content),this.totalElements.set(e.totalElements),e.page!==this.pageIndex()&&this.pageIndex.set(e.page),this.listLoading.set(!1);let t=this.selected();t&&!e.content.some(i=>i.id===t.id)&&this.clearSelection()},error:()=>{this.listLoading.set(!1),this.error.set("Falha ao carregar clientes (verifique login/API).")}})}onListPageChange(a){this.pageIndex.set(a.pageIndex),this.pageSize.set(a.pageSize),this.reload()}openCreate(){this.editorOpen.set(!0),this.selected.set(null),this.customerForm.reset({name:"",email:"",phone:"",document:""})}onCustomerRowActivate(a){this.busy()||this.openEdit(a.id)}openEdit(a){this.actionLoading.set(!0),this.error.set(null),this.api.get(a).subscribe({next:e=>{this.selected.set(e),this.editorOpen.set(!0),this.customerForm.reset({name:e.name,email:e.email,phone:e.phone,document:e.document}),this.actionLoading.set(!1)},error:()=>{this.actionLoading.set(!1),this.error.set("Falha ao carregar o cliente.")}})}clearSelection(){this.editorOpen.set(!1),this.selected.set(null),this.customerForm.reset({name:"",email:"",phone:"",document:""})}submitCustomerForm(){let a=this.selected();if(this.customerForm.invalid)return;let e=this.customerForm.getRawValue();a?(this.actionLoading.set(!0),this.error.set(null),this.api.update(a.id,e).subscribe({next:()=>{this.clearSelection(),this.actionLoading.set(!1),this.reload()},error:()=>{this.actionLoading.set(!1),this.error.set("Falha ao atualizar cliente.")}})):(this.actionLoading.set(!0),this.error.set(null),this.api.create(e).subscribe({next:()=>{this.clearSelection(),this.actionLoading.set(!1),this.reload()},error:()=>{this.actionLoading.set(!1),this.error.set("Falha ao cadastrar cliente.")}}))}requestDelete(a){this.busy()||this.dialog.open(vt,{width:"min(calc(100vw - 48px), 26rem)",autoFocus:"first-tabbable",data:{name:a.name}}).afterClosed().pipe(B(1)).subscribe(e=>{e===!0&&this.remove(a.id)})}remove(a){this.actionLoading.set(!0),this.error.set(null),this.api.delete(a).subscribe({next:()=>{this.selected()?.id===a&&this.clearSelection(),this.actionLoading.set(!1),this.reload()},error:()=>{this.actionLoading.set(!1),this.error.set("Falha ao excluir cliente.")}})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["app-customers-page"]],decls:60,vars:20,consts:[[1,"app-feature-page","customers-page"],[1,"customers-page-header"],[1,"mat-headline-medium","app-feature-page__title","customers-page-title"],[1,"customers-page-tools"],["appearance","outline","subscriptSizing","dynamic",1,"customers-inline-search"],["matPrefix",""],["matInput","","type","search","placeholder","Nome, e-mail, telefone ou documento\u2026","autocomplete","off",3,"formControl"],[1,"toolbar"],["mat-flat-button","","color","primary","type","button",3,"click","disabled"],["mat-stroked-button","","type","button",3,"click","disabled"],[1,"customers-sidenav",3,"hasBackdrop"],["appearance","outlined",1,"app-feature-panel"],[1,"customers-panel-body"],["role","alert",1,"app-inline-alert-error","mat-body-medium"],["role","status","aria-live","polite","aria-busy","true","aria-label","Carregando lista de clientes",1,"customer-skeleton-list"],["role","status",1,"empty-state"],["position","end","mode","over","aria-labelledby","customers-editor-title",1,"customers-editor-sidenav",3,"openedChange","fixedInViewport","opened","disableClose"],[1,"editor-drawer-panel"],[1,"editor-toolbar"],["id","customers-editor-title",1,"mat-headline-small","editor-title"],["mat-icon-button","","type","button","matTooltip","Fechar painel","aria-label","Fechar painel de edi\xE7\xE3o",3,"click","disabled"],[1,"meta-sub","mat-body-small","app-text-muted"],[1,"app-feature-form-stack",3,"ngSubmit","formGroup"],["appearance","outline"],["matInput","","type","text","formControlName","name","autocomplete","name"],["matInput","","type","email","formControlName","email","autocomplete","email"],["matInput","","type","text","formControlName","phone","autocomplete","tel"],["matInput","","type","text","formControlName","document"],[1,"actions-row"],["mat-stroked-button","","type","button","matTooltip","Cancelar edi\xE7\xE3o e fechar o painel",1,"cancel-editor",3,"click","disabled"],["mat-flat-button","","color","primary","type","submit",3,"disabled"],[1,"customer-skeleton-card"],["aria-hidden","true",1,"customer-skeleton-card__text"],[1,"customer-skeleton-line","customer-skeleton-line--title"],[1,"customer-skeleton-line","customer-skeleton-line--mid"],[1,"customer-skeleton-line","customer-skeleton-line--meta"],[1,"customer-skeleton-card__actions"],["appearance","circle","ariaLabel","Carregando a\xE7\xE3o editar",3,"count","theme"],["appearance","circle","ariaLabel","Carregando a\xE7\xE3o excluir",3,"count","theme"],[1,"empty-title","mat-body-large"],[1,"empty-hint","mat-body-medium","app-text-muted"],["role","list",1,"customer-list"],["tabindex","0",1,"customer-item",3,"customer-item-selected"],["aria-label","Selecionar p\xE1gina da lista de clientes",1,"customers-paginator",3,"length","pageIndex","pageSize","pageSizeOptions","showFirstLastButtons"],["tabindex","0",1,"customer-item",3,"click","keydown.enter","keydown.space"],["matListItemTitle","",1,"customer-block"],[1,"customer-name"],[1,"customer-contact","mat-body-medium"],[1,"customer-meta","mat-body-small","app-text-muted"],["matListItemMeta","",1,"item-actions"],["mat-mini-fab","","type","button","color","primary","matTooltip","Editar","aria-label","Editar cliente",1,"item-action-fab","item-action-fab--edit","customer-item__fab-edit",3,"click","disabled"],["mat-mini-fab","","type","button","color","warn","matTooltip","Excluir","aria-label","Excluir cliente",1,"item-action-fab","item-action-fab--delete",3,"click","disabled"],["aria-label","Selecionar p\xE1gina da lista de clientes",1,"customers-paginator",3,"page","length","pageIndex","pageSize","pageSizeOptions","showFirstLastButtons"]],template:function(e,t){if(e&1&&(s(0,"div",0)(1,"header",1)(2,"h1",2),m(3,"Clientes"),l(),s(4,"div",3)(5,"mat-form-field",4)(6,"mat-label"),m(7,"Buscar"),l(),s(8,"mat-icon",5),m(9,"search"),l(),D(10,"input",6),l(),s(11,"div",7)(12,"button",8),g("click",function(){return t.openCreate()}),m(13," Novo cliente "),l(),s(14,"button",9),g("click",function(){return t.reload()}),m(15,"Recarregar"),l()()()(),s(16,"mat-sidenav-container",10)(17,"mat-sidenav-content")(18,"mat-card",11)(19,"mat-card-content",12),f(20,Ea,2,1,"p",13),f(21,Pa,3,0,"div",14)(22,Aa,7,1,"div",15)(23,Fa,5,0,"div",15)(24,Ba,4,1),l()()(),s(25,"mat-sidenav",16),g("openedChange",function(o){return t.onEditorDrawerOpenedChange(o)}),s(26,"div",17)(27,"div",18)(28,"h2",19),m(29),l(),s(30,"button",20),g("click",function(){return t.requestCloseWithoutSave()}),s(31,"mat-icon"),m(32,"close"),l()()(),f(33,za,3,5,"p",21),s(34,"form",22),g("ngSubmit",function(){return t.submitCustomerForm()}),s(35,"mat-form-field",23)(36,"mat-label"),m(37,"Nome"),l(),D(38,"input",24),f(39,Va,2,1,"mat-error"),l(),s(40,"mat-form-field",23)(41,"mat-label"),m(42,"E-mail"),l(),D(43,"input",25),f(44,Na,2,1,"mat-error"),l(),s(45,"mat-form-field",23)(46,"mat-label"),m(47,"Telefone"),l(),D(48,"input",26),f(49,ja,2,1,"mat-error"),l(),s(50,"mat-form-field",23)(51,"mat-label"),m(52,"CPF ou CNPJ"),l(),D(53,"input",27),f(54,Ga,2,1,"mat-error"),l(),s(55,"div",28)(56,"button",29),g("click",function(){return t.requestCloseWithoutSave()}),m(57," Cancelar "),l(),s(58,"button",30),m(59),l()()()()()()()),e&2){let i;c(10),h("formControl",t.searchControl),c(2),h("disabled",t.busy()),c(2),h("disabled",t.busy()),c(2),h("hasBackdrop",!0),c(4),_(t.error()?20:-1),c(),_(t.listLoading()?21:t.customers().length===0&&!t.activeSearch()?22:t.customers().length===0&&t.activeSearch()?23:24),c(4),h("fixedInViewport",!0)("opened",t.editorOpen())("disableClose",t.actionLoading()||t.customerForm.dirty),c(4),X(" ",t.selected()?"Editar cliente":"Novo cliente"," "),c(),h("disabled",t.actionLoading()),c(3),_((i=t.selected())?33:-1,i),c(),h("formGroup",t.customerForm),c(5),_(t.showErr(t.customerForm.controls.name)?39:-1),c(5),_(t.showErr(t.customerForm.controls.email)?44:-1),c(5),_(t.showErr(t.customerForm.controls.phone)?49:-1),c(5),_(t.showErr(t.customerForm.controls.document)?54:-1),c(2),h("disabled",t.actionLoading()),c(2),h("disabled",t.customerForm.invalid||t.actionLoading()),c(),X(" ",t.selected()?"Salvar":"Cadastrar"," ")}},dependencies:[_i,ui,si,di,ci,hi,Qe,gi,Ti,Ii,Ei,oe,we,Oi,Xe,et,Je,Pi,Ai,Fi,Ni,Vi,Gi,ji,Zi,$i,Ki,Ui,Qi,hn,Ft,fn,zt,gn,dt,ot,at,Me,ri,ni],styles:[".customers-page[_ngcontent-%COMP%]{flex:1;min-height:0;display:flex;flex-direction:column;padding-top:var(--app-space-2)}.customers-sidenav[_ngcontent-%COMP%]{flex:1;min-height:min(70vh,36rem);width:100%;background:transparent}[_nghost-%COMP%]     .customers-sidenav .mat-drawer-backdrop.mat-drawer-shown{background-color:color-mix(in srgb,var(--mat-sys-on-surface) 22%,transparent)}@supports (backdrop-filter: blur(1px)){[_nghost-%COMP%]     .customers-sidenav .mat-drawer-backdrop.mat-drawer-shown{backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px)}}[_nghost-%COMP%]     .customers-editor-sidenav.mat-drawer{width:min(100vw - var(--app-space-4),28rem);border-radius:var(--app-radius-lg) 0 0 var(--app-radius-lg);border-inline-end:none;box-shadow:none}[_nghost-%COMP%]     .customers-editor-sidenav .mat-drawer-inner-container{overflow-x:hidden}.editor-drawer-panel[_ngcontent-%COMP%]{box-sizing:border-box;min-height:100%;padding:var(--app-space-4) var(--app-space-4) var(--app-space-6);background-color:var(--mat-sys-surface-container-lowest)}.customers-page-header[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:var(--app-space-3) var(--app-space-4);padding-bottom:var(--app-space-4);margin-bottom:var(--app-space-1);border-bottom:1px solid var(--mat-sys-outline-variant);overflow:visible}.customers-page-title[_ngcontent-%COMP%]{margin:0;flex:0 1 auto;min-width:min(100%,12rem)}.customers-page-tools[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-end;gap:var(--app-space-3);flex:1 1 16rem;overflow:visible}.customers-inline-search[_ngcontent-%COMP%]{flex:1 1 12rem;width:min(100%,22rem);max-width:min(100%,28rem)}.toolbar[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:var(--app-space-2);align-items:center;flex:0 0 auto}.customers-panel-body[_ngcontent-%COMP%]{padding-top:var(--app-space-4)!important}.empty-state[_ngcontent-%COMP%]{margin-top:var(--app-space-2);padding:var(--app-space-6) var(--app-space-5);border:1px dashed var(--mat-sys-outline-variant);border-radius:var(--app-radius-md);text-align:center;background-color:var(--mat-sys-surface-container-low)}.empty-title[_ngcontent-%COMP%]{margin:0;font-weight:600}.empty-hint[_ngcontent-%COMP%]{margin:var(--app-space-2) auto var(--app-space-4);max-width:22.5rem;line-height:1.55}.customer-list[_ngcontent-%COMP%]{padding:0;margin-top:var(--app-space-2);background:transparent}.customer-list[_ngcontent-%COMP%]     mat-list-item.customer-item+mat-list-item.customer-item{margin-top:var(--app-space-3)}.customer-item[_ngcontent-%COMP%]{height:auto!important;min-height:4.75rem;align-items:center;box-sizing:border-box;border-radius:var(--app-radius-md);border:1px solid var(--mat-sys-outline-variant);background-color:var(--mat-sys-surface-container-low);box-shadow:0 1px 3px color-mix(in srgb,var(--mat-sys-on-surface) 7%,transparent);overflow:hidden;cursor:pointer}.customer-item[_ngcontent-%COMP%]:focus-visible{outline:2px solid var(--mat-sys-primary);outline-offset:2px}@media(max-width:767px){.customer-item__fab-edit[_ngcontent-%COMP%]{display:none!important}}.customer-item[_ngcontent-%COMP%]     .mat-mdc-list-item-meta{align-self:center}.customer-block[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;gap:var(--app-space-1);padding-block:var(--app-space-2);min-width:0;width:100%}.customer-name[_ngcontent-%COMP%]{font-weight:600;font-size:1rem;line-height:1.35;color:var(--mat-sys-on-surface)}.customer-contact[_ngcontent-%COMP%]{margin:0;line-height:1.4;color:var(--mat-sys-on-surface)}.customer-meta[_ngcontent-%COMP%]{margin:0;line-height:1.4;font-size:.8125rem}.item-actions[_ngcontent-%COMP%]{display:flex;gap:var(--app-space-3);justify-content:flex-end;align-items:center}.item-action-fab--edit.mat-mdc-mini-fab[_ngcontent-%COMP%]{--mdc-fab-container-color: var(--mat-sys-primary);--mat-fab-foreground-color: var(--mat-sys-on-primary)}.item-action-fab--delete.mat-mdc-mini-fab[_ngcontent-%COMP%]{--mdc-fab-container-color: var(--mat-sys-error);--mat-fab-foreground-color: var(--mat-sys-on-error)}.customer-item-selected[_ngcontent-%COMP%]{border-color:color-mix(in srgb,var(--mat-sys-primary) 55%,var(--mat-sys-outline-variant));background-color:color-mix(in srgb,var(--mat-sys-primary) 10%,var(--mat-sys-surface-container-low));box-shadow:0 0 0 1px color-mix(in srgb,var(--mat-sys-primary) 22%,transparent),0 1px 4px color-mix(in srgb,var(--mat-sys-on-surface) 8%,transparent)}.editor-toolbar[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-start;gap:var(--app-space-3);margin-bottom:var(--app-space-4);padding-bottom:var(--app-space-3);border-bottom:1px solid var(--mat-sys-outline-variant)}.editor-title[_ngcontent-%COMP%]{margin:0;flex:1;min-width:0;padding-inline-end:var(--app-space-2)}.meta-sub[_ngcontent-%COMP%]{margin:0 0 var(--app-space-4)}.actions-row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:var(--app-space-2);align-items:center;justify-content:flex-end;margin-top:var(--app-space-4);padding-top:var(--app-space-2)}.actions-row[_ngcontent-%COMP%]   .cancel-editor[_ngcontent-%COMP%]{margin-inline-end:auto}"],changeDetection:0})};export{On as CustomersPage};
