/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component } from 'react';
import { ComponentProps as ParentComponentProps } from './inline-notification';
export interface ComponentProps extends ParentComponentProps {
  /**
   * The caption.
   */
  caption?: string;
}
/**
 * Toast notification.
 * @element bx-toast-notification
 * @slot subtitle - The subtitle.
 * @slot title - The title.
 * @fires bx-notification-beingclosed
 *   The custom event fired before this notification is being closed upon a user gesture.
 *   Cancellation of this event stops the user-initiated action of closing this notification.
 * @fires bx-notification-closed - The custom event fired after this notification is closed upon a user gesture.
 */

/**
 * Toast notification.
 * @element bx-toast-notification
 * @slot subtitle - The subtitle.
 * @slot title - The title.
 * @fires bx-notification-beingclosed
 *   The custom event fired before this notification is being closed upon a user gesture.
 *   Cancellation of this event stops the user-initiated action of closing this notification.
 * @fires bx-notification-closed - The custom event fired after this notification is closed upon a user gesture.
 */
declare class BXToastNotification extends Component<ComponentProps> {}

export default BXToastNotification;
