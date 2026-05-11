import{b as V,c as j}from"./chunk-CQAJ3EFQ.js";import{b as G}from"./chunk-FKXWFDPT.js";import{a as te,b as ie,c as ne,d as ae,e as oe,f as se,g as ce,h as me,l as le,m as de,p as pe,q as ge}from"./chunk-Y44S5PZ3.js";import{Ab as A,Ac as U,Bb as s,Cb as B,Cc as $,Dc as K,Ec as Z,Fc as J,Ja as v,Ka as T,Nb as F,Oa as O,V as S,Wa as _,X as E,Xa as l,Ya as d,Z as m,_b as C,ab as p,bb as i,cb as n,d as w,da as x,db as g,ea as k,ec as z,hb as b,jd as X,kb as L,mb as f,na as M,qb as N,rb as D,sa as P,sb as R,sc as q,td as Y,uc as h,vd as ee,wb as I,wc as H,xa as c,xb as y,xc as Q,xd as re,yb as W}from"./chunk-BQEGKSV5.js";var be=["determinateSpinner"];function ye(r,o){if(r&1&&(x(),i(0,"svg",11),g(1,"circle",12),n()),r&2){let e=f();_("viewBox",e._viewBox()),c(),y("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeCircumference()/2,"px")("stroke-width",e._circleStrokeWidth(),"%"),_("r",e._circleRadius())}}var Ce=new E("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:ue})}),ue=100,xe=10,_e=(()=>{class r{_elementRef=m(P);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";_determinateCircle;constructor(){let e=m(Ce),t=X(),a=this._elementRef.nativeElement;this._noopAnimations=t==="di-disabled"&&!!e&&!e._forceAnimations,this.mode=a.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&t==="reduced-motion"&&a.classList.add("mat-progress-spinner-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode==="determinate"?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=ue;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-xe)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=v({type:r,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(t,a){if(t&1&&N(be,5),t&2){let u;D(u=R())&&(a._determinateCircle=u.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(t,a){t&2&&(_("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",a.mode==="determinate"?a.value:null)("mode",a.mode),A("mat-"+a.color),y("width",a.diameter,"px")("height",a.diameter,"px")("--mat-progress-spinner-size",a.diameter+"px")("--mat-progress-spinner-active-indicator-width",a.diameter+"px"),W("_mat-animation-noopable",a._noopAnimations)("mdc-circular-progress--indeterminate",a.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",C],diameter:[2,"diameter","diameter",C],strokeWidth:[2,"strokeWidth","strokeWidth",C]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(t,a){if(t&1&&(O(0,ye,2,8,"ng-template",null,0,F),i(2,"div",2,1),x(),i(4,"svg",3),g(5,"circle",4),n()(),k(),i(6,"div",5)(7,"div",6)(8,"div",7),b(9,8),n(),i(10,"div",9),b(11,8),n(),i(12,"div",10),b(13,8),n()()()),t&2){let u=I(1);c(4),_("viewBox",a._viewBox()),c(),y("stroke-dasharray",a._strokeCircumference(),"px")("stroke-dashoffset",a._strokeDashOffset(),"px")("stroke-width",a._circleStrokeWidth(),"%"),_("r",a._circleRadius()),c(4),p("ngTemplateOutlet",u),c(2),p("ngTemplateOutlet",u),c(2),p("ngTemplateOutlet",u)}},dependencies:[z],styles:[`.mat-mdc-progress-spinner {
  --mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--mat-progress-spinner-active-indicator-color, var(--mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2,changeDetection:0})}return r})();var fe=(()=>{class r{static \u0275fac=function(t){return new(t||r)};static \u0275mod=T({type:r});static \u0275inj=S({imports:[Y]})}return r})();function we(r,o){r&1&&(i(0,"mat-error"),s(1,"E-mail \xE9 obrigat\xF3rio."),n())}function Se(r,o){r&1&&(i(0,"mat-error"),s(1,"Informe um e-mail v\xE1lido."),n())}function Ee(r,o){if(r&1&&l(0,we,2,0,"mat-error")(1,Se,2,0,"mat-error"),r&2){let e=f();d(e.form.controls.email.hasError("required")?0:e.form.controls.email.hasError("email")?1:-1)}}function ke(r,o){r&1&&(i(0,"mat-error"),s(1,"Senha \xE9 obrigat\xF3ria."),n())}function Pe(r,o){r&1&&(i(0,"mat-error"),s(1,"M\xEDnimo de 3 caracteres."),n())}function Te(r,o){if(r&1&&l(0,ke,2,0,"mat-error")(1,Pe,2,0,"mat-error"),r&2){let e=f();d(e.form.controls.password.hasError("required")?0:e.form.controls.password.hasError("minlength")?1:-1)}}function Oe(r,o){if(r&1&&(i(0,"p",8),s(1),n()),r&2){let e=f();c(),B(e.error())}}function Le(r,o){r&1&&g(0,"mat-spinner",12)}var he=class r{loading=M(!1);error=M(null);fb=m(Z);auth=m(G);router=m(V);form=this.fb.nonNullable.group({email:["",[h.required,h.email]],password:["",[h.required,h.minLength(3)]]});showEmailErrors(){let o=this.form.controls.email;return o.invalid&&(o.touched||o.dirty)}showPasswordErrors(){let o=this.form.controls.password;return o.invalid&&(o.touched||o.dirty)}onSubmit(){this.form.invalid||(this.loading.set(!0),this.error.set(null),this.auth.login(this.form.getRawValue()).subscribe({next:()=>w(this,null,function*(){this.loading.set(!1),yield this.router.navigateByUrl("/customers")}),error:()=>{this.loading.set(!1),this.error.set("Credenciais inv\xE1lidas ou servidor indispon\xEDvel.")}}))}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=v({type:r,selectors:[["app-login-page"]],decls:34,vars:6,consts:[[1,"login-page"],["appearance","outlined",1,"login-card","app-feature-panel"],[1,"login-card-head"],[1,"login-card-body"],[1,"login-form","app-feature-form-stack",3,"ngSubmit","formGroup"],["appearance","outline"],["matInput","","type","email","formControlName","email","autocomplete","email"],["matInput","","type","password","formControlName","password","autocomplete","current-password"],["role","alert",1,"login-inline-error","app-inline-alert-error","mat-body-medium"],[1,"login-actions"],[1,"login-actions__primary"],["mat-flat-button","","color","primary","type","submit",3,"disabled"],["diameter","28","aria-label","Carregando"],["mat-stroked-button","","routerLink","/customers","type","button"],[1,"login-dev-hint","mat-body-small","app-text-muted"]],template:function(e,t){e&1&&(i(0,"div",0)(1,"mat-card",1)(2,"mat-card-header",2)(3,"mat-card-title"),s(4,"Login"),n(),i(5,"mat-card-subtitle"),s(6,"Acesse com sua conta"),n()(),i(7,"mat-card-content",3)(8,"form",4),L("ngSubmit",function(){return t.onSubmit()}),i(9,"mat-form-field",5)(10,"mat-label"),s(11,"E-mail"),n(),g(12,"input",6),l(13,Ee,2,1),n(),i(14,"mat-form-field",5)(15,"mat-label"),s(16,"Senha"),n(),g(17,"input",7),l(18,Te,2,1),n(),l(19,Oe,2,1,"p",8),i(20,"div",9)(21,"div",10)(22,"button",11),s(23," Entrar "),n(),l(24,Le,1,0,"mat-spinner",12),n(),i(25,"a",13),s(26,"Ir para Clientes"),n()()(),i(27,"p",14),s(28," Em dev, existe um seed default: "),i(29,"code"),s(30,"admin@example.com"),n(),s(31," / "),i(32,"code"),s(33,"admin123"),n()()()()()),e&2&&(c(8),p("formGroup",t.form),c(5),d(t.showEmailErrors()?13:-1),c(5),d(t.showPasswordErrors()?18:-1),c(),d(t.error()?19:-1),c(3),p("disabled",t.form.invalid||t.loading()),c(2),d(t.loading()?24:-1))},dependencies:[J,U,q,H,Q,K,$,j,se,te,ne,oe,ae,ie,re,ee,de,le,ce,me,ge,pe,fe,_e],styles:[".login-page[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:flex-start;min-height:60vh;padding:var(--app-space-6) var(--app-space-4) var(--app-space-7)}.login-card[_ngcontent-%COMP%]{width:100%;max-width:26.25rem}.login-card-head[_ngcontent-%COMP%]{display:block;padding-bottom:0;margin-bottom:var(--app-space-3)}.login-card-body[_ngcontent-%COMP%]{padding-top:0!important}.login-form[_ngcontent-%COMP%]{gap:var(--app-space-3)}.login-inline-error[_ngcontent-%COMP%]{margin:0}.login-actions[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:var(--app-space-3);margin-top:var(--app-space-2)}.login-actions__primary[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:var(--app-space-3);min-height:40px}.login-actions[_ngcontent-%COMP%] > .mat-mdc-outlined-button[_ngcontent-%COMP%]{flex-shrink:0}.login-dev-hint[_ngcontent-%COMP%]{margin-top:var(--app-space-4);margin-bottom:0;padding-top:var(--app-space-3);border-top:1px solid var(--mat-sys-outline-variant);line-height:1.55}.login-dev-hint[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{padding:var(--app-space-1) var(--app-space-2);border-radius:var(--app-radius-sm);background-color:var(--mat-sys-surface-container-highest);color:var(--mat-sys-on-surface-variant);font-size:.875rem}"]})};export{he as LoginPage};
