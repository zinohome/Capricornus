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
   * `true` to expand this expandable tile.
   */

  /**
   * `true` to expand this expandable tile.
   */
  expanded?: boolean;
  /**
   * The event handler for the custom event fired before the expanded state is changed upon a user gesture.
   * Cancellation of this event stops changing the user-initiated change in expanded state.
   */

  /**
   * The event handler for the custom event fired before the expanded state is changed upon a user gesture.
   * Cancellation of this event stops changing the user-initiated change in expanded state.
   */
  onBeforeToggle?: (event: CustomEvent) => void;
  /**
   * The event handler for the custom event fired after a the expanded state is changed upon a user gesture.
   */

  /**
   * The event handler for the custom event fired after a the expanded state is changed upon a user gesture.
   */
  onToggle?: (event: CustomEvent) => void;
  [prop: string]: unknown;
}
/**
 * Expandable tile.
 * @element bx-expandable-tile
 * @fires bx-expandable-tile-beingtoggled
 *   The custom event fired before the expanded state is changed upon a user gesture.
 *   Cancellation of this event stops changing the user-initiated change in expanded state.
 * @fires bx-expandable-tile-toggled - The custom event fired after a the expanded state is changed upon a user gesture.
 */

/**
 * Expandable tile.
 * @element bx-expandable-tile
 * @fires bx-expandable-tile-beingtoggled
 *   The custom event fired before the expanded state is changed upon a user gesture.
 *   Cancellation of this event stops changing the user-initiated change in expanded state.
 * @fires bx-expandable-tile-toggled - The custom event fired after a the expanded state is changed upon a user gesture.
 */
declare class BXExpandableTile extends Component<ComponentProps> {}

export default BXExpandableTile;
