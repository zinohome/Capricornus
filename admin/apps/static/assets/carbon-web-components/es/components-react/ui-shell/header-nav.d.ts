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
   * The `aria-label` attribute for the menu bar UI.
   */
  menuBarLabel?: string;
  [prop: string]: unknown;
}
/**
 * Header.
 * @element bx-header-nav
 * @csspart menu-body The menu body.
 * @csspart divider The divider.
 */

/**
 * Header.
 * @element bx-header-nav
 * @csspart menu-body The menu body.
 * @csspart divider The divider.
 */
declare class BXHeaderNav extends Component<ComponentProps> {}

export default BXHeaderNav;
