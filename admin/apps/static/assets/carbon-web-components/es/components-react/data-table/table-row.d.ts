/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component } from 'react';
export interface ComponentProps {
  /**
   * `true` if this table row should be disabled.
   */
  disabled?: boolean;
  /**
   * `true` if this table row is placed at an even position in parent `<bx-table-body>`.
   * `<bx-table-body>` sets this property, _only_ in zebra stripe mode.
   * @private
   */

  /**
   * `true` if this table row is placed at an even position in parent `<bx-table-body>`.
   * `<bx-table-body>` sets this property, _only_ in zebra stripe mode.
   * @private
   */
  even?: boolean;
  /**
   * `true` if this table row is placed at an odd position in parent `<bx-table-body>`.
   * `<bx-table-body>` sets this property, _only_ in zebra stripe mode.
   * @private
   */

  /**
   * `true` if this table row is placed at an odd position in parent `<bx-table-body>`.
   * `<bx-table-body>` sets this property, _only_ in zebra stripe mode.
   * @private
   */
  odd?: boolean;
  /**
   * `true` if this table row should be selected.
   */

  /**
   * `true` if this table row should be selected.
   */
  selected?: boolean;
  /**
   * The `aria-label` attribute for the `<label>` for selection.
   */

  /**
   * The `aria-label` attribute for the `<label>` for selection.
   */
  selectionLabel?: string;
  /**
   * The `name` attribute for the `<input>` for selection.
   * If present, this table row will be a selectable one.
   */

  /**
   * The `name` attribute for the `<input>` for selection.
   * If present, this table row will be a selectable one.
   */
  selectionName?: string;
  /**
   * The `value` attribute for the `<input>` for selection.
   */

  /**
   * The `value` attribute for the `<input>` for selection.
   */
  selectionValue?: string;
  /**
   * The event handler for the custom event fired before this row is selected/unselected upon a user gesture.
   * Cancellation of this event stops the user-initiated change in selection.
   */

  /**
   * The event handler for the custom event fired before this row is selected/unselected upon a user gesture.
   * Cancellation of this event stops the user-initiated change in selection.
   */
  onBeforeChangeSelection?: (event: CustomEvent) => void;
  [prop: string]: unknown;
}
/**
 * Data table row.
 * @element bx-table-row
 * @csspart selection-container The container of the checkbox.
 * @csspart selection The checkbox.
 * @fires bx-table-row-change-selection
 *   The custom event fired before this row is selected/unselected upon a user gesture.
 *   Cancellation of this event stops the user-initiated change in selection.
 */

/**
 * Data table row.
 * @element bx-table-row
 * @csspart selection-container The container of the checkbox.
 * @csspart selection The checkbox.
 * @fires bx-table-row-change-selection
 *   The custom event fired before this row is selected/unselected upon a user gesture.
 *   Cancellation of this event stops the user-initiated change in selection.
 */
declare class BXTableRow extends Component<ComponentProps> {}

export default BXTableRow;
