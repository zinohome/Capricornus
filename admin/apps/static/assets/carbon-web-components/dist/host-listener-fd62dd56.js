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

import{_ as e}from"./objectSpread2-a3835d6f.js";import{_ as t}from"./defineProperty-4e84fd59.js";import{o}from"./on-b85e61ad.js";
/**
 * @license
 *
 * Copyright IBM Corp. 2019
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const s=(e,t,o,s)=>{const n=o._hostListeners;if(!n)throw new Error("The method `@HostListener()` is defined on has to be of a class that has `HostListerMixin`.");n[s]||(n[s]={}),n[s][e]={options:t}},n=(t,o)=>(n,r)=>void 0!==r?s(t,o,n.constructor,r):((t,o,n)=>{const{kind:r,key:i,placement:a}=n;if(!("method"===r&&"prototype"===a||"field"===r&&"own"===a))throw new Error("`@HostListener()` must be defined on instance methods, but you may have defined it on static, field, etc.");return e(e({},n),{},{finisher(e){s(t,o,e,i)}})})(t,o,n),r=/^((document|window|parentRoot|shadowRoot):)?([\w-]+)$/,i=e=>{class s extends e{constructor(...e){super(...e),t(this,"_handles",new Set)}connectedCallback(){super.connectedCallback();const e=this.constructor._hostListeners;Object.keys(e).forEach((t=>{Object.keys(e[t]).forEach((s=>{var n;const i=r.exec(s);if(!i)throw new Error(`Could not parse the event name: ${t}`);const[,,a,c]=i,d={document:this.ownerDocument,window:this.ownerDocument.defaultView,parentRoot:this.getRootNode(),shadowRoot:this.shadowRoot}[a]||this,{options:h}=e[t][s];this._handles.add(o(d,null!==(n=this.constructor[c])&&void 0!==n?n:c,this[t],h))}))}))}disconnectedCallback(){this._handles.forEach((e=>{e.release(),this._handles.delete(e)})),super.disconnectedCallback()}}return t(s,"_hostListeners",{}),s};export{i as H,n as a};
