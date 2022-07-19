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
import { html, LitElement, customElement } from 'lit-element';
import settings from 'carbon-components/es/globals/js/settings';
import styles from "././modal.css.js";
const {
  prefix
} = settings;
/**
 * Modal heading.
 * @element bx-modal-heading
 */

let BXModalHeading = _decorate([customElement(`${prefix}-modal-heading`)], function (_initialize, _LitElement) {
  class BXModalHeading extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXModalHeading,
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

export default BXModalHeading;
//# sourceMappingURL=modal-heading.js.map
