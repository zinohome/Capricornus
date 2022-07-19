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
   * `true` if this batch actions bar should be active.
   */
  active?: boolean;
  /**
   * The formatter for selected items. Should be changed upon the locale the UI is rendered with.
   */

  /**
   * The formatter for selected items. Should be changed upon the locale the UI is rendered with.
   */
  formatSelectedItemsCount?: string;
  /**
   * Numeric representation of the total number of items selected in a table.
   * This number is used to derive the selection message.
   */

  /**
   * Numeric representation of the total number of items selected in a table.
   * This number is used to derive the selection message.
   */
  selectedRowsCount?: number;
  /**
   * The event handler for the custom event fired after the Cancel button is clicked.
   */

  /**
   * The event handler for the custom event fired after the Cancel button is clicked.
   */
  onClickCancel?: (event: CustomEvent) => void;
  [prop: string]: unknown;
}
/**
 * Table batch actions.
 * @element bx-table-batch-actions
 * @fires bx-table-batch-actions-cancel-clicked - The custom event fired after the Cancel button is clicked.
 */

/**
 * Table batch actions.
 * @element bx-table-batch-actions
 * @fires bx-table-batch-actions-cancel-clicked - The custom event fired after the Cancel button is clicked.
 */
declare class BXTableBatchActions extends Component<ComponentProps> {}

export default BXTableBatchActions;
