import{b as V,c as j}from"./chunk-4QLVQ3ZO.js";import{b as G}from"./chunk-TWGRT6EK.js";import{a as ne,b as ie,c as ae,d as oe,e as se,f as ce,g as me,h as le,l as de,m as pe,p as ge,q as ue}from"./chunk-FXFIXP4T.js";import{Ab as W,Ac as $,Bb as o,Cb as B,Cc as K,Dc as Z,Ec as J,Fc as X,Ja as v,Ka as T,Nb as F,Oa as O,V as M,Wa as _,X as E,Xa as m,Ya as l,Z as d,_b as C,ab as p,bb as t,cb as n,d as w,da as x,db as g,ea as k,ec as z,hb as y,jd as Y,kb as L,mb as f,na as S,pc as q,qb as D,rb as N,sa as P,sb as R,sc as H,td as ee,uc as h,vd as re,wb as I,wc as Q,xa as c,xb as b,xc as U,xd as te,yb as A}from"./chunk-LJQY5XNO.js";var be=["determinateSpinner"];function Ce(r,s){if(r&1&&(x(),t(0,"svg",11),g(1,"circle",12),n()),r&2){let e=f();_("viewBox",e._viewBox()),c(),b("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeCircumference()/2,"px")("stroke-width",e._circleStrokeWidth(),"%"),_("r",e._circleRadius())}}var xe=new E("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:_e})}),_e=100,Se=10,fe=(()=>{class r{_elementRef=d(P);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";_determinateCircle;constructor(){let e=d(xe),i=Y(),a=this._elementRef.nativeElement;this._noopAnimations=i==="di-disabled"&&!!e&&!e._forceAnimations,this.mode=a.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&i==="reduced-motion"&&a.classList.add("mat-progress-spinner-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode==="determinate"?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=_e;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-Se)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(i){return new(i||r)};static \u0275cmp=v({type:r,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(i,a){if(i&1&&D(be,5),i&2){let u;N(u=R())&&(a._determinateCircle=u.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(i,a){i&2&&(_("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",a.mode==="determinate"?a.value:null)("mode",a.mode),W("mat-"+a.color),b("width",a.diameter,"px")("height",a.diameter,"px")("--mat-progress-spinner-size",a.diameter+"px")("--mat-progress-spinner-active-indicator-width",a.diameter+"px"),A("_mat-animation-noopable",a._noopAnimations)("mdc-circular-progress--indeterminate",a.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",C],diameter:[2,"diameter","diameter",C],strokeWidth:[2,"strokeWidth","strokeWidth",C]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(i,a){if(i&1&&(O(0,Ce,2,8,"ng-template",null,0,F),t(2,"div",2,1),x(),t(4,"svg",3),g(5,"circle",4),n()(),k(),t(6,"div",5)(7,"div",6)(8,"div",7),y(9,8),n(),t(10,"div",9),y(11,8),n(),t(12,"div",10),y(13,8),n()()()),i&2){let u=I(1);c(4),_("viewBox",a._viewBox()),c(),b("stroke-dasharray",a._strokeCircumference(),"px")("stroke-dashoffset",a._strokeDashOffset(),"px")("stroke-width",a._circleStrokeWidth(),"%"),_("r",a._circleRadius()),c(4),p("ngTemplateOutlet",u),c(2),p("ngTemplateOutlet",u),c(2),p("ngTemplateOutlet",u)}},dependencies:[z],styles:[`.mat-mdc-progress-spinner {
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
`],encapsulation:2,changeDetection:0})}return r})();var he=(()=>{class r{static \u0275fac=function(i){return new(i||r)};static \u0275mod=T({type:r});static \u0275inj=M({imports:[ee]})}return r})();function Me(r,s){r&1&&(t(0,"p",4)(1,"strong"),o(2,"API no Render:"),n(),o(3," ap\xF3s um per\xEDodo sem tr\xE1fego, a primeira requisi\xE7\xE3o pode levar cerca de "),t(4,"strong"),o(5,"1 a 2 minutos"),n(),o(6," a responder (aquecimento do servi\xE7o). Se o login demorar, aguarde e tente de novo; as chamadas seguintes costumam ser r\xE1pidas. "),n())}function Ee(r,s){r&1&&(t(0,"mat-error"),o(1,"E-mail \xE9 obrigat\xF3rio."),n())}function ke(r,s){r&1&&(t(0,"mat-error"),o(1,"Informe um e-mail v\xE1lido."),n())}function Pe(r,s){if(r&1&&m(0,Ee,2,0,"mat-error")(1,ke,2,0,"mat-error"),r&2){let e=f();l(e.form.controls.email.hasError("required")?0:e.form.controls.email.hasError("email")?1:-1)}}function Te(r,s){r&1&&(t(0,"mat-error"),o(1,"Senha \xE9 obrigat\xF3ria."),n())}function Oe(r,s){r&1&&(t(0,"mat-error"),o(1,"M\xEDnimo de 3 caracteres."),n())}function Le(r,s){if(r&1&&m(0,Te,2,0,"mat-error")(1,Oe,2,0,"mat-error"),r&2){let e=f();l(e.form.controls.password.hasError("required")?0:e.form.controls.password.hasError("minlength")?1:-1)}}function De(r,s){if(r&1&&(t(0,"p",9),o(1),n()),r&2){let e=f();c(),B(e.error())}}function Ne(r,s){r&1&&g(0,"mat-spinner",13)}var ve=class r{environment=q;loading=S(!1);error=S(null);fb=d(J);auth=d(G);router=d(V);form=this.fb.nonNullable.group({email:["",[h.required,h.email]],password:["",[h.required,h.minLength(3)]]});showEmailErrors(){let s=this.form.controls.email;return s.invalid&&(s.touched||s.dirty)}showPasswordErrors(){let s=this.form.controls.password;return s.invalid&&(s.touched||s.dirty)}onSubmit(){this.form.invalid||(this.loading.set(!0),this.error.set(null),this.auth.login(this.form.getRawValue()).subscribe({next:()=>w(this,null,function*(){this.loading.set(!1),yield this.router.navigateByUrl("/customers")}),error:()=>{this.loading.set(!1),this.error.set("Credenciais inv\xE1lidas ou servidor indispon\xEDvel.")}}))}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=v({type:r,selectors:[["app-login-page"]],decls:35,vars:7,consts:[[1,"login-page"],["appearance","outlined",1,"login-card","app-feature-panel"],[1,"login-card-head"],[1,"login-card-body"],["role","status",1,"login-render-warmup","mat-body-small"],[1,"login-form","app-feature-form-stack",3,"ngSubmit","formGroup"],["appearance","outline"],["matInput","","type","email","formControlName","email","autocomplete","email"],["matInput","","type","password","formControlName","password","autocomplete","current-password"],["role","alert",1,"login-inline-error","app-inline-alert-error","mat-body-medium"],[1,"login-actions"],[1,"login-actions__primary"],["mat-flat-button","","color","primary","type","submit",3,"disabled"],["diameter","28","aria-label","Carregando"],["mat-stroked-button","","routerLink","/customers","type","button"],[1,"login-dev-hint","mat-body-small","app-text-muted"]],template:function(e,i){e&1&&(t(0,"div",0)(1,"mat-card",1)(2,"mat-card-header",2)(3,"mat-card-title"),o(4,"Login"),n(),t(5,"mat-card-subtitle"),o(6,"Acesse com sua conta"),n()(),t(7,"mat-card-content",3),m(8,Me,7,0,"p",4),t(9,"form",5),L("ngSubmit",function(){return i.onSubmit()}),t(10,"mat-form-field",6)(11,"mat-label"),o(12,"E-mail"),n(),g(13,"input",7),m(14,Pe,2,1),n(),t(15,"mat-form-field",6)(16,"mat-label"),o(17,"Senha"),n(),g(18,"input",8),m(19,Le,2,1),n(),m(20,De,2,1,"p",9),t(21,"div",10)(22,"div",11)(23,"button",12),o(24," Entrar "),n(),m(25,Ne,1,0,"mat-spinner",13),n(),t(26,"a",14),o(27,"Ir para Clientes"),n()()(),t(28,"p",15),o(29," Em dev, existe um seed default: "),t(30,"code"),o(31,"admin@example.com"),n(),o(32," / "),t(33,"code"),o(34,"admin123"),n()()()()()),e&2&&(c(8),l(i.environment.production?8:-1),c(),p("formGroup",i.form),c(5),l(i.showEmailErrors()?14:-1),c(5),l(i.showPasswordErrors()?19:-1),c(),l(i.error()?20:-1),c(3),p("disabled",i.form.invalid||i.loading()),c(2),l(i.loading()?25:-1))},dependencies:[X,$,H,Q,U,Z,K,j,ce,ne,ae,se,oe,ie,te,re,pe,de,me,le,ue,ge,he,fe],styles:[".login-page[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:flex-start;min-height:60vh;padding:var(--app-space-6) var(--app-space-4) var(--app-space-7)}.login-card[_ngcontent-%COMP%]{width:100%;max-width:26.25rem}.login-card-head[_ngcontent-%COMP%]{display:block;padding-bottom:0;margin-bottom:var(--app-space-3)}.login-card-body[_ngcontent-%COMP%]{padding-top:0!important}.login-render-warmup[_ngcontent-%COMP%]{margin:0 0 var(--app-space-3);padding:var(--app-space-3);border-radius:var(--app-radius-sm);border:1px solid color-mix(in srgb,var(--mat-sys-primary) 28%,var(--mat-sys-outline-variant));background-color:color-mix(in srgb,var(--mat-sys-primary) 8%,var(--mat-sys-surface-container-low));color:var(--mat-sys-on-surface);line-height:1.5}.login-form[_ngcontent-%COMP%]{gap:var(--app-space-3)}.login-inline-error[_ngcontent-%COMP%]{margin:0}.login-actions[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:var(--app-space-3);margin-top:var(--app-space-2)}.login-actions__primary[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:var(--app-space-3);min-height:40px}.login-actions[_ngcontent-%COMP%] > .mat-mdc-outlined-button[_ngcontent-%COMP%]{flex-shrink:0}.login-dev-hint[_ngcontent-%COMP%]{margin-top:var(--app-space-4);margin-bottom:0;padding-top:var(--app-space-3);border-top:1px solid var(--mat-sys-outline-variant);line-height:1.55}.login-dev-hint[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{padding:var(--app-space-1) var(--app-space-2);border-radius:var(--app-radius-sm);background-color:var(--mat-sys-surface-container-highest);color:var(--mat-sys-on-surface-variant);font-size:.875rem}"]})};export{ve as LoginPage};
