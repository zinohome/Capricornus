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
   * The additional CSS class names for the container <div> of the element.
   */
  containerClass?: string;
  /**
   * `true` if the modal should be open.
   */

  /**
   * `true` if the modal should be open.
   */
  open?: boolean;
  /**
   * Modal size.
   */

  /**
   * Modal size.
   */
  size?: string;
  /**
   * The event handler for the custom event fired before this modal is being closed upon a user gesture.
   * Cancellation of this event stops the user-initiated action of closing this modal.
   */

  /**
   * The event handler for the custom event fired before this modal is being closed upon a user gesture.
   * Cancellation of this event stops the user-initiated action of closing this modal.
   */
  onBeforeClose?: (event: CustomEvent) => void;
  /**
   * The event handler for the custom event fired after this modal is closed upon a user gesture.
   */

  /**
   * The event handler for the custom event fired after this modal is closed upon a user gesture.
   */
  onClose?: (event: CustomEvent) => void;
  [prop: string]: unknown;
}
/**
 * Modal.
 * @element bx-modal
 * @csspart dialog The dialog.
 * @fires bx-modal-beingclosed
 *   The custom event fired before this modal is being closed upon a user gesture.
 *   Cancellation of this event stops the user-initiated action of closing this modal.
 * @fires bx-modal-closed - The custom event fired after this modal is closed upon a user gesture.
 */

/**
 * Modal.
 * @element bx-modal
 * @csspart dialog The dialog.
 * @fires bx-modal-beingclosed
 *   The custom event fired before this modal is being closed upon a user gesture.
 *   Cancellation of this event stops the user-initiated action of closing this modal.
 * @fires bx-modal-closed - The custom event fired after this modal is closed upon a user gesture.
 */
declare class BXModal extends Component<ComponentProps> {}

export default BXModal;
