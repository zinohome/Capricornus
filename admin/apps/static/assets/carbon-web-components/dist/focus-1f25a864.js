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

import{s as e}from"./settings-cdb0ef76.js";
/**
 * @license
 *
 * Copyright IBM Corp. 2019
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const{prefix:n}=e,t=`\n  a[href], area[href], input:not([disabled]):not([tabindex='-1']),\n  button:not([disabled]):not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']),\n  textarea:not([disabled]):not([tabindex='-1']),\n  iframe, object, embed, *[tabindex]:not([tabindex='-1']), *[contenteditable=true],\n  ${n}-accordion-item,\n  ${n}-btn,\n  ${n}-breadcrumb-link,\n  ${n}-checkbox,\n  ${n}-code-snippet,\n  ${n}-combo-box,\n  ${n}-content-switcher-item,\n  ${n}-copy-button,\n  ${n}-table-header-row,\n  ${n}-table-row,\n  ${n}-table-toolbar-search,\n  ${n}-date-picker-input,\n  ${n}-dropdown,\n  ${n}-input,\n  ${n}-link,\n  ${n}-number-input,\n  ${n}-modal,\n  ${n}-modal-close-button,\n  ${n}-multi-select,\n  ${n}-inline-notification,\n  ${n}-toast-notification,\n  ${n}-overflow-menu,\n  ${n}-overflow-menu-item,\n  ${n}-page-sizes-select,\n  ${n}-pages-select,\n  ${n}-progress-step,\n  ${n}-radio-button,\n  ${n}-search,\n  ${n}-slider,\n  ${n}-slider-input,\n  ${n}-structured-list,\n  ${n}-tab,\n  ${n}-filter-tag,\n  ${n}-textarea,\n  ${n}-clickable-tile,\n  ${n}-expandable-tile,\n  ${n}-radio-tile,\n  ${n}-selectable-tile,\n  ${n}-toggle,\n  ${n}-tooltip,\n  ${n}-tooltip-definition,\n  ${n}-tooltip-icon,\n  ${n}-header-menu,\n  ${n}-header-menu-button,\n  ${n}-header-menu-item,\n  ${n}-header-name,\n  ${n}-header-nav-item,\n  ${n}-side-nav-link,\n  ${n}-side-nav-menu,\n  ${n}-side-nav-menu-item\n`,o=e=>class extends e{focus(){if(this.shadowRoot.delegatesFocus)super.focus();else{const e=this.shadowRoot.querySelector(t)||this.querySelector(t);e?e.focus():super.focus()}}};export{o as F,t as s};
