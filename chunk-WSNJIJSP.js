import{c as kt,d as W,g as V,h as Y,m as ne,n as ae}from"./chunk-YYKUHKUL.js";import{a as ie,b as Q,c as oe,d as re}from"./chunk-UAIUNSO3.js";import{A as ee,b as yt,d as u,e as wt,f as Ct,g as Mt,h as Lt,i as It,j as St,k as Et,l as Dt,m as Ot,n as Ut,o as $t,p as Ht,s as Gt,t as Kt,u as Xt,v as Wt,w as Yt,x as Zt,y as Jt,z as te}from"./chunk-N4EPUFBS.js";import{$ as L,B as rt,Bb as N,Cb as B,D as st,Dc as Rt,Fc as E,Ga as O,Gc as jt,Ha as z,Hc as Nt,Ia as v,Ja as T,Jc as Bt,M as ct,Mc as q,Nc as Vt,Oc as qt,Pc as Qt,R as lt,Ra as R,S as A,Sa as p,Ta as _,U as $,Ua as ht,V as mt,Va as pt,W as m,Wa as g,Xa as r,Xb as ft,Ya as o,Za as f,_ as M,_b as xt,ac as vt,ca as H,cb as j,e as nt,ea as F,eb as x,g as at,gb as h,gc as S,ha as dt,hb as G,ib as k,jb as K,ka as b,kb as _t,kc as Tt,lb as y,lc as At,mb as w,na as D,oc as Ft,pa as P,sb as I,sc as Pt,tc as zt,ua as s,ub as c,vb as C,w as ot,wb as gt,xb as X,yb as ut,zb as bt}from"./chunk-NIG4ULNJ.js";function se(e){e||(e=m(F));let a=new at(t=>{if(e.destroyed){t.next();return}return e.onDestroy(t.next.bind(t))});return t=>t.pipe(ct(a))}var ce=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=z({type:e});static \u0275inj=A({imports:[q]})}return e})();var ue=["*"],be=`.mdc-list {
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
`,fe=["unscopedContent"],xe=["text"],ve=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],ke=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var ye=new $("ListOption"),tt=(()=>{class e{_elementRef=m(P);constructor(){}static \u0275fac=function(i){return new(i||e)};static \u0275dir=v({type:e,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return e})(),et=(()=>{class e{_elementRef=m(P);constructor(){}static \u0275fac=function(i){return new(i||e)};static \u0275dir=v({type:e,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return e})(),it=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275dir=v({type:e,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return e})(),le=(()=>{class e{_listOption=m(ye,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(i){return new(i||e)};static \u0275dir=v({type:e,hostVars:4,hostBindings:function(i,n){i&2&&I("mdc-list-item__start",n._isAlignedAtStart())("mdc-list-item__end",!n._isAlignedAtStart())}})}return e})(),we=(()=>{class e extends le{static \u0275fac=(()=>{let t;return function(n){return(t||(t=D(e)))(n||e)}})();static \u0275dir=v({type:e,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[T]})}return e})(),Ce=(()=>{class e extends le{static \u0275fac=(()=>{let t;return function(n){return(t||(t=D(e)))(n||e)}})();static \u0275dir=v({type:e,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[T]})}return e})(),Me=new $("MAT_LIST_CONFIG"),J=(()=>{class e{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=E(t)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(t){this._disabled.set(E(t))}_disabled=b(!1);_defaultOptions=m(Me,{optional:!0});static \u0275fac=function(i){return new(i||e)};static \u0275dir=v({type:e,hostVars:1,hostBindings:function(i,n){i&2&&R("aria-disabled",n.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return e})(),Le=(()=>{class e{_elementRef=m(P);_ngZone=m(dt);_listBase=m(J,{optional:!0});_platform=m(Tt);_hostElement;_isButtonElement;_noopAnimations=Rt();_avatars;_icons;set lines(t){this._explicitLines=At(t,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(t){this._disableRipple=E(t)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(t){this._disabled.set(E(t))}_disabled=b(!1);_subscriptions=new nt;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){m(Ft).load(Bt);let t=m(Nt,{optional:!0});this.rippleConfig=t||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new jt(this,this._ngZone,this._hostElement,this._platform,m(H)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(ot(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(t){if(!this._lines||!this._titles||!this._unscopedContent)return;t&&this._checkDomForUnscopedTextContent();let i=this._explicitLines??this._inferLinesFromContent(),n=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",i===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",i===3),this._hasUnscopedTextContent){let l=this._titles.length===0&&i===1;n.classList.toggle("mdc-list-item__primary-text",l),n.classList.toggle("mdc-list-item__secondary-text",!l)}else n.classList.remove("mdc-list-item__primary-text"),n.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let t=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(t+=1),t}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(t=>t.nodeType!==t.COMMENT_NODE).some(t=>!!(t.textContent&&t.textContent.trim()))}static \u0275fac=function(i){return new(i||e)};static \u0275dir=v({type:e,contentQueries:function(i,n,l){if(i&1&&K(l,we,4)(l,Ce,4),i&2){let d;y(d=w())&&(n._avatars=d),y(d=w())&&(n._icons=d)}},hostVars:4,hostBindings:function(i,n){i&2&&(R("aria-disabled",n.disabled)("disabled",n._isButtonElement&&n.disabled||null),I("mdc-list-item--disabled",n.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return e})();var me=(()=>{class e extends J{static \u0275fac=(()=>{let t;return function(n){return(t||(t=D(e)))(n||e)}})();static \u0275cmp=O({type:e,selectors:[["mat-list"]],hostAttrs:[1,"mat-mdc-list","mat-mdc-list-base","mdc-list"],exportAs:["matList"],features:[bt([{provide:J,useExisting:e}]),T],ngContentSelectors:ue,decls:1,vars:0,template:function(i,n){i&1&&(G(),k(0))},styles:[be],encapsulation:2,changeDetection:0})}return e})(),de=(()=>{class e extends Le{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(t){this._activated=E(t)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let t;return function(n){return(t||(t=D(e)))(n||e)}})();static \u0275cmp=O({type:e,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(i,n,l){if(i&1&&K(l,et,5)(l,tt,5)(l,it,5),i&2){let d;y(d=w())&&(n._lines=d),y(d=w())&&(n._titles=d),y(d=w())&&(n._meta=d)}},viewQuery:function(i,n){if(i&1&&_t(fe,5)(xe,5),i&2){let l;y(l=w())&&(n._unscopedContent=l.first),y(l=w())&&(n._itemText=l.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(i,n){i&2&&(R("aria-current",n._getAriaCurrent()),I("mdc-list-item--activated",n.activated)("mdc-list-item--with-leading-avatar",n._avatars.length!==0)("mdc-list-item--with-leading-icon",n._icons.length!==0)("mdc-list-item--with-trailing-meta",n._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",n._hasBothLeadingAndTrailing())("_mat-animation-noopable",n._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[T],ngContentSelectors:ke,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(i,n){i&1&&(G(ve),k(0),r(1,"span",1),k(2,1),k(3,2),r(4,"span",2,0),x("cdkObserveContent",function(){return n._updateItemLines(!0)}),k(6,3),o()(),k(7,4),k(8,5),f(9,"div",3))},dependencies:[Pt],encapsulation:2,changeDetection:0})}return e})();var he=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=z({type:e});static \u0275inj=A({imports:[zt,Vt,ce,q,Q]})}return e})();var U=class e{constructor(a){this.http=a}list(a){let t=a?.trim()??"",i=new xt;return t.length>0&&(i=i.set("q",t)),this.http.get(`${S.apiBaseUrl}/api/v1/customers`,{params:i})}get(a){return this.http.get(`${S.apiBaseUrl}/api/v1/customers/${a}`)}create(a){return this.http.post(`${S.apiBaseUrl}/api/v1/customers`,a)}update(a,t){return this.http.put(`${S.apiBaseUrl}/api/v1/customers/${a}`,t)}delete(a){return this.http.delete(`${S.apiBaseUrl}/api/v1/customers/${a}`)}static \u0275fac=function(t){return new(t||e)(mt(vt))};static \u0275prov=lt({token:e,factory:e.\u0275fac,providedIn:"root"})};var pe="cubic-bezier(0.2, 0, 0, 1)",_e=kt("editorPanel",[Y(":enter",[V({opacity:0,transform:"translateY(16px)"}),W(`280ms ${pe}`,V({opacity:1,transform:"translateY(0)"}))]),Y(":leave",[W(`200ms ${pe}`,V({opacity:0,transform:"translateY(10px)"}))])]);var Se=(e,a)=>a.id;function Ee(e,a){e&1&&f(0,"mat-progress-bar",4)}function De(e,a){if(e&1&&(r(0,"p",13),c(1),o()),e&2){let t=h();s(),C(t.error())}}function Oe(e,a){if(e&1){let t=j();r(0,"div",14)(1,"p",17),c(2,"Nenhum cliente cadastrado"),o(),r(3,"p",18),c(4," Que tal adicionar o primeiro? Use o bot\xE3o acima ou cadastre direto aqui. "),o(),r(5,"button",7),x("click",function(){M(t);let n=h();return L(n.openCreate())}),c(6," Cadastrar primeiro cliente "),o()()}if(e&2){let t=h();s(5),g("disabled",t.loading())}}function Te(e,a){e&1&&(r(0,"div",14)(1,"p",17),c(2,"Nenhum resultado encontrado"),o(),r(3,"p",18),c(4," Ajuste o termo de busca ou limpe o campo para ver todos os clientes. "),o()())}function Ae(e,a){e&1&&f(0,"mat-divider")}function Fe(e,a){if(e&1){let t=j();r(0,"mat-list-item",19)(1,"div",20),c(2),o(),r(3,"div",21),c(4),o(),r(5,"div",22),c(6),N(7,"date"),N(8,"date"),o(),r(9,"div",23)(10,"button",8),x("click",function(){let n=M(t).$implicit,l=h(2);return L(l.openEdit(n.id))}),c(11," Editar "),o(),r(12,"button",24),x("click",function(){let n=M(t).$implicit,l=h(2);return L(l.remove(n.id))}),c(13," Excluir "),o()()(),p(14,Ae,1,0,"mat-divider")}if(e&2){let t,i=a.$implicit,n=a.$index,l=a.$count,d=h(2);I("customer-item-selected",d.editorOpen()&&((t=d.selected())==null?null:t.id)===i.id),s(2),C(i.name),s(2),X("",i.email," \xB7 ",i.phone),s(2),ut(" Doc: ",i.document," \xB7 Criado ",B(7,12,i.createdAt,"short")," \xB7 Atualizado ",B(8,15,i.updatedAt,"short")," \xB7 Owner: ",i.ownerId," "),s(4),g("disabled",d.loading()),s(2),g("disabled",d.loading()),s(2),_(n!==l-1?14:-1)}}function Pe(e,a){if(e&1&&(r(0,"mat-list",15),ht(1,Fe,15,18,null,null,Se),o()),e&2){let t=h();s(),pt(t.customers())}}function ze(e,a){if(e&1&&(r(0,"p",28),c(1),N(2,"date"),o()),e&2){let t=a;s(),X(" ID: ",t.id," \xB7 Atualizado em ",B(2,2,t.updatedAt,"short")," ")}}function Re(e,a){if(e&1&&(r(0,"mat-error"),c(1),o()),e&2){let t=h(2);s(),C(t.errMsg(t.customerForm.controls.name,"Nome"))}}function je(e,a){if(e&1&&(r(0,"mat-error"),c(1),o()),e&2){let t=h(2);s(),C(t.errMsg(t.customerForm.controls.email,"E-mail"))}}function Ne(e,a){if(e&1&&(r(0,"mat-error"),c(1),o()),e&2){let t=h(2);s(),C(t.errMsg(t.customerForm.controls.phone,"Telefone"))}}function Be(e,a){if(e&1&&(r(0,"mat-error"),c(1),o()),e&2){let t=h(2);s(),C(t.errMsg(t.customerForm.controls.document,"Documento"))}}function Ve(e,a){if(e&1){let t=j();r(0,"div",16)(1,"mat-card",25)(2,"mat-card-content")(3,"div",26)(4,"h2",27),c(5),o(),r(6,"button",8),x("click",function(){M(t);let n=h();return L(n.clearSelection())}),c(7," Voltar \xE0 lista "),o()(),p(8,ze,3,5,"p",28),r(9,"form",29),x("ngSubmit",function(){M(t);let n=h();return L(n.submitCustomerForm())}),r(10,"mat-form-field",30)(11,"mat-label"),c(12,"Nome"),o(),f(13,"input",31),p(14,Re,2,1,"mat-error"),o(),r(15,"mat-form-field",30)(16,"mat-label"),c(17,"E-mail"),o(),f(18,"input",32),p(19,je,2,1,"mat-error"),o(),r(20,"mat-form-field",30)(21,"mat-label"),c(22,"Telefone"),o(),f(23,"input",33),p(24,Ne,2,1,"mat-error"),o(),r(25,"mat-form-field",30)(26,"mat-label"),c(27,"CPF ou CNPJ"),o(),f(28,"input",34),p(29,Be,2,1,"mat-error"),o(),r(30,"div",35)(31,"button",36),c(32),o()()()()()()}if(e&2){let t,i=h();g("@editorPanel",void 0),s(5),C(i.selected()?"Editar cliente":"Novo cliente"),s(),g("disabled",i.loading()),s(2),_((t=i.selected())?8:-1,t),s(),g("formGroup",i.customerForm),s(5),_(i.showErr(i.customerForm.controls.name)?14:-1),s(5),_(i.showErr(i.customerForm.controls.email)?19:-1),s(5),_(i.showErr(i.customerForm.controls.phone)?24:-1),s(5),_(i.showErr(i.customerForm.controls.document)?29:-1),s(2),g("disabled",i.customerForm.invalid||i.loading()),s(),gt(" ",i.selected()?"Salvar":"Cadastrar"," ")}}var ge=class e{loading=b(!1);error=b(null);customers=b([]);selected=b(null);editorOpen=b(!1);searchControl=new Mt("",{nonNullable:!0});api=m(U);fb=m(Dt);destroyRef=m(F);customerForm=this.fb.nonNullable.group({name:["",[u.required,u.maxLength(200)]],email:["",[u.required,u.email,u.maxLength(320)]],phone:["",[u.required,u.maxLength(30)]],document:["",[u.required,u.minLength(11),u.maxLength(18)]]});constructor(){this.searchControl.valueChanges.pipe(rt(300),st(),se(this.destroyRef)).subscribe(()=>this.reload()),this.reload()}activeSearch(){return this.searchControl.value.trim().length>0}showErr(a){return a.invalid&&(a.touched||a.dirty)}errMsg(a,t){return a.hasError("required")?`${t} \xE9 obrigat\xF3rio.`:a.hasError("email")?"Informe um e-mail v\xE1lido.":a.hasError("maxlength")?`${t} excede o tamanho m\xE1ximo.`:a.hasError("minlength")?`${t} \xE9 curto demais (m\xEDn. 11 caracteres).`:`${t} inv\xE1lido.`}reload(){let a=this.searchControl.value.trim();this.loading.set(!0),this.error.set(null),this.api.list(a||void 0).subscribe({next:t=>{this.customers.set(t),this.loading.set(!1);let i=this.selected();i&&!t.some(n=>n.id===i.id)&&this.clearSelection()},error:()=>{this.loading.set(!1),this.error.set("Falha ao carregar clientes (verifique login/API).")}})}openCreate(){this.editorOpen.set(!0),this.selected.set(null),this.customerForm.reset({name:"",email:"",phone:"",document:""})}openEdit(a){this.loading.set(!0),this.error.set(null),this.api.get(a).subscribe({next:t=>{this.selected.set(t),this.editorOpen.set(!0),this.customerForm.reset({name:t.name,email:t.email,phone:t.phone,document:t.document}),this.loading.set(!1)},error:()=>{this.loading.set(!1),this.error.set("Falha ao carregar o cliente.")}})}clearSelection(){this.editorOpen.set(!1),this.selected.set(null),this.customerForm.reset({name:"",email:"",phone:"",document:""})}submitCustomerForm(){let a=this.selected();if(this.customerForm.invalid)return;let t=this.customerForm.getRawValue();a?(this.loading.set(!0),this.error.set(null),this.api.update(a.id,t).subscribe({next:()=>{this.clearSelection(),this.reload()},error:()=>{this.loading.set(!1),this.error.set("Falha ao atualizar cliente.")}})):(this.loading.set(!0),this.error.set(null),this.api.create(t).subscribe({next:()=>{this.clearSelection(),this.reload()},error:()=>{this.loading.set(!1),this.error.set("Falha ao cadastrar cliente.")}}))}remove(a){globalThis.confirm("Excluir este cliente? Esta a\xE7\xE3o n\xE3o pode ser desfeita.")&&(this.loading.set(!0),this.error.set(null),this.api.delete(a).subscribe({next:()=>{this.selected()?.id===a&&this.clearSelection(),this.reload()},error:()=>{this.loading.set(!1),this.error.set("Falha ao excluir cliente.")}}))}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=O({type:e,selectors:[["app-customers-page"]],decls:28,vars:7,consts:[[1,"app-feature-page"],[1,"mat-headline-medium","page-title"],[1,"mat-body-medium","app-feature-page__subtitle"],["appearance","outlined",1,"app-feature-panel"],["mode","indeterminate","aria-label","Carregando lista"],[1,"app-feature-panel-head"],[1,"toolbar"],["mat-flat-button","","color","primary","type","button",3,"click","disabled"],["mat-stroked-button","","type","button",3,"click","disabled"],[1,"customers-panel-body"],["appearance","outline","subscriptSizing","dynamic",1,"search-field"],["matPrefix",""],["matInput","","type","search","placeholder","Nome, e-mail, telefone ou documento\u2026","autocomplete","off",3,"formControl"],["role","alert",1,"app-inline-alert-error","mat-body-medium"],["role","status",1,"empty-state"],[1,"customer-list"],[1,"editor-host"],[1,"empty-title","mat-body-large"],[1,"empty-hint","mat-body-medium","app-text-muted"],["lines","3",1,"customer-item"],["matListItemTitle",""],["matListItemLine",""],["matListItemLine","",1,"dim-line","app-text-muted"],["matListItemMeta","",1,"item-actions"],["mat-flat-button","","color","warn","type","button",3,"click","disabled"],["appearance","outlined",1,"app-feature-panel","editor"],[1,"editor-toolbar"],[1,"mat-headline-small","editor-title"],[1,"meta-sub","mat-body-small","app-text-muted"],[1,"app-feature-form-stack",3,"ngSubmit","formGroup"],["appearance","outline"],["matInput","","type","text","formControlName","name","autocomplete","name"],["matInput","","type","email","formControlName","email","autocomplete","email"],["matInput","","type","text","formControlName","phone","autocomplete","tel"],["matInput","","type","text","formControlName","document"],[1,"actions-row"],["mat-flat-button","","color","primary","type","submit",3,"disabled"]],template:function(t,i){t&1&&(r(0,"div",0)(1,"header")(2,"h1",1),c(3,"Clientes"),o(),r(4,"p",2),c(5,"Cadastro com formul\xE1rios reativos e valida\xE7\xF5es."),o()(),r(6,"mat-card",3),p(7,Ee,1,0,"mat-progress-bar",4),r(8,"mat-card-header",5)(9,"mat-card-title"),c(10,"Lista"),o(),r(11,"div",6)(12,"button",7),x("click",function(){return i.openCreate()}),c(13," Novo cliente "),o(),r(14,"button",8),x("click",function(){return i.reload()}),c(15,"Recarregar"),o()()(),r(16,"mat-card-content",9)(17,"mat-form-field",10)(18,"mat-label"),c(19,"Buscar"),o(),r(20,"mat-icon",11),c(21,"search"),o(),f(22,"input",12),o(),p(23,De,2,1,"p",13),p(24,Oe,7,1,"div",14)(25,Te,5,0,"div",14)(26,Pe,3,0,"mat-list",15),o()(),p(27,Ve,33,11,"div",16),o()),t&2&&(s(7),_(i.loading()?7:-1),s(5),g("disabled",i.loading()),s(2),g("disabled",i.loading()),s(8),g("formControl",i.searchControl),s(),_(i.error()?23:-1),s(),_(!i.loading()&&i.customers().length===0&&!i.activeSearch()?24:!i.loading()&&i.customers().length===0&&i.activeSearch()?25:26),s(3),_(i.editorOpen()?27:-1))},dependencies:[Ot,Lt,yt,wt,Ct,It,Et,St,Kt,Ut,Ht,Gt,$t,Qt,qt,Jt,Zt,Xt,Wt,Yt,ee,te,ae,ne,Q,ie,he,me,de,et,tt,it,re,oe,ft],styles:[".toolbar[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:8px;align-items:center}.customers-panel-body[_ngcontent-%COMP%]{padding-top:8px!important}.search-field[_ngcontent-%COMP%]{width:100%;max-width:440px;margin-bottom:8px}.empty-state[_ngcontent-%COMP%]{margin-top:16px;padding:28px 20px;border:1px dashed var(--mat-sys-outline-variant);border-radius:12px;text-align:center;background-color:var(--mat-sys-surface-container-low)}.empty-title[_ngcontent-%COMP%]{margin:0;font-weight:600}.empty-hint[_ngcontent-%COMP%]{margin:8px auto 16px;max-width:360px;line-height:1.45}.customer-list[_ngcontent-%COMP%]{padding:0;margin-top:8px}.customer-item[_ngcontent-%COMP%]{height:auto!important;min-height:72px;align-items:flex-start}.customer-item[_ngcontent-%COMP%]     .mat-mdc-list-item-meta{align-self:center}.dim-line[_ngcontent-%COMP%]{font-size:.8rem}.item-actions[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:8px;justify-content:flex-end}.customer-item-selected[_ngcontent-%COMP%]{background-color:color-mix(in srgb,var(--mat-sys-primary) 12%,transparent)}.editor-toolbar[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:12px;margin-bottom:8px}.editor-title[_ngcontent-%COMP%]{margin:0}.meta-sub[_ngcontent-%COMP%]{margin:0 0 12px}.actions-row[_ngcontent-%COMP%]{display:flex;gap:8px;align-items:center;margin-top:8px}.editor-host[_ngcontent-%COMP%]{display:block;width:100%}"],data:{animation:[_e]},changeDetection:0})};export{ge as CustomersPage};
