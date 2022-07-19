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
   * `true` to disable this option.
   */
  disabled?: boolean;
  /**
   * The label.
   */

  /**
   * The label.
   */
  label?: string;
  [prop: string]: unknown;
}
/**
 * An option group in select box.
 * @element bx-select-item-group
 */

/**
 * An option group in select box.
 * @element bx-select-item-group
 */
declare class BXSelectItemGroup extends Component<ComponentProps> {}

export default BXSelectItemGroup;
