/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component } from 'react';
import { ComponentProps as ParentComponentProps } from '../floating-menu/floating-menu';
export interface ComponentProps extends ParentComponentProps {
  /**
   * How the menu is aligned to the trigger button.
   */
  alignment?: string;
  /**
   * The color scheme.
   */

  /**
   * The color scheme.
   */
  colorScheme?: string;
  /**
   * The menu direction.
   */

  /**
   * The menu direction.
   */
  direction?: string;
  /**
   * `true` if the menu should be open.
   * @private
   */

  /**
   * `true` if the menu should be open.
   * @private
   */
  open?: boolean;
}
/**
 * Overflow menu body.
 * @element bx-overflow-menu-body
 */

/**
 * Overflow menu body.
 * @element bx-overflow-menu-body
 */
declare class BXOverflowMenuBody extends Component<ComponentProps> {}

export default BXOverflowMenuBody;
