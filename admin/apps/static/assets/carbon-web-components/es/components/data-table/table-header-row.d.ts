/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import BXTableRow from './table-row';
/**
 * Data table header row.
 * @element bx-table-header-row
 */
declare class BXTableHeaderRow extends BXTableRow {
    /**
     * The name of the custom event fired before this row is selected/unselected upon a user gesture.
     * Cancellation of this event stops the user-initiated change in selection.
     */
    static get eventBeforeChangeSelection(): string;
}
export default BXTableHeaderRow;

//# sourceMappingURL=table-header-row.d.ts.map
