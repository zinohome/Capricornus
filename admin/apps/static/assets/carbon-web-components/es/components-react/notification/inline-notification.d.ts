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
   * The a11y text for the close button.
   */
  closeButtonLabel?: string;
  /**
   * `true` to hide the close button.
   */

  /**
   * `true` to hide the close button.
   */
  hideCloseButton?: boolean;
  /**
   * The a11y text for the icon.
   */

  /**
   * The a11y text for the icon.
   */
  iconLabel?: string;
  /**
   * Notification kind.
   */

  /**
   * Notification kind.
   */
  kind?: string;
  /**
   * Low contrast mode
   */

  /**
   * Low contrast mode
   */
  lowContrast?: boolean;
  /**
   * `true` if the notification should be open.
   */

  /**
   * `true` if the notification should be open.
   */
  open?: boolean;
  /**
   * Notification time in ms until gets closed.
   */

  /**
   * Notification time in ms until gets closed.
   */
  timeout?: number;
  /**
   * The subtitle.
   */

  /**
   * The subtitle.
   */
  subtitle?: string;
  /**
   * The title.
   */

  /**
   * The title.
   */
  title?: string;
  /**
   * The event handler for the custom event fired before this notification is being closed upon a user gesture.
   * Cancellation of this event stops the user-initiated action of closing this notification.
   */

  /**
   * The event handler for the custom event fired before this notification is being closed upon a user gesture.
   * Cancellation of this event stops the user-initiated action of closing this notification.
   */
  onBeforeClose?: (event: CustomEvent) => void;
  /**
   * The event handler for the custom event fired after this notification is closed upon a user gesture.
   */

  /**
   * The event handler for the custom event fired after this notification is closed upon a user gesture.
   */
  onClose?: (event: CustomEvent) => void;
  [prop: string]: unknown;
}
/**
 * Inline notification.
 * @element bx-inline-notification
 * @slot subtitle - The subtitle.
 * @slot title - The title.
 * @fires bx-notification-beingclosed
 *   The custom event fired before this notification is being closed upon a user gesture.
 *   Cancellation of this event stops the user-initiated action of closing this notification.
 * @fires bx-notification-closed - The custom event fired after this notification is closed upon a user gesture.
 */

/**
 * Inline notification.
 * @element bx-inline-notification
 * @slot subtitle - The subtitle.
 * @slot title - The title.
 * @fires bx-notification-beingclosed
 *   The custom event fired before this notification is being closed upon a user gesture.
 *   Cancellation of this event stops the user-initiated action of closing this notification.
 * @fires bx-notification-closed - The custom event fired after this notification is closed upon a user gesture.
 */
declare class BXInlineNotification extends Component<ComponentProps> {}

export default BXInlineNotification;
