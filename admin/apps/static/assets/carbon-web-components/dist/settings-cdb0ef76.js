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

function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,s=new Array(t);r<t;r++)s[r]=e[r];return s}function t(t){return function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(t,r){if(t){if("string"==typeof t)return e(t,r);var s=Object.prototype.toString.call(t).slice(8,-1);return"Object"===s&&t.constructor&&(s=t.constructor.name),"Map"===s||"Set"===s?Array.from(t):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?e(t,r):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function s(e,t){return e(t={exports:{}},t.exports),t.exports}var i,n=s((function(e){function t(r){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(e.exports=t=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),t(r)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0})),o=(i=n)&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i;function a(e){var t=function(e,t){if("object"!==o(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var s=r.call(e,t||"default");if("object"!==o(s))return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===o(t)?t:String(t)}function l(e,t,r,s){var i=c();if(s)for(var n=0;n<s.length;n++)i=s[n](i);var o=t((function(e){i.initializeInstanceElements(e,a.elements)}),r),a=i.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===n.key&&e.placement===n.placement},s=0;s<e.length;s++){var i,n=e[s];if("method"===n.kind&&(i=t.find(r)))if(u(n.descriptor)||u(i.descriptor)){if(h(n)||h(i))throw new ReferenceError("Duplicated methods ("+n.key+") can't be decorated.");i.descriptor=n.descriptor}else{if(h(n)){if(h(i))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+n.key+").");i.decorators=n.decorators}p(n,i)}else t.push(n)}return t}(o.d.map(d)),e);return i.initializeClassElements(o.F,a.elements),i.runClassFinishers(o.F,a.finishers)}function c(){c=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(s){t.forEach((function(t){var i=t.placement;if(t.kind===s&&("static"===i||"prototype"===i)){var n="static"===i?e:r;this.defineClassElement(n,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var s=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===s?void 0:s.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],s=[],i={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,i)}),this),e.forEach((function(e){if(!h(e))return r.push(e);var t=this.decorateElement(e,i);r.push(t.element),r.push.apply(r,t.extras),s.push.apply(s,t.finishers)}),this),!t)return{elements:r,finishers:s};var n=this.decorateConstructor(r,t);return s.push.apply(s,n.finishers),n.finishers=s,n},addElementPlacement:function(e,t,r){var s=t[e.placement];if(!r&&-1!==s.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");s.push(e.key)},decorateElement:function(e,t){for(var r=[],s=[],i=e.decorators,n=i.length-1;n>=0;n--){var o=t[e.placement];o.splice(o.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,i[n])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&s.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);r.push.apply(r,c)}}return{element:e,finishers:s,extras:r}},decorateConstructor:function(e,t){for(var r=[],s=t.length-1;s>=0;s--){var i=this.fromClassDescriptor(e),n=this.toClassDescriptor((0,t[s])(i)||i);if(void 0!==n.finisher&&r.push(n.finisher),void 0!==n.elements){e=n.elements;for(var o=0;o<e.length-1;o++)for(var a=o+1;a<e.length;a++)if(e[o].key===e[a].key&&e[o].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[o].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){if(void 0!==e)return t(e).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=a(e.key),s=String(e.placement);if("static"!==s&&"prototype"!==s&&"own"!==s)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+s+'"');var i=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var n={kind:t,key:r,placement:s,descriptor:Object.assign({},i)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(i,"get","The property descriptor of a field descriptor"),this.disallowProperty(i,"set","The property descriptor of a field descriptor"),this.disallowProperty(i,"value","The property descriptor of a field descriptor"),n.initializer=e.initializer),n},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:f(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=f(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var s=(0,t[r])(e);if(void 0!==s){if("function"!=typeof s)throw new TypeError("Finishers must return a constructor.");e=s}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function d(e){var t,r=a(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var s={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(s.decorators=e.decorators),"field"===e.kind&&(s.initializer=e.value),s}function p(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function h(e){return e.decorators&&e.decorators.length}function u(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function f(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}
/**
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
 */const m="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,y=(e,t,r=null)=>{for(;t!==r;){const r=t.nextSibling;e.removeChild(t),t=r}},_=`{{lit-${String(Math.random()).slice(2)}}}`,g=`\x3c!--${_}--\x3e`,v=new RegExp(`${_}|${g}`);class w{constructor(e,t){this.parts=[],this.element=t;const r=[],s=[],i=document.createTreeWalker(t.content,133,null,!1);let n=0,o=-1,a=0;const{strings:l,values:{length:c}}=e;for(;a<c;){const e=i.nextNode();if(null!==e){if(o++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:r}=t;let s=0;for(let e=0;e<r;e++)S(t[e].name,"$lit$")&&s++;for(;s-- >0;){const t=l[a],r=P.exec(t)[2],s=r.toLowerCase()+"$lit$",i=e.getAttribute(s);e.removeAttribute(s);const n=i.split(v);this.parts.push({type:"attribute",index:o,name:r,strings:n}),a+=n.length-1}}"TEMPLATE"===e.tagName&&(s.push(e),i.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(_)>=0){const s=e.parentNode,i=t.split(v),n=i.length-1;for(let t=0;t<n;t++){let r,n=i[t];if(""===n)r=x();else{const e=P.exec(n);null!==e&&S(e[2],"$lit$")&&(n=n.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),r=document.createTextNode(n)}s.insertBefore(r,e),this.parts.push({type:"node",index:++o})}""===i[n]?(s.insertBefore(x(),e),r.push(e)):e.data=i[n],a+=n}}else if(8===e.nodeType)if(e.data===_){const t=e.parentNode;null!==e.previousSibling&&o!==n||(o++,t.insertBefore(x(),e)),n=o,this.parts.push({type:"node",index:o}),null===e.nextSibling?e.data="":(r.push(e),o--),a++}else{let t=-1;for(;-1!==(t=e.data.indexOf(_,t+1));)this.parts.push({type:"node",index:-1}),a++}}else i.currentNode=s.pop()}for(const e of r)e.parentNode.removeChild(e)}}const S=(e,t)=>{const r=e.length-t.length;return r>=0&&e.slice(r)===t},b=e=>-1!==e.index,x=()=>document.createComment(""),P=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function E(e,t){const{element:{content:r},parts:s}=e,i=document.createTreeWalker(r,133,null,!1);let n=T(s),o=s[n],a=-1,l=0;const c=[];let d=null;for(;i.nextNode();){a++;const e=i.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(c.push(e),null===d&&(d=e)),null!==d&&l++;void 0!==o&&o.index===a;)o.index=null!==d?-1:o.index-l,n=T(s,n),o=s[n]}c.forEach((e=>e.parentNode.removeChild(e)))}const C=e=>{let t=11===e.nodeType?0:1;const r=document.createTreeWalker(e,133,null,!1);for(;r.nextNode();)t++;return t},T=(e,t=-1)=>{for(let r=t+1;r<e.length;r++){const t=e[r];if(b(t))return r}return-1};
/**
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
 */
const N=new WeakMap,A=e=>(...t)=>{const r=e(...t);return N.set(r,!0),r},k=e=>"function"==typeof e&&N.has(e),O={},V={};
/**
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
 */
class U{constructor(e,t,r){this.__parts=[],this.template=e,this.processor=t,this.options=r}update(e){let t=0;for(const r of this.__parts)void 0!==r&&r.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=m?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],r=this.template.parts,s=document.createTreeWalker(e,133,null,!1);let i,n=0,o=0,a=s.nextNode();for(;n<r.length;)if(i=r[n],b(i)){for(;o<i.index;)o++,"TEMPLATE"===a.nodeName&&(t.push(a),s.currentNode=a.content),null===(a=s.nextNode())&&(s.currentNode=t.pop(),a=s.nextNode());if("node"===i.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(a.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,i.name,i.strings,this.options));n++}else this.__parts.push(void 0),n++;return m&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
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
 */const M=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),R=` ${_} `;class j{constructor(e,t,r,s){this.strings=e,this.values=t,this.type=r,this.processor=s}getHTML(){const e=this.strings.length-1;let t="",r=!1;for(let s=0;s<e;s++){const e=this.strings[s],i=e.lastIndexOf("\x3c!--");r=(i>-1||r)&&-1===e.indexOf("--\x3e",i+1);const n=P.exec(e);t+=null===n?e+(r?R:g):e.substr(0,n.index)+n[1]+n[2]+"$lit$"+n[3]+_}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==M&&(t=M.createHTML(t)),e.innerHTML=t,e}}class D extends j{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const e=super.getTemplateElement(),t=e.content,r=t.firstChild;return t.removeChild(r),((e,t,r=null,s=null)=>{for(;t!==r;){const r=t.nextSibling;e.insertBefore(t,s),t=r}})(t,r.firstChild),e}}
/**
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
 */const z=e=>null===e||!("object"==typeof e||"function"==typeof e),$=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class F{constructor(e,t,r){this.dirty=!0,this.element=e,this.name=t,this.strings=r,this.parts=[];for(let e=0;e<r.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new I(this)}_getValue(){const e=this.strings,t=e.length-1,r=this.parts;if(1===t&&""===e[0]&&""===e[1]){const e=r[0].value;if("symbol"==typeof e)return String(e);if("string"==typeof e||!$(e))return e}let s="";for(let i=0;i<t;i++){s+=e[i];const t=r[i];if(void 0!==t){const e=t.value;if(z(e)||!$(e))s+="string"==typeof e?e:String(e);else for(const t of e)s+="string"==typeof t?t:String(t)}}return s+=e[t],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class I{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===O||z(e)&&e===this.value||(this.value=e,k(e)||(this.committer.dirty=!0))}commit(){for(;k(this.value);){const e=this.value;this.value=O,e(this)}this.value!==O&&this.committer.commit()}}class q{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(x()),this.endNode=e.appendChild(x())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=x()),e.__insert(this.endNode=x())}insertAfterPart(e){e.__insert(this.startNode=x()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;k(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=O,e(this)}const e=this.__pendingValue;e!==O&&(z(e)?e!==this.value&&this.__commitText(e):e instanceof j?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):$(e)?this.__commitIterable(e):e===V?(this.value=V,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,r="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=r:this.__commitNode(document.createTextNode(r)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof U&&this.value.template===t)this.value.update(e.values);else{const r=new U(t,e.processor,this.options),s=r._clone();r.update(e.values),this.__commitNode(s),this.value=r}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let r,s=0;for(const i of e)r=t[s],void 0===r&&(r=new q(this.options),t.push(r),0===s?r.appendIntoPart(this):r.insertAfterPart(t[s-1])),r.setValue(i),r.commit(),s++;s<t.length&&(t.length=s,this.clear(r&&r.endNode))}clear(e=this.startNode){y(this.startNode.parentNode,e.nextSibling,this.endNode)}}class L{constructor(e,t,r){if(this.value=void 0,this.__pendingValue=void 0,2!==r.length||""!==r[0]||""!==r[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=r}setValue(e){this.__pendingValue=e}commit(){for(;k(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=O,e(this)}if(this.__pendingValue===O)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=O}}class H extends F{constructor(e,t,r){super(e,t,r),this.single=2===r.length&&""===r[0]&&""===r[1]}_createPart(){return new B(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class B extends I{}let W=!1;(()=>{try{const e={get capture(){return W=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class J{constructor(e,t,r){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=r,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;k(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=O,e(this)}if(this.__pendingValue===O)return;const e=this.__pendingValue,t=this.value,r=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),s=null!=e&&(null==t||r);r&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=G(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=O}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const G=e=>e&&(W?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
/**
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
 */;function K(e){let t=Q.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},Q.set(e.type,t));let r=t.stringsArray.get(e.strings);if(void 0!==r)return r;const s=e.strings.join(_);return r=t.keyString.get(s),void 0===r&&(r=new w(e,e.getTemplateElement()),t.keyString.set(s,r)),t.stringsArray.set(e.strings,r),r}const Q=new Map,X=new WeakMap,Y=(e,t,r)=>{let s=X.get(t);void 0===s&&(y(t,t.firstChild),X.set(t,s=new q(Object.assign({templateFactory:K},r))),s.appendInto(t)),s.setValue(e),s.commit()};
/**
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
 */const Z=new
/**
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
 */
class{handleAttributeExpressions(e,t,r,s){const i=t[0];if("."===i){return new H(e,t.slice(1),r).parts}if("@"===i)return[new J(e,t.slice(1),s.eventContext)];if("?"===i)return[new L(e,t.slice(1),r)];return new F(e,t,r).parts}handleTextExpression(e){return new q(e)}};
/**
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
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const ee=(e,...t)=>new j(e,t,"html",Z),te=(e,...t)=>new D(e,t,"svg",Z)
/**
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
 */,re=(e,t)=>`${e}--${t}`;let se=!0;void 0===window.ShadyCSS?se=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),se=!1);const ie=e=>t=>{const r=re(t.type,e);let s=Q.get(r);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},Q.set(r,s));let i=s.stringsArray.get(t.strings);if(void 0!==i)return i;const n=t.strings.join(_);if(i=s.keyString.get(n),void 0===i){const r=t.getTemplateElement();se&&window.ShadyCSS.prepareTemplateDom(r,e),i=new w(t,r),s.keyString.set(n,i)}return s.stringsArray.set(t.strings,i),i},ne=["html","svg"],oe=new Set,ae=(e,t,r)=>{oe.add(e);const s=r?r.element:document.createElement("template"),i=t.querySelectorAll("style"),{length:n}=i;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(s,e);const o=document.createElement("style");for(let e=0;e<n;e++){const t=i[e];t.parentNode.removeChild(t),o.textContent+=t.textContent}(e=>{ne.forEach((t=>{const r=Q.get(re(t,e));void 0!==r&&r.keyString.forEach((e=>{const{element:{content:t}}=e,r=new Set;Array.from(t.querySelectorAll("style")).forEach((e=>{r.add(e)})),E(e,r)}))}))})(e);const a=s.content;r?function(e,t,r=null){const{element:{content:s},parts:i}=e;if(null==r)return void s.appendChild(t);const n=document.createTreeWalker(s,133,null,!1);let o=T(i),a=0,l=-1;for(;n.nextNode();)for(l++,n.currentNode===r&&(a=C(t),r.parentNode.insertBefore(t,r));-1!==o&&i[o].index===l;){if(a>0){for(;-1!==o;)i[o].index+=a,o=T(i,o);return}o=T(i,o)}}(r,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(s,e);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(r){a.insertBefore(o,a.firstChild);const e=new Set;e.add(o),E(r,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const le={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},ce=(e,t)=>t!==e&&(t==t||e==e),de={attribute:!0,type:String,converter:le,reflect:!1,hasChanged:ce};class pe extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach(((t,r)=>{const s=this._attributeNameForProperty(r,t);void 0!==s&&(this._attributeToPropertyMap.set(s,r),e.push(s))})),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach(((e,t)=>this._classProperties.set(t,e)))}}static createProperty(e,t=de){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const r="symbol"==typeof e?Symbol():`__${e}`,s=this.getPropertyDescriptor(e,r,t);void 0!==s&&Object.defineProperty(this.prototype,e,s)}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(s){const i=this[e];this[t]=s,this.requestUpdateInternal(e,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||de}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const r of t)this.createProperty(r,e[r])}}static _attributeNameForProperty(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,r=ce){return r(e,t)}static _propertyValueFromAttribute(e,t){const r=t.type,s=t.converter||le,i="function"==typeof s?s:s.fromAttribute;return i?i(e,r):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const r=t.type,s=t.converter;return(s&&s.toAttribute||le.toAttribute)(e,r)}initialize(){this._updateState=0,this._updatePromise=new Promise((e=>this._enableUpdatingResolver=e)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((e,t)=>this[t]=e)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,r){t!==r&&this._attributeToProperty(e,r)}_propertyToAttribute(e,t,r=de){const s=this.constructor,i=s._attributeNameForProperty(e,r);if(void 0!==i){const e=s._propertyValueToAttribute(t,r);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(i):this.setAttribute(i,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const r=this.constructor,s=r._attributeToPropertyMap.get(e);if(void 0!==s){const e=r.getPropertyOptions(s);this._updateState=16|this._updateState,this[s]=r._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}requestUpdateInternal(e,t,r){let s=!0;if(void 0!==e){const i=this.constructor;r=r||i.getPropertyOptions(e),i._valueHasChanged(this[e],t,r.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==r.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,r))):s=!1}!this._hasRequestedUpdate&&s&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((e,t)=>this._propertyToAttribute(t,this[t],e))),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}pe.finalized=!0;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const he=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ue=Symbol();class fe{constructor(e,t){if(t!==ue)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(he?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const me=(e,...t)=>{const r=t.reduce(((t,r,s)=>t+(e=>{if(e instanceof fe)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(r)+e[s+1]),e[0]);return new fe(r,ue)};
/**
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
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const ye={};class _e extends pe{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,r)=>e.reduceRight(((e,r)=>Array.isArray(r)?t(r,e):(e.add(r),e)),r),r=t(e,new Set),s=[];r.forEach((e=>s.unshift(e))),this._styles=s}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map((e=>{if(e instanceof CSSStyleSheet&&!he){const t=Array.prototype.slice.call(e.cssRules).reduce(((e,t)=>e+t.cssText),"");return new fe(String(t),ue)}return e}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?he?this.renderRoot.adoptedStyleSheets=e.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((e=>e.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==ye&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)})))}render(){return ye}}_e.finalized=!0,_e.render=(e,t,r)=>{if(!r||"object"!=typeof r||!r.scopeName)throw new Error("The `scopeName` option is required.");const s=r.scopeName,i=X.has(t),n=se&&11===t.nodeType&&!!t.host,o=n&&!oe.has(s),a=o?document.createDocumentFragment():t;if(Y(e,a,Object.assign({templateFactory:ie(s)},r)),o){const e=X.get(a);X.delete(a);const r=e.value instanceof U?e.value.template:void 0;ae(s,a,r),y(t,t.firstChild),t.appendChild(a),X.set(t,e)}!i&&n&&window.ShadyCSS.styleElement(t.host)},_e.shadowRootOptions={mode:"open"};var ge={prefix:"bx",selectorTabbable:"\n    a[href], area[href], input:not([disabled]):not([tabindex='-1']),\n    button:not([disabled]):not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']),\n    textarea:not([disabled]):not([tabindex='-1']),\n    iframe, object, embed, *[tabindex]:not([tabindex='-1']), *[contenteditable=true]\n  ",selectorFocusable:"\n    a[href], area[href], input:not([disabled]),\n    button:not([disabled]),select:not([disabled]),\n    textarea:not([disabled]),\n    iframe, object, embed, *[tabindex], *[contenteditable=true]\n  "};export{I as A,_e as L,B as P,l as _,te as a,s as b,me as c,A as d,r as e,ee as h,Y as r,ge as s};
