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
   * `true` if this list item is a child of a nested list.
   * `<bx-ordered-list>` or `<bx-unordered-list>` automatically sets this property.
   */
  nested?: boolean;
  [prop: string]: unknown;
}
/**
 * List item.
 * @element bx-list-item
 * @slot nested - The nested child list.
 */

/**
 * List item.
 * @element bx-list-item
 * @slot nested - The nested child list.
 */
declare class BXListItem extends Component<ComponentProps> {}

export default BXListItem;
