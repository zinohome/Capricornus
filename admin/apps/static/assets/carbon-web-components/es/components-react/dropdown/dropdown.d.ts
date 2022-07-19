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
   * `true` if this dropdown should be disabled.
   */

  /**
   * `true` if this dropdown should be disabled.
   */
  disabled?: boolean;
  /**
   * The helper text.
   */

  /**
   * The helper text.
   */
  helperText?: string;
  /**
   * `true` to show the UI of the invalid state.
   */

  /**
   * `true` to show the UI of the invalid state.
   */
  invalid?: boolean;
  /**
   * The label text.
   */

  /**
   * The label text.
   */
  labelText?: string;
  /**
   * Name for the dropdown in the `FormData`
   */

  /**
   * Name for the dropdown in the `FormData`
   */
  name?: string;
  /**
   * `true` if this dropdown should be open.
   */

  /**
   * `true` if this dropdown should be open.
   */
  open?: boolean;
  /**
   * `true` if the value is required.
   */

  /**
   * `true` if the value is required.
   */
  required?: boolean;
  /**
   * The special validity message for `required`.
   */

  /**
   * The special validity message for `required`.
   */
  requiredValidityMessage?: string;
  /**
   * An assistive text for screen reader to announce, telling the open state.
   */

  /**
   * An assistive text for screen reader to announce, telling the open state.
   */
  selectingItemsAssistiveText?: string;
  /**
   * An assistive text for screen reader to announce, telling that an item is selected.
   */

  /**
   * An assistive text for screen reader to announce, telling that an item is selected.
   */
  selectedItemAssistiveText?: string;
  /**
   * Dropdown size.
   */

  /**
   * Dropdown size.
   */
  size?: string;
  /**
   * The `aria-label` attribute for the UI indicating the closed state.
   */

  /**
   * The `aria-label` attribute for the UI indicating the closed state.
   */
  toggleLabelClosed?: string;
  /**
   * The `aria-label` attribute for the UI indicating the open state.
   */

  /**
   * The `aria-label` attribute for the UI indicating the open state.
   */
  toggleLabelOpen?: string;
  /**
   * The content of the trigger button.
   */

  /**
   * The content of the trigger button.
   */
  triggerContent?: string;
  /**
   * `true` if this dropdown should use the inline UI variant.
   */

  /**
   * `true` if this dropdown should use the inline UI variant.
   */
  type?: string;
  /**
   * The validity message.
   */

  /**
   * The validity message.
   */
  validityMessage?: string;
  /**
   * The value of the selected item.
   */

  /**
   * The value of the selected item.
   */
  value?: string;
  /**
   * The event handler for the custom event fired before a dropdown item is selected upon a user gesture.
   * Cancellation of this event stops changing the user-initiated selection.
   */

  /**
   * The event handler for the custom event fired before a dropdown item is selected upon a user gesture.
   * Cancellation of this event stops changing the user-initiated selection.
   */
  onBeforeSelect?: (event: CustomEvent) => void;
  /**
   * The event handler for the custom event fired after a a dropdown item is selected upon a user gesture.
   */

  /**
   * The event handler for the custom event fired after a a dropdown item is selected upon a user gesture.
   */
  onSelect?: (event: CustomEvent) => void;
  /**
   * The event handler for the custom event fired before this dropdown item is being toggled upon a user gesture.
   * Cancellation of this event stops the user-initiated action of toggling this dropdown item.
   */

  /**
   * The event handler for the custom event fired before this dropdown item is being toggled upon a user gesture.
   * Cancellation of this event stops the user-initiated action of toggling this dropdown item.
   */
  onBeforeToggle?: (event: CustomEvent) => void;
  /**
   * The event handler for the custom event fired after this dropdown item is toggled upon a user gesture.
   */

  /**
   * The event handler for the custom event fired after this dropdown item is toggled upon a user gesture.
   */
  onToggle?: (event: CustomEvent) => void;
  [prop: string]: unknown;
}
/**
 * Dropdown.
 * @element bx-dropdown
 * @csspart label-text The label text.
 * @csspart helper-text The helper text.
 * @csspart trigger-button The trigger button.
 * @csspart menu-body The menu body.
 * @csspart validity-message The validity message.
 * @fires bx-dropdown-beingselected
 *   The custom event fired before a dropdown item is selected upon a user gesture.
 *   Cancellation of this event stops changing the user-initiated selection.
 * @fires bx-dropdown-beingtoggled
 *   The custom event fired before the open state of this dropdown is toggled upon a user gesture.
 *   Cancellation of this event stops the user-initiated toggling.
 * @fires bx-dropdown-selected - The custom event fired after a dropdown item is selected upon a user gesture.
 * @fires bx-dropdown-toggled - The custom event fired after the open state of this dropdown is toggled upon a user gesture.
 */

/**
 * Dropdown.
 * @element bx-dropdown
 * @csspart label-text The label text.
 * @csspart helper-text The helper text.
 * @csspart trigger-button The trigger button.
 * @csspart menu-body The menu body.
 * @csspart validity-message The validity message.
 * @fires bx-dropdown-beingselected
 *   The custom event fired before a dropdown item is selected upon a user gesture.
 *   Cancellation of this event stops changing the user-initiated selection.
 * @fires bx-dropdown-beingtoggled
 *   The custom event fired before the open state of this dropdown is toggled upon a user gesture.
 *   Cancellation of this event stops the user-initiated toggling.
 * @fires bx-dropdown-selected - The custom event fired after a dropdown item is selected upon a user gesture.
 * @fires bx-dropdown-toggled - The custom event fired after the open state of this dropdown is toggled upon a user gesture.
 */
declare class BXDropdown extends Component<ComponentProps> {}

export default BXDropdown;
