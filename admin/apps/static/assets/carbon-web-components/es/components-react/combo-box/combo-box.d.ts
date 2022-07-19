/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component } from 'react';
import { ComponentProps as ParentComponentProps } from '../dropdown/dropdown';
export interface ComponentProps extends ParentComponentProps {
  /**
   * The `aria-label` attribute for the icon to clear selection.
   */
  clearSelectionLabel?: string;
  /**
   * The `aria-label` attribute for the `<input>` for filtering.
   */

  /**
   * The `aria-label` attribute for the `<input>` for filtering.
   */
  inputLabel?: string;
  /**
   * The custom item matching callback.
   */

  /**
   * The custom item matching callback.
   */
  itemMatches?: string;
  /**
   * The event handler for the custom event fired before this combo box item is being toggled upon a user gesture.
   * Cancellation of this event stops the user-initiated action of toggling this combo box item.
   */

  /**
   * The event handler for the custom event fired before this combo box item is being toggled upon a user gesture.
   * Cancellation of this event stops the user-initiated action of toggling this combo box item.
   */
  onBeforeToggle?: (event: CustomEvent) => void;
  /**
   * The event handler for the custom event fired after this combo box item is toggled upon a user gesture.
   */

  /**
   * The event handler for the custom event fired after this combo box item is toggled upon a user gesture.
   */
  onToggle?: (event: CustomEvent) => void;
  /**
   * The event handler for the custom event fired before a combo box item is selected upon a user gesture.
   * Cancellation of this event stops changing the user-initiated selection.
   */

  /**
   * The event handler for the custom event fired before a combo box item is selected upon a user gesture.
   * Cancellation of this event stops changing the user-initiated selection.
   */
  onBeforeSelect?: (event: CustomEvent) => void;
  /**
   * The event handler for the custom event fired after a a combo box item is selected upon a user gesture.
   */

  /**
   * The event handler for the custom event fired after a a combo box item is selected upon a user gesture.
   */
  onSelect?: (event: CustomEvent) => void;
}
/**
 * Combo box.
 * @element bx-combo-box
 * @fires bx-combo-box-beingselected
 *   The custom event fired before a combo box item is selected upon a user gesture.
 *   Cancellation of this event stops changing the user-initiated selection.
 * @fires bx-combo-box-beingtoggled
 *   The custom event fired before the open state of this combo box is toggled upon a user gesture.
 *   Cancellation of this event stops the user-initiated toggling.
 * @fires bx-combo-box-selected - The custom event fired after a combo box item is selected upon a user gesture.
 * @fires bx-combo-box-toggled - The custom event fired after the open state of this combo box is toggled upon a user gesture.
 */

/**
 * Combo box.
 * @element bx-combo-box
 * @fires bx-combo-box-beingselected
 *   The custom event fired before a combo box item is selected upon a user gesture.
 *   Cancellation of this event stops changing the user-initiated selection.
 * @fires bx-combo-box-beingtoggled
 *   The custom event fired before the open state of this combo box is toggled upon a user gesture.
 *   Cancellation of this event stops the user-initiated toggling.
 * @fires bx-combo-box-selected - The custom event fired after a combo box item is selected upon a user gesture.
 * @fires bx-combo-box-toggled - The custom event fired after the open state of this combo box is toggled upon a user gesture.
 */
declare class BXComboBox extends Component<ComponentProps> {}

export default BXComboBox;
