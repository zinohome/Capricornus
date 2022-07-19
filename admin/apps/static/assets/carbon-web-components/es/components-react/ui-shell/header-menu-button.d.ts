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
   * `true` if the button should represent its active state.
   */
  active?: boolean;
  /**
   * The `aria-label` attribute for the button in its active state.
   */

  /**
   * The `aria-label` attribute for the button in its active state.
   */
  buttonLabelActive?: string;
  /**
   * The `aria-label` attribute for the button in its inactive state.
   */

  /**
   * The `aria-label` attribute for the button in its inactive state.
   */
  buttonLabelInactive?: string;
  /**
   * Collapse mode of the side nav.
   */

  /**
   * Collapse mode of the side nav.
   */
  collapseMode?: string;
  /**
   * `true` if the button should be disabled.
   */

  /**
   * `true` if the button should be disabled.
   */
  disabled?: boolean;
  /**
   * Usage mode of the side nav.
   */

  /**
   * Usage mode of the side nav.
   */
  usageMode?: string;
  /**
   * The event handler for the custom event fired after this header menu button is toggled upon a user gesture.
   */

  /**
   * The event handler for the custom event fired after this header menu button is toggled upon a user gesture.
   */
  onToggle?: (event: CustomEvent) => void;
  [prop: string]: unknown;
}
/**
 * The trigger button for side nav in header nav.
 * @element bx-header-menu-button
 * @csspart button The button.
 * @csspart toggle-icon The toggle icon.
 * @fires bx-header-menu-button-toggled - The custom event fired after this header menu button is toggled upon a user gesture.
 */

/**
 * The trigger button for side nav in header nav.
 * @element bx-header-menu-button
 * @csspart button The button.
 * @csspart toggle-icon The toggle icon.
 * @fires bx-header-menu-button-toggled - The custom event fired after this header menu button is toggled upon a user gesture.
 */
declare class BXHeaderMenuButton extends Component<ComponentProps> {}

export default BXHeaderMenuButton;
