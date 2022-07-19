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
import Arrows16 from "../../icons/arrows/16";
import ArrowDown16 from "../../icons/arrow--down/16";
import FocusMixin from '../../globals/mixins/focus';
import { TABLE_SORT_CYCLE, TABLE_SORT_CYCLES, TABLE_SORT_DIRECTION } from './defs';
import styles from "././data-table.css.js";
export { TABLE_SORT_CYCLE, TABLE_SORT_CYCLES, TABLE_SORT_DIRECTION };
const {
  prefix
} = settings;
/**
 * Data table header cell.
 * @element bx-table-header-cell
 * @fires bx-table-header-cell-sort
 *   The custom event fired before a new sort direction is set upon a user gesture.
 *   Cancellation of this event stops the user-initiated change in sort direction.
 */

let BXTableHeaderCell = _decorate([customElement(`${prefix}-table-header-cell`)], function (_initialize, _FocusMixin) {
  class BXTableHeaderCell extends _FocusMixin {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXTableHeaderCell,
    d: [{
      kind: "method",
      key: "_handleClickSortButton",
      value:
      /**
       * Handles `click` event on the sort button.
       * @param event The event.
       */
      function _handleClickSortButton() {
        const nextSortDirection = this._getNextSort();

        const init = {
          bubbles: true,
          cancelable: true,
          composed: true,
          detail: {
            oldSortDirection: this.sortDirection,
            sortDirection: nextSortDirection
          }
        };
        const constructor = this.constructor;

        if (this.dispatchEvent(new CustomEvent(constructor.eventBeforeSort, init))) {
          this.sortActive = true;
          this.sortDirection = nextSortDirection;
        }
      }
      /**
       * Handles `slotchange` event.
       * @param event The event.
       */

    }, {
      kind: "method",
      key: "_handleSlotChange",
      value: function _handleSlotChange() {
        this.requestUpdate();
      }
      /**
       * @returns The next sort direction.
       */

    }, {
      kind: "method",
      key: "_getNextSort",
      value: function _getNextSort() {
        const {
          sortCycle = TABLE_SORT_CYCLE.TRI_STATES_FROM_ASCENDING,
          sortDirection
        } = this;

        if (!sortDirection) {
          throw new TypeError('Table sort direction is not defined. ' + 'Likely that `_getNextSort()` is called with non-sorted table column, which should not happen in regular condition.');
        }

        const directions = this.constructor.TABLE_SORT_CYCLES[sortCycle];
        const index = directions.indexOf(sortDirection);

        if (index < 0) {
          if (sortDirection === TABLE_SORT_DIRECTION.NONE) {
            // If the current sort direction is `none` in bi-state sort cycle, returns the first one in the cycle
            return directions[0];
          }

          throw new RangeError(`The given sort state (${sortDirection}) is not found in the given table sort cycle: ${sortCycle}`);
        }

        return directions[(index + 1) % directions.length];
      }
      /**
       * `true` if this table header cell is of a primary sorting column.
       */

    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true,
        attribute: 'sort-active'
      })],
      key: "sortActive",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [property({
        reflect: true,
        attribute: 'sort-cycle'
      })],
      key: "sortCycle",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        reflect: true,
        attribute: 'sort-direction'
      })],
      key: "sortDirection",
      value: void 0
    }, {
      kind: "method",
      key: "createRenderRoot",
      value:
      /**
       * The table sort cycle in use.
       */

      /**
       * The table sort direction.
       * If present, this table header cell will have a sorting UI. Choose between `ascending` or `descending`.
       */
      function createRenderRoot() {
        var _$exec;

        return this.attachShadow({
          mode: 'open',
          delegatesFocus: Number(((_$exec = /Safari\/(\d+)/.exec(navigator.userAgent)) !== null && _$exec !== void 0 ? _$exec : ['', 0])[1]) <= 537
        });
      }
    }, {
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        if (!this.hasAttribute('role')) {
          this.setAttribute('role', 'columnheader');
        }

        _get(_getPrototypeOf(BXTableHeaderCell.prototype), "connectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          sortDirection
        } = this;

        if (sortDirection) {
          const sortIcon = sortDirection === TABLE_SORT_DIRECTION.NONE ? Arrows16({
            part: 'sort-icon',
            class: `${prefix}--table-sort__icon-unsorted`
          }) : ArrowDown16({
            part: 'sort-icon',
            class: `${prefix}--table-sort__icon`
          });
          return html(_t || (_t = _` <button part="sort-button" class="${0}--table-sort" title="${0}" @click="${0}"> <span part="label-text" class="${0}--table-header-label"><slot @slotchange="${0}"></slot></span> ${0} </button> `), prefix, this.textContent, this._handleClickSortButton, prefix, this._handleSlotChange, sortIcon);
        }

        return html(_t2 || (_t2 = _`<slot></slot>`));
      }
      /**
       * The name of the custom event fired before a new sort direction is set upon a user gesture.
       * Cancellation of this event stops the user-initiated change in sort direction.
       */

    }, {
      kind: "get",
      static: true,
      key: "eventBeforeSort",
      value: function eventBeforeSort() {
        return `${prefix}-table-header-cell-sort`;
      }
    }, {
      kind: "field",
      static: true,
      key: "styles",

      value() {
        return styles;
      }

    }, {
      kind: "field",
      static: true,
      key: "TABLE_SORT_CYCLES",

      value() {
        return TABLE_SORT_CYCLES;
      }

    }]
  };
}, FocusMixin(LitElement));

export default BXTableHeaderCell;
//# sourceMappingURL=table-header-cell.js.map
