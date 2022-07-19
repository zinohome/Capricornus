import _decorate from "@babel/runtime/helpers/esm/decorate";

/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { customElement } from 'lit-element';
import settings from 'carbon-components/es/globals/js/settings';
import BXTableCell from './table-cell';
const {
  prefix
} = settings;
/**
 * Data table header cell with skeleton content.
 * @element bx-table-header-cell-skeleton
 */

let BXTableHeaderCellSkeleton = _decorate([customElement(`${prefix}-table-header-cell-skeleton`)], function (_initialize, _BXTableCell) {
  class BXTableHeaderCellSkeleton extends _BXTableCell {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXTableHeaderCellSkeleton,
    d: []
  };
}, BXTableCell);

export default BXTableHeaderCellSkeleton;
//# sourceMappingURL=table-header-cell-skeleton.js.map
