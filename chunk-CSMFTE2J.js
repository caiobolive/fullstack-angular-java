import{a as Re,b as Ue,c as Se,f as Te,g as Ae,h as Fe,j as Pe,k as ze,l as Oe,m as Le,n as Ne,o as Ve}from"./chunk-KLCT77LZ.js";import{e as le,h as ye,j as Ce,m as Ee,n as V,o as Me,p as Ie,r as T,s as we,t as De}from"./chunk-HOJ3HH6A.js";import{a as he,b as be,c as ke,d as I,f as pe,g as ue,j as _e,l as xe,m as fe,n as ge,o as ve}from"./chunk-DEZPJ355.js";import{o as me,s as S}from"./chunk-VSS7XWMK.js";import{$ as y,$a as ee,Aa as d,Ab as ie,Bb as s,Cb as N,Fb as oe,Ma as _,Na as D,P as G,Pb as re,Q as $,R as w,T as H,U as X,Ub as de,V as b,Wb as x,Xa as C,Xb as se,Ya as E,Za as M,_ as v,_a as Y,a as P,aa as Q,ab as l,ba as Z,bb as i,cb as o,db as p,ga as z,ha as K,ib as te,jb as ne,ka as f,mb as k,nb as h,oa as J,ob as R,pb as U,ra as W,rb as ce,sb as O,tb as L,xb as ae,zb as g}from"./chunk-R5P5E7S3.js";var He=["mat-internal-form-field",""],Xe=["*"],qe=(()=>{class c{labelPosition="after";static \u0275fac=function(t){return new(t||c)};static \u0275cmp=_({type:c,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(t,n){t&2&&g("mdc-form-field--align-end",n.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:He,ngContentSelectors:Xe,decls:1,vars:0,template:function(t,n){t&1&&(R(),U(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2,changeDetection:0})}return c})();var Qe=["input"],Ze=["label"],Ke=["*"],q={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},Je=new H("mat-checkbox-default-options",{providedIn:"root",factory:()=>q}),m=(function(c){return c[c.Init=0]="Init",c[c.Checked=1]="Checked",c[c.Unchecked=2]="Unchecked",c[c.Indeterminate=3]="Indeterminate",c})(m||{}),B=class{source;checked},j=(()=>{class c{_elementRef=b(W);_changeDetectorRef=b(de);_ngZone=b(K);_animationsDisabled=Ee();_options=b(Je,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let t=new B;return t.source=this,t.checked=e,t}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new z;indeterminateChange=new z;value;disableRipple=!1;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=m.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){b(ye).load(Ie);let e=b(new re("tabindex"),{optional:!0});this._options=this._options||q,this.color=this._options.color||q.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=b(Ce).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let t=e!=this._indeterminate();this._indeterminate.set(e),t&&(e?this._transitionCheckState(m.Indeterminate):this._transitionCheckState(this.checked?m.Checked:m.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=f(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let t=this._currentCheckState,n=this._getAnimationTargetElement();if(!(t===e||!n)&&(this._currentAnimationClass&&n.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(t,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){n.classList.add(this._currentAnimationClass);let r=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{n.classList.remove(r)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?m.Checked:m.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,t){if(this._animationsDisabled)return"";switch(e){case m.Init:if(t===m.Checked)return this._animationClasses.uncheckedToChecked;if(t==m.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case m.Unchecked:return t===m.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case m.Checked:return t===m.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case m.Indeterminate:return t===m.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(e){let t=this._inputElement;t&&(t.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus()}_preventBubblingFromLabel(e){e.target&&this._labelElement.nativeElement.contains(e.target)&&e.stopPropagation()}static \u0275fac=function(t){return new(t||c)};static \u0275cmp=_({type:c,selectors:[["mat-checkbox"]],viewQuery:function(t,n){if(t&1&&ce(Qe,5)(Ze,5),t&2){let r;O(r=L())&&(n._inputElement=r.first),O(r=L())&&(n._labelElement=r.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(t,n){t&2&&(ne("id",n.id),C("tabindex",null)("aria-label",null)("aria-labelledby",null),ie(n.color?"mat-"+n.color:"mat-accent"),g("_mat-animation-noopable",n._animationsDisabled)("mdc-checkbox--disabled",n.disabled)("mat-mdc-checkbox-disabled",n.disabled)("mat-mdc-checkbox-checked",n.checked)("mat-mdc-checkbox-disabled-interactive",n.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",x],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",x],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",x],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:se(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",x],checked:[2,"checked","checked",x],disabled:[2,"disabled","disabled",x],indeterminate:[2,"indeterminate","indeterminate",x]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[oe([{provide:he,useExisting:G(()=>c),multi:!0},{provide:ke,useExisting:c,multi:!0}]),J],ngContentSelectors:Ke,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(t,n){if(t&1&&(R(),i(0,"div",3),k("click",function(u){return n._preventBubblingFromLabel(u)}),i(1,"div",4,0)(3,"div",5),k("click",function(){return n._onTouchTargetClick()}),o(),i(4,"input",6,1),k("blur",function(){return n._onBlur()})("click",function(){return n._onInputClick()})("change",function(u){return n._onInteractionEvent(u)}),o(),p(6,"div",7),i(7,"div",8),Q(),i(8,"svg",9),p(9,"path",10),o(),Z(),p(10,"div",11),o(),p(11,"div",12),o(),i(12,"label",13,2),U(14),o()()),t&2){let r=ae(2);l("labelPosition",n.labelPosition),d(4),g("mdc-checkbox--selected",n.checked),l("checked",n.checked)("indeterminate",n.indeterminate)("disabled",n.disabled&&!n.disabledInteractive)("id",n.inputId)("required",n.required)("tabIndex",n.disabled&&!n.disabledInteractive?-1:n.tabIndex),C("aria-label",n.ariaLabel||null)("aria-labelledby",n.ariaLabelledby)("aria-describedby",n.ariaDescribedby)("aria-checked",n.indeterminate?"mixed":null)("aria-controls",n.ariaControls)("aria-disabled",n.disabled&&n.disabledInteractive?!0:null)("aria-expanded",n.ariaExpanded)("aria-owns",n.ariaOwns)("name",n.name)("value",n.value),d(7),l("matRippleTrigger",r)("matRippleDisabled",n.disableRipple||n.disabled)("matRippleCentered",!0),d(),l("for",n.inputId)}},dependencies:[Me,qe],styles:[`.mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}
.mdc-checkbox:hover > .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--mat-checkbox-state-layer-size, 40px);
  height: var(--mat-checkbox-state-layer-size, 40px);
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}

.mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}

.mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));
  background-color: transparent;
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface));
}

.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}

.mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}

.mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}

.mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}

.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}

.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}

@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-checkbox {
  display: inline-block;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-checkbox label {
  cursor: pointer;
}
.mat-mdc-checkbox .mat-internal-form-field {
  color: var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
  cursor: default;
  color: var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
    color: GrayText;
  }
}
.mat-mdc-checkbox label:empty {
  display: none;
}
.mat-mdc-checkbox .mdc-checkbox__ripple {
  opacity: 0;
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple,
.mdc-checkbox__ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),
.mdc-checkbox__ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-mdc-checkbox-ripple .mat-ripple-element {
  opacity: 0.1;
}

.mat-mdc-checkbox-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-checkbox-touch-target-size, 48px);
  width: var(--mat-checkbox-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--mat-checkbox-touch-target-display, block);
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {
  border-radius: 50%;
}

.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return c})(),Be=(()=>{class c{static \u0275fac=function(t){return new(t||c)};static \u0275mod=D({type:c});static \u0275inj=w({imports:[j,T]})}return c})();var je=(()=>{class c{get vertical(){return this._vertical}set vertical(e){this._vertical=V(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=V(e)}_inset=!1;static \u0275fac=function(t){return new(t||c)};static \u0275cmp=_({type:c,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(t,n){t&2&&(C("aria-orientation",n.vertical?"vertical":"horizontal"),g("mat-divider-vertical",n.vertical)("mat-divider-horizontal",!n.vertical)("mat-divider-inset",n.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(t,n){},styles:[`.mat-divider {
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
`],encapsulation:2,changeDetection:0})}return c})(),Ge=(()=>{class c{static \u0275fac=function(t){return new(t||c)};static \u0275mod=D({type:c});static \u0275inj=w({imports:[T]})}return c})();var F=class c{constructor(a){this.http=a}list(){return this.http.get(`${S.apiBaseUrl}/api/v1/users`)}create(a){return this.http.post(`${S.apiBaseUrl}/api/v1/users`,a)}update(a,e){return this.http.patch(`${S.apiBaseUrl}/api/v1/users/${a}`,e)}static \u0275fac=function(e){return new(e||c)(X(me))};static \u0275prov=$({token:c,factory:c.\u0275fac,providedIn:"root"})};var et=(c,a)=>a.id;function tt(c,a){c&1&&p(0,"mat-spinner",15)}function nt(c,a){if(c&1&&(i(0,"p",17),s(1),o()),c&2){let e=h();d(),N(e.error())}}function ct(c,a){c&1&&(i(0,"small",25),s(1,"Sua conta: n\xE3o \xE9 poss\xEDvel desativar ou remover ROLE_ADMIN aqui."),o())}function at(c,a){if(c&1){let e=te();i(0,"div",21)(1,"mat-checkbox",22),k("change",function(n){v(e);let r=h().$implicit,u=h();return y(u.toggleEnabled(r.id,n.checked))}),s(2," Ativo "),o(),i(3,"mat-checkbox",23),k("change",function(n){v(e);let r=h().$implicit,u=h();return y(u.toggleRoleUser(r.id,n.checked))}),s(4," ROLE_USER "),o(),i(5,"mat-checkbox",22),k("change",function(n){v(e);let r=h().$implicit,u=h();return y(u.toggleRoleAdmin(r.id,n.checked))}),s(6," ROLE_ADMIN "),o(),i(7,"button",24),k("click",function(){v(e);let n=h().$implicit,r=h();return y(r.saveRow(n))}),s(8," Salvar "),o()(),E(9,ct,2,0,"small",25)}if(c&2){let e=a,t=h().$implicit,n=h();d(),l("checked",e.enabled)("disabled",n.isSelf(t)),d(2),l("checked",e.roleUser),d(2),l("checked",e.roleAdmin)("disabled",n.isSelf(t)),d(2),l("disabled",n.loading()),d(2),M(n.isSelf(t)?9:-1)}}function it(c,a){if(c&1&&(i(0,"mat-card",19)(1,"mat-card-content")(2,"div",20),s(3),o(),E(4,at,10,7),o()()),c&2){let e,t=a.$implicit,n=h();d(3),N(t.email),d(),M((e=n.drafts().get(t.id))?4:-1,e)}}var $e=class c{loading=f(!1);error=f(null);users=f([]);drafts=f(new Map);api=b(F);auth=b(le);fb=b(ge);createForm=this.fb.nonNullable.group({email:["",[I.required,I.email]],password:["",[I.required,I.minLength(8)]],roleUser:[!0],roleAdmin:[!1]});constructor(){this.reload()}isSelf(a){return this.auth.getUserId()===a.id}reload(){this.loading.set(!0),this.error.set(null),this.api.list().subscribe({next:a=>{this.users.set(a),this.initDrafts(a),this.loading.set(!1)},error:()=>{this.loading.set(!1),this.error.set("Falha ao carregar usu\xE1rios (permiss\xE3o ou API).")}})}initDrafts(a){let e=new Map;for(let t of a)e.set(t.id,{enabled:t.enabled,roleUser:t.roles.includes("ROLE_USER"),roleAdmin:t.roles.includes("ROLE_ADMIN")});this.drafts.set(e)}patchDraft(a,e){let t=new Map(this.drafts()),n=t.get(a);n&&(t.set(a,P(P({},n),e)),this.drafts.set(t))}toggleEnabled(a,e){this.patchDraft(a,{enabled:e})}toggleRoleUser(a,e){this.patchDraft(a,{roleUser:e})}toggleRoleAdmin(a,e){this.patchDraft(a,{roleAdmin:e})}saveRow(a){let e=this.drafts().get(a.id);if(!e)return;let t=[];if(e.roleUser&&t.push("ROLE_USER"),e.roleAdmin&&t.push("ROLE_ADMIN"),t.length===0){this.error.set("Selecione pelo menos um papel.");return}this.loading.set(!0),this.error.set(null),this.api.update(a.id,{enabled:e.enabled,roles:t}).subscribe({next:()=>this.reload(),error:()=>{this.loading.set(!1),this.error.set("Falha ao atualizar usu\xE1rio (regra de seguran\xE7a ou dados inv\xE1lidos).")}})}create(){if(this.createForm.invalid)return;let a=this.createForm.getRawValue(),e=[];if(a.roleUser&&e.push("ROLE_USER"),a.roleAdmin&&e.push("ROLE_ADMIN"),e.length===0){this.error.set("Selecione pelo menos um papel.");return}this.loading.set(!0),this.error.set(null),this.api.create({email:a.email,password:a.password,roles:e}).subscribe({next:()=>{this.createForm.reset({email:"",password:"",roleUser:!0,roleAdmin:!1}),this.reload()},error:()=>{this.loading.set(!1),this.error.set("Falha ao criar usu\xE1rio (email duplicado ou dados inv\xE1lidos).")}})}static \u0275fac=function(e){return new(e||c)};static \u0275cmp=_({type:c,selectors:[["app-users-page"]],decls:41,vars:5,consts:[[1,"page"],[1,"header"],[1,"mat-font-headline-md"],[1,"muted","mat-font-body-md"],["appearance","outlined"],[1,"stack",3,"ngSubmit","formGroup"],["appearance","outline"],["matInput","","type","email","formControlName","email","autocomplete","off"],["matInput","","type","password","formControlName","password","autocomplete","new-password"],[1,"roles"],["formControlName","roleUser"],["formControlName","roleAdmin"],["mat-flat-button","","color","primary","type","submit",3,"disabled"],[1,"list-head"],[1,"toolbar-actions"],["diameter","26"],["mat-stroked-button","","type","button",3,"click","disabled"],["role","alert",1,"banner-error"],[1,"user-list"],["appearance","outlined",1,"user-row"],[1,"email-line","mat-font-title-md"],[1,"row-controls"],[3,"change","checked","disabled"],[3,"change","checked"],["mat-flat-button","","color","primary","type","button",3,"click","disabled"],[1,"hint","mat-font-body-sm"]],template:function(e,t){e&1&&(i(0,"div",0)(1,"header",1)(2,"h1",2),s(3,"Usu\xE1rios"),o(),i(4,"p",3),s(5,"Apenas administradores podem gerenciar usu\xE1rios."),o()(),i(6,"mat-card",4)(7,"mat-card-header")(8,"mat-card-title"),s(9,"Novo usu\xE1rio"),o()(),i(10,"mat-card-content")(11,"form",5),k("ngSubmit",function(){return t.create()}),i(12,"mat-form-field",6)(13,"mat-label"),s(14,"E-mail"),o(),p(15,"input",7),o(),i(16,"mat-form-field",6)(17,"mat-label"),s(18,"Senha (m\xEDn. 8)"),o(),p(19,"input",8),o(),i(20,"div",9)(21,"mat-checkbox",10),s(22,"ROLE_USER"),o(),i(23,"mat-checkbox",11),s(24,"ROLE_ADMIN"),o()(),i(25,"button",12),s(26," Criar "),o()()()(),i(27,"mat-card",4)(28,"mat-card-header",13)(29,"mat-card-title"),s(30,"Lista"),o(),i(31,"span",14),E(32,tt,1,0,"mat-spinner",15),i(33,"button",16),k("click",function(){return t.reload()}),s(34," Recarregar "),o()()(),p(35,"mat-divider"),i(36,"mat-card-content"),E(37,nt,2,1,"p",17),i(38,"div",18),Y(39,it,5,2,"mat-card",19,et),o()()()()),e&2&&(d(11),l("formGroup",t.createForm),d(14),l("disabled",t.createForm.invalid||t.loading()),d(7),M(t.loading()?32:-1),d(),l("disabled",t.loading()),d(4),M(t.error()?37:-1),d(2),ee(t.users()))},dependencies:[ve,_e,be,pe,ue,fe,xe,Ae,Re,Se,Te,Ue,De,we,ze,Pe,Fe,Le,Oe,Be,j,Ge,je,Ve,Ne],styles:[".page[_ngcontent-%COMP%]{max-width:720px;margin:0 auto;padding:0 16px;display:grid;gap:16px}.header[_ngcontent-%COMP%]   .muted[_ngcontent-%COMP%]{margin:4px 0 0;color:var(--mat-sys-on-surface-variant)}.stack[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;margin-top:8px}.roles[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:12px 16px;align-items:center;padding:4px 0 8px}.list-head[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap}.toolbar-actions[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px}.banner-error[_ngcontent-%COMP%]{margin:12px 0;padding:10px 12px;border-radius:8px;background-color:var(--mat-sys-error-container);color:var(--mat-sys-on-error-container)}.user-list[_ngcontent-%COMP%]{display:grid;gap:12px;margin-top:16px}.user-row[_ngcontent-%COMP%]{transition:box-shadow .2s cubic-bezier(.2,0,0,1)}.email-line[_ngcontent-%COMP%]{margin-bottom:4px}.row-controls[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:12px;align-items:center;margin-top:8px}.hint[_ngcontent-%COMP%]{display:block;margin-top:8px;color:var(--mat-sys-tertiary)}"],changeDetection:0})};export{$e as UsersPage};
