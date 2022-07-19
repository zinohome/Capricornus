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
   * `true` if this structured list row should be selectable and selected.
   */
  selected?: boolean;
  /**
   * The `name` attribute for the `<input>` for selection.
   * If present, this structured list row will be a selectable one.
   */

  /**
   * The `name` attribute for the `<input>` for selection.
   * If present, this structured list row will be a selectable one.
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
   * The content to put into the `<title>` attribute of the selection icon.
   */

  /**
   * The content to put into the `<title>` attribute of the selection icon.
   */
  selectionIconTitle?: string;
  [prop: string]: unknown;
}
/**
 * Structured list row.
 * @element bx-structured-list-row
 */

/**
 * Structured list row.
 * @element bx-structured-list-row
 */
declare class BXStructuredListRow extends Component<ComponentProps> {}

export default BXStructuredListRow;
