import _decorate from "@babel/runtime/helpers/esm/decorate";
import _get from "@babel/runtime/helpers/esm/get";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

let _ = t => t,
    _t,
    _t2,
    _t3;

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
import FocusMixin from '../../globals/mixins/focus';
import styles from "././data-table.css.js";
const {
  prefix
} = settings;
/**
 * Data table row.
 * @element bx-table-row
 * @csspart selection-container The container of the checkbox.
 * @csspart selection The checkbox.
 * @fires bx-table-row-change-selection
 *   The custom event fired before this row is selected/unselected upon a user gesture.
 *   Cancellation of this event stops the user-initiated change in selection.
 */

let BXTableRow = _decorate([customElement(`${prefix}-table-row`)], function (_initialize, _FocusMixin) {
  class BXTableRow extends _FocusMixin {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXTableRow,
    d: [{
      kind: "method",
      key: "_handleClickSelectionCheckbox",
      value:
      /**
       * Handles `click` event on the check box.
       * @param event The event.
       */
      function _handleClickSelectionCheckbox(event) {
        const selected = event.target.checked;
        const init = {
          bubbles: true,
          cancelable: true,
          composed: true,
          detail: {
            selected
          }
        };
        const constructor = this.constructor;

        if (this.dispatchEvent(new CustomEvent(constructor.eventBeforeChangeSelection, init))) {
          this.selected = selected;
        }
      }
      /**
       * @returns The first set of table cells.
       */

    }, {
      kind: "method",
      key: "_renderFirstCells",
      value: function _renderFirstCells() {
        const {
          disabled,
          selected,
          selectionLabel,
          selectionName,
          selectionValue
        } = this; // Using `@click` instead of `@change` to support `.preventDefault()`

        return !selectionName ? undefined : html(_t || (_t = _` <div part="selection-container" class="${0}--table-column-checkbox"> ${0} </div> `), prefix, html(_t2 || (_t2 = _` <input id="selection" part="selection" class="${0}--checkbox" type="checkbox" value="${0}" name="${0}" ?disabled="${0}" .checked="${0}" @click="${0}"> <label for="selection" class="${0}--checkbox-label" aria-label="${0}"></label> `), prefix, selectionValue, selectionName, disabled, selected, this._handleClickSelectionCheckbox, prefix, selectionLabel));
      }
      /**
       * `true` if this table row should be disabled.
       */

    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "disabled",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "even",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "odd",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "selected",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [property({
        attribute: 'selection-label'
      })],
      key: "selectionLabel",

      value() {
        return '';
      }

    }, {
      kind: "field",
      decorators: [property({
        attribute: 'selection-name'
      })],
      key: "selectionName",

      value() {
        return '';
      }

    }, {
      kind: "field",
      decorators: [property({
        attribute: 'selection-value'
      })],
      key: "selectionValue",

      value() {
        return '';
      }

    }, {
      kind: "method",
      key: "connectedCallback",
      value:
      /**
       * `true` if this table row is placed at an even position in parent `<bx-table-body>`.
       * `<bx-table-body>` sets this property, _only_ in zebra stripe mode.
       * @private
       */

      /**
       * `true` if this table row is placed at an odd position in parent `<bx-table-body>`.
       * `<bx-table-body>` sets this property, _only_ in zebra stripe mode.
       * @private
       */

      /**
       * `true` if this table row should be selected.
       */

      /**
       * The `aria-label` attribute for the `<label>` for selection.
       */

      /**
       * The `name` attribute for the `<input>` for selection.
       * If present, this table row will be a selectable one.
       */

      /**
       * The `value` attribute for the `<input>` for selection.
       */
      function connectedCallback() {
        if (!this.hasAttribute('role')) {
          this.setAttribute('role', 'row');
        }

        _get(_getPrototypeOf(BXTableRow.prototype), "connectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return html(_t3 || (_t3 = _` ${0}<slot></slot> `), this._renderFirstCells());
      }
      /**
       * The name of the custom event fired before this row is selected/unselected upon a user gesture.
       * Cancellation of this event stops the user-initiated change in selection.
       */

    }, {
      kind: "get",
      static: true,
      key: "eventBeforeChangeSelection",
      value: function eventBeforeChangeSelection() {
        return `${prefix}-table-row-change-selection`;
      }
      /**
       * The CSS selector to find the table.
       */

    }, {
      kind: "get",
      static: true,
      key: "selectorTable",
      value: function selectorTable() {
        return `${prefix}-table`;
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
}, FocusMixin(LitElement));

export default BXTableRow;
//# sourceMappingURL=table-row.js.map
