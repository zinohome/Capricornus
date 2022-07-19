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
   * `true` if the action is danger.
   */
  danger?: boolean;
  /**
   * `true` if the overflow menu item should be disabled.
   */

  /**
   * `true` if the overflow menu item should be disabled.
   */
  disabled?: boolean;
  /**
   * The link href of the overflow menu item.
   */

  /**
   * The link href of the overflow menu item.
   */
  href?: string;
  [prop: string]: unknown;
}
/**
 * Overflow menu item.
 * @element bx-overflow-menu-item
 */

/**
 * Overflow menu item.
 * @element bx-overflow-menu-item
 */
declare class BXOverflowMenuItem extends Component<ComponentProps> {}

export default BXOverflowMenuItem;
