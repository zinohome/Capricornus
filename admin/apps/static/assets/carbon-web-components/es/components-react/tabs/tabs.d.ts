/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component } from 'react';
import { ComponentProps as ParentComponentProps } from '../content-switcher/content-switcher';
export interface ComponentProps extends ParentComponentProps {
  /**
   * The color scheme.
   */
  colorScheme?: string;
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
   * The content of the trigger button for narrow mode.
   */

  /**
   * The content of the trigger button for narrow mode.
   */
  triggerContent?: string;
  /**
   * Tabs type.
   */

  /**
   * Tabs type.
   */
  type?: string;
  /**
   * The event handler for the custom event fired before a tab is selected upon a user gesture.
   * Cancellation of this event stops changing the user-initiated selection.
   */

  /**
   * The event handler for the custom event fired before a tab is selected upon a user gesture.
   * Cancellation of this event stops changing the user-initiated selection.
   */
  onBeforeSelect?: (event: CustomEvent) => void;
  /**
   * The event handler for the custom event fired after a a tab is selected upon a user gesture.
   */

  /**
   * The event handler for the custom event fired after a a tab is selected upon a user gesture.
   */
  onSelect?: (event: CustomEvent) => void;
}
/**
 * Tabs.
 * @element bx-tabs
 * @fires bx-tabs-beingselected
 *   The custom event fired before a tab is selected upon a user gesture.
 *   Cancellation of this event stops changing the user-initiated selection.
 * @fires bx-tabs-selected - The custom event fired after a a tab is selected upon a user gesture.
 */

/**
 * Tabs.
 * @element bx-tabs
 * @fires bx-tabs-beingselected
 *   The custom event fired before a tab is selected upon a user gesture.
 *   Cancellation of this event stops changing the user-initiated selection.
 * @fires bx-tabs-selected - The custom event fired after a a tab is selected upon a user gesture.
 */
declare class BXTabs extends Component<ComponentProps> {}

export default BXTabs;
