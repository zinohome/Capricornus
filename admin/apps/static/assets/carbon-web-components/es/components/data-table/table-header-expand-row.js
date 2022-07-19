import _decorate from "@babel/runtime/helpers/esm/decorate";

/**
 * @license
 *
 * Copyright IBM Corp. 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import settings from 'carbon-components/es/globals/js/settings';
import { customElement } from 'lit-element';
import BXTableExpandRow from './table-expand-row';
const {
  prefix
} = settings;
/**
 * Data table header row.
 * @element bx-table-header-expand-row
 */

let BXTableHeaderExpandRow = _decorate([customElement(`${prefix}-table-header-expand-row`)], function (_initialize, _BXTableExpandRow) {
  class BXTableHeaderExpandRow extends _BXTableExpandRow {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXTableHeaderExpandRow,
    d: [{
      kind: "get",
      static: true,
      key: "eventBeforeChangeSelection",
      value:
      /**
       * The name of the custom event fired before this row is selected/unselected upon a user gesture.
       * Cancellation of this event stops the user-initiated change in selection.
       */
      function eventBeforeChangeSelection() {
        return `${prefix}-table-change-selection-all`;
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
        return `${prefix}-table-row-expando-beingtoggled-all`;
      }
      /**
       * The name of the custom event fired after the expanded state this row is toggled upon a user gesture.
       */

    }, {
      kind: "get",
      static: true,
      key: "eventExpandoToggle",
      value: function eventExpandoToggle() {
        return `${prefix}-table-row-expando-toggled-all`;
      }
    }]
  };
}, BXTableExpandRow);

export default BXTableHeaderExpandRow;
//# sourceMappingURL=table-header-expand-row.js.map
