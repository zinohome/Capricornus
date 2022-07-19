import _decorate from "@babel/runtime/helpers/esm/decorate";
import _get from "@babel/runtime/helpers/esm/get";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

let _ = t => t,
    _t;

/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { html, customElement, LitElement } from 'lit-element';
import settings from 'carbon-components/es/globals/js/settings';
import styles from "././breadcrumb.css.js";
const {
  prefix
} = settings;
/**
 * Breadcrumb.
 * @element bx-breadcrumb
 */

let BXBreadcrumb = _decorate([customElement(`${prefix}-breadcrumb`)], function (_initialize, _LitElement) {
  class BXBreadcrumb extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXBreadcrumb,
    d: [{
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        if (!this.hasAttribute('role')) {
          this.setAttribute('role', 'nav');
        }

        _get(_getPrototypeOf(BXBreadcrumb.prototype), "connectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return html(_t || (_t = _` <ol class="${0}--breadcrumb ${0}--breadcrumb--no-trailing-slash"> <slot></slot> </ol> `), prefix, prefix);
      }
    }, {
      kind: "field",
      static: true,
      key: "styles",

      value() {
        return styles;
      }

    }]
  };
}, LitElement);

export default BXBreadcrumb;
//# sourceMappingURL=breadcrumb.js.map
