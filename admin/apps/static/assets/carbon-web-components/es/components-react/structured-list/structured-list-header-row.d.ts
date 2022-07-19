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
   * The `name` attribute for the `<input>` for selection.
   * If present, this structured list header row will show its selectable version of the UI.
   */
  selectionName?: string;
  [prop: string]: unknown;
}
/**
 * Structured list header row.
 * @element bx-structured-list-header-row
 */

/**
 * Structured list header row.
 * @element bx-structured-list-header-row
 */
declare class BXStructuredListHeaderRow extends Component<ComponentProps> {}

export default BXStructuredListHeaderRow;
