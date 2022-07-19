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
   * The helper text.
   */
  helperText?: string;
  /**
   * The label text.
   */

  /**
   * The label text.
   */
  labelText?: string;
  [prop: string]: unknown;
}
/**
 * The shell UI for file uploader.
 * @element bx-file-uploader
 * @slot helper-text The helper text.
 * @slot label-text The label text.
 */

/**
 * The shell UI for file uploader.
 * @element bx-file-uploader
 * @slot helper-text The helper text.
 * @slot label-text The label text.
 */
declare class BXFileUploader extends Component<ComponentProps> {}

export default BXFileUploader;
