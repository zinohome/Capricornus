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
  filterable?: boolean;
  /**
   * The `aria-label` attribute for the icon to clear selection.
   */

  /**
   * The `aria-label` attribute for the icon to clear selection.
   */
  clearSelectionLabel?: string;
  /**
   * An assistive text for screen reader to announce, telling that an item is unselected.
   */

  /**
   * An assistive text for screen reader to announce, telling that an item is unselected.
   */
  unselectedItemAssistiveText?: string;
  /**
   * An assistive text for screen reader to announce, telling that all items are unselected.
   */

  /**
   * An assistive text for screen reader to announce, telling that all items are unselected.
   */
  unselectedAllAssistiveText?: string;
  /**
   * The event handler for the custom event fired before this multi select item is being toggled upon a user gesture.
   * Cancellation of this event stops the user-initiated action of toggling this multi select item.
   */

  /**
   * The event handler for the custom event fired before this multi select item is being toggled upon a user gesture.
   * Cancellation of this event stops the user-initiated action of toggling this multi select item.
   */
  onBeforeToggle?: (event: CustomEvent) => void;
  /**
   * The event handler for the custom event fired after this multi select item is toggled upon a user gesture.
   */

  /**
   * The event handler for the custom event fired after this multi select item is toggled upon a user gesture.
   */
  onToggle?: (event: CustomEvent) => void;
  /**
   * The event handler for the custom event fired before a multi select item is selected upon a user gesture.
   * Cancellation of this event stops changing the user-initiated selection.
   */

  /**
   * The event handler for the custom event fired before a multi select item is selected upon a user gesture.
   * Cancellation of this event stops changing the user-initiated selection.
   */
  onBeforeSelect?: (event: CustomEvent) => void;
  /**
   * The event handler for the custom event fired after a a multi select item is selected upon a user gesture.
   */

  /**
   * The event handler for the custom event fired after a a multi select item is selected upon a user gesture.
   */
  onSelect?: (event: CustomEvent) => void;
}
/**
 * Multi select.
 * @element bx-multi-select
 * @fires bx-multi-select-beingselected
 *   The custom event fired before a multi select item is selected upon a user gesture.
 *   Cancellation of this event stops changing the user-initiated selection.
 * @fires bx-multi-select-selected - The custom event fired after a multi select item is selected upon a user gesture.
 * @fires bx-multi-select-beingtoggled
 *   The custom event fired before the open state of this multi select is toggled upon a user gesture.
 *   Cancellation of this event stops the user-initiated toggling.
 * @fires bx-multi-select-toggled
 *   The custom event fired after the open state of this multi select is toggled upon a user gesture.
 */

/**
 * Multi select.
 * @element bx-multi-select
 * @fires bx-multi-select-beingselected
 *   The custom event fired before a multi select item is selected upon a user gesture.
 *   Cancellation of this event stops changing the user-initiated selection.
 * @fires bx-multi-select-selected - The custom event fired after a multi select item is selected upon a user gesture.
 * @fires bx-multi-select-beingtoggled
 *   The custom event fired before the open state of this multi select is toggled upon a user gesture.
 *   Cancellation of this event stops the user-initiated toggling.
 * @fires bx-multi-select-toggled
 *   The custom event fired after the open state of this multi select is toggled upon a user gesture.
 */
declare class BXMultiSelect extends Component<ComponentProps> {}

export default BXMultiSelect;
