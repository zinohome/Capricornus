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
   * `true` if the menu item should be active.
   */
  active?: boolean;
  /**
   * Link `href`.
   */

  /**
   * Link `href`.
   */
  href?: string;
  /**
   * The title.
   */

  /**
   * The title.
   */
  title?: string;
  [prop: string]: unknown;
}
/**
 * Side nav menu item.
 * @element bx-side-nav-menu-item
 * @csspart link The link.
 * @csspart title The title.
 */

/**
 * Side nav menu item.
 * @element bx-side-nav-menu-item
 * @csspart link The link.
 * @csspart title The title.
 */
declare class BXSideNavMenuItem extends Component<ComponentProps> {}

export default BXSideNavMenuItem;
