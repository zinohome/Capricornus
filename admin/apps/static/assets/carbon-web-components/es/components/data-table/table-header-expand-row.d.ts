/**
 * @license
 *
 * Copyright IBM Corp. 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import BXTableExpandRow from './table-expand-row';
/**
 * Data table header row.
 * @element bx-table-header-expand-row
 */
declare class BXTableHeaderExpandRow extends BXTableExpandRow {
    /**
     * The name of the custom event fired before this row is selected/unselected upon a user gesture.
     * Cancellation of this event stops the user-initiated change in selection.
     */
    static get eventBeforeChangeSelection(): string;
    /**
     * The name of the custom event fired before the expanded state this row is being toggled upon a user gesture.
     * Cancellation of this event stops the user-initiated action of toggling the expanded state.
     */
    static get eventBeforeExpandoToggle(): string;
    /**
     * The name of the custom event fired after the expanded state this row is toggled upon a user gesture.
     */
    static get eventExpandoToggle(): string;
}
export default BXTableHeaderExpandRow;

//# sourceMappingURL=table-header-expand-row.d.ts.map
