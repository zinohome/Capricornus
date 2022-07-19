import _decorate from "@babel/runtime/helpers/esm/decorate";
import _get from "@babel/runtime/helpers/esm/get";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

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
import { html, property, customElement } from 'lit-element';
import ChevronRight16 from "../../icons/chevron--right/16";
import settings from 'carbon-components/es/globals/js/settings';
import HostListenerMixin from '../../globals/mixins/host-listener';
import HostListener from '../../globals/decorators/host-listener';
import BXTableRow from './table-row';
import styles from "././data-table.css.js";
const {
  prefix
} = settings;
/**
 * The expando row in table row.
 * @element bx-table-expand-row
 */

let BXTableExpandRow = _decorate([customElement(`${prefix}-table-expand-row`)], function (_initialize, _HostListenerMixin) {
  class BXTableExpandRow extends _HostListenerMixin {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXTableExpandRow,
    d: [{
      kind: "method",
      key: "_handleClickExpando",
      value:
      /**
       * Handles `click` event on the expando button.
       */
      function _handleClickExpando() {
        this._handleUserInitiatedToggleExpando();
      }
      /**
       * Handles `mouseover`/`mouseout` event handler on this element.
       * @param event The event.
       */

    }, {
      kind: "method",
      decorators: [HostListener('mouseover'), HostListener('mouseout')],
      key: "_handleMouseOverOut",
      value: function _handleMouseOverOut(event) {
        const {
          selectorExpandedRow
        } = this.constructor;
        const {
          nextElementSibling
        } = this;

        if (nextElementSibling !== null && nextElementSibling !== void 0 && nextElementSibling.matches(selectorExpandedRow)) {
          nextElementSibling.highlighted = event.type === 'mouseover';
        }
      }
      /**
       * Handles user-initiated toggle request of the expando button in this table row.
       * @param expanded The new expanded state.
       */

    }, {
      kind: "method",
      key: "_handleUserInitiatedToggleExpando",
      value: function _handleUserInitiatedToggleExpando(expanded = !this.expanded) {
        const init = {
          bubbles: true,
          cancelable: true,
          composed: true,
          detail: {
            expanded
          }
        };

        if (this.dispatchEvent(new CustomEvent(this.constructor.eventBeforeExpandoToggle, init))) {
          this.expanded = expanded;
          this.dispatchEvent(new CustomEvent(this.constructor.eventExpandoToggle, init));
        }
      }
    }, {
      kind: "method",
      key: "_renderFirstCells",
      value: function _renderFirstCells() {
        const {
          _handleClickExpando: handleClickExpando
        } = this;
        return html(_t || (_t = _` <div class="${0}--table-expand"> <button class="${0}--table-expand__button" @click="${0}"> ${0} </button> </div> ${0} `), prefix, prefix, handleClickExpando, ChevronRight16({
          class: `${prefix}--table-expand__svg`
        }), _get(_getPrototypeOf(BXTableExpandRow.prototype), "_renderFirstCells", this).call(this));
      }
      /**
       * `true` if the table row should be expanded.
       */

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
      kind: "method",
      key: "updated",
      value: function updated(changedProperties) {
        if (changedProperties.has('expanded')) {
          const {
            selectorExpandedRow
          } = this.constructor;
          const {
            expanded,
            nextElementSibling
          } = this;

          if (nextElementSibling !== null && nextElementSibling !== void 0 && nextElementSibling.matches(selectorExpandedRow)) {
            nextElementSibling.expanded = expanded;
          }
        }
      }
      /**
       * A selector that will return the corresponding expanded row.
       */

    }, {
      kind: "get",
      static: true,
      key: "selectorExpandedRow",
      value: function selectorExpandedRow() {
        return `${prefix}-table-expanded-row`;
      }
      /**
       * The name of the custom event fired before the expanded state this row is being toggled upon a user gesture.
       * Cancellation of this event stops the user-initiated action of toggling the expanded state.
       */

    }, {
      kind: "get",
      static: true,
      key: "eventBeforeExpandoToggle",
      value: function eventBeforeExpandoToggle() {
        return `${prefix}-table-row-expando-beingtoggled`;
      }
      /**
       * The name of the custom event fired after the expanded state this row is toggled upon a user gesture.
       */

    }, {
      kind: "get",
      static: true,
      key: "eventExpandoToggle",
      value: function eventExpandoToggle() {
        return `${prefix}-table-row-expando-toggled`;
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
}, HostListenerMixin(BXTableRow));

export default BXTableExpandRow;
//# sourceMappingURL=table-expand-row.js.map
