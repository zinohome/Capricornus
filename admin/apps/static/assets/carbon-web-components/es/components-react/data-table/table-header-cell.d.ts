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
   * `true` if this table header cell is of a primary sorting column.
   */
  sortActive?: boolean;
  /**
   * The table sort cycle in use.
   */

  /**
   * The table sort cycle in use.
   */
  sortCycle?: string;
  /**
   * The table sort direction.
   * If present, this table header cell will have a sorting UI. Choose between `ascending` or `descending`.
   */

  /**
   * The table sort direction.
   * If present, this table header cell will have a sorting UI. Choose between `ascending` or `descending`.
   */
  sortDirection?: string;
  /**
   * The event handler for the custom event fired before a new sort direction is set upon a user gesture.
   * Cancellation of this event stops the user-initiated change in sort direction.
   */

  /**
   * The event handler for the custom event fired before a new sort direction is set upon a user gesture.
   * Cancellation of this event stops the user-initiated change in sort direction.
   */
  onBeforeSort?: (event: CustomEvent) => void;
  [prop: string]: unknown;
}
/**
 * Data table header cell.
 * @element bx-table-header-cell
 * @fires bx-table-header-cell-sort
 *   The custom event fired before a new sort direction is set upon a user gesture.
 *   Cancellation of this event stops the user-initiated change in sort direction.
 */

/**
 * Data table header cell.
 * @element bx-table-header-cell
 * @fires bx-table-header-cell-sort
 *   The custom event fired before a new sort direction is set upon a user gesture.
 *   Cancellation of this event stops the user-initiated change in sort direction.
 */
declare class BXTableHeaderCell extends Component<ComponentProps> {}

export default BXTableHeaderCell;
