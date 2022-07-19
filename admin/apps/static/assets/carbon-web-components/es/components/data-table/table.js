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
import { html, property, customElement, LitElement } from 'lit-element';
import { forEach } from '../../globals/internal/collection-helpers';
import { TABLE_COLOR_SCHEME, TABLE_SIZE } from './defs';
import styles from "././data-table.css.js";
export { TABLE_COLOR_SCHEME, TABLE_SIZE };
const {
  prefix
} = settings;
/**
 * Data table.
 * @element bx-table
 */

let BXTable = _decorate([customElement(`${prefix}-table`)], function (_initialize, _LitElement) {
  class BXTable extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXTable,
    d: [{
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "size",

      value() {
        return TABLE_SIZE.REGULAR;
      }

    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "sort",

      value() {
        return false;
      }

    }, {
      kind: "method",
      key: "connectedCallback",
      value:
      /**
       * The table size.
       */

      /**
       * `true` if this table should support sorting.
       */
      function connectedCallback() {
        if (!this.hasAttribute('role')) {
          this.setAttribute('role', 'table');
        }

        _get(_getPrototypeOf(BXTable.prototype), "connectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProperties) {
        if (changedProperties.has('size')) {
          // Propagate `size` attribute to descendants until `:host-context()` gets supported in all major browsers
          forEach(this.querySelectorAll(this.constructor.selectorRowsWithHeader), elem => {
            elem.setAttribute('size', this.size);
          });
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return html(_t || (_t = _`<slot></slot>`));
      }
      /**
       * The CSS selector to find the rows, including header rows.
       */

    }, {
      kind: "get",
      static: true,
      key: "selectorRowsWithHeader",
      value: function selectorRowsWithHeader() {
        return `${prefix}-table-header-row,${prefix}-table-row`;
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

export default BXTable;
//# sourceMappingURL=table.js.map
