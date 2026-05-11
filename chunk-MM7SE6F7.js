import{a as ci,b as di,c as pi,d as X,e as ui,f as re,g as se,h as gi,i as _i,j as yt,k as xt,l as Rt,n as fi,o as bi,p as vi,r as Bt,s as yi,t as zt,u as xi,v as wi}from"./chunk-CCSM3O5S.js";import{a as mi,b as hi}from"./chunk-DO7GI3BW.js";import{A as li,b as Fe,d as B,e as Le,f as Pe,g as Re,h as Be,i as ze,j as je,k as Ne,l as Ve,m as Qe,n as Je,p as ti,t as ei,u as ii,v as ni,w as ai,x as oi,y as ri,z as si}from"./chunk-AG6ELD7J.js";import{$a as l,Ab as oe,Ac as Ue,Ba as gt,Bb as Ee,Bc as dt,C as At,Cb as Z,D as R,Dc as bt,E as ee,Eb as It,F as we,Fb as Ot,Ia as p,Ja as P,Ka as C,La as Me,Lc as at,M as J,Ma as w,Na as _t,Nc as O,O as F,Oc as We,Pc as Ze,Qb as nt,Rc as $e,Sc as Ke,T as rt,Tc as vt,U as L,Ua as I,Uc as V,Va as D,Vc as Xe,W as A,Wa as M,Wc as mt,X as ke,Xa as Ae,Xc as Ye,Y as o,Ya as Se,Yc as ht,Za as g,_a as s,_b as Te,a as z,aa as tt,ab as G,b as Jt,ba as et,bc as Ie,dc as Oe,e as ye,ea as k,fa as St,fb as st,g as xe,ga as Et,gb as ne,h as b,hb as v,ia as q,j as Dt,ja as W,jb as _,jc as ct,kb as N,lb as u,ma as S,mb as lt,mc as ft,nb as it,oa as ie,ob as y,oc as $,pa as E,pb as x,pc as K,q as te,ra as T,rc as Ft,sa as Ce,sc as qe,ub as Tt,v as Mt,vb as f,wa as d,wc as Ge,x as ot,xb as m,xc as He,y as j,ya as ut,yb as H,yc as Lt,za as De,zb as ae,zc as Pt}from"./chunk-B6ZZ4EKJ.js";function ki(i){i||(i=o(Et));let a=new xe(t=>{if(i.destroyed){t.next();return}return i.onDestroy(t.next.bind(t))});return t=>t.pipe(F(a))}var Ci=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=P({type:i});static \u0275inj=L({imports:[V]})}return i})();var Di=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=P({type:i});static \u0275inj=L({imports:[V]})}return i})();var Gi=["*"],Hi=`.mdc-list {
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
`,Ui=["unscopedContent"],Wi=["text"],Zi=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],$i=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var Ki=new A("ListOption"),ce=(()=>{class i{_elementRef=o(T);constructor(){}static \u0275fac=function(e){return new(e||i)};static \u0275dir=C({type:i,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return i})(),Xi=(()=>{class i{_elementRef=o(T);constructor(){}static \u0275fac=function(e){return new(e||i)};static \u0275dir=C({type:i,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return i})(),de=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275dir=C({type:i,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return i})(),Mi=(()=>{class i{_listOption=o(Ki,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(e){return new(e||i)};static \u0275dir=C({type:i,hostVars:4,hostBindings:function(e,n){e&2&&f("mdc-list-item__start",n._isAlignedAtStart())("mdc-list-item__end",!n._isAlignedAtStart())}})}return i})(),Yi=(()=>{class i extends Mi{static \u0275fac=(()=>{let t;return function(n){return(t||(t=E(i)))(n||i)}})();static \u0275dir=C({type:i,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[w]})}return i})(),Ji=(()=>{class i extends Mi{static \u0275fac=(()=>{let t;return function(n){return(t||(t=E(i)))(n||i)}})();static \u0275dir=C({type:i,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[w]})}return i})(),tn=new A("MAT_LIST_CONFIG"),le=(()=>{class i{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=O(t)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(t){this._disabled.set(O(t))}_disabled=S(!1);_defaultOptions=o(tn,{optional:!0});static \u0275fac=function(e){return new(e||i)};static \u0275dir=C({type:i,hostVars:1,hostBindings:function(e,n){e&2&&I("aria-disabled",n.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return i})(),en=(()=>{class i{_elementRef=o(T);_ngZone=o(W);_listBase=o(le,{optional:!0});_platform=o($);_hostElement;_isButtonElement;_noopAnimations=at();_avatars;_icons;set lines(t){this._explicitLines=K(t,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(t){this._disableRipple=O(t)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(t){this._disabled.set(O(t))}_disabled=S(!1);_subscriptions=new ye;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){o(qe).load($e);let t=o(Ze,{optional:!0});this.rippleConfig=t||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new We(this,this._ngZone,this._hostElement,this._platform,o(k)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(ot(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(t){if(!this._lines||!this._titles||!this._unscopedContent)return;t&&this._checkDomForUnscopedTextContent();let e=this._explicitLines??this._inferLinesFromContent(),n=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",e===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",e===3),this._hasUnscopedTextContent){let r=this._titles.length===0&&e===1;n.classList.toggle("mdc-list-item__primary-text",r),n.classList.toggle("mdc-list-item__secondary-text",!r)}else n.classList.remove("mdc-list-item__primary-text"),n.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let t=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(t+=1),t}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(t=>t.nodeType!==t.COMMENT_NODE).some(t=>!!(t.textContent&&t.textContent.trim()))}static \u0275fac=function(e){return new(e||i)};static \u0275dir=C({type:i,contentQueries:function(e,n,r){if(e&1&&lt(r,Yi,4)(r,Ji,4),e&2){let c;y(c=x())&&(n._avatars=c),y(c=x())&&(n._icons=c)}},hostVars:4,hostBindings:function(e,n){e&2&&(I("aria-disabled",n.disabled)("disabled",n._isButtonElement&&n.disabled||null),f("mdc-list-item--disabled",n.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return i})();var Ai=(()=>{class i extends le{static \u0275fac=(()=>{let t;return function(n){return(t||(t=E(i)))(n||i)}})();static \u0275cmp=p({type:i,selectors:[["mat-list"]],hostAttrs:[1,"mat-mdc-list","mat-mdc-list-base","mdc-list"],exportAs:["matList"],features:[Z([{provide:le,useExisting:i}]),w],ngContentSelectors:Gi,decls:1,vars:0,template:function(e,n){e&1&&(N(),u(0))},styles:[Hi],encapsulation:2,changeDetection:0})}return i})(),Si=(()=>{class i extends en{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(t){this._activated=O(t)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let t;return function(n){return(t||(t=E(i)))(n||i)}})();static \u0275cmp=p({type:i,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(e,n,r){if(e&1&&lt(r,Xi,5)(r,ce,5)(r,de,5),e&2){let c;y(c=x())&&(n._lines=c),y(c=x())&&(n._titles=c),y(c=x())&&(n._meta=c)}},viewQuery:function(e,n){if(e&1&&it(Ui,5)(Wi,5),e&2){let r;y(r=x())&&(n._unscopedContent=r.first),y(r=x())&&(n._itemText=r.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(e,n){e&2&&(I("aria-current",n._getAriaCurrent()),f("mdc-list-item--activated",n.activated)("mdc-list-item--with-leading-avatar",n._avatars.length!==0)("mdc-list-item--with-leading-icon",n._icons.length!==0)("mdc-list-item--with-trailing-meta",n._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",n._hasBothLeadingAndTrailing())("_mat-animation-noopable",n._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[w],ngContentSelectors:$i,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(e,n){e&1&&(N(Zi),u(0),s(1,"span",1),u(2,1),u(3,2),s(4,"span",2,0),v("cdkObserveContent",function(){return n._updateItemLines(!0)}),u(6,3),l()(),u(7,4),u(8,5),G(9,"div",3))},dependencies:[Ge],encapsulation:2,changeDetection:0})}return i})();var Ei=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=P({type:i});static \u0275inj=L({imports:[He,Xe,Di,V,Ci]})}return i})();var Qt=["*"],an=["content"],on=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],rn=["mat-drawer","mat-drawer-content","*"];function sn(i,a){if(i&1){let t=st();s(0,"div",1),v("click",function(){tt(t);let n=_();return et(n._onBackdropClicked())}),l()}if(i&2){let t=_();f("mat-drawer-shown",t._isShowingBackdrop())}}function ln(i,a){i&1&&(s(0,"mat-drawer-content"),u(1,2),l())}var cn=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],dn=["mat-sidenav","mat-sidenav-content","*"];function mn(i,a){if(i&1){let t=st();s(0,"div",1),v("click",function(){tt(t);let n=_();return et(n._onBackdropClicked())}),l()}if(i&2){let t=_();f("mat-drawer-shown",t._isShowingBackdrop())}}function hn(i,a){i&1&&(s(0,"mat-sidenav-content"),u(1,2),l())}var pn=`.mat-drawer-container {
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
`;var un=new A("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),pe=new A("MAT_DRAWER_CONTAINER"),jt=(()=>{class i extends X{_platform=o($);_changeDetectorRef=o(nt);_container=o(he);constructor(){let t=o(T),e=o(pi),n=o(W);super(t,e,n)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:t,end:e}=this._container;return t!=null&&t.mode!=="over"&&t.opened||e!=null&&e.mode!=="over"&&e.opened}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=p({type:i,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(e,n){e&2&&(Tt("margin-left",n._container._contentMargins.left,"px")("margin-right",n._container._contentMargins.right,"px"),f("mat-drawer-content-hidden",n._shouldBeHidden()))},features:[Z([{provide:X,useExisting:i}]),w],ngContentSelectors:Qt,decls:1,vars:0,template:function(e,n){e&1&&(N(),u(0))},encapsulation:2,changeDetection:0})}return i})(),me=(()=>{class i{_elementRef=o(T);_focusTrapFactory=o(Pt);_focusMonitor=o(Ft);_platform=o($);_ngZone=o(W);_renderer=o(gt);_interactivityChecker=o(Lt);_doc=o(St);_container=o(pe,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(t){t=t==="end"?"end":"start",t!==this._position&&(this._isAttached&&this._updatePositionInParent(t),this._position=t,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(t){this._mode=t,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(t){this._disableClose=O(t)}_disableClose=!1;get autoFocus(){let t=this._autoFocus;return t??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(t){(t==="true"||t==="false"||t==null)&&(t=O(t)),this._autoFocus=t}_autoFocus;get opened(){return this._opened()}set opened(t){this.toggle(O(t))}_opened=S(!1);_openedVia=null;_animationStarted=new b;_animationEnd=new b;openedChange=new q(!0);_openedStream=this.openedChange.pipe(j(t=>t),te(()=>{}));openedStart=this._animationStarted.pipe(j(()=>this.opened),ee(void 0));_closedStream=this.openedChange.pipe(j(t=>!t),te(()=>{}));closedStart=this._animationStarted.pipe(j(()=>!this.opened),ee(void 0));_destroyed=new b;onPositionChanged=new q;_content;_modeChanged=new b;_injector=o(k);_changeDetectorRef=o(nt);constructor(){this.openedChange.pipe(F(this._destroyed)).subscribe(t=>{t?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let t=this._renderer,e=this._elementRef.nativeElement;return[t.listen(e,"keydown",n=>{n.keyCode===27&&!this.disableClose&&!dt(n)&&this._ngZone.run(()=>{this.close(),n.stopPropagation(),n.preventDefault()})}),t.listen(e,"transitionend",this._handleTransitionEvent),t.listen(e,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(t,e){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let n=()=>{r(),c(),t.removeAttribute("tabindex")},r=this._renderer.listen(t,"blur",n),c=this._renderer.listen(t,"mousedown",n)})),t.focus(e)}_focusByCssSelector(t,e){let n=this._elementRef.nativeElement.querySelector(t);n&&this._forceFocus(n,e)}_takeFocus(){if(!this._focusTrap)return;let t=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":ut(()=>{!this._focusTrap.focusInitialElement()&&typeof t.focus=="function"&&t.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(t){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,t):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let t=this._doc.activeElement;return!!t&&this._elementRef.nativeElement.contains(t)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(t){return this.toggle(!0,t)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(t=!this.opened,e){t&&e&&(this._openedVia=e);let n=this._setOpen(t,!t&&this._isFocusWithinDrawer(),this._openedVia||"program");return t||(this._openedVia=null),n}_setOpen(t,e,n){return t===this.opened?Promise.resolve(t?"open":"close"):(this._opened.set(t),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",t),!t&&e&&this._restoreFocus(n),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(r=>{this.openedChange.pipe(R(1)).subscribe(c=>r(c?"open":"close"))}))}_setIsAnimating(t){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",t)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(t){if(!this._platform.isBrowser)return;let e=this._elementRef.nativeElement,n=e.parentNode;t==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),n.insertBefore(this._anchor,e)),n.appendChild(e)):this._anchor&&this._anchor.parentNode.insertBefore(e,this._anchor)}_handleTransitionEvent=t=>{let e=this._elementRef.nativeElement;t.target===e&&this._ngZone.run(()=>{t.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(t)})};static \u0275fac=function(e){return new(e||i)};static \u0275cmp=p({type:i,selectors:[["mat-drawer"]],viewQuery:function(e,n){if(e&1&&it(an,5),e&2){let r;y(r=x())&&(n._content=r.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(e,n){e&2&&(I("align",null)("tabIndex",n.mode!=="side"?"-1":null),Tt("visibility",!n._container&&!n.opened?"hidden":null),f("mat-drawer-end",n.position==="end")("mat-drawer-over",n.mode==="over")("mat-drawer-push",n.mode==="push")("mat-drawer-side",n.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:Qt,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(e,n){e&1&&(N(),s(0,"div",1,0),u(2),l())},dependencies:[X],encapsulation:2,changeDetection:0})}return i})(),he=(()=>{class i{_dir=o(vt,{optional:!0});_element=o(T);_ngZone=o(W);_changeDetectorRef=o(nt);_animationDisabled=at();_transitionsEnabled=!1;_allDrawers;_drawers=new Ce;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(t){this._autosize=O(t)}_autosize=o(un);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(t){this._backdropOverride=t==null?null:O(t)}_backdropOverride=null;backdropClick=new q;_start=null;_end=null;_left=null;_right=null;_destroyed=new b;_doCheckSubject=new b;_contentMargins={left:null,right:null};_contentMarginChanges=new b;get scrollable(){return this._userContent||this._content}_injector=o(k);constructor(){let t=o($),e=o(ui);this._dir?.change.pipe(F(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),e.change().pipe(F(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&t.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(J(this._allDrawers),F(this._destroyed)).subscribe(t=>{this._drawers.reset(t.filter(e=>!e._container||e._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(J(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(t=>{this._watchDrawerToggle(t),this._watchDrawerPosition(t),this._watchDrawerMode(t)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(At(10),F(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(t=>t.open())}close(){this._drawers.forEach(t=>t.close())}updateContentMargins(){let t=0,e=0;if(this._left&&this._left.opened){if(this._left.mode=="side")t+=this._left._getWidth();else if(this._left.mode=="push"){let n=this._left._getWidth();t+=n,e-=n}}if(this._right&&this._right.opened){if(this._right.mode=="side")e+=this._right._getWidth();else if(this._right.mode=="push"){let n=this._right._getWidth();e+=n,t-=n}}t=t||null,e=e||null,(t!==this._contentMargins.left||e!==this._contentMargins.right)&&(this._contentMargins={left:t,right:e},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(t){t._animationStarted.pipe(F(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),t.mode!=="side"&&t.openedChange.pipe(F(this._drawers.changes)).subscribe(()=>this._setContainerClass(t.opened))}_watchDrawerPosition(t){t.onPositionChanged.pipe(F(this._drawers.changes)).subscribe(()=>{ut({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(t){t._modeChanged.pipe(F(ot(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(t){let e=this._element.nativeElement.classList,n="mat-drawer-container-has-open";t?e.add(n):e.remove(n)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(t=>{t.position=="end"?(this._end!=null,this._end=t):(this._start!=null,this._start=t)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(t=>t&&!t.disableClose&&this._drawerHasBackdrop(t)).forEach(t=>t._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(t){return t!=null&&t.opened}_drawerHasBackdrop(t){return this._backdropOverride==null?!!t&&t.mode!=="side":this._backdropOverride}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=p({type:i,selectors:[["mat-drawer-container"]],contentQueries:function(e,n,r){if(e&1&&lt(r,jt,5)(r,me,5),e&2){let c;y(c=x())&&(n._content=c.first),y(c=x())&&(n._allDrawers=c)}},viewQuery:function(e,n){if(e&1&&it(jt,5),e&2){let r;y(r=x())&&(n._userContent=r.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(e,n){e&2&&f("mat-drawer-container-explicit-backdrop",n._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[Z([{provide:pe,useExisting:i}])],ngContentSelectors:rn,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(e,n){e&1&&(N(on),D(0,sn,1,2,"div",0),u(1),u(2,1),D(3,ln,2,0,"mat-drawer-content")),e&2&&(M(n.hasBackdrop?0:-1),d(3),M(n._content?-1:3))},dependencies:[jt],styles:[`.mat-drawer-container {
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
`],encapsulation:2,changeDetection:0})}return i})(),Nt=(()=>{class i extends jt{static \u0275fac=(()=>{let t;return function(n){return(t||(t=E(i)))(n||i)}})();static \u0275cmp=p({type:i,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[Z([{provide:X,useExisting:i}]),w],ngContentSelectors:Qt,decls:1,vars:0,template:function(e,n){e&1&&(N(),u(0))},encapsulation:2,changeDetection:0})}return i})(),ue=(()=>{class i extends me{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(t){this._fixedInViewport=O(t)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(t){this._fixedTopGap=K(t)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(t){this._fixedBottomGap=K(t)}_fixedBottomGap=0;static \u0275fac=(()=>{let t;return function(n){return(t||(t=E(i)))(n||i)}})();static \u0275cmp=p({type:i,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(e,n){e&2&&(I("tabIndex",n.mode!=="side"?"-1":null)("align",null),Tt("top",n.fixedInViewport?n.fixedTopGap:null,"px")("bottom",n.fixedInViewport?n.fixedBottomGap:null,"px"),f("mat-drawer-end",n.position==="end")("mat-drawer-over",n.mode==="over")("mat-drawer-push",n.mode==="push")("mat-drawer-side",n.mode==="side")("mat-sidenav-fixed",n.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[Z([{provide:me,useExisting:i}]),w],ngContentSelectors:Qt,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(e,n){e&1&&(N(),s(0,"div",1,0),u(2),l())},dependencies:[X],encapsulation:2,changeDetection:0})}return i})(),Ti=(()=>{class i extends he{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let t;return function(n){return(t||(t=E(i)))(n||i)}})();static \u0275cmp=p({type:i,selectors:[["mat-sidenav-container"]],contentQueries:function(e,n,r){if(e&1&&lt(r,Nt,5)(r,ue,5),e&2){let c;y(c=x())&&(n._content=c.first),y(c=x())&&(n._allDrawers=c)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(e,n){e&2&&f("mat-drawer-container-explicit-backdrop",n._backdropOverride)},exportAs:["matSidenavContainer"],features:[Z([{provide:pe,useExisting:i},{provide:he,useExisting:i}]),w],ngContentSelectors:dn,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(e,n){e&1&&(N(cn),D(0,mn,1,2,"div",0),u(1),u(2,1),D(3,hn,2,0,"mat-sidenav-content")),e&2&&(M(n.hasBackdrop?0:-1),d(3),M(n._content?-1:3))},dependencies:[Nt],styles:[pn],encapsulation:2,changeDetection:0})}return i})(),Ii=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=P({type:i});static \u0275inj=L({imports:[re,V,re]})}return i})();function _n(i,a){}var Y=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext};var _e=(()=>{class i extends _i{_elementRef=o(T);_focusTrapFactory=o(Pt);_config;_interactivityChecker=o(Lt);_ngZone=o(W);_focusMonitor=o(Ft);_renderer=o(gt);_changeDetectorRef=o(nt);_injector=o(k);_platform=o($);_document=o(St);_portalOutlet;_focusTrapped=new b;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=o(Y,{optional:!0})||new Y,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(t){this._ariaLabelledByQueue.push(t),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(t){let e=this._ariaLabelledByQueue.indexOf(t);e>-1&&(this._ariaLabelledByQueue.splice(e,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(t){this._portalOutlet.hasAttached();let e=this._portalOutlet.attachComponentPortal(t);return this._contentAttached(),e}attachTemplatePortal(t){this._portalOutlet.hasAttached();let e=this._portalOutlet.attachTemplatePortal(t);return this._contentAttached(),e}attachDomPortal=t=>{this._portalOutlet.hasAttached();let e=this._portalOutlet.attachDomPortal(t);return this._contentAttached(),e};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(t,e){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let n=()=>{r(),c(),t.removeAttribute("tabindex")},r=this._renderer.listen(t,"blur",n),c=this._renderer.listen(t,"mousedown",n)})),t.focus(e)}_focusByCssSelector(t,e){let n=this._elementRef.nativeElement.querySelector(t);n&&this._forceFocus(n,e)}_trapFocus(t){this._isDestroyed||ut(()=>{let e=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||e.focus(t);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(t)||this._focusDialogContainer(t);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',t);break;default:this._focusByCssSelector(this._config.autoFocus,t);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let t=this._config.restoreFocus,e=null;if(typeof t=="string"?e=this._document.querySelector(t):typeof t=="boolean"?e=t?this._elementFocusedBeforeDialogWasOpened:null:t&&(e=t),this._config.restoreFocus&&e&&typeof e.focus=="function"){let n=ft(),r=this._elementRef.nativeElement;(!n||n===this._document.body||n===r||r.contains(n))&&(this._focusMonitor?(this._focusMonitor.focusVia(e,this._closeInteractionType),this._closeInteractionType=null):e.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(t){this._elementRef.nativeElement.focus?.(t)}_containsFocus(){let t=this._elementRef.nativeElement,e=ft();return t===e||t.contains(e)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=ft()))}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=p({type:i,selectors:[["cdk-dialog-container"]],viewQuery:function(e,n){if(e&1&&it(yt,7),e&2){let r;y(r=x())&&(n._portalOutlet=r.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(e,n){e&2&&I("id",n._config.id||null)("role",n._config.role)("aria-modal",n._config.ariaModal)("aria-labelledby",n._config.ariaLabel?null:n._ariaLabelledByQueue[0])("aria-label",n._config.ariaLabel)("aria-describedby",n._config.ariaDescribedBy||null)},features:[w],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(e,n){e&1&&_t(0,_n,0,0,"ng-template",0)},dependencies:[yt],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2})}return i})(),wt=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new b;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(a,t){this.overlayRef=a,this.config=t,this.disableClose=t.disableClose,this.backdropClick=a.backdropClick(),this.keydownEvents=a.keydownEvents(),this.outsidePointerEvents=a.outsidePointerEvents(),this.id=t.id,this.keydownEvents.subscribe(e=>{e.keyCode===27&&!this.disableClose&&!dt(e)&&(e.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=a.detachments().subscribe(()=>{t.closeOnOverlayDetachments!==!1&&this.close()})}close(a,t){if(this._canClose(a)){let e=this.closed;this.containerInstance._closeInteractionType=t?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),e.next(a),e.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(a="",t=""){return this.overlayRef.updateSize({width:a,height:t}),this}addPanelClass(a){return this.overlayRef.addPanelClass(a),this}removePanelClass(a){return this.overlayRef.removePanelClass(a),this}_canClose(a){let t=this.config;return!!this.containerInstance&&(!t.closePredicate||t.closePredicate(a,t,this.componentInstance))}},fn=new A("DialogScrollStrategy",{providedIn:"root",factory:()=>{let i=o(k);return()=>Rt(i)}}),bn=new A("DialogData"),vn=new A("DefaultDialogConfig");function yn(i){let a=S(i),t=new q;return{valueSignal:a,get value(){return a()},change:t,ngOnDestroy(){t.complete()}}}var fe=(()=>{class i{_injector=o(k);_defaultOptions=o(vn,{optional:!0});_parentDialog=o(i,{optional:!0,skipSelf:!0});_overlayContainer=o(bi);_idGenerator=o(bt);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new b;_afterOpenedAtThisLevel=new b;_ariaHiddenElements=new Map;_scrollStrategy=o(fn);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=Mt(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(J(void 0)));constructor(){}open(t,e){let n=this._defaultOptions||new Y;e=z(z({},n),e),e.id=e.id||this._idGenerator.getId("cdk-dialog-"),e.id&&this.getDialogById(e.id);let r=this._getOverlayConfig(e),c=yi(this._injector,r),h=new wt(c,e),Q=this._attachContainer(c,h,e);if(h.containerInstance=Q,!this.openDialogs.length){let Yt=this._overlayContainer.getContainerElement();Q._focusTrapped?Q._focusTrapped.pipe(R(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(Yt)}):this._hideNonDialogContentFromAssistiveTechnology(Yt)}return this._attachDialogContent(t,h,Q,e),this.openDialogs.push(h),h.closed.subscribe(()=>this._removeOpenDialog(h,!0)),this.afterOpened.next(h),h}closeAll(){ge(this.openDialogs,t=>t.close())}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){ge(this._openDialogsAtThisLevel,t=>{t.config.closeOnDestroy===!1&&this._removeOpenDialog(t,!1)}),ge(this._openDialogsAtThisLevel,t=>t.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(t){let e=new fi({positionStrategy:t.positionStrategy||Bt().centerHorizontally().centerVertically(),scrollStrategy:t.scrollStrategy||this._scrollStrategy(),panelClass:t.panelClass,hasBackdrop:t.hasBackdrop,direction:t.direction,minWidth:t.minWidth,minHeight:t.minHeight,maxWidth:t.maxWidth,maxHeight:t.maxHeight,width:t.width,height:t.height,disposeOnNavigation:t.closeOnNavigation,disableAnimations:t.disableAnimations});return t.backdropClass&&(e.backdropClass=t.backdropClass),e}_attachContainer(t,e,n){let r=n.injector||n.viewContainerRef?.injector,c=[{provide:Y,useValue:n},{provide:wt,useValue:e},{provide:vi,useValue:t}],h;n.container?typeof n.container=="function"?h=n.container:(h=n.container.type,c.push(...n.container.providers(n))):h=_e;let Q=new se(h,n.viewContainerRef,k.create({parent:r||this._injector,providers:c}));return t.attach(Q).instance}_attachDialogContent(t,e,n,r){if(t instanceof De){let c=this._createInjector(r,e,n,void 0),h={$implicit:r.data,dialogRef:e};r.templateContext&&(h=z(z({},h),typeof r.templateContext=="function"?r.templateContext():r.templateContext)),n.attachTemplatePortal(new gi(t,null,h,c))}else{let c=this._createInjector(r,e,n,this._injector),h=n.attachComponentPortal(new se(t,r.viewContainerRef,c));e.componentRef=h,e.componentInstance=h.instance}}_createInjector(t,e,n,r){let c=t.injector||t.viewContainerRef?.injector,h=[{provide:bn,useValue:t.data},{provide:wt,useValue:e}];return t.providers&&(typeof t.providers=="function"?h.push(...t.providers(e,t,n)):h.push(...t.providers)),t.direction&&(!c||!c.get(vt,null,{optional:!0}))&&h.push({provide:vt,useValue:yn(t.direction)}),k.create({parent:c||r,providers:h})}_removeOpenDialog(t,e){let n=this.openDialogs.indexOf(t);n>-1&&(this.openDialogs.splice(n,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((r,c)=>{r?c.setAttribute("aria-hidden",r):c.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),e&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(t){if(t.parentElement){let e=t.parentElement.children;for(let n=e.length-1;n>-1;n--){let r=e[n];r!==t&&r.nodeName!=="SCRIPT"&&r.nodeName!=="STYLE"&&!r.hasAttribute("aria-live")&&!r.hasAttribute("popover")&&(this._ariaHiddenElements.set(r,r.getAttribute("aria-hidden")),r.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(e){return new(e||i)};static \u0275prov=rt({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function ge(i,a){let t=i.length;for(;t--;)a(i[t])}var Oi=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=P({type:i});static \u0275inj=L({providers:[fe],imports:[zt,xt,Ue,xt]})}return i})();function xn(i,a){}var Gt=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration},be="mdc-dialog--open",Fi="mdc-dialog--opening",Li="mdc-dialog--closing",wn=150,kn=75,Cn=(()=>{class i extends _e{_animationStateChanged=new q;_animationsEnabled=!at();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?Ri(this._config.enterAnimationDuration)??wn:0;_exitAnimationDuration=this._animationsEnabled?Ri(this._config.exitAnimationDuration)??kn:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(Pi,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Fi,be)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(be),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(be),this._animationsEnabled?(this._hostElement.style.setProperty(Pi,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Li)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(t){this._actionSectionCount+=t,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(Fi,Li)}_waitForAnimationToComplete(t,e){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(e,t)}_requestAnimationFrame(t){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(t):t()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(t){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:t})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(t){let e=super.attachComponentPortal(t);return e.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),e}static \u0275fac=(()=>{let t;return function(n){return(t||(t=E(i)))(n||i)}})();static \u0275cmp=p({type:i,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(e,n){e&2&&(ne("id",n._config.id),I("aria-modal",n._config.ariaModal)("role",n._config.role)("aria-labelledby",n._config.ariaLabel?null:n._ariaLabelledByQueue[0])("aria-label",n._config.ariaLabel)("aria-describedby",n._config.ariaDescribedBy||null),f("_mat-animation-noopable",!n._animationsEnabled)("mat-mdc-dialog-container-with-actions",n._actionSectionCount>0))},features:[w],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(e,n){e&1&&(s(0,"div",0)(1,"div",1),_t(2,xn,0,0,"ng-template",2),l()())},dependencies:[yt],styles:[`.mat-mdc-dialog-container {
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
`],encapsulation:2})}return i})(),Pi="--mat-dialog-transition-duration";function Ri(i){return i==null?null:typeof i=="number"?i:i.endsWith("ms")?K(i.substring(0,i.length-2)):i.endsWith("s")?K(i.substring(0,i.length-1))*1e3:i==="0"?0:null}var qt=(function(i){return i[i.OPEN=0]="OPEN",i[i.CLOSING=1]="CLOSING",i[i.CLOSED=2]="CLOSED",i})(qt||{}),kt=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new Dt(1);_beforeClosed=new Dt(1);_result;_closeFallbackTimeout;_state=qt.OPEN;_closeInteractionType;constructor(a,t,e){this._ref=a,this._config=t,this._containerInstance=e,this.disableClose=t.disableClose,this.id=a.id,a.addPanelClass("mat-mdc-dialog-panel"),e._animationStateChanged.pipe(j(n=>n.state==="opened"),R(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),e._animationStateChanged.pipe(j(n=>n.state==="closed"),R(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),a.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),ot(this.backdropClick(),this.keydownEvents().pipe(j(n=>n.keyCode===27&&!this.disableClose&&!dt(n)))).subscribe(n=>{this.disableClose||(n.preventDefault(),Bi(this,n.type==="keydown"?"keyboard":"mouse"))})}close(a){let t=this._config.closePredicate;t&&!t(a,this._config,this.componentInstance)||(this._result=a,this._containerInstance._animationStateChanged.pipe(j(e=>e.state==="closing"),R(1)).subscribe(e=>{this._beforeClosed.next(a),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),e.totalTime+100)}),this._state=qt.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(a){let t=this._ref.config.positionStrategy;return a&&(a.left||a.right)?a.left?t.left(a.left):t.right(a.right):t.centerHorizontally(),a&&(a.top||a.bottom)?a.top?t.top(a.top):t.bottom(a.bottom):t.centerVertically(),this._ref.updatePosition(),this}updateSize(a="",t=""){return this._ref.updateSize(a,t),this}addPanelClass(a){return this._ref.addPanelClass(a),this}removePanelClass(a){return this._ref.removePanelClass(a),this}getState(){return this._state}_finishDialogClose(){this._state=qt.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function Bi(i,a,t){return i._closeInteractionType=a,i.close(t)}var ve=new A("MatMdcDialogData"),Dn=new A("mat-mdc-dialog-default-options"),Mn=new A("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let i=o(k);return()=>Rt(i)}}),Ct=(()=>{class i{_defaultOptions=o(Dn,{optional:!0});_scrollStrategy=o(Mn);_parentDialog=o(i,{optional:!0,skipSelf:!0});_idGenerator=o(bt);_injector=o(k);_dialog=o(fe);_animationsDisabled=at();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new b;_afterOpenedAtThisLevel=new b;dialogConfigClass=Gt;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=Mt(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(J(void 0)));constructor(){this._dialogRefConstructor=kt,this._dialogContainerType=Cn,this._dialogDataToken=ve}open(t,e){let n;e=z(z({},this._defaultOptions||new Gt),e),e.id=e.id||this._idGenerator.getId("mat-mdc-dialog-"),e.scrollStrategy=e.scrollStrategy||this._scrollStrategy();let r=this._dialog.open(t,Jt(z({},e),{positionStrategy:Bt(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||e.enterAnimationDuration?.toLocaleString()==="0"||e.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:e},{provide:Y,useValue:e}]},templateContext:()=>({dialogRef:n}),providers:(c,h,Q)=>(n=new this._dialogRefConstructor(c,e,Q),n.updatePosition(e?.position),[{provide:this._dialogContainerType,useValue:Q},{provide:this._dialogDataToken,useValue:h.data},{provide:this._dialogRefConstructor,useValue:n}])}));return n.componentRef=r.componentRef,n.componentInstance=r.componentInstance,this.openDialogs.push(n),this.afterOpened.next(n),n.afterClosed().subscribe(()=>{let c=this.openDialogs.indexOf(n);c>-1&&(this.openDialogs.splice(c,1),this.openDialogs.length||this._getAfterAllClosed().next())}),n}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(t){let e=t.length;for(;e--;)t[e].close()}static \u0275fac=function(e){return new(e||i)};static \u0275prov=rt({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Ht=(()=>{class i{dialogRef=o(kt,{optional:!0});_elementRef=o(T);_dialog=o(Ct);ariaLabel;type="button";dialogResult;_matDialogClose;constructor(){}ngOnInit(){this.dialogRef||(this.dialogRef=ji(this._elementRef,this._dialog.openDialogs))}ngOnChanges(t){let e=t._matDialogClose||t._matDialogCloseResult;e&&(this.dialogResult=e.currentValue)}_onButtonClick(t){Bi(this.dialogRef,t.screenX===0&&t.screenY===0?"keyboard":"mouse",this.dialogResult)}static \u0275fac=function(e){return new(e||i)};static \u0275dir=C({type:i,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(e,n){e&1&&v("click",function(c){return n._onButtonClick(c)}),e&2&&I("aria-label",n.ariaLabel||null)("type",n.type)},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],type:"type",dialogResult:[0,"mat-dialog-close","dialogResult"],_matDialogClose:[0,"matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],features:[ie]})}return i})(),zi=(()=>{class i{_dialogRef=o(kt,{optional:!0});_elementRef=o(T);_dialog=o(Ct);constructor(){}ngOnInit(){this._dialogRef||(this._dialogRef=ji(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static \u0275fac=function(e){return new(e||i)};static \u0275dir=C({type:i})}return i})(),Ut=(()=>{class i extends zi{id=o(bt).getId("mat-mdc-dialog-title-");_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static \u0275fac=(()=>{let t;return function(n){return(t||(t=E(i)))(n||i)}})();static \u0275dir=C({type:i,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(e,n){e&2&&ne("id",n.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],features:[w]})}return i})(),Wt=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275dir=C({type:i,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],features:[Me([X])]})}return i})(),Zt=(()=>{class i extends zi{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static \u0275fac=(()=>{let t;return function(n){return(t||(t=E(i)))(n||i)}})();static \u0275dir=C({type:i,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(e,n){e&2&&f("mat-mdc-dialog-actions-align-start",n.align==="start")("mat-mdc-dialog-actions-align-center",n.align==="center")("mat-mdc-dialog-actions-align-end",n.align==="end")},inputs:{align:"align"},features:[w]})}return i})();function ji(i,a){let t=i.nativeElement.parentElement;for(;t&&!t.classList.contains("mat-mdc-dialog-container");)t=t.parentElement;return t?a.find(e=>e.id===t.id):null}var pt=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=P({type:i});static \u0275inj=L({providers:[Ct],imports:[Oi,zt,xt,V]})}return i})();var $t=class i{constructor(a){this.http=a}list(a){let t=a?.trim()??"",e=new Ie;return t.length>0&&(e=e.set("q",t)),this.http.get(`${ct.apiBaseUrl}/api/v1/customers`,{params:e})}get(a){return this.http.get(`${ct.apiBaseUrl}/api/v1/customers/${a}`)}create(a){return this.http.post(`${ct.apiBaseUrl}/api/v1/customers`,a)}update(a,t){return this.http.put(`${ct.apiBaseUrl}/api/v1/customers/${a}`,t)}delete(a){return this.http.delete(`${ct.apiBaseUrl}/api/v1/customers/${a}`)}static \u0275fac=function(t){return new(t||i)(ke(Oe))};static \u0275prov=rt({token:i,factory:i.\u0275fac,providedIn:"root"})};var Kt=class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=p({type:i,selectors:[["app-customers-close-unsaved-dialog"]],decls:10,vars:1,consts:[["mat-dialog-title",""],[1,"mat-body-medium","dialog-body"],["align","end"],["mat-button","","type","button","mat-dialog-close",""],["mat-flat-button","","type","button","color","warn",3,"mat-dialog-close"]],template:function(t,e){t&1&&(s(0,"h2",0),m(1,"Fechar sem salvar?"),l(),s(2,"mat-dialog-content")(3,"p",1),m(4," Existem altera\xE7\xF5es que ainda n\xE3o foram guardadas. Se fechar o painel agora, essas altera\xE7\xF5es ser\xE3o descartadas. "),l()(),s(5,"mat-dialog-actions",2)(6,"button",3),m(7,"Voltar"),l(),s(8,"button",4),m(9,"Fechar sem salvar"),l()()),t&2&&(d(8),g("mat-dialog-close",!0))},dependencies:[pt,Ht,Ut,Zt,Wt,ht,mt],styles:[".dialog-body[_ngcontent-%COMP%]{margin:0;max-width:26rem;line-height:1.5;color:var(--mat-sys-on-surface-variant)}"],changeDetection:0})};var Xt=class i{data=o(ve);static \u0275fac=function(t){return new(t||i)};static \u0275cmp=p({type:i,selectors:[["app-customers-delete-confirm-dialog"]],decls:13,vars:2,consts:[["mat-dialog-title",""],[1,"mat-body-medium","dialog-body"],["align","end"],["mat-button","","type","button","mat-dialog-close",""],["mat-flat-button","","type","button","color","warn",3,"mat-dialog-close"]],template:function(t,e){t&1&&(s(0,"h2",0),m(1,"Excluir cliente?"),l(),s(2,"mat-dialog-content")(3,"p",1),m(4," Tem certeza de que deseja excluir "),s(5,"strong"),m(6),l(),m(7,"? Esta a\xE7\xE3o n\xE3o pode ser desfeita. "),l()(),s(8,"mat-dialog-actions",2)(9,"button",3),m(10,"Cancelar"),l(),s(11,"button",4),m(12,"Excluir"),l()()),t&2&&(d(6),H(e.data.name),d(5),g("mat-dialog-close",!0))},dependencies:[pt,Ht,Ut,Zt,Wt,ht,mt],styles:[".dialog-body[_ngcontent-%COMP%]{margin:0;max-width:26rem;line-height:1.5;color:var(--mat-sys-on-surface-variant)}"],changeDetection:0})};var An=(i,a)=>a.id;function Sn(i,a){i&1&&G(0,"mat-progress-bar",12)}function En(i,a){if(i&1&&(s(0,"p",14),m(1),l()),i&2){let t=_();d(),H(t.error())}}function Tn(i,a){if(i&1){let t=st();s(0,"div",15)(1,"p",32),m(2,"Nenhum cliente cadastrado"),l(),s(3,"p",33),m(4," Que tal adicionar o primeiro? Use o bot\xE3o acima ou cadastre direto aqui. "),l(),s(5,"button",8),v("click",function(){tt(t);let n=_();return et(n.openCreate())}),m(6," Cadastrar primeiro cliente "),l()()}if(i&2){let t=_();d(5),g("disabled",t.loading())}}function In(i,a){i&1&&(s(0,"div",15)(1,"p",32),m(2,"Nenhum resultado encontrado"),l(),s(3,"p",33),m(4," Ajuste o termo de busca ou limpe o campo para ver todos os clientes. "),l()())}function On(i,a){if(i&1){let t=st();s(0,"mat-list-item",35)(1,"div",36)(2,"div",37),m(3),l(),s(4,"div",38),m(5),l(),s(6,"div",39),m(7),It(8,"date"),It(9,"date"),l()(),s(10,"div",40)(11,"button",41),v("click",function(){let n=tt(t).$implicit,r=_(2);return et(r.openEdit(n.id))}),s(12,"mat-icon"),m(13,"edit"),l()(),s(14,"button",42),v("click",function(){let n=tt(t).$implicit,r=_(2);return et(r.requestDelete(n))}),s(15,"mat-icon"),m(16,"delete"),l()()()()}if(i&2){let t,e=a.$implicit,n=_(2);f("customer-item-selected",n.editorOpen()&&((t=n.selected())==null?null:t.id)===e.id),d(3),H(e.name),d(2),oe("",e.email," \xB7 ",e.phone),d(2),Ee(" Doc: ",e.document," \xB7 Criado ",Ot(8,11,e.createdAt,"short")," \xB7 Atualizado ",Ot(9,14,e.updatedAt,"short")," \xB7 Owner: ",e.ownerId," "),d(4),g("disabled",n.loading()),d(3),g("disabled",n.loading())}}function Fn(i,a){if(i&1&&(s(0,"mat-list",16),Ae(1,On,17,17,"mat-list-item",34,An),l()),i&2){let t=_();d(),Se(t.customers())}}function Ln(i,a){if(i&1&&(s(0,"p",22),m(1),It(2,"date"),l()),i&2){let t=a;d(),oe(" ID: ",t.id," \xB7 Atualizado em ",Ot(2,2,t.updatedAt,"short")," ")}}function Pn(i,a){if(i&1&&(s(0,"mat-error"),m(1),l()),i&2){let t=_();d(),H(t.errMsg(t.customerForm.controls.name,"Nome"))}}function Rn(i,a){if(i&1&&(s(0,"mat-error"),m(1),l()),i&2){let t=_();d(),H(t.errMsg(t.customerForm.controls.email,"E-mail"))}}function Bn(i,a){if(i&1&&(s(0,"mat-error"),m(1),l()),i&2){let t=_();d(),H(t.errMsg(t.customerForm.controls.phone,"Telefone"))}}function zn(i,a){if(i&1&&(s(0,"mat-error"),m(1),l()),i&2){let t=_();d(),H(t.errMsg(t.customerForm.controls.document,"Documento"))}}var qi=class i{loading=S(!1);error=S(null);customers=S([]);selected=S(null);editorOpen=S(!1);searchControl=new Re("",{nonNullable:!0});api=o($t);fb=o(Ve);destroyRef=o(Et);dialog=o(Ct);customerForm=this.fb.nonNullable.group({name:["",[B.required,B.maxLength(200)]],email:["",[B.required,B.email,B.maxLength(320)]],phone:["",[B.required,B.maxLength(30)]],document:["",[B.required,B.minLength(11),B.maxLength(18)]]});constructor(){this.searchControl.valueChanges.pipe(At(300),we(),ki(this.destroyRef)).subscribe(()=>this.reload()),this.reload()}onEditorDrawerOpenedChange(a){!a&&this.editorOpen()&&this.clearSelection()}requestCloseWithoutSave(){if(!this.loading()){if(!this.customerForm.dirty){this.clearSelection();return}this.dialog.open(Kt,{width:"min(calc(100vw - 48px), 26rem)",autoFocus:"first-tabbable"}).afterClosed().pipe(R(1)).subscribe(a=>{a===!0&&this.clearSelection()})}}activeSearch(){return this.searchControl.value.trim().length>0}showErr(a){return a.invalid&&(a.touched||a.dirty)}errMsg(a,t){return a.hasError("required")?`${t} \xE9 obrigat\xF3rio.`:a.hasError("email")?"Informe um e-mail v\xE1lido.":a.hasError("maxlength")?`${t} excede o tamanho m\xE1ximo.`:a.hasError("minlength")?`${t} \xE9 curto demais (m\xEDn. 11 caracteres).`:`${t} inv\xE1lido.`}reload(){let a=this.searchControl.value.trim();this.loading.set(!0),this.error.set(null),this.api.list(a||void 0).subscribe({next:t=>{this.customers.set(t),this.loading.set(!1);let e=this.selected();e&&!t.some(n=>n.id===e.id)&&this.clearSelection()},error:()=>{this.loading.set(!1),this.error.set("Falha ao carregar clientes (verifique login/API).")}})}openCreate(){this.editorOpen.set(!0),this.selected.set(null),this.customerForm.reset({name:"",email:"",phone:"",document:""})}openEdit(a){this.loading.set(!0),this.error.set(null),this.api.get(a).subscribe({next:t=>{this.selected.set(t),this.editorOpen.set(!0),this.customerForm.reset({name:t.name,email:t.email,phone:t.phone,document:t.document}),this.loading.set(!1)},error:()=>{this.loading.set(!1),this.error.set("Falha ao carregar o cliente.")}})}clearSelection(){this.editorOpen.set(!1),this.selected.set(null),this.customerForm.reset({name:"",email:"",phone:"",document:""})}submitCustomerForm(){let a=this.selected();if(this.customerForm.invalid)return;let t=this.customerForm.getRawValue();a?(this.loading.set(!0),this.error.set(null),this.api.update(a.id,t).subscribe({next:()=>{this.clearSelection(),this.reload()},error:()=>{this.loading.set(!1),this.error.set("Falha ao atualizar cliente.")}})):(this.loading.set(!0),this.error.set(null),this.api.create(t).subscribe({next:()=>{this.clearSelection(),this.reload()},error:()=>{this.loading.set(!1),this.error.set("Falha ao cadastrar cliente.")}}))}requestDelete(a){this.loading()||this.dialog.open(Xt,{width:"min(calc(100vw - 48px), 26rem)",autoFocus:"first-tabbable",data:{name:a.name}}).afterClosed().pipe(R(1)).subscribe(t=>{t===!0&&this.remove(a.id)})}remove(a){this.loading.set(!0),this.error.set(null),this.api.delete(a).subscribe({next:()=>{this.selected()?.id===a&&this.clearSelection(),this.reload()},error:()=>{this.loading.set(!1),this.error.set("Falha ao excluir cliente.")}})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=p({type:i,selectors:[["app-customers-page"]],decls:60,vars:21,consts:[[1,"app-feature-page","customers-page"],[1,"customers-page-header"],[1,"mat-headline-medium","app-feature-page__title","customers-page-title"],[1,"customers-page-tools"],["appearance","outline","subscriptSizing","dynamic",1,"customers-inline-search"],["matPrefix",""],["matInput","","type","search","placeholder","Nome, e-mail, telefone ou documento\u2026","autocomplete","off",3,"formControl"],[1,"toolbar"],["mat-flat-button","","color","primary","type","button",3,"click","disabled"],["mat-stroked-button","","type","button",3,"click","disabled"],[1,"customers-sidenav",3,"hasBackdrop"],["appearance","outlined",1,"app-feature-panel"],["mode","indeterminate","aria-label","Carregando lista"],[1,"customers-panel-body"],["role","alert",1,"app-inline-alert-error","mat-body-medium"],["role","status",1,"empty-state"],["role","list",1,"customer-list"],["position","end","mode","over","aria-labelledby","customers-editor-title",1,"customers-editor-sidenav",3,"openedChange","fixedInViewport","opened","disableClose"],[1,"editor-drawer-panel"],[1,"editor-toolbar"],["id","customers-editor-title",1,"mat-headline-small","editor-title"],["mat-icon-button","","type","button","matTooltip","Fechar painel","aria-label","Fechar painel de edi\xE7\xE3o",3,"click","disabled"],[1,"meta-sub","mat-body-small","app-text-muted"],[1,"app-feature-form-stack",3,"ngSubmit","formGroup"],["appearance","outline"],["matInput","","type","text","formControlName","name","autocomplete","name"],["matInput","","type","email","formControlName","email","autocomplete","email"],["matInput","","type","text","formControlName","phone","autocomplete","tel"],["matInput","","type","text","formControlName","document"],[1,"actions-row"],["mat-stroked-button","","type","button","matTooltip","Cancelar edi\xE7\xE3o e fechar o painel",1,"cancel-editor",3,"click","disabled"],["mat-flat-button","","color","primary","type","submit",3,"disabled"],[1,"empty-title","mat-body-large"],[1,"empty-hint","mat-body-medium","app-text-muted"],[1,"customer-item",3,"customer-item-selected"],[1,"customer-item"],["matListItemTitle","",1,"customer-block"],[1,"customer-name"],[1,"customer-contact","mat-body-medium"],[1,"customer-meta","mat-body-small","app-text-muted"],["matListItemMeta","",1,"item-actions"],["mat-mini-fab","","type","button","color","primary","matTooltip","Editar","aria-label","Editar cliente",1,"item-action-fab","item-action-fab--edit",3,"click","disabled"],["mat-mini-fab","","type","button","color","warn","matTooltip","Excluir","aria-label","Excluir cliente",1,"item-action-fab","item-action-fab--delete",3,"click","disabled"]],template:function(t,e){if(t&1&&(s(0,"div",0)(1,"header",1)(2,"h1",2),m(3,"Clientes"),l(),s(4,"div",3)(5,"mat-form-field",4)(6,"mat-label"),m(7,"Buscar"),l(),s(8,"mat-icon",5),m(9,"search"),l(),G(10,"input",6),l(),s(11,"div",7)(12,"button",8),v("click",function(){return e.openCreate()}),m(13," Novo cliente "),l(),s(14,"button",9),v("click",function(){return e.reload()}),m(15,"Recarregar"),l()()()(),s(16,"mat-sidenav-container",10)(17,"mat-sidenav-content")(18,"mat-card",11),D(19,Sn,1,0,"mat-progress-bar",12),s(20,"mat-card-content",13),D(21,En,2,1,"p",14),D(22,Tn,7,1,"div",15)(23,In,5,0,"div",15)(24,Fn,3,0,"mat-list",16),l()()(),s(25,"mat-sidenav",17),v("openedChange",function(r){return e.onEditorDrawerOpenedChange(r)}),s(26,"div",18)(27,"div",19)(28,"h2",20),m(29),l(),s(30,"button",21),v("click",function(){return e.requestCloseWithoutSave()}),s(31,"mat-icon"),m(32,"close"),l()()(),D(33,Ln,3,5,"p",22),s(34,"form",23),v("ngSubmit",function(){return e.submitCustomerForm()}),s(35,"mat-form-field",24)(36,"mat-label"),m(37,"Nome"),l(),G(38,"input",25),D(39,Pn,2,1,"mat-error"),l(),s(40,"mat-form-field",24)(41,"mat-label"),m(42,"E-mail"),l(),G(43,"input",26),D(44,Rn,2,1,"mat-error"),l(),s(45,"mat-form-field",24)(46,"mat-label"),m(47,"Telefone"),l(),G(48,"input",27),D(49,Bn,2,1,"mat-error"),l(),s(50,"mat-form-field",24)(51,"mat-label"),m(52,"CPF ou CNPJ"),l(),G(53,"input",28),D(54,zn,2,1,"mat-error"),l(),s(55,"div",29)(56,"button",30),v("click",function(){return e.requestCloseWithoutSave()}),m(57," Cancelar "),l(),s(58,"button",31),m(59),l()()()()()()()),t&2){let n;d(10),g("formControl",e.searchControl),d(2),g("disabled",e.loading()),d(2),g("disabled",e.loading()),d(2),g("hasBackdrop",!0),d(3),M(e.loading()?19:-1),d(2),M(e.error()?21:-1),d(),M(!e.loading()&&e.customers().length===0&&!e.activeSearch()?22:!e.loading()&&e.customers().length===0&&e.activeSearch()?23:24),d(3),g("fixedInViewport",!0)("opened",e.editorOpen())("disableClose",e.loading()||e.customerForm.dirty),d(4),ae(" ",e.selected()?"Editar cliente":"Novo cliente"," "),d(),g("disabled",e.loading()),d(3),M((n=e.selected())?33:-1,n),d(),g("formGroup",e.customerForm),d(5),M(e.showErr(e.customerForm.controls.name)?39:-1),d(5),M(e.showErr(e.customerForm.controls.email)?44:-1),d(5),M(e.showErr(e.customerForm.controls.phone)?49:-1),d(5),M(e.showErr(e.customerForm.controls.document)?54:-1),d(2),g("disabled",e.loading()),d(2),g("disabled",e.customerForm.invalid||e.loading()),d(),ae(" ",e.selected()?"Salvar":"Cadastrar"," ")}},dependencies:[Qe,Be,Fe,Le,Pe,ze,Ne,je,ei,Je,ti,ht,mt,Ye,Ke,ri,oi,ii,ni,ai,li,si,di,ci,Ei,Ai,Si,ce,de,hi,mi,Ii,ue,Ti,Nt,wi,xi,pt,Te],styles:[".customers-page[_ngcontent-%COMP%]{flex:1;min-height:0;display:flex;flex-direction:column;padding-top:var(--app-space-2)}.customers-sidenav[_ngcontent-%COMP%]{flex:1;min-height:min(70vh,36rem);width:100%;background:transparent}[_nghost-%COMP%]     .customers-sidenav .mat-drawer-backdrop.mat-drawer-shown{background-color:color-mix(in srgb,var(--mat-sys-on-surface) 22%,transparent)}@supports (backdrop-filter: blur(1px)){[_nghost-%COMP%]     .customers-sidenav .mat-drawer-backdrop.mat-drawer-shown{backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px)}}[_nghost-%COMP%]     .customers-editor-sidenav.mat-drawer{width:min(100vw - var(--app-space-4),28rem);border-radius:var(--app-radius-lg) 0 0 var(--app-radius-lg);border-inline-end:none;box-shadow:none}[_nghost-%COMP%]     .customers-editor-sidenav .mat-drawer-inner-container{overflow-x:hidden}.editor-drawer-panel[_ngcontent-%COMP%]{box-sizing:border-box;min-height:100%;padding:var(--app-space-4) var(--app-space-4) var(--app-space-6);background-color:var(--mat-sys-surface-container-lowest)}.customers-page-header[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:var(--app-space-3) var(--app-space-4);padding-bottom:var(--app-space-4);margin-bottom:var(--app-space-1);border-bottom:1px solid var(--mat-sys-outline-variant);overflow:visible}.customers-page-title[_ngcontent-%COMP%]{margin:0;flex:0 1 auto;min-width:min(100%,12rem)}.customers-page-tools[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-end;gap:var(--app-space-3);flex:1 1 16rem;overflow:visible}.customers-inline-search[_ngcontent-%COMP%]{flex:1 1 12rem;width:min(100%,22rem);max-width:min(100%,28rem)}.toolbar[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:var(--app-space-2);align-items:center;flex:0 0 auto}.customers-panel-body[_ngcontent-%COMP%]{padding-top:var(--app-space-4)!important}.empty-state[_ngcontent-%COMP%]{margin-top:var(--app-space-2);padding:var(--app-space-6) var(--app-space-5);border:1px dashed var(--mat-sys-outline-variant);border-radius:var(--app-radius-md);text-align:center;background-color:var(--mat-sys-surface-container-low)}.empty-title[_ngcontent-%COMP%]{margin:0;font-weight:600}.empty-hint[_ngcontent-%COMP%]{margin:var(--app-space-2) auto var(--app-space-4);max-width:22.5rem;line-height:1.55}.customer-list[_ngcontent-%COMP%]{padding:0;margin-top:var(--app-space-2);border-radius:var(--app-radius-sm);overflow:hidden;outline:1px solid var(--mat-sys-outline-variant);outline-offset:-1px}.customer-item[_ngcontent-%COMP%]{height:auto!important;min-height:4.75rem;align-items:center}.customer-item[_ngcontent-%COMP%]:not(:last-of-type){border-bottom:1px solid var(--mat-sys-outline-variant)}.customer-item[_ngcontent-%COMP%]     .mat-mdc-list-item-meta{align-self:center}.customer-block[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;gap:var(--app-space-1);padding-block:var(--app-space-2);min-width:0;width:100%}.customer-name[_ngcontent-%COMP%]{font-weight:600;font-size:1rem;line-height:1.35;color:var(--mat-sys-on-surface)}.customer-contact[_ngcontent-%COMP%]{margin:0;line-height:1.4;color:var(--mat-sys-on-surface)}.customer-meta[_ngcontent-%COMP%]{margin:0;line-height:1.4;font-size:.8125rem}.item-actions[_ngcontent-%COMP%]{display:flex;gap:var(--app-space-3);justify-content:flex-end;align-items:center}.item-action-fab--edit.mat-mdc-mini-fab[_ngcontent-%COMP%]{--mdc-fab-container-color: var(--mat-sys-primary);--mat-fab-foreground-color: var(--mat-sys-on-primary)}.item-action-fab--delete.mat-mdc-mini-fab[_ngcontent-%COMP%]{--mdc-fab-container-color: var(--mat-sys-error);--mat-fab-foreground-color: var(--mat-sys-on-error)}.customer-item-selected[_ngcontent-%COMP%]{background-color:color-mix(in srgb,var(--mat-sys-primary) 10%,transparent)}.editor-toolbar[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-start;gap:var(--app-space-3);margin-bottom:var(--app-space-4);padding-bottom:var(--app-space-3);border-bottom:1px solid var(--mat-sys-outline-variant)}.editor-title[_ngcontent-%COMP%]{margin:0;flex:1;min-width:0;padding-inline-end:var(--app-space-2)}.meta-sub[_ngcontent-%COMP%]{margin:0 0 var(--app-space-4)}.actions-row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:var(--app-space-2);align-items:center;justify-content:flex-end;margin-top:var(--app-space-4);padding-top:var(--app-space-2)}.actions-row[_ngcontent-%COMP%]   .cancel-editor[_ngcontent-%COMP%]{margin-inline-end:auto}"],changeDetection:0})};export{qi as CustomersPage};
