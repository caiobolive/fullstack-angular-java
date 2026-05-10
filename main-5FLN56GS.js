import{a as ut,b as h,c as ht,d as ft,e as gt,f as bt}from"./chunk-SNX2HUX2.js";import{a as st,b as ct,d as yt,e as m,f as xt,r as wt,s as _t,t as Ct}from"./chunk-HOJ3HH6A.js";import{n as mt,p as dt,q as pt,r as vt}from"./chunk-VSS7XWMK.js";import{$ as U,Aa as g,Ab as at,Bb as u,D as F,Ea as Y,Fa as Z,Gb as R,H as I,Ha as x,Ia as W,K as O,Ma as b,N as P,Na as X,Oa as J,Q as N,R as L,T as j,Tb as lt,V as i,W as z,Ya as w,Za as _,_ as B,ab as C,bb as d,ca as H,cb as c,da as f,db as A,ha as V,ib as K,la as G,m as p,mb as q,nb as tt,ob as et,p as S,pb as M,qb as ot,ra as Q,sb as nt,tb as rt,wa as $,y as D,zb as it}from"./chunk-R5P5E7S3.js";var It="@",Ot=(()=>{class n{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=i(H);loadingSchedulerFn=i(Pt,{optional:!0});_engine;constructor(t,o,r,a,l){this.doc=t,this.delegate=o,this.zone=r,this.animationType=a,this.moduleImpl=l}ngOnDestroy(){this._engine?.flush()}loadImpl(){let t=()=>this.moduleImpl??import("./chunk-MKGZDFWK.js").then(r=>r),o;return this.loadingSchedulerFn?o=this.loadingSchedulerFn(t):o=t(),o.catch(r=>{throw new P(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:a})=>{this._engine=r(this.animationType,this.doc);let l=new a(this.delegate,this._engine,this.zone);return this.delegate=l,l})}createRenderer(t,o){let r=this.delegate.createRenderer(t,o);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let a=new T(r);return o?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(l=>{let s=l.createRenderer(t,o);a.use(s),this.scheduler??=this.injector.get(G,null,{optional:!0}),this.scheduler?.notify(10)}).catch(l=>{a.use(r)}),a}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(t){this._engine?.flush(),this.delegate.componentReplaced?.(t)}static \u0275fac=function(o){W()};static \u0275prov=N({token:n,factory:n.\u0275fac})}return n})(),T=class{delegate;replay=[];\u0275type=1;constructor(e){this.delegate=e}use(e){if(this.delegate=e,this.replay!==null){for(let t of this.replay)t(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,t){this.delegate.appendChild(e,t)}insertBefore(e,t,o,r){this.delegate.insertBefore(e,t,o,r)}removeChild(e,t,o,r){this.delegate.removeChild(e,t,o,r)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,o,r){this.delegate.setAttribute(e,t,o,r)}removeAttribute(e,t,o){this.delegate.removeAttribute(e,t,o)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,o,r){this.delegate.setStyle(e,t,o,r)}removeStyle(e,t,o){this.delegate.removeStyle(e,t,o)}setProperty(e,t,o){this.shouldReplay(t)&&this.replay.push(r=>r.setProperty(e,t,o)),this.delegate.setProperty(e,t,o)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,o,r){return this.shouldReplay(t)&&this.replay.push(a=>a.listen(e,t,o,r)),this.delegate.listen(e,t,o,r)}shouldReplay(e){return this.replay!==null&&e.startsWith(It)}},Pt=new j("");function Mt(n="animations"){return Y("NgAsyncAnimations"),z([{provide:Z,useFactory:()=>new Ot(i(f),i(st),i(V),n)},{provide:$,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}var k=()=>{let n=i(m),e=i(h);return n.isAuthenticated()?!0:e.parseUrl("/login")};var Rt=n=>()=>{let e=i(m),t=i(h);if(!e.isAuthenticated())return t.parseUrl("/login");let o=e.getRoles();return n.some(a=>o.includes(a))?!0:t.parseUrl("/customers")};var Tt=[{path:"",pathMatch:"full",redirectTo:"customers"},{path:"login",loadComponent:()=>import("./chunk-5EKYXDZE.js").then(n=>n.LoginPage)},{path:"clients",pathMatch:"full",redirectTo:"customers"},{path:"customers",canActivate:[k],loadComponent:()=>import("./chunk-EIBLBOQG.js").then(n=>n.CustomersPage)},{path:"users",canActivate:[k,Rt(["ROLE_ADMIN"])],loadComponent:()=>import("./chunk-CSMFTE2J.js").then(n=>n.UsersPage)},{path:"**",redirectTo:"customers"}];var v=null,kt=(n,e)=>{let t=i(m),o=i(yt),r=t.getAccessToken(),a=n.url.includes("/api/v1/auth/"),l=r&&!a?n.clone({setHeaders:{Authorization:`Bearer ${r}`}}):n;return e(l).pipe(D(s=>s instanceof mt?s.status!==401?p(()=>s):a?p(()=>s):o.getRefreshToken()?(v||(v=t.refresh().pipe(S(()=>t.getAccessToken()??""),F(()=>{v=null}),I({bufferSize:1,refCount:!1}))),v.pipe(O(E=>E?e(n.clone({setHeaders:{Authorization:`Bearer ${E}`}})):(t.logout(),p(()=>s))))):(t.logout(),p(()=>s)):p(()=>s)))};var Et={providers:[lt({eventCoalescing:!0}),Mt(),gt(Tt,...vt.production?[bt()]:[]),dt(pt([kt]))]};var Nt=["*",[["mat-toolbar-row"]]],Lt=["*","mat-toolbar-row"],jt=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275dir=J({type:n,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return n})(),St=(()=>{class n{_elementRef=i(Q);_platform=i(xt);_document=i(f);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=b({type:n,selectors:[["mat-toolbar"]],contentQueries:function(o,r,a){if(o&1&&ot(a,jt,5),o&2){let l;nt(l=rt())&&(r._toolbarRows=l)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(o,r){o&2&&(at(r.color?"mat-"+r.color:""),it("mat-toolbar-multiple-rows",r._toolbarRows.length>0)("mat-toolbar-single-row",r._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:Lt,decls:2,vars:0,template:function(o,r){o&1&&(et(Nt),M(0),M(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var Dt=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=X({type:n});static \u0275inj=L({imports:[wt]})}return n})();var Ft=()=>({exact:!1});function Bt(n,e){n&1&&(d(0,"a",7),u(1," Usu\xE1rios "),c()),n&2&&C("routerLinkActiveOptions",R(1,Ft))}function Ut(n,e){n&1&&(d(0,"a",8),u(1,"Login"),c())}function Ht(n,e){if(n&1){let t=K();d(0,"button",12),q("click",function(){B(t);let r=tt();return U(r.logout())}),u(1,"Sair"),c()}}var y=class n{constructor(e,t){this.auth=e;this.router=t}logout(){this.auth.logout(),this.router.navigateByUrl("/login")}static \u0275fac=function(t){return new(t||n)(x(m),x(h))};static \u0275cmp=b({type:n,selectors:[["app-root"]],decls:15,vars:4,consts:[[1,"app-shell"],["color","primary",1,"topbar"],["mat-button","","routerLink","/customers","aria-label","In\xEDcio",1,"brand-link"],[1,"brand","brand-text"],[1,"toolbar-spacer"],["aria-label","Principal",1,"nav"],["mat-button","","routerLink","/customers","routerLinkActive","nav-active",3,"routerLinkActiveOptions"],["mat-button","","routerLink","/users","routerLinkActive","nav-active",3,"routerLinkActiveOptions"],["mat-button","","routerLink","/login","routerLinkActive","nav-active"],["mat-button","","type","button"],[1,"content"],[1,"content-inner"],["mat-button","","type","button",3,"click"]],template:function(t,o){t&1&&(d(0,"div",0)(1,"mat-toolbar",1)(2,"a",2)(3,"span",3),u(4,"Fullstack Study"),c()(),A(5,"span",4),d(6,"nav",5)(7,"a",6),u(8," Clientes "),c(),w(9,Bt,2,2,"a",7),w(10,Ut,2,0,"a",8)(11,Ht,2,0,"button",9),c()(),d(12,"main",10)(13,"div",11),A(14,"router-outlet"),c()()()),t&2&&(g(7),C("routerLinkActiveOptions",R(3,Ft)),g(2),_(o.auth.isAuthenticated()&&o.auth.getRoles().includes("ROLE_ADMIN")?9:-1),g(),_(o.auth.isAuthenticated()?11:10))},dependencies:[ut,ht,ft,Dt,St,Ct,_t],styles:[".app-shell[_ngcontent-%COMP%]{min-height:100dvh;display:flex;flex-direction:column}.topbar[_ngcontent-%COMP%]{position:sticky;top:0;z-index:16;flex-wrap:wrap;row-gap:8px}.toolbar-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.brand-link[_ngcontent-%COMP%]{margin-inline-start:-8px;text-decoration:none}.brand-text[_ngcontent-%COMP%]{font-weight:700;letter-spacing:-.02em}.nav[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px;flex-wrap:wrap}.nav-active[_ngcontent-%COMP%]{background-color:color-mix(in srgb,var(--mat-sys-on-primary) 18%,transparent);border-radius:999px}.content[_ngcontent-%COMP%]{flex:1;padding:16px 0 40px}.content-inner[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;padding:0 16px;width:100%}"]})};ct(y,Et).catch(n=>console.error(n));
