/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component } from 'react';
import { ComponentProps as ParentComponentProps } from '../dropdown/dropdown-item';
export interface ComponentProps extends ParentComponentProps {
  /**
   * The property to hide when item is filtered from input
   */
  filtered?: boolean;
  /**
   * The `name` attribute for the `<input>` for selection.
   */

  /**
   * The `name` attribute for the `<input>` for selection.
   */
  selectionName?: string;
}
/**
 * Multi select item.
 * @element bx-multi-select-item
 */

/**
 * Multi select item.
 * @element bx-multi-select-item
 */
declare class BXMultiSelectItem extends Component<ComponentProps> {}

export default BXMultiSelectItem;
