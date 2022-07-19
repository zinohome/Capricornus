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
import { html, customElement, LitElement } from 'lit-element';
import settings from 'carbon-components/es/globals/js/settings';
import styles from "././data-table.css.js";
const {
  prefix
} = settings;
/**
 * Table toolbar.
 * @element bx-table-toolbar
 */

let BXTableToolbar = _decorate([customElement(`${prefix}-table-toolbar`)], function (_initialize, _LitElement) {
  class BXTableToolbar extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXTableToolbar,
    d: [{
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        if (!this.hasAttribute('role')) {
          this.setAttribute('role', 'section');
        }

        _get(_getPrototypeOf(BXTableToolbar.prototype), "connectedCallback", this).call(this);
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

export default BXTableToolbar;
//# sourceMappingURL=table-toolbar.js.map
