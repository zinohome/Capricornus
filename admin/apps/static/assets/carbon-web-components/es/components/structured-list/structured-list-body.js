import _decorate from "@babel/runtime/helpers/esm/decorate";
import _get from "@babel/runtime/helpers/esm/get";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

let _ = t => t,
    _t;

/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import settings from 'carbon-components/es/globals/js/settings';
import { html, customElement, LitElement } from 'lit-element';
import styles from "././structured-list.css.js";
const {
  prefix
} = settings;
/**
 * Structured list body.
 * @element bx-structured-list-body
 */

let BXStructuredListBody = _decorate([customElement(`${prefix}-structured-list-body`)], function (_initialize, _LitElement) {
  class BXStructuredListBody extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXStructuredListBody,
    d: [{
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        if (!this.hasAttribute('role')) {
          this.setAttribute('role', 'rowgroup');
        }

        _get(_getPrototypeOf(BXStructuredListBody.prototype), "connectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return html(_t || (_t = _`<slot></slot>`));
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

export default BXStructuredListBody;
//# sourceMappingURL=structured-list-body.js.map
