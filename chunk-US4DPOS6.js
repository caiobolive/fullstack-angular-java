import{b as V,c as G}from"./chunk-2N6WWYMV.js";import{b as j}from"./chunk-TFFXPBRW.js";import{A as ge,b as q,d as h,e as H,f as Q,h as U,j as $,k as K,l as Z,m as J,n as te,o as ie,p as ne,q as ae,r as oe,s as se,t as ce,u as me,v as le,x as de,y as pe,z as ue}from"./chunk-MIMUILMG.js";import{A as X,I as Y,K as ee,L as re,e as z}from"./chunk-NFBY5RRH.js";import{Cb as N,Db as D,Eb as R,Ib as A,Jb as y,Kb as I,La as c,Lb as W,Mb as s,Nb as B,S as M,U as E,Vb as F,W as m,Xa as v,Ya as T,ab as L,ba as x,ca as k,d as S,gb as _,hb as l,hc as C,ib as d,la as w,lb as p,mb as i,nb as n,ob as u,sa as P,sb as b,xb as O,yb as f}from"./chunk-KLEYLI6E.js";var ye=["determinateSpinner"];function Ce(r,o){if(r&1&&(x(),i(0,"svg",11),u(1,"circle",12),n()),r&2){let e=f();_("viewBox",e._viewBox()),c(),y("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeCircumference()/2,"px")("stroke-width",e._circleStrokeWidth(),"%"),_("r",e._circleRadius())}}var xe=new E("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:_e})}),_e=100,we=10,fe=(()=>{class r{_elementRef=m(P);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";_determinateCircle;constructor(){let e=m(xe),t=X(),a=this._elementRef.nativeElement;this._noopAnimations=t==="di-disabled"&&!!e&&!e._forceAnimations,this.mode=a.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&t==="reduced-motion"&&a.classList.add("mat-progress-spinner-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode==="determinate"?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=_e;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-we)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=v({type:r,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(t,a){if(t&1&&N(ye,5),t&2){let g;D(g=R())&&(a._determinateCircle=g.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(t,a){t&2&&(_("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",a.mode==="determinate"?a.value:null)("mode",a.mode),W("mat-"+a.color),y("width",a.diameter,"px")("height",a.diameter,"px")("--mat-progress-spinner-size",a.diameter+"px")("--mat-progress-spinner-active-indicator-width",a.diameter+"px"),I("_mat-animation-noopable",a._noopAnimations)("mdc-circular-progress--indeterminate",a.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",C],diameter:[2,"diameter","diameter",C],strokeWidth:[2,"strokeWidth","strokeWidth",C]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(t,a){if(t&1&&(L(0,Ce,2,8,"ng-template",null,0,F),i(2,"div",2,1),x(),i(4,"svg",3),u(5,"circle",4),n()(),k(),i(6,"div",5)(7,"div",6)(8,"div",7),b(9,8),n(),i(10,"div",9),b(11,8),n(),i(12,"div",10),b(13,8),n()()()),t&2){let g=A(1);c(4),_("viewBox",a._viewBox()),c(),y("stroke-dasharray",a._strokeCircumference(),"px")("stroke-dashoffset",a._strokeDashOffset(),"px")("stroke-width",a._circleStrokeWidth(),"%"),_("r",a._circleRadius()),c(4),p("ngTemplateOutlet",g),c(2),p("ngTemplateOutlet",g),c(2),p("ngTemplateOutlet",g)}},dependencies:[z],styles:[`.mat-mdc-progress-spinner {
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
`],encapsulation:2,changeDetection:0})}return r})();var he=(()=>{class r{static \u0275fac=function(t){return new(t||r)};static \u0275mod=T({type:r});static \u0275inj=M({imports:[Y]})}return r})();function Me(r,o){r&1&&(i(0,"mat-error"),s(1,"E-mail \xE9 obrigat\xF3rio."),n())}function Ee(r,o){r&1&&(i(0,"mat-error"),s(1,"Informe um e-mail v\xE1lido."),n())}function ke(r,o){if(r&1&&l(0,Me,2,0,"mat-error")(1,Ee,2,0,"mat-error"),r&2){let e=f();d(e.form.controls.email.hasError("required")?0:e.form.controls.email.hasError("email")?1:-1)}}function Pe(r,o){r&1&&(i(0,"mat-error"),s(1,"Senha \xE9 obrigat\xF3ria."),n())}function Te(r,o){r&1&&(i(0,"mat-error"),s(1,"M\xEDnimo de 3 caracteres."),n())}function Le(r,o){if(r&1&&l(0,Pe,2,0,"mat-error")(1,Te,2,0,"mat-error"),r&2){let e=f();d(e.form.controls.password.hasError("required")?0:e.form.controls.password.hasError("minlength")?1:-1)}}function Oe(r,o){if(r&1&&(i(0,"p",6),s(1),n()),r&2){let e=f();c(),B(e.error())}}function Ne(r,o){r&1&&u(0,"mat-spinner",9)}var ve=class r{loading=w(!1);error=w(null);fb=m(Z);auth=m(j);router=m(V);form=this.fb.nonNullable.group({email:["",[h.required,h.email]],password:["",[h.required,h.minLength(3)]]});showEmailErrors(){let o=this.form.controls.email;return o.invalid&&(o.touched||o.dirty)}showPasswordErrors(){let o=this.form.controls.password;return o.invalid&&(o.touched||o.dirty)}onSubmit(){this.form.invalid||(this.loading.set(!0),this.error.set(null),this.auth.login(this.form.getRawValue()).subscribe({next:()=>S(this,null,function*(){this.loading.set(!1),yield this.router.navigateByUrl("/customers")}),error:()=>{this.loading.set(!1),this.error.set("Credenciais inv\xE1lidas ou servidor indispon\xEDvel.")}}))}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=v({type:r,selectors:[["app-login-page"]],decls:34,vars:6,consts:[[1,"login-page"],["appearance","outlined",1,"login-card"],[1,"login-form",3,"ngSubmit","formGroup"],["appearance","outline"],["matInput","","type","email","formControlName","email","autocomplete","email"],["matInput","","type","password","formControlName","password","autocomplete","current-password"],["role","alert",1,"server-error","mat-body-medium"],[1,"submit-row"],["mat-raised-button","","color","primary","type","submit",3,"disabled"],["diameter","28","aria-label","Carregando"],[1,"hint","mat-body-small"],["align","end"],["mat-button","","routerLink","/customers"]],template:function(e,t){e&1&&(i(0,"div",0)(1,"mat-card",1)(2,"mat-card-header")(3,"mat-card-title"),s(4,"Login"),n(),i(5,"mat-card-subtitle"),s(6,"Acesse com sua conta"),n()(),i(7,"mat-card-content")(8,"form",2),O("ngSubmit",function(){return t.onSubmit()}),i(9,"mat-form-field",3)(10,"mat-label"),s(11,"E-mail"),n(),u(12,"input",4),l(13,ke,2,1),n(),i(14,"mat-form-field",3)(15,"mat-label"),s(16,"Senha"),n(),u(17,"input",5),l(18,Le,2,1),n(),l(19,Oe,2,1,"p",6),i(20,"div",7)(21,"button",8),s(22," Entrar "),n(),l(23,Ne,1,0,"mat-spinner",9),n()(),i(24,"p",10),s(25," Em dev, existe um seed default: "),i(26,"code"),s(27,"admin@example.com"),n(),s(28," / "),i(29,"code"),s(30,"admin123"),n()()(),i(31,"mat-card-actions",11)(32,"a",12),s(33,"Ir para Clientes"),n()()()()),e&2&&(c(8),p("formGroup",t.form),c(5),d(t.showEmailErrors()?13:-1),c(5),d(t.showPasswordErrors()?18:-1),c(),d(t.error()?19:-1),c(2),p("disabled",t.form.invalid||t.loading()),c(2),d(t.loading()?23:-1))},dependencies:[J,U,q,H,Q,K,$,G,ce,te,oe,ne,se,ae,ie,re,ee,pe,de,me,le,ge,ue,he,fe],styles:[".login-page[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:flex-start;padding:32px 16px 48px}.login-card[_ngcontent-%COMP%]{width:100%;max-width:420px}.login-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.login-form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}.submit-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:16px;margin-top:12px}.server-error[_ngcontent-%COMP%]{margin:4px 0 0;color:var(--mat-sys-error)}.hint[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:0;color:var(--mat-sys-on-surface-variant)}.hint[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{padding:2px 6px;border-radius:6px;background-color:var(--mat-sys-surface-container-highest);font-size:.85em}"]})};export{ve as LoginPage};
