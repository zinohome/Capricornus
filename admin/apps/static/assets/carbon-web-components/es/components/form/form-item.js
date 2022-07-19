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
import settings from 'carbon-components/es/globals/js/settings';
import { customElement, LitElement, html } from 'lit-element';
import styles from "././form-item.css.js";
const {
  prefix
} = settings;
/**
 * Presentational element for form items
 * @element bx-form-item
 */

let BXFormItem = _decorate([customElement(`${prefix}-form-item`)], function (_initialize, _LitElement) {
  class BXFormItem extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXFormItem,
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

export { BXFormItem as default };
//# sourceMappingURL=form-item.js.map
