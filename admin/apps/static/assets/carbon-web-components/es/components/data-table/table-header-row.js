import _decorate from "@babel/runtime/helpers/esm/decorate";

/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import settings from 'carbon-components/es/globals/js/settings';
import { customElement } from 'lit-element';
import BXTableRow from './table-row';
const {
  prefix
} = settings;
/**
 * Data table header row.
 * @element bx-table-header-row
 */

let BXTableHeaderRow = _decorate([customElement(`${prefix}-table-header-row`)], function (_initialize, _BXTableRow) {
  class BXTableHeaderRow extends _BXTableRow {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXTableHeaderRow,
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
    }]
  };
}, BXTableRow);

export default BXTableHeaderRow;
//# sourceMappingURL=table-header-row.js.map
