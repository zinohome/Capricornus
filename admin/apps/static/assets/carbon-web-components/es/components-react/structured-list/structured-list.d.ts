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
   * If present, this structured list will be a selectable one.
   */
  selectionName?: string;
  [prop: string]: unknown;
}
/**
 * Structured list wrapper.
 * @element bx-structured-list
 */

/**
 * Structured list wrapper.
 * @element bx-structured-list
 */
declare class BXStructuredList extends Component<ComponentProps> {}

export default BXStructuredList;
