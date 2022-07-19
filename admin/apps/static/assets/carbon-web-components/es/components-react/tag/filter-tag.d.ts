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
   * Text to show on filter tag "clear" buttons. Corresponds to the attribute with the same name
   */
  title?: string;
  /**
   * `true` if the tag should be disabled
   */

  /**
   * `true` if the tag should be disabled
   */
  disabled?: boolean;
  /**
   * `true` if the tag should be open.
   */

  /**
   * `true` if the tag should be open.
   */
  open?: boolean;
  /**
   * The size of the tag.
   */

  /**
   * The size of the tag.
   */
  size?: string;
  /**
   * The type of the tag.
   */

  /**
   * The type of the tag.
   */
  type?: string;
  /**
   * The event handler for the custom event fired before this tag is being closed upon a user gesture.
   * Cancellation of this event stops the user-initiated action of closing this tag.
   */

  /**
   * The event handler for the custom event fired before this tag is being closed upon a user gesture.
   * Cancellation of this event stops the user-initiated action of closing this tag.
   */
  onBeforeClose?: (event: CustomEvent) => void;
  /**
   * The event handler for the custom event fired after this tag is closed upon a user gesture.
   */

  /**
   * The event handler for the custom event fired after this tag is closed upon a user gesture.
   */
  onClose?: (event: CustomEvent) => void;
  [prop: string]: unknown;
}
/**
 * Filter tag.
 * @element bx-filter-tag
 */

/**
 * Filter tag.
 * @element bx-filter-tag
 */
declare class BXFilterTag extends Component<ComponentProps> {}

export default BXFilterTag;
