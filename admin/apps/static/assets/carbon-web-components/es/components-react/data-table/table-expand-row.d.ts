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
   * `true` if the table row should be expanded.
   */
  expanded?: boolean;
  /**
   * The event handler for the custom event fired before the expanded state this row is being toggled upon a user gesture.
   * Cancellation of this event stops the user-initiated action of toggling the expanded state.
   */

  /**
   * The event handler for the custom event fired before the expanded state this row is being toggled upon a user gesture.
   * Cancellation of this event stops the user-initiated action of toggling the expanded state.
   */
  onBeforeExpandoToggle?: (event: CustomEvent) => void;
  /**
   * The event handler for the custom event fired after the expanded state this row is toggled upon a user gesture.
   */

  /**
   * The event handler for the custom event fired after the expanded state this row is toggled upon a user gesture.
   */
  onExpandoToggle?: (event: CustomEvent) => void;
}
/**
 * The expando row in table row.
 * @element bx-table-expand-row
 */

/**
 * The expando row in table row.
 * @element bx-table-expand-row
 */
declare class BXTableExpandRow extends Component<ComponentProps> {}

export default BXTableExpandRow;
