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
   * `true` if the menu has active menu item.
   */
  active?: boolean;
  /**
   * `true` if the menu should be open.
   */

  /**
   * `true` if the menu should be open.
   */
  expanded?: boolean;
  /**
   * `true` if the menu should be forced collapsed upon side nav's expanded state.
   */

  /**
   * `true` if the menu should be forced collapsed upon side nav's expanded state.
   */
  forceCollapsed?: boolean;
  /**
   * The title text.
   */

  /**
   * The title text.
   */
  title?: string;
  /**
   * The event handler for the custom event fired before this side nav menu is being toggled upon a user gesture.
   * Cancellation of this event stops the user-initiated action of toggling this side nav menu.
   */

  /**
   * The event handler for the custom event fired before this side nav menu is being toggled upon a user gesture.
   * Cancellation of this event stops the user-initiated action of toggling this side nav menu.
   */
  onBeforeToggle?: (event: CustomEvent) => void;
  /**
   * The event handler for the custom event fired after this side nav menu is toggled upon a user gesture.
   */

  /**
   * The event handler for the custom event fired after this side nav menu is toggled upon a user gesture.
   */
  onToggle?: (event: CustomEvent) => void;
  [prop: string]: unknown;
}
/**
 * Side nav menu.
 * @element bx-side-nav-menu
 * @slot title-icon - The icon.
 * @csspart expando The expando.
 * @csspart expando-icon-container The expando icon container.
 * @csspart expando-icon The expando icon.
 * @csspart title The title.
 * @csspart title-icon-container The title icon container.
 * @csspart menu-body The menu body.
 */

/**
 * Side nav menu.
 * @element bx-side-nav-menu
 * @slot title-icon - The icon.
 * @csspart expando The expando.
 * @csspart expando-icon-container The expando icon container.
 * @csspart expando-icon The expando icon.
 * @csspart title The title.
 * @csspart title-icon-container The title icon container.
 * @csspart menu-body The menu body.
 */
declare class BXSideNavMenu extends Component<ComponentProps> {}

export default BXSideNavMenu;
