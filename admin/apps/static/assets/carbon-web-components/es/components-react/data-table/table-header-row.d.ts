/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component } from 'react';
import { ComponentProps as ParentComponentProps } from './table-row';
export interface ComponentProps extends ParentComponentProps {
  /**
   * The event handler for the custom event fired before this row is selected/unselected upon a user gesture.
   * Cancellation of this event stops the user-initiated change in selection.
   */
  onBeforeChangeSelection?: (event: CustomEvent) => void;
}
/**
 * Data table header row.
 * @element bx-table-header-row
 */

/**
 * Data table header row.
 * @element bx-table-header-row
 */
declare class BXTableHeaderRow extends Component<ComponentProps> {}

export default BXTableHeaderRow;
