/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license
 * 
 * This bundle contains the following third-party dependencies:
 * 
 * lit-element:
 * 
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 * 
 * lit-html:
 * 
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 * 
 * flatpickr:
 * 
 flatpickr v4.6.1, @license MIT
 * 
 * Also refer to the following links for the license of other third-party dependencies:
 * 
 * https://www.npmjs.com/package/@carbon/icons
 * https://www.npmjs.com/package/lodash-es
 * https://www.npmjs.com/package/@babel/runtime
 */

let e,t,n,i;import{_ as r,L as s}from"./settings-cdb0ef76.js";import{H as o,a}from"./host-listener-fd62dd56.js";import{F as l}from"./focus-1f25a864.js";
/**
 * @license
 *
 * Copyright IBM Corp. 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */!function(e){e.LTR="ltr",e.RTL="rtl"}(e||(e={})),function(e){e.START="start",e.CENTER="center",e.END="end"}(t||(t={})),function(e){e.LEFT="left",e.TOP="top",e.RIGHT="right",e.BOTTOM="bottom"}(n||(n={})),function(e){e.HORIZONTAL="horizontal",e.VERTICAL="vertical"}(i||(i={}));const h=(e,t)=>(e.observe(t),{release:()=>(e.unobserve(t),null)}),c=(e,t)=>{const n=e.closest(t);if(n)return n;const{host:i}=e.getRootNode();return i?c(i,t):null};let u=r(null,(function(r,s){return{F:class extends s{constructor(...e){super(...e),r(this)}},d:[{kind:"field",key:"_hObserveResizeParent",value:()=>null},{kind:"field",key:"_hObserveResizeContainer",value:()=>null},{kind:"field",key:"_resizeObserver",value(){return new ResizeObserver((()=>{const{container:t,open:n,parent:i,position:r}=this;if(t&&n&&i){const{direction:t,start:n,top:i}=r;this.style[t!==e.RTL?"left":"right"]=`${n}px`,this.style.top=`${i}px`}}))}},{kind:"field",decorators:[a("focusout")],key:"_handleBlur",value(){return({relatedTarget:e})=>{if(!this.contains(e)){const{parent:e}=this;e&&(e.open=!1,HTMLElement.prototype.focus.call(this.parent))}}}},{kind:"field",key:"parent",value:()=>null},{kind:"get",key:"alignmentDirection",value:function(){return{[n.LEFT]:i.VERTICAL,[n.TOP]:i.HORIZONTAL,[n.RIGHT]:i.VERTICAL,[n.BOTTOM]:i.HORIZONTAL}[this.direction]}},{kind:"get",key:"container",value:function(){return c(this,this.constructor.selectorContainer)||this.ownerDocument.body}},{kind:"get",key:"position",value:function(){const{triggerPosition:r}=this.parent;if(!r)throw new TypeError("Missing information of trigger button position.");const{container:s}=this,{left:o=0,top:a=0,right:l=0,bottom:h=0}=r,{width:c,height:u}=this.getBoundingClientRect(),{left:d=0,right:p=0,top:f=0}=s.getBoundingClientRect(),v=(o+l)/2,R=(a+h)/2,O=s.ownerDocument.defaultView.getComputedStyle(s),T=O.getPropertyValue("direction"),g=T===e.RTL,b=g?s.ownerDocument.defaultView.innerWidth-p:d,m=g?p-l:o-d,k=g?p-o:l-d,y=g?p-v:v-d,E=a-f,C=R-f;if((s!==this.ownerDocument.body||0!==b||0!==f)&&"static"===O.getPropertyValue("position"))throw new Error("Floating menu container must not have `position:static`.");const{alignment:_,alignmentDirection:z,direction:L}=this;if(Object.values(t).indexOf(_)<0)throw new Error(`Wrong menu alignment: ${_}`);if(Object.values(n).indexOf(L)<0)throw new Error(`Wrong menu position direction: ${L}`);const w={[i.HORIZONTAL]:{[t.START]:()=>m,[t.CENTER]:()=>y-c/2,[t.END]:()=>k-c},[i.VERTICAL]:{[t.START]:()=>E,[t.CENTER]:()=>C-u/2,[t.END]:()=>h-u}}[z][_](),{start:N,top:P}={[n.LEFT]:()=>({start:m-c,top:w}),[n.TOP]:()=>({start:w,top:E-u}),[n.RIGHT]:()=>({start:k,top:w}),[n.BOTTOM]:()=>({start:w,top:h})}[L]();return{direction:T,start:N,top:P}}},{kind:"method",key:"createRenderRoot",value:function(){var e;return this.attachShadow({mode:"open",delegatesFocus:Number((null!==(e=/Safari\/(\d+)/.exec(navigator.userAgent))&&void 0!==e?e:["",0])[1])<=537})}},{kind:"method",key:"disconnectedCallback",value:function(){this._hObserveResizeContainer&&(this._hObserveResizeContainer=this._hObserveResizeContainer.release()),this._hObserveResizeParent&&(this._hObserveResizeParent=this._hObserveResizeParent.release())}},{kind:"method",key:"updated",value:function(t){const{container:n,open:i,parent:r}=this;if((t.has("alignment")||t.has("direction")||t.has("open"))&&i){r||(this.parent=this.parentElement,n.appendChild(this));const{direction:t,start:i,top:s}=this.position;this.style[t!==e.RTL?"left":"right"]=`${i}px`,this.style.top=`${s}px`}if(t.has("open")&&(this._hObserveResizeContainer&&(this._hObserveResizeContainer=this._hObserveResizeContainer.release()),this._hObserveResizeParent&&(this._hObserveResizeParent=this._hObserveResizeParent.release()),i)){var s;const{parentElement:e}=null!==(s=this.parent)&&void 0!==s?s:{};this._hObserveResizeContainer=h(this._resizeObserver,n),e&&(this._hObserveResizeParent=h(this._resizeObserver,e))}}},{kind:"field",static:!0,key:"FLOATING_MENU",value:()=>!0},{kind:"get",static:!0,key:"selectorContainer",value:function(){return"[data-floating-menu-container],bx-modal"}}]}}),o(l(s)));export{u as B,t as F,n as a,e as b};
