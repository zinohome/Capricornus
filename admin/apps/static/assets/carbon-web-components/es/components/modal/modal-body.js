import _decorate from "@babel/runtime/helpers/esm/decorate";

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
import { html, customElement, LitElement } from 'lit-element';
import settings from 'carbon-components/es/globals/js/settings';
import styles from "././modal.css.js";
const {
  prefix
} = settings;
/**
 * Modal body.
 * @element bx-modal-body
 */

let BXModalBody = _decorate([customElement(`${prefix}-modal-body`)], function (_initialize, _LitElement) {
  class BXModalBody extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXModalBody,
    d: [{
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

export default BXModalBody;
//# sourceMappingURL=modal-body.js.map
