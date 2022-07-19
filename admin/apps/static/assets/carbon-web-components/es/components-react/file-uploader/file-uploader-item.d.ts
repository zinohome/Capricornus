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
   * The `aria-label` attribute for the icon to delete this file uploader item.
   */
  deleteAssistiveText?: string;
  /**
   * Controls the invalid state and visibility of the `validityMessage`.
   */

  /**
   * Controls the invalid state and visibility of the `validityMessage`.
   */
  invalid?: boolean;
  /**
   * The size of this file uploader item.
   */

  /**
   * The size of this file uploader item.
   */
  size?: string;
  /**
   * The state of this file uploader item.
   */

  /**
   * The state of this file uploader item.
   */
  state?: string;
  /**
   * The `aria-label` attribute for the icon to indicate file uploading is in progress.
   */

  /**
   * The `aria-label` attribute for the icon to indicate file uploading is in progress.
   */
  uploadingAssistiveText?: string;
  /**
   * The `aria-label` attribute for the icon to indicate file uploading is complete.
   */

  /**
   * The `aria-label` attribute for the icon to indicate file uploading is complete.
   */
  uploadedAssistiveText?: string;
  /**
   * The validity message.
   */

  /**
   * The validity message.
   */
  validityMessage?: string;
  /**
   * The event handler for the custom event fired before this file uplodaer item is being deleted upon a user gesture.
   * Cancellation of this event stops the user-initiated action of deleting this file uploader item.
   */

  /**
   * The event handler for the custom event fired before this file uplodaer item is being deleted upon a user gesture.
   * Cancellation of this event stops the user-initiated action of deleting this file uploader item.
   */
  onBeforeDelete?: (event: CustomEvent) => void;
  /**
   * The event handler for the custom event fired after this file uplodaer item is deleted upon a user gesture.
   */

  /**
   * The event handler for the custom event fired after this file uplodaer item is deleted upon a user gesture.
   */
  onDelete?: (event: CustomEvent) => void;
  [prop: string]: unknown;
}
/**
 * File uploader item.
 * @element bx-file-uploader-item
 * @slot validity-message The validity message.
 * @slot validity-message-supplement The supplemental validity message.
 * @fires bx-file-uploader-item-beingdeleted
 *   The custom event fired before this file uploader item is being deleted upon a user gesture.
 *   Cancellation of this event stops the user-initiated action of deleting this file uploader item.
 * @fires bx-file-uploader-item-deleted - The custom event fired after this file uploader item is deleted upon a user gesture.
 */

/**
 * File uploader item.
 * @element bx-file-uploader-item
 * @slot validity-message The validity message.
 * @slot validity-message-supplement The supplemental validity message.
 * @fires bx-file-uploader-item-beingdeleted
 *   The custom event fired before this file uploader item is being deleted upon a user gesture.
 *   Cancellation of this event stops the user-initiated action of deleting this file uploader item.
 * @fires bx-file-uploader-item-deleted - The custom event fired after this file uploader item is deleted upon a user gesture.
 */
declare class BXFileUploaderItem extends Component<ComponentProps> {}

export default BXFileUploaderItem;
