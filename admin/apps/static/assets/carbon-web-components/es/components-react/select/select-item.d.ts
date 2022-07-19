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
   * The label. If this is not specified, the child text content is used.
   */

  /**
   * The label. If this is not specified, the child text content is used.
   */
  label?: string;
  /**
   * `true` to select this option.
   */

  /**
   * `true` to select this option.
   */
  selected?: boolean;
  /**
   * The value.
   */

  /**
   * The value.
   */
  value?: string;
  [prop: string]: unknown;
}
/**
 * An option in select box.
 * @element bx-select-item
 */

/**
 * An option in select box.
 * @element bx-select-item
 */
declare class BXSelectItem extends Component<ComponentProps> {}

export default BXSelectItem;
