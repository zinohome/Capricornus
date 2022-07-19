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
import { html, property, customElement, LitElement } from 'lit-element';
import settings from 'carbon-components/es/globals/js/settings';
import styles from "././data-table.css.js";
const {
  prefix
} = settings;
/**
 * Table batch actions.
 * @element bx-table-batch-actions
 * @fires bx-table-batch-actions-cancel-clicked - The custom event fired after the Cancel button is clicked.
 */

let BXTableBatchActions = _decorate([customElement(`${prefix}-table-batch-actions`)], function (_initialize, _LitElement) {
  class BXTableBatchActions extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXTableBatchActions,
    d: [{
      kind: "method",
      key: "_handleCancel",
      value:
      /**
       * Handles `click` event on the Cancel button.
       */
      function _handleCancel() {
        const {
          eventClickCancel
        } = this.constructor;
        this.dispatchEvent(new CustomEvent(eventClickCancel, {
          bubbles: true,
          composed: true
        }));
      }
      /**
       * `true` if this batch actions bar should be active.
       */

    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "active",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [property({
        attribute: false
      })],
      key: "formatSelectedItemsCount",

      value() {
        return ({
          count
        }) => `${count} item${count <= 1 ? '' : 's'} selected`;
      }

    }, {
      kind: "field",
      decorators: [property({
        type: Number,
        attribute: 'selected-rows-count'
      })],
      key: "selectedRowsCount",

      value() {
        return 0;
      }

    }, {
      kind: "method",
      key: "updated",
      value:
      /**
       * The formatter for selected items. Should be changed upon the locale the UI is rendered with.
       */

      /**
       * Numeric representation of the total number of items selected in a table.
       * This number is used to derive the selection message.
       */
      function updated(changedProperties) {
        if (changedProperties.has('active')) {
          this.setAttribute('tabindex', `${this.active ? '' : '-1'}`);
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          formatSelectedItemsCount,
          selectedRowsCount,
          _handleCancel: handleCancel
        } = this;
        return html(_t || (_t = _` <div class="${0}--batch-summary"> <p class="${0}--batch-summary__para">${0}</p> </div> <div class="${0}--action-list"> <slot></slot> <button class="${0}--btn ${0}--btn--primary ${0}--batch-summary__cancel" @click="${0}"> <slot name="cancel-button-content">Cancel</slot> </button> </div> `), prefix, prefix, formatSelectedItemsCount({
          count: selectedRowsCount
        }), prefix, prefix, prefix, prefix, handleCancel);
      }
      /**
       * The name of the custom event fired after the Cancel button is clicked.
       */

    }, {
      kind: "get",
      static: true,
      key: "eventClickCancel",
      value: function eventClickCancel() {
        return `${prefix}-table-batch-actions-cancel-clicked`;
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

export default BXTableBatchActions;
//# sourceMappingURL=table-batch-actions.js.map
