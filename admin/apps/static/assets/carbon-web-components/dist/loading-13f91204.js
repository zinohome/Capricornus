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

import{c as e,_ as t,L as i,h as a,s as o}from"./settings-cdb0ef76.js";import{c as n}from"./class-map-4450d727.js";import{L as r,g as s}from"./loading-icon-8d36bede.js";import{p as d,c as l}from"./decorators-91ff6009.js";var c=e(['a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{border:0;font:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}button,input,select,textarea{border-radius:0;font-family:inherit}input[type=text]::-ms-clear{display:none}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block}body{line-height:1}sup{vertical-align:super}sub{vertical-align:sub}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:""}table{border-collapse:collapse;border-spacing:0}*{box-sizing:border-box}button{margin:0}html{font-size:100%}body{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;font-family:IBM Plex Sans,Helvetica Neue,Arial,sans-serif;font-weight:400}code{font-family:IBM Plex Mono,Menlo,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier,monospace}strong{font-weight:600}@media screen and (-ms-high-contrast:active){svg{fill:ButtonText}}h1{font-size:var(--cds-productive-heading-06-font-size,2.625rem);font-weight:var(--cds-productive-heading-06-font-weight,300);letter-spacing:var(--cds-productive-heading-06-letter-spacing,0);line-height:var(--cds-productive-heading-06-line-height,1.199)}h2{font-size:var(--cds-productive-heading-05-font-size,2rem);font-weight:var(--cds-productive-heading-05-font-weight,400);letter-spacing:var(--cds-productive-heading-05-letter-spacing,0);line-height:var(--cds-productive-heading-05-line-height,1.25)}h3{font-size:var(--cds-productive-heading-04-font-size,1.75rem);font-weight:var(--cds-productive-heading-04-font-weight,400);letter-spacing:var(--cds-productive-heading-04-letter-spacing,0);line-height:var(--cds-productive-heading-04-line-height,1.28572)}h4{font-size:var(--cds-productive-heading-03-font-size,1.25rem);font-weight:var(--cds-productive-heading-03-font-weight,400);letter-spacing:var(--cds-productive-heading-03-letter-spacing,0);line-height:var(--cds-productive-heading-03-line-height,1.4)}h5{font-size:var(--cds-productive-heading-02-font-size,1rem);font-weight:var(--cds-productive-heading-02-font-weight,600);letter-spacing:var(--cds-productive-heading-02-letter-spacing,0);line-height:var(--cds-productive-heading-02-line-height,1.375)}h6{font-size:var(--cds-productive-heading-01-font-size,.875rem);font-weight:var(--cds-productive-heading-01-font-weight,600);letter-spacing:var(--cds-productive-heading-01-letter-spacing,.16px);line-height:var(--cds-productive-heading-01-line-height,1.28572)}p{font-size:var(--cds-body-long-02-font-size,1rem);font-weight:var(--cds-body-long-02-font-weight,400);letter-spacing:var(--cds-body-long-02-letter-spacing,0);line-height:var(--cds-body-long-02-line-height,1.5)}a{color:#0f62fe}em{font-style:italic}@-webkit-keyframes rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@-webkit-keyframes rotate-end-p1{to{transform:rotate(1turn)}}@keyframes rotate-end-p1{to{transform:rotate(1turn)}}@-webkit-keyframes rotate-end-p2{to{transform:rotate(-1turn)}}@keyframes rotate-end-p2{to{transform:rotate(-1turn)}}@-webkit-keyframes init-stroke{0%{stroke-dashoffset:276.4608}to{stroke-dashoffset:52.527552}}@keyframes init-stroke{0%{stroke-dashoffset:276.4608}to{stroke-dashoffset:52.527552}}@-webkit-keyframes stroke-end{0%{stroke-dashoffset:52.527552}to{stroke-dashoffset:276.4608}}@keyframes stroke-end{0%{stroke-dashoffset:52.527552}to{stroke-dashoffset:276.4608}}.bx--loading,:host(bx-loading){-webkit-animation-duration:.69s;animation-duration:.69s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:rotate;animation-name:rotate;-webkit-animation-timing-function:linear;animation-timing-function:linear;border:0;box-sizing:border-box;font-family:inherit;font-size:100%;height:5.5rem;margin:0;padding:0;vertical-align:baseline;width:5.5rem}.bx--loading *,.bx--loading :after,.bx--loading :before,:host(bx-loading) *,:host(bx-loading) :after,:host(bx-loading) :before{box-sizing:inherit}.bx--loading svg circle,:host(bx-loading) svg circle{-webkit-animation-duration:10ms;animation-duration:10ms;-webkit-animation-name:init-stroke;animation-name:init-stroke;-webkit-animation-timing-function:cubic-bezier(.2,0,.38,.9);animation-timing-function:cubic-bezier(.2,0,.38,.9)}.bx--loading__svg{fill:transparent}.bx--loading__svg circle{stroke-dasharray:276.4608 276.4608;stroke-linecap:butt;stroke-width:10}.bx--loading__stroke{stroke:var(--cds-interactive-04,#0f62fe);stroke-dashoffset:52.527552}.bx--loading--small .bx--loading__stroke,:host(bx-loading[type=small]) .bx--loading__stroke{stroke-dashoffset:143.759616}.bx--loading--stop,:host(bx-loading[inactive]){-webkit-animation:rotate-end-p1 .7s cubic-bezier(.2,0,1,.9) forwards,rotate-end-p2 .7s cubic-bezier(.2,0,1,.9) .7s forwards;animation:rotate-end-p1 .7s cubic-bezier(.2,0,1,.9) forwards,rotate-end-p2 .7s cubic-bezier(.2,0,1,.9) .7s forwards}.bx--loading--stop svg circle,:host(bx-loading[inactive]) svg circle{-webkit-animation-delay:.7s;animation-delay:.7s;-webkit-animation-duration:.7s;animation-duration:.7s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-name:stroke-end;animation-name:stroke-end;-webkit-animation-timing-function:cubic-bezier(.2,0,1,.9);animation-timing-function:cubic-bezier(.2,0,1,.9)}.bx--loading--small,:host(bx-loading[type=small]){height:1rem;width:1rem}.bx--loading--small circle,:host(bx-loading[type=small]) circle{stroke-width:16}.bx--loading--small .bx--loading__svg,:host(bx-loading[type=small]) .bx--loading__svg{stroke:var(--cds-interactive-04,#0f62fe)}.bx--loading__background{stroke:var(--cds-ui-03,#e0e0e0);stroke-dashoffset:-22}@media not all and (min-resolution:0.001dpcm){@supports (-webkit-appearance:none) and (stroke-color:transparent){circle.bx--loading__background{stroke-dasharray:265;stroke-dashoffset:0}}}.bx--loading-overlay,:host(bx-loading[type=overlay]){align-items:center;background-color:var(--cds-overlay-01,hsla(0,0%,9%,.5));display:flex;height:100%;justify-content:center;left:0;position:fixed;top:0;transition:background-color .72s cubic-bezier(.4,.14,.3,1);width:100%;z-index:z("overlay")}.bx--loading-overlay--stop{display:none}:host(bx-loading[type=overlay]){-webkit-animation:none;animation:none}.bx--loading__background[hidden]{display:none}']);let g,f=e=>e;const{prefix:h}=o;t([l(`${h}-loading`)],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[d({attribute:"assistive-text"})],key:"assistiveText",value:()=>"Loading"},{kind:"field",decorators:[d()],key:"type",value:()=>r.REGULAR},{kind:"field",decorators:[d({type:Boolean,reflect:!0})],key:"inactive",value:()=>!1},{kind:"method",key:"render",value:function(){const{inactive:e,assistiveText:t,type:i}=this,o=n({[`${h}--loading`]:!0,[`${h}--loading--stop`]:e}),d=s({assistiveText:t,type:i});return i!==r.OVERLAY?d:a(g||(g=f` <div class="${0}">${0}</div> `),o,d)}},{kind:"field",static:!0,key:"styles",value:()=>c}]}}),i);
