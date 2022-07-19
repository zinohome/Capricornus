import _decorate from "@babel/runtime/helpers/esm/decorate";
import _get from "@babel/runtime/helpers/esm/get";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

let _ = t => t,
    _t,
    _t2;

/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import settings from 'carbon-components/es/globals/js/settings';
import { html, property, customElement, LitElement } from 'lit-element';
import styles from "././structured-list.css.js";
const {
  prefix
} = settings;
/**
 * Structured list header row.
 * @element bx-structured-list-header-row
 */

let BXStructuredListHeaderRow = _decorate([customElement(`${prefix}-structured-list-header-row`)], function (_initialize, _LitElement) {
  class BXStructuredListHeaderRow extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXStructuredListHeaderRow,
    d: [{
      kind: "field",
      decorators: [property({
        attribute: 'selection-name'
      })],
      key: "selectionName",

      value() {
        return '';
      }

    }, {
      kind: "method",
      key: "connectedCallback",
      value:
      /**
       * The `name` attribute for the `<input>` for selection.
       * If present, this structured list header row will show its selectable version of the UI.
       */
      function connectedCallback() {
        if (!this.hasAttribute('role')) {
          this.setAttribute('role', 'row');
        }

        _get(_getPrototypeOf(BXStructuredListHeaderRow.prototype), "connectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        // We could look up in DOM for `bx-structured-list[hasSelection]`,
        // but uses `hasSelection` prop to utilize attribute change callback
        if (this.selectionName) {
          return html(_t || (_t = _` <slot></slot> <div class="${0}--structured-list-th"></div> `), prefix);
        }

        return html(_t2 || (_t2 = _`<slot></slot>`));
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

export default BXStructuredListHeaderRow;
//# sourceMappingURL=structured-list-header-row.js.map
