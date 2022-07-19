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
   * The file types the file input should accept, separated by space.
   */
  accept?: string;
  /**
   * `true` if this drop container should be disabled.
   */

  /**
   * `true` if this drop container should be disabled.
   */
  disabled?: boolean;
  /**
   * `true` if this drop container should accept more than one files at once.
   * Note that even with `false` set here, user _can_ select multiple files one by one.
   */

  /**
   * `true` if this drop container should accept more than one files at once.
   * Note that even with `false` set here, user _can_ select multiple files one by one.
   */
  multiple?: boolean;
  /**
   * The shadow DOM slot to put this drop container in.
   */

  /**
   * The shadow DOM slot to put this drop container in.
   */
  slot?: string;
  /**
   * The event handler for the custom event fired when there is a user gesture to select files to upload.
   */

  /**
   * The event handler for the custom event fired when there is a user gesture to select files to upload.
   */
  onChange?: (event: CustomEvent) => void;
  [prop: string]: unknown;
}
/**
 * File drop container.
 * @element bx-file-drop-container
 * @fires bx-file-drop-container-changed The custom event fired when there is a user gesture to select files to upload.
 */

/**
 * File drop container.
 * @element bx-file-drop-container
 * @fires bx-file-drop-container-changed The custom event fired when there is a user gesture to select files to upload.
 */
declare class BXFileDropContainer extends Component<ComponentProps> {}

export default BXFileDropContainer;
