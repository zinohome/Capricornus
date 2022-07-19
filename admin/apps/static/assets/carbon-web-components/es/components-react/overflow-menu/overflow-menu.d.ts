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
   * The color scheme.
   */
  colorScheme?: string;
  /**
   * `true` if this overflow menu should be disabled.
   */

  /**
   * `true` if this overflow menu should be disabled.
   */
  disabled?: boolean;
  /**
   * `true` if the dropdown should be open.
   */

  /**
   * `true` if the dropdown should be open.
   */
  open?: boolean;
  /**
   * Overflow menu size.
   */

  /**
   * Overflow menu size.
   */
  size?: string;
  [prop: string]: unknown;
}
/**
 * Overflow menu.
 * @element bx-overflow-menu
 * @slot icon - The icon for the trigger button.
 */

/**
 * Overflow menu.
 * @element bx-overflow-menu
 * @slot icon - The icon for the trigger button.
 */
declare class BXOverflowMenu extends Component<ComponentProps> {}

export default BXOverflowMenu;
