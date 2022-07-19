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
   * The value of the selected item.
   */
  value?: string;
  /**
   * Content switcher size.
   */

  /**
   * Content switcher size.
   */
  size?: string;
  /**
   * The event handler for the custom event fired before a content switcher item is selected upon a user gesture.
   * Cancellation of this event stops changing the user-initiated selection.
   */

  /**
   * The event handler for the custom event fired before a content switcher item is selected upon a user gesture.
   * Cancellation of this event stops changing the user-initiated selection.
   */
  onBeforeSelect?: (event: CustomEvent) => void;
  /**
   * The event handler for the custom event fired after a a content switcher item is selected upon a user gesture.
   */

  /**
   * The event handler for the custom event fired after a a content switcher item is selected upon a user gesture.
   */
  onSelect?: (event: CustomEvent) => void;
  [prop: string]: unknown;
}
/**
 * Content switcher.
 * @element bx-content-switcher
 * @fires bx-content-switcher-beingselected
 *   The custom event fired before a content switcher item is selected upon a user gesture.
 *   Cancellation of this event stops changing the user-initiated selection.
 * @fires bx-content-switcher-selected - The custom event fired after a a content switcher item is selected upon a user gesture.
 */

/**
 * Content switcher.
 * @element bx-content-switcher
 * @fires bx-content-switcher-beingselected
 *   The custom event fired before a content switcher item is selected upon a user gesture.
 *   Cancellation of this event stops changing the user-initiated selection.
 * @fires bx-content-switcher-selected - The custom event fired after a a content switcher item is selected upon a user gesture.
 */
declare class BXContentSwitcher extends Component<ComponentProps> {}

export default BXContentSwitcher;
