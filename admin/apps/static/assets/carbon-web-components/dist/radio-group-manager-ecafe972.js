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

let e;import{_ as t}from"./defineProperty-4e84fd59.js";
/**
 * @license
 *
 * Copyright IBM Corp. 2019
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */!function(e){e[e.BACKWARD=-1]="BACKWARD",e[e.FORWARD=1]="FORWARD"}(e||(e={}));class s{constructor(e){t(this,"_groups",{}),this.constructor._instances.set(e,this)}shouldBeFocusable(e){if(e.checked)return!0;const{name:t}=e,s=this._groups[t];if(s&&Array.from(s).some((e=>e.checked)))return!1;return!s||1===s.size||this.getSortedGroup(e)[0]===e}getSortedGroup(e){const t=this._groups[e.name];return t&&Array.from(t).sort(((e,t)=>{const s=e.compareDocumentPosition(t);return s&Node.DOCUMENT_POSITION_FOLLOWING||s&Node.DOCUMENT_POSITION_CONTAINED_BY?-1:s&Node.DOCUMENT_POSITION_PRECEDING||s&Node.DOCUMENT_POSITION_CONTAINS?1:0}))}add(e){const{name:t}=e;if(t){const s=this._groups;s[t]||(s[t]=new Set),s[t].add(e)}return this}delete(e,t=e.name){const s=this._groups[t];return!!s&&s.delete(e)}select(e){const t=this._groups[e.name];t&&(e.checked=!0,e.tabIndex=0,e.focus(),t.forEach((t=>{e!==t&&(t.checked=!1,t.tabIndex=-1)})))}navigate(e,t){const s=this.getSortedGroup(e);let r=s.indexOf(e)+t;return r<0?r=s.length-1:r>=s.length&&(r=0),s[r]}static get(e){return this._instances.get(e)||new s(e)}}t(s,"_instances",new WeakMap);export{e as N,s as R};
