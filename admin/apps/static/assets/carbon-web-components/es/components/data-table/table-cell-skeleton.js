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
import { html, customElement } from 'lit-element';
import settings from 'carbon-components/es/globals/js/settings';
import BXTableCell from './table-cell';
const {
  prefix
} = settings;
/**
 * Data table cell with skeleton content.
 * @element bx-table-cell-skeleton
 */

let BXTableCellSkeleton = _decorate([customElement(`${prefix}-table-cell-skeleton`)], function (_initialize, _BXTableCell) {
  class BXTableCellSkeleton extends _BXTableCell {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXTableCellSkeleton,
    d: [{
      kind: "method",
      key: "render",
      value: function render() {
        return html(_t || (_t = _` <span></span> `));
      }
    }]
  };
}, BXTableCell);

export default BXTableCellSkeleton;
//# sourceMappingURL=table-cell-skeleton.js.map
