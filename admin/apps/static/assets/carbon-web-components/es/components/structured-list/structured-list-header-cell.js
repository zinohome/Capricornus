import _decorate from "@babel/runtime/helpers/esm/decorate";
import _get from "@babel/runtime/helpers/esm/get";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

let _ = t => t,
    _t;

/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { html, customElement, LitElement } from 'lit-element';
import settings from 'carbon-components/es/globals/js/settings';
import styles from "././structured-list.css.js";
const {
  prefix
} = settings;
/**
 * Structured list header cell.
 * @element bx-structured-list-header-cell
 */

let BXStructuredListHeaderCell = _decorate([customElement(`${prefix}-structured-list-header-cell`)], function (_initialize, _LitElement) {
  class BXStructuredListHeaderCell extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXStructuredListHeaderCell,
    d: [{
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        if (!this.hasAttribute('role')) {
          this.setAttribute('role', 'columnheader');
        }

        _get(_getPrototypeOf(BXStructuredListHeaderCell.prototype), "connectedCallback", this).call(this);
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

export default BXStructuredListHeaderCell;
//# sourceMappingURL=structured-list-header-cell.js.map
