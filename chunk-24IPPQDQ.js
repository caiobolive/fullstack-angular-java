import{A as ce,a as gi,c as Yi,d as Xi,e as Ji,f as ut,g as oe,h as Lt,i as Ae,j as tn,k as en,l as Rt,m as zt,n as re,o as nn,p as an,q as on,r as rn,t as se,u as sn,v as ln,w as Pe,x as Fe,y as Ct,z as le}from"./chunk-GB4MF26I.js";import{A as Wi,B as ne,C as ae,D as Ui,E as Ki,F as $i,G as Zi,b as _i,d as $,e as fi,f as bi,g as vi,h as yi,i as xi,j as wi,k as ki,l as Ci,m as $t,n as Di,o as Mi,p as ji,r as Vi,v as Ni,w as Gi,x as Hi,y as Qi,z as qi}from"./chunk-PM5MO2RL.js";import{$a as Tt,$c as Li,Aa as ai,Ab as li,Ac as Yt,Bb as m,Bc as Oi,C as Gt,Ca as _t,Cb as V,D as q,Db as ot,E as Se,Eb as Ee,F as ei,Fb as ci,Fc as Ii,Gc as Ei,Hc as Xt,Ic as Jt,Ja as _,Jb as J,Jc as Ti,Ka as T,Kc as Ai,La as L,Lb as Ut,Lc as Y,M as at,Ma as oi,Mb as Kt,Mc as Pi,N as Oe,Na as R,O as I,Oa as ft,Oc as tt,Pc as Fi,Qb as di,Qc as Te,Ra as ri,Sb as mi,U as rt,V as E,Va as si,Wa as w,X as D,Xa as f,Y as ii,Ya as b,Yb as K,Yc as et,Z as r,Za as qt,Zb as N,_a as Et,_b as dt,_c as Z,a as it,ab as u,ad as Ri,b as Me,ba as z,bb as s,bd as zi,ca as B,cb as l,cd as te,da as st,db as S,dd as ee,e as Je,ea as Ie,ed as bt,fa as A,fd as G,g as ti,ga as Ht,gc as pi,gd as ie,h as v,ha as Qt,hd as kt,ib as U,id as Bi,j as vt,ja as P,jb as At,jc as hi,jd as ht,ka as lt,kb as g,lc as ui,mb as p,na as M,nb as j,ob as k,pa as Ot,pb as ct,q as yt,qa as W,qb as X,rb as y,rc as wt,sa as F,sb as x,ta as ni,uc as Ft,v as xt,vc as Si,wb as Pt,wc as mt,x as nt,xa as d,xb as Wt,xc as pt,y as Q,yb as C,za as It,zc as Zt}from"./chunk-UTGXW3XM.js";function cn(n){n||(n=r(Qt));let a=new ti(t=>{if(n.destroyed){t.next();return}return n.onDestroy(t.next.bind(t))});return t=>t.pipe(I(a))}var Bt=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new v;constructor(a=!1,t,e=!0,i){this._multiple=a,this._emitChanges=e,this.compareWith=i,t&&t.length&&(a?t.forEach(o=>this._markSelected(o)):this._markSelected(t[0]),this._selectedToEmit.length=0)}select(...a){this._verifyValueAssignment(a),a.forEach(e=>this._markSelected(e));let t=this._hasQueuedChanges();return this._emitChangeEvent(),t}deselect(...a){this._verifyValueAssignment(a),a.forEach(e=>this._unmarkSelected(e));let t=this._hasQueuedChanges();return this._emitChangeEvent(),t}setSelection(...a){this._verifyValueAssignment(a);let t=this.selected,e=new Set(a.map(o=>this._getConcreteValue(o)));a.forEach(o=>this._markSelected(o)),t.filter(o=>!e.has(this._getConcreteValue(o,e))).forEach(o=>this._unmarkSelected(o));let i=this._hasQueuedChanges();return this._emitChangeEvent(),i}toggle(a){return this.isSelected(a)?this.deselect(a):this.select(a)}clear(a=!0){this._unmarkAll();let t=this._hasQueuedChanges();return a&&this._emitChangeEvent(),t}isSelected(a){return this._selection.has(this._getConcreteValue(a))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(a){this._multiple&&this.selected&&this._selected.sort(a)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(a){a=this._getConcreteValue(a),this.isSelected(a)||(this._multiple||this._unmarkAll(),this.isSelected(a)||this._selection.add(a),this._emitChanges&&this._selectedToEmit.push(a))}_unmarkSelected(a){a=this._getConcreteValue(a),this.isSelected(a)&&(this._selection.delete(a),this._emitChanges&&this._deselectedToEmit.push(a))}_unmarkAll(){this.isEmpty()||this._selection.forEach(a=>this._unmarkSelected(a))}_verifyValueAssignment(a){a.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(a,t){if(this.compareWith){t=t??this._selection;for(let e of t)if(this.compareWith(a,e))return e;return a}else return a}};var dn=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=T({type:n});static \u0275inj=E({imports:[G]})}return n})();var mn=(()=>{class n{_animationsDisabled=et();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=_({type:n,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(e,i){e&2&&C("mat-pseudo-checkbox-indeterminate",i.state==="indeterminate")("mat-pseudo-checkbox-checked",i.state==="checked")("mat-pseudo-checkbox-disabled",i.disabled)("mat-pseudo-checkbox-minimal",i.appearance==="minimal")("mat-pseudo-checkbox-full",i.appearance==="full")("_mat-animation-noopable",i._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(e,i){},styles:[`.mat-pseudo-checkbox {
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
`],encapsulation:2,changeDetection:0})}return n})();var de=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=T({type:n});static \u0275inj=E({imports:[G]})}return n})();var zn=["*"],Bn=`.mdc-list {
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
`,jn=["unscopedContent"],Vn=["text"],Nn=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],Gn=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var Hn=new D("ListOption"),Re=(()=>{class n{_elementRef=r(F);constructor(){}static \u0275fac=function(e){return new(e||n)};static \u0275dir=L({type:n,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return n})(),Qn=(()=>{class n{_elementRef=r(F);constructor(){}static \u0275fac=function(e){return new(e||n)};static \u0275dir=L({type:n,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return n})(),ze=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=L({type:n,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return n})(),pn=(()=>{class n{_listOption=r(Hn,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(e){return new(e||n)};static \u0275dir=L({type:n,hostVars:4,hostBindings:function(e,i){e&2&&C("mdc-list-item__start",i._isAlignedAtStart())("mdc-list-item__end",!i._isAlignedAtStart())}})}return n})(),qn=(()=>{class n extends pn{static \u0275fac=(()=>{let t;return function(i){return(t||(t=W(n)))(i||n)}})();static \u0275dir=L({type:n,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[R]})}return n})(),Wn=(()=>{class n extends pn{static \u0275fac=(()=>{let t;return function(i){return(t||(t=W(n)))(i||n)}})();static \u0275dir=L({type:n,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[R]})}return n})(),Un=new D("MAT_LIST_CONFIG"),Le=(()=>{class n{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=Z(t)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(t){this._disabled.set(Z(t))}_disabled=M(!1);_defaultOptions=r(Un,{optional:!0});static \u0275fac=function(e){return new(e||n)};static \u0275dir=L({type:n,hostVars:1,hostBindings:function(e,i){e&2&&w("aria-disabled",i.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return n})(),Kn=(()=>{class n{_elementRef=r(F);_ngZone=r(lt);_listBase=r(Le,{optional:!0});_platform=r(mt);_hostElement;_isButtonElement;_noopAnimations=et();_avatars;_icons;set lines(t){this._explicitLines=pt(t,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(t){this._disableRipple=Z(t)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(t){this._disabled.set(Z(t))}_disabled=M(!1);_subscriptions=new Je;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){r(Yt).load(te);let t=r(Ri,{optional:!0});this.rippleConfig=t||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new Li(this,this._ngZone,this._hostElement,this._platform,r(A)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(nt(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(t){if(!this._lines||!this._titles||!this._unscopedContent)return;t&&this._checkDomForUnscopedTextContent();let e=this._explicitLines??this._inferLinesFromContent(),i=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",e===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",e===3),this._hasUnscopedTextContent){let o=this._titles.length===0&&e===1;i.classList.toggle("mdc-list-item__primary-text",o),i.classList.toggle("mdc-list-item__secondary-text",!o)}else i.classList.remove("mdc-list-item__primary-text"),i.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let t=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(t+=1),t}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(t=>t.nodeType!==t.COMMENT_NODE).some(t=>!!(t.textContent&&t.textContent.trim()))}static \u0275fac=function(e){return new(e||n)};static \u0275dir=L({type:n,contentQueries:function(e,i,o){if(e&1&&ct(o,qn,4)(o,Wn,4),e&2){let c;y(c=x())&&(i._avatars=c),y(c=x())&&(i._icons=c)}},hostVars:4,hostBindings:function(e,i){e&2&&(w("aria-disabled",i.disabled)("disabled",i._isButtonElement&&i.disabled||null),C("mdc-list-item--disabled",i.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return n})();var hn=(()=>{class n extends Le{static \u0275fac=(()=>{let t;return function(i){return(t||(t=W(n)))(i||n)}})();static \u0275cmp=_({type:n,selectors:[["mat-list"]],hostAttrs:[1,"mat-mdc-list","mat-mdc-list-base","mdc-list"],exportAs:["matList"],features:[J([{provide:Le,useExisting:n}]),R],ngContentSelectors:zn,decls:1,vars:0,template:function(e,i){e&1&&(j(),k(0))},styles:[Bn],encapsulation:2,changeDetection:0})}return n})(),un=(()=>{class n extends Kn{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(t){this._activated=Z(t)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let t;return function(i){return(t||(t=W(n)))(i||n)}})();static \u0275cmp=_({type:n,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(e,i,o){if(e&1&&ct(o,Qn,5)(o,Re,5)(o,ze,5),e&2){let c;y(c=x())&&(i._lines=c),y(c=x())&&(i._titles=c),y(c=x())&&(i._meta=c)}},viewQuery:function(e,i){if(e&1&&X(jn,5)(Vn,5),e&2){let o;y(o=x())&&(i._unscopedContent=o.first),y(o=x())&&(i._itemText=o.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(e,i){e&2&&(w("aria-current",i._getAriaCurrent()),C("mdc-list-item--activated",i.activated)("mdc-list-item--with-leading-avatar",i._avatars.length!==0)("mdc-list-item--with-leading-icon",i._icons.length!==0)("mdc-list-item--with-trailing-meta",i._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",i._hasBothLeadingAndTrailing())("_mat-animation-noopable",i._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[R],ngContentSelectors:Gn,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(e,i){e&1&&(j(Nn),k(0),s(1,"span",1),k(2,1),k(3,2),s(4,"span",2,0),g("cdkObserveContent",function(){return i._updateItemLines(!0)}),k(6,3),l()(),k(7,4),k(8,5),S(9,"div",3))},dependencies:[Ii],encapsulation:2,changeDetection:0})}return n})();var gn=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=T({type:n});static \u0275inj=E({imports:[Ei,ie,de,G,dn]})}return n})();var Zn=["text"],Yn=[[["mat-icon"]],"*"],Xn=["mat-icon","*"];function Jn(n,a){if(n&1&&S(0,"mat-pseudo-checkbox",1),n&2){let t=p();u("disabled",t.disabled)("state",t.selected?"checked":"unchecked")}}function ta(n,a){if(n&1&&S(0,"mat-pseudo-checkbox",3),n&2){let t=p();u("disabled",t.disabled)}}function ea(n,a){if(n&1&&(s(0,"span",4),m(1),l()),n&2){let t=p();d(),ot("(",t.group.label,")")}}var je=new D("MAT_OPTION_PARENT_COMPONENT"),Ve=new D("MatOptgroup");var Be=class{source;isUserInput;constructor(a,t=!1){this.source=a,this.isUserInput=t}},Dt=(()=>{class n{_element=r(F);_changeDetectorRef=r(K);_parent=r(je,{optional:!0});group=r(Ve,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=r(tt).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(t){this._disabled.set(t)}_disabled=M(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new P;_text;_stateChanges=new v;constructor(){let t=r(Yt);t.load(te),t.load(Oi),this._signalDisableRipple=!!this._parent&&ri(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(t=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),t&&this._emitSelectionChangeEvent())}deselect(t=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),t&&this._emitSelectionChangeEvent())}focus(t,e){let i=this._getHostElement();typeof i.focus=="function"&&i.focus(e)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(t){(t.keyCode===13||t.keyCode===32)&&!Y(t)&&(this._selectViaInteraction(),t.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let t=this.viewValue;t!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=t)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(t=!1){this.onSelectionChange.emit(new Be(this,t))}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=_({type:n,selectors:[["mat-option"]],viewQuery:function(e,i){if(e&1&&X(Zn,7),e&2){let o;y(o=x())&&(i._text=o.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(e,i){e&1&&g("click",function(){return i._selectViaInteraction()})("keydown",function(c){return i._handleKeydown(c)}),e&2&&(At("id",i.id),w("aria-selected",i.selected)("aria-disabled",i.disabled.toString()),C("mdc-list-item--selected",i.selected)("mat-mdc-option-multiple",i.multiple)("mat-mdc-option-active",i.active)("mdc-list-item--disabled",i.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",N]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:Xn,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(e,i){e&1&&(j(Yn),f(0,Jn,1,2,"mat-pseudo-checkbox",1),k(1),s(2,"span",2,0),k(4,1),l(),f(5,ta,1,1,"mat-pseudo-checkbox",3),f(6,ea,2,1,"span",4),S(7,"div",5)),e&2&&(b(i.multiple?0:-1),d(5),b(!i.multiple&&i.selected&&!i.hideSingleSelectionIndicator?5:-1),d(),b(i.group&&i.group._inert?6:-1),d(),u("matRippleTrigger",i._getHostElement())("matRippleDisabled",i.disabled||i.disableRipple))},dependencies:[mn,zi],styles:[`.mat-mdc-option {
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
`],encapsulation:2,changeDetection:0})}return n})();function _n(n,a,t){if(t.length){let e=a.toArray(),i=t.toArray(),o=0;for(let c=0;c<n+1;c++)e[c].group&&e[c].group===i[o]&&o++;return o}return 0}function fn(n,a,t,e){return n<t?n:n+a>t+e?Math.max(0,n-e+a):t}var Ne=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=T({type:n});static \u0275inj=E({imports:[ie,de,Dt,G]})}return n})();var oa=["trigger"],ra=["panel"],sa=[[["mat-select-trigger"]],"*"],la=["mat-select-trigger","*"];function ca(n,a){if(n&1&&(s(0,"span",4),m(1),l()),n&2){let t=p();d(),V(t.placeholder)}}function da(n,a){n&1&&k(0)}function ma(n,a){if(n&1&&(s(0,"span",11),m(1),l()),n&2){let t=p(2);d(),V(t.triggerValue)}}function pa(n,a){if(n&1&&(s(0,"span",5),f(1,da,1,0)(2,ma,2,1,"span",11),l()),n&2){let t=p();d(),b(t.customTrigger?1:2)}}function ha(n,a){if(n&1){let t=U();s(0,"div",12,1),g("keydown",function(i){z(t);let o=p();return B(o._handleKeydown(i))}),k(2,1),l()}if(n&2){let t=p();li(t.panelClass),C("mat-select-panel-animations-enabled",!t._animationsDisabled)("mat-primary",(t._parentFormField==null?null:t._parentFormField.color)==="primary")("mat-accent",(t._parentFormField==null?null:t._parentFormField.color)==="accent")("mat-warn",(t._parentFormField==null?null:t._parentFormField.color)==="warn")("mat-undefined",!(t._parentFormField!=null&&t._parentFormField.color)),w("id",t.id+"-panel")("aria-multiselectable",t.multiple)("aria-label",t.ariaLabel||null)("aria-labelledby",t._getPanelAriaLabelledby())}}var ua=new D("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let n=r(A);return()=>nn(n)}}),ga=new D("MAT_SELECT_CONFIG"),_a=new D("MatSelectTrigger"),Ge=class{source;value;constructor(a,t){this.source=a,this.value=t}},yn=(()=>{class n{_viewportRuler=r(oe);_changeDetectorRef=r(K);_elementRef=r(F);_dir=r(bt,{optional:!0});_idGenerator=r(tt);_renderer=r(_t);_parentFormField=r(Wi,{optional:!0});ngControl=r(fi,{self:!0,optional:!0});_liveAnnouncer=r(Ti);_defaultOptions=r(ga,{optional:!0});_animationsDisabled=et();_popoverLocation;_initialized=new v;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(t){let e=this.options.toArray()[t];if(e){let i=this.panel.nativeElement,o=_n(t,this.options,this.optionGroups),c=e._getHostElement();t===0&&o===1?i.scrollTop=0:i.scrollTop=fn(c.offsetTop,c.offsetHeight,i.scrollTop,i.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(t){return new Ge(this,t)}_scrollStrategyFactory=r(ua);_panelOpen=!1;_compareWith=(t,e)=>t===e;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new v;_errorStateTracker;stateChanges=new v;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(t){this._disableRipple.set(t)}_disableRipple=M(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(t){this._hideSingleSelectionIndicator=t,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(t){this._placeholder=t,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator($.required)??!1}set required(t){this._required=t,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(t){this._selectionModel,this._multiple=t}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(t){this._compareWith=t,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(t){this._assignValue(t)&&this._onChange(t)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(t){this._errorStateTracker.matcher=t}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(t){this._id=t||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(t){this._errorStateTracker.errorState=t}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=xt(()=>{let t=this.options;return t?t.changes.pipe(at(t),Oe(()=>nt(...t.map(e=>e.onSelectionChange)))):this._initialized.pipe(Oe(()=>this.optionSelectionChanges))});openedChange=new P;_openedStream=this.openedChange.pipe(Q(t=>t),yt(()=>{}));_closedStream=this.openedChange.pipe(Q(t=>!t),yt(()=>{}));selectionChange=new P;valueChange=new P;constructor(){let t=r(Ui),e=r(yi,{optional:!0}),i=r($t,{optional:!0}),o=r(new mi("tabindex"),{optional:!0}),c=r(sn,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new Ki(t,this.ngControl,i,e,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=c?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new Bt(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(I(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(I(this._destroy)).subscribe(t=>{t.added.forEach(e=>e.select()),t.removed.forEach(e=>e.deselect())}),this.options.changes.pipe(at(null),I(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let t=this._getTriggerAriaLabelledby(),e=this.ngControl;if(t!==this._triggerAriaLabelledBy){let i=this._elementRef.nativeElement;this._triggerAriaLabelledBy=t,t?i.setAttribute("aria-labelledby",t):i.removeAttribute("aria-labelledby")}e&&(this._previousControl!==e.control&&(this._previousControl!==void 0&&e.disabled!==null&&e.disabled!==this.disabled&&(this.disabled=e.disabled),this._previousControl=e.control),this.updateErrorState())}ngOnChanges(t){(t.disabled||t.userAriaDescribedBy)&&this.stateChanges.next(),t.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),t.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(q(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let t=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!t)return;let e=`${this.id}-panel`;this._trackedModal&&Te(this._trackedModal,"aria-owns",e),Fi(t,"aria-owns",e),this._trackedModal=t}_clearFromModal(){if(!this._trackedModal)return;let t=`${this.id}-panel`;Te(this._trackedModal,"aria-owns",t),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{e(),clearTimeout(i),this._cleanupDetach=void 0};let t=this.panel.nativeElement,e=this._renderer.listen(t,"animationend",o=>{o.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),i=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);t.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(t){this._assignValue(t)}registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let t=this._selectionModel.selected.map(e=>e.viewValue);return this._isRtl()&&t.reverse(),t.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(t){this.disabled||(this.panelOpen?this._handleOpenKeydown(t):this._handleClosedKeydown(t))}_handleClosedKeydown(t){let e=t.keyCode,i=e===40||e===38||e===37||e===39,o=e===13||e===32,c=this._keyManager;if(!c.isTyping()&&o&&!Y(t)||(this.multiple||t.altKey)&&i)t.preventDefault(),this.open();else if(!this.multiple){let h=this.selected;c.onKeydown(t);let O=this.selected;O&&h!==O&&this._liveAnnouncer.announce(O.viewValue,1e4)}}_handleOpenKeydown(t){let e=this._keyManager,i=t.keyCode,o=i===40||i===38,c=e.isTyping();if(o&&t.altKey)t.preventDefault(),this.close();else if(!c&&(i===13||i===32)&&e.activeItem&&!Y(t))t.preventDefault(),e.activeItem._selectViaInteraction();else if(!c&&this._multiple&&i===65&&t.ctrlKey){t.preventDefault();let h=this.options.some(O=>!O.disabled&&!O.selected);this.options.forEach(O=>{O.disabled||(h?O.select():O.deselect())})}else{let h=e.activeItemIndex;e.onKeydown(t),this._multiple&&o&&t.shiftKey&&e.activeItem&&e.activeItemIndex!==h&&e.activeItem._selectViaInteraction()}}_handleOverlayKeydown(t){t.keyCode===27&&!Y(t)&&(t.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(t){if(this.options.forEach(e=>e.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&t)Array.isArray(t),t.forEach(e=>this._selectOptionByValue(e)),this._sortValues();else{let e=this._selectOptionByValue(t);e?this._keyManager.updateActiveItem(e):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(t){let e=this.options.find(i=>{if(this._selectionModel.isSelected(i))return!1;try{return(i.value!=null||this.canSelectNullableOptions)&&this._compareWith(i.value,t)}catch(o){return!1}});return e&&this._selectionModel.select(e),e}_assignValue(t){return t!==this._value||this._multiple&&Array.isArray(t)?(this.options&&this._setSelectionByValue(t),this._value=t,!0):!1}_skipPredicate=t=>this.panelOpen?!1:t.disabled;_getOverlayWidth(t){return this.panelWidth==="auto"?(t instanceof Pe?t.elementRef:t||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let t of this.options)t._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new Pi(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let t=nt(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(I(t)).subscribe(e=>{this._onSelect(e.source,e.isUserInput),e.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),nt(...this.options.map(e=>e._stateChanges)).pipe(I(t)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(t,e){let i=this._selectionModel.isSelected(t);!this.canSelectNullableOptions&&t.value==null&&!this._multiple?(t.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(t.value)):(i!==t.selected&&(t.selected?this._selectionModel.select(t):this._selectionModel.deselect(t)),e&&this._keyManager.setActiveItem(t),this.multiple&&(this._sortValues(),e&&this.focus())),i!==this._selectionModel.isSelected(t)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let t=this.options.toArray();this._selectionModel.sort((e,i)=>this.sortComparator?this.sortComparator(e,i,t):t.indexOf(e)-t.indexOf(i)),this.stateChanges.next()}}_propagateChanges(t){let e;this.multiple?e=this.selected.map(i=>i.value):e=this.selected?this.selected.value:t,this._value=e,this.valueChange.emit(e),this._onChange(e),this.selectionChange.emit(this._getChangeEvent(e)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let t=-1;for(let e=0;e<this.options.length;e++)if(!this.options.get(e).disabled){t=e;break}this._keyManager.setActiveItem(t)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(t){this._elementRef.nativeElement.focus(t)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let t=this._parentFormField?.getLabelId()||null,e=t?t+" ":"";return this.ariaLabelledby?e+this.ariaLabelledby:t}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let t=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(t+=" "+this.ariaLabelledby),t||(t=this._valueId),t}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(t){let e=this._elementRef.nativeElement;t.length?e.setAttribute("aria-describedby",t.join(" ")):e.removeAttribute("aria-describedby")}onContainerClick(t){let e=Si(t);e&&(e.tagName==="MAT-OPTION"||e.classList.contains("cdk-overlay-backdrop")||e.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=_({type:n,selectors:[["mat-select"]],contentQueries:function(e,i,o){if(e&1&&ct(o,_a,5)(o,Dt,5)(o,Ve,5),e&2){let c;y(c=x())&&(i.customTrigger=c.first),y(c=x())&&(i.options=c),y(c=x())&&(i.optionGroups=c)}},viewQuery:function(e,i){if(e&1&&X(oa,5)(ra,5)(Fe,5),e&2){let o;y(o=x())&&(i.trigger=o.first),y(o=x())&&(i.panel=o.first),y(o=x())&&(i._overlayDir=o.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(e,i){e&1&&g("keydown",function(c){return i._handleKeydown(c)})("focus",function(){return i._onFocus()})("blur",function(){return i._onBlur()}),e&2&&(w("id",i.id)("tabindex",i.disabled?-1:i.tabIndex)("aria-controls",i.panelOpen?i.id+"-panel":null)("aria-expanded",i.panelOpen)("aria-label",i.ariaLabel||null)("aria-required",i.required.toString())("aria-disabled",i.disabled.toString())("aria-invalid",i.errorState)("aria-activedescendant",i._getAriaActiveDescendant()),C("mat-mdc-select-disabled",i.disabled)("mat-mdc-select-invalid",i.errorState)("mat-mdc-select-required",i.required)("mat-mdc-select-empty",i.empty)("mat-mdc-select-multiple",i.multiple)("mat-select-open",i.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",N],disableRipple:[2,"disableRipple","disableRipple",N],tabIndex:[2,"tabIndex","tabIndex",t=>t==null?0:dt(t)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",N],placeholder:"placeholder",required:[2,"required","required",N],multiple:[2,"multiple","multiple",N],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",N],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",dt],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",N]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[J([{provide:qi,useExisting:n},{provide:je,useExisting:n}]),Ot],ngContentSelectors:la,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(e,i){if(e&1&&(j(sa),s(0,"div",2,0),g("click",function(){return i.open()}),s(3,"div",3),f(4,ca,2,1,"span",4)(5,pa,3,1,"span",5),l(),s(6,"div",6)(7,"div",7),st(),s(8,"svg",8),S(9,"path",9),l()()()(),ft(10,ha,3,16,"ng-template",10),g("detach",function(){return i.close()})("backdropClick",function(){return i.close()})("overlayKeydown",function(c){return i._handleOverlayKeydown(c)})),e&2){let o=Pt(1);d(3),w("id",i._valueId),d(),b(i.empty?4:5),d(6),u("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",i._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",i._scrollStrategy)("cdkConnectedOverlayOrigin",i._preferredOverlayOrigin||o)("cdkConnectedOverlayPositions",i._positions)("cdkConnectedOverlayWidth",i._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",i._popoverLocation)}},dependencies:[Pe,Fe],styles:[`@keyframes _mat-select-enter {
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
`],encapsulation:2,changeDetection:0})}return n})();var xn=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=T({type:n});static \u0275inj=E({imports:[Ct,Ne,G,Lt,ae,Ne]})}return n})();function fa(n,a){if(n&1&&(s(0,"mat-option",17),m(1),l()),n&2){let t=a.$implicit;u("value",t),d(),ot(" ",t," ")}}function ba(n,a){if(n&1){let t=U();s(0,"mat-form-field",14)(1,"mat-select",16,0),g("selectionChange",function(i){z(t);let o=p(2);return B(o._changePageSize(i.value))}),Et(3,fa,2,2,"mat-option",17,qt),l(),s(5,"div",18),g("click",function(){z(t);let i=Pt(2);return B(i.open())}),l()()}if(n&2){let t=p(2);u("appearance",t._formFieldAppearance)("color",t.color),d(),u("value",t.pageSize)("disabled",t.disabled),si("aria-labelledby",t._pageSizeLabelId),u("panelClass",t.selectConfig.panelClass||"")("disableOptionCentering",t.selectConfig.disableOptionCentering),d(2),Tt(t._displayedPageSizeOptions)}}function va(n,a){if(n&1&&(s(0,"div",15),m(1),l()),n&2){let t=p(2);d(),V(t.pageSize)}}function ya(n,a){if(n&1&&(s(0,"div",3)(1,"div",13),m(2),l(),f(3,ba,6,7,"mat-form-field",14),f(4,va,2,1,"div",15),l()),n&2){let t=p();d(),w("id",t._pageSizeLabelId),d(),ot(" ",t._intl.itemsPerPageLabel," "),d(),b(t._displayedPageSizeOptions.length>1?3:-1),d(),b(t._displayedPageSizeOptions.length<=1?4:-1)}}function xa(n,a){if(n&1){let t=U();s(0,"button",19),g("click",function(){z(t);let i=p();return B(i._buttonClicked(0,i._previousButtonsDisabled()))}),st(),s(1,"svg",8),S(2,"path",20),l()()}if(n&2){let t=p();u("matTooltip",t._intl.firstPageLabel)("matTooltipDisabled",t._previousButtonsDisabled())("disabled",t._previousButtonsDisabled())("tabindex",t._previousButtonsDisabled()?-1:null),w("aria-label",t._intl.firstPageLabel)}}function wa(n,a){if(n&1){let t=U();s(0,"button",21),g("click",function(){z(t);let i=p();return B(i._buttonClicked(i.getNumberOfPages()-1,i._nextButtonsDisabled()))}),st(),s(1,"svg",8),S(2,"path",22),l()()}if(n&2){let t=p();u("matTooltip",t._intl.lastPageLabel)("matTooltipDisabled",t._nextButtonsDisabled())("disabled",t._nextButtonsDisabled())("tabindex",t._nextButtonsDisabled()?-1:null),w("aria-label",t._intl.lastPageLabel)}}var ka=(()=>{class n{changes=new v;itemsPerPageLabel="Items per page:";nextPageLabel="Next page";previousPageLabel="Previous page";firstPageLabel="First page";lastPageLabel="Last page";getRangeLabel=(t,e,i)=>{if(i==0||e==0)return`0 of ${i}`;i=Math.max(i,0);let o=t*e,c=o<i?Math.min(o+e,i):o+e;return`${o+1} \u2013 ${c} of ${i}`};static \u0275fac=function(e){return new(e||n)};static \u0275prov=rt({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ca=50;var Da=new D("MAT_PAGINATOR_DEFAULT_OPTIONS"),He=(()=>{class n{_intl=r(ka);_changeDetectorRef=r(K);_formFieldAppearance;_pageSizeLabelId=r(tt).getId("mat-paginator-page-size-label-");_intlChanges;_isInitialized=!1;_initializedStream=new vt(1);color;get pageIndex(){return this._pageIndex}set pageIndex(t){this._pageIndex=Math.max(t||0,0),this._changeDetectorRef.markForCheck()}_pageIndex=0;get length(){return this._length}set length(t){this._length=t||0,this._changeDetectorRef.markForCheck()}_length=0;get pageSize(){return this._pageSize}set pageSize(t){this._pageSize=Math.max(t||0,0),this._updateDisplayedPageSizeOptions()}_pageSize;get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(t){this._pageSizeOptions=(t||[]).map(e=>dt(e,0)),this._updateDisplayedPageSizeOptions()}_pageSizeOptions=[];hidePageSize=!1;showFirstLastButtons=!1;selectConfig={};disabled=!1;page=new P;_displayedPageSizeOptions;initialized=this._initializedStream;constructor(){let t=this._intl,e=r(Da,{optional:!0});if(this._intlChanges=t.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),e){let{pageSize:i,pageSizeOptions:o,hidePageSize:c,showFirstLastButtons:h}=e;i!=null&&(this._pageSize=i),o!=null&&(this._pageSizeOptions=o),c!=null&&(this.hidePageSize=c),h!=null&&(this.showFirstLastButtons=h)}this._formFieldAppearance=e?.formFieldAppearance||"outline"}ngOnInit(){this._isInitialized=!0,this._updateDisplayedPageSizeOptions(),this._initializedStream.next()}ngOnDestroy(){this._initializedStream.complete(),this._intlChanges.unsubscribe()}nextPage(){this.hasNextPage()&&this._navigate(this.pageIndex+1)}previousPage(){this.hasPreviousPage()&&this._navigate(this.pageIndex-1)}firstPage(){this.hasPreviousPage()&&this._navigate(0)}lastPage(){this.hasNextPage()&&this._navigate(this.getNumberOfPages()-1)}hasPreviousPage(){return this.pageIndex>=1&&this.pageSize!=0}hasNextPage(){let t=this.getNumberOfPages()-1;return this.pageIndex<t&&this.pageSize!=0}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(t){let e=this.pageIndex*this.pageSize,i=this.pageIndex;this.pageIndex=Math.floor(e/t)||0,this.pageSize=t,this._emitPageEvent(i)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){this._isInitialized&&(this.pageSize||(this._pageSize=this.pageSizeOptions.length!=0?this.pageSizeOptions[0]:Ca),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),this._displayedPageSizeOptions.indexOf(this.pageSize)===-1&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((t,e)=>t-e),this._changeDetectorRef.markForCheck())}_emitPageEvent(t){this.page.emit({previousPageIndex:t,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}_navigate(t){let e=this.pageIndex;t!==e&&(this.pageIndex=t,this._emitPageEvent(e))}_buttonClicked(t,e){e||this._navigate(t)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=_({type:n,selectors:[["mat-paginator"]],hostAttrs:["role","group",1,"mat-mdc-paginator"],inputs:{color:"color",pageIndex:[2,"pageIndex","pageIndex",dt],length:[2,"length","length",dt],pageSize:[2,"pageSize","pageSize",dt],pageSizeOptions:"pageSizeOptions",hidePageSize:[2,"hidePageSize","hidePageSize",N],showFirstLastButtons:[2,"showFirstLastButtons","showFirstLastButtons",N],selectConfig:"selectConfig",disabled:[2,"disabled","disabled",N]},outputs:{page:"page"},exportAs:["matPaginator"],decls:14,vars:14,consts:[["selectRef",""],[1,"mat-mdc-paginator-outer-container"],[1,"mat-mdc-paginator-container"],[1,"mat-mdc-paginator-page-size"],[1,"mat-mdc-paginator-range-actions"],["aria-atomic","true","aria-live","polite","role","status",1,"mat-mdc-paginator-range-label"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-first",3,"matTooltip","matTooltipDisabled","disabled","tabindex"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-previous",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true",1,"mat-mdc-paginator-icon"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-next",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-last",3,"matTooltip","matTooltipDisabled","disabled","tabindex"],["aria-hidden","true",1,"mat-mdc-paginator-page-size-label"],[1,"mat-mdc-paginator-page-size-select",3,"appearance","color"],[1,"mat-mdc-paginator-page-size-value"],["hideSingleSelectionIndicator","",3,"selectionChange","value","disabled","aria-labelledby","panelClass","disableOptionCentering"],[3,"value"],[1,"mat-mdc-paginator-touch-target",3,"click"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-first",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-last",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],template:function(e,i){e&1&&(s(0,"div",1)(1,"div",2),f(2,ya,5,4,"div",3),s(3,"div",4)(4,"div",5),m(5),l(),f(6,xa,3,5,"button",6),s(7,"button",7),g("click",function(){return i._buttonClicked(i.pageIndex-1,i._previousButtonsDisabled())}),st(),s(8,"svg",8),S(9,"path",9),l()(),Ie(),s(10,"button",10),g("click",function(){return i._buttonClicked(i.pageIndex+1,i._nextButtonsDisabled())}),st(),s(11,"svg",8),S(12,"path",11),l()(),f(13,wa,3,5,"button",12),l()()()),e&2&&(d(2),b(i.hidePageSize?-1:2),d(3),ot(" ",i._intl.getRangeLabel(i.pageIndex,i.pageSize,i.length)," "),d(),b(i.showFirstLastButtons?6:-1),d(),u("matTooltip",i._intl.previousPageLabel)("matTooltipDisabled",i._previousButtonsDisabled())("disabled",i._previousButtonsDisabled())("tabindex",i._previousButtonsDisabled()?-1:null),w("aria-label",i._intl.previousPageLabel),d(3),u("matTooltip",i._intl.nextPageLabel)("matTooltipDisabled",i._nextButtonsDisabled())("disabled",i._nextButtonsDisabled())("tabindex",i._nextButtonsDisabled()?-1:null),w("aria-label",i._intl.nextPageLabel),d(3),b(i.showFirstLastButtons?13:-1))},dependencies:[ne,yn,Dt,ee,le],styles:[`.mat-mdc-paginator {
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
`],encapsulation:2,changeDetection:0})}return n})(),wn=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=T({type:n});static \u0275inj=E({imports:[ht,xn,ce,He]})}return n})();var ge=["*"],Sa=["content"],Oa=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],Ia=["mat-drawer","mat-drawer-content","*"];function Ea(n,a){if(n&1){let t=U();s(0,"div",1),g("click",function(){z(t);let i=p();return B(i._onBackdropClicked())}),l()}if(n&2){let t=p();C("mat-drawer-shown",t._isShowingBackdrop())}}function Ta(n,a){n&1&&(s(0,"mat-drawer-content"),k(1,2),l())}var Aa=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],Pa=["mat-sidenav","mat-sidenav-content","*"];function Fa(n,a){if(n&1){let t=U();s(0,"div",1),g("click",function(){z(t);let i=p();return B(i._onBackdropClicked())}),l()}if(n&2){let t=p();C("mat-drawer-shown",t._isShowingBackdrop())}}function La(n,a){n&1&&(s(0,"mat-sidenav-content"),k(1,2),l())}var Ra=`.mat-drawer-container {
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
`;var za=new D("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),We=new D("MAT_DRAWER_CONTAINER"),he=(()=>{class n extends ut{_platform=r(mt);_changeDetectorRef=r(K);_container=r(qe);constructor(){let t=r(F),e=r(Ji),i=r(lt);super(t,e,i)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:t,end:e}=this._container;return t!=null&&t.mode!=="over"&&t.opened||e!=null&&e.mode!=="over"&&e.opened}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=_({type:n,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(e,i){e&2&&(Wt("margin-left",i._container._contentMargins.left,"px")("margin-right",i._container._contentMargins.right,"px"),C("mat-drawer-content-hidden",i._shouldBeHidden()))},features:[J([{provide:ut,useExisting:n}]),R],ngContentSelectors:ge,decls:1,vars:0,template:function(e,i){e&1&&(j(),k(0))},encapsulation:2,changeDetection:0})}return n})(),Qe=(()=>{class n{_elementRef=r(F);_focusTrapFactory=r(Jt);_focusMonitor=r(Zt);_platform=r(mt);_ngZone=r(lt);_renderer=r(_t);_interactivityChecker=r(Xt);_doc=r(Ht);_container=r(We,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(t){t=t==="end"?"end":"start",t!==this._position&&(this._isAttached&&this._updatePositionInParent(t),this._position=t,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(t){this._mode=t,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(t){this._disableClose=Z(t)}_disableClose=!1;get autoFocus(){let t=this._autoFocus;return t??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(t){(t==="true"||t==="false"||t==null)&&(t=Z(t)),this._autoFocus=t}_autoFocus;get opened(){return this._opened()}set opened(t){this.toggle(Z(t))}_opened=M(!1);_openedVia=null;_animationStarted=new v;_animationEnd=new v;openedChange=new P(!0);_openedStream=this.openedChange.pipe(Q(t=>t),yt(()=>{}));openedStart=this._animationStarted.pipe(Q(()=>this.opened),Se(void 0));_closedStream=this.openedChange.pipe(Q(t=>!t),yt(()=>{}));closedStart=this._animationStarted.pipe(Q(()=>!this.opened),Se(void 0));_destroyed=new v;onPositionChanged=new P;_content;_modeChanged=new v;_injector=r(A);_changeDetectorRef=r(K);constructor(){this.openedChange.pipe(I(this._destroyed)).subscribe(t=>{t?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let t=this._renderer,e=this._elementRef.nativeElement;return[t.listen(e,"keydown",i=>{i.keyCode===27&&!this.disableClose&&!Y(i)&&this._ngZone.run(()=>{this.close(),i.stopPropagation(),i.preventDefault()})}),t.listen(e,"transitionend",this._handleTransitionEvent),t.listen(e,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(t,e){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let i=()=>{o(),c(),t.removeAttribute("tabindex")},o=this._renderer.listen(t,"blur",i),c=this._renderer.listen(t,"mousedown",i)})),t.focus(e)}_focusByCssSelector(t,e){let i=this._elementRef.nativeElement.querySelector(t);i&&this._forceFocus(i,e)}_takeFocus(){if(!this._focusTrap)return;let t=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":It(()=>{!this._focusTrap.focusInitialElement()&&typeof t.focus=="function"&&t.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(t){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,t):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let t=this._doc.activeElement;return!!t&&this._elementRef.nativeElement.contains(t)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(t){return this.toggle(!0,t)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(t=!this.opened,e){t&&e&&(this._openedVia=e);let i=this._setOpen(t,!t&&this._isFocusWithinDrawer(),this._openedVia||"program");return t||(this._openedVia=null),i}_setOpen(t,e,i){return t===this.opened?Promise.resolve(t?"open":"close"):(this._opened.set(t),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",t),!t&&e&&this._restoreFocus(i),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(o=>{this.openedChange.pipe(q(1)).subscribe(c=>o(c?"open":"close"))}))}_setIsAnimating(t){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",t)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(t){if(!this._platform.isBrowser)return;let e=this._elementRef.nativeElement,i=e.parentNode;t==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),i.insertBefore(this._anchor,e)),i.appendChild(e)):this._anchor&&this._anchor.parentNode.insertBefore(e,this._anchor)}_handleTransitionEvent=t=>{let e=this._elementRef.nativeElement;t.target===e&&this._ngZone.run(()=>{t.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(t)})};static \u0275fac=function(e){return new(e||n)};static \u0275cmp=_({type:n,selectors:[["mat-drawer"]],viewQuery:function(e,i){if(e&1&&X(Sa,5),e&2){let o;y(o=x())&&(i._content=o.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(e,i){e&2&&(w("align",null)("tabIndex",i.mode!=="side"?"-1":null),Wt("visibility",!i._container&&!i.opened?"hidden":null),C("mat-drawer-end",i.position==="end")("mat-drawer-over",i.mode==="over")("mat-drawer-push",i.mode==="push")("mat-drawer-side",i.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:ge,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(e,i){e&1&&(j(),s(0,"div",1,0),k(2),l())},dependencies:[ut],encapsulation:2,changeDetection:0})}return n})(),qe=(()=>{class n{_dir=r(bt,{optional:!0});_element=r(F);_ngZone=r(lt);_changeDetectorRef=r(K);_animationDisabled=et();_transitionsEnabled=!1;_allDrawers;_drawers=new ni;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(t){this._autosize=Z(t)}_autosize=r(za);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(t){this._backdropOverride=t==null?null:Z(t)}_backdropOverride=null;backdropClick=new P;_start=null;_end=null;_left=null;_right=null;_destroyed=new v;_doCheckSubject=new v;_contentMargins={left:null,right:null};_contentMarginChanges=new v;get scrollable(){return this._userContent||this._content}_injector=r(A);constructor(){let t=r(mt),e=r(oe);this._dir?.change.pipe(I(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),e.change().pipe(I(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&t.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(at(this._allDrawers),I(this._destroyed)).subscribe(t=>{this._drawers.reset(t.filter(e=>!e._container||e._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(at(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(t=>{this._watchDrawerToggle(t),this._watchDrawerPosition(t),this._watchDrawerMode(t)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(Gt(10),I(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(t=>t.open())}close(){this._drawers.forEach(t=>t.close())}updateContentMargins(){let t=0,e=0;if(this._left&&this._left.opened){if(this._left.mode=="side")t+=this._left._getWidth();else if(this._left.mode=="push"){let i=this._left._getWidth();t+=i,e-=i}}if(this._right&&this._right.opened){if(this._right.mode=="side")e+=this._right._getWidth();else if(this._right.mode=="push"){let i=this._right._getWidth();e+=i,t-=i}}t=t||null,e=e||null,(t!==this._contentMargins.left||e!==this._contentMargins.right)&&(this._contentMargins={left:t,right:e},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(t){t._animationStarted.pipe(I(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),t.mode!=="side"&&t.openedChange.pipe(I(this._drawers.changes)).subscribe(()=>this._setContainerClass(t.opened))}_watchDrawerPosition(t){t.onPositionChanged.pipe(I(this._drawers.changes)).subscribe(()=>{It({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(t){t._modeChanged.pipe(I(nt(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(t){let e=this._element.nativeElement.classList,i="mat-drawer-container-has-open";t?e.add(i):e.remove(i)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(t=>{t.position=="end"?(this._end!=null,this._end=t):(this._start!=null,this._start=t)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(t=>t&&!t.disableClose&&this._drawerHasBackdrop(t)).forEach(t=>t._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(t){return t!=null&&t.opened}_drawerHasBackdrop(t){return this._backdropOverride==null?!!t&&t.mode!=="side":this._backdropOverride}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=_({type:n,selectors:[["mat-drawer-container"]],contentQueries:function(e,i,o){if(e&1&&ct(o,he,5)(o,Qe,5),e&2){let c;y(c=x())&&(i._content=c.first),y(c=x())&&(i._allDrawers=c)}},viewQuery:function(e,i){if(e&1&&X(he,5),e&2){let o;y(o=x())&&(i._userContent=o.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(e,i){e&2&&C("mat-drawer-container-explicit-backdrop",i._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[J([{provide:We,useExisting:n}])],ngContentSelectors:Ia,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(e,i){e&1&&(j(Oa),f(0,Ea,1,2,"div",0),k(1),k(2,1),f(3,Ta,2,0,"mat-drawer-content")),e&2&&(b(i.hasBackdrop?0:-1),d(3),b(i._content?-1:3))},dependencies:[he],styles:[`.mat-drawer-container {
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
`],encapsulation:2,changeDetection:0})}return n})(),ue=(()=>{class n extends he{static \u0275fac=(()=>{let t;return function(i){return(t||(t=W(n)))(i||n)}})();static \u0275cmp=_({type:n,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[J([{provide:ut,useExisting:n}]),R],ngContentSelectors:ge,decls:1,vars:0,template:function(e,i){e&1&&(j(),k(0))},encapsulation:2,changeDetection:0})}return n})(),Ue=(()=>{class n extends Qe{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(t){this._fixedInViewport=Z(t)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(t){this._fixedTopGap=pt(t)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(t){this._fixedBottomGap=pt(t)}_fixedBottomGap=0;static \u0275fac=(()=>{let t;return function(i){return(t||(t=W(n)))(i||n)}})();static \u0275cmp=_({type:n,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(e,i){e&2&&(w("tabIndex",i.mode!=="side"?"-1":null)("align",null),Wt("top",i.fixedInViewport?i.fixedTopGap:null,"px")("bottom",i.fixedInViewport?i.fixedBottomGap:null,"px"),C("mat-drawer-end",i.position==="end")("mat-drawer-over",i.mode==="over")("mat-drawer-push",i.mode==="push")("mat-drawer-side",i.mode==="side")("mat-sidenav-fixed",i.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[J([{provide:Qe,useExisting:n}]),R],ngContentSelectors:ge,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(e,i){e&1&&(j(),s(0,"div",1,0),k(2),l())},dependencies:[ut],encapsulation:2,changeDetection:0})}return n})(),kn=(()=>{class n extends qe{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let t;return function(i){return(t||(t=W(n)))(i||n)}})();static \u0275cmp=_({type:n,selectors:[["mat-sidenav-container"]],contentQueries:function(e,i,o){if(e&1&&ct(o,ue,5)(o,Ue,5),e&2){let c;y(c=x())&&(i._content=c.first),y(c=x())&&(i._allDrawers=c)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(e,i){e&2&&C("mat-drawer-container-explicit-backdrop",i._backdropOverride)},exportAs:["matSidenavContainer"],features:[J([{provide:We,useExisting:n},{provide:qe,useExisting:n}]),R],ngContentSelectors:Pa,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(e,i){e&1&&(j(Aa),f(0,Fa,1,2,"div",0),k(1),k(2,1),f(3,La,2,0,"mat-sidenav-content")),e&2&&(b(i.hasBackdrop?0:-1),d(3),b(i._content?-1:3))},dependencies:[ue],styles:[Ra],encapsulation:2,changeDetection:0})}return n})(),Cn=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=T({type:n});static \u0275inj=E({imports:[Lt,G,Lt]})}return n})();function ja(n,a){}var gt=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext};var $e=(()=>{class n extends en{_elementRef=r(F);_focusTrapFactory=r(Jt);_config;_interactivityChecker=r(Xt);_ngZone=r(lt);_focusMonitor=r(Zt);_renderer=r(_t);_changeDetectorRef=r(K);_injector=r(A);_platform=r(mt);_document=r(Ht);_portalOutlet;_focusTrapped=new v;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=r(gt,{optional:!0})||new gt,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(t){this._ariaLabelledByQueue.push(t),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(t){let e=this._ariaLabelledByQueue.indexOf(t);e>-1&&(this._ariaLabelledByQueue.splice(e,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(t){this._portalOutlet.hasAttached();let e=this._portalOutlet.attachComponentPortal(t);return this._contentAttached(),e}attachTemplatePortal(t){this._portalOutlet.hasAttached();let e=this._portalOutlet.attachTemplatePortal(t);return this._contentAttached(),e}attachDomPortal=t=>{this._portalOutlet.hasAttached();let e=this._portalOutlet.attachDomPortal(t);return this._contentAttached(),e};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(t,e){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let i=()=>{o(),c(),t.removeAttribute("tabindex")},o=this._renderer.listen(t,"blur",i),c=this._renderer.listen(t,"mousedown",i)})),t.focus(e)}_focusByCssSelector(t,e){let i=this._elementRef.nativeElement.querySelector(t);i&&this._forceFocus(i,e)}_trapFocus(t){this._isDestroyed||It(()=>{let e=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||e.focus(t);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(t)||this._focusDialogContainer(t);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',t);break;default:this._focusByCssSelector(this._config.autoFocus,t);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let t=this._config.restoreFocus,e=null;if(typeof t=="string"?e=this._document.querySelector(t):typeof t=="boolean"?e=t?this._elementFocusedBeforeDialogWasOpened:null:t&&(e=t),this._config.restoreFocus&&e&&typeof e.focus=="function"){let i=Ft(),o=this._elementRef.nativeElement;(!i||i===this._document.body||i===o||o.contains(i))&&(this._focusMonitor?(this._focusMonitor.focusVia(e,this._closeInteractionType),this._closeInteractionType=null):e.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(t){this._elementRef.nativeElement.focus?.(t)}_containsFocus(){let t=this._elementRef.nativeElement,e=Ft();return t===e||t.contains(e)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=Ft()))}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=_({type:n,selectors:[["cdk-dialog-container"]],viewQuery:function(e,i){if(e&1&&X(Rt,7),e&2){let o;y(o=x())&&(i._portalOutlet=o.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(e,i){e&2&&w("id",i._config.id||null)("role",i._config.role)("aria-modal",i._config.ariaModal)("aria-labelledby",i._config.ariaLabel?null:i._ariaLabelledByQueue[0])("aria-label",i._config.ariaLabel)("aria-describedby",i._config.ariaDescribedBy||null)},features:[R],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(e,i){e&1&&ft(0,ja,0,0,"ng-template",0)},dependencies:[Rt],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2})}return n})(),jt=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new v;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(a,t){this.overlayRef=a,this.config=t,this.disableClose=t.disableClose,this.backdropClick=a.backdropClick(),this.keydownEvents=a.keydownEvents(),this.outsidePointerEvents=a.outsidePointerEvents(),this.id=t.id,this.keydownEvents.subscribe(e=>{e.keyCode===27&&!this.disableClose&&!Y(e)&&(e.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=a.detachments().subscribe(()=>{t.closeOnOverlayDetachments!==!1&&this.close()})}close(a,t){if(this._canClose(a)){let e=this.closed;this.containerInstance._closeInteractionType=t?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),e.next(a),e.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(a="",t=""){return this.overlayRef.updateSize({width:a,height:t}),this}addPanelClass(a){return this.overlayRef.addPanelClass(a),this}removePanelClass(a){return this.overlayRef.removePanelClass(a),this}_canClose(a){let t=this.config;return!!this.containerInstance&&(!t.closePredicate||t.closePredicate(a,t,this.componentInstance))}},Va=new D("DialogScrollStrategy",{providedIn:"root",factory:()=>{let n=r(A);return()=>re(n)}}),Na=new D("DialogData"),Ga=new D("DefaultDialogConfig");function Ha(n){let a=M(n),t=new P;return{valueSignal:a,get value(){return a()},change:t,ngOnDestroy(){t.complete()}}}var Ze=(()=>{class n{_injector=r(A);_defaultOptions=r(Ga,{optional:!0});_parentDialog=r(n,{optional:!0,skipSelf:!0});_overlayContainer=r(on);_idGenerator=r(tt);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new v;_afterOpenedAtThisLevel=new v;_ariaHiddenElements=new Map;_scrollStrategy=r(Va);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=xt(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(at(void 0)));constructor(){}open(t,e){let i=this._defaultOptions||new gt;e=it(it({},i),e),e.id=e.id||this._idGenerator.getId("cdk-dialog-"),e.id&&this.getDialogById(e.id);let o=this._getOverlayConfig(e),c=ln(this._injector,o),h=new jt(c,e),O=this._attachContainer(c,h,e);if(h.containerInstance=O,!this.openDialogs.length){let De=this._overlayContainer.getContainerElement();O._focusTrapped?O._focusTrapped.pipe(q(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(De)}):this._hideNonDialogContentFromAssistiveTechnology(De)}return this._attachDialogContent(t,h,O,e),this.openDialogs.push(h),h.closed.subscribe(()=>this._removeOpenDialog(h,!0)),this.afterOpened.next(h),h}closeAll(){Ke(this.openDialogs,t=>t.close())}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){Ke(this._openDialogsAtThisLevel,t=>{t.config.closeOnDestroy===!1&&this._removeOpenDialog(t,!1)}),Ke(this._openDialogsAtThisLevel,t=>t.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(t){let e=new an({positionStrategy:t.positionStrategy||se().centerHorizontally().centerVertically(),scrollStrategy:t.scrollStrategy||this._scrollStrategy(),panelClass:t.panelClass,hasBackdrop:t.hasBackdrop,direction:t.direction,minWidth:t.minWidth,minHeight:t.minHeight,maxWidth:t.maxWidth,maxHeight:t.maxHeight,width:t.width,height:t.height,disposeOnNavigation:t.closeOnNavigation,disableAnimations:t.disableAnimations});return t.backdropClass&&(e.backdropClass=t.backdropClass),e}_attachContainer(t,e,i){let o=i.injector||i.viewContainerRef?.injector,c=[{provide:gt,useValue:i},{provide:jt,useValue:e},{provide:rn,useValue:t}],h;i.container?typeof i.container=="function"?h=i.container:(h=i.container.type,c.push(...i.container.providers(i))):h=$e;let O=new Ae(h,i.viewContainerRef,A.create({parent:o||this._injector,providers:c}));return t.attach(O).instance}_attachDialogContent(t,e,i,o){if(t instanceof ai){let c=this._createInjector(o,e,i,void 0),h={$implicit:o.data,dialogRef:e};o.templateContext&&(h=it(it({},h),typeof o.templateContext=="function"?o.templateContext():o.templateContext)),i.attachTemplatePortal(new tn(t,null,h,c))}else{let c=this._createInjector(o,e,i,this._injector),h=i.attachComponentPortal(new Ae(t,o.viewContainerRef,c));e.componentRef=h,e.componentInstance=h.instance}}_createInjector(t,e,i,o){let c=t.injector||t.viewContainerRef?.injector,h=[{provide:Na,useValue:t.data},{provide:jt,useValue:e}];return t.providers&&(typeof t.providers=="function"?h.push(...t.providers(e,t,i)):h.push(...t.providers)),t.direction&&(!c||!c.get(bt,null,{optional:!0}))&&h.push({provide:bt,useValue:Ha(t.direction)}),A.create({parent:c||o,providers:h})}_removeOpenDialog(t,e){let i=this.openDialogs.indexOf(t);i>-1&&(this.openDialogs.splice(i,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((o,c)=>{o?c.setAttribute("aria-hidden",o):c.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),e&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(t){if(t.parentElement){let e=t.parentElement.children;for(let i=e.length-1;i>-1;i--){let o=e[i];o!==t&&o.nodeName!=="SCRIPT"&&o.nodeName!=="STYLE"&&!o.hasAttribute("aria-live")&&!o.hasAttribute("popover")&&(this._ariaHiddenElements.set(o,o.getAttribute("aria-hidden")),o.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(e){return new(e||n)};static \u0275prov=rt({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Ke(n,a){let t=n.length;for(;t--;)a(n[t])}var Dn=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=T({type:n});static \u0275inj=E({providers:[Ze],imports:[Ct,zt,Ai,zt]})}return n})();function Qa(n,a){}var fe=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration},Ye="mdc-dialog--open",Mn="mdc-dialog--opening",Sn="mdc-dialog--closing",qa=150,Wa=75,Ua=(()=>{class n extends $e{_animationStateChanged=new P;_animationsEnabled=!et();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?In(this._config.enterAnimationDuration)??qa:0;_exitAnimationDuration=this._animationsEnabled?In(this._config.exitAnimationDuration)??Wa:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(On,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Mn,Ye)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(Ye),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(Ye),this._animationsEnabled?(this._hostElement.style.setProperty(On,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Sn)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(t){this._actionSectionCount+=t,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(Mn,Sn)}_waitForAnimationToComplete(t,e){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(e,t)}_requestAnimationFrame(t){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(t):t()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(t){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:t})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(t){let e=super.attachComponentPortal(t);return e.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),e}static \u0275fac=(()=>{let t;return function(i){return(t||(t=W(n)))(i||n)}})();static \u0275cmp=_({type:n,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(e,i){e&2&&(At("id",i._config.id),w("aria-modal",i._config.ariaModal)("role",i._config.role)("aria-labelledby",i._config.ariaLabel?null:i._ariaLabelledByQueue[0])("aria-label",i._config.ariaLabel)("aria-describedby",i._config.ariaDescribedBy||null),C("_mat-animation-noopable",!i._animationsEnabled)("mat-mdc-dialog-container-with-actions",i._actionSectionCount>0))},features:[R],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(e,i){e&1&&(s(0,"div",0)(1,"div",1),ft(2,Qa,0,0,"ng-template",2),l()())},dependencies:[Rt],styles:[`.mat-mdc-dialog-container {
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
`],encapsulation:2})}return n})(),On="--mat-dialog-transition-duration";function In(n){return n==null?null:typeof n=="number"?n:n.endsWith("ms")?pt(n.substring(0,n.length-2)):n.endsWith("s")?pt(n.substring(0,n.length-1))*1e3:n==="0"?0:null}var _e=(function(n){return n[n.OPEN=0]="OPEN",n[n.CLOSING=1]="CLOSING",n[n.CLOSED=2]="CLOSED",n})(_e||{}),Vt=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new vt(1);_beforeClosed=new vt(1);_result;_closeFallbackTimeout;_state=_e.OPEN;_closeInteractionType;constructor(a,t,e){this._ref=a,this._config=t,this._containerInstance=e,this.disableClose=t.disableClose,this.id=a.id,a.addPanelClass("mat-mdc-dialog-panel"),e._animationStateChanged.pipe(Q(i=>i.state==="opened"),q(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),e._animationStateChanged.pipe(Q(i=>i.state==="closed"),q(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),a.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),nt(this.backdropClick(),this.keydownEvents().pipe(Q(i=>i.keyCode===27&&!this.disableClose&&!Y(i)))).subscribe(i=>{this.disableClose||(i.preventDefault(),En(this,i.type==="keydown"?"keyboard":"mouse"))})}close(a){let t=this._config.closePredicate;t&&!t(a,this._config,this.componentInstance)||(this._result=a,this._containerInstance._animationStateChanged.pipe(Q(e=>e.state==="closing"),q(1)).subscribe(e=>{this._beforeClosed.next(a),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),e.totalTime+100)}),this._state=_e.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(a){let t=this._ref.config.positionStrategy;return a&&(a.left||a.right)?a.left?t.left(a.left):t.right(a.right):t.centerHorizontally(),a&&(a.top||a.bottom)?a.top?t.top(a.top):t.bottom(a.bottom):t.centerVertically(),this._ref.updatePosition(),this}updateSize(a="",t=""){return this._ref.updateSize(a,t),this}addPanelClass(a){return this._ref.addPanelClass(a),this}removePanelClass(a){return this._ref.removePanelClass(a),this}getState(){return this._state}_finishDialogClose(){this._state=_e.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function En(n,a,t){return n._closeInteractionType=a,n.close(t)}var Xe=new D("MatMdcDialogData"),Ka=new D("mat-mdc-dialog-default-options"),$a=new D("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let n=r(A);return()=>re(n)}}),Nt=(()=>{class n{_defaultOptions=r(Ka,{optional:!0});_scrollStrategy=r($a);_parentDialog=r(n,{optional:!0,skipSelf:!0});_idGenerator=r(tt);_injector=r(A);_dialog=r(Ze);_animationsDisabled=et();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new v;_afterOpenedAtThisLevel=new v;dialogConfigClass=fe;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=xt(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(at(void 0)));constructor(){this._dialogRefConstructor=Vt,this._dialogContainerType=Ua,this._dialogDataToken=Xe}open(t,e){let i;e=it(it({},this._defaultOptions||new fe),e),e.id=e.id||this._idGenerator.getId("mat-mdc-dialog-"),e.scrollStrategy=e.scrollStrategy||this._scrollStrategy();let o=this._dialog.open(t,Me(it({},e),{positionStrategy:se(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||e.enterAnimationDuration?.toLocaleString()==="0"||e.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:e},{provide:gt,useValue:e}]},templateContext:()=>({dialogRef:i}),providers:(c,h,O)=>(i=new this._dialogRefConstructor(c,e,O),i.updatePosition(e?.position),[{provide:this._dialogContainerType,useValue:O},{provide:this._dialogDataToken,useValue:h.data},{provide:this._dialogRefConstructor,useValue:i}])}));return i.componentRef=o.componentRef,i.componentInstance=o.componentInstance,this.openDialogs.push(i),this.afterOpened.next(i),i.afterClosed().subscribe(()=>{let c=this.openDialogs.indexOf(i);c>-1&&(this.openDialogs.splice(c,1),this.openDialogs.length||this._getAfterAllClosed().next())}),i}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(t){let e=t.length;for(;e--;)t[e].close()}static \u0275fac=function(e){return new(e||n)};static \u0275prov=rt({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),be=(()=>{class n{dialogRef=r(Vt,{optional:!0});_elementRef=r(F);_dialog=r(Nt);ariaLabel;type="button";dialogResult;_matDialogClose;constructor(){}ngOnInit(){this.dialogRef||(this.dialogRef=An(this._elementRef,this._dialog.openDialogs))}ngOnChanges(t){let e=t._matDialogClose||t._matDialogCloseResult;e&&(this.dialogResult=e.currentValue)}_onButtonClick(t){En(this.dialogRef,t.screenX===0&&t.screenY===0?"keyboard":"mouse",this.dialogResult)}static \u0275fac=function(e){return new(e||n)};static \u0275dir=L({type:n,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(e,i){e&1&&g("click",function(c){return i._onButtonClick(c)}),e&2&&w("aria-label",i.ariaLabel||null)("type",i.type)},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],type:"type",dialogResult:[0,"mat-dialog-close","dialogResult"],_matDialogClose:[0,"matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],features:[Ot]})}return n})(),Tn=(()=>{class n{_dialogRef=r(Vt,{optional:!0});_elementRef=r(F);_dialog=r(Nt);constructor(){}ngOnInit(){this._dialogRef||(this._dialogRef=An(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static \u0275fac=function(e){return new(e||n)};static \u0275dir=L({type:n})}return n})(),ve=(()=>{class n extends Tn{id=r(tt).getId("mat-mdc-dialog-title-");_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static \u0275fac=(()=>{let t;return function(i){return(t||(t=W(n)))(i||n)}})();static \u0275dir=L({type:n,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(e,i){e&2&&At("id",i.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],features:[R]})}return n})(),ye=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=L({type:n,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],features:[oi([ut])]})}return n})(),xe=(()=>{class n extends Tn{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static \u0275fac=(()=>{let t;return function(i){return(t||(t=W(n)))(i||n)}})();static \u0275dir=L({type:n,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(e,i){e&2&&C("mat-mdc-dialog-actions-align-start",i.align==="start")("mat-mdc-dialog-actions-align-center",i.align==="center")("mat-mdc-dialog-actions-align-end",i.align==="end")},inputs:{align:"align"},features:[R]})}return n})();function An(n,a){let t=n.nativeElement.parentElement;for(;t&&!t.classList.contains("mat-mdc-dialog-container");)t=t.parentElement;return t?a.find(e=>e.id===t.id):null}var St=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=T({type:n});static \u0275inj=E({providers:[Nt],imports:[Dn,Ct,zt,G]})}return n})();var we=class n{constructor(a){this.http=a}list(a,t=0,e=10){let i=a?.trim()??"",o=new hi().set("page",String(t)).set("size",String(e));return i.length>0&&(o=o.set("q",i)),this.http.get(`${wt.apiBaseUrl}/api/v1/customers`,{params:o})}get(a){return this.http.get(`${wt.apiBaseUrl}/api/v1/customers/${a}`)}create(a){return this.http.post(`${wt.apiBaseUrl}/api/v1/customers`,a)}update(a,t){return this.http.put(`${wt.apiBaseUrl}/api/v1/customers/${a}`,t)}delete(a){return this.http.delete(`${wt.apiBaseUrl}/api/v1/customers/${a}`)}static \u0275fac=function(t){return new(t||n)(ii(ui))};static \u0275prov=rt({token:n,factory:n.\u0275fac,providedIn:"root"})};var ke=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["app-customers-close-unsaved-dialog"]],decls:10,vars:1,consts:[["mat-dialog-title",""],[1,"mat-body-medium","dialog-body"],["align","end"],["mat-button","","type","button","mat-dialog-close",""],["mat-flat-button","","type","button","color","warn",3,"mat-dialog-close"]],template:function(t,e){t&1&&(s(0,"h2",0),m(1,"Fechar sem salvar?"),l(),s(2,"mat-dialog-content")(3,"p",1),m(4," Existem altera\xE7\xF5es que ainda n\xE3o foram guardadas. Se fechar o painel agora, essas altera\xE7\xF5es ser\xE3o descartadas. "),l()(),s(5,"mat-dialog-actions",2)(6,"button",3),m(7,"Voltar"),l(),s(8,"button",4),m(9,"Fechar sem salvar"),l()()),t&2&&(d(8),u("mat-dialog-close",!0))},dependencies:[St,be,ve,xe,ye,ht,kt],styles:[".dialog-body[_ngcontent-%COMP%]{margin:0;max-width:26rem;line-height:1.5;color:var(--mat-sys-on-surface-variant)}"],changeDetection:0})};var Ce=class n{data=r(Xe);static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["app-customers-delete-confirm-dialog"]],decls:13,vars:2,consts:[["mat-dialog-title",""],[1,"mat-body-medium","dialog-body"],["align","end"],["mat-button","","type","button","mat-dialog-close",""],["mat-flat-button","","type","button","color","warn",3,"mat-dialog-close"]],template:function(t,e){t&1&&(s(0,"h2",0),m(1,"Excluir cliente?"),l(),s(2,"mat-dialog-content")(3,"p",1),m(4," Tem certeza de que deseja excluir "),s(5,"strong"),m(6),l(),m(7,"? Esta a\xE7\xE3o n\xE3o pode ser desfeita. "),l()(),s(8,"mat-dialog-actions",2)(9,"button",3),m(10,"Cancelar"),l(),s(11,"button",4),m(12,"Excluir"),l()()),t&2&&(d(6),V(e.data.name),d(5),u("mat-dialog-close",!0))},dependencies:[St,be,ve,xe,ye,ht,kt],styles:[".dialog-body[_ngcontent-%COMP%]{margin:0;max-width:26rem;line-height:1.5;color:var(--mat-sys-on-surface-variant)}"],changeDetection:0})};var Za=(n,a)=>a.id;function Ya(n,a){if(n&1&&(s(0,"p",13),m(1),l()),n&2){let t=p();d(),V(t.error())}}function Xa(n,a){if(n&1&&(s(0,"div",31)(1,"div",32),S(2,"div",33)(3,"div",34)(4,"div",35),l(),s(5,"div",36),S(6,"ngx-skeleton-loader",37)(7,"ngx-skeleton-loader",38),l()()),n&2){let t=p(2);d(6),u("count",1)("theme",t.skeletonThemeFab),d(),u("count",1)("theme",t.skeletonThemeFab)}}function Ja(n,a){if(n&1&&(s(0,"div",14),Et(1,Xa,8,4,"div",31,qt),l()),n&2){let t=p();d(),Tt(t.skeletonSlots)}}function to(n,a){if(n&1){let t=U();s(0,"div",15)(1,"p",39),m(2,"Nenhum cliente cadastrado"),l(),s(3,"p",40),m(4," Que tal adicionar o primeiro? Use o bot\xE3o acima ou cadastre direto aqui. "),l(),s(5,"button",8),g("click",function(){z(t);let i=p();return B(i.openCreate())}),m(6," Cadastrar primeiro cliente "),l()()}if(n&2){let t=p();d(5),u("disabled",t.busy())}}function eo(n,a){n&1&&(s(0,"div",15)(1,"p",39),m(2,"Nenhum resultado encontrado"),l(),s(3,"p",40),m(4," Ajuste o termo de busca ou limpe o campo para ver todos os clientes. "),l()())}function io(n,a){if(n&1){let t=U();s(0,"mat-list-item",44)(1,"div",45)(2,"div",46),m(3),l(),s(4,"div",47),m(5),l(),s(6,"div",48),m(7),Ut(8,"date"),Ut(9,"date"),l()(),s(10,"div",49)(11,"button",50),g("click",function(){let i=z(t).$implicit,o=p(2);return B(o.openEdit(i.id))}),s(12,"mat-icon"),m(13,"edit"),l()(),s(14,"button",51),g("click",function(){let i=z(t).$implicit,o=p(2);return B(o.requestDelete(i))}),s(15,"mat-icon"),m(16,"delete"),l()()()()}if(n&2){let t,e=a.$implicit,i=p(2);C("customer-item-selected",i.editorOpen()&&((t=i.selected())==null?null:t.id)===e.id),d(3),V(e.name),d(2),Ee("",e.email," \xB7 ",e.phone),d(2),ci(" Doc: ",e.document," \xB7 Criado ",Kt(8,11,e.createdAt,"short")," \xB7 Atualizado ",Kt(9,14,e.updatedAt,"short")," \xB7 Owner: ",e.ownerId," "),d(4),u("disabled",i.busy()),d(3),u("disabled",i.busy())}}function no(n,a){if(n&1){let t=U();s(0,"mat-paginator",52),g("page",function(i){z(t);let o=p(2);return B(o.onListPageChange(i))}),l()}if(n&2){let t=p(2);u("length",t.totalElements())("pageIndex",t.pageIndex())("pageSize",t.pageSize())("pageSizeOptions",t.pageSizeOptions)("showFirstLastButtons",!0)}}function ao(n,a){if(n&1&&(s(0,"mat-list",41),Et(1,io,17,17,"mat-list-item",42,Za),l(),f(3,no,1,5,"mat-paginator",43)),n&2){let t=p();d(),Tt(t.customers()),d(2),b(t.totalElements()>0?3:-1)}}function oo(n,a){if(n&1&&(s(0,"p",21),m(1),Ut(2,"date"),l()),n&2){let t=a;d(),Ee(" ID: ",t.id," \xB7 Atualizado em ",Kt(2,2,t.updatedAt,"short")," ")}}function ro(n,a){if(n&1&&(s(0,"mat-error"),m(1),l()),n&2){let t=p();d(),V(t.errMsg(t.customerForm.controls.name,"Nome"))}}function so(n,a){if(n&1&&(s(0,"mat-error"),m(1),l()),n&2){let t=p();d(),V(t.errMsg(t.customerForm.controls.email,"E-mail"))}}function lo(n,a){if(n&1&&(s(0,"mat-error"),m(1),l()),n&2){let t=p();d(),V(t.errMsg(t.customerForm.controls.phone,"Telefone"))}}function co(n,a){if(n&1&&(s(0,"mat-error"),m(1),l()),n&2){let t=p();d(),V(t.errMsg(t.customerForm.controls.document,"Documento"))}}var Rn=class n{listLoading=M(!1);actionLoading=M(!1);busy=di(()=>this.listLoading()||this.actionLoading());error=M(null);customers=M([]);selected=M(null);editorOpen=M(!1);pageIndex=M(0);pageSize=M(10);totalElements=M(0);pageSizeOptions=[5,10,25];skeletonSlots=[0,1,2,3,4,5];skeletonThemeFab={width:"40px",height:"40px",margin:"0","margin-bottom":"0","--ngx-skeleton-loader-base-color":"var(--customers-skeleton-fill)","--ngx-skeleton-loader-light-mode-color":"var(--customers-skeleton-shimmer-mid)","--ngx-skeleton-loader-light-mode-color-to":"rgba(255, 255, 255, 0)"};searchControl=new xi("",{nonNullable:!0});api=r(we);fb=r(Di);destroyRef=r(Qt);dialog=r(Nt);customerForm=this.fb.nonNullable.group({name:["",[$.required,$.maxLength(200)]],email:["",[$.required,$.email,$.maxLength(320)]],phone:["",[$.required,$.maxLength(30)]],document:["",[$.required,$.minLength(11),$.maxLength(18)]]});constructor(){this.searchControl.valueChanges.pipe(Gt(300),ei(),cn(this.destroyRef)).subscribe(()=>{this.pageIndex.set(0),this.reload()}),this.reload()}onEditorDrawerOpenedChange(a){!a&&this.editorOpen()&&this.clearSelection()}requestCloseWithoutSave(){if(!this.actionLoading()){if(!this.customerForm.dirty){this.clearSelection();return}this.dialog.open(ke,{width:"min(calc(100vw - 48px), 26rem)",autoFocus:"first-tabbable"}).afterClosed().pipe(q(1)).subscribe(a=>{a===!0&&this.clearSelection()})}}activeSearch(){return this.searchControl.value.trim().length>0}showErr(a){return a.invalid&&(a.touched||a.dirty)}errMsg(a,t){return a.hasError("required")?`${t} \xE9 obrigat\xF3rio.`:a.hasError("email")?"Informe um e-mail v\xE1lido.":a.hasError("maxlength")?`${t} excede o tamanho m\xE1ximo.`:a.hasError("minlength")?`${t} \xE9 curto demais (m\xEDn. 11 caracteres).`:`${t} inv\xE1lido.`}reload(){let a=this.searchControl.value.trim();this.listLoading.set(!0),this.error.set(null),this.api.list(a||void 0,this.pageIndex(),this.pageSize()).subscribe({next:t=>{if(t.content.length===0&&t.totalElements>0&&t.totalPages>0&&t.page>=t.totalPages){this.pageIndex.set(Math.max(0,t.totalPages-1)),this.listLoading.set(!1),this.reload();return}this.customers.set(t.content),this.totalElements.set(t.totalElements),t.page!==this.pageIndex()&&this.pageIndex.set(t.page),this.listLoading.set(!1);let e=this.selected();e&&!t.content.some(i=>i.id===e.id)&&this.clearSelection()},error:()=>{this.listLoading.set(!1),this.error.set("Falha ao carregar clientes (verifique login/API).")}})}onListPageChange(a){this.pageIndex.set(a.pageIndex),this.pageSize.set(a.pageSize),this.reload()}openCreate(){this.editorOpen.set(!0),this.selected.set(null),this.customerForm.reset({name:"",email:"",phone:"",document:""})}openEdit(a){this.actionLoading.set(!0),this.error.set(null),this.api.get(a).subscribe({next:t=>{this.selected.set(t),this.editorOpen.set(!0),this.customerForm.reset({name:t.name,email:t.email,phone:t.phone,document:t.document}),this.actionLoading.set(!1)},error:()=>{this.actionLoading.set(!1),this.error.set("Falha ao carregar o cliente.")}})}clearSelection(){this.editorOpen.set(!1),this.selected.set(null),this.customerForm.reset({name:"",email:"",phone:"",document:""})}submitCustomerForm(){let a=this.selected();if(this.customerForm.invalid)return;let t=this.customerForm.getRawValue();a?(this.actionLoading.set(!0),this.error.set(null),this.api.update(a.id,t).subscribe({next:()=>{this.clearSelection(),this.actionLoading.set(!1),this.reload()},error:()=>{this.actionLoading.set(!1),this.error.set("Falha ao atualizar cliente.")}})):(this.actionLoading.set(!0),this.error.set(null),this.api.create(t).subscribe({next:()=>{this.clearSelection(),this.actionLoading.set(!1),this.reload()},error:()=>{this.actionLoading.set(!1),this.error.set("Falha ao cadastrar cliente.")}}))}requestDelete(a){this.busy()||this.dialog.open(Ce,{width:"min(calc(100vw - 48px), 26rem)",autoFocus:"first-tabbable",data:{name:a.name}}).afterClosed().pipe(q(1)).subscribe(t=>{t===!0&&this.remove(a.id)})}remove(a){this.actionLoading.set(!0),this.error.set(null),this.api.delete(a).subscribe({next:()=>{this.selected()?.id===a&&this.clearSelection(),this.actionLoading.set(!1),this.reload()},error:()=>{this.actionLoading.set(!1),this.error.set("Falha ao excluir cliente.")}})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["app-customers-page"]],decls:60,vars:20,consts:[[1,"app-feature-page","customers-page"],[1,"customers-page-header"],[1,"mat-headline-medium","app-feature-page__title","customers-page-title"],[1,"customers-page-tools"],["appearance","outline","subscriptSizing","dynamic",1,"customers-inline-search"],["matPrefix",""],["matInput","","type","search","placeholder","Nome, e-mail, telefone ou documento\u2026","autocomplete","off",3,"formControl"],[1,"toolbar"],["mat-flat-button","","color","primary","type","button",3,"click","disabled"],["mat-stroked-button","","type","button",3,"click","disabled"],[1,"customers-sidenav",3,"hasBackdrop"],["appearance","outlined",1,"app-feature-panel"],[1,"customers-panel-body"],["role","alert",1,"app-inline-alert-error","mat-body-medium"],["role","status","aria-live","polite","aria-busy","true","aria-label","Carregando lista de clientes",1,"customer-skeleton-list"],["role","status",1,"empty-state"],["position","end","mode","over","aria-labelledby","customers-editor-title",1,"customers-editor-sidenav",3,"openedChange","fixedInViewport","opened","disableClose"],[1,"editor-drawer-panel"],[1,"editor-toolbar"],["id","customers-editor-title",1,"mat-headline-small","editor-title"],["mat-icon-button","","type","button","matTooltip","Fechar painel","aria-label","Fechar painel de edi\xE7\xE3o",3,"click","disabled"],[1,"meta-sub","mat-body-small","app-text-muted"],[1,"app-feature-form-stack",3,"ngSubmit","formGroup"],["appearance","outline"],["matInput","","type","text","formControlName","name","autocomplete","name"],["matInput","","type","email","formControlName","email","autocomplete","email"],["matInput","","type","text","formControlName","phone","autocomplete","tel"],["matInput","","type","text","formControlName","document"],[1,"actions-row"],["mat-stroked-button","","type","button","matTooltip","Cancelar edi\xE7\xE3o e fechar o painel",1,"cancel-editor",3,"click","disabled"],["mat-flat-button","","color","primary","type","submit",3,"disabled"],[1,"customer-skeleton-card"],["aria-hidden","true",1,"customer-skeleton-card__text"],[1,"customer-skeleton-line","customer-skeleton-line--title"],[1,"customer-skeleton-line","customer-skeleton-line--mid"],[1,"customer-skeleton-line","customer-skeleton-line--meta"],[1,"customer-skeleton-card__actions"],["appearance","circle","ariaLabel","Carregando a\xE7\xE3o editar",3,"count","theme"],["appearance","circle","ariaLabel","Carregando a\xE7\xE3o excluir",3,"count","theme"],[1,"empty-title","mat-body-large"],[1,"empty-hint","mat-body-medium","app-text-muted"],["role","list",1,"customer-list"],[1,"customer-item",3,"customer-item-selected"],["aria-label","Selecionar p\xE1gina da lista de clientes",1,"customers-paginator",3,"length","pageIndex","pageSize","pageSizeOptions","showFirstLastButtons"],[1,"customer-item"],["matListItemTitle","",1,"customer-block"],[1,"customer-name"],[1,"customer-contact","mat-body-medium"],[1,"customer-meta","mat-body-small","app-text-muted"],["matListItemMeta","",1,"item-actions"],["mat-mini-fab","","type","button","color","primary","matTooltip","Editar","aria-label","Editar cliente",1,"item-action-fab","item-action-fab--edit",3,"click","disabled"],["mat-mini-fab","","type","button","color","warn","matTooltip","Excluir","aria-label","Excluir cliente",1,"item-action-fab","item-action-fab--delete",3,"click","disabled"],["aria-label","Selecionar p\xE1gina da lista de clientes",1,"customers-paginator",3,"page","length","pageIndex","pageSize","pageSizeOptions","showFirstLastButtons"]],template:function(t,e){if(t&1&&(s(0,"div",0)(1,"header",1)(2,"h1",2),m(3,"Clientes"),l(),s(4,"div",3)(5,"mat-form-field",4)(6,"mat-label"),m(7,"Buscar"),l(),s(8,"mat-icon",5),m(9,"search"),l(),S(10,"input",6),l(),s(11,"div",7)(12,"button",8),g("click",function(){return e.openCreate()}),m(13," Novo cliente "),l(),s(14,"button",9),g("click",function(){return e.reload()}),m(15,"Recarregar"),l()()()(),s(16,"mat-sidenav-container",10)(17,"mat-sidenav-content")(18,"mat-card",11)(19,"mat-card-content",12),f(20,Ya,2,1,"p",13),f(21,Ja,3,0,"div",14)(22,to,7,1,"div",15)(23,eo,5,0,"div",15)(24,ao,4,1),l()()(),s(25,"mat-sidenav",16),g("openedChange",function(o){return e.onEditorDrawerOpenedChange(o)}),s(26,"div",17)(27,"div",18)(28,"h2",19),m(29),l(),s(30,"button",20),g("click",function(){return e.requestCloseWithoutSave()}),s(31,"mat-icon"),m(32,"close"),l()()(),f(33,oo,3,5,"p",21),s(34,"form",22),g("ngSubmit",function(){return e.submitCustomerForm()}),s(35,"mat-form-field",23)(36,"mat-label"),m(37,"Nome"),l(),S(38,"input",24),f(39,ro,2,1,"mat-error"),l(),s(40,"mat-form-field",23)(41,"mat-label"),m(42,"E-mail"),l(),S(43,"input",25),f(44,so,2,1,"mat-error"),l(),s(45,"mat-form-field",23)(46,"mat-label"),m(47,"Telefone"),l(),S(48,"input",26),f(49,lo,2,1,"mat-error"),l(),s(50,"mat-form-field",23)(51,"mat-label"),m(52,"CPF ou CNPJ"),l(),S(53,"input",27),f(54,co,2,1,"mat-error"),l(),s(55,"div",28)(56,"button",29),g("click",function(){return e.requestCloseWithoutSave()}),m(57," Cancelar "),l(),s(58,"button",30),m(59),l()()()()()()()),t&2){let i;d(10),u("formControl",e.searchControl),d(2),u("disabled",e.busy()),d(2),u("disabled",e.busy()),d(2),u("hasBackdrop",!0),d(4),b(e.error()?20:-1),d(),b(e.listLoading()?21:e.customers().length===0&&!e.activeSearch()?22:e.customers().length===0&&e.activeSearch()?23:24),d(4),u("fixedInViewport",!0)("opened",e.editorOpen())("disableClose",e.actionLoading()||e.customerForm.dirty),d(4),ot(" ",e.selected()?"Editar cliente":"Novo cliente"," "),d(),u("disabled",e.actionLoading()),d(3),b((i=e.selected())?33:-1,i),d(),u("formGroup",e.customerForm),d(5),b(e.showErr(e.customerForm.controls.name)?39:-1),d(5),b(e.showErr(e.customerForm.controls.email)?44:-1),d(5),b(e.showErr(e.customerForm.controls.phone)?49:-1),d(5),b(e.showErr(e.customerForm.controls.document)?54:-1),d(2),u("disabled",e.actionLoading()),d(2),u("disabled",e.customerForm.invalid||e.actionLoading()),d(),ot(" ",e.selected()?"Salvar":"Cadastrar"," ")}},dependencies:[Mi,wi,_i,bi,vi,ki,$t,Ci,Ni,ji,Vi,ht,kt,Bi,ee,ae,ne,Gi,Hi,Qi,Zi,$i,Xi,Yi,gn,hn,un,Re,ze,wn,He,Cn,Ue,kn,ue,ce,le,St,gi,pi],styles:[".customers-page[_ngcontent-%COMP%]{flex:1;min-height:0;display:flex;flex-direction:column;padding-top:var(--app-space-2)}.customers-sidenav[_ngcontent-%COMP%]{flex:1;min-height:min(70vh,36rem);width:100%;background:transparent}[_nghost-%COMP%]     .customers-sidenav .mat-drawer-backdrop.mat-drawer-shown{background-color:color-mix(in srgb,var(--mat-sys-on-surface) 22%,transparent)}@supports (backdrop-filter: blur(1px)){[_nghost-%COMP%]     .customers-sidenav .mat-drawer-backdrop.mat-drawer-shown{backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px)}}[_nghost-%COMP%]     .customers-editor-sidenav.mat-drawer{width:min(100vw - var(--app-space-4),28rem);border-radius:var(--app-radius-lg) 0 0 var(--app-radius-lg);border-inline-end:none;box-shadow:none}[_nghost-%COMP%]     .customers-editor-sidenav .mat-drawer-inner-container{overflow-x:hidden}.editor-drawer-panel[_ngcontent-%COMP%]{box-sizing:border-box;min-height:100%;padding:var(--app-space-4) var(--app-space-4) var(--app-space-6);background-color:var(--mat-sys-surface-container-lowest)}.customers-page-header[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:var(--app-space-3) var(--app-space-4);padding-bottom:var(--app-space-4);margin-bottom:var(--app-space-1);border-bottom:1px solid var(--mat-sys-outline-variant);overflow:visible}.customers-page-title[_ngcontent-%COMP%]{margin:0;flex:0 1 auto;min-width:min(100%,12rem)}.customers-page-tools[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-end;gap:var(--app-space-3);flex:1 1 16rem;overflow:visible}.customers-inline-search[_ngcontent-%COMP%]{flex:1 1 12rem;width:min(100%,22rem);max-width:min(100%,28rem)}.toolbar[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:var(--app-space-2);align-items:center;flex:0 0 auto}.customers-panel-body[_ngcontent-%COMP%]{padding-top:var(--app-space-4)!important}.empty-state[_ngcontent-%COMP%]{margin-top:var(--app-space-2);padding:var(--app-space-6) var(--app-space-5);border:1px dashed var(--mat-sys-outline-variant);border-radius:var(--app-radius-md);text-align:center;background-color:var(--mat-sys-surface-container-low)}.empty-title[_ngcontent-%COMP%]{margin:0;font-weight:600}.empty-hint[_ngcontent-%COMP%]{margin:var(--app-space-2) auto var(--app-space-4);max-width:22.5rem;line-height:1.55}.customer-list[_ngcontent-%COMP%]{padding:0;margin-top:var(--app-space-2);background:transparent}.customer-list[_ngcontent-%COMP%]     mat-list-item.customer-item+mat-list-item.customer-item{margin-top:var(--app-space-3)}.customer-item[_ngcontent-%COMP%]{height:auto!important;min-height:4.75rem;align-items:center;box-sizing:border-box;border-radius:var(--app-radius-md);border:1px solid var(--mat-sys-outline-variant);background-color:var(--mat-sys-surface-container-low);box-shadow:0 1px 3px color-mix(in srgb,var(--mat-sys-on-surface) 7%,transparent);overflow:hidden}.customer-item[_ngcontent-%COMP%]     .mat-mdc-list-item-meta{align-self:center}.customer-block[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;gap:var(--app-space-1);padding-block:var(--app-space-2);min-width:0;width:100%}.customer-name[_ngcontent-%COMP%]{font-weight:600;font-size:1rem;line-height:1.35;color:var(--mat-sys-on-surface)}.customer-contact[_ngcontent-%COMP%]{margin:0;line-height:1.4;color:var(--mat-sys-on-surface)}.customer-meta[_ngcontent-%COMP%]{margin:0;line-height:1.4;font-size:.8125rem}.item-actions[_ngcontent-%COMP%]{display:flex;gap:var(--app-space-3);justify-content:flex-end;align-items:center}.item-action-fab--edit.mat-mdc-mini-fab[_ngcontent-%COMP%]{--mdc-fab-container-color: var(--mat-sys-primary);--mat-fab-foreground-color: var(--mat-sys-on-primary)}.item-action-fab--delete.mat-mdc-mini-fab[_ngcontent-%COMP%]{--mdc-fab-container-color: var(--mat-sys-error);--mat-fab-foreground-color: var(--mat-sys-on-error)}.customer-item-selected[_ngcontent-%COMP%]{border-color:color-mix(in srgb,var(--mat-sys-primary) 55%,var(--mat-sys-outline-variant));background-color:color-mix(in srgb,var(--mat-sys-primary) 10%,var(--mat-sys-surface-container-low));box-shadow:0 0 0 1px color-mix(in srgb,var(--mat-sys-primary) 22%,transparent),0 1px 4px color-mix(in srgb,var(--mat-sys-on-surface) 8%,transparent)}.editor-toolbar[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-start;gap:var(--app-space-3);margin-bottom:var(--app-space-4);padding-bottom:var(--app-space-3);border-bottom:1px solid var(--mat-sys-outline-variant)}.editor-title[_ngcontent-%COMP%]{margin:0;flex:1;min-width:0;padding-inline-end:var(--app-space-2)}.meta-sub[_ngcontent-%COMP%]{margin:0 0 var(--app-space-4)}.actions-row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:var(--app-space-2);align-items:center;justify-content:flex-end;margin-top:var(--app-space-4);padding-top:var(--app-space-2)}.actions-row[_ngcontent-%COMP%]   .cancel-editor[_ngcontent-%COMP%]{margin-inline-end:auto}"],changeDetection:0})};export{Rn as CustomersPage};
