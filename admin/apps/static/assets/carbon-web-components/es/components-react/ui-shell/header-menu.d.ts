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
   * `true` if the menu should be expanded.
   */
  expanded?: boolean;
  /**
   * The content of the trigger button.
   */

  /**
   * The content of the trigger button.
   */
  triggerContent?: string;
  /**
   * The `aria-label` attribute for the menu UI.
   */

  /**
   * The `aria-label` attribute for the menu UI.
   */
  menuLabel?: string;
  [prop: string]: unknown;
}
/**
 * Header menu.
 * @element bx-header-menu
 * @csspart trigger The trigger button.
 * @csspart trigger-icon The trigger button icon.
 * @csspart menu-body The menu body.
 */

/**
 * Header menu.
 * @element bx-header-menu
 * @csspart trigger The trigger button.
 * @csspart trigger-icon The trigger button icon.
 * @csspart menu-body The menu body.
 */
declare class BXHeaderMenu extends Component<ComponentProps> {}

export default BXHeaderMenu;
