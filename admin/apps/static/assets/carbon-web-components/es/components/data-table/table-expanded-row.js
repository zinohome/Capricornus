import _decorate from "@babel/runtime/helpers/esm/decorate";

let _ = t => t,
    _t;

/**
 * @license
 *
 * Copyright IBM Corp. 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { html, property, customElement, LitElement } from 'lit-element';
import settings from 'carbon-components/es/globals/js/settings';
import styles from "././data-table.css.js";
const {
  prefix
} = settings;
/**
 * Table row of collapsible details.
 * @element bx-table-expanded-row
 */

let BXTableExpandedRow = _decorate([customElement(`${prefix}-table-expanded-row`)], function (_initialize, _LitElement) {
  class BXTableExpandedRow extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXTableExpandedRow,
    d: [{
      kind: "field",
      decorators: [property({
        type: Number,
        attribute: 'colspan'
      })],
      key: "colSpan",

      value() {
        return 1;
      }

    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "expanded",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "highlighted",

      value() {
        return false;
      }

    }, {
      kind: "method",
      key: "render",
      value:
      /**
       * The colspan.
       */

      /**
       * `true` if the table row should be expanded.
       */

      /**
       * `true` if the table row should be highlighted.
       */
      function render() {
        const {
          colSpan
        } = this;
        return html(_t || (_t = _` <td colspan="${0}"> <div class="${0}--child-row-inner-container"> <slot></slot> </div> </td> `), colSpan, prefix);
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

export default BXTableExpandedRow;
//# sourceMappingURL=table-expanded-row.js.map
