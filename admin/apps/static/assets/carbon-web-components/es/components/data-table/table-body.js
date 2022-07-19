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
import { html, property, query, customElement, LitElement } from 'lit-element';
import { TABLE_COLOR_SCHEME } from './defs';
import styles from "././data-table.css.js";
const {
  prefix
} = settings;
/**
 * Data table body.
 * @element bx-table-body
 */

let BXTableBody = _decorate([customElement(`${prefix}-table-body`)], function (_initialize, _LitElement) {
  class BXTableBody extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXTableBody,
    d: [{
      kind: "field",
      decorators: [query('slot')],
      key: "_slotNode",
      value: void 0
    }, {
      kind: "method",
      key: "_updateZebra",
      value:
      /**
       * The `<slot>` element in the shadow DOM.
       */

      /**
       * Updates `even`/`odd` properties of the child `<bx-table-row>`s.
       */
      function _updateZebra() {
        const {
          colorScheme,
          _slotNode: slotNode
        } = this;
        slotNode.assignedNodes().forEach(node => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const odd = node.matches('*:nth-of-type(odd)');
            node.even = colorScheme === TABLE_COLOR_SCHEME.ZEBRA && !odd;
            node.odd = colorScheme === TABLE_COLOR_SCHEME.ZEBRA && odd;
          }
        });
      }
      /**
       * Handles `slotchange` event in the `<slot>` element in the shadow DOM.
       */

    }, {
      kind: "field",
      key: "_handleSlotChange",

      value() {
        return () => {
          this._updateZebra();
        };
      }

    }, {
      kind: "field",
      decorators: [property({
        reflect: true,
        attribute: 'color-scheme'
      })],
      key: "colorScheme",

      value() {
        return TABLE_COLOR_SCHEME.REGULAR;
      }

    }, {
      kind: "method",
      key: "connectedCallback",
      value:
      /**
       * The color scheme.
       */
      function connectedCallback() {
        if (!this.hasAttribute('role')) {
          this.setAttribute('role', 'rowgroup');
        }

        _get(_getPrototypeOf(BXTableBody.prototype), "connectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProperties) {
        if (changedProperties.has('colorScheme')) {
          this._updateZebra();
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          _handleSlotChange: handleSlotChange
        } = this;
        return html(_t || (_t = _` <slot @slotchange="${0}"></slot> `), handleSlotChange);
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

export default BXTableBody;
//# sourceMappingURL=table-body.js.map
